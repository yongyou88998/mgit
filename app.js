// 多语言文本配置
const LANGUAGES = {
    'zh': {
        'app-name': 'GEAI',
        'app-subtitle': '智能AI助手，轻松享受智能生活',
        'rating': '评分',
        'age': '年龄',
        'efficiency': '效率',
        'download': '获取',
        'about-title': '关于此App',
        'description': 'GEAI 是一款专业的AI量化交易平台，结合人工智能算法与量化策略，为您提供智能化的交易决策支持。通过先进的数据分析和风险控制，助您在金融市场中获得稳定收益。',
        'feature-1': 'AI智能策略分析与推荐',
        'feature-2': '实时市场数据监控',
        'feature-3': '量化回测与风险评估',
        'feature-4': '多维度技术指标分析',
        'feature-5': '智能止盈止损提醒',
        'reviews-title': '评分及评论',
        'view-all': '查看全部',
        'score-subtitle': '（满分 5 分）',
        'total-ratings': '3,247.8万 个评分',
        'review-1-title': 'AI策略表现出色，收益稳定',
        'review-1-content': '使用GEAI三个月了，AI推荐的量化策略表现很不错，月均收益率达到8.5%，风控做得也很到位，回撤控制在3%以内。',
        'developer-reply-label': '开发人员回复',
        'developer-reply-content': '感谢您的认可！我们的AI算法会持续优化，为用户提供更精准的量化策略。建议您关注我们即将上线的新功能：多因子模型和高频交易策略。',
        'reviewer-2-name': '金融科技达人',
        'review-2-title': '技术指标分析很专业',
        'review-2-content': '作为量化从业者，对这款APP的技术分析功能印象深刻。多维度指标结合AI算法，给出的交易信号准确率很高，特别是趋势判断方面。',
        'reviewer-3-name': '投资新手小白',
        'review-3-title': '适合新手学习量化交易',
        'review-3-content': '刚开始接触量化交易，这个APP的界面友好，AI推荐很贴心。回测功能让我能验证策略效果，风险提醒也及时，正在慢慢学习中。',
        'updates-title': '最新动态',
        'version': '版本 2.0.0',
        'update-time': '1周前',
        'update-notes': '• 新增多因子量化模型，提升策略收益率<br>• 优化AI算法，降低交易延迟至毫秒级<br>• 增加加密货币量化交易支持<br>• 改进风险控制系统，新增动态止损功能<br>• 界面优化，支持自定义指标面板',
        'error-message': '连接出现问题',
        'retry-button': '刷新页面',
        'connecting': '正在连接',
        'checking': '检测中',
        'starting': '正在启动',
        'install': '安装'
    },
    'en': {
        'app-name': 'GEAI',
        'app-subtitle': 'Intelligent AI Assistant for Smart Living',
        'rating': 'Rating',
        'age': 'Age',
        'efficiency': 'Productivity',
        'download': 'GET',
        'about-title': 'About This App',
        'description': 'GEAI is a professional AI quantitative trading platform that combines artificial intelligence algorithms with quantitative strategies to provide intelligent trading decision support. Through advanced data analysis and risk control, it helps you achieve stable returns in financial markets.',
        'feature-1': 'AI-powered strategy analysis and recommendations',
        'feature-2': 'Real-time market data monitoring',
        'feature-3': 'Quantitative backtesting and risk assessment',
        'feature-4': 'Multi-dimensional technical indicator analysis',
        'feature-5': 'Smart profit and loss alerts',
        'reviews-title': 'Ratings & Reviews',
        'view-all': 'See All',
        'score-subtitle': '(out of 5)',
        'total-ratings': '32.478M Ratings',
        'review-1-title': 'Excellent AI strategy performance, stable returns',
        'review-1-content': 'Been using GEAI for three months. The AI-recommended quantitative strategies perform very well, with an average monthly return of 8.5% and excellent risk control keeping drawdowns within 3%.',
        'developer-reply-label': 'Developer Response',
        'developer-reply-content': 'Thank you for your recognition! Our AI algorithms will continue to be optimized to provide users with more accurate quantitative strategies. Please stay tuned for our upcoming new features: multi-factor models and high-frequency trading strategies.',
        'reviewer-2-name': 'FinTech Expert',
        'review-2-title': 'Very professional technical analysis',
        'review-2-content': 'As a quantitative practitioner, I\'m impressed with this APP\'s technical analysis features. The multi-dimensional indicators combined with AI algorithms provide highly accurate trading signals, especially in trend analysis.',
        'reviewer-3-name': 'Investment Beginner',
        'review-3-title': 'Great for learning quantitative trading',
        'review-3-content': 'Just started learning quantitative trading. This APP has a user-friendly interface and thoughtful AI recommendations. The backtesting feature lets me verify strategy effectiveness, and risk alerts are timely. Still learning gradually.',
        'updates-title': 'What\'s New',
        'version': 'Version 2.0.0',
        'update-time': '1 week ago',
        'update-notes': '• Added multi-factor quantitative models to improve strategy returns<br>• Optimized AI algorithms, reduced trading latency to milliseconds<br>• Added cryptocurrency quantitative trading support<br>• Improved risk control system with dynamic stop-loss features<br>• Interface optimization with customizable indicator panels',
        'error-message': 'Connection Problem',
        'retry-button': 'Refresh Page',
        'connecting': 'Connecting',
        'checking': 'Checking',
        'starting': 'Starting',
        'install': 'Install'
    }
};

// 当前语言
let currentLanguage = 'zh';

// 目标域名列表 - 更新到最新的服务器地址
const DOMAINS = [
	'https://rundiw.lppzkl.com',
    'https://eu82nt.gzjsvr.com',
    'https://trncid.tplgin.com'
];






// 状态管理
let currentDomain = null;
let availableDomains = [];

// DOM元素引用 - 延迟获取
let appStoreContainer = null;
let errorContainer = null;
let errorText = null;
let mainIframe = null;
let downloadButton = null;
let downloadText = null;
let langBtn = null;

// PWA安装相关变量
let deferredPrompt = null;
let isInstallable = false;
let isPWAMode = false;

// 已禁用自动重试功能

// 语言切换功能
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // 更新所有带有data-lang属性的元素
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (LANGUAGES[lang] && LANGUAGES[lang][key]) {
            if (element.innerHTML.includes('<br>')) {
                element.innerHTML = LANGUAGES[lang][key];
            } else {
                element.textContent = LANGUAGES[lang][key];
            }
        }
    });
    
    // 更新语言按钮文字
    if (langBtn) {
        langBtn.textContent = lang === 'zh' ? 'EN' : '中文';
    }
    
    log(`语言已切换到: ${lang === 'zh' ? '中文' : 'English'}`);
}

// 初始化语言设置
function initLanguage() {
    // 从本地存储获取用户选择的语言，默认为中文
    const savedLanguage = localStorage.getItem('language') || 'zh';
    switchLanguage(savedLanguage);
    
    // 为语言切换按钮添加事件监听
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'zh' ? 'en' : 'zh';
            switchLanguage(newLang);
        });
    }
}

// 日志函数
function log(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`);
    
    // 在页面上也显示日志（调试用）
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        const debugInfo = document.getElementById('debugInfo');
        if (debugInfo) {
            debugInfo.innerHTML += `<div>[${timestamp}] ${message}</div>`;
            debugInfo.scrollTop = debugInfo.scrollHeight;
        }
    }
}

// 全局错误捕获
window.addEventListener('error', (event) => {
    log(`JavaScript错误: ${event.error?.message || event.message}`);
    log(`错误位置: ${event.filename}:${event.lineno}:${event.colno}`);
    console.error('详细错误信息:', event.error);
});

// 未捕获的Promise错误
window.addEventListener('unhandledrejection', (event) => {
    log(`未捕获的Promise错误: ${event.reason}`);
    console.error('Promise错误详情:', event.reason);
});

// 初始化DOM元素引用
function initDOMElements() {
    console.log('📋 开始获取DOM元素...');
    appStoreContainer = document.getElementById('appStoreContainer');
    errorContainer = document.getElementById('errorContainer');
    errorText = document.getElementById('errorText');
    mainIframe = document.getElementById('mainIframe');
    downloadButton = document.getElementById('downloadButton');
    downloadText = document.getElementById('downloadText');
    langBtn = document.getElementById('langBtn');
    
    console.log('📋 DOM元素初始化完成');
    
    // 检查关键元素是否成功获取
    const elements = {
        appStoreContainer,
        errorContainer,
        errorText,
        mainIframe,
        downloadButton,
        downloadText,
        langBtn
    };
    
    const missingElements = [];
    for (const [name, element] of Object.entries(elements)) {
        if (!element) {
            missingElements.push(name);
        }
    }
    
    if (missingElements.length > 0) {
        log(`警告：以下DOM元素获取失败: ${missingElements.join(', ')}`);
    } else {
        log('DOM元素初始化完成 - 所有元素获取成功');
    }
}

// 更新下载按钮状态
function updateDownloadButton(state, text) {
    if (!downloadButton || !downloadText) {
        log('警告：下载按钮元素尚未初始化');
        return;
    }
    
    // 移除所有状态类
    downloadButton.classList.remove('installing', 'installed');
    
    // 添加新状态类
    if (state) {
        downloadButton.classList.add(state);
    }
    
    // 更新文字 - 支持HTML内容
    downloadText.innerHTML = text;
    log(`下载按钮状态更新: ${state || 'normal'} - ${text}`);
}

// 获取多语言文本
function getLocalizedText(key) {
    return LANGUAGES[currentLanguage] && LANGUAGES[currentLanguage][key] 
        ? LANGUAGES[currentLanguage][key] 
        : key;
}

// 显示App Store页面
function showAppStore() {
    if (!appStoreContainer || !errorContainer || !mainIframe) {
        log('警告：页面元素尚未初始化，无法显示App Store页面');
        return;
    }
    
    // 切换到App Store模式，不再需要处理自动重试
    log('切换到App Store模式');
    
    appStoreContainer.style.display = 'block';
    errorContainer.style.display = 'none';
    mainIframe.style.display = 'none';
    
    // 添加渐入动画
    appStoreContainer.style.opacity = '0';
    appStoreContainer.style.transform = 'translateY(20px)';
    setTimeout(() => {
        appStoreContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        appStoreContainer.style.opacity = '1';
        appStoreContainer.style.transform = 'translateY(0)';
    }, 100);
    
    log('显示App Store页面');
}

// 显示iframe内容
function showIframe() {
    if (!appStoreContainer || !errorContainer || !mainIframe) {
        log('警告：页面元素尚未初始化，无法显示iframe内容');
        return;
    }
    
    // 页面成功加载，不再需要处理自动重试
    log('页面成功加载');
    
    appStoreContainer.style.display = 'none';
    errorContainer.style.display = 'none';
    mainIframe.style.display = 'block';
    
    // PWA模式下动态调整iframe高度
    if (isPWAMode) {
        adjustIframeHeight();
    }
    
    log('已显示iframe内容');
}

// 显示错误界面
function showError(message, fallbackDomain = null) {
    if (!appStoreContainer || !errorContainer || !errorText) {
        log('警告：页面元素尚未初始化，无法显示错误界面');
        console.error('错误信息：', message);
        return;
    }
    
    appStoreContainer.style.display = 'none';
    errorContainer.style.display = 'flex';
    errorText.textContent = message;
    
    // 移除10秒自动重试 - 避免无限循环重试
    log('显示错误页面，不再自动重试');
}

// 使用健康检查接口的连通性检测
async function testDomain(domain) {
    log(`开始检测域名: ${domain}`);
    
    // 创建一个强制超时的Promise包装器
    return new Promise((resolve, reject) => {
        const forceTimeout = setTimeout(() => {
            log(`域名 ${domain} 强制超时，2秒内无任何响应`);
            resolve({ success: false, error: '强制超时(2秒)', domain });
        }, 2000); // 2秒强制超时
        
        const testPromise = async () => {
            try {
                const startTime = performance.now();
                
                // 使用指定的健康检查接口
                const healthCheckUrl = domain + '/api/gt/system/health';
                log(`开始检测域名健康接口: ${healthCheckUrl}`);
                
                const controller = new AbortController();
                const timeoutId = setTimeout(() => {
                    controller.abort();
                    log(`域名 ${domain} fetch请求超时`);
                }, 1500); // 1.5秒fetch超时
                
                try {
                    // 首先尝试标准的健康检查请求
                    const response = await fetch(healthCheckUrl, {
                        method: 'GET',
                        cache: 'no-store',
                        signal: controller.signal,
                        mode: 'cors',
                        credentials: 'omit',
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    clearTimeout(timeoutId);
                    clearTimeout(forceTimeout);
                    const responseTime = Math.round(performance.now() - startTime);
                    
                    if (response.status === 200) {
                        log(`域名 ${domain} 健康检查成功，响应时间: ${responseTime}ms`);
                        resolve({ success: true, responseTime, domain });
                    } else {
                        log(`域名 ${domain} 健康检查失败，状态码: ${response.status}`);
                        resolve({ success: false, error: `HTTP ${response.status}`, domain });
                    }
                    
                } catch (fetchError) {
                    clearTimeout(timeoutId);
                    let errorMsg = fetchError.message;
                    
                    // 分析具体的错误类型
                    if (fetchError.name === 'AbortError') {
                        errorMsg = 'fetch超时';
                    } else if (fetchError.message.includes('network')) {
                        errorMsg = '网络错误';
                    } else if (fetchError.message.includes('CORS')) {
                        errorMsg = 'CORS跨域错误';
                    } else if (fetchError.message.includes('Failed to fetch')) {
                        errorMsg = '连接失败';
                    }
                    
                    log(`域名 ${domain} fetch失败: ${errorMsg}`);
                    
                    // 简化处理：如果fetch失败，直接尝试基础检测
                    try {
                        const basicResult = await testDomainBasicFast(domain, startTime);
                        clearTimeout(forceTimeout);
                        resolve(basicResult);
                    } catch (basicError) {
                        clearTimeout(forceTimeout);
                        resolve({ success: false, error: `fetch失败: ${errorMsg}`, domain });
                    }
                }
                
            } catch (error) {
                clearTimeout(forceTimeout);
                log(`域名 ${domain} 检测过程发生错误: ${error.message}`);
                resolve({ success: false, error: error.message, domain });
            }
        };
        
        testPromise();
    });
}

// 简化的基础连通性检测
function testDomainBasicFast(domain, startTime) {
    return new Promise((resolve) => {
        log(`开始快速基础检测: ${domain}`);
        
        const img = new Image();
        const timeout = setTimeout(() => {
            img.onload = img.onerror = null;
            const responseTime = Math.round(performance.now() - startTime);
            log(`域名 ${domain} 基础检测超时: ${responseTime}ms`);
            resolve({ success: false, error: `基础检测超时(1秒)`, domain });
        }, 1000); // 1秒基础检测超时
        
        img.onload = () => {
            clearTimeout(timeout);
            const responseTime = Math.round(performance.now() - startTime);
            log(`域名 ${domain} 基础检测成功: ${responseTime}ms`);
            resolve({ success: true, responseTime, domain });
        };
        
        img.onerror = () => {
            clearTimeout(timeout);
            const responseTime = Math.round(performance.now() - startTime);
            // 快速失败，不再判断404是否成功
            log(`域名 ${domain} 基础检测失败: ${responseTime}ms`);
            resolve({ success: false, error: `基础检测失败(${responseTime}ms)`, domain });
        };
        
        img.src = domain + '/favicon.ico?t=' + Date.now();
    });
}

// 加载iframe
function loadIframe(domain) {
    return new Promise((resolve, reject) => {
        if (!mainIframe) {
            reject(new Error('iframe元素尚未初始化'));
            return;
        }
        
        currentDomain = domain;
        
        // 设置iframe加载超时 - 移动端优化
        const timeoutDuration = isIOSDevice() ? 8000 : 10000; // iOS设备8秒，其他10秒
        const timeout = setTimeout(() => {
            log(`iframe加载超时 (${timeoutDuration}ms): ${domain}`);
            reject(new Error('iframe加载超时'));
        }, timeoutDuration);
        
        // iframe加载事件
        const onLoad = () => {
            clearTimeout(timeout);
            mainIframe.removeEventListener('load', onLoad);
            mainIframe.removeEventListener('error', onError);
            resolve();
        };
        
        const onError = () => {
            clearTimeout(timeout);
            mainIframe.removeEventListener('load', onLoad);
            mainIframe.removeEventListener('error', onError);
            reject(new Error('iframe加载失败'));
        };
        
        mainIframe.addEventListener('load', onLoad);
        mainIframe.addEventListener('error', onError);
        
        // 开始加载
        log(`开始加载iframe: ${domain}`);
        mainIframe.src = domain;
    });
}

// PWA模式下的域名检测（带启动页管理）
async function findBestDomainForPWA() {
    console.log('🚀 PWA模式：开始并行检测所有域名...');
    log('PWA模式：开始并行检测所有域名...');
    
    // 开始检测
    updateSplashScreen('正在检测连接...', 10);
    
    // 检测网络状态
    if (!navigator.onLine) {
        log('设备处于离线状态，显示离线提示');
        updateSplashScreen('设备离线', 0);
        // 不隐藏启动页，让用户看到提示
        return;
    }
    
    // 设置全局超时机制 - 如果3秒内没有成功，显示超时提示
    let isCompleted = false;
    const globalTimeout = setTimeout(() => {
        if (!isCompleted) {
            isCompleted = true;
            log('全局超时：3秒内没有成功连接，显示超时提示');
            updateSplashScreen('连接超时', 0);
            // 不隐藏启动页，让用户看到提示
        }
    }, 3000);
    
    try {
        // 记住用户上次访问的成功域名
        const lastWorkingDomain = localStorage.getItem('lastWorkingDomain');
        
        // 如果有上次成功的域名，先快速检测它
        if (lastWorkingDomain && DOMAINS.includes(lastWorkingDomain)) {
            log(`优先检测上次成功域名: ${lastWorkingDomain}`);
            updateSplashScreen('正在连接到服务器...', 30);
            
            const quickResult = await testDomain(lastWorkingDomain);
            
            if (quickResult.success && quickResult.responseTime < 2000) {
                log(`PWA模式快速选择上次成功域名: ${lastWorkingDomain} (${quickResult.responseTime}ms)`);
                
                try {
                    updateSplashScreen('正在启动应用...', 70);
                    await loadIframe(lastWorkingDomain);
                    updateSplashScreen('启动完成！', 100);
                    
                    // 标记完成并清除超时
                    isCompleted = true;
                    clearTimeout(globalTimeout);
                    
                    setTimeout(() => {
                        hideSplashScreen();
                        setTimeout(() => {
                            showIframe();
                            log(`PWA模式iframe加载成功: ${lastWorkingDomain}`);
                        }, 300);
                    }, 500);
                    return;
                } catch (error) {
                    log(`PWA模式上次成功域名加载失败: ${error.message}`);
                    updateSplashScreen('连接失败，尝试其他服务器...', 40);
                    // 继续检测其他域名
                }
            }
        }
        
        // 并行检测所有域名
        log('PWA模式：并行检测所有域名...');
        updateSplashScreen('正在寻找最佳连接...', 50);
        
        // 简化：直接使用testDomain，因为它已经有强制超时
        const domainPromises = DOMAINS.map(domain => testDomain(domain));
        
        let bestDomain = null;
        let fastestTime = Infinity;
        availableDomains = [];
        
        // 使用Promise.allSettled等待所有检测完成
        const results = await Promise.allSettled(domainPromises);
        
        if (isCompleted) {
            log('检测已完成，跳过结果处理');
            return;
        }
        
        results.forEach((result, index) => {
            const domainShort = DOMAINS[index].replace('https://', '');
            if (result.status === 'fulfilled' && result.value.success) {
                availableDomains.push(result.value);
                
                // 记录最快的域名
                if (result.value.responseTime < fastestTime) {
                    fastestTime = result.value.responseTime;
                    bestDomain = result.value;
                }
                
                log(`PWA模式域名检测成功: ${result.value.domain} (${result.value.responseTime}ms)`);
            } else {
                // 显示详细错误信息
                let errorDetail = '未知错误';
                if (result.status === 'fulfilled' && result.value.error) {
                    errorDetail = result.value.error;
                } else if (result.status === 'rejected') {
                    errorDetail = result.reason?.message || '请求被拒绝';
                }
                
                log(`PWA模式域名检测失败: ${DOMAINS[index]} - ${errorDetail}`);
            }
        });
        
        // 检测完成
        updateSplashScreen('检测完成', 65);
        
        if (bestDomain) {
            // 保存成功的域名
            localStorage.setItem('lastWorkingDomain', bestDomain.domain);
            
            log(`PWA模式选定最佳域名: ${bestDomain.domain} (${bestDomain.responseTime}ms)`);
            updateSplashScreen('正在连接到最佳服务器...', 80);
            
            try {
                // 加载iframe
                await loadIframe(bestDomain.domain);
                updateSplashScreen('启动完成！', 100);
                
                // 标记完成并清除超时
                isCompleted = true;
                clearTimeout(globalTimeout);
                
                setTimeout(() => {
                    hideSplashScreen();
                    setTimeout(() => {
                        showIframe();
                        log(`PWA模式iframe加载成功: ${bestDomain.domain}`);
                    }, 300);
                }, 500);
                
            } catch (error) {
                log(`PWA模式iframe加载失败: ${error.message}`);
                isCompleted = true;
                clearTimeout(globalTimeout);
                updateSplashScreen('启动失败', 0);
                // 不隐藏启动页，让用户看到提示
            }
            
        } else {
            log('PWA模式：所有域名检测失败，尝试直接连接');
            updateSplashScreen('检测失败，尝试直接连接...', 60);
            
            // 最后的fallback：直接尝试连接第一个域名，不经过检测
            try {
                const fallbackDomain = DOMAINS[0];
                log(`尝试直接连接fallback域名: ${fallbackDomain}`);
                updateSplashScreen('正在尝试直接连接...', 80);
                
                await loadIframe(fallbackDomain);
                updateSplashScreen('连接成功！', 100);
                
                isCompleted = true;
                clearTimeout(globalTimeout);
                localStorage.setItem('lastWorkingDomain', fallbackDomain);
                
                setTimeout(() => {
                    hideSplashScreen();
                    setTimeout(() => {
                        showIframe();
                        log(`PWA模式直接连接成功: ${fallbackDomain}`);
                    }, 300);
                }, 500);
                
            } catch (fallbackError) {
                log(`直接连接也失败: ${fallbackError.message}，显示失败提示`);
                isCompleted = true;
                clearTimeout(globalTimeout);
                updateSplashScreen('连接失败', 0);
                // 不隐藏启动页，让用户看到提示
            }
        }
        
    } catch (error) {
        log(`PWA模式检测过程发生错误: ${error.message}`);
        isCompleted = true;
        clearTimeout(globalTimeout);
        updateSplashScreen('检测过程出错', 0);
        // 不隐藏启动页，让用户看到提示
    }
}

// 检测是否为iOS设备和版本
function isIOSDevice() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// 获取iOS版本
function getIOSVersion() {
    const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
    if (match) {
        return {
            major: parseInt(match[1], 10),
            minor: parseInt(match[2], 10),
            patch: parseInt(match[3] || 0, 10)
        };
    }
    return null;
}

// 检测是否支持PWA安装API
function supportsPWAInstall() {
    return 'BeforeInstallPromptEvent' in window || 
           'onbeforeinstallprompt' in window;
}

// 检测iOS是否支持PWA安装提示
function iosSupportsInstallPrompt() {
    const version = getIOSVersion();
    if (!version) return false;
    
    // iOS 16.4+ 开始支持PWA安装API
    return (version.major > 16) || 
           (version.major === 16 && version.minor >= 4);
}

// 尝试触发PWA安装（适用于iOS 16.4+）
async function tryIOSInstall() {
    try {
        // 检查是否已经是PWA模式
        if (window.navigator.standalone) {
            return false;
        }

        // 尝试使用现代API
        if ('getInstalledRelatedApps' in navigator) {
            const apps = await navigator.getInstalledRelatedApps();
            if (apps.length > 0) {
                return false; // 已安装
            }
        }

        // 尝试触发安装提示
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const result = await deferredPrompt.userChoice;
            return result.outcome === 'accepted';
        }

        return false;
    } catch (error) {
        log('iOS安装尝试失败: ' + error.message);
        return false;
    }
}

// 改进的iOS安装处理
async function handleIOSInstall() {
    log('iOS设备安装指导');
    
    // 更新按钮状态
    updateDownloadButton('', '查看安装说明');
    
    // 直接显示手动安装指导，不使用Web Share API
    showManualIOSGuide();
}

// 显示安装选择对话框
function showInstallChoice() {
    return new Promise((resolve) => {
        const choiceOverlay = document.createElement('div');
        choiceOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 6000;
            padding: 20px;
            box-sizing: border-box;
        `;
        
        const choiceBox = document.createElement('div');
        choiceBox.innerHTML = `
            <div style="
                background: white;
                border-radius: 16px;
                padding: 24px;
                max-width: 320px;
                width: 100%;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                text-align: center;
            ">
                <h3 style="margin: 0 0 16px 0; font-size: 18px; color: #333;">选择安装方式</h3>
                <p style="margin: 0 0 24px 0; font-size: 14px; color: #666; line-height: 1.5;">
                    请选择您喜欢的安装方式
                </p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button class="pwa-btn" style="
                        background: #007AFF;
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.2s;
                    ">安装PWA应用</button>
                    <button class="apk-btn" style="
                        background: #34C759;
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.2s;
                    ">下载APK安装包</button>
                    <button class="cancel-btn" style="
                        background: #f5f5f5;
                        color: #666;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 8px;
                        font-size: 14px;
                        cursor: pointer;
                        margin-top: 8px;
                    ">取消</button>
                </div>
            </div>
        `;
        
        choiceOverlay.appendChild(choiceBox);
        document.body.appendChild(choiceOverlay);
        
        // 按钮事件
        const pwaBtn = choiceBox.querySelector('.pwa-btn');
        const apkBtn = choiceBox.querySelector('.apk-btn');
        const cancelBtn = choiceBox.querySelector('.cancel-btn');
        
        pwaBtn.addEventListener('click', () => {
            choiceOverlay.remove();
            resolve('pwa');
        });
        
        apkBtn.addEventListener('click', () => {
            choiceOverlay.remove();
            resolve('apk');
        });
        
        cancelBtn.addEventListener('click', () => {
            choiceOverlay.remove();
            resolve('cancel');
        });
        
        // 点击背景关闭
        choiceOverlay.addEventListener('click', (e) => {
            if (e.target === choiceOverlay) {
                choiceOverlay.remove();
                resolve('cancel');
            }
        });
    });
}

// 下载APK文件
function downloadAPK() {
    let downloadDomain = currentDomain;
    
    // 如果当前域名为空，尝试使用第一个可用域名
    if (!downloadDomain && availableDomains.length > 0) {
        downloadDomain = availableDomains[0].domain;
    }
    
    // 如果还是没有域名，使用域名列表中的第一个
    if (!downloadDomain) {
        downloadDomain = DOMAINS[0];
    }
    
    const apkUrl = downloadDomain + "/obj/GEAI.apk";
    log(`下载APK: ${apkUrl}`);
    
    // 更新按钮状态
    updateDownloadButton('installing', '正在下载...');
    
    // 开始下载
    window.location.href = apkUrl;
    
    // 3秒后恢复按钮状态
    setTimeout(() => {
        updateDownloadButton('', '安装');
    }, 3000);
}

// 显示自定义弹窗（支持HTML内容）
function showCustomAlert(message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 6000;
        padding: 20px;
        box-sizing: border-box;
    `;
    
    const alertBox = document.createElement('div');
    alertBox.innerHTML = `
        <div style="
            background: white;
            border-radius: 12px;
            padding: 20px;
            max-width: 320px;
            width: 100%;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            text-align: center;
        ">
            <div style="
                font-size: 16px;
                line-height: 1.5;
                color: #333;
                margin-bottom: 20px;
            ">${message}</div>
            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                background: #007AFF;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                font-size: 16px;
                cursor: pointer;
                min-width: 60px;
            ">确定</button>
        </div>
    `;
    
    alertOverlay.appendChild(alertBox);
    document.body.appendChild(alertOverlay);
    
    // 点击背景关闭
    alertOverlay.addEventListener('click', (e) => {
        if (e.target === alertOverlay) {
            alertOverlay.remove();
        }
    });
}

// 显示手动安装指导
function showManualIOSGuide() {
    // 创建详细的安装指导弹窗
    const guide = document.createElement('div');
    guide.id = 'installGuide';
    guide.innerHTML = `
        <div class="guide-content">
            <div class="guide-header">
                <h3>📱 安装GEAI到桌面</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="guide-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-text">点击底部工具栏的<strong>分享按钮</strong> <img src="img/image.png" style="width: 16px; height: 16px; vertical-align: middle; margin-left: 4px;"/></div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-text">向下滑动找到<strong>"添加到主屏幕"</strong>选项</div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-text">点击<strong>"添加到主屏幕"</strong></div>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-text">点击右上角<strong>"添加"</strong>按钮</div>
                </div>
            </div>
            <div class="guide-tip">
                💡 安装完成后可从桌面直接启动，享受原生应用体验！
            </div>
        </div>
    `;
    
    guide.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5000;
        padding: 20px;
        box-sizing: border-box;
    `;
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .guide-content {
            background: white;
            border-radius: 16px;
            padding: 0;
            max-width: 400px;
            width: 100%;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        .guide-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .guide-header h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
        }
        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s;
        }
        .close-btn:hover {
            background: rgba(255,255,255,0.2);
        }
        .guide-steps {
            padding: 20px;
        }
        .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            gap: 12px;
        }
        .step:last-child {
            margin-bottom: 0;
        }
        .step-number {
            background: #007AFF;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
            flex-shrink: 0;
        }
        .step-text {
            font-size: 16px;
            line-height: 1.4;
            color: #333;
        }
        .step-text strong {
            color: #007AFF;
            font-weight: 600;
        }
        .guide-tip {
            background: #f8f9fa;
            margin: 20px;
            padding: 16px;
            border-radius: 12px;
            font-size: 14px;
            color: #666;
            text-align: center;
            border-left: 4px solid #007AFF;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(guide);
    
    // 点击背景关闭
    guide.addEventListener('click', (e) => {
        if (e.target === guide) {
            guide.remove();
            style.remove();
        }
    });
}

// 显示改进的iOS安装引导
function showImprovedIOSGuide() {
    const version = getIOSVersion();
    log(`iOS版本: ${version?.major}.${version?.minor}`);
    
    // 直接使用手动引导方案
    updateDownloadButton('', '安装');
    downloadButton.onclick = handleIOSInstall;
}

// 检测PWA模式
function detectPWAMode() {
    const isStandalone = window.navigator.standalone === true;
    const isDisplayModeStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
    // 添加测试参数支持
    const urlParams = new URLSearchParams(window.location.search);
    const forcePWA = urlParams.get('pwa') === 'true';
    
    isPWAMode = isStandalone || isDisplayModeStandalone || forcePWA;
    
    console.log('🔍 PWA模式检测结果:', isPWAMode ? 'PWA模式' : '浏览器模式');
    
    if (forcePWA) {
        console.log('🧪 检测到测试参数，强制启用PWA模式 (在URL中添加?pwa=true)');
    }
    
    log(`检测到${isPWAMode ? 'PWA' : '浏览器'}模式`);
    return isPWAMode;
}

// 处理PWA安装
async function handleInstall() {
    if (!deferredPrompt) {
        log('无法安装：没有安装提示');
        if (isIOSDevice()) {
            showCustomAlert('请点击浏览器底部的分享按钮（<img src="img/image.png" style="width: 16px; height: 16px; vertical-align: middle;"/>），然后选择"添加到主屏幕"');
        } else {
            // 安卓环境下直接下载APK
            downloadAPK();
        }
        return;
    }

    try {
        // 安卓环境下给用户选择安装PWA或下载APK
        if (!isIOSDevice()) {
            const choice = await showInstallChoice();
            if (choice === 'apk') {
                // 用户选择下载APK
                downloadAPK();
                return;
            } else if (choice === 'cancel') {
                // 用户取消
                return;
            }
            // 如果选择 'pwa'，继续执行PWA安装流程
        }
        
        updateDownloadButton('installing', '正在安装...');
        
        // 显示安装对话框
        deferredPrompt.prompt();
        
        // 等待用户选择
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            log('用户接受安装');
            console.log('✅ PWA安装成功，用户接受安装');
            updateDownloadButton('installed', '已安装');
            
            // 3秒后开始应用
            setTimeout(() => {
                console.log('🚀 安装完成，开始连接应用...');
                findBestDomain();
            }, 2000);
        } else {
            log('用户拒绝安装');
            updateDownloadButton('', '安装');
        }
        
        deferredPrompt = null;
        
    } catch (error) {
        log('安装失败: ' + error.message);
        updateDownloadButton('', '重新安装');
        
        // 3秒后恢复按钮
        setTimeout(() => {
            updateDownloadButton('', '安装');
        }, 3000);
    }
}

// 清除所有缓存的函数
async function clearAllCaches() {
    try {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
        );
        log('所有缓存已清除');
        return true;
    } catch (error) {
        log('清除缓存失败: ' + error.message);
        return false;
    }
}

// 显示PWA启动页
function showSplashScreen() {
    console.log('🎨 创建启动页面...');
    
    // 创建启动页容器
    const splashContainer = document.createElement('div');
    splashContainer.id = 'splashContainer';
    splashContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(320px, 85vw);
        height: min(580px, 70vh);
        max-width: 380px;
        max-height: 680px;
        background-image: url('img/jieshao.jpg');
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 80px;
        z-index: 2000;
        opacity: 1;
        transition: opacity 0.5s ease;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        overflow: hidden;
    `;
    
    // 添加点击刷新功能
    splashContainer.addEventListener('click', () => {
        console.log('🔄 用户点击启动页面，准备刷新');
        location.reload();
    });
    
    splashContainer.style.cursor = 'pointer';
    splashContainer.title = '点击刷新页面';
    
    // 图片已作为背景铺满整屏，不需要单独的图片元素
    
    // 简化显示，只保留加载提示
    
    // 创建加载提示
    const loadingText = document.createElement('div');
    loadingText.id = 'splashLoadingText';
    loadingText.style.cssText = `
        font-size: 16px;
        color: #ffffff;
        text-align: center;
        font-weight: 600;
        margin-bottom: 20px;
        text-shadow: 0 2px 8px rgba(0,0,0,0.9);
        background: rgba(0,0,0,0.5);
        padding: 12px 24px;
        border-radius: 25px;
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255,255,255,0.2);
    `;
    loadingText.textContent = '正在自动连接...';
    
    // 创建进度条
    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = `
        width: 240px;
        height: 6px;
        background: rgba(0,0,0,0.3);
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    `;
    
    const progressBar = document.createElement('div');
    progressBar.id = 'splashProgressBar';
    progressBar.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #ffffff, #f0f0f0);
        width: 0%;
        transition: width 0.3s ease;
        border-radius: 3px;
        box-shadow: 0 0 10px rgba(255,255,255,0.5);
    `;
    progressContainer.appendChild(progressBar);
    
    // 创建加载动画
    const loadingDots = document.createElement('div');
    loadingDots.style.cssText = `
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 30px;
    `;
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            width: 12px;
            height: 12px;
            background: #ffffff;
            border-radius: 50%;
            animation: loading-pulse 1.5s infinite;
            animation-delay: ${i * 0.3}s;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        `;
        loadingDots.appendChild(dot);
    }
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes loading-pulse {
            0%, 80%, 100% {
                opacity: 0.3;
                transform: scale(0.8);
            }
            40% {
                opacity: 1;
                transform: scale(1);
            }
        }
        @keyframes splash-icon-bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // 不再显示调试信息区域
    
    // 不再需要重试提示 - 系统会自动处理所有情况
    
    splashContainer.appendChild(loadingText);
    splashContainer.appendChild(progressContainer);
    splashContainer.appendChild(loadingDots);
    
    // 添加提示文本
    const clickHint = document.createElement('div');
    clickHint.style.cssText = `
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        color: #ffffff;
        text-align: center;
        animation: fade-in-out 3s ease-in-out infinite;
        text-shadow: 0 2px 8px rgba(0,0,0,0.9);
        background: rgba(0,0,0,0.5);
        padding: 10px 20px;
        border-radius: 20px;
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255,255,255,0.2);
    `;
    clickHint.textContent = '点击屏幕刷新重试';
    
    // 添加闪烁动画
    if (!document.querySelector('#hint-animation-style')) {
        const hintStyle = document.createElement('style');
        hintStyle.id = 'hint-animation-style';
        hintStyle.textContent = `
            @keyframes fade-in-out {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }
        `;
        document.head.appendChild(hintStyle);
    }
    
    splashContainer.appendChild(clickHint);
    
    // 创建底部状态栏
    const statusBar = document.createElement('div');
    statusBar.id = 'statusBar';
    statusBar.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: #000000;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 500;
        z-index: 1999;
        letter-spacing: 1px;
    `;
    statusBar.textContent = '正在启动 GEAI...';
    
    // 创建背景遮罩
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.id = 'backgroundOverlay';
    backgroundOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1998;
        opacity: 1;
        transition: opacity 0.5s ease;
        cursor: pointer;
    `;
    
    // 为背景遮罩添加点击刷新功能
    backgroundOverlay.addEventListener('click', () => {
        console.log('🔄 用户点击背景遮罩，准备刷新');
        location.reload();
    });
    backgroundOverlay.title = '点击刷新页面';
    
    log('启动页面已显示，系统自动处理连接，用户可点击刷新');
    
    document.body.appendChild(backgroundOverlay);
    document.body.appendChild(splashContainer);
    document.body.appendChild(statusBar);
    
    console.log('✅ 启动页面创建完成并添加到页面');
    log('显示PWA启动页');
    return splashContainer;
}

// 更新启动页加载状态
function updateSplashScreen(text, progress = 0, debugText = '') {
    const loadingText = document.getElementById('splashLoadingText');
    const progressBar = document.getElementById('splashProgressBar');
    const statusBar = document.getElementById('statusBar');
    
    if (loadingText) {
        loadingText.textContent = text;
    }
    
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    
    // 更新底部状态栏文字
    if (statusBar) {
        statusBar.textContent = `正在启动 GEAI... ${text}`;
    }
    
    // 调试信息仅在控制台显示，不在页面上显示
    if (debugText) {
        console.log(`🔍 调试信息: ${debugText}`);
    }
    
    log(`启动页状态: ${text} (${progress}%) ${debugText ? '- ' + debugText : ''}`);
}

// 隐藏启动页
function hideSplashScreen() {
    const splashContainer = document.getElementById('splashContainer');
    const statusBar = document.getElementById('statusBar');
    const backgroundOverlay = document.getElementById('backgroundOverlay');
    
    if (splashContainer) {
        // 隐藏启动页，不再需要处理自动重试
        splashContainer.style.opacity = '0';
        setTimeout(() => {
            if (splashContainer.parentNode) {
                splashContainer.remove();
            }
        }, 500);
        log('隐藏PWA启动页');
    }
    
    if (statusBar) {
        statusBar.style.opacity = '0';
        setTimeout(() => {
            if (statusBar.parentNode) {
                statusBar.remove();
            }
        }, 500);
    }
    
    if (backgroundOverlay) {
        backgroundOverlay.style.opacity = '0';
        setTimeout(() => {
            if (backgroundOverlay.parentNode) {
                backgroundOverlay.remove();
            }
        }, 500);
    }
}

// 页面加载完成后开始检测
window.addEventListener('load', () => {
    console.log('🚀 页面加载完成，开始初始化...');
    log('页面加载完成，开始初始化...');
    
    // 1. 首先初始化DOM元素引用
    console.log('🔧 初始化DOM元素...');
    initDOMElements();
    
    // 2. 初始化语言设置
    initLanguage();
    
    // 3. 绑定事件监听器
    if (downloadButton) {
        downloadButton.addEventListener('click', handleInstall);
        log('下载按钮事件绑定完成');
    }
    
    // 4. 检测PWA模式
    isPWAMode = detectPWAMode();
    console.log(`🔍 PWA模式检测结果: ${isPWAMode}`);
    log(`PWA模式检测结果: ${isPWAMode}`);
    
    if (isPWAMode) {
        // PWA模式（添加到主屏幕后）：直接进入域名检测
        console.log('📱 PWA模式：直接进入域名检测');
        log('PWA模式：直接进入域名检测');
        
        // 确保App Store页面被隐藏（HTML中的脚本应该已经处理了）
        if (appStoreContainer) {
            appStoreContainer.style.display = 'none';
            console.log('🔒 确保App Store页面隐藏');
        }
        
        // 显示启动页
        console.log('🎨 显示启动页...');
        showSplashScreen();
        
        // 立即开始域名检测
        console.log('🌐 开始域名检测...');
        log('开始域名检测...');
        findBestDomainForPWA();
        
    } else {
        // 浏览器模式：显示App Store风格页面
        console.log('🌐 浏览器模式：显示App Store页面');
        log('浏览器模式：显示App Store页面');
        showAppStore();
        
        // 设置安装按钮
        if (isIOSDevice()) {
            showImprovedIOSGuide();
        } else {
            updateDownloadButton('', '安装');
        }
        
        // 延迟1秒后强制显示安装按钮（以防beforeinstallprompt没有触发）
        setTimeout(() => {
            if (!isInstallable && isIOSDevice()) {
                showImprovedIOSGuide();
            }
        }, 2000);
    }
});

// 注册Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            log('Service Worker注册成功');
            
            // 检查更新
            registration.addEventListener('updatefound', () => {
                log('发现新版本，正在更新...');
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        log('新版本已安装，建议刷新页面');
                        // 自动激活新版本
                        newWorker.postMessage({ type: 'SKIP_WAITING' });
                    }
                });
            });
            
            // 监听Service Worker控制权变化
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                log('Service Worker已更新，但不自动刷新页面');
                // 移除自动刷新，避免无限重试
            });
        })
        .catch(error => {
            log('Service Worker注册失败: ' + error.message);
        });
}

// 页面可见性变化时检查更新
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && 'serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration) {
                registration.update();
            }
        });
    }
});

// 网络状态监听
window.addEventListener('online', () => {
    log('网络已连接，但不自动重新加载');
    // 移除自动重新加载，用户可以手动重试
});

window.addEventListener('offline', () => {
    log('网络已断开');
});

// 监听PWA安装提示事件
window.addEventListener('beforeinstallprompt', (e) => {
    log('PWA可以安装，显示安装按钮');
    e.preventDefault();
    deferredPrompt = e;
    isInstallable = true;
    
    // 只在浏览器模式下显示安装按钮
    if (!isPWAMode) {
        // 更新按钮文本为正常的安装文本
        updateDownloadButton('', getLocalizedText('install'));
    }
});

// 监听PWA安装完成事件
window.addEventListener('appinstalled', () => {
    log('PWA安装成功');
    deferredPrompt = null;
    isInstallable = false;
});

// 绑定下载按钮点击事件 - 移至DOMContentLoaded中执行

// 监听窗口大小和方向变化
window.addEventListener('resize', () => {
    if (isPWAMode && mainIframe && mainIframe.style.display === 'block') {
        log('窗口大小变化，重新调整iframe');
        setTimeout(adjustIframeHeight, 100);
    }
});

window.addEventListener('orientationchange', () => {
    if (isPWAMode && mainIframe && mainIframe.style.display === 'block') {
        log('设备方向变化，重新调整iframe');
        setTimeout(adjustIframeHeight, 300);
    }
});

// 监听页面焦点变化，检测用户是否操作了分享菜单
let shareMenuOpened = false;

window.addEventListener('blur', () => {
    if (isIOSDevice() && !isPWAMode) {
        shareMenuOpened = true;
        log('用户可能打开了分享菜单');
        
        // 隐藏指向箭头
        const arrow = document.getElementById('shareArrow');
        if (arrow) {
            arrow.style.opacity = '0.3';
            arrow.innerHTML = '👆 在分享菜单中找到"添加到主屏幕"';
        }
    }
});

window.addEventListener('focus', () => {
    if (shareMenuOpened && isIOSDevice() && !isPWAMode) {
        log('用户返回页面，检查是否已安装');
        
        // 延迟检查是否已经安装为PWA
        setTimeout(() => {
            if (window.navigator.standalone) {
                log('检测到PWA已安装');
            } else {
                // 用户没有安装，显示鼓励信息
                updateDownloadButton('', '再试一次？点击下方分享按钮 <img src="img/image.png" style="width: 16px; height: 16px; vertical-align: middle;"/>');
            }
        }, 1000);
        
        shareMenuOpened = false;
    }
});

// 检测所有域名并选择最佳的（浏览器模式用）
async function findBestDomain() {
    log('开始并行检测所有域名...');
    
    // 记住用户上次访问的成功域名
    const lastWorkingDomain = localStorage.getItem('lastWorkingDomain');
    
    // 更新按钮状态：正在检测域名
    updateDownloadButton('installing', getLocalizedText('connecting') + '...');
    
    // 如果有上次成功的域名，先快速检测它
    if (lastWorkingDomain && DOMAINS.includes(lastWorkingDomain)) {
        log(`优先检测上次成功域名: ${lastWorkingDomain}`);
        updateDownloadButton('installing', getLocalizedText('checking') + ' ' + lastWorkingDomain);
        
        const quickResult = await testDomain(lastWorkingDomain);
        
        if (quickResult.success && quickResult.responseTime < 2000) {
            log(`浏览器模式快速选择上次成功域名: ${lastWorkingDomain} (${quickResult.responseTime}ms)`);
            
            try {
                updateDownloadButton('installing', getLocalizedText('starting') + '...');
                await loadIframe(lastWorkingDomain);
                showIframe();
                log(`iframe加载成功: ${lastWorkingDomain}`);
                return;
            } catch (error) {
                log(`上次成功域名加载失败: ${error.message}`);
                // 继续检测其他域名
            }
        }
    }
    
    // 并行检测所有域名
    log('浏览器模式：并行检测所有域名...');
    updateDownloadButton('installing', getLocalizedText('checking') + '...');
    const domainPromises = DOMAINS.map(domain => testDomain(domain));
    
    let bestDomain = null;
    let fastestTime = Infinity;
    availableDomains = [];
    
    // 使用Promise.allSettled等待所有检测完成
    const results = await Promise.allSettled(domainPromises);
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value.success) {
            availableDomains.push(result.value);
            
            // 记录最快的域名
            if (result.value.responseTime < fastestTime) {
                fastestTime = result.value.responseTime;
                bestDomain = result.value;
            }
            
            log(`浏览器模式域名检测成功: ${result.value.domain} (${result.value.responseTime}ms)`);
        } else {
            log(`浏览器模式域名检测失败: ${DOMAINS[index]}`);
        }
    });
    
    if (bestDomain) {
        // 保存成功的域名
        localStorage.setItem('lastWorkingDomain', bestDomain.domain);
        
        updateDownloadButton('installing', getLocalizedText('starting') + '...');
        log(`选定最佳域名: ${bestDomain.domain} (${bestDomain.responseTime}ms)`);
        
        try {
            await loadIframe(bestDomain.domain);
            showIframe();
            log(`iframe加载成功: ${bestDomain.domain}`);
        } catch (error) {
            log(`iframe加载失败: ${error.message}`);
            const errorMsg = currentLanguage === 'zh' ? '应用启动失败，请重试' : 'App launch failed, please retry';
            showError(errorMsg);
        }
        
    } else {
        log('所有域名检测失败');
        const errorMsg = currentLanguage === 'zh' ? '暂时无法连接到服务器' : 'Unable to connect to server';
        showError(errorMsg);
    }
}

// 动态调整iframe高度（PWA模式优化）
function adjustIframeHeight() {
    if (!isPWAMode || !mainIframe) {
        log('警告：无法调整iframe高度 - PWA模式或iframe元素未初始化');
        return;
    }
    
    // 简化方案：直接使用100vh，让CSS padding处理安全区域
    mainIframe.style.top = '0';
    mainIframe.style.left = '0';
    mainIframe.style.right = '0';
    mainIframe.style.bottom = '0';
    mainIframe.style.width = '100%';
    mainIframe.style.height = '100vh';
    
    log(`PWA iframe调整: 使用100vh全屏显示`);
}

// 初始化已合并到window.addEventListener('load')事件中