---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<span data-lang-en="I am now a Special Research Assistant (post-doctor) in <a href='http://solver.ios.ac.cn/'>Constraint Solving Lab</a>, <a href='http://klss.ios.ac.cn/'>Key Laboratory of Systems Software</a>, <a href='https://lcs.ios.ac.cn/'>State Key Laboratory of Computer Science</a>, <a href='http://www.iscas.ac.cn'>Institute of Software, Chinese Academy of Sciences</a>, Beijing, China." data-lang-zh="我现在是<a href='http://solver.ios.ac.cn/'>约束求解实验室</a>、<a href='http://klss.ios.ac.cn/'>系统软件重点实验室</a>、<a href='https://lcs.ios.ac.cn/'>计算机科学国家重点实验室</a>、<a href='http://www.iscas.ac.cn'>中国科学院软件研究所</a>的特聘研究助理（博士后），位于中国北京。">I am now a Special Research Assistant (post-doctor) in <a href='http://solver.ios.ac.cn/'>Constraint Solving Lab</a>, <a href='http://klss.ios.ac.cn/'>Key Laboratory of Systems Software</a>, <a href='https://lcs.ios.ac.cn/'>State Key Laboratory of Computer Science</a>, <a href='http://www.iscas.ac.cn'>Institute of Software, Chinese Academy of Sciences</a>, Beijing, China.</span> 

My cooperating mentor is  is [Prof. Shaowei Cai (蔡少伟)](http://people.ucas.ac.cn/~caisw). 

My research interests are [SAT](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem), [SMT](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories), [EDA](https://en.wikipedia.org/wiki/Electronic_design_automation) and etc.




{% include_relative pages/news.md %}

{% include_relative pages/publications.md %}


{% include_relative pages/awards.md %}


{% include_relative pages/educations.md %}




{% include_relative pages/talks.md %}


<!-- 
# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->