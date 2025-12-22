/* ==========================================================================
   Language Switch Functionality
   ========================================================================== */

(function () {
  'use strict';

  // 全局变量 language_en，默认为 false (中文)
  window.language_en = window.language_en !== undefined ? window.language_en : false;

  // 更新导航链接文本
  function updateNavigationText() {
    // 更新所有带有 data-lang-en 和 data-lang-zh 属性的链接（包括可见和隐藏的）
    var navLinks = document.querySelectorAll('.visible-links a[data-lang-en], .visible-links a[data-lang-zh], .hidden-links a[data-lang-en], .hidden-links a[data-lang-zh]');
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

  // 更新语言内容块（包含多个段落的内容）
  function updateLangContentBlocks() {
    // 显示/隐藏语言内容块
    var enBlocks = document.querySelectorAll('.lang-content-en');
    var zhBlocks = document.querySelectorAll('.lang-content-zh');

    if (window.language_en) {
      // 显示英文，隐藏中文
      enBlocks.forEach(function (block) {
        block.style.display = '';
      });
      zhBlocks.forEach(function (block) {
        block.style.display = 'none';
      });
    } else {
      // 显示中文，隐藏英文
      enBlocks.forEach(function (block) {
        block.style.display = 'none';
      });
      zhBlocks.forEach(function (block) {
        block.style.display = '';
      });
    }
  }

  // 更新作者资料中的文本（Email、Google Scholar、地址等）和页面标题（h1）
  function updateAuthorProfileText() {
    // 更新所有带有 data-lang-en 和 data-lang-zh 属性的元素
    var profileElements = document.querySelectorAll('[data-lang-en], [data-lang-zh]');
    profileElements.forEach(function (element) {
      // 跳过导航链接，因为它们已经由 updateNavigationText 处理
      if (element.closest('.visible-links') || element.closest('.hidden-links')) {
        return;
      }
      // 跳过语言内容块，因为它们已经由 updateLangContentBlocks 处理
      if (element.closest('.lang-content')) {
        return;
      }

      if (window.language_en) {
        // 显示英文
        var enText = element.getAttribute('data-lang-en');
        if (enText) {
          // 对于 h1 和 h2 标题，使用 innerHTML 以保留 emoji 等特殊字符
          if (element.tagName === 'H1' || element.tagName === 'H2') {
            element.innerHTML = enText;
          } else if (enText.indexOf('<') !== -1) {
            // 检查是否包含 HTML 标签
            element.innerHTML = enText;
          } else {
            element.textContent = enText;
          }
        }
      } else {
        // 显示中文
        var zhText = element.getAttribute('data-lang-zh');
        if (zhText) {
          // 对于 h1 和 h2 标题，使用 innerHTML 以保留 emoji 等特殊字符
          if (element.tagName === 'H1' || element.tagName === 'H2') {
            element.innerHTML = zhText;
          } else if (zhText.indexOf('<') !== -1) {
            // 检查是否包含 HTML 标签
            element.innerHTML = zhText;
          } else {
            element.textContent = zhText;
          }
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
    updateLangContentBlocks();
    updateAuthorProfileText();
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
