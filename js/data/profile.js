// ============================================================
// DATA: Profile, Education, Bio
// ============================================================

const PROFILE = {
  nameEn: 'Xindi Zhang',
  nameZh: '张昕荻',
  title: {
    en: 'Specially Appointed Assistant Professor & Post-Doctor',
    zh: '特别研究助理 & 博士后 & 重点实验室副书记'
  },
  affiliation: {
    en: '<a href="http://www.iscas.ac.cn" target="_blank">Institute of Software, Chinese Academy of Sciences (ISCAS)</a>',
    zh: '<a href="http://www.iscas.ac.cn" target="_blank">中国科学院软件研究所</a>'
  },
  lab: {
    en: '<a href="http://solver.ios.ac.cn/" target="_blank">Constraint Solving Lab</a> · <a href="http://klss.ios.ac.cn/" target="_blank">Key Lab of System Software (CAS)</a><span class="lab-extra"> · <a href="https://lcs.ios.ac.cn/" target="_blank">State Key Lab of Computer Science</a></span>',
    zh: '<a href="http://solver.ios.ac.cn/" target="_blank">约束求解实验室</a> · <a href="http://klss.ios.ac.cn/" target="_blank">基础软件与系统重点实验室（中科院）</a><span class="lab-extra"> · <a href="https://lcs.ios.ac.cn/" target="_blank">计算机科学国家重点实验室</a></span>'
  },
  advisor: {
    en: 'Group led by <a href="http://people.ucas.ac.cn/~caisw" target="_blank">Prof. Shaowei Cai</a>',
    zh: '课题组负责人：<a href="http://people.ucas.ac.cn/~caisw" target="_blank">蔡少伟研究员</a>'
  },
  location: { en: 'Beijing, China', zh: '北京，中国' },
  email: 'dezhangxd@163.com',
  github: 'https://github.com/dezhangxd',
  googleScholar: 'https://scholar.google.com.hk/citations?user=eRVlyBEAAAAJ&hl=zh-CN',
  orcid: 'https://orcid.org/0000-0001-5541-7194',
  avatar: 'images/avatar.png',

  bioEn: [
    'My research interests are <a href="https://en.wikipedia.org/wiki/Boolean_satisfiability_problem" target="_blank">SAT</a>, <a href="https://en.wikipedia.org/wiki/Satisfiability_modulo_theories" target="_blank">SMT</a>, <a href="https://en.wikipedia.org/wiki/Electronic_design_automation" target="_blank">EDA</a> formal verification.'
  ],
  bioZh: [
    '研究方向包括 <a href="https://en.wikipedia.org/wiki/Boolean_satisfiability_problem" target="_blank">SAT</a>、<a href="https://en.wikipedia.org/wiki/Satisfiability_modulo_theories" target="_blank">SMT</a>、<a href="https://en.wikipedia.org/wiki/Electronic_design_automation" target="_blank">EDA</a> 形式化验证。'
  ],
  highlightsEn: [
    'SAT Association "Fahiem Bacchus PhD Thesis Award" (<span style="color:#dc2626">first from Asia</span>), SAT Conference "Best Paper Award" (<span style="color:#dc2626">first from Asia</span>)',
    'International SAT, SMT, FLoC Competitions <span style="color:#dc2626">champion</span> 20+, including the <span style="color:#dc2626">first Chinese</span> SMT competition championship',
    'Developer of high-performance open-source parallel formal verification tools; contributor to EDA² "Computing Power Infrastructure White Paper"',
    'SAT and EDA tools adopted by Huawei and multiple EDA companies'
  ],
  highlightsZh: [
    '国际SAT协会"最佳博士论文奖"（<span style="color:#dc2626">亚洲首个</span>），国际SAT会议"最佳论文奖"（<span style="color:#dc2626">亚洲首个</span>）',
    '国际SAT、SMT、FLoC等<span style="color:#dc2626">冠军</span>20+项，<span style="color:#dc2626">中国首个</span>国际SMT比赛冠军',
    '高性能开源并行形式化验证工具，参编EDA²《算力底座白皮书》',
    'SAT及EDA工具落地华为及多家EDA企业'
  ]
};

const EDUCATION = [
  {
    period: { en: 'Jul. 2024 – Present', zh: '2024年7月 – 至今' },
    degree: { en: 'Specially Appointed Assistant Professor & Post-Doctor', zh: '特别研究助理，博士后，重点实验室党支部副书记' },
    institution: { en: 'Institute of Software, Chinese Academy of Sciences', zh: '中国科学院软件研究所' },
    location: { en: 'Beijing, China', zh: '北京，中国' },
    dept: {
      en: 'Key Lab of System Software (CAS) & State Key Lab of Computer Science',
      zh: '基础软件与系统重点实验室 & 计算机科学国家重点实验室'
    },
    detail: { en: 'Cooperative Supervisor: Prof. Shaowei Cai.', zh: '合作导师：蔡少伟研究员。' }
  },
  {
    period: { en: 'Aug. 2018 – Jun. 2024', zh: '2018年8月 – 2024年6月' },
    degree: { en: 'M.S. & Ph.D. (Direct Doctoral Program)', zh: '硕博连读' },
    institution: { en: 'Institute of Software, Chinese Academy of Sciences', zh: '中国科学院软件研究所' },
    location: { en: 'Beijing, China', zh: '北京，中国' },
    dept: { en: 'State Key Lab of Computer Science', zh: '计算机科学国家重点实验室' },
    detail: { en: 'Supervisor: Prof. Shaowei Cai.', zh: '导师：蔡少伟研究员。' }
  },
  {
    period: { en: 'Aug. 2014 – Jul. 2018', zh: '2014年8月 – 2018年7月' },
    degree: { en: 'B.Eng. in Software Engineering & B.A. in Finance', zh: '软件工程学士 & 金融学学士' },
    institution: { en: 'Jilin University', zh: '吉林大学' },
    location: { en: 'Changchun, China', zh: '长春，中国' },
    dept: { en: 'College of Software · School of Economics', zh: '软件学院 · 经济学院' },
    detail: { en: '(Excellence Engineer Training Program)', zh: '（卓越工程师培养计划）' }
  }
];

const NEWS = [
  {
    date: '2026.02',
    en: '🎉 2 papers accepted by <strong>DAC (CCF-A)</strong> and <strong>FM (CCF-A)</strong>.',
    zh: '🎉 2篇论文分别被 <strong>DAC (CCF-A)</strong> 与 <strong>FM（CCF-A）</strong> 接收。'
  },
  {
    date: '2025.08',
    en: '🎉 Awarded the <strong>Fahiem Bacchus PhD Thesis Award</strong>, SAT Association (1 winner globally per year; first from Asia). <a href="https://is.cas.cn/xwdt2016/rdxw2016/202510/t20251009_7985232.html" target="_blank">🔍</a>',
    zh: '🎉 荣获国际SAT协会 <strong>Fahiem Bacchus 最佳博士论文奖</strong>（全球每年仅一位，亚洲首个）。<a href="https://is.cas.cn/xwdt2016/rdxw2016/202510/t20251009_7985232.html" target="_blank">🔍</a>'
  },
  {
    date: '2025.08',
    en: '🎉 1 paper accepted by <strong>ASE (CCF-A)</strong>.',
    zh: '🎉 1篇论文被 <strong>ASE (CCF-A)</strong> 接收。'
  },
  {
    date: '2025.07',
    en: '🎉 PhD thesis awarded <strong>"Outstanding PhD Thesis of the Chinese Academy of Sciences"</strong>. <a href="https://is.cas.cn/xwdt2016/rdxw2016/202508/t20250828_7920645.html" target="_blank">🔍</a>',
    zh: '🎉 博士学位论文获得 <strong>"中科院优秀博士论文"</strong>。<a href="https://is.cas.cn/xwdt2016/rdxw2016/202508/t20250828_7920645.html" target="_blank">🔍</a>'
  },
  {
    date: '2025.05',
    en: '🎉 1 paper accepted by <strong>CP (CCF-B)</strong>.',
    zh: '🎉 1篇论文被 <strong>CP (CCF-B)</strong> 接收。'
  },
  {
    date: '2025.02',
    en: '🎉 4 papers accepted by <strong>DAC (CCF-A)</strong>.',
    zh: '🎉 4篇论文被 <strong>DAC (CCF-A)</strong> 接收。'
  },
  {
    date: '2024.12',
    en: '🎉 <strong>Second Prize + Enterprise Special Award</strong> at China Postgraduate IC Innovation Competition EDA Elite Challenge.',
    zh: '🎉 荣获中国研究生创"芯"大赛·EDA精英挑战赛 <strong>二等奖 + 企业特别奖</strong>。'
  },
  {
    date: '2024.08',
    en: '🎉 <strong>2nd Place</strong> in SAT Competition Cloud Track.',
    zh: '🎉 荣获国际SAT比赛云计算赛道 <strong>亚军</strong>。'
  },
  {
    date: '2024.07',
    en: '🎉 Graduate student representative, 2024 Commencement, University of Chinese Academy of Sciences. <a href="https://weibo.com/7261228880/OmhiZ7QUC" target="_blank">🔍</a>',
    zh: '🎉 中国科学院大学2024年毕业典礼，研究生代表。<a href="https://weibo.com/7261228880/OmhiZ7QUC" target="_blank">🔍</a>'
  },
  {
    date: '2024.06',
    en: '🎉 Received <strong>"President\'s Special Award"</strong>, University of Chinese Academy of Sciences. <a href="https://is.cas.cn/xwdt2016/rdxw2016/202409/t20240903_7332290.html" target="_blank">🔍</a>',
    zh: '🎉 荣获中国科学院大学 <strong>"院长奖-特别奖"</strong>。<a href="https://is.cas.cn/xwdt2016/rdxw2016/202409/t20240903_7332290.html" target="_blank">🔍</a>'
  }
];
