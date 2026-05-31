/**
 * PrivacyPilot - Cookie Policy Generator
 */

function generateCookiePolicy(data) {
  const isZh = data.language === 'zh';
  const today = new Date().toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const siteName = data.siteName || (isZh ? '您的网站' : 'Your Website');
  const siteUrl = data.siteUrl || '#';
  const cookieTypes = data.cookieTypes || ['essential'];
  const thirdPartyCookies = data.thirdPartyCookies || [];
  const cookieDuration = data.cookieDuration || '1year';

  let html = '';

  html += `<h1>${isZh ? 'Cookie 政策' : 'Cookie Policy'}</h1>\n`;
  html += `<p class="effective-date">${isZh ? `生效日期：${today}` : `Effective Date: ${today}`}</p>\n`;

  // Introduction
  html += `<h2>${isZh ? '1. 什么是 Cookie？' : '1. What Are Cookies?'}</h2>\n`;
  if (isZh) {
    html += `<p>Cookie 是由网站发送到您浏览器的小型文本文件，存储在您的设备上。它们被广泛用于使网站高效运行并提供信息给网站所有者。本 Cookie 政策解释了 ${siteName} 如何使用 Cookie 及类似技术。</p>\n`;
  } else {
    html += `<p>Cookies are small text files sent from a website to your browser and stored on your device. They are widely used to make websites work efficiently and provide information to website owners. This Cookie Policy explains how ${siteName} uses cookies and similar technologies.</p>\n`;
  }

  // How We Use Cookies
  html += `<h2>${isZh ? '2. 我们如何使用 Cookie' : '2. How We Use Cookies'}</h2>\n`;
  if (isZh) {
    html += `<p>我们使用 Cookie 的目的如下：</p>\n`;
  } else {
    html += `<p>We use cookies for the following purposes:</p>\n`;
  }

  // Essential
  if (cookieTypes.includes('essential')) {
    html += `<h3>${isZh ? '2.1 必要 Cookie' : '2.1 Essential Cookies'}</h3>\n`;
    if (isZh) {
      html += `<p>这些 Cookie 是网站正常运行所必需的。它们使您能够在页面之间导航并使用安全区域。没有这些 Cookie，网站无法正常运作。</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie 名称</th><th style="padding:8px;text-align:left;border:1px solid #ddd">用途</th><th style="padding:8px;text-align:left;border:1px solid #ddd">持续时间</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">session_id</td><td style="padding:8px;border:1px solid #ddd">维持会话状态</td><td style="padding:8px;border:1px solid #ddd">会话期间</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">csrf_token</td><td style="padding:8px;border:1px solid #ddd">安全防护</td><td style="padding:8px;border:1px solid #ddd">会话期间</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">cookie_consent</td><td style="padding:8px;border:1px solid #ddd">记住您的 Cookie 偏好</td><td style="padding:8px;border:1px solid #ddd">1 年</td></tr>\n`;
      html += `</table>\n`;
    } else {
      html += `<p>These cookies are necessary for the website to function properly. They enable you to navigate between pages and use secure areas. Without these cookies, the website cannot function.</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie Name</th><th style="padding:8px;text-align:left;border:1px solid #ddd">Purpose</th><th style="padding:8px;text-align:left;border:1px solid #ddd">Duration</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">session_id</td><td style="padding:8px;border:1px solid #ddd">Maintains session state</td><td style="padding:8px;border:1px solid #ddd">Session</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">csrf_token</td><td style="padding:8px;border:1px solid #ddd">Security protection</td><td style="padding:8px;border:1px solid #ddd">Session</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">cookie_consent</td><td style="padding:8px;border:1px solid #ddd">Remembers your cookie preferences</td><td style="padding:8px;border:1px solid #ddd">1 year</td></tr>\n`;
      html += `</table>\n`;
    }
  }

  // Analytics
  if (cookieTypes.includes('analytics')) {
    html += `<h3>${isZh ? '2.2 分析 Cookie' : '2.2 Analytics Cookies'}</h3>\n`;
    if (isZh) {
      html += `<p>这些 Cookie 帮助我们了解访客如何与网站互动，收集的信息是汇总的。这些 Cookie 用于改善我们网站的功能和用户体验。</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie 名称</th><th style="padding:8px;text-align:left;border:1px solid #ddd">用途</th><th style="padding:8px;text-align:left;border:1px solid #ddd">持续时间</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_ga</td><td style="padding:8px;border:1px solid #ddd">Google Analytics - 区分用户</td><td style="padding:8px;border:1px solid #ddd">2 年</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_ga_*</td><td style="padding:8px;border:1px solid #ddd">Google Analytics - 保持会话状态</td><td style="padding:8px;border:1px solid #ddd">2 年</td></tr>\n`;
      html += `</table>\n`;
    } else {
      html += `<p>These cookies help us understand how visitors interact with the website by collecting information in an aggregated form. These cookies are used to improve the functionality and user experience of our website.</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie Name</th><th style="padding:8px;text-align:left;border:1px solid #ddd">Purpose</th><th style="padding:8px;text-align:left;border:1px solid #ddd">Duration</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_ga</td><td style="padding:8px;border:1px solid #ddd">Google Analytics - Distinguishes users</td><td style="padding:8px;border:1px solid #ddd">2 years</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_ga_*</td><td style="padding:8px;border:1px solid #ddd">Google Analytics - Maintains session state</td><td style="padding:8px;border:1px solid #ddd">2 years</td></tr>\n`;
      html += `</table>\n`;
    }
  }

  // Marketing
  if (cookieTypes.includes('marketing')) {
    html += `<h3>${isZh ? '2.3 营销 Cookie' : '2.3 Marketing Cookies'}</h3>\n`;
    if (isZh) {
      html += `<p>这些 Cookie 用于跟踪访客在各个网站上的活动。其目的是展示与个别用户相关的广告。这些 Cookie 由第三方广告合作伙伴设置。</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie 名称</th><th style="padding:8px;text-align:left;border:1px solid #ddd">用途</th><th style="padding:8px;border:1px solid #ddd">持续时间</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_fbp</td><td style="padding:8px;border:1px solid #ddd">Facebook Pixel - 广告效果跟踪</td><td style="padding:8px;border:1px solid #ddd">3 个月</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_gcl_au</td><td style="padding:8px;border:1px solid #ddd">Google Ads - 转化跟踪</td><td style="padding:8px;border:1px solid #ddd">3 个月</td></tr>\n`;
      html += `</table>\n`;
    } else {
      html += `<p>These cookies are used to track visitors across websites. The intention is to display ads that are relevant to individual users. These cookies are set by third-party advertising partners.</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie Name</th><th style="padding:8px;text-align:left;border:1px solid #ddd">Purpose</th><th style="padding:8px;border:1px solid #ddd">Duration</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_fbp</td><td style="padding:8px;border:1px solid #ddd">Facebook Pixel - Ad tracking</td><td style="padding:8px;border:1px solid #ddd">3 months</td></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">_gcl_au</td><td style="padding:8px;border:1px solid #ddd">Google Ads - Conversion tracking</td><td style="padding:8px;border:1px solid #ddd">3 months</td></tr>\n`;
      html += `</table>\n`;
    }
  }

  // Functional
  if (cookieTypes.includes('functional')) {
    html += `<h3>${isZh ? '2.4 功能性 Cookie' : '2.4 Functional Cookies'}</h3>\n`;
    if (isZh) {
      html += `<p>这些 Cookie 允许网站记住您所做的选择（如语言偏好、字体大小），以提供更个性化的体验。</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie 名称</th><th style="padding:8px;text-align:left;border:1px solid #ddd">用途</th><th style="padding:8px;text-align:left;border:1px solid #ddd">持续时间</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">lang_preference</td><td style="padding:8px;border:1px solid #ddd">记住您的语言偏好</td><td style="padding:8px;border:1px solid #ddd">1 年</td></tr>\n`;
      html += `</table>\n`;
    } else {
      html += `<p>These cookies allow the website to remember choices you make (such as language preference, font size) to provide a more personalized experience.</p>\n`;
      html += `<table style="width:100%;border-collapse:collapse;margin:12px 0">\n`;
      html += `<tr style="background:#f0f0f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Cookie Name</th><th style="padding:8px;text-align:left;border:1px solid #ddd">Purpose</th><th style="padding:8px;text-align:left;border:1px solid #ddd">Duration</th></tr>\n`;
      html += `<tr><td style="padding:8px;border:1px solid #ddd">lang_preference</td><td style="padding:8px;border:1px solid #ddd">Remembers your language preference</td><td style="padding:8px;border:1px solid #ddd">1 year</td></tr>\n`;
      html += `</table>\n`;
    }
  }

  // Third-party cookies
  if (thirdPartyCookies.length > 0) {
    html += `<h2>${isZh ? '3. 第三方 Cookie' : '3. Third-Party Cookies'}</h2>\n`;
    if (isZh) {
      html += `<p>我们使用以下第三方服务，它们可能会设置自己的 Cookie：</p>\n<ul>\n`;
    } else {
      html += `<p>We use the following third-party services that may set their own cookies:</p>\n<ul>\n`;
    }
    const tpDescZh = {
      'google-analytics': 'Google Analytics - 用于网站流量分析',
      'facebook-pixel': 'Facebook Pixel - 用于广告效果跟踪',
      'google-ads': 'Google Ads - 用于广告转化跟踪',
      'hotjar': 'Hotjar - 用于用户行为分析',
      'intercom': 'Intercom - 用于客户支持聊天',
      'hubspot': 'HubSpot - 用于营销自动化',
    };
    const tpDescEn = {
      'google-analytics': 'Google Analytics - For website traffic analysis',
      'facebook-pixel': 'Facebook Pixel - For ad performance tracking',
      'google-ads': 'Google Ads - For ad conversion tracking',
      'hotjar': 'Hotjar - For user behavior analysis',
      'intercom': 'Intercom - For customer support chat',
      'hubspot': 'HubSpot - For marketing automation',
    };
    const tpDesc = isZh ? tpDescZh : tpDescEn;
    thirdPartyCookies.forEach(tp => {
      html += `<li>${tpDesc[tp] || tp}</li>\n`;
    });
    html += `</ul>\n`;
  }

  // Duration
  html += `<h2>${isZh ? '4. Cookie 保留时间' : '4. Cookie Duration'}</h2>\n`;
  const durMapZh = { 'session': '会话期间（浏览器关闭后自动删除）', '1month': '1 个月', '6months': '6 个月', '1year': '1 年', '2years': '2 年' };
  const durMapEn = { 'session': 'Session (automatically deleted when browser is closed)', '1month': '1 month', '6months': '6 months', '1year': '1 year', '2years': '2 years' };
  const durName = isZh ? (durMapZh[cookieDuration] || durMapZh['1year']) : (durMapEn[cookieDuration] || durMapEn['1year']);
  if (isZh) {
    html += `<p>不同类型的 Cookie 有不同的保留时间。大多数 Cookie 的最长保留时间为 ${durName}。会话 Cookie 在您关闭浏览器时自动删除。持久性 Cookie 将在设定的到期日期后自动删除。</p>\n`;
  } else {
    html += `<p>Different types of cookies have different retention periods. Most cookies have a maximum retention period of ${durName}. Session cookies are automatically deleted when you close your browser. Persistent cookies are automatically deleted after their set expiration date.</p>\n`;
  }

  // Managing Cookies
  html += `<h2>${isZh ? '5. 如何管理 Cookie' : '5. How to Manage Cookies'}</h2>\n`;
  if (isZh) {
    html += `<p>您可以通过以下方式控制和管理 Cookie：</p>\n<ul>\n`;
    html += `<li><strong>浏览器设置：</strong>大多数浏览器允许您通过设置偏好来管理 Cookie。您可以设置浏览器拒绝 Cookie 或在设置 Cookie 时提醒您。</li>\n`;
    html += `<li><strong>退出工具：</strong>您可以使用 Network Advertising Initiative 的退出页面（<a href="http://www.networkadvertising.org/choices/" target="_blank">www.networkadvertising.org/choices</a>）来退出定向广告。</li>\n`;
    html += `<li><strong>我们的同意工具：</strong>当您首次访问我们的网站时，我们会在您同意之前征求您的 Cookie 偏好。</li>\n`;
    html += `</ul>\n`;
    html += `<p>请注意，禁用某些 Cookie 可能会影响网站的功能。</p>\n`;
  } else {
    html += `<p>You can control and manage cookies in the following ways:</p>\n<ul>\n`;
    html += `<li><strong>Browser Settings:</strong> Most browsers allow you to manage cookies through their settings. You can set your browser to refuse cookies or alert you when cookies are being set.</li>\n`;
    html += `<li><strong>Opt-Out Tools:</strong> You can use the Network Advertising Initiative's opt-out page (<a href="http://www.networkadvertising.org/choices/" target="_blank">www.networkadvertising.org/choices</a>) to opt-out of targeted advertising.</li>\n`;
    html += `<li><strong>Our Consent Tool:</strong> When you first visit our website, we ask for your cookie preferences before you consent.</li>\n`;
    html += `</ul>\n`;
    html += `<p>Please note that disabling certain cookies may affect the functionality of the website.</p>\n`;
  }

  // Changes
  html += `<h2>${isZh ? '6. Cookie 政策的变更' : '6. Changes to Cookie Policy'}</h2>\n`;
  if (isZh) {
    html += `<p>我们可能会不时更新本 Cookie 政策。任何变更将在本页面上发布。我们建议您定期查看此政策以了解最新的 Cookie 使用信息。</p>\n`;
  } else {
    html += `<p>We may update this Cookie Policy from time to time. Any changes will be posted on this page. We recommend reviewing this policy periodically for the latest information on our use of cookies.</p>\n`;
  }

  // Contact
  html += `<h2>${isZh ? '7. 联系我们' : '7. Contact Us'}</h2>\n`;
  if (isZh) {
    html += `<p>如果您对本 Cookie 政策有任何疑问，请通过我们的网站 ${siteUrl} 联系我们。</p>\n`;
  } else {
    html += `<p>If you have any questions about this Cookie Policy, please contact us through our website at ${siteUrl}.</p>\n`;
  }

  // Disclaimer
  html += `<div class="legal-disclaimer">\n`;
  if (isZh) {
    html += `<strong>免责声明：</strong>本 Cookie 政策由 PrivacyPilot 自动生成，仅供参考。它不构成法律建议。我们建议您在将此政策用于您的网站之前咨询专业律师。\n`;
  } else {
    html += `<strong>Disclaimer:</strong> This Cookie Policy was auto-generated by PrivacyPilot and is provided for informational purposes only. It does not constitute legal advice. We recommend consulting with a qualified attorney before using this policy on your website.\n`;
  }
  html += `</div>\n`;

  return html;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateCookiePolicy };
}
