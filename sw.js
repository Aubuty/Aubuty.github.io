/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","1815a8ce9df10d86dd78bc24ee938f2d"],["/2022/05/31/Android新大陆云平台API使用/index.html","fe83ac6266addccb0d58cdf1834d921e"],["/2022/05/31/Android页面跳转/index.html","1bd13899db3343b755a2125c77bc709a"],["/2022/05/31/Java内部类详解/index.html","47d66b818d558f5b37512199fef09cc7"],["/2022/05/31/Java多线程/index.html","b67dfbd5a62757287040ac7533ff0bb5"],["/2022/05/31/Linux-vim的使用/index.html","374d02a8152d8933b798904b3cdd7598"],["/2022/05/31/MySQL基础/index.html","bd754e3d4b91a91ffc7fd05efbd4e865"],["/2022/05/31/String/index.html","c706e01b07b7b93bdec5d3d18815e58a"],["/2022/05/31/final关键字/index.html","e307d492dfbe60e141e9d123f70e3b90"],["/2022/05/31/static关键字/index.html","ccb6bc77e20e0dbb28ab65e7c7159bbc"],["/2022/05/31/this关键字/index.html","c6547464056d9425057994874db56be2"],["/2022/05/31/冒泡排序/index.html","9146635fb62807966ce503aa3976100a"],["/2022/05/31/引用类型使用小结/index.html","63c20f5966097d206bd632547ee3a964"],["/2022/05/31/抽象类/index.html","fd3245e2820009861b5d91352fe16ed9"],["/2022/05/31/接口/index.html","7af6fce6a399d2d9f69709a3951c8a85"],["/2022/05/31/斐波那契数列/index.html","20f59b3156a2a01005b1797397048f2c"],["/2022/05/31/类的五大成分/index.html","ed58e5edb5227d362f9b06e6477a48fb"],["/2022/05/31/选择排序/index.html","7c8fe0b5a7754b5d2472072e3a1b72cf"],["/2022/05/31/面向对象的三大特征/index.html","be292775193b86aa3890835465c5e150"],["/2022/06/01/01.初识Python/index.html","77f9dfcba61002d8859ca473876e2c8f"],["/2022/06/01/02.语言元素/index.html","d9511d303ddfd41ef87a7ec2a26a9456"],["/2022/06/01/03.分支结构/index.html","d0640ff61959cb77eac17209650c7541"],["/2022/06/01/04.循环结构/index.html","6394432218371d355a80cc1bc625ebf2"],["/2022/06/01/05.构造程序逻辑/index.html","e882c92b28f160b57fd3b1411ba8da18"],["/2022/06/01/06.函数和模块的使用/index.html","24e576781be6d9cd98fb8ea1c625d6d9"],["/2022/06/01/07.字符串和常用数据结构/index.html","7c15a91b0e325c1f72de603a9179d67c"],["/2022/06/01/08.面向对象编程基础/index.html","3b0565b6b539880489969dcda1e411c5"],["/2022/06/01/09.面向对象进阶/index.html","ba8783ce83dc23a5ed65289305ca6e98"],["/2022/06/01/C语言笔记/index.html","e0988b52942c437ad5960f7985e675ae"],["/2022/06/07/安卓基础-布局/index.html","0240e7f39b117714a0411f1e04a6b271"],["/2022/06/28/C51单片机学习笔记一/index.html","ef18699f2253adf4644db4279f087110"],["/2022/06/28/C51单片机学习笔记二/index.html","2c1aecc065dd3f18c9196d6fec1b2ca6"],["/2022/06/29/C51单片机学习笔记三/index.html","1524ed13543f8d78340716a5f6bec834"],["/2022/06/30/C51单片机学习笔记四/index.html","330108b23b17b65eb3f94302c8c5202f"],["/2022/07/02/C51单片机学习笔记五/index.html","97928fe20c7582bcb3c591ec0e9b5a0d"],["/2022/07/05/C51单片机学习笔记六/index.html","128c8d844cd41d402c40eec533ed8a75"],["/about/index.html","7dc2790631ad2f7f6fdbb81161b10338"],["/archives/2022/05/index.html","c45a376ac33e627653c8bead76715c0c"],["/archives/2022/05/page/2/index.html","c0a0cf738ae1748072ddcee7b9656908"],["/archives/2022/06/index.html","200f0cc034fc514fd184d213314910df"],["/archives/2022/06/page/2/index.html","2a6dc23693b5f1a559b1d2371b0a18df"],["/archives/2022/07/index.html","b93e1a117c8b8072dbec61e7b0249165"],["/archives/2022/index.html","f5cb98758c9579d5baaa0cd22ca3994e"],["/archives/2022/page/2/index.html","fd7379cd5857bf7ad3cfe2bf1c3003dc"],["/archives/2022/page/3/index.html","f37dc39f548f357137a06fe546218106"],["/archives/2022/page/4/index.html","261af2ed7e8fdca343ff8143fd587120"],["/archives/index.html","0ab80156bbcd301a6b16518de5645833"],["/archives/page/2/index.html","4e380a9453b53cbe99e6b1da809dabfa"],["/archives/page/3/index.html","b9767b9f49aa09a82ce72ed70d00e79e"],["/archives/page/4/index.html","f70f937829c5d5c271e2add41cd93aea"],["/categories/Linux/index.html","14355862bdcd53e2e21cf79856258453"],["/categories/Linux/vim/index.html","283efa9abdc858789790051eda9bd4de"],["/categories/index.html","15350bc14a60230e9bda398ac5e4f036"],["/categories/学习笔记/C-C/index.html","48bccfc5763e060895e1dadd0991f168"],["/categories/学习笔记/Java/Api/index.html","b2d11386c36bf3684b0b6ea49a74bff9"],["/categories/学习笔记/Java/index.html","cd7905e9ce95aa51e56f4203ba31afbf"],["/categories/学习笔记/Java/page/2/index.html","8a5b4df28043166c9cee628019922e52"],["/categories/学习笔记/Python/index.html","271ceb3d147f0e692b42da3d011120e0"],["/categories/学习笔记/index.html","2163030bbec567b2c143a45353443664"],["/categories/学习笔记/page/2/index.html","421665bee48cd38e88a3f2c088b77727"],["/categories/学习笔记/page/3/index.html","5359f774ac48a8023090da3947b0940c"],["/categories/学习笔记/单片机/index.html","620f8d50651819a609ba9943480932e4"],["/categories/学习笔记/安卓/index.html","b16294b490ea6a4297ab8e93f1b11581"],["/categories/学习笔记/数据库/index.html","912935c3d7950a7aff061eb8524c9f08"],["/categories/安卓/index.html","dbe96c8745def54775a3b7092cc74f08"],["/categories/安卓/新大陆/index.html","25c2946cabdea57aa78469f0e7886236"],["/categories/算法/index.html","28604216216915204897cd3bfe6481bd"],["/comment/index.html","de2d02e3aaf8250ff6b2bff57a80a017"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","4282bae19fc178284f4e6c5abbe21a0b"],["/gallery/index.html","05e6dd2e5511449974a542ae3424a9df"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","a5405577c89bedb30d246725df13fccd"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","4374139ad588473c2b3a3b0207e6e81d"],["/page/3/index.html","1278e10bd9e220a06429790515b57448"],["/page/4/index.html","489427f000833967ae8ba962bcea417b"],["/sw-register.js","a73e7ab8f1866dbd889c914d64d558e9"],["/tags/Bundle/index.html","8e2353c5c47d0a6b9546612976299e5d"],["/tags/C-C/index.html","7c993ff5f39f00088ac4c2e6d7f3af7a"],["/tags/C51单片机/index.html","dc88daf3fa471a3c05a48a35bc5d28e1"],["/tags/Intent/index.html","238557a680c337402f20d6777b97981b"],["/tags/Java/index.html","afd6fbf51ce20c035586e13e8b0d1e45"],["/tags/Java/page/2/index.html","4019635bbed7bbd05bc0ac2fd1fd9c08"],["/tags/LCD1602/index.html","4a16386a265c376cb3a1b9eeeab69c74"],["/tags/MySQL/index.html","4e1ffadf3e1044957d99a6d6ff8fa18c"],["/tags/PWM/index.html","535560eccc8c8f983b587eba986e0c8e"],["/tags/String/index.html","18346166d6dd7f286d8c11adc1ab3b6e"],["/tags/Thread/index.html","7ae21efbac1349247a6bf6fa00115ad2"],["/tags/api/index.html","2b5e5c22ae382a9b22601e5f6a2967bb"],["/tags/gcc/index.html","d00f19c93e2f6bbc1dda96879959834b"],["/tags/index.html","9889ffdd476187d67f742afff21950d0"],["/tags/python/index.html","0b356457a97e1243aaada52dcea9f56d"],["/tags/vim/index.html","ec07aa17f6b60b71ec3b972c58db03dd"],["/tags/wifi/index.html","06fa60144529c912e868bd6cec417d00"],["/tags/串口/index.html","7cd67108e5515556d87368b5df077930"],["/tags/云平台/index.html","c6d2987767862f2e8cdec8fcbdc4b9e8"],["/tags/冒泡排序/index.html","cb73ffa76c03dbe49a8603e74839ea14"],["/tags/单片机/index.html","572d1ef1b7baf8af4fd7ff586d89e5e1"],["/tags/安卓/index.html","ca18fb01c3a24d092c1beb2b32c9f140"],["/tags/定时器/index.html","9954266d7c660051fb2e662167e8f77e"],["/tags/斐波那契数列/index.html","e7eeda78a2ccbdd5c753685eb1742d88"],["/tags/新大陆/index.html","4983dc59e6b5889bd0ee431df92d42d3"],["/tags/蓝牙/index.html","46112f2a84504bdc6272b0bb639ec81e"],["/tags/选择排序/index.html","1b3fbdb40a4d48b7303387e0fddda268"],["/tags/面向对象/index.html","018195f9c0c99fb0cfb1a6164345e348"],["/tags/面向对象编程/index.html","b15eb71fd2e649d66f198db669addb8b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
