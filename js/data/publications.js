// ============================================================
// DATA: Publications (Conference, Journal, Thesis)
// links: array of { label, url, type }
//   type: 'code' | 'paper' | 'slides' | 'video' | 'project'
// featured: true → pinned at top with paper-box layout
// image: path to thumbnail (optional, used with featured)
// ============================================================

const PUB_NOTE = {
  en: '† Co-First Author; * Corresponding Author',
  zh: '† 共同第一作者；* 通讯作者'
};

const CONFERENCE_PAPERS = [
  {
    id: 'C17',
    featured: false,
    image: 'images/dac26-prs.png',
    title: 'PRS: An Efficient Parallel SAT Framework',
    authors: 'Zhihan Chen, <strong>Xindi Zhang</strong>, Yuhang Qian, Congyi Zhang, Shaowei Cai*',
    venue: 'DAC 2026', venueFull: 'ACM/IEEE Design Automation Conference',
    year: 2026, ccf: 'A',
    links: [
      { label: 'PRS', url: 'https://github.com/PRS-25/PRS', type: 'code' }
    ]
  },
  {
    id: 'C16',
    featured: false,
    image: 'images/fm26-fastlec.png',
    title: 'FastLEC: Parallel Datapath Equivalence Checking with Hybrid Engines',
    authors: '<strong>Xindi Zhang</strong>, Furong Ye, Zhihan Chen, Shaowei Cai*',
    venue: 'FM 2026', venueFull: 'International Symposium on Formal Methods',
    year: 2026, ccf: 'A',
    links: [
      { label: 'Paper', url: 'https://link.springer.com/chapter/10.1007/978-3-032-26204-2_5', type: 'paper' },
      { label: 'FastLEC', url: 'https://github.com/dezhangxd/fastLEC', type: 'code' }
    ]
  },
  {
    id: 'C15',
    featured: false,
    image: 'images/ase25-smtgazer.png',
    title: 'SMTgazer: Learning to Schedule SMT Algorithms via Bayesian Optimization',
    authors: 'Chuan Luo, Shaoke Cui, Jianping Song, <strong>Xindi Zhang</strong>*, Wei Wu, Chanjuan Liu, Shaowei Cai, Chunming Hu',
    venue: 'ASE 2025', venueFull: 'IEEE/ACM International Conference on Automated Software Engineering',
    year: 2025, ccf: 'A',
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/11334368', type: 'paper' },
      { label: 'SMTGazer', url: 'https://github.com/Bazoka13/SMTgazer', type: 'code' }
    ]
  },
  {
    id: 'C14',
    featured: false,
    image: 'images/dynamic-sat.png',
    title: 'DynamicSAT: Dynamic Configuration Tuning for SAT Solving',
    authors: 'Zhengyuan Shi, Wentao Jiang, <strong>Xindi Zhang</strong>*, Jin Luo, Yun Liang, Zhufei Chu, Qiang Xu*',
    venue: 'CP 2025', venueFull: 'International Conference on Principles and Practice of Constraint Programming',
    year: 2025, ccf: 'B',
    links: [
      { label: 'Paper', url: 'https://drops.dagstuhl.de/storage/00lipics/lipics-vol340-cp2025/LIPIcs.CP.2025.34/LIPIcs.CP.2025.34.pdf', type: 'paper' },
      { label: 'DynamicSAT', url: 'https://github.com/cure-lab/DynamicSAT', type: 'code' }
    ]
  },
  {
    id: 'C13',
    featured: false,
    image: 'images/dac25-pastatpg.png',
    title: 'PastATPG: A Hybrid ATPG Framework for Better Test Compaction with Partial Assignment SAT',
    authors: 'Zhiteng Chao†, <strong>Xindi Zhang</strong>†, Xinyu Zhang, Jianan Mu*, Zizhen Liu, Shaowei Cai*, Jing Ye, Xiaowei Li, Huawei Li*',
    venue: 'DAC 2025', venueFull: 'ACM/IEEE Design Automation Conference',
    year: 2025, ccf: 'A',
    detail: '† Co-first Author',
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/11132425/', type: 'paper' },
      { label: 'PastATPG', url: 'https://github.com/sklp-eda-lab/PastATPG', type: 'code' },
      { label: 'PA-Minisat', url: 'https://github.com/sklp-eda-lab/PastATPG/tree/main/src/zhangsat', type: 'code' }
    ]
  },
  {
    id: 'C12',
    featured: false,
    image: 'images/ic3.png',
    title: 'Leveraging Critical Proof Obligations for Efficient IC3 Verification',
    authors: 'Lingfeng Zhu, <strong>Xindi Zhang</strong>, Yongjian Li*, Shaowei Cai',
    venue: 'DAC 2025', venueFull: 'ACM/IEEE Design Automation Conference',
    year: 2025, ccf: 'A',
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/11132734/', type: 'paper' },
      { label: 'MCer', url: 'https://github.com/ISCAS-modelchecker/modelchecker', type: 'code' }
    ]
  },
  {
    id: 'C11',
    featured: false,
    image: 'images/dac25-xsat.png',
    title: 'X-SAT: An Efficient Circuit-Based SAT Solver',
    authors: 'Yuhang Qian, Zhihan Chen, <strong>Xindi Zhang</strong>, Shaowei Cai*',
    venue: 'DAC 2025', venueFull: 'ACM/IEEE Design Automation Conference',
    year: 2025, ccf: 'A',
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/11132604/', type: 'paper' },
      { label: 'X-SAT', url: 'https://github.com/shaowei-cai-group/X-SAT', type: 'code' }
    ]
  },
  {
    id: 'C10',
    featured: false,
    image: 'images/dac25-pdpcec.png',
    title: 'Parallel Dynamic Partitioning for Datapath Combinational Equivalence Checking',
    authors: 'Shuai Zhou, Weikang Zhang, <strong>Xindi Zhang</strong>, Zite Jiang, Haihang You*, Shaowei Cai*',
    venue: 'DAC 2025', venueFull: 'ACM/IEEE Design Automation Conference',
    year: 2025, ccf: 'A',
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/11132837', type: 'paper' }
    ]
  },
  {
    id: 'C9',
    featured: true,
    image: 'images/icse24-hybridSMT.png',
    title: 'Deep Combination of CDCL(T) and Local Search for Satisfiability Modulo Non-Linear Integer Arithmetic Theory',
    authors: '<strong>Xindi Zhang</strong>, Bohan Li, Shaowei Cai*',
    venue: 'ICSE 2024', venueFull: 'IEEE/ACM International Conference on Software Engineering',
    year: 2024, ccf: 'A',
    detail: 'Article No.: 125, pp. 1–13',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3597503.3639105', type: 'paper' },
      { label: 'hybridSMT', url: 'https://github.com/hybridSMT/hybridSMT', type: 'code' },
      { label: 'z3++', url: 'https://github.com/shaowei-cai-group/z3pp', type: 'code' },
      { label: 'Slides', url: 'slides/ICSE24-GA.pdf', type: 'slides' }
    ]
  },
  {
    id: 'C8',
    featured: false,
    image: 'images/integration.png',
    title: 'A Fast Test Compaction Method for Commercial DFT Flow Using Dedicated Pure-MaxSAT Solver',
    authors: 'Zhiteng Chao, <strong>Xindi Zhang</strong>, Junying Huang, Jing Ye*, Shaowei Cai, Huawei Li, Xiaowei Li*',
    venue: 'ASP-DAC 2024', venueFull: 'IEEE/ACM Asia and South Pacific Design Automation Conference',
    year: 2024, ccf: 'C',
    detail: 'pp. 503–508',
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/10473833', type: 'paper' }
    ]
  },
  {
    id: 'C7',
    featured: false,
    image: 'images/iccad23-hybridcec.png',
    title: 'Integrating Exact Simulation into Sweeping for Datapath Combinational Equivalence Checking',
    authors: 'Zhihan Chen, <strong>Xindi Zhang</strong>, Yuhang Qian, Qiang Xu, Shaowei Cai*',
    venue: 'ICCAD 2023', venueFull: 'IEEE/ACM International Conference on Computer-Aided Design',
    year: 2023, ccf: 'B',
    detail: 'pp. 1–9',
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/10323876', type: 'paper' },
      { label: 'hybridCEC', url: 'https://github.com/HybridCEC/Hybrid-CEC', type: 'code' },
      { label: 'Slides', url: 'slides/185-ZhihanChen-Zhang.pdf', type: 'slides' }
    ]
  },
  {
    id: 'C6',
    featured: false,
    title: 'Improving Local Search for Structured SAT Formulas via Unit Propagation Based Construct and Cut Initialization (Short Paper)',
    authors: 'Shaowei Cai, Chuan Luo, <strong>Xindi Zhang</strong>, Jian Zhang',
    venue: 'CP 2023', venueFull: 'International Conference on Principles and Practice of Constraint Programming',
    year: 2023, ccf: 'B',
    detail: 'pp. 5:1–5:10',
    links: [
      { label: 'Paper', url: 'https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CP.2021.5', type: 'paper' },
      { label: 'CNC', url: 'https://github.com/shaowei-cai-group/CNC-LS', type: 'code' }
    ]
  },
  {
    id: 'C5',
    featured: false,
    image: 'images/CAV22-ls.png',
    title: 'Local Search For SMT on Linear Integer Arithmetic',
    authors: 'Shaowei Cai*†, Bohan Li†, <strong>Xindi Zhang</strong>†',
    venue: 'CAV 2022', venueFull: 'International Conference on Computer Aided Verification',
    year: 2022, ccf: 'A',
    detail: 'pp. 227–248 · † Co-first Author',
    links: [
      { label: 'Paper', url: 'https://link.springer.com/chapter/10.1007/978-3-031-13188-2_12', type: 'paper' },
      { label: 'z3++', url: 'https://github.com/shaowei-cai-group/z3pp', type: 'code' }
    ]
  },
  {
    id: 'C4',
    featured: false,
    image: 'images/sat21_relaxed.png',
    title: 'Deep Cooperation of CDCL and Local Search for SAT (Extended Abstract)',
    authors: 'Shaowei Cai, <strong>Xindi Zhang</strong>',
    venue: 'IJCAI 2022', venueFull: 'International Joint Conference on Artificial Intelligence',
    year: 2022, ccf: 'B',
    detail: 'pp. 5274–5278',
    links: [
      { label: 'Paper', url: 'https://www.ijcai.org/proceedings/2022/734', type: 'paper' },
      { label: 'code', url: 'https://github.com/shaowei-cai-group/relaxed-sat', type: 'code' }
    ]
  },
  {
    id: 'C3',
    featured: true,
    image: 'images/sat21_relaxed.png',
    title: 'Deep Cooperation of CDCL and Local Search for SAT',
    authors: 'Shaowei Cai†*, <strong>Xindi Zhang</strong>†',
    venue: 'SAT 2021', venueFull: 'International Conference on Theory and Applications of Satisfiability Testing',
    year: 2021, ccf: 'B',
    note: { en: 'Best Paper Award', zh: '最佳论文奖' },
    detail: 'pp. 64–81 · † Co-first Author',
    links: [
      { label: 'Paper', url: 'https://link.springer.com/chapter/10.1007/978-3-030-80223-3_6', type: 'paper' },
      { label: 'code', url: 'https://github.com/shaowei-cai-group/relaxed-sat', type: 'code' },
      { label: 'Relaxed-LCMDCBDL-newTech', url: 'https://github.com/shaowei-cai-group/Relaxed_LCMDCBDL_newTech', type: 'code' },
      { label: 'LSTech-Maple', url: 'https://github.com/shaowei-cai-group/LSTech-Maple', type: 'code' },
      { label: 'kissat-pre', url: 'https://github.com/shaowei-cai-group/kissat_pre', type: 'code' },
      { label: 'kissat-inc', url: 'https://github.com/shaowei-cai-group/kissat_inc', type: 'code' }
    ]
  },
  {
    id: 'C2',
    featured: false,
    title: 'Pure MaxSAT and Its Applications to Combinatorial Optimization via Linear Local Search',
    authors: 'Shaowei Cai*, <strong>Xindi Zhang</strong>',
    venue: 'CP 2020', venueFull: 'International Conference on Principles and Practice of Constraint Programming',
    year: 2020, ccf: 'B',
    detail: 'pp. 90–106',
    links: [
      { label: 'Paper', url: 'https://link.springer.com/chapter/10.1007/978-3-030-58475-7_6', type: 'paper' },
      { label: 'LinearLS', url: 'codes/linearLS.zip', type: 'code' }
    ]
  },
  {
    id: 'C1',
    featured: false,
    image: 'images/nucds.png',
    title: 'NuCDS: An Efficient Local Search Algorithm for Minimum Connected Dominating Set',
    authors: 'Bohan Li, <strong>Xindi Zhang</strong>, Shaowei Cai*, Jinkun Lin, Yiyuan Wang, Cristain Blum',
    venue: 'IJCAI 2020', venueFull: 'International Joint Conference on Artificial Intelligence',
    year: 2020, ccf: 'B',
    detail: 'pp. 1503–1510',
    links: [
      { label: 'Paper', url: 'https://www.ijcai.org/Proceedings/2020/0209.pdf', type: 'paper' },
      { label: 'NuCDS', url: 'https://github.com/shaowei-cai-group/FastCDS/blob/master/NuCDS.zip', type: 'code' }
    ]
  }
];

const JOURNAL_PAPERS = [
  {
    id: 'J7',
    image: 'images/jos.png',
    title: 'Cold Restart for CDCL Algorithms',
    titleZh: 'CDCL算法的冷重启技术',
    authors: '<strong>Xindi Zhang</strong>, Zhihan Chen, Shaowei Cai*',
    authorsZh: '<strong>张昕荻</strong>，陈志翰，蔡少伟*',
    venue: 'JOS', venueFull: '软件学报',
    year: 2026, ccf: 'A',
    links: [
      { label: 'Paper', url: 'https://jos.org.cn/jos/article/abstract/7509', type: 'paper' }
    ]
  },
  {
    id: 'J6',
    image: 'images/todaes25.png',
    title: 'Datapath Combinational Equivalence Checking With Hybrid Sweeping Engines and Parallelization',
    authors: 'Zhihan Chen, <strong>Xindi Zhang</strong>, Yuhang Qian, Shaowei Cai*',
    venue: 'TODAES', venueFull: 'ACM Transactions on Design Automation of Electronic Systems',
    year: 2025, ccf: 'B',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/full/10.1145/3773040', type: 'paper' },
      { label: 'ParaHCEC', url: 'https://github.com/shaowei-cai-group/ParaHCEC', type: 'code' }
    ]
  },
  {
    id: 'J5',
    image: 'images/color.png',
    title: 'A Fast Local Search Algorithm for Minimum Sum Coloring Problem on Massive Graphs',
    authors: 'Yan Li, Mengyu Zhao, <strong>Xindi Zhang</strong>, Yiyuan Wang*',
    venue: 'COR', venueFull: 'Computers & Operations Research',
    year: 2024,
    detail: 'Vol. 172 (2024), 106794',
    links: [
      { label: 'Paper', url: 'https://www.sciencedirect.com/science/article/pii/S0305054824002661', type: 'paper' }
    ]
  },
  {
    id: 'J4',
    image: 'images/integration.png',
    title: 'A Fast Test Compaction Method Using Dedicated Pure MaxSAT Solver Embedded in DFT Flow',
    authors: 'Zhiteng Chao, <strong>Xindi Zhang</strong>, Junying Huang, Zizhen Liu, Yixuan Zhao, Jing Ye, Shaowei Cai*, Huawei Li*, Xiaowei Li',
    venue: 'Integration', venueFull: 'Integration, the VLSI Journal',
    year: 2024, ccf: 'C',
    detail: 'Vol. 100 (2024): 102265',
    links: [
      { label: 'Paper', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167926024001299', type: 'paper' }
    ]
  },
  {
    id: 'J3',
    image: 'images/CAV22-ls.png',
    title: 'Local Search For Satisfiability Modulo Integer Arithmetic Theories',
    authors: 'Shaowei Cai†*, Bohan Li†, <strong>Xindi Zhang</strong>†',
    venue: 'ToCL', venueFull: 'ACM Transactions on Computational Logic',
    year: 2023, ccf: 'B',
    detail: 'Vol 24(4): No.32, pp. 1–26 · † Co-first Author',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/full/10.1145/3597495', type: 'paper' },
      { label: 'z3++', url: 'https://github.com/shaowei-cai-group/z3pp', type: 'code' }
    ]
  },
  {
    id: 'J2',
    image: 'images/sat21_relaxed.png',
    title: 'Better Decision Heuristics in CDCL through Local Search and Target Phases',
    authors: 'Shaowei Cai*, <strong>Xindi Zhang</strong>, Mathias Fleury, Armin Biere',
    venue: 'JAIR', venueFull: 'Journal of Artificial Intelligence Research',
    year: 2022, ccf: 'B',
    detail: 'Vol. 74 (2022): 1515–1563',
    links: [
      { label: 'Paper', url: 'https://www.jair.org/index.php/jair/article/view/13666', type: 'paper' },
      { label: 'code', url: 'https://github.com/shaowei-cai-group/relaxed-sat', type: 'code' }
    ]
  },
  {
    id: 'J1',
    image: 'images/nucds.png',
    title: 'Efficient Local Search Based on Dynamic Connectivity Maintenance for Minimum Connected Dominating Set',
    authors: '<strong>Xindi Zhang</strong>, Bohan Li, Shaowei Cai*, Yiyuan Wang*',
    venue: 'JAIR', venueFull: 'Journal of Artificial Intelligence Research',
    year: 2021, ccf: 'B',
    detail: 'Vol. 71 (2021), pp. 81–119',
    links: [
      { label: 'Paper', url: 'https://www.jair.org/index.php/jair/article/view/12618', type: 'paper' },
      { label: 'FastCDS', url: 'https://github.com/shaowei-cai-group/FastCDS', type: 'code' },
      { label: 'NuCDS', url: 'https://github.com/shaowei-cai-group/FastCDS/blob/master/NuCDS.zip', type: 'code' }
    ]
  }
];

const THESIS_PAPERS = [
  {
    id: 'D',
    title: 'Hybrid Algorithms for SAT and SMT and Their Applications',
    titleZh: 'SAT和SMT问题的混合求解算法及应用',
    authors: '<strong>Xindi Zhang</strong>',
    authorsZh: '<strong>张昕荻</strong>',
    venue: 'ISCAS', venueFull: 'Institute of Software, Chinese Academy of Sciences',
    year: 2024,
    note: 'PhD Thesis',
    links: [
      { label: 'Thesis', url: 'https://drive.google.com/file/d/19msSCIx4wbdhs9ZjlN9l0SwS8bN78hLB/view?usp=sharing', type: 'paper' },
      { label: 'Slides', url: 'https://drive.google.com/file/d/1Rrxm9ceeS3v-gNCXbOc3ylLzGfqTs_Xy/view?usp=drive_link', type: 'slides' }
    ]
  }
];
