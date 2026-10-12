import {useModuleEntrance} from './useModuleEntrance';
import React,{useEffect,useRef} from 'react';
import {SiteHeader} from './SiteHeader';
export function MyCertificationsPage(){
 useModuleEntrance('.my-cert-heading, .my-cert-table');
 const dialog=useRef(null);
 useEffect(()=>{window.scrollTo(0,0)},[]);
 return <><SiteHeader active="my-certifications"/><main className="my-certifications wrap"><div className="my-cert-heading"><h1>我的认证</h1><p>查看并管理你已购买的 AI 办公认证</p></div><p className="cert-demo-note">示例数据 · 实际认证记录将在登录并接入订单后显示</p><table className="my-cert-table"><thead><tr><th scope="col">证书名称</th><th scope="col">证书状态</th><th scope="col">支付时间</th><th scope="col">操作</th></tr></thead><tbody><tr><td className="my-cert-name">AI智能办公能力训练师认证（布道师）</td><td data-label="证书状态"><span className="my-cert-status">待测评</span></td><td data-label="支付时间"><time dateTime="2026-11-06T14:07">2026-11-06 14:07</time></td><td className="my-cert-action"><button className="button" onClick={()=>dialog.current.showModal()}>进行测评</button></td></tr></tbody></table></main><dialog ref={dialog} className="my-cert-dialog" aria-labelledby="assessment-title" onClick={e=>{if(e.target===e.currentTarget)dialog.current.close()}}><h2 id="assessment-title">认证测评</h2><p>当前为页面演示，尚未接入真实订单和测评系统。正式接入后，可从这里进入已购买认证的测评。</p><form method="dialog"><button className="button">我知道了</button></form></dialog></>;
}
