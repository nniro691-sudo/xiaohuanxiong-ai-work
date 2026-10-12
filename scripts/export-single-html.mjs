import { build } from 'vite';
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
const mime={'.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2'};
const assets={};
const embeddedVideo='data:video/mp4;base64,'+(await readFile('public/media/course-demo.mp4')).toString('base64');
for(const name of await readdir('public/assets')){
 const ext=path.extname(name);
 if(mime[ext]) assets['/assets/'+name]=`data:${mime[ext]};base64,${(await readFile('public/assets/'+name)).toString('base64')}`;
}
const result=await build({build:{write:false},plugins:[{name:'standalone-assets',enforce:'pre',transform(code,id){if(id.endsWith('/src/App.jsx')) return code.replace(/src=\{(A\+[^}]+)\}/g,'src={window.__embeddedAssets[$1]}');}}]});
const output=(Array.isArray(result)?result[0]:result).output;
let html=await readFile('dist/client/index.html','utf8');
const js=output.find(x=>x.type==='chunk'&&x.isEntry).code;
let css=output.filter(x=>x.type==='asset'&&x.fileName.endsWith('.css')).map(x=>x.source).join('\n');
const cssAssets=new Map();
css=css.replace(/url\((['"]?)(\/assets\/[^)'"\s]+)\1\)/g,(whole,q,url)=>assets[url]?(cssAssets.set(url,cssAssets.get(url)??`--embedded-${cssAssets.size}`),`var(${cssAssets.get(url)})`):whole);
// Dynamic image filenames are resolved from this embedded map without fetching local files.
html=html.replace(/<script[^>]+src="[^"]+"[^>]*><\/script>/g,'').replace(/<link[^>]+rel="stylesheet"[^>]*>/g,'');
html=html.replace(/href="(\/assets\/[^" ]+)"/g,(whole,url)=>assets[url]?`href="${assets[url]}"`:whole);
html=html.replace('</head>',()=>`<style>${css}</style></head>`);
html=html.replace('</body>',()=>`<script>window.__embeddedVideo=${JSON.stringify(embeddedVideo)};window.__embeddedAssets=${JSON.stringify(assets).replace(/</g,'\\u003c')};${JSON.stringify([...cssAssets])}.forEach(([url,key])=>document.documentElement.style.setProperty(key,'url("'+window.__embeddedAssets[url]+'")'));</script><script type="module">${js.replace(/<\/script/gi,'<\\/script')}</script></body>`);
await mkdir('exports',{recursive:true});
const dest=path.join(root,'exports/小浣熊AI办公专区-完整独立版.html');
await writeFile(dest,html);
console.log(dest+'\n'+(Buffer.byteLength(html)/1024/1024).toFixed(1)+' MB');
