import css from './mobileNavigation.css?raw';
const items=[
 ['top','首页','<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>'],
 ['courses','AI办公课程','<rect x="3" y="4" width="18" height="14" rx="2"/><path d="m10 8 5 3-5 3Z M8 21h8"/>'],
 ['certification','AI办公认证','<circle cx="12" cy="9" r="6"/><path d="m8 14-1 7 5-3 5 3-1-7"/>'],
 ['my-certifications','我的认证','<circle cx="12" cy="7" r="4"/><path d="M5 21v-3a7 7 0 0 1 14 0v3"/>']
];
export function bottomNavigation(active){
 const selected=['courses','certification','my-certifications'].includes(active)?active:'top';
 return '<nav class="mobile-bottom-nav" aria-label="底部主导航">'+items.map(([id,label,icon])=>'<a href="#'+id+'" target="_top"'+(selected===id?' class="is-active" aria-current="page"':'')+'><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icon+'</svg><span>'+label+'</span></a>').join('')+'</nav>';
}
export function withMobileNavigation(html,active){return html.replace('</head>','<style>'+css+'</style></head>').replace('</body>',bottomNavigation(active)+'</body>')}
