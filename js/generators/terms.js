/**
 * PrivacyPilot - Terms of Service Generator
 */

function generateTermsOfService(data) {
  const isZh = data.language === 'zh';
  const today = new Date().toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const siteName = data.siteName || (isZh ? '您的网站' : 'Your Website');
  const siteUrl = data.siteUrl || '#';
  const contactEmail = data.contactEmail || 'legal@example.com';
  const serviceType = data.serviceType || 'other';
  const hasAccounts = data.hasAccounts !== false;
  const hasUGC = data.hasUGC || false;
  const hasPaid = data.hasPaid || false;
  const ageRestriction = data.ageRestriction || 'none';
  const governingLaw = data.governingLaw || 'china';

  let html = '';

  html += `<h1>${isZh ? '服务条款' : 'Terms of Service'}</h1>\n`;
  html += `<p class="effective-date">${isZh ? `生效日期：${today}` : `Effective Date: ${today}</p>\n`}`;

  // Intro
  html += `<h2>${isZh ? '1. 接受条款' : '1. Acceptance of Terms'}</h2>\n`;
  if (isZh) {
    html += `<p>欢迎使用 ${siteName}（以下简称"本服务"）。访问或使用本服务即表示您同意受本服务条款的约束。如果您不同意这些条款，请不要使用本服务。</p>\n`;
    html += `<p>我们保留随时修改或替换这些条款的权利。继续使用本服务即表示您接受修改后的条款。</p>\n`;
  } else {
    html += `<p>Welcome to ${siteName} (the "Service"). By accessing or using the Service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>\n`;
    html += `<p>We reserve the right to modify or replace these terms at any time. Your continued use of the Service after any changes constitutes acceptance of the new terms.</p>\n`;
  }

  // Service Description
  html += `<h2>${isZh ? '2. 服务描述' : '2. Description of Service'}</h2>\n`;
  const serviceTypeDescZh = {
    'ecommerce': '电子商务平台',
    'saas': '软件即服务（SaaS）平台',
    'blog': '博客/内容发布平台',
    'mobile-app': '移动应用程序',
    'other': '在线服务平台',
  };
  const serviceTypeDescEn = {
    'ecommerce': 'e-commerce platform',
    'saas': 'Software as a Service (SaaS) platform',
    'blog': 'blog/content publishing platform',
    'mobile-app': 'mobile application',
    'other': 'online service platform',
  };
  const svcDesc = isZh ? serviceTypeDescZh : serviceTypeDescEn;
  if (isZh) {
    html += `<p>${siteName} 是一个${svcDesc[serviceType] || '在线服务'}。我们提供通过 ${siteUrl} 访问的服务。我们保留随时修改或终止服务（或其任何部分）的权利，恕不另行通知。</p>\n`;
  } else {
    html += `<p>${siteName} is an ${svcDesc[serviceType] || 'online service'}. We provide the service accessible through ${siteUrl}. We reserve the right to modify or discontinue the Service (or any part thereof) at any time without notice.</p>\n`;
  }

  // User Accounts
  if (hasAccounts) {
    html += `<h2>${isZh ? '3. 用户账户' : '3. User Accounts'}</h2>\n`;
    if (isZh) {
      html += `<p>使用本服务的某些功能可能需要创建账户。您同意：</p>\n<ul>\n`;
      html += `<li>提供真实、准确、完整和最新的注册信息</li>\n`;
      html += `<li>维护并及时更新您的账户信息以确保其准确性</li>\n`;
      html += `<li>对您的账户下发生的所有活动负责</li>\n`;
      html += `<li>保护您的账户密码安全</li>\n`;
      html += `<li>如发现未经授权使用您的账户，立即通知我们</li>\n`;
      html += `</ul>\n`;
    } else {
      html += `<p>Access to certain features of the Service may require you to create an account. You agree to:</p>\n<ul>\n`;
      html += `<li>Provide true, accurate, current, and complete information during registration</li>\n`;
      html += `<li>Maintain and promptly update your account information to keep it accurate</li>\n`;
      html += `<li>Accept responsibility for all activities that occur under your account</li>\n`;
      html += `<li>Keep your account password secure</li>\n`;
      html += `<li>Immediately notify us of any unauthorized use of your account</li>\n`;
      html += `</ul>\n`;
    }
  }

  // User-Generated Content
  if (hasUGC) {
    html += `<h2>${isZh ? '4. 用户生成内容' : '4. User-Generated Content'}</h2>\n`;
    if (isZh) {
      html += `<p>您通过本服务发布或提交的任何内容（包括但不限于文字、图片、视频、评论）由您自行负责。通过发布内容，您授予我们：</p>\n<ul>\n`;
      html += `<li>在全球范围内使用、复制、修改、分发和展示该内容的非独占许可</li>\n`;
      html += `<li>为保证服务质量而处理该内容的权利</li>\n`;
      html += `</ul>\n`;
      html += `<p>您声明并保证您拥有所提交内容的所有权利，或已获得发布该内容所需的所有许可。您同意不发布以下内容：</p>\n<ul>\n`;
      html += `<li>违反任何法律法规的内容</li>\n`;
      html += `<li>侵犯他人知识产权的内容</li>\n`;
      html += `<li>包含恶意软件或病毒的内容</li>\n`;
      html += `<li>骚扰、威胁或诽谤他人的内容</li>\n`;
      html += `<li>垃圾邮件或未经授权的广告</li>\n`;
      html += `</ul>\n`;
    } else {
      html += `<p>Any content you post or submit through the Service (including but not limited to text, images, videos, and comments) is your responsibility. By posting content, you grant us:</p>\n<ul>\n`;
      html += `<li>A non-exclusive license to use, copy, modify, distribute, and display the content worldwide</li>\n`;
      html += `<li>The right to process the content to ensure service quality</li>\n`;
      html += `</ul>\n`;
      html += `<p>You represent and warrant that you own all rights to the content you submit or have obtained all necessary permissions. You agree not to post content that:</p>\n<ul>\n`;
      html += `<li>Violates any laws or regulations</li>\n`;
      html += `<li>Infringes on the intellectual property rights of others</li>\n`;
      html += `<li>Contains malware or viruses</li>\n`;
      html += `<li>Harasses, threatens, or defames others</li>\n`;
      html += `<li>Constitutes spam or unauthorized advertising</li>\n`;
      html += `</ul>\n`;
    }
  }

  // Payment Terms
  if (hasPaid) {
    html += `<h2>${isZh ? '5. 付费服务' : '5. Paid Services'}</h2>\n`;
    if (isZh) {
      html += `<p>本服务的某些功能可能需要付费。使用付费服务即表示您同意：</p>\n<ul>\n`;
      html += `<li>支付所有适用的费用和税费</li>\n`;
      html += `<li>提供准确的付款信息</li>\n`;
      html += `<li>我们可以在提前通知的情况下更改价格</li>\n`;
      html += `<li>除非法律要求或我们另有规定，付款不予退还</li>\n`;
      html += `</ul>\n`;
      html += `<p>我们不保证特定功能或内容的持续可用性。我们保留对付费服务进行更改的权利。</p>\n`;
    } else {
      html += `<p>Some features of the Service may require payment. By using paid services, you agree to:</p>\n<ul>\n`;
      html += `<li>Pay all applicable fees and taxes</li>\n`;
      html += `<li>Provide accurate payment information</li>\n`;
      html += `<li>Prices may change with advance notice</li>\n`;
      html += `<li>Payments are non-refundable except as required by law or at our discretion</li>\n`;
      html += `</ul>\n`;
      html += `<p>We do not guarantee the continued availability of any particular feature or content. We reserve the right to make changes to paid services.</p>\n`;
    }
  }

  // Intellectual Property
  html += `<h2>${isZh ? '6. 知识产权' : '6. Intellectual Property'}</h2>\n`;
  if (isZh) {
    html += `<p>本服务及其原始内容、功能和特点是 ${siteName} 的专有财产，并受国际版权、商标、专利和其他知识产权法律的保护。未经我们书面同意，您不得以任何方式复制、修改、分发或以其他方式使用本服务的任何部分。</p>\n`;
  } else {
    html += `<p>The Service and its original content, features, and functionality are the exclusive property of ${siteName} and are protected by international copyright, trademark, patent, and other intellectual property laws. You may not copy, modify, distribute, or otherwise use any part of the Service without our written consent.</p>\n`;
  }

  // Prohibited Uses
  html += `<h2>${isZh ? '7. 禁止使用' : '7. Prohibited Uses'}</h2>\n`;
  if (isZh) {
    html += `<p>您同意不以以下方式使用本服务：</p>\n<ul>\n`;
    html += `<li>违反任何适用的法律法规</li>\n`;
    html += `<li>侵犯他人的权利</li>\n`;
    html += `<li>传播病毒或其他有害代码</li>\n`;
    html += `<li>试图未经授权访问我们的系统</li>\n`;
    html += `<li>进行自动化数据收集（爬虫）未经授权</li>\n`;
    html += `<li>干扰其他用户使用本服务</li>\n`;
    html += `<li>用于任何非法或未经授权的目的</li>\n`;
    html += `</ul>\n`;
  } else {
    html += `<p>You agree not to use the Service in the following ways:</p>\n<ul>\n`;
    html += `<li>In violation of any applicable laws or regulations</li>\n`;
    html += `<li>To infringe upon the rights of others</li>\n`;
    html += `<li>To transmit viruses or other harmful code</li>\n`;
    html += `<li>To attempt unauthorized access to our systems</li>\n`;
    html += `<li>To engage in unauthorized automated data collection (scraping)</li>\n`;
    html += `<li>To interfere with other users' use of the Service</li>\n`;
    html += `<li>For any illegal or unauthorized purpose</li>\n`;
    html += `</ul>\n`;
  }

  // Limitation of Liability
  html += `<h2>${isZh ? '8. 责任限制' : '8. Limitation of Liability'}</h2>\n`;
  if (isZh) {
    html += `<p>在适用法律允许的最大范围内，${siteName} 及其董事、员工、合作伙伴、代理人和供应商不对任何间接、偶然、特殊、后果性或惩罚性损害负责，包括但不限于利润损失、数据丢失、商誉损失或其他无形损失。</p>\n`;
    html += `<p>本服务按"原样"和"可用"基础提供。我们不保证本服务将不间断、及时、安全或无错误。</p>\n`;
  } else {
    html += `<p>To the maximum extent permitted by applicable law, ${siteName} and its directors, employees, partners, agents, and suppliers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, goodwill, or other intangible losses.</p>\n`;
    html += `<p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.</p>\n`;
  }

  // Age Restriction
  if (ageRestriction !== 'none') {
    html += `<h2>${isZh ? '9. 年龄限制' : '9. Age Restrictions'}</h2>\n`;
    const ageMap = { '13': '13', '16': '16', '18': '18' };
    const age = ageMap[ageRestriction] || ageRestriction;
    if (isZh) {
      html += `<p>本服务不面向 ${age} 岁以下的人士。如果您未满 ${age} 岁，请不要使用本服务。如果您是 ${age} 岁以下用户的父母或监护人，并认为您的孩子使用了本服务，请联系我们。</p>\n`;
    } else {
      html += `<p>This Service is not intended for individuals under the age of ${age}. If you are under ${age}, please do not use this Service. If you are a parent or guardian of a user under ${age} who you believe has used the Service, please contact us.</p>\n`;
    }
  }

  // Termination
  html += `<h2>${isZh ? '10. 终止' : '10. Termination'}</h2>\n`;
  if (isZh) {
    html += `<p>我们有权因任何理由随时暂停或终止您对本服务的访问，包括违反本条款。终止后，您使用本服务的权利将立即停止。</p>\n`;
  } else {
    html += `<p>We reserve the right to suspend or terminate your access to the Service at any time for any reason, including a breach of these Terms. Upon termination, your right to use the Service will immediately cease.</p>\n`;
  }

  // Governing Law
  html += `<h2>${isZh ? '11. 管辖法律' : '11. Governing Law'}</h2>\n`;
  const lawMapZh = { 'china': '中华人民共和国法律', 'us': '美利坚合众国法律', 'eu': '欧盟法律', 'uk': '英国法律', 'other': '适用司法管辖区的法律' };
  const lawMapEn = { 'china': 'the laws of the People\'s Republic of China', 'us': 'the laws of the United States of America', 'eu': 'the laws of the European Union', 'uk': 'the laws of the United Kingdom', 'other': 'the laws of the applicable jurisdiction' };
  const lawName = isZh ? (lawMapZh[governingLaw] || lawMapZh.other) : (lawMapEn[governingLaw] || lawMapEn.other);
  if (isZh) {
    html += `<p>本条款受${lawName}管辖并据其解释，不考虑法律冲突条款。因本条款引起的任何争议应提交有管辖权的法院解决。</p>\n`;
  } else {
    html += `<p>These Terms shall be governed by and construed in accordance with ${lawName}, without regard to conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of the competent jurisdiction.</p>\n`;
  }

  // Contact
  html += `<h2>${isZh ? '12. 联系我们' : '12. Contact Us'}</h2>\n`;
  if (isZh) {
    html += `<p>如果您对本服务条款有任何疑问，请联系我们：</p>\n<ul>\n`;
    html += `<li>电子邮件：${contactEmail}</li>\n`;
    html += `<li>网站：${siteUrl}</li>\n`;
    html += `</ul>\n`;
  } else {
    html += `<p>If you have any questions about these Terms of Service, please contact us at:</p>\n<ul>\n`;
    html += `<li>Email: ${contactEmail}</li>\n`;
    html += `<li>Website: ${siteUrl}</li>\n`;
    html += `</ul>\n`;
  }

  // Disclaimer
  html += `<div class="legal-disclaimer">\n`;
  if (isZh) {
    html += `<strong>免责声明：</strong>本服务条款由 PrivacyPilot 自动生成，仅供参考。它不构成法律建议。我们建议您在将此文档用于您的网站之前咨询专业律师，以确保其符合您的特定需求和适用的法律要求。\n`;
  } else {
    html += `<strong>Disclaimer:</strong> These Terms of Service were auto-generated by PrivacyPilot and are provided for informational purposes only. They do not constitute legal advice. We recommend consulting with a qualified attorney before using this document on your website to ensure it meets your specific needs and applicable legal requirements.\n`;
  }
  html += `</div>\n`;

  return html;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateTermsOfService };
}
