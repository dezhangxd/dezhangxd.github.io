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

I am now a Ph.D. student in [State Key Laboratory of Computer Science](https://lcs.ios.ac.cn/), [Institute of Software](http://www.iscas.ac.cn), Chinese Academy of Sciences, Beijing, China. My supervisor is [Prof. Shaowei Cai (蔡少伟)](http://people.ucas.ac.cn/~caisw). 

My research interests are [SAT](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem), [SMT](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories), [EDA](https://en.wikipedia.org/wiki/Electronic_design_automation) and etc.



# 🔥 News
- *2024.06*: &nbsp;🎉🎉 “中国科学院大学 院长奖-特别奖”
- *2024.05*: &nbsp;🎉🎉 ISEDA talk: "Practical Boolean SAT Solving Techniques".



{% include_relative pages/publications.md %}


{% include_relative pages/awards.md %}


# 📖 Educations
- *Aug. 2018 - now*, M.D & Ph.D. student, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, China.
- *Aug. 2014 - Jul. 2018*, B.Eng. in Software Engineering, College of Software; B.A. in Finace, School of Economics. Jilin University, Changchun, China.


{% include_relative pages/talks.md %}


<!-- 
# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->