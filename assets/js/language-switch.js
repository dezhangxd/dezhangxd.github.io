/* ==========================================================================
   Language Switch Functionality
   ========================================================================== */

(function () {
  'use strict';

  // 全局变量 language_en，默认为 true (英文)
  window.language_en = window.language_en !== undefined ? window.language_en : true;

  // 更新导航链接文本
  function updateNavigationText() {
    // 更新所有带有 data-lang-en 和 data-lang-zh 属性的链接
    var navLinks = document.querySelectorAll('.visible-links a[data-lang-en], .visible-links a[data-lang-zh]');
    navLinks.forEach(function (link) {
      if (window.language_en) {
        // 显示英文
        var enText = link.getAttribute('data-lang-en');
        if (enText) {
          link.textContent = enText;
        }
      } else {
        // 显示中文
        var zhText = link.getAttribute('data-lang-zh');
        if (zhText) {
          link.textContent = zhText;
        }
      }
    });
  }

  // 更新按钮文本
  function updateButtonText() {
    var langSwitchBtn = document.getElementById('lang-switch-btn');
    if (langSwitchBtn) {
      langSwitchBtn.textContent = window.language_en ? '中文' : 'English';
    }
  }

  // 更新所有文本
  function updateAllText() {
    updateNavigationText();
    updateButtonText();
  }

  // 切换语言
  function switchLanguage() {
    window.language_en = !window.language_en;
    updateAllText();
  }

  // 将函数暴露到全局作用域
  window.switchLanguage = switchLanguage;

  // DOM加载完成后初始化
  function initLanguage() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateAllText);
    } else {
      updateAllText();
    }
  }

  initLanguage();
})();
