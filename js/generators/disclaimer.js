/**
 * PrivacyPilot - Disclaimer Generator
 */

function generateDisclaimer(data) {
  const isZh = data.language === 'zh';
  const today = new Date().toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const siteName = data.siteName || (isZh ? '您的网站' : 'Your Website');
  const siteUrl = data.siteUrl || '#';
  const disclaimerType = data.disclaimerType || 'general';
  const hasProAdvice = data.hasProAdvice || false;
  const hasAffiliate = data.hasAffiliate || false;

  let html = '';

  const titleMapZh = {
    'general': '免责声明',
    'medical': '医疗免责声明',
    'financial': '金融免责声明',
    'legal': '法律免责声明',
    'affiliate': '联盟营销免责声明',
    'fitness': '健身免责声明',
  };
  const titleMapEn = {
    'general': 'Disclaimer',
    'medical': 'Medical Disclaimer',
    'financial': 'Financial Disclaimer',
    'legal': 'Legal Disclaimer',
    'affiliate': 'Affiliate Disclaimer',
    'fitness': 'Fitness Disclaimer',
  };

  html += `<h1>${(isZh ? titleMapZh : titleMapEn)[disclaimerType] || (isZh ? '免责声明' : 'Disclaimer')}</h1>\n`;
  html += `<p class="effective-date">${isZh ? `生效日期：${today}` : `Effective Date: ${today}`}</p>\n`;

  // General Disclaimer
  html += `<h2>${isZh ? '1. 一般免责声明' : '1. General Disclaimer'}</h2>\n`;
  if (isZh) {
    html += `<p>${siteName}（"本网站"）上提供的信息仅供一般参考之用。虽然我们努力保持信息的准确性和及时性，但我们对本网站上信息的完整性、准确性、可靠性、适用性或可用性不作任何明示或暗示的陈述或保证。</p>\n`;
    html += `<p>您对本网站信息的依赖完全由您自己承担风险。在任何情况下，我们都不对因使用本网站上的信息而导致的任何损失或损害（包括但不限于直接、间接、附带、特殊或后果性损害）负责。</p>\n`;
  } else {
    html += `<p>The information provided on ${siteName} (the "Site") is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information on the Site.</p>\n`;
    html += `<p>Your reliance on any information on the Site is solely at your own risk. In no event shall we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from your use of the Site.</p>\n`;
  }

  // Type-specific disclaimers
  if (disclaimerType === 'medical') {
    html += `<h2>${isZh ? '2. 医疗免责声明' : '2. Medical Disclaimer'}</h2>\n`;
    if (isZh) {
      html += `<p>本网站上的信息不构成医疗建议，也不能替代专业医疗建议、诊断或治疗。如果您对医疗状况有任何疑问，请务必咨询您的医生或其他合格的医疗保健提供者。</p>\n`;
      html += `<p>切勿因为您在本网站上阅读的内容而忽视专业医疗建议或延迟寻求医疗建议。本网站上的信息不应用于诊断或治疗任何疾病或健康问题。</p>\n`;
    } else {
      html += `<p>The information on this Site does not constitute medical advice and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>\n`;
      html += `<p>Never disregard professional medical advice or delay in seeking it because of something you have read on this Site. The information on this Site should not be used to diagnose or treat any health condition or disease.</p>\n`;
    }
  } else if (disclaimerType === 'financial') {
    html += `<h2>${isZh ? '2. 金融免责声明' : '2. Financial Disclaimer'}</h2>\n`;
    if (isZh) {
      html += `<p>本网站上的信息不构成财务建议、投资建议或任何其他形式的专业财务建议。在做出任何财务决策之前，您应咨询合格的财务顾问或专业人士。</p>\n`;
      html += `<p>过去的业绩不保证未来的结果。所有投资都涉及风险，包括可能损失本金。本网站上提到的任何投资策略或产品仅供参考，并不构成购买或出售任何证券的建议。</p>\n`;
    } else {
      html += `<p>The information on this Site does not constitute financial advice, investment advice, or any other form of professional financial advice. You should consult with a qualified financial advisor or professional before making any financial decisions.</p>\n`;
      html += `<p>Past performance is not indicative of future results. All investments involve risk, including the possible loss of principal. Any investment strategies or products mentioned on this Site are for informational purposes only and do not constitute an offer to buy or sell any securities.</p>\n`;
    }
  } else if (disclaimerType === 'legal') {
    html += `<h2>${isZh ? '2. 法律免责声明' : '2. Legal Disclaimer'}</h2>\n`;
    if (isZh) {
      html += `<p>本网站上的信息不构成法律建议，也不应被解释为建立律师-客户关系。本网站上的所有内容仅供一般参考之用。</p>\n`;
      html += `<p>对于任何特定的法律问题或情况，您应咨询合格的律师。每个法律问题都是独特的，本网站上的一般信息可能不适用于您的具体情况。</p>\n`;
    } else {
      html += `<p>The information on this Site does not constitute legal advice and should not be construed as establishing an attorney-client relationship. All content on this Site is provided for general informational purposes only.</p>\n`;
      html += `<p>For any specific legal questions or situations, you should consult with a qualified attorney. Every legal matter is unique, and the general information on this Site may not apply to your specific situation.</p>\n`;
    }
  } else if (disclaimerType === 'fitness') {
    html += `<h2>${isZh ? '2. 健身免责声明' : '2. Fitness Disclaimer'}</h2>\n`;
    if (isZh) {
      html += `<p>本网站上的健身和运动信息仅供一般参考。在开始任何健身计划之前，您应咨询医生或合格的健身专业人员。</p>\n`;
      html += `<p>如果您有任何健康状况或伤害，某些运动可能不适合您。如果您在运动中感到不适（如头晕、胸痛、呼吸困难），请立即停止并寻求医疗帮助。</p>\n`;
    } else {
      html += `<p>The fitness and exercise information on this Site is provided for general informational purposes. You should consult your physician or a qualified fitness professional before starting any exercise program.</p>\n`;
      html += `<p>If you have any health conditions or injuries, certain exercises may not be suitable for you. If you experience any discomfort (such as dizziness, chest pain, or difficulty breathing) during exercise, stop immediately and seek medical attention.</p>\n`;
    }
  }

  // Professional Advice
  if (hasProAdvice) {
    html += `<h2>${isZh ? '3. 专业建议免责声明' : '3. Professional Advice Disclaimer'}</h2>\n`;
    if (isZh) {
      html += `<p>本网站可能包含有关各种主题的信息。本网站上的内容不旨在成为专业建议的替代品，也不应用于做出重要决策的唯一依据。对于特定问题，您应咨询适当的专业人士。</p>\n`;
    } else {
      html += `<p>This Site may contain information on various topics. The content on this Site is not intended to be a substitute for professional advice and should not be used as the sole basis for making important decisions. You should consult with appropriate professionals for specific issues.</p>\n`;
    }
  }

  // Affiliate Links
  if (hasAffiliate || disclaimerType === 'affiliate') {
    html += `<h2>${isZh ? '4. 联盟营销免责声明' : '4. Affiliate Disclaimer'}</h2>\n`;
    if (isZh) {
      html += `<p>本网站上的某些链接可能是联盟链接。这意味着如果您通过这些链接进行购买，我们可能会收到佣金。这不会影响您的购买价格。</p>\n`;
      html += `<p>我们仅推荐我们认为对读者有价值的产品和服务。我们的推荐基于我们自己的研究和经验。我们不保证任何特定产品或服务的质量。</p>\n`;
      html += `<p>我们感谢您使用我们的联盟链接来支持本网站的运营。</p>\n`;
    } else {
      html += `<p>Some of the links on this Site may be affiliate links. This means that if you make a purchase through these links, we may receive a commission. This does not affect the price you pay.</p>\n`;
      html += `<p>We only recommend products and services that we believe provide value to our readers. Our recommendations are based on our own research and experience. We do not guarantee the quality of any particular product or service.</p>\n`;
      html += `<p>We appreciate your use of our affiliate links to support the operation of this Site.</p>\n`;
    }
  }

  // External Links
  html += `<h2>${isZh ? '5. 外部链接免责声明' : '5. External Links Disclaimer'}</h2>\n`;
  if (isZh) {
    html += `<p>本网站可能包含指向第三方网站或服务的链接。这些链接仅为方便您而提供。${siteName} 不控制这些第三方网站，也不对其内容、隐私政策或做法负责。</p>\n`;
    html += `<p>我们建议您阅读您访问的任何第三方网站的使用条款和隐私政策。</p>\n`;
  } else {
    html += `<p>This Site may contain links to third-party websites or services. These links are provided for your convenience only. ${siteName} does not control these third-party sites and is not responsible for their content, privacy policies, or practices.</p>\n`;
    html += `<p>We recommend reading the terms of use and privacy policies of any third-party website you visit.</p>\n`;
  }

  // Changes
  html += `<h2>${isZh ? '6. 免责声明的变更' : '6. Changes to Disclaimer'}</h2>\n`;
  if (isZh) {
    html += `<p>我们保留随时更新本免责声明的权利。变更将在此页面上发布。继续使用本网站即表示您接受更新后的免责声明。</p>\n`;
  } else {
    html += `<p>We reserve the right to update this disclaimer at any time. Changes will be posted on this page. Your continued use of the Site constitutes acceptance of the updated disclaimer.</p>\n`;
  }

  // Contact
  html += `<h2>${isZh ? '7. 联系我们' : '7. Contact Us'}</h2>\n`;
  if (isZh) {
    html += `<p>如果您对本免责声明有任何疑问，请通过 ${siteUrl} 联系我们。</p>\n`;
  } else {
    html += `<p>If you have any questions about this disclaimer, please contact us at ${siteUrl}.</p>\n`;
  }

  // Disclaimer about disclaimer
  html += `<div class="legal-disclaimer">\n`;
  if (isZh) {
    html += `<strong>免责声明：</strong>本免责声明由 PrivacyPilot 自动生成，仅供参考。它不构成法律建议。我们建议您在将此文档用于您的网站之前咨询专业律师。\n`;
  } else {
    html += `<strong>Disclaimer:</strong> This disclaimer was auto-generated by PrivacyPilot and is provided for informational purposes only. It does not constitute legal advice. We recommend consulting with a qualified attorney before using this document on your website.\n`;
  }
  html += `</div>\n`;

  return html;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateDisclaimer };
}
