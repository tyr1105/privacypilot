/**
 * PrivacyPilot - Privacy Policy Generator
 * Generates professional privacy policy documents in Chinese and English
 */

function generatePrivacyPolicy(data) {
  const isZh = data.language === 'zh';
  const today = new Date().toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const siteName = data.siteName || (isZh ? '您的网站' : 'Your Website');
  const siteUrl = data.siteUrl || '#';
  const contactEmail = data.contactEmail || (isZh ? 'privacy@example.com' : 'privacy@example.com');
  const companyName = data.companyName || siteName;

  // Data collection sections
  const dataTypes = data.dataCollected || [];
  const thirdParty = data.thirdPartyServices || [];
  const regulations = data.regulations || [];
  const useCookies = data.useCookies !== false;
  const hasBlog = data.hasBlog !== false;

  let html = '';

  // Title
  html += `<h1>${isZh ? '隐私政策' : 'Privacy Policy'}</h1>\n`;
  html += `<p class="effective-date">${isZh ? `生效日期：${today}` : `Effective Date: ${today}`}</p>\n`;

  // Introduction
  html += `<h2>${isZh ? '1. 引言' : '1. Introduction'}</h2>\n`;
  if (isZh) {
    html += `<p>${companyName}（以下简称"我们"）运营网站 ${siteUrl}（以下简称"本网站"）。本页面旨在告知您我们收集哪些个人信息、为何收集以及如何使用和保护这些信息。</p>\n`;
    html += `<p>我们高度重视您的隐私，并承诺按照适用的隐私法律法规保护您的个人信息。使用本网站即表示您同意本隐私政策中描述的做法。</p>\n`;
  } else {
    html += `<p>${companyName} ("we," "us," or "our") operates the website ${siteUrl} (the "Site"). This page informs you of our policies regarding the collection, use, and protection of personal information when you use our Site.</p>\n`;
    html += `<p>We take your privacy seriously and are committed to protecting your personal information in accordance with applicable privacy laws. By using the Site, you agree to the practices described in this Privacy Policy.</p>\n`;
  }

  // Information We Collect
  html += `<h2>${isZh ? '2. 我们收集的信息' : '2. Information We Collect'}</h2>\n`;

  if (isZh) {
    html += `<p>我们可能收集以下类型的信息：</p>\n`;
  } else {
    html += `<p>We may collect the following types of information:</p>\n`;
  }

  html += `<h3>${isZh ? '2.1 您提供给我们的信息' : '2.1 Information You Provide'}</h3>\n`;
  html += `<ul>\n`;

  const dataLabelsZh = {
    name: '姓名',
    email: '电子邮件地址',
    phone: '电话号码',
    address: '邮寄地址',
    payment: '支付信息（包括信用卡号和账单地址）',
    location: '地理位置信息',
    device: '设备信息（包括设备类型、操作系统、浏览器类型）',
    cookies: 'Cookie 和跟踪数据',
    ip: 'IP 地址',
  };
  const dataLabelsEn = {
    name: 'Name',
    email: 'Email address',
    phone: 'Phone number',
    address: 'Mailing address',
    payment: 'Payment information (including credit card numbers and billing addresses)',
    location: 'Geolocation information',
    device: 'Device information (including device type, operating system, browser type)',
    cookies: 'Cookies and tracking data',
    ip: 'IP address',
  };
  const labels = isZh ? dataLabelsZh : dataLabelsEn;

  if (dataTypes.length === 0) {
    dataTypes.push('name', 'email');
  }

  dataTypes.forEach(dt => {
    if (labels[dt]) {
      html += `<li>${labels[dt]}</li>\n`;
    }
  });
  html += `</ul>\n`;

  // Automatically collected
  html += `<h3>${isZh ? '2.2 自动收集的信息' : '2.2 Automatically Collected Information'}</h3>\n`;
  if (isZh) {
    html += `<p>当您访问本网站时，我们可能自动收集某些信息，包括您的 IP 地址、浏览器类型、操作系统、访问时间以及您浏览的页面。这些信息用于分析和改善我们的服务。</p>\n`;
  } else {
    html += `<p>When you visit the Site, we may automatically collect certain information, including your IP address, browser type, operating system, time of access, and pages viewed. This information is used to analyze and improve our services.</p>\n`;
  }

  // How We Use Your Information
  html += `<h2>${isZh ? '3. 我们如何使用您的信息' : '3. How We Use Your Information'}</h2>\n`;
  if (isZh) {
    html += `<p>我们收集的信息可能用于以下目的：</p>\n<ul>\n`;
    html += `<li>提供、运营和维护我们的网站</li>\n`;
    html += `<li>改善和个性化您的体验</li>\n`;
    html += `<li>处理您的请求和交易</li>\n`;
    html += `<li>发送您订阅的通讯和通知</li>\n`;
    html += `<li>分析与网站使用相关的数据</li>\n`;
    html += `<li>检测、预防和解决技术问题</li>\n`;
    html += `<li>遵守法律义务</li>\n`;
    if (dataTypes.includes('payment')) {
      html += `<li>处理付款并防止欺诈</li>\n`;
    }
    html += `</ul>\n`;
  } else {
    html += `<p>We may use the information we collect for the following purposes:</p>\n<ul>\n`;
    html += `<li>To provide, operate, and maintain our Site</li>\n`;
    html += `<li>To improve and personalize your experience</li>\n`;
    html += `<li>To process your requests and transactions</li>\n`;
    html += `<li>To send newsletters and notifications you have subscribed to</li>\n`;
    html += `<li>To analyze data related to Site usage</li>\n`;
    html += `<li>To detect, prevent, and resolve technical issues</li>\n`;
    html += `<li>To comply with legal obligations</li>\n`;
    if (dataTypes.includes('payment')) {
      html += `<li>To process payments and prevent fraud</li>\n`;
    }
    html += `</ul>\n`;
  }

  // Third-Party Services
  if (thirdParty.length > 0) {
    html += `<h2>${isZh ? '4. 第三方服务' : '4. Third-Party Services'}</h2>\n`;
    if (isZh) {
      html += `<p>我们可能使用以下第三方服务，这些服务可能收集、使用和共享有关您的信息：</p>\n<ul>\n`;
    } else {
      html += `<p>We may use the following third-party services that may collect, use, and share information about you:</p>\n<ul>\n`;
    }

    const tpDescZh = {
      'google-analytics': 'Google Analytics - 网站分析服务',
      'google-ads': 'Google Ads - 在线广告服务',
      'facebook-pixel': 'Facebook Pixel - 广告跟踪服务',
      'stripe': 'Stripe - 在线支付处理服务',
      'paypal': 'PayPal - 在线支付服务',
      'mailchimp': 'Mailchimp - 电子邮件营销服务',
      'sendgrid': 'SendGrid - 电子邮件发送服务',
      'cloudflare': 'Cloudflare - 网站安全和性能服务',
      'aws': 'Amazon AWS - 云计算和存储服务',
      'other': '其他第三方服务',
    };
    const tpDescEn = {
      'google-analytics': 'Google Analytics - Website analytics service',
      'google-ads': 'Google Ads - Online advertising service',
      'facebook-pixel': 'Facebook Pixel - Ad tracking service',
      'stripe': 'Stripe - Online payment processing service',
      'paypal': 'PayPal - Online payment service',
      'mailchimp': 'Mailchimp - Email marketing service',
      'sendgrid': 'SendGrid - Email delivery service',
      'cloudflare': 'Cloudflare - Website security and performance service',
      'aws': 'Amazon AWS - Cloud computing and storage service',
      'other': 'Other third-party services',
    };
    const tpDesc = isZh ? tpDescZh : tpDescEn;

    thirdParty.forEach(tp => {
      if (tpDesc[tp]) {
        html += `<li>${tpDesc[tp]}</li>\n`;
      }
    });
    html += `</ul>\n`;

    if (isZh) {
      html += `<p>有关这些第三方如何使用您的信息的详细信息，请参阅它们各自的隐私政策。我们不对这些第三方的隐私做法负责。</p>\n`;
    } else {
      html += `<p>For more information about how these third parties use your information, please refer to their respective privacy policies. We are not responsible for the privacy practices of these third parties.</p>\n`;
    }
  }

  // Cookies
  if (useCookies) {
    html += `<h2>${isZh ? '5. Cookie 政策' : '5. Cookie Policy'}</h2>\n`;
    if (isZh) {
      html += `<p>我们使用 Cookie 和类似技术来跟踪您在我们网站上的活动并存储某些信息。Cookie 是包含少量数据的小文件，可能包含匿名唯一标识符。</p>\n`;
      html += `<p>我们使用以下类型的 Cookie：</p>\n<ul>\n`;
      html += `<li><strong>必要 Cookie：</strong>网站正常运行所必需的</li>\n`;
      html += `<li><strong>分析 Cookie：</strong>帮助我们了解访客如何与网站互动</li>\n`;
      html += `<li><strong>功能 Cookie：</strong>记住您的偏好设置</li>\n`;
      html += `<li><strong>营销 Cookie：</strong>用于向用户展示相关广告</li>\n`;
      html += `</ul>\n`;
      html += `<p>您可以指示您的浏览器拒绝所有 Cookie 或指示何时发送 Cookie。但是，如果您不接受 Cookie，您可能无法使用我们网站的某些部分。</p>\n`;
    } else {
      html += `<p>We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are small files containing a small amount of data which may include an anonymous unique identifier.</p>\n`;
      html += `<p>We use the following types of cookies:</p>\n<ul>\n`;
      html += `<li><strong>Essential Cookies:</strong> Required for the Site to function properly</li>\n`;
      html += `<li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Site</li>\n`;
      html += `<li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>\n`;
      html += `<li><strong>Marketing Cookies:</strong> Used to display relevant advertisements to users</li>\n`;
      html += `</ul>\n`;
      html += `<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>\n`;
    }
  }

  // Blog / Comments
  if (hasBlog) {
    html += `<h2>${isZh ? '6. 评论和用户内容' : '6. Comments and User Content'}</h2>\n`;
    if (isZh) {
      html += `<p>当您在我们的博客或评论区留言时，我们收集您在评论表单中显示的数据、您的 IP 地址以及您的浏览器用户代理字符串，以帮助检测垃圾评论。</p>\n`;
      html += `<p>如果您上传图片到本网站，您不应上传包含嵌入位置数据（EXIF GPS）的图片，因为网站的访客可以从网站下载并提取其中的位置数据。</p>\n`;
    } else {
      html += `<p>When you leave a comment on our blog or comment section, we collect the data shown in the comment form, your IP address, and your browser user agent string to help detect spam.</p>\n`;
      html += `<p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included, as visitors to the website can download and extract any location data from images on the website.</p>\n`;
    }
  }

  // Data Sharing
  html += `<h2>${isZh ? '7. 数据共享与披露' : '7. Data Sharing and Disclosure'}</h2>\n`;
  if (isZh) {
    html += `<p>我们不会出售、交易或以其他方式向外部各方转让您的个人身份信息。但在以下情况下除外：</p>\n<ul>\n`;
    html += `<li>为遵守法律义务</li>\n`;
    html += `<li>为保护和捍卫我们的权利或财产</li>\n`;
    html += `<li>为调查或防止与服务有关的不当行为</li>\n`;
    html += `<li>为对我们的网站用户负责的行为提供保护</li>\n`;
    html += `<li>经您同意</li>\n`;
    html += `</ul>\n`;
  } else {
    html += `<p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except in the following circumstances:</p>\n<ul>\n`;
    html += `<li>To comply with legal obligations</li>\n`;
    html += `<li>To protect and defend our rights or property</li>\n`;
    html += `<li>To investigate or prevent wrongdoing in connection with the Service</li>\n`;
    html += `<li>To protect the personal safety of users of the Site or the public</li>\n`;
    html += `<li>With your consent</li>\n`;
    html += `</ul>\n`;
  }

  // Data Security
  html += `<h2>${isZh ? '8. 数据安全' : '8. Data Security'}</h2>\n`;
  if (isZh) {
    html += `<p>我们采取适当的技术和组织措施来保护您的个人信息免受未经授权的访问、更改、披露或破坏。然而，互联网传输的方法或电子存储的方法都不是100%安全的，因此我们无法保证绝对安全。</p>\n`;
  } else {
    html += `<p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and therefore we cannot guarantee absolute security.</p>\n`;
  }

  // Data Retention
  html += `<h2>${isZh ? '9. 数据保留' : '9. Data Retention'}</h2>\n`;
  if (isZh) {
    html += `<p>我们仅在实现本隐私政策所述目的所需的期限内保留您的个人信息。当不再需要时，我们将安全地删除或匿名化您的数据。</p>\n`;
  } else {
    html += `<p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. When no longer needed, we will securely delete or anonymize your data.</p>\n`;
  }

  // Children's Privacy
  html += `<h2>${isZh ? '10. 儿童隐私' : "10. Children's Privacy"}</h2>\n`;
  if (isZh) {
    html += `<p>我们的网站不面向 13 岁以下的儿童。我们不会有意收集 13 岁以下儿童的个人身份信息。如果您是儿童的父母或监护人，并且您认为您的孩子向我们提供了个人信息，请联系我们，以便我们采取适当的行动。</p>\n`;
  } else {
    html += `<p>Our Site is not directed at children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us so that we can take appropriate action.</p>\n`;
  }

  // Regulation-specific sections
  if (regulations.includes('gdpr')) {
    html += `<h2>${isZh ? '11. 您的 GDPR 权利（欧盟用户）' : '11. Your GDPR Rights (EU Users)'}</h2>\n`;
    if (isZh) {
      html += `<p>根据通用数据保护条例（GDPR），您享有以下权利：</p>\n<ul>\n`;
      html += `<li><strong>访问权：</strong>您有权请求获取我们持有的关于您的个人数据的副本</li>\n`;
      html += `<li><strong>更正权：</strong>您有权请求更正任何不准确或 incomplete 的数据</li>\n`;
      html += `<li><strong>删除权：</strong>您有权请求删除您的个人数据</li>\n`;
      html += `<li><strong>限制处理权：</strong>您有权请求限制处理您的个人数据</li>\n`;
      html += `<li><strong>数据可携带权：</strong>您有权以结构化格式请求传输您的数据</li>\n`;
      html += `<li><strong>反对权：</strong>您有权反对我们处理您的个人数据</li>\n`;
      html += `</ul>\n`;
      html += `<p>要行使这些权利，请联系我们：${contactEmail}</p>\n`;
    } else {
      html += `<p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>\n<ul>\n`;
      html += `<li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you</li>\n`;
      html += `<li><strong>Right to Rectification:</strong> You may request the correction of any inaccurate or incomplete data</li>\n`;
      html += `<li><strong>Right to Erasure:</strong> You may request the deletion of your personal data</li>\n`;
      html += `<li><strong>Right to Restrict Processing:</strong> You may request that we restrict the processing of your personal data</li>\n`;
      html += `<li><strong>Right to Data Portability:</strong> You may request the transfer of your data in a structured format</li>\n`;
      html += `<li><strong>Right to Object:</strong> You may object to our processing of your personal data</li>\n`;
      html += `</ul>\n`;
      html += `<p>To exercise these rights, please contact us at: ${contactEmail}</p>\n`;
    }
  }

  if (regulations.includes('ccpa')) {
    html += `<h2>${isZh ? '12. 您的 CCPA 权利（加州用户）' : '12. Your CCPA Rights (California Users)'}</h2>\n`;
    if (isZh) {
      html += `<p>根据加州消费者隐私法（CCPA），加州居民享有以下权利：</p>\n<ul>\n`;
      html += `<li><strong>知情权：</strong>了解我们收集哪些个人信息以及如何使用</li>\n`;
      html += `<li><strong>删除权：</strong>请求删除我们收集的个人信息</li>\n`;
      html += `<li><strong>拒绝权：</strong>拒绝我们出售您的个人信息</li>\n`;
      html += `<li><strong>非歧视权：</strong>行使隐私权时不受歧视</li>\n`;
      html += `</ul>\n`;
      html += `<p>要提交 CCPA 请求，请联系：${contactEmail}</p>\n`;
    } else {
      html += `<p>Under the California Consumer Privacy Act (CCPA), California residents have the following rights:</p>\n<ul>\n`;
      html += `<li><strong>Right to Know:</strong> To know what personal information we collect and how it is used</li>\n`;
      html += `<li><strong>Right to Delete:</strong> To request deletion of personal information we have collected</li>\n`;
      html += `<li><strong>Right to Opt-Out:</strong> To opt-out of the sale of your personal information</li>\n`;
      html += `<li><strong>Right to Non-Discrimination:</strong> To not be discriminated against for exercising your privacy rights</li>\n`;
      html += `</ul>\n`;
      html += `<p>To submit a CCPA request, contact us at: ${contactEmail}</p>\n`;
    }
  }

  if (regulations.includes('pipl')) {
    html += `<h2>${isZh ? '13. 个人信息保护法（中国用户）' : '13. Personal Information Protection Law (China Users)'}</h2>\n`;
    if (isZh) {
      html += `<p>根据《中华人民共和国个人信息保护法》（PIPL），我们承诺：</p>\n<ul>\n`;
      html += `<li>仅出于合法、明确且合理的目的收集个人信息</li>\n`;
      html += `<li>遵循最小必要原则，仅收集实现目的所必需的信息</li>\n`;
      html += `<li>采取必要措施保障所处理的个人信息的安全</li>\n`;
      html += `<li>未经您的同意，不会向第三方提供您的个人信息</li>\n`;
      html += `<li>保障您查阅、复制、更正、删除个人信息的权利</li>\n`;
      html += `</ul>\n`;
    } else {
      html += `<p>In compliance with the Personal Information Protection Law (PIPL) of the People's Republic of China, we commit to:</p>\n<ul>\n`;
      html += `<li>Collecting personal information only for lawful, clear, and reasonable purposes</li>\n`;
      html += `<li>Following the principle of minimum necessity, collecting only information essential for the stated purpose</li>\n`;
      html += `<li>Taking necessary measures to ensure the security of processed personal information</li>\n`;
      html += `<li>Not providing your personal information to third parties without your consent</li>\n`;
      html += `<li>Protecting your rights to access, copy, correct, and delete your personal information</li>\n`;
      html += `</ul>\n`;
    }
  }

  if (regulations.includes('coppa')) {
    html += `<h2>${isZh ? '14. 儿童在线隐私保护法（COPPA）' : "14. Children's Online Privacy Protection Act (COPPA)"}</h2>\n`;
    if (isZh) {
      html += `<p>根据 COPPA 的要求，我们遵守适用于面向 13 岁以下儿童运营的网站和在线服务的规则。如果我们发现 13 岁以下儿童向我们提供了个人信息，我们会立即从我们的服务器上删除这些信息。</p>\n`;
    } else {
      html += `<p>In compliance with COPPA, we follow the rules applicable to websites and online services directed to children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete such information from our servers.</p>\n`;
    }
  }

  // Changes to Privacy Policy
  const nextSection = regulations.length > 0 ? (regulations.length + 11) : 11;
  html += `<h2>${isZh ? `${nextSection}. 隐私政策的变更` : `${nextSection}. Changes to This Privacy Policy`}</h2>\n`;
  if (isZh) {
    html += `<p>我们可能会不时更新本隐私政策。我们将通过在本页面上发布新的隐私政策来通知您任何变更。变更在本隐私政策发布后立即生效。我们建议您定期查看本隐私政策以确保您了解最新信息。</p>\n`;
  } else {
    html += `<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective immediately after posting. We encourage you to review this Privacy Policy periodically for the latest information.</p>\n`;
  }

  // Contact
  html += `<h2>${isZh ? `${nextSection + 1}. 联系我们` : `${nextSection + 1}. Contact Us`}</h2>\n`;
  if (isZh) {
    html += `<p>如果您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>\n<ul>\n`;
    html += `<li>电子邮件：${contactEmail}</li>\n`;
    html += `<li>网站：${siteUrl}</li>\n`;
    if (data.companyName) {
      html += `<li>公司名称：${companyName}</li>\n`;
    }
    html += `</ul>\n`;
  } else {
    html += `<p>If you have any questions about this Privacy Policy, please contact us at:</p>\n<ul>\n`;
    html += `<li>Email: ${contactEmail}</li>\n`;
    html += `<li>Website: ${siteUrl}</li>\n`;
    if (data.companyName) {
      html += `<li>Company: ${companyName}</li>\n`;
    }
    html += `</ul>\n`;
  }

  // Disclaimer
  html += `<div class="legal-disclaimer">\n`;
  if (isZh) {
    html += `<strong>免责声明：</strong>本隐私政策由 PrivacyPilot 自动生成，仅供参考。它不构成法律建议。我们建议您在将此政策用于您的网站之前咨询专业律师，以确保其符合您所在司法管辖区的特定法律要求。\n`;
  } else {
    html += `<strong>Disclaimer:</strong> This privacy policy was auto-generated by PrivacyPilot and is provided for informational purposes only. It does not constitute legal advice. We recommend consulting with a qualified attorney before using this policy on your website to ensure compliance with specific legal requirements in your jurisdiction.\n`;
  }
  html += `</div>\n`;

  return html;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generatePrivacyPolicy };
}
