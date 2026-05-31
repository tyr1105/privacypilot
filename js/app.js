/**
 * PrivacyPilot - Main Application Logic
 * Free Privacy Policy & Terms Generator
 */

(function () {
  'use strict';

  // Current state
  let currentType = null;
  let generatedHTML = '';
  let generatedTitle = '';

  // ========== INITIALIZATION ==========
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initDocCards();
    initFAQ();
    initBannerBuilder();
  });

  // ========== NAVIGATION ==========
  function initNav() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Mobile menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      });
    }
  }

  // ========== DOC CARDS ==========
  function initDocCards() {
    document.querySelectorAll('.doc-card').forEach(card => {
      card.addEventListener('click', () => {
        const type = card.dataset.type;
        openGenerator(type);
      });
    });
  }

  function openGenerator(type) {
    currentType = type;
    // Hide landing sections
    document.querySelectorAll('.landing-section').forEach(s => s.classList.add('hidden'));
    // Hide other generators
    document.querySelectorAll('.generator-section').forEach(s => s.classList.remove('active'));
    // Show target generator
    const gen = document.getElementById(`generator-${type}`);
    if (gen) {
      gen.classList.add('active');
      gen.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Bind form submit
    const form = gen.querySelector('form');
    if (form) {
      form.onsubmit = e => {
        e.preventDefault();
        handleGenerate(type, form);
      };
    }
    // Bind back button
    const backBtn = gen.querySelector('.back-btn');
    if (backBtn) {
      backBtn.onclick = () => closeGenerator();
    }
  }

  function closeGenerator() {
    document.querySelectorAll('.generator-section').forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    document.querySelectorAll('.landing-section').forEach(s => s.classList.remove('hidden'));
    // Hide output
    document.querySelectorAll('.output-section').forEach(s => s.classList.remove('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentType = null;
  }

  // ========== FORM HANDLING ==========
  function getFormData(form) {
    const data = {};
    const fd = new FormData(form);
    for (const [key, val] of fd.entries()) {
      if (data[key]) {
        if (!Array.isArray(data[key])) data[key] = [data[key]];
        data[key].push(val);
      } else {
        data[key] = val;
      }
    }
    // Handle unchecked checkboxes (they don't appear in FormData)
    form.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      if (!fd.has(cb.name)) {
        if (!data[cb.name]) data[cb.name] = [];
      }
    });
    // Normalize arrays
    Object.keys(data).forEach(k => {
      if (typeof data[k] === 'string' && form.querySelector(`input[name="${k}"][type="checkbox"]`)) {
        data[k] = [data[k]];
      }
    });
    return data;
  }

  function handleGenerate(type, form) {
    const data = getFormData(form);

    let html = '';
    const titleMap = {
      privacy: data.language === 'zh' ? '隐私政策' : 'Privacy Policy',
      terms: data.language === 'zh' ? '服务条款' : 'Terms of Service',
      cookies: data.language === 'zh' ? 'Cookie 政策' : 'Cookie Policy',
      disclaimer: data.language === 'zh' ? '免责声明' : 'Disclaimer',
    };

    switch (type) {
      case 'privacy':
        html = generatePrivacyPolicy(data);
        break;
      case 'terms':
        html = generateTermsOfService(data);
        break;
      case 'cookies':
        html = generateCookiePolicy(data);
        break;
      case 'disclaimer':
        html = generateDisclaimer(data);
        break;
    }

    generatedHTML = html;
    generatedTitle = titleMap[type] || 'Document';

    displayOutput(html, titleMap[type], data);
  }

  // ========== OUTPUT DISPLAY ==========
  function displayOutput(html, title, data) {
    const outputSection = document.getElementById('output-section');
    if (!outputSection) return;

    outputSection.classList.add('active');
    outputSection.style.display = 'block';

    const preview = outputSection.querySelector('.output-preview');
    if (preview) {
      preview.innerHTML = html;
      preview.contentEditable = true;
    }

    // Bind toolbar buttons
    bindOutputButtons(title, html, data);

    // Generate embed code
    const embedSection = outputSection.querySelector('.embed-code');
    if (embedSection) {
      const snippet = Templates.generatePageEmbedSnippet(title, html);
      embedSection.textContent = snippet;
    }

    // Scroll to output
    setTimeout(() => {
      outputSection.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }

  function bindOutputButtons(title, html, data) {
    const outputSection = document.getElementById('output-section');

    // Copy to clipboard
    const copyBtn = outputSection.querySelector('[data-action="copy"]');
    if (copyBtn) {
      copyBtn.onclick = () => {
        const preview = outputSection.querySelector('.output-preview');
        const text = preview ? preview.innerText : '';
        navigator.clipboard.writeText(text).then(() => {
          showToast(data.language === 'zh' ? '已复制到剪贴板！' : 'Copied to clipboard!');
        });
      };
    }

    // Download HTML
    const dlHtmlBtn = outputSection.querySelector('[data-action="download-html"]');
    if (dlHtmlBtn) {
      dlHtmlBtn.onclick = () => {
        const preview = outputSection.querySelector('.output-preview');
        const content = preview ? preview.innerHTML : html;
        const fullHTML = Templates.generateFullHTML(title, content, data.language === 'zh' ? 'zh-CN' : 'en');
        downloadFile(`${title}.html`, fullHTML, 'text/html');
      };
    }

    // Download TXT
    const dlTxtBtn = outputSection.querySelector('[data-action="download-txt"]');
    if (dlTxtBtn) {
      dlTxtBtn.onclick = () => {
        const preview = outputSection.querySelector('.output-preview');
        const text = preview ? preview.innerText : '';
        downloadFile(`${title}.txt`, text, 'text/plain');
      };
    }

    // Copy embed code
    const copyEmbedBtn = outputSection.querySelector('[data-action="copy-embed"]');
    if (copyEmbedBtn) {
      copyEmbedBtn.onclick = () => {
        const embedCode = outputSection.querySelector('.embed-code');
        if (embedCode) {
          navigator.clipboard.writeText(embedCode.textContent).then(() => {
            showToast(data.language === 'zh' ? '嵌入代码已复制！' : 'Embed code copied!');
          });
        }
      };
    }
  }

  // ========== COOKIE BANNER BUILDER ==========
  function initBannerBuilder() {
    const builder = document.getElementById('banner-builder');
    if (!builder) return;

    const inputs = builder.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => updateBannerPreview());
      input.addEventListener('change', () => updateBannerPreview());
    });

    // Copy banner code
    const copyBannerBtn = builder.querySelector('[data-action="copy-banner"]');
    if (copyBannerBtn) {
      copyBannerBtn.onclick = () => {
        const code = generateBannerCode();
        navigator.clipboard.writeText(code).then(() => {
          showToast('Cookie Banner 代码已复制！');
        });
      };
    }

    // Initial preview
    updateBannerPreview();
  }

  function getBannerConfig() {
    const builder = document.getElementById('banner-builder');
    if (!builder) return {};

    return {
      bgColor: (builder.querySelector('[name="banner-bg"]') || {}).value || '#1a1a2e',
      textColor: (builder.querySelector('[name="banner-text"]') || {}).value || '#ffffff',
      btnColor: (builder.querySelector('[name="banner-btn"]') || {}).value || '#6c5ce7',
      btnTextColor: (builder.querySelector('[name="banner-btn-text"]') || {}).value || '#ffffff',
      position: (builder.querySelector('[name="banner-position"]') || {}).value || 'bottom',
      style: (builder.querySelector('[name="banner-style"]') || {}).value || 'bar',
      lang: (builder.querySelector('[name="banner-lang"]') || {}).value || 'zh',
    };
  }

  function updateBannerPreview() {
    const container = document.getElementById('banner-preview');
    if (!container) return;

    const config = getBannerConfig();
    const code = Templates.generateCookieBanner(config);
    container.innerHTML = code;
    // Force show
    const banner = container.querySelector('#cookie-consent-banner');
    if (banner) banner.style.display = 'block';
  }

  function generateBannerCode() {
    const config = getBannerConfig();
    return Templates.generateCookieBanner(config);
  }

  // ========== FAQ ==========
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        item.classList.toggle('open');
      });
    });
  }

  // ========== UTILITIES ==========
  function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType + ';charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function showToast(message) {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

})();
