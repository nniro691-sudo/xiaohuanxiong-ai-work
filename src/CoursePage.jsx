import {withDetailEntrance} from './detailEntrance';
import React from 'react';
import {withMobileNavigation} from './mobileNavigation';
import reference from './courseReference.html?raw';
export function CoursePage(){
 const document = [0,1,2].reduce((html,index)=>{
  const path = '/assets/course-info-card-white-'+index+'.png';
  const source = window.__embeddedAssets?.[path] || new URL(import.meta.env.BASE_URL+path.slice(1),window.location.href).href;
  return html.replaceAll('__COURSE_CARD_'+index+'__',source);
 },reference);
 return <iframe title="课程播放页" srcDoc={withDetailEntrance(withMobileNavigation(document,'courses'),'courses')} style={{display:'block',width:'100%',height:'100vh',border:0,background:'#f7f8fa'}}/>;
}
