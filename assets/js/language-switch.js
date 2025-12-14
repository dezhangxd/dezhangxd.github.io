/* ==========================================================================
   Language Switch Functionality
   ========================================================================== */

(function () {
  'use strict';

  // 全局变量 language_en，默认为 true (英文)
  window.language_en = window.language_en !== undefined ? window.language_en : true;

  // 更新按钮文本
  function updateButtonText() {
    var langSwitchBtn = document.getElementById('lang-switch-btn');
    if (langSwitchBtn) {
      langSwitchBtn.textContent = window.language_en ? '中文' : 'English';
    }
  }

  // 切换语言
  function switchLanguage() {
    window.language_en = !window.language_en;
    updateButtonText();
  }

  // 将函数暴露到全局作用域
  window.switchLanguage = switchLanguage;

  // DOM加载完成后初始化按钮文本
  function initLanguageButton() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateButtonText);
    } else {
      updateButtonText();
    }
  }

  initLanguageButton();
})();
