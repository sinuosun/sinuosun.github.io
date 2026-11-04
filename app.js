/* Progressive enhancement: the English content and native disclosures work without JS. */
'use strict';

const translations = {
  skip: '跳至正文', brandCaption: '一份持续生长的个人手记', navAbout: '关于我', navExplore: '探索方向', navQuestion: '一个问题', contact: '打个招呼',
  affiliation: '北京大学 · 工学院', heroDescription: '在严谨的结构与<br>自由的创造之间。', heroRole: '本科生，也永远是学习者。<br>一边探索，一边寻找下一个问题。',
  artTitle: '一切探索，<br>始于一个问题。', artFootnote: '探索，未完待续', based: '中国 · 北京',
  aboutLabel: '关于我，关于此刻', aboutTitle: '认真思考。<br>动手创造。<br><em>重新审视。</em>',
  aboutLead: '我是北京大学的一名本科生，正在数学、嵌入式系统与 AI Agents 之间寻找自己的方向。',
  aboutBody: '我喜欢把抽象的想法变成可以运行的原型，把模糊的问题整理成清晰的模型。对我而言，工程也是一种观察世界的方式：让想象与现实不断对话。',
  aboutPersonal: '技术之外，摄影、文学和写作提醒我，始终留意具体的人与生活。', githubLink: '在 GitHub 上找到我',
  principleOne: '思考，保持严谨', principleTwo: '实践，保持好奇', principleThree: '随时，重新出发',
  exploreLabel: '正在探索的方向', exploreAside: '三条线索，无数种连接。', exploreTitle: '沿着问题，<br><em>走向更深处。</em>', exploreIntro: '这不是一张完成的地图。<br>只是一些让我不断回望的方向。',
  mathKicker: '描述结构的语言', mathTitle: '数学', mathTags: '分析 / 代数 / 物理',
  mathBody: '数学让我能够精确地描述结构。我正在打好数学分析、线性代数与物理的基础，也始终好奇：符号背后，究竟藏着怎样的几何图景？',
  mathNote: '最近的好奇：特征值、几何直觉、优化，以及抽象概念如何成为计算工具。',
  systemsKicker: '让代码与真实世界相遇', systemsTitle: '嵌入式系统', systemsTags: '传感器 / 机器人 / 反馈',
  systemsBody: '信号、传感器、运动，以及不那么完美的现实反馈——我对那些让硬件可靠运作的具体细节充满兴趣。',
  systemsNote: '我想追问：一个简洁的想法，怎样才能在复杂的现实约束中真正运行？',
  aiKicker: '让智能成为协作的伙伴', aiTitle: 'AI 与智能体', aiTags: '推理 / 记忆 / 工具',
  aiBody: '我在探索智能体如何推理、交互、记忆与使用工具，如何支持人的创造力，并让人的判断始终处于核心。',
  aiNote: '早先的游戏智能体实验暂时搁置了，但那个更大的问题仍在：智能工具应当如何与我们合作？',
  nowLabel: '此刻，书桌上', nowTitle: '一切都在<em>生长中。</em>', nowIntro: '打好基础，做些小实验，<br>也为下一次发现留出空间。',
  learningTitle: '学习基础，理解结构', learningBody: '数学分析、高等代数、普通物理、数据结构与算法思维。它们也是未来工程实践的基本语法。', learningFoot: '为未来的工作，打好基础',
  makingTitle: '动手实验，从小处开始', makingBody: 'Python、网页设计、嵌入式开发与本地 AI 辅助工作流。通过小原型，检验更大的想法。', makingFoot: '构建。测试。修正。',
  reflectTitle: '练习观察，保持感受', reflectBody: '摄影、文学与随笔。让技术上的好奇心，也能与屏幕之外的生活保持连接。', reflectFoot: '清晰，也是一种注意力的习惯',
  nowPostscript: '暂时没有固定的主打项目。这里也为未来的作品、笔记和原型留着位置。',
  questionLabel: '一个小小的思考实验', questionTitle: '今天，什么让你<br><em>感到好奇？</em>', questionIntro: '带来一个问题，带走一种新的看法。',
  questionInputLabel: '你的问题', questionPlaceholder: '接下来，我该做点什么？', questionPrivacy: '这是预设提示组成的思考小工具。问题不会上传或保存。',
  perspectiveLabel: '换个角度看看', initialPrompt: '一个下午就能完成的小原型，能帮你验证什么？', anotherPrompt: '再换一种视角',
  contactLabel: '让对话继续', contactTitle: '好的想法，<br>始于<em>一声你好。</em>', contactNote: '一个问题，一点共同兴趣，或某个有趣的想法。<br>很高兴听你说说。', footerNote: '思考。创造。修正。再出发。', backTop: '回到顶部'
};

const prompts = {
  en: [
    'What would a simple prototype reveal in one afternoon?',
    'What assumption is hidden inside this question?',
    'Can you make the question smaller, sharper, and testable?',
    'Which part is a fact, which is a feeling, and which is still unknown?',
    'What would change if you explained this to a beginner?',
    'What evidence would make you change your mind?',
    'What is the smallest useful next step?',
    'What pattern might seem obvious when you look back?'
  ],
  zh: [
    '一个下午就能完成的小原型，能帮你验证什么？',
    '这个问题里，藏着什么未经检验的假设？',
    '能否把问题缩小，让它更清晰，也更容易验证？',
    '哪些是事实，哪些是感受，哪些仍然未知？',
    '如果向一个初学者解释，你会怎样重新理解它？',
    '什么样的证据，会让你改变现在的看法？',
    '此刻，你能迈出的最小而有用的一步是什么？',
    '回头看时，什么规律可能会变得显而易见？'
  ]
};

const languageButton = document.querySelector('#language-toggle');
const input = document.querySelector('#question-input');
const answer = document.querySelector('#reflection-answer');
const menuButton = document.querySelector('#menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const motionButton = document.querySelector('#motion-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const english = new Map();
document.querySelectorAll('[data-i18n]').forEach(element => english.set(element.dataset.i18n, element.innerHTML));
let language = 'en';
let promptIndex = 0;
let reflectedQuestion = '';
let hasReflected = false;

function renderReflection() {
  const prefix = reflectedQuestion ? (language === 'zh' ? `关于「${reflectedQuestion}」：` : `For “${reflectedQuestion}”: `) : '';
  // User text is always rendered as text, never as HTML.
  answer.textContent = prefix + prompts[language][promptIndex];
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    // Only the fixed translation dictionary contains markup (<br> and <em>).
    element.innerHTML = language === 'zh' ? translations[key] : english.get(key);
  });
  input.placeholder = language === 'zh' ? translations.questionPlaceholder : 'What should I build next?';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  document.querySelector('#reflect-button').setAttribute('aria-label', language === 'zh' ? '换个角度思考你的问题' : 'Reflect on your question');
  document.querySelector('.round-link').setAttribute('aria-label', language === 'zh' ? '了解更多关于我' : 'Explore about me');
  document.querySelector('.contact-arrow').setAttribute('aria-label', language === 'zh' ? '给 Sinuo Sun 发邮件' : 'Email Sinuo Sun');
  document.title = language === 'zh' ? 'Sinuo Sun — 一份持续生长的个人手记' : 'Sinuo Sun — A personal field notebook';
  updateMenuLabel();
  updateMotionLabel();
  if (hasReflected) renderReflection();
  // Only a display preference is stored. Questions remain in page memory.
  try { localStorage.setItem('sinuo-language', language); } catch { /* Private browsing can restrict storage. */ }
}

function updateMenuLabel() {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', language === 'zh' ? (isOpen ? '关闭导航' : '打开导航') : (isOpen ? 'Close navigation' : 'Open navigation'));
}

function closeMenu(restoreFocus = false) {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
  if (restoreFocus) menuButton.focus();
}

function updateMotionLabel() {
  const paused = motionButton.getAttribute('aria-pressed') === 'true';
  const label = language === 'zh'
    ? (paused ? '播放装饰动效' : '暂停装饰动效')
    : (paused ? 'Play decorative motion' : 'Pause decorative motion');
  motionButton.setAttribute('aria-label', label);
  motionButton.title = label;
}

motionButton.hidden = motionPreference.matches;
updateMotionLabel();
motionButton.addEventListener('click', () => {
  const paused = motionButton.getAttribute('aria-pressed') !== 'true';
  motionButton.setAttribute('aria-pressed', String(paused));
  document.documentElement.classList.toggle('motion-paused', paused);
  updateMotionLabel();
});
motionPreference.addEventListener('change', event => {
  motionButton.hidden = event.matches;
  // Keep all content visible when the OS preference changes mid-visit.
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
  document.documentElement.classList.toggle('motion-enabled', !event.matches && 'IntersectionObserver' in window);
});

languageButton.hidden = false;
menuButton.hidden = false;
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = isOpen;
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  updateMenuLabel();
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true); });
document.addEventListener('click', event => { if (!mobileNav.hidden && !event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

function reflect() {
  // Pick a different prompt every time, even after switching languages.
  promptIndex = (promptIndex + 1 + Math.floor(Math.random() * (prompts.en.length - 1))) % prompts.en.length;
  reflectedQuestion = input.value.trim();
  hasReflected = true;
  renderReflection();
}
document.querySelector('#reflection-form').addEventListener('submit', event => { event.preventDefault(); reflect(); });
document.querySelector('#another-prompt').addEventListener('click', reflect);
document.querySelector('#year').textContent = new Date().getFullYear();
try { if (localStorage.getItem('sinuo-language') === 'zh') setLanguage('zh'); } catch { /* English is the fallback. */ }

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('motion-enabled');
}

// Stop the two repeating decorations when their section leaves the viewport.
if ('IntersectionObserver' in window) {
  const heroObserver = new IntersectionObserver(entries => {
    document.documentElement.classList.toggle('hero-offscreen', !entries[0].isIntersecting);
  });
  heroObserver.observe(document.querySelector('.hero'));
}
