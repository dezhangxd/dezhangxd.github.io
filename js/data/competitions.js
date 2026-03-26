// ============================================================
// DATA: Competition Results
// Each result row: { year, tool, track:{en,zh}, award:{en,zh},
//                   proof?, proofExtra?, video? }
// ============================================================

const COMPETITIONS = [
  {
    name: { en: 'The International SAT Competition', zh: '国际SAT比赛' },
    url: 'https://satcompetition.github.io/',
    results: [
      {
        year: 2025,
        tool: '<a href="https://github.com/shaowei-cai-group/PRS-sc25">PRS</a>',
        track: { en: 'Parallel Track', zh: '并行组' },
        award: { en: '🥉 3rd Place', zh: '🥉 季军' }
      },
      {
        year: 2024,
        tool: '<a href="https://github.com/shaowei-cai-group/PRS-sc24">PRS</a>',
        track: { en: 'Cloud Track', zh: '云计算组' },
        award: { en: '🥈 2nd Place', zh: '🥈 亚军' },
        proof: 'https://satcompetition.github.io/2024/downloads/satcomp24slides.pdf'
      },
      {
        year: 2023,
        tool: '<a href="https://github.com/shaowei-cai-group/PRS-sc23">PRS</a>',
        track: { en: 'Parallel Main (SAT / UNSAT / ALL)', zh: '并行主赛道（SAT / UNSAT / ALL）' },
        award: { en: '🥇🥇🥇 Champion × 3', zh: '🥇🥇🥇 冠军 × 3' },
        proof: 'https://satcompetition.github.io/2023/downloads/satcomp23slides.pdf'
      },
      {
        year: 2023,
        tool: '<a href="https://github.com/shaowei-cai-group/PRS-sc23">PRS</a>',
        track: { en: 'Cloud Track', zh: '云计算组' },
        award: { en: '🥈 2nd Place', zh: '🥈 亚军' },
        proof: 'https://satcompetition.github.io/2023/downloads/satcomp23slides.pdf'
      },
      {
        year: 2022,
        tool: '<a href="https://github.com/shaowei-cai-group/ParKissat-RS">ParKissat-RS</a>',
        track: { en: 'Parallel Main (SAT / ALL)', zh: '并行主赛道（SAT / ALL）' },
        award: { en: '🥇🥇🥈 Champion × 2 <span style="color:#dc2626">(Chinese First)</span>', zh: '🥇🥇🥈 冠军 × 2（<span style="color:#dc2626">中国首个</span>）' },
        proof: 'https://satcompetition.github.io/2022/slides/satcomp22slides.pdf'
      },
      {
        year: 2022,
        tool: '<a href="https://github.com/shaowei-cai-group/kissat_pre">kissat-pre</a>',
        track: { en: 'NoLimits Track', zh: 'NoLimits 赛道' },
        award: { en: '🥇 Champion', zh: '🥇 冠军' },
        proof: 'https://satcompetition.github.io/2022/slides/satcomp22slides.pdf'
      },
      {
        year: 2022,
        tool: '<a href="https://github.com/shaowei-cai-group/kissat_inc">kissat-inc</a>',
        track: { en: 'Sequential Main (SAT / ALL)', zh: '串行主赛道（SAT / ALL）' },
        award: { en: '🥈🥈 2nd Place × 2', zh: '🥈🥈 亚军 × 2' },
        proof: 'https://satcompetition.github.io/2022/slides/satcomp22slides.pdf'
      },
      {
        year: 2021,
        tool: '<a href="https://github.com/shaowei-cai-group/LSTech-Maple">lstech_Maple</a>',
        track: { en: 'Sequential Main (SAT)', zh: '串行主赛道（SAT）' },
        award: { en: '🥈 2nd Place', zh: '🥈 亚军' },
        proof: 'https://satcompetition.github.io/2021/slides/ISC2021-fixed.pdf'
      },
      {
        year: 2021,
        tool: '<a href="https://github.com/orgs/sat-heritage/packages/container/package/docker-images%2Fkissat_bonus">kissat_bonus</a>',
        track: { en: 'Sequential Main (UNSAT)', zh: '串行主赛道（UNSAT）' },
        award: { en: '🥈 2nd Place', zh: '🥈 亚军' },
        proof: 'https://satcompetition.github.io/2021/slides/ISC2021-fixed.pdf'
      },
      {
        year: 2020,
        tool: '<a href="https://github.com/shaowei-cai-group/Relaxed_LCMDCBDL_newTech">RLNT</a>',
        track: { en: 'Sequential Main (SAT)', zh: '串行主赛道（SAT）' },
        award: { en: '🥇 Champion', zh: '🥇 冠军' },
        proof: 'images/RLNT.png'
      },
      {
        year: 2018,
        tool: '<a href="https://lcs.ios.ac.cn/~caisw/Code/ReasonLS.zip">ReasonLS</a>',
        track: { en: 'NoLimits Track', zh: 'NoLimits 赛道' },
        award: { en: '🥇 Champion', zh: '🥇 冠军' },
        proof: 'https://satcompetition.github.io/'
      },
      {
        year: 2018,
        showYear: true,
        tool: '<a href="https://lcs.ios.ac.cn/~caisw/Code/ReasonLS.zip">ReasonLS</a>',
        track: { en: 'Sparkle SAT Challenge', zh: 'Sparkle SAT 国际挑战赛' },
        award: { en: '🥈 2nd Place', zh: '🥈 亚军' },
        proof: 'https://ada.liacs.nl/events/sparkle-sat-18/results.html'
      }
    ]
  },
  {
    name: { en: 'International SMT Competition', zh: '国际SMT比赛' },
    url: 'https://smt-comp.github.io/',
    results: [
      {
        year: 2023,
        tool: '<a href="https://github.com/shaowei-cai-group/z3pp">z3++</a>',
        track: { en: 'MV-Biggest Lead · MV-Largest Contribution · QF-LIA(;,‖,T,mv) · QF_NLIA(;,‖,T,⊥,24) · QF_NIA(;,‖,T) · QF_IDL(⊥)', zh: '模型验证-最大领先奖 · 模型验证-最大贡献奖 · QF-LIA · QF_NLIA · QF_NIA · QF_IDL' },
        award: { en: '🥇..🥇 Multiple Champions', zh: '🥇..🥇 多项冠军' },
        proof: 'images/smt23.png',
        video: 'https://www.youtube.com/watch?v=fBB0Wxxf9vA'
      },
      {
        year: 2022,
        tool: '<a href="https://github.com/shaowei-cai-group/z3pp">z3++</a>',
        track: { en: 'MV-Biggest Lead · MV-Largest Contribution', zh: '模型验证-最大领先奖 · 模型验证-最大贡献奖' },
        award: { en: '🥇🥇 Champion × 2', zh: '🥇🥇 两项冠军' },
        proof: 'images/smt22.png'
      },
      {
        year: 2021,
        tool: '<a href="https://smt-comp.github.io/2021/system-descriptions/YicesLS.pdf">YicesLS</a>',
        track: { en: 'QF-IDL Model Validation & Single Query', zh: 'QF-IDL 模型验证 & 单次查询 ' },
        award: { en: '🥇🥇 Champion <span style="color:#dc2626">(Chinese First)</span>', zh: '🥇🥇 冠军（<span style="color:#dc2626">中国首个</span>）' },
        proof: 'https://smt-comp.github.io/2021/results/qf-idl-model-validation'
      }
    ]
  },
  {
    name: { en: "FLoC 2022 Olympic Games", zh: "国际逻辑学联合会议(FLoC'22)奥林匹克竞赛" },
    url: 'https://www.floc2022.org/floc-olympic-games',
    results: [
      {
        year: 2022,
        tool: '<a href="https://github.com/shaowei-cai-group/ParKissat-RS">ParKissat-RS</a>',
        track: { en: 'SAT Parallel Track', zh: 'SAT 并行赛道' },
        award: { en: '🥇 Champion', zh: '🥇 冠军' },
        proof: 'images/floc-sat.png'
      },
      {
        year: 2022,
        tool: '<a href="https://github.com/shaowei-cai-group/z3pp">z3++</a>',
        track: { en: 'SMT MV-Biggest Lead · MV-Largest Contribution', zh: '模型验证-最大领先奖 · 模型验证-最大贡献奖' },
        award: { en: '🥇🥇 Champion × 2', zh: '🥇🥇 两项冠军' },
        proof: 'images/smt22.png'
      }
    ]
  },
  {
    name: { en: 'China Postgraduate IC Innovation Competition EDA Elite Challenge', zh: '中国研究生创"芯"大赛·EDA精英挑战赛' },
    url: null,
    results: [
      {
        year: 2025,
        tool: '',
        track: { en: 'EDA Elite Challenge', zh: 'EDA精英挑战赛' },
        award: { en: '🥉 Third Prize', zh: '🥉 三等奖' },
        proof: 'images/eda-25.pdf'
      },
      {
        year: 2024,
        tool: '',
        track: { en: 'EDA Elite Challenge', zh: 'EDA精英挑战赛' },
        award: { en: '🥈 Second Prize + 🏢 Enterprise Special Award (S2C)', zh: '🥈 二等奖 + 🏢 企业特别奖（S2C）' },
        proof: 'images/EDA240335.pdf',
        proofExtra: 'https://mp.weixin.qq.com/s/wUsnpof64iZvUnvfDSRUow'
      },
      {
        year: 2022,
        tool: '',
        track: { en: 'Integrated Circuit EDA Elite Challenge', zh: '集成电路EDA设计精英挑战赛' },
        award: { en: '🥈 Second Prize + 🏢 Enterprise Special Award (Hisilicon)', zh: '🥈 二等奖 + 🏢 企业特别奖（海思）' },
        proof: 'images/eda-cec.png',
        proofExtra: 'https://mp.weixin.qq.com/s/K-auffEgAx4HZ3-7q4gI1Q'
      }
    ]
  },
  {
    name: { en: 'Other Competitions', zh: '其他竞赛' },
    url: null,
    results: [
      {
        year: 2023,
        tool: 'CMixSAT',
        track: { en: '6th "Qiangwang Cup" · Cryptography Mathematics Track', zh: '第六届"强网杯"全国网络安全挑战赛 · 密码数学专项赛' },
        award: { en: '🥇 Champion', zh: '🥇 冠军' },
        proof: 'images/qiangwang.png'
      },
      {
        year: 2017,
        tool: '',
        track: { en: 'Interdisciplinary Contest In Modeling (ICM)', zh: '美国大学生数学建模竞赛(ICM)' },
        award: { en: '🎖️ Meritorious Winner', zh: '🎖️ 一等奖' },
        proof: 'images/usa-m.pdf'
      },
      {
        year: 2016,
        tool: '',
        track: { en: 'Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)', zh: '全国大学生数学建模竞赛(CUMCM)' },
        award: { en: '🥈 Second Prize', zh: '🥈 二等奖' },
        proof: 'images/cumcm.png'
      },
      {
        year: 2016,
        showYear: true,
        tool: '',
        track: { en: 'International Genetically Engineered Machine (iGEM)', zh: '国际基因工程机器大赛(iGEM)' },
        award: { en: '🏆 Gold Award', zh: '🏆 金奖' },
        proof: 'images/igem.pdf'
      }
    ]
  }
];
