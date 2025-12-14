/* ==========================================================================
   Language Switch Functionality
   ========================================================================== */

(function () {
  'use strict';

  // 获取保存的语言偏好，默认为英文
  function getSavedLanguage() {
    return localStorage.getItem('preferred-language') || 'en';
  }

  // 保存语言偏好
  function saveLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
  }

  // 切换语言
  function switchLanguage() {
    var currentLang = getSavedLanguage();
    var newLang = currentLang === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
  }

  // 设置语言
  function setLanguage(lang) {
    // 保存语言偏好
    saveLanguage(lang);

    // 使用CSS类来控制显示，更可靠
    document.body.classList.remove('lang-en', 'lang-zh');
    document.body.classList.add('lang-' + lang);

    // 更新导航链接文本和URL
    var navLinks = document.querySelectorAll('.masthead__menu-item--nav a, .masthead__menu-item--lg a');
    navLinks.forEach(function (link) {
      if (lang === 'zh') {
        // 切换到中文
        var zhText = link.getAttribute('data-lang-zh');
        var zhUrl = link.getAttribute('data-url-zh');
        if (zhText) {
          link.textContent = zhText;
        }
        if (zhUrl) {
          link.setAttribute('href', zhUrl);
        }
      } else {
        // 切换到英文
        var enText = link.getAttribute('data-lang-en');
        var enUrl = link.getAttribute('data-url-en');
        if (enText) {
          link.textContent = enText;
        }
        if (enUrl) {
          link.setAttribute('href', enUrl);
        }
      }
    });

    // 更新语言切换按钮文本
    var langSwitchBtn = document.getElementById('lang-switch-btn');
    if (langSwitchBtn) {
      langSwitchBtn.textContent = lang === 'en' ? '中文' : 'English';
    }

    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  // 页面加载时初始化语言
  function initLanguage() {
    var savedLang = getSavedLanguage();
    // 直接调用setLanguage，它会设置body类并更新所有内容
    setLanguage(savedLang);
  }

  // 将函数暴露到全局作用域
  window.switchLanguage = switchLanguage;
  window.setLanguage = setLanguage;

  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    // 如果DOM已经加载完成，立即初始化
    if (document.body) {
      initLanguage();
    } else {
      // 如果body还不存在，等待一下
      setTimeout(initLanguage, 0);
    }
  }
})();
