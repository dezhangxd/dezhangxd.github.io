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

<div class="lang-content lang-content-en">
  <p>Special Research Assistant &amp; post-doctor in <a href='http://solver.ios.ac.cn/'>Constraint Solving Lab</a>, <a href='http://klss.ios.ac.cn/'>Key Laboratory of Systems Software</a>, <a href='https://lcs.ios.ac.cn/'>State Key Laboratory of Computer Science</a>, <a href='http://www.iscas.ac.cn'>Institute of Software, Chinese Academy of Sciences</a>, Beijing, China.</p>
  
  <p>Group is lead by <a href='http://people.ucas.ac.cn/~caisw'>Prof. Shaowei Cai (蔡少伟)</a>.</p>
  
  <p>My research interests are <a href='https://en.wikipedia.org/wiki/Boolean_satisfiability_problem'>SAT</a>, <a href='https://en.wikipedia.org/wiki/Satisfiability_modulo_theories'>SMT</a>, <a href='https://en.wikipedia.org/wiki/Electronic_design_automation'>EDA</a> and etc.</p>
</div>

<div class="lang-content lang-content-zh" style="display: none;">
  <p><a href='http://www.iscas.ac.cn'>中国科学院软件研究所</a>特别研究助理 &amp; 博士后，隶属于<a href='http://solver.ios.ac.cn/'>约束求解实验室</a>、<a href='http://klss.ios.ac.cn/'>系统软件重点实验室</a>、<a href='https://lcs.ios.ac.cn/'>计算机科学国家重点实验室</a>，位于中国北京。</p>
  
  <p>课题组负责人为<a href='http://people.ucas.ac.cn/~caisw'>蔡少伟研究员</a>。</p>
  
  <p>我的研究兴趣包括<a href='https://en.wikipedia.org/wiki/Boolean_satisfiability_problem'>SAT</a>、<a href='https://en.wikipedia.org/wiki/Satisfiability_modulo_theories'>SMT</a>、<a href='https://en.wikipedia.org/wiki/Electronic_design_automation'>EDA</a>等。</p>
</div>




{% include_relative pages/news.md %}

{% include_relative pages/awards.md %}

{% include_relative pages/competition.md %}

{% include_relative pages/publications.md %}

{% include_relative pages/educations.md %}

{% include_relative pages/talks.md %}


<!-- 
# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->