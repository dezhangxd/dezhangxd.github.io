// ============================================================
// MAIN — Page Detection & Rendering
// Uses split data files: profile.js, publications.js, etc.
// ============================================================

// ── Navigation ────────────────────────────────────────────────

function renderNav() {
  const page = document.body.dataset.page;
  // collapseAt: screen width (px) below which this item collapses into hamburger
  // 0 = never collapse; items ordered left→right by importance (rightmost = least important)
  // collapseKey: semantic CSS class for language-aware breakpoints
  const allPages = [
    { id: 'publications', href: 'publications.html', en: 'Publications', zh: '论文', collapseKey: null },
    { id: 'competitions', href: 'competitions.html', en: 'Competitions', zh: '竞赛', collapseKey: null },
    { id: 'honors', href: 'honors.html', en: 'Honors', zh: '荣誉', collapseKey: 'honors' },
    { id: 'activities', href: 'activities.html', en: 'Others', zh: '其他', collapseKey: 'others' },
    { id: 'cv', href: 'cv.html', en: 'CV', zh: '简历', collapseKey: 'cv' },
  ];
  const label = p => currentLang === 'zh' ? p.zh : p.en;
  const shortEn = { publications: 'Pubs', competitions: 'Comps' };
  const useShortEn = currentLang === 'en' && window.innerWidth <= 560;
  const navLabelText = (p) => (useShortEn && shortEn[p.id]) ? shortEn[p.id] : label(p);
  const mainLinksHtml = allPages.map(p => {
    const cls = p.collapseKey ? ` class="nav-col-${p.collapseKey}"` : '';
    return `<li${cls}><a href="${p.href}" class="${p.id === page ? 'active' : ''}">${navLabelText(p)}</a></li>`;
  }).join('');
  const overflowLinksHtml = allPages.filter(p => p.collapseKey).map(p =>
    `<li class="nav-ovf-${p.collapseKey}"><a href="${p.href}" class="${p.id === page ? 'active' : ''}">${label(p)}</a></li>`
  ).join('');
  const printBtn = page === 'cv'
    ? `<button class="nav-print-btn no-print" onclick="window.print()">
         <i class="fas fa-print"></i><span class="nav-print-label"> ${currentLang === 'zh' ? '打印 / PDF' : 'Print / PDF'}</span>
       </button>`
    : '';
  document.getElementById('navbar').innerHTML = `
    <div class="navbar-inner">
      <a class="nav-brand" href="index.html" aria-label="Home"><i class="fas fa-house"></i></a>
      <ul class="nav-links" id="nav-links">${mainLinksHtml}</ul>
      <div class="nav-overflow-wrap">
        <button class="hamburger" id="hamburger-btn" onclick="toggleMobileMenu()" aria-label="menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-overflow-menu" id="nav-overflow-menu">${overflowLinksHtml}</ul>
      </div>
      <div class="nav-right">
        ${printBtn}
        <button class="lang-btn" onclick="toggleLang()">
          <span class="lang-full">${getLangLabel()}</span>
          <span class="lang-short">${currentLang === 'en' ? '中' : 'EN'}</span>
        </button>
      </div>
    </div>`;
  document.querySelectorAll('#nav-overflow-menu a').forEach(a =>
    a.addEventListener('click', () => closeMobileMenu()));
}

function renderFooter() {
  const year = new Date().getFullYear();
  const note = currentLang === 'zh'
    ? `© ${year} ${PROFILE.nameZh} · ${PROFILE.nameEn}`
    : `© ${year} ${PROFILE.nameEn}`;
  document.getElementById('footer').innerHTML =
    `<footer class="site-footer">${note}</footer>`;
}

// ── HOME PAGE ─────────────────────────────────────────────────

function renderHome() {
  const isZh = currentLang === 'zh';

  const photoEl = `<img class="profile-photo" src="${PROFILE.avatar}" alt="${PROFILE.nameEn}"
    onerror="this.outerHTML='<div class=\\'profile-avatar-placeholder\\'>XZ</div>'">`;

  const bioParas = (isZh ? PROFILE.bioZh : PROFILE.bioEn)
    .map(s => `<p>${s}</p>`).join('');

  const hls = (isZh ? PROFILE.highlightsZh : PROFILE.highlightsEn)
    .map(h => `<li class="highlight-item">${h}</li>`).join('');

  const newsItems = NEWS.map((n, i) => `
    <li class="news-item${i >= 6 ? ' hidden news-extra' : ''}">
      <span class="news-date">${n.date}</span>
      <span class="news-text">${isZh ? n.zh : n.en}</span>
    </li>`).join('');

  const showMoreBtn = NEWS.length > 6
    ? `<button class="show-more-btn" onclick="toggleNewsMore(this)">${isZh ? '显示更多' : 'Show more'}</button>`
    : '';

  const eduItems = EDUCATION.map(e => `
    <li class="edu-item">
      <div class="edu-period">${t(e.period)}</div>
      <div>
        <div class="edu-degree">${t(e.degree)}</div>
        <div class="edu-institution">${t(e.institution)}${e.location ? `<span class="edu-detail"> ${t(e.location)}</span>` : ''}</div>
        <div class="edu-dept">${t(e.dept)}</div>
        <div class="edu-detail">${t(e.detail)}</div>
      </div>
    </li>`).join('');

  const nameMain = isZh ? PROFILE.nameZh : PROFILE.nameEn;
  const nameSub = isZh ? PROFILE.nameEn : PROFILE.nameZh;

  document.getElementById('main-content').innerHTML = `
    <div class="page-container">

      <!-- Profile -->
      <section class="profile-section">
        <div class="profile-photo-col">
          ${photoEl}
          <div class="contact-links-col">
            <a class="contact-link" href="mailto:${PROFILE.email}">
              <i class="fas fa-envelope"></i><span class="contact-label"> ${isZh ? '邮箱' : 'Email'}</span>
            </a>
            <a class="contact-link" href="${PROFILE.github}" target="_blank">
              <i class="fab fa-github"></i><span class="contact-label"> GitHub</span>
            </a>
            <a class="contact-link" href="${PROFILE.googleScholar}" target="_blank">
              <i class="fas fa-graduation-cap"></i><span class="contact-label"> Google Scholar</span>
            </a>
            <a class="contact-link" href="${PROFILE.orcid}" target="_blank">
              <i class="fab fa-orcid"></i><span class="contact-label"> ORCID</span>
            </a>
          </div>
        </div>
        <div class="profile-info">
          <div class="profile-name-row">
            <h1>${nameMain}</h1>
            <span class="name-sub">${nameSub}</span>
            <div class="contact-links-inline">
              <a class="contact-link" href="mailto:${PROFILE.email}" title="${isZh ? '邮箱' : 'Email'}"><i class="fas fa-envelope"></i></a>
              <a class="contact-link" href="${PROFILE.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
              <a class="contact-link" href="${PROFILE.googleScholar}" target="_blank" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
              <a class="contact-link" href="${PROFILE.orcid}" target="_blank" title="ORCID"><i class="fab fa-orcid"></i></a>
            </div>
          </div>
          <div class="position">${t(PROFILE.title)}</div>
          <div class="affiliation">${t(PROFILE.affiliation)}</div>
          <div class="lab-line">${t(PROFILE.lab)}</div>
          <div class="advisor-line">${t(PROFILE.advisor)}</div>
          <div class="bio-text">${bioParas}</div>
          <ul class="highlights-list">${hls}</ul>
        </div>
      </section>

      <!-- News -->
      <section class="mt-section">
        <h2 class="section-title"><span class="icon">🔥</span>${isZh ? '最新动态' : 'News'}</h2>
        <ul class="news-list">${newsItems}</ul>
        ${showMoreBtn}
      </section>

      <!-- Education -->
      <section class="mt-section">
        <h2 class="section-title"><span class="icon">📖</span>${isZh ? '教育及工作经历' : 'Education & Work Experience'}</h2>
        <ul class="edu-list">${eduItems}</ul>
      </section>

    </div>`;
  requestAnimationFrame(() => requestAnimationFrame(adjustHomeNameSub()));
}

function toggleNewsMore(btn) {
  const extras = document.querySelectorAll('.news-extra');
  const visible = !extras[0].classList.contains('hidden');
  extras.forEach(el => el.classList.toggle('hidden', visible));
  btn.textContent = visible
    ? (currentLang === 'zh' ? '显示更多' : 'Show more')
    : (currentLang === 'zh' ? '收起' : 'Show less');
}

function adjustHomeNameSub() {
  if (document.body.dataset.page !== 'home' && document.body.dataset.page) return;
  const row = document.querySelector('.profile-name-row');
  const nameSub = document.querySelector('.profile-name-row .name-sub');
  const inlineLinks = document.querySelector('.profile-name-row .contact-links-inline');
  const mainName = document.querySelector('.profile-name-row h1');
  if (!row || !nameSub || !inlineLinks || !mainName) return;

  // Reset first, then detect whether contact icons are pushed to next line.
  nameSub.style.display = '';
  const mainTop = Math.round(mainName.getBoundingClientRect().top);
  const linksTop = Math.round(inlineLinks.getBoundingClientRect().top);
  const wrapped = linksTop - mainTop >= 4;
  if (wrapped) nameSub.style.display = 'none';
}

// ── PUBLICATIONS PAGE ─────────────────────────────────────────

function makeLinkBadges(links) {
  if (!links || links.length === 0) return '';
  const icons = { paper: '📄', code: '💾', slides: '🎞️', video: '📽️', project: '🔧' };
  return links.map(lk => {
    const cls = `pub-link pub-link-${lk.type || 'paper'}`;
    const icon = icons[lk.type] || '🔗';
    return `<a class="${cls}" href="${lk.url}" target="_blank">${icon} ${lk.label}</a>`;
  }).join('');
}

function makePubItem(item, featured) {
  const isZh = currentLang === 'zh';
  const ccfBadge = item.ccf
    ? `<span class="badge badge-ccf-${item.ccf.toLowerCase()}">CCF-${item.ccf}</span>`
    : '';
  const yearSub = item.year ? `<span class="pub-id-year">${item.year}</span>` : '';
  const noteText = item.note
    ? (typeof item.note === 'object' ? (isZh ? item.note.zh : item.note.en) : item.note)
    : '';
  const noteBadge = noteText ? `<span class="badge badge-award">${noteText}</span>` : '';
  const featBadge = item.featured
    ? `<span class="featured-star">★ Featured</span>`
    : '';
  const detailEl = item.detail ? `<div class="pub-detail">${item.detail}</div>` : '';
  const linksEl = makeLinkBadges(item.links);

  // Use Chinese title/authors for JOS paper when in zh mode
  const title = (isZh && item.titleZh) ? item.titleZh : item.title;
  const authors = (isZh && item.authorsZh) ? item.authorsZh : item.authors;

  if (featured) {
    const itemType = CONFERENCE_PAPERS.find(p => p.id === item.id) ? 'conf' : 'jour';
    const badgesHtml = `<span class="badge badge-venue">${item.venue}</span>${ccfBadge}${noteBadge}`;
    const imageCol = item.image ? `
        <div class="paper-box-image">
          <div class="featured-badge">${item.id}</div>
          <img src="${item.image}" alt="${title}">
          <div class="pub-badges pub-badges-aside">${badgesHtml}</div>
        </div>` : '';
    return `
      <div class="paper-box${item.image ? '' : ' paper-box-no-image'}" data-id="${item.id}" data-type="${itemType}">
        ${imageCol}
        <div class="paper-box-text">
          <div class="pub-badges pub-badges-main">${badgesHtml}</div>
          <div class="pub-title">${title}</div>
          <div class="pub-authors">${authors}</div>
          ${detailEl}
          ${linksEl ? `<div class="pub-links">${linksEl}</div>` : ''}
        </div>
      </div>`;
  }

  const textInner = `
      <div class="pub-badges">
        <span class="badge badge-venue">${item.venue}</span>
        ${ccfBadge}${noteBadge}${featBadge}
      </div>
      <div class="pub-title">${title}</div>
      <div class="pub-authors">${authors}</div>
      ${detailEl}`;

  const pubContent = item.image ? `
      <div class="pub-content pub-content-thumb">
        <div class="pub-thumb"><img src="${item.image}" alt="${title}"></div>
        <div class="pub-text">${textInner}</div>
        ${linksEl ? `<div class="pub-links pub-links-full">${linksEl}</div>` : ''}
      </div>` : `
      <div class="pub-content">${textInner}${linksEl ? `<div class="pub-links">${linksEl}</div>` : ''}</div>`;

  return `
    <li class="pub-item" data-id="${item.id}">
      <div class="pub-id-col">
        <span class="pub-id">${item.id}</span>
        ${yearSub}
      </div>
      ${pubContent}
    </li>`;
}

function renderPublications() {
  const isZh = currentLang === 'zh';

  // Separate featured and regular
  const confFeatured = CONFERENCE_PAPERS.filter(p => p.featured);
  const confRegular = CONFERENCE_PAPERS.filter(p => !p.featured);
  const jourFeatured = JOURNAL_PAPERS.filter(p => p.featured);
  const jourRegular = JOURNAL_PAPERS.filter(p => !p.featured);

  // Build featured paper-boxes
  const featuredBoxes = [...confFeatured, ...jourFeatured]
    .map(p => makePubItem(p, true)).join('');

  const confSorted = [...confFeatured, ...confRegular]
    .sort((a, b) => (b.year || 0) - (a.year || 0));
  const confItems = confSorted.map(p => makePubItem(p, false)).join('');

  const jourSorted = [...jourFeatured, ...jourRegular]
    .sort((a, b) => (b.year || 0) - (a.year || 0));
  const jourItems = jourSorted.map(p => makePubItem(p, false)).join('');
  const thesisItems = THESIS_PAPERS.map(p => makePubItem(p, false)).join('');

  // Patents — sorted by date descending
  const sortedPatents = typeof PATENTS !== 'undefined'
    ? [...PATENTS].sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    : [];
  const patentHtml = sortedPatents.length > 0
    ? sortedPatents.map(p => {
      const statusClass = p.status === 'granted' ? 'patent-status-granted' : 'patent-status-pending';
      const statusLabel = p.status === 'granted'
        ? (isZh ? '已授权' : 'Granted')
        : (isZh ? '申请中' : 'Pending');
      const typeLabel = p.type
        ? (isZh ? p.type.zh : p.type.en)
        : '';
      const title = (isZh && p.titleZh) ? p.titleZh : p.title;
      const inventors = (isZh && p.inventorsZh) ? p.inventorsZh : p.inventors;
      const linksEl = makeLinkBadges(p.links || []);
      return `
          <div class="patent-item">
            <div class="patent-badges">
              <span class="patent-status ${statusClass}">${statusLabel}</span>
              ${typeLabel ? `<span class="patent-type">${typeLabel}</span>` : ''}
            </div>
            <div class="pub-content">
              <div class="pub-title">${title}</div>
              <div class="pub-authors">${inventors}</div>
              <div class="pub-detail">${p.number || ''} ${p.date ? '· ' + p.date : ''}</div>
              ${linksEl ? `<div class="pub-links">${linksEl}</div>` : ''}
            </div>
          </div>`;
    }).join('')
    : `<div class="patent-empty">${isZh ? '暂无专利信息' : 'No patents listed yet.'}</div>`;

  // Collect years for dropdown
  const allYears = [...new Set([
    ...CONFERENCE_PAPERS.map(p => p.year),
    ...JOURNAL_PAPERS.map(p => p.year)
  ])].sort((a, b) => b - a);
  const yearOptions = allYears.map(y =>
    `<option value="${y}">${y}</option>`
  ).join('');

  document.getElementById('main-content').innerHTML = `
    <div class="page-container">

      <div class="pub-note-bar">${isZh ? PUB_NOTE.zh : PUB_NOTE.en}</div>

      <!-- Search & Filter Bar -->
      <div class="search-bar">
        <input class="search-input" type="text" id="pub-search"
          placeholder="${isZh ? '搜索标题、作者、会议…' : 'Search title, authors, venue…'}"
          oninput="filterPubsLive()">
        <select class="year-select" id="pub-year" onchange="filterPubsLive()">
          <option value="">${isZh ? '所有年份' : 'All Years'}</option>
          ${yearOptions}
        </select>
      </div>

      <!-- Type Filter -->
      <div class="pub-filter">
        <button class="filter-btn active" data-filter="all" onclick="filterPubs(this,'all')">
          ${isZh ? '全部' : 'All'}
        </button>
        <button class="filter-btn" data-filter="conf" onclick="filterPubs(this,'conf')">
          ${isZh ? '会议' : 'Conference'} (${CONFERENCE_PAPERS.length})
        </button>
        <button class="filter-btn" data-filter="jour" onclick="filterPubs(this,'jour')">
          ${isZh ? '期刊' : 'Journal'} (${JOURNAL_PAPERS.length})
        </button>
        <button class="filter-btn" data-filter="thesis" onclick="filterPubs(this,'thesis')">
          ${isZh ? '学位论文' : 'Thesis'}
        </button>
        <button class="filter-btn" data-filter="patent" onclick="filterPubs(this,'patent')">
          ${isZh ? '专利' : 'Patents'}
        </button>
      </div>

      <!-- Featured paper-box section (only shown if has image) -->
      ${confFeatured.filter(p => p.image).length > 0 || jourFeatured.filter(p => p.image).length > 0
      ? `<div class="pub-section" data-section="featured" id="featured-section">
            ${featuredBoxes}
           </div>`
      : ''}

      <!-- Conference -->
      <div class="pub-section" data-section="conf">
        <div class="pub-section-title">${isZh ? '🗂 会议论文' : '🗂 Conference Papers'}</div>
        <ul class="pub-list" id="conf-list">${confItems}</ul>
      </div>

      <!-- Journal -->
      <div class="pub-section" data-section="jour">
        <div class="pub-section-title">${isZh ? '📔 期刊论文' : '📔 Journal Papers'}</div>
        <ul class="pub-list" id="jour-list">${jourItems}</ul>
      </div>

      <!-- Thesis -->
      <div class="pub-section" data-section="thesis">
        <div class="pub-section-title">${isZh ? '🎓 学位论文' : '🎓 Thesis'}</div>
        <ul class="pub-list" id="thesis-list">${thesisItems}</ul>
      </div>

      <!-- Patents -->
      <div class="pub-section" data-section="patent">
        <div class="pub-section-title">${isZh ? '📋 专利' : '📋 Patents'}</div>
        ${patentHtml}
      </div>

    </div>`;
}

let _currentPubFilter = 'all';

function filterPubs(btn, type) {
  _currentPubFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // First reset visibility by type, then let filterPubsLive handle search/empty hiding
  document.querySelectorAll('.pub-section').forEach(sec => {
    const secType = sec.dataset.section;
    if (secType === 'featured') {
      sec.style.display = type === 'all' ? 'block' : 'none';
    } else {
      sec.style.display = (type === 'all' || type === secType) ? 'block' : 'none';
    }
  });
  filterPubsLive();
}

function filterPubsLive() {
  const query = (document.getElementById('pub-search')?.value || '').toLowerCase().trim();
  const year = document.getElementById('pub-year')?.value || '';

  // Filter conf / jour / thesis lists (pub-item based)
  ['conf-list', 'jour-list', 'thesis-list'].forEach(listId => {
    const list = document.getElementById(listId);
    if (!list) return;
    let anyVisible = false;
    list.querySelectorAll('.pub-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      const itemYear = item.querySelector('.badge-year')?.textContent.trim() || '';
      const matchQuery = !query || text.includes(query);
      const matchYear = !year || itemYear === year;
      const show = matchQuery && matchYear;
      item.style.display = show ? '' : 'none';
      if (show) anyVisible = true;
    });
    // Hide entire section if no items visible (and section is not already type-filtered away)
    const section = list.closest('.pub-section');
    if (section && section.style.display !== 'none') {
      section.style.display = anyVisible ? '' : 'none';
    }
  });

  // Filter patent section: match query against full text; year filter doesn't apply
  const patentSection = document.querySelector('.pub-section[data-section="patent"]');
  if (patentSection && patentSection.style.display !== 'none') {
    if (query) {
      const text = patentSection.textContent.toLowerCase();
      patentSection.style.display = text.includes(query) ? '' : 'none';
    }
    // no query → keep current display (type-filter controls visibility)
  }

  // paper-boxes in featured section (only visible when filter === 'all')
  const featSection = document.getElementById('featured-section');
  if (featSection && _currentPubFilter === 'all') {
    let anyFeat = false;
    featSection.querySelectorAll('.paper-box').forEach(box => {
      const text = box.textContent.toLowerCase();
      const itemYear = box.querySelector('.badge-year')?.textContent.trim() || '';
      const matchQuery = !query || text.includes(query);
      const matchYear = !year || itemYear === year;
      const show = matchQuery && matchYear;
      box.style.display = show ? '' : 'none';
      if (show) anyFeat = true;
    });
    featSection.style.display = anyFeat ? '' : 'none';
  }
}

// ── HONORS PAGE ───────────────────────────────────────────────

function renderHonors() {
  const isZh = currentLang === 'zh';
  const honorsHtml = HONORS.map(h => {
    const proofEl = h.proof
      ? `<a class="proof-link" href="${h.proof}" target="_blank">🔍</a>`
      : '';
    const noteText = h.note
      ? (typeof h.note === 'object' ? (isZh ? h.note.zh : h.note.en) : h.note)
      : '';
    const noteEl = noteText ? `<span class="honor-note">${noteText}</span>` : '';
    return `
      <li class="honor-item">
        <span class="honor-year">${h.year}</span>
        <span class="honor-text">${isZh ? h.zh : h.en} ${noteEl}${proofEl}</span>
      </li>`;
  }).join('');

  document.getElementById('main-content').innerHTML = `
    <div class="page-container">
      <ul class="honor-list">${honorsHtml}</ul>
    </div>`;
}

// ── COMPETITIONS PAGE ─────────────────────────────────────────

function splitAward(text) {
  // Separate leading medal/trophy emojis from descriptive text
  const match = text.match(/^([\u{1F947}\u{1F948}\u{1F949}\u{1F3C6}\u{1F3E2}\u{1F396}\uFE0F\s]+)/u);
  if (match) {
    const medals = match[1].trimEnd();
    const rest = text.slice(match[1].length).trim();
    return rest
      ? `<span class="award-medals">${medals}</span><span class="award-label"> ${rest}</span>`
      : `<span class="award-medals">${medals}</span>`;
  }
  return text;
}

function renderCompetitions() {
  const isZh = currentLang === 'zh';
  const compHtml = COMPETITIONS.map(comp => {
    let prevYear = null;
    const rowsHtml = comp.results.map(r => {
      const links = [
        r.proof ? `<a class="proof-link" href="${r.proof}"      target="_blank">🔍</a>` : '',
        r.proofExtra ? `<a class="proof-link" href="${r.proofExtra}" target="_blank">🔗</a>` : '',
        r.video ? `<a class="proof-link" href="${r.video}"      target="_blank">📽️</a>` : ''
      ].join('');
      const trackCell = [r.tool, isZh ? r.track.zh : r.track.en].filter(Boolean).join(' · ');
      const yearCell = (r.year !== prevYear || r.showYear) ? r.year : '';
      prevYear = r.year;
      return `<tr>
        <td class="comp-td-year">${yearCell}</td>
        <td class="comp-td-track">${trackCell}</td>
        <td class="comp-td-award">${splitAward(isZh ? r.award.zh : r.award.en)} ${links}</td>
      </tr>`;
    }).join('');
    const linkEl = comp.url
      ? `<a class="comp-group-link" href="${comp.url}" target="_blank">${isZh ? '官网' : 'Official'}</a>`
      : '';
    return `
      <div class="comp-group">
        <div class="comp-group-header">
          <span class="comp-group-name">${t(comp.name)}</span>
          ${linkEl}
        </div>
        <table class="comp-table">
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`;
  }).join('');

  document.getElementById('main-content').innerHTML = `
    <div class="page-container">
      ${compHtml}
    </div>`;
}

// ── ACTIVITIES PAGE (News + Talks) ────────────────────────────

function renderActivities() {
  const isZh = currentLang === 'zh';

  // News tab — use NEWS from profile.js if available
  const newsData = typeof NEWS !== 'undefined' ? NEWS : [];
  const newsHtml = newsData.length > 0
    ? newsData.map(n => `
        <li class="news-item">
          <span class="news-date">${n.date}</span>
          <span class="news-text">${isZh ? n.zh : n.en}</span>
        </li>`).join('')
    : `<li class="news-item"><span class="news-text" style="color:var(--text-light)">${isZh ? '暂无新闻' : 'No news yet.'}</span></li>`;

  // Talks tab
  const talksData = typeof TALKS !== 'undefined' ? TALKS : [];
  const talksHtml = talksData.map(tk => {
    const linksArr = [];
    if (tk.slides) linksArr.push(`<a class="pub-link pub-link-slides" href="${tk.slides}" target="_blank">🎞️ Slides</a>`);
    if (tk.video) linksArr.push(`<a class="pub-link pub-link-video" href="${tk.video}" target="_blank">📽️ Video</a>`);
    if (tk.book_link) linksArr.push(`<a class="pub-link pub-link-book" href="${tk.book_link}" target="_blank">📚 ${isZh ? (tk.book || '书籍') : (tk.book || 'Book')}</a>`);
    const linksEl = linksArr.length ? `<div class="talk-links">${linksArr.join('')}</div>` : '';
    return `
      <li class="talk-item">
        <div class="talk-date">${tk.period}</div>
        <div>
          <div class="talk-title">"${isZh ? tk.titleZh : tk.titleEn}"</div>
          <div class="talk-event">${isZh ? tk.eventZh : tk.eventEn}</div>
          ${linksEl}
        </div>
      </li>`;
  }).join('');

  // Service tab
  const serviceData = typeof SERVICE !== 'undefined' ? SERVICE : [];
  const serviceHtml = serviceData.length > 0
    ? serviceData.map(cat => {
      const items = cat.items.map(it =>
        `<li class="service-item">${isZh ? it.zh : it.en}</li>`
      ).join('');
      return `
          <div class="service-category">
            <div class="service-cat-title">${t(cat.category)}</div>
            <ul class="service-list">${items}</ul>
          </div>`;
    }).join('')
    : `<p style="color:var(--text-light);font-size:.9rem">${isZh ? '暂无数据' : 'No entries yet.'}</p>`;

  document.getElementById('main-content').innerHTML = `
    <div class="page-container">

      <div class="tab-header">
        <button class="tab-btn active" onclick="switchTab(this,'tab-news')">
          ${isZh ? '🔥 新闻' : '🔥 News'} (${newsData.length})
        </button>
        <button class="tab-btn" onclick="switchTab(this,'tab-talks')">
          ${isZh ? '💬 讲座' : '💬 Talks'} (${talksData.length})
        </button>
        <button class="tab-btn" onclick="switchTab(this,'tab-service')">
          ${isZh ? '👥 学术服务' : '👥 Service'}
        </button>
      </div>

      <div id="tab-news" class="tab-panel active">
        <ul class="news-list">${newsHtml}</ul>
      </div>

      <div id="tab-talks" class="tab-panel">
        <ul class="talk-list">${talksHtml}</ul>
      </div>

      <div id="tab-service" class="tab-panel">
        ${serviceHtml}
      </div>
    </div>`;
}

function switchTab(btn, tabId) {
  const container = btn.closest('.page-container') || document;
  container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ── CV PAGE ───────────────────────────────────────────────────

function renderCV() {
  const isZh = currentLang === 'zh';

  const cvPhotoEl = PROFILE.avatar
    ? `<img class="cv-photo" src="${PROFILE.avatar}" alt="${PROFILE.nameEn}"
         onerror="this.outerHTML='<div class=\\'cv-avatar-placeholder\\'>XZ</div>'">`
    : `<div class="cv-avatar-placeholder">XZ</div>`;

  // Education
  const eduHtml = EDUCATION.map(e => `
    <div class="cv-entry">
      <div class="cv-entry-date">${t(e.period)}</div>
      <div class="cv-entry-content">
        <div class="cv-entry-title">${t(e.degree)}</div>
        <div class="cv-entry-sub">${t(e.institution)}${e.location ? `<span class="cv-entry-detail"> ${t(e.location)}</span>` : ''}</div>
        <div class="cv-entry-sub">${t(e.dept)}</div>
        <div class="cv-entry-detail">${t(e.detail)}</div>
      </div>
    </div>`).join('');

  // Publication item for CV — title bolded
  function cvPubItem(item) {
    const isZh2 = currentLang === 'zh';
    const title = (isZh2 && item.titleZh) ? item.titleZh : item.title;
    const authors = (isZh2 && item.authorsZh) ? item.authorsZh : item.authors;
    const venuePart = item.venueFull
      ? `<span class="cv-pub-venue">${item.venue}</span> (${item.venueFull}), ${item.year}`
      : `<span class="cv-pub-venue">${item.venue}</span>, ${item.year}`;
    const noteText = item.note
      ? (typeof item.note === 'object' ? (isZh2 ? item.note.zh : item.note.en) : item.note)
      : '';
    const noteHighlighted = noteText
      ? noteText
        .replace(/最佳论文奖/g, '<span style="color:#dc2626;white-space:nowrap">最佳论文奖</span>')
        .replace(/Best Paper Award/g, '<span style="color:#dc2626;white-space:nowrap">Best Paper Award</span>')
      : '';
    const notePart = noteHighlighted ? ` <strong>[${noteHighlighted}]</strong>` : '';
    const ccfPart = item.ccf ? ` <strong>[CCF-${item.ccf}]</strong>` : '';
    return `<div class="cv-pub-item">
      [${item.id}] ${authors}. <strong>"${title}"</strong>. ${venuePart}.${ccfPart}${notePart}
    </div>`;
  }

  const confPubHtml = CONFERENCE_PAPERS.map(p => cvPubItem(p)).join('');
  const jourPubHtml = JOURNAL_PAPERS.map(p => cvPubItem(p)).join('');
  const thesisPubHtml = THESIS_PAPERS.map(p => cvPubItem(p)).join('');

  // Patents
  const patentsHtml = typeof PATENTS !== 'undefined' && PATENTS.length > 0
    ? [...PATENTS]
      .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
      .map((p, idx, arr) => {
        const title = (isZh && p.titleZh) ? p.titleZh : p.title;
        const inventors = (isZh && p.inventorsZh) ? p.inventorsZh : p.inventors;
        const typeLabel = p.type
          ? (isZh ? p.type.zh : p.type.en)
          : (isZh ? '中国发明专利' : 'Chinese Patent');
        const statusLabel = p.status === 'granted'
          ? (isZh ? '已授权' : 'Granted')
          : (isZh ? '申请中' : 'Pending');
        const displayId = `P${arr.length - idx}`;
        return `<div class="cv-pub-item">
          [${displayId}] ${inventors}. <strong>"${title}"</strong>. [${typeLabel}] ${p.number || ''}, ${p.date || ''}. [${statusLabel}]
        </div>`;
      }).join('')
    : `<div class="cv-entry-detail">${isZh ? '（暂无）' : '(None)'}</div>`;

  // Honors
  const highlightAwardTerms = (text) => {
    if (!text) return '';
    const terms = isZh
      ? ['亚洲首个', '最佳论文奖', '最佳博士论文奖']
      : ['First from Asia', 'Best Paper Award', 'PhD Thesis Award'];
    let out = text;
    if (isZh) {
      out = out.replace(
        /国际SAT协会[\s\S]*?（每年全球遴选一位）/g,
        '<span style="white-space:nowrap">$&</span>'
      );
      out = out.replace(/亚洲首个/g, '<span style="white-space:nowrap">亚洲首个</span>');
    }
    terms.forEach(term => {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      out = out.replace(
        new RegExp(escaped, 'g'),
        `<span style="color:#dc2626;white-space:nowrap">${term}</span>`
      );
    });
    return out;
  };

  const honorsHtml = HONORS.map(h => `
    <div class="cv-entry">
      <div class="cv-entry-date">${h.year}</div>
      <div class="cv-entry-content">
        <div class="cv-entry-title">${highlightAwardTerms(isZh ? h.zh : h.en)}</div>
        ${h.note ? `<div class="cv-entry-detail">${highlightAwardTerms(typeof h.note === 'object' ? (isZh ? h.note.zh : h.note.en) : h.note)}</div>` : ''}
      </div>
    </div>`).join('');

  // Competitions summary
  const compSummaryHtml = COMPETITIONS.map(comp => {
    let prevYear = null;
    const rowsHtml = comp.results.map(r => {
      const trackCell = [r.tool, isZh ? r.track.zh : r.track.en].filter(Boolean).join(' · ');
      const yearCell = (r.year !== prevYear || r.showYear) ? r.year : '';
      prevYear = r.year;
      return `<tr>
        <td class="comp-td-year">${yearCell}</td>
        <td class="comp-td-track">${trackCell}</td>
        <td class="comp-td-award">${splitAward(isZh ? r.award.zh : r.award.en)}</td>
      </tr>`;
    }).join('');
    return `
      <div class="comp-group cv-comp-group">
        <div class="comp-group-header cv-comp-group-header">
          <span class="comp-group-name">${t(comp.name)}</span>
        </div>
        <table class="comp-table cv-comp-table">
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`;
  }).join('');

  // Talks
  const talksData = typeof TALKS !== 'undefined' ? TALKS : [];
  const talksHtml = talksData.map(tk => `
    <div class="cv-entry">
      <div class="cv-entry-date">${tk.period}</div>
      <div class="cv-entry-content">
        <div class="cv-entry-title">"${isZh ? tk.titleZh : tk.titleEn}"</div>
        <div class="cv-entry-sub">${isZh ? tk.eventZh : tk.eventEn}</div>
      </div>
    </div>`).join('');

  // Service
  const serviceData = typeof SERVICE !== 'undefined' ? SERVICE : [];
  const serviceHtml = serviceData.map(cat => {
    const items = cat.items.map(it =>
      `<div class="cv-entry cv-entry-service">
        <div class="cv-entry-date"></div>
        <div class="cv-entry-content" style="font-size:.85rem">${isZh ? it.zh : it.en}</div>
      </div>`
    ).join('');
    return `<div style="margin-bottom:.6rem">
      <div style="font-weight:600;font-size:.85rem;color:var(--text-muted);margin-bottom:.25rem">${t(cat.category)}</div>
      ${items}
    </div>`;
  }).join('');

  const cvNameMain = isZh ? PROFILE.nameZh : PROFILE.nameEn;
  const cvNameSub = isZh ? PROFILE.nameEn : PROFILE.nameZh;

  document.getElementById('main-content').innerHTML = `
    <div class="cv-container">

      <!-- Header -->
      <div class="cv-header">
        <div class="cv-header-top">
          <div class="cv-header-text">
            <div class="cv-name-row">
              <div class="cv-name">${cvNameMain}</div>
              <div class="cv-name-sub">${cvNameSub}</div>
            </div>
            <div class="cv-position">${t(PROFILE.title)}</div>
            <div class="cv-affiliation">${t(PROFILE.affiliation)}</div>
            <div class="cv-affiliation">${t(PROFILE.lab)}</div>
            <div class="cv-affiliation cv-research-line">
              ${isZh
      ? '研究方向：SAT 求解 · SMT 求解 · EDA 形式化验证'
      : 'Research Interests: SAT Solving · SMT Solving · EDA Formal Verification'}
            </div>
            <div class="cv-contact" style="margin-top:.5rem">
          <span><i class="fas fa-envelope"></i> <a href="mailto:${PROFILE.email}">${isZh ? '邮箱' : 'Email'}</a></span>
          <span><i class="fab fa-github"></i> <a href="${PROFILE.github}" target="_blank">GitHub</a></span>
          <span><i class="fas fa-graduation-cap"></i> <a href="${PROFILE.googleScholar}" target="_blank">Google Scholar</a></span>
          <span><i class="fab fa-orcid"></i> <a href="${PROFILE.orcid}" target="_blank">ORCID</a></span>
            </div>
          </div>
          <div class="cv-header-photo">${cvPhotoEl}</div>
        </div>
      </div>

      <!-- Education -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '教育及工作经历' : 'Education & Work Experience'}</div>
        ${eduHtml}
      </div>

      <!-- Awards & Honors -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '荣誉奖项' : 'Awards & Honors'}</div>
        ${honorsHtml}
      </div>

      <!-- Competitions -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '竞赛成绩' : 'Competition Results'}</div>
        ${compSummaryHtml}
      </div>

      <!-- Conference Papers -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '会议论文' : 'Conference Papers'}</div>
        <div style="font-size:.78rem;color:var(--text-muted);margin-bottom:.5rem">${isZh ? PUB_NOTE.zh : PUB_NOTE.en}</div>
        ${confPubHtml}
      </div>

      <!-- Journal Papers -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '期刊论文' : 'Journal Papers'}</div>
        ${jourPubHtml}
      </div>

      <!-- Thesis -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '学位论文' : 'Thesis'}</div>
        ${thesisPubHtml}
      </div>

      <!-- Patents -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '专利' : 'Patents'}</div>
        ${patentsHtml}
      </div>

      <!-- Talks -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '受邀讲座' : 'Invited Talks'}</div>
        ${talksHtml}
      </div>

      <!-- Academic Service -->
      <div class="cv-section">
        <div class="cv-section-title">${isZh ? '学术服务' : 'Academic Service'}</div>
        ${serviceHtml}
      </div>

    </div>`;

  // 英文版窄屏：检测头像是否导致文字换行，若是则隐藏
  // 双 RAF 确保 float 布局完全生效后再测量
  requestAnimationFrame(() => requestAnimationFrame(adjustProfileAvatar));
}

function adjustProfileAvatar() {
  const photoCol = document.querySelector('.profile-photo-col');
  if (!photoCol) return;
  // 首页头像默认尽量显示，不再根据窄屏自动隐藏
  photoCol.style.display = '';
}

// ── Shared Utilities ──────────────────────────────────────────

function toggleMobileMenu() {
  const menu = document.getElementById('nav-overflow-menu');
  const btn = document.getElementById('hamburger-btn');
  if (menu) menu.classList.toggle('open');
  if (btn) btn.classList.toggle('open');
}
function closeMobileMenu() {
  const menu = document.getElementById('nav-overflow-menu');
  const btn = document.getElementById('hamburger-btn');
  if (menu) menu.classList.remove('open');
  if (btn) btn.classList.remove('open');
}

function ensureImageViewer() {
  if (document.getElementById('image-viewer')) return;
  const viewer = document.createElement('div');
  viewer.id = 'image-viewer';
  viewer.className = 'image-viewer hidden';
  viewer.innerHTML = `<img class="image-viewer-img" alt="preview">`;
  viewer.addEventListener('click', (e) => {
    if (e.target === viewer) viewer.classList.add('hidden');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') viewer.classList.add('hidden');
  });
  document.body.appendChild(viewer);
}

function setupImagePreview() {
  ensureImageViewer();
  const viewer = document.getElementById('image-viewer');
  const viewerImg = viewer?.querySelector('.image-viewer-img');
  if (!viewer || !viewerImg) return;
  document.querySelectorAll('#main-content img').forEach(img => {
    img.classList.add('previewable-img');
    if (img.dataset.previewBound === '1') return;
    img.dataset.previewBound = '1';
    img.addEventListener('click', () => {
      viewerImg.src = img.currentSrc || img.src;
      viewerImg.alt = img.alt || 'preview';
      viewer.classList.remove('hidden');
    });
  });
}

function render() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  renderNav();
  renderFooter();

  const page = document.body.dataset.page;
  switch (page) {
    case 'home': renderHome(); break;
    case 'publications': renderPublications(); break;
    case 'honors': renderHonors(); break;
    case 'competitions': renderCompetitions(); break;
    case 'activities': renderActivities(); break;
    case 'cv': renderCV(); break;
    default: renderHome();
  }
  setupImagePreview();
}

document.addEventListener('DOMContentLoaded', render);
window.addEventListener('resize', () => {
  if (document.body.dataset.page === 'home' || !document.body.dataset.page) {
    adjustProfileAvatar();
    adjustHomeNameSub();
  }
});
