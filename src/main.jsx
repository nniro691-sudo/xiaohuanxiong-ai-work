import React, {useState,useEffect} from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";
import {CertificationPage} from "./CertificationPage";
import {CoursePage} from "./CoursePage";
import {MyCertificationsPage} from "./MyCertificationsPage";
import {EnterpriseArticlePage} from "./EnterpriseArticlePage";
function Router(){const [hash,setHash]=useState(window.location.hash);useEffect(()=>{const update=()=>setHash(window.location.hash);window.addEventListener("hashchange",update);return()=>window.removeEventListener("hashchange",update)},[]);useEffect(()=>{if(!hash.startsWith('#course/')&&!hash.startsWith('#cert/')){requestAnimationFrame(()=>document.getElementById(hash.slice(1)||'top')?.scrollIntoView())}},[hash]);const match=hash.match(/^#course\/(\d+)$/);const article=hash.match(/^#article\/([0-6])$/);return article?<EnterpriseArticlePage key={article[1]} index={Number(article[1])}/>:hash==='#my-certifications'?<MyCertificationsPage/>:hash==='#cert/0'?<CertificationPage/>:match?<CoursePage key={match[1]} index={Number(match[1])}/>:<App/>;}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
