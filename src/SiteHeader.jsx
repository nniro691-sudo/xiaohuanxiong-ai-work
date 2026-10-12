import React, {useState} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import {bottomNavigation} from './mobileNavigation';
import './mobileNavigation.css';
const links=[['enterprise','百业千企'],['courses','AI办公课程'],['certification','AI办公认证'],['my-certifications','我的认证']];
export function SiteHeader({active=''}){
 const [open,setOpen]=useState(false);
 const asset=name=>window.__embeddedAssets?.['/assets/'+name] || import.meta.env.BASE_URL+'assets/'+name;
 return <><header className="header"><div className="header-inner"><a className="brand" href="#top" aria-label="小浣熊AI办公专区首页"><img src={asset('new-logo-Dez5oS9T.svg')} alt="商汤小浣熊 Raccoon Work"/><span className="brand-cross">×</span><img className="partner-logo" src={asset('logo-51cto.webp')} alt="51CTO"/></a><nav className={open?'nav open':'nav'} aria-label="主导航">{links.map(([id,title])=><a href={'#'+id} key={id} className={active===id?'active':''} aria-current={active===id?'page':undefined} onClick={()=>setOpen(false)}>{title}</a>)}</nav><a className="button button-small" href="https://xiaohuanxiong.com/" target="_blank" rel="noreferrer">体验小浣熊<ArrowUpRight size={15}/></a><button className="menu-button icon-button" onClick={()=>setOpen(!open)} aria-label={open?'关闭导航':'打开导航'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></header><div dangerouslySetInnerHTML={{__html:bottomNavigation(active)}}/></>
}
