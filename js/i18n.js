// ============================================================
// i18n — Language Switching
// ============================================================

let currentLang = localStorage.getItem('lang') || 'zh';
// 初始化时同步设置 html[lang]，使 CSS 语言断点立即生效
document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

/**
 * Get translation for a bilingual object {en, zh} or plain string.
 */
function t(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj.en || '';
}

/**
 * Toggle language and re-render, preserving scroll position, active tab, and pub filter.
 */
function toggleLang() {
  // Save state before re-render
  const scrollY = window.scrollY;
  const activeTabId = document.querySelector('.tab-panel.active')?.id;
  const savedFilter = typeof _currentPubFilter !== 'undefined' ? _currentPubFilter : 'all';
  const searchVal = document.getElementById('pub-search')?.value || '';
  const yearVal   = document.getElementById('pub-year')?.value   || '';

  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('lang', currentLang);
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  render();

  // 1. Restore active tab first (tab switch changes content height)
  if (activeTabId) {
    const btn = document.querySelector(`.tab-btn[onclick*="${activeTabId}"]`);
    if (btn && typeof switchTab === 'function') switchTab(btn, activeTabId);
  }

  // 2. Restore scroll after tab is set (page height is now stable)
  window.scrollTo(0, scrollY);

  // 3. Restore pub filter/search + 重新检测头像（双 RAF 确保布局稳定）
  requestAnimationFrame(() => {
    if (typeof filterPubs === 'function') {
      const filterBtn = document.querySelector(`.filter-btn[data-filter="${savedFilter}"]`);
      if (filterBtn) filterPubs(filterBtn, savedFilter);
    }
    const searchEl = document.getElementById('pub-search');
    if (searchEl && searchVal) {
      searchEl.value = searchVal;
      if (typeof filterPubsLive === 'function') filterPubsLive();
    }
    const yearEl = document.getElementById('pub-year');
    if (yearEl && yearVal) {
      yearEl.value = yearVal;
      if (typeof filterPubsLive === 'function') filterPubsLive();
    }
    // 语言切换后再次检测头像（renderHome 内的 double-RAF 可能已在此之前执行完）
    requestAnimationFrame(() => {
      if (typeof adjustProfileAvatar === 'function') adjustProfileAvatar();
    });
  });
}

/**
 * Get the label for the language toggle button.
 */
function getLangLabel() {
  return currentLang === 'en' ? '中文' : 'English';
}
