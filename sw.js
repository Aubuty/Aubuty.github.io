/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","35d2a835038f2caac5d2254ca56003d8"],["/2022/05/31/Android新大陆云平台API使用/index.html","8383fdef21d64879e498e2dc751a8ff9"],["/2022/05/31/Android页面跳转/index.html","ec34f6ac79dfb529d1258a33360cf555"],["/2022/05/31/Java内部类详解/index.html","91e4f7c8eeafe5a6c4eef96297bca7db"],["/2022/05/31/Java多线程/index.html","86628f63d90f934e69f7b793e277ba77"],["/2022/05/31/Linux-vim的使用/index.html","87e61049e13b441d87271e3c875f0dfd"],["/2022/05/31/MySQL基础/index.html","75f9ceec74771b4beaa39e45d63956f4"],["/2022/05/31/String/index.html","f6f36b9674fd7807b54b1a27b01e69bc"],["/2022/05/31/final关键字/index.html","a0b4f8a626c6aa141a33c2af4f282bc4"],["/2022/05/31/static关键字/index.html","497f5f610b946b6ddb3fa6140fd23df0"],["/2022/05/31/this关键字/index.html","3d74d3700fc1f84bfa32a1abeb5b3bbc"],["/2022/05/31/冒泡排序/index.html","6966472a472897525b9ca00c2118f311"],["/2022/05/31/引用类型使用小结/index.html","f1350dd3dd9ca9f914990d50b0538719"],["/2022/05/31/抽象类/index.html","5289ec206d2875de7d707aa16043cc74"],["/2022/05/31/接口/index.html","3e37321ab27b090b1aaaca8c705fc7a5"],["/2022/05/31/斐波那契数列/index.html","e892d49c69c5f872a60b537e11425681"],["/2022/05/31/类的五大成分/index.html","02fd649e8ccbd9ccd15f467153b712ca"],["/2022/05/31/选择排序/index.html","e4722e1b92c294092a9250dcd4b68b56"],["/2022/05/31/面向对象的三大特征/index.html","d2263adef24097be2500aa4db2deef6d"],["/2022/06/01/01.初识Python/index.html","f73beba96e4b1c5d26d74dbd2ad53a22"],["/2022/06/01/02.语言元素/index.html","4be401a800a2859aedee9cd1c97b5648"],["/2022/06/01/03.分支结构/index.html","5031da68f8c3209edff80ab148fb79fb"],["/2022/06/01/04.循环结构/index.html","28cd41561adbfbf949470e1e5a4f023a"],["/2022/06/01/05.构造程序逻辑/index.html","0ab51abddb7f81a8085cb5f4a2379d3a"],["/2022/06/01/06.函数和模块的使用/index.html","130ad500dabfaf6550862c0b3ac469b8"],["/2022/06/01/07.字符串和常用数据结构/index.html","f877f94061672b5573f53a5419ef24a8"],["/2022/06/01/08.面向对象编程基础/index.html","90dd6aabc596a7cf1d51deb14fa29c9f"],["/2022/06/01/09.面向对象进阶/index.html","51df3b1d7e5458cf81685cee0cb8e3cb"],["/2022/06/01/C语言笔记/index.html","2fe85ddd3f97d754ee7b20309a6d9e6a"],["/2022/06/07/安卓基础-布局/index.html","72e18eae7eed9cdb1b8ed077337b0836"],["/2022/06/28/C51单片机学习笔记一/index.html","345c276676567a3ef46af68642b61fb0"],["/2022/06/28/C51单片机学习笔记二/index.html","a140fb9f7fe7fc9e7ddaf0ec4d64fb7b"],["/about/index.html","93fe07e8d2a566b3d9af34744c3eb789"],["/archives/2022/05/index.html","7954e00d7ce10b6ebe72fd6783655318"],["/archives/2022/05/page/2/index.html","1c27806fccd4dfaa64cb8951347d90b5"],["/archives/2022/06/index.html","e862dad9c6e38c2bf80dd3f9dbbff6cc"],["/archives/2022/06/page/2/index.html","fa22b066aa95914fbff811c2ac968e76"],["/archives/2022/index.html","c1cf652fcc4b6de4ed40dbba988794f0"],["/archives/2022/page/2/index.html","9acac17dac25f788915d84e895505104"],["/archives/2022/page/3/index.html","ff56109f9a30413e3c183f0e4f059a27"],["/archives/2022/page/4/index.html","703fa031f3ab7ea2f52d277670ff54a6"],["/archives/index.html","1f432449a4c9f078ade697cecd8cd7eb"],["/archives/page/2/index.html","02c491f14f278e97b3dfbaf0832493d2"],["/archives/page/3/index.html","fb604bbd8e3044aaf2447a32700166dd"],["/archives/page/4/index.html","76568893fd9ac7c5bfc001a9fa720dec"],["/categories/Linux/index.html","54786174b50ad58b31b41872d7a2dfea"],["/categories/Linux/vim/index.html","6718e8ba8c06415567affb559197406d"],["/categories/index.html","156812733c42c380fd9a03db482915e6"],["/categories/学习笔记/C-C/index.html","143c4a27d4e510245adb60a3fa0e9cf0"],["/categories/学习笔记/Java/Api/index.html","5a68182285058fb243bb2d691c323e65"],["/categories/学习笔记/Java/index.html","5b7f8874d998e7c18799d853c6131acc"],["/categories/学习笔记/Java/page/2/index.html","f518cb739b8eea37233b733ad5b20b50"],["/categories/学习笔记/Python/index.html","eaff5c6b7cfbbf0a3412cbf597d47ed8"],["/categories/学习笔记/index.html","78c2e272249abf9ec14589aca3d112ba"],["/categories/学习笔记/page/2/index.html","4669141f4d1ee23279eddef9fae91f23"],["/categories/学习笔记/page/3/index.html","37b4cf7faba7c94ef899203c1e8692a0"],["/categories/学习笔记/单片机/index.html","d972ee29211599abd58f4844555bd3a2"],["/categories/学习笔记/安卓/index.html","b38490312994698844b3234d6c0f168f"],["/categories/学习笔记/数据库/index.html","17e748425cd76212d58060657fa6db02"],["/categories/安卓/index.html","9d493e44769603b430daf3ebfab69a9f"],["/categories/安卓/新大陆/index.html","f83cfb1b2d83d37d6606f035cf4dbe37"],["/categories/算法/index.html","8187d6c19b75b82a707a30b158cec410"],["/comment/index.html","b16c9fcf575ef0920d6669357b6a249e"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","66ac67281ba132974e9a2d390c8501d6"],["/gallery/index.html","6c0044b56821e560707654ab7c304a7d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","d689c10a54a5a3ae65db80b4eac29ece"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","c3b8b08234fc275ace2c51cc5845e182"],["/page/3/index.html","3a1f9039f888b6061302e0a361222719"],["/page/4/index.html","ca1e57831c5ccf92918e857cd41e9056"],["/sw-register.js","995267c99e83636c45a3842219c205ee"],["/tags/Bundle/index.html","e04e4a6b856c98c36f311aa3d731686c"],["/tags/C-C/index.html","5d2bb1322a41bfa36a46dcfdeaf9c60e"],["/tags/C51单片机/index.html","a1d45195ae4825caae9b49019fcdf39b"],["/tags/Intent/index.html","46123e99c3959ee5563f01185fe8eda7"],["/tags/Java/index.html","a67188e023d984e4511d0e6fe0bba8a5"],["/tags/Java/page/2/index.html","693f402aea2e2b9d2f1da12cab325a0b"],["/tags/MySQL/index.html","de1db6fce2c11e8acafda3ce065ca06e"],["/tags/String/index.html","c40aa3f446f0e34b42713fc40a85608e"],["/tags/Thread/index.html","2a6a481d122e8fa2b38d99d8c2a061ea"],["/tags/api/index.html","4b50df320463d26a3afc153eca95f366"],["/tags/gcc/index.html","89c41d60d6b143bfb94a7f6a4e86bf07"],["/tags/index.html","14eb884509ef098d6fe6b67717c2cda1"],["/tags/python/index.html","52609a5e0118995a3dbdc5ac398fe3b4"],["/tags/vim/index.html","f86e54b2366033d9b751b96cdfb7e12d"],["/tags/云平台/index.html","1dae34c13ac6758c98fd4041078816df"],["/tags/冒泡排序/index.html","9f82a18df78fba0478d8f91ffd6d04d3"],["/tags/安卓/index.html","e5d7d526ce04c3c4f5ec4db05d7c651d"],["/tags/定时器/index.html","5f4e27b93800dacff8689eb5ec8040e5"],["/tags/斐波那契数列/index.html","3d23457db0c64a569a83982ab8fd21ca"],["/tags/新大陆/index.html","74672cd69c5c7fd0d46eccd81f02570c"],["/tags/选择排序/index.html","4be9107fa0414969c3e9030fdc0a62bb"],["/tags/面向对象/index.html","241ef31ebb5d243f5febdfa964caa7ed"],["/tags/面向对象编程/index.html","bb3a77db2a9aea29f8d4b498ce6ca927"]];
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
