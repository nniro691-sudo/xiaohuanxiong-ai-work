export { ArrowUpRight, ArrowRight, ArrowUp, ArrowLeft, ChevronRight } from 'lucide-react';
import React from 'react';
const cells={GraduationCap:0,BadgeCheck:1,ShieldCheck:1,Search:2,Files:3,ChartNoAxesCombined:4,Presentation:5,BookOpen:6,Building2:7,ArrowRight:8,ChevronRight:8,ArrowLeft:8,ArrowUpRight:9,ArrowUp:10,X:11,Menu:3,Clock3:12,FileText:13,Images:14,Play:15,Sparkles:1};
function DepthIcon({name,size=24,className='',style}){const n=cells[name]??1;return <span aria-hidden="true" className={'depth-icon rendered-icon '+className} style={{width:size,height:size,backgroundPosition:`${(n%4)*100/3}% ${Math.floor(n/4)*100/3}%`,...style}}/>}
export const Building2=(props)=><DepthIcon name="Building2" {...props}/>;
export const BookOpen=(props)=><DepthIcon name="BookOpen" {...props}/>;
export const X=(props)=><DepthIcon name="X" {...props}/>;
export const Menu=(props)=><DepthIcon name="Menu" {...props}/>;
export const GraduationCap=(props)=><DepthIcon name="GraduationCap" {...props}/>;
export const BadgeCheck=(props)=><DepthIcon name="BadgeCheck" {...props}/>;
export const Clock3=(props)=><DepthIcon name="Clock3" {...props}/>;
export const Sparkles=(props)=><DepthIcon name="Sparkles" {...props}/>;