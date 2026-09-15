// 文案按用户提供的飞书框架图录入。未提供的详情链接保留为空，避免错误跳转。
export const sourceDocument = 'https://g2fp3btm67.feishu.cn/docx/Zwnqdyz4robbF6xtFHicY7YAnDe';
export const officialUrl = 'https://xiaohuanxiong.com/';
export const enterprises = [
  {name:'麒麟软件',logo:'logo-kylin.webp',industry:'国产软件'},
  {name:'京东物流',logo:'logo-jdl.png',industry:'物流'},
  {name:'平安科技',logo:'logo-pingan.webp',industry:'金融科技'},
  {name:'编程猫',logo:'logo-codemao.png',industry:'教育科技'},
  {name:'值得买',logo:'logo-zhidemai.png',industry:'电子商务'},
  {name:'长城电脑',logo:'logo-greatwall.png',industry:'信创硬件'},
  {name:'51CTO',logo:'logo-51cto.webp',industry:'职业教育'},
  {name:'神秘企业',industry:'',upcoming:true},
].map(e=>({...e,formats:{'深度文章':null,'长图文':null,'短视频':null}}));
export const scenarios = [
  {name:'市场调研',description:'让AI帮你快速完成一次市场调研',url:null},
  {name:'竞品分析',description:'从信息搜集到竞品对比，一次完成',url:null},
  {name:'经营分析',description:'用AI快速读懂一份业务数据',url:null},
  {name:'PPT汇报',description:'从一份材料快速生成汇报框架',url:null},
];
export const courses = [
  {name:'商汤小浣熊 AI高效办公实战教程',lessons:'31课时',price:'99.50',original:'199.00',url:null},
  {name:'让小浣熊替你干活：商汤小浣熊职场办公实战',lessons:'58课时',price:'238.00',url:null},
  {name:'商汤小浣熊办公自动化入门',lessons:'13课时',price:'28.00',original:'56.00',url:null},
  {name:'商汤小浣熊AI办公提效速通课：全场景实战应用',lessons:'17课时',price:'79.20',original:'99.00',url:null},
  // 新增展示位为拟定课程，课时、价格及详情待确认。
  {name:'商汤小浣熊数据分析：从表格到经营洞察',lessons:'课时待更新',price:null,url:null},
  {name:'商汤小浣熊PPT汇报：从材料到演示方案',lessons:'课时待更新',price:null,url:null},
  {name:'商汤小浣熊市场调研与竞品分析实战',lessons:'课时待更新',price:null,url:null},
  {name:'商汤小浣熊职场文档写作与内容提效',lessons:'课时待更新',price:null,url:null},
];
export const certifications = [
 {title:'AI智能办公能力训练师认证（布道师）',description:'面向具备AI办公实践与培训能力，希望成为企业AI办公推广者、培训者和布道师的人群。',listTitle:'重点培养',items:['AI办公实践能力','课程设计能力','培训授课能力','企业赋能能力'],url:null},
 {title:'AI智能办公能力认证（初中高）',description:'面向希望系统掌握AI办公能力的职场人，按照能力水平设置初级、中级、高级。',listTitle:'级别能力',items:['初级：AI办公基础能力','中级：AI办公进阶能力','高级：AI办公专家能力'],url:null},
];
