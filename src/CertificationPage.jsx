import {withDetailEntrance} from './detailEntrance';
import React from 'react';
import {withMobileNavigation} from './mobileNavigation';
import reference from './certReference.html?raw';
export function CertificationPage(){
 const html=reference.replace(/__ASSET_([\w.-]+)__/g,(_,name)=>window.__embeddedAssets?.['/assets/'+name] || new URL(import.meta.env.BASE_URL+'assets/'+name,window.location.href).href);
 return <iframe title="AI办公认证详情" srcDoc={withDetailEntrance(withMobileNavigation(html,'certification'),'certification')} style={{display:'block',width:'100%',height:'100vh',border:0,background:'#f7f8fa'}}/>;
}
