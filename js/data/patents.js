// ============================================================
// DATA: Patents
// Add patent entries here as: { id, title, titleZh, inventors,
//   inventorsZh, type, number, date, status, links }
// type: { en, zh }  e.g. Chinese Patent / 中国发明专利
// status: 'granted' | 'pending'
// ============================================================

const PATENTS = [
  {
    id: 'P6',
    title: 'A Method for Distributed Datapath Combinational Equivalence Checking and Distributed Server',
    titleZh: '分布式数据通路组合等价性验证方法及分布式服务器',
    inventors: 'Xindi Zhang, Shaowei Cai',
    inventorsZh: '张昕荻，蔡少伟',
    type: { en: 'Chinese Patent', zh: '中国发明专利' },
    number: 'ZL 2024 1 1510697.7',
    date: '2025-05-16',
    status: 'granted'
  },
  {
    id: 'P5',
    title: 'A Parallel Solving Method for Boolean Satisfiability Problem Based on Divide-and-Conquer',
    titleZh: '一种基于过程中分治的布尔可满足性问题并行求解方法',
    inventors: 'Xindi Zhang, Shaowei Cai',
    inventorsZh: '张昕荻，蔡少伟',
    type: { en: 'Chinese Patent', zh: '中国发明专利' },
    number: '202410441708.4',
    date: '2024-07-26',
    status: 'pending'
  },
  {
    id: 'P4',
    title: 'A Software Assertion Verification Method, System and Device Based on Incremental SMT Solving',
    titleZh: '基于增量SMT问题求解的软件断言验证方法、系统及设备',
    inventors: 'Shaowei Cai, Xindi Zhang',
    inventorsZh: '蔡少伟，张昕荻',
    type: { en: 'Chinese Patent', zh: '中国发明专利' },
    number: 'ZL 2023 1 1656869.7',
    date: '2024-06-21',
    status: 'granted'
  },
  {
    id: 'P3',
    title: 'A Property-Guided Reachability Enhanced Bounded Model Checking Method and System',
    titleZh: '一种基于属性指导可达性的增强限界模型检查方法和系统',
    inventors: 'Lingfeng Zhu, Xindi Zhang, Yongjian Li, Shaowei Cai',
    inventorsZh: '朱凌峰，张昕荻，李勇坚，蔡少伟',
    type: { en: 'Chinese Patent', zh: '中国发明专利' },
    number: '202311680532.X',
    date: '2024-03-12',
    status: 'pending'
  },
  {
    id: 'P2',
    title: 'A Method and Apparatus for Multiplicative Complexity Optimization Based on Boolean Difference',
    titleZh: '基于布尔差分的乘法复杂度优化方法及装置',
    inventors: 'Shaowei Cai, Xindi Zhang',
    inventorsZh: '蔡少伟，张昕荻',
    type: { en: 'Chinese Patent', zh: '中国发明专利' },
    number: '202310736402.7',
    date: '2023-09-13',
    status: 'pending'
  },
  {
    id: 'P1',
    title: 'A Combinational Circuit Equivalence Verification Method and System Based on Complete Simulation',
    titleZh: '一种基于完备仿真的组合运算电路等价性验证方法及系统',
    inventors: 'Zhihan Chen, Yuhang Qian, Xindi Zhang, Shaowei Cai',
    inventorsZh: '陈志翰，钱宇航，张昕荻，蔡少伟',
    type: { en: 'Chinese Patent', zh: '中国发明专利' },
    number: 'ZL 2023 1 0068006.1',
    date: '2023-08-08',
    status: 'granted'
  }
];
