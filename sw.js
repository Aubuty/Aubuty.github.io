/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","8a51eb62f57af56a15a7b12578a196df"],["/2022/05/31/Android新大陆云平台API使用/index.html","e8c5650d50e0383ab7e5089bd1d9f58d"],["/2022/05/31/Android页面跳转/index.html","e218c9cfac5a77263ca8ef3b8c0a6163"],["/2022/05/31/Java内部类详解/index.html","04664f163460c0e0d53ce10ee4dad788"],["/2022/05/31/Java多线程/index.html","e7695d8dd7b644b19d1f51c8e5cc593e"],["/2022/05/31/Linux-vim的使用/index.html","b892e12b79a15631f85a41f50134fb74"],["/2022/05/31/MySQL基础/index.html","8231ca58fcaa8cc449b7e5216c331cdf"],["/2022/05/31/String/index.html","3bf1c8b9b6316d1bdef278b3f435807b"],["/2022/05/31/final关键字/index.html","bcb22435cb055b2d074da84c16caf798"],["/2022/05/31/static关键字/index.html","e26a7db3989a35f78aad166fcf39db99"],["/2022/05/31/this关键字/index.html","b2b0585f6eb839e36fe65e69df429e70"],["/2022/05/31/冒泡排序/index.html","b428192832cd668b767604b08f8daff8"],["/2022/05/31/引用类型使用小结/index.html","25fd613969e8bfaf2303f991dc859b12"],["/2022/05/31/抽象类/index.html","fd5265469c19bb2bcd16c7da222dc3f1"],["/2022/05/31/接口/index.html","dc77042424f8bfce64f0a4bac68948de"],["/2022/05/31/斐波那契数列/index.html","9546941b29516dc63d1b3926adc9e6df"],["/2022/05/31/类的五大成分/index.html","ca129e72b8842aa1f4b46073535b7148"],["/2022/05/31/选择排序/index.html","ae9b0c8d29706ab5678c934438ad67a2"],["/2022/05/31/面向对象的三大特征/index.html","878e498f934c8be3b9d0696010ba942a"],["/2022/06/01/01.初识Python/index.html","c64df26b0e952a32f4b3636b5f3a2a35"],["/2022/06/01/02.语言元素/index.html","3566a2c6b97bd8d035a9b03a0ee63c39"],["/2022/06/01/03.分支结构/index.html","94c00d039ff90868449698ac5e43ee03"],["/2022/06/01/04.循环结构/index.html","e9e41530b3993f284273ce06f63b3f53"],["/2022/06/01/05.构造程序逻辑/index.html","55aeab2918bf7372a891f63fc1be2aac"],["/2022/06/01/06.函数和模块的使用/index.html","0be431b7518ff58b11bf1d858cb61ab7"],["/2022/06/01/07.字符串和常用数据结构/index.html","f18acf706cffa28cf3e272fbceccd761"],["/2022/06/01/08.面向对象编程基础/index.html","d3d395da5d903c888cb2be4181a32dee"],["/2022/06/01/09.面向对象进阶/index.html","8b9d9861118f2230fb644a4f9f122ce5"],["/2022/06/01/C语言笔记/index.html","867969d16deaab5412f7893ee5a6a206"],["/2022/06/07/安卓基础-布局/index.html","4985bca917e7faef7969b59c7b9358c5"],["/2022/06/28/C51单片机学习笔记一/index.html","9c6b6b544ad7cd5a7268f9eaa3b4b457"],["/2022/06/28/C51单片机学习笔记二/index.html","4c25f79d819b120f6d851d6de30dac73"],["/about/index.html","6e7fa1e2e364445a4271c0b35e712d6c"],["/archives/2022/05/index.html","4f9f5613b09958d050477b89fdf294f3"],["/archives/2022/05/page/2/index.html","018fda967541fddc532d5e767e6c9e65"],["/archives/2022/06/index.html","64b0146be55fe9850d2f1600faa7a853"],["/archives/2022/06/page/2/index.html","ab0346a3dfcb57c79782496a22f70815"],["/archives/2022/index.html","d51cfbc01091dbe97fae12dca0bddd76"],["/archives/2022/page/2/index.html","0c8ffc1f1938be9bfb7957fc9c7844c6"],["/archives/2022/page/3/index.html","069cc5d8d923750ab87f2f253bc24119"],["/archives/2022/page/4/index.html","f50b52b2d8ac66fd5debce2fa0fc677b"],["/archives/index.html","73b43302fc6bbc66beeac6f403b9a56a"],["/archives/page/2/index.html","058f0d0f1f0e73074dde4b8e80f94bc9"],["/archives/page/3/index.html","8885f9819d3c1bdace20ba71e6e3b2c8"],["/archives/page/4/index.html","00e8ccb1be98423ebc52e41a5a188bd3"],["/categories/Linux/index.html","f8f8409dcd55d4d793fa450c96b69d91"],["/categories/Linux/vim/index.html","1f5a4c850485ed5ff06be3995d8682e6"],["/categories/index.html","93318d3e8103e26b4885d6a329e6a854"],["/categories/学习笔记/C-C/index.html","b767a5e2755d2c02e29e00096ef8fb65"],["/categories/学习笔记/Java/Api/index.html","696a95cf43b6724f954a0e1d2cf59ccc"],["/categories/学习笔记/Java/index.html","94998faa6fbdd9f683a58a4a54780520"],["/categories/学习笔记/Java/page/2/index.html","35918cda231a82b611df9d791b0b8483"],["/categories/学习笔记/Python/index.html","008aac50ed1db8da7cf1ae3102bf39ac"],["/categories/学习笔记/index.html","9c998ff2b6f630ab50ec37e1e4817dda"],["/categories/学习笔记/page/2/index.html","dce49d32db0ce3ba3c6928a769f0c14d"],["/categories/学习笔记/page/3/index.html","8709d270ac7714290f13ffc5ab640665"],["/categories/学习笔记/单片机/index.html","92938e225b60c8a395aa5f6ff6c3d8dc"],["/categories/学习笔记/安卓/index.html","6b8ce4b6d5c7b1772c8a9d35f40213cd"],["/categories/学习笔记/数据库/index.html","f8fff871b15441092597118e67cec37f"],["/categories/安卓/index.html","a7b14caad9cf5597b4b0ed0c439e9c2d"],["/categories/安卓/新大陆/index.html","89ede1b8bd6b2cc1d71c196b7e640461"],["/categories/算法/index.html","332a04107b49e9e5410c8a46261ef787"],["/comment/index.html","a612c42a748b49e370c2ac180bc621d7"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","f86c8d2f1e0dafc5a2abbe6cc56d46ca"],["/gallery/index.html","7ee7eb40e1aea2130b095740866de927"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","ceebe5a9093a2185c8f33e41c3a727df"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","02d5dfd79a7838175247400135150c1f"],["/page/3/index.html","12e490481a2c2979645f9de7cf9b81dc"],["/page/4/index.html","45da24dbeec378122a47022c810a0a47"],["/sw-register.js","12bb7156a2ab3f636ae4e9cab37b8fa2"],["/tags/Bundle/index.html","17871e48cd57cd1699f96780493bffdd"],["/tags/C-C/index.html","f2b713e07d27cb4416dfc9ff6fc27e75"],["/tags/C51单片机/index.html","f255485b49267fd8eb7ad78d391ebeb1"],["/tags/Intent/index.html","5b496d145845eeba7d3cc81c988033ea"],["/tags/Java/index.html","bf51b052776931e38140c737cdf6ad3d"],["/tags/Java/page/2/index.html","a3fa520bced0b19619e1bb6e4dd817d5"],["/tags/MySQL/index.html","3ab245d78d80796f85cc8ebd20e4ea5a"],["/tags/String/index.html","97dc710897abb53abd3034d53a5844a1"],["/tags/Thread/index.html","eea3528e689783bf3066823e87cc1f92"],["/tags/api/index.html","dca377bd225b549ec5476922db7d8432"],["/tags/gcc/index.html","5917f51e130cccee8360767e04f96055"],["/tags/index.html","9c9909995e9e2e57c11bb12c3964ba7d"],["/tags/python/index.html","a52cbf12267c2c58b5044c94e21deade"],["/tags/vim/index.html","542e02b2b61caa512a636beeec65b3a6"],["/tags/云平台/index.html","29fc948281e1a5aaa1cba4a69f2e8826"],["/tags/冒泡排序/index.html","be603e47cb53103de1379eac2e33b340"],["/tags/安卓/index.html","a6d735f56ecc7256271841964c33d3bb"],["/tags/定时器/index.html","df8f052e6e6f8893a9b0993dcd3eae55"],["/tags/斐波那契数列/index.html","838eab9d0e4be7934ee1ac307564aad5"],["/tags/新大陆/index.html","2cc1fbdc30146dacf49a6795abea02ea"],["/tags/选择排序/index.html","c626df0deccc8e5b8bcb29700f426b8c"],["/tags/面向对象/index.html","30158c3ac17611c9fd4a13155ab95004"],["/tags/面向对象编程/index.html","3de95f43259d6834fba6a747bd2cc179"]];
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
