/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","4e2c050f7e0d00df3216b94f141feeb5"],["/2022/05/31/Android新大陆云平台API使用/index.html","5e5c70f8e9ce444529ed6fc9305c8500"],["/2022/05/31/Android页面跳转/index.html","96ed59a8fd216fdceb234238fa95323a"],["/2022/05/31/Java内部类详解/index.html","f313447b411588edbd0bf743b00844d9"],["/2022/05/31/Java多线程/index.html","2361a8c216b524fb9254bc50b5870054"],["/2022/05/31/Linux-vim的使用/index.html","9cf3a6e6986d844f88b524c704c741fc"],["/2022/05/31/MySQL基础/index.html","f4dd7682145fc4d9e5a6392da0c2c6d1"],["/2022/05/31/String/index.html","e9f4e7adf281cbcb1002016061abd95e"],["/2022/05/31/final关键字/index.html","f18c23e437e33d07614e1b79f76e474b"],["/2022/05/31/static关键字/index.html","5ec7eb9be5aa11af2ff712b9fa1ec0bd"],["/2022/05/31/this关键字/index.html","4a87601f2d17d458d88e846731f5a3c3"],["/2022/05/31/冒泡排序/index.html","4d548eaeba2b2556fe7afee29fe992f6"],["/2022/05/31/引用类型使用小结/index.html","4bcccb98a430802739acda7e82293963"],["/2022/05/31/抽象类/index.html","5fb1ae1c2c157980c4eadf8706d9ba20"],["/2022/05/31/接口/index.html","88d5a9efe7d47a79d698dd3b507e3e40"],["/2022/05/31/斐波那契数列/index.html","6649502ba23c48999492640818dc861a"],["/2022/05/31/类的五大成分/index.html","cb51d677b1d30398370b75593812193a"],["/2022/05/31/选择排序/index.html","6c1c859d8d64001173c79c6b23061107"],["/2022/05/31/面向对象的三大特征/index.html","ccebb13b8a1776b0d825a07690524b37"],["/2022/06/01/01.初识Python/index.html","5d8d2b4ffa140f7dfc6519f31bd1334f"],["/2022/06/01/02.语言元素/index.html","14e691fbbbde34e65f565808495e9f27"],["/2022/06/01/03.分支结构/index.html","4c70c7b0d742a9306a80dbb2336aab0f"],["/2022/06/01/04.循环结构/index.html","b57b014027b19a20b14d0b3b5379a92a"],["/2022/06/01/05.构造程序逻辑/index.html","a9047bd18ff9421a76637da5fdb5a21f"],["/2022/06/01/06.函数和模块的使用/index.html","5c7e96f61d1f196708214775d3f049e0"],["/2022/06/01/07.字符串和常用数据结构/index.html","b62a913005f3efdac9a81c68c9789ce6"],["/2022/06/01/08.面向对象编程基础/index.html","289f0696421b07877c76d6d4b4414593"],["/2022/06/01/09.面向对象进阶/index.html","13b6ffd051637c9351abcfb8f6f9c070"],["/2022/06/01/C语言笔记/index.html","1ac858bba5836a03dcfb49dc6017192e"],["/2022/06/07/安卓基础-布局/index.html","5e1ad02531fae2f56b5f2ef924f281f6"],["/about/index.html","e709043c590da10dc301ba6a502b70da"],["/archives/2022/05/index.html","e933a70b253f5cbbf5fc576b0748a77e"],["/archives/2022/05/page/2/index.html","869528c315eb1d630b39024d6b1e584f"],["/archives/2022/06/index.html","83bef76033134dbf663638d5402a2472"],["/archives/2022/06/page/2/index.html","467fd318ee8091a37cbb137580bcb59c"],["/archives/2022/index.html","3c4ca3aec674f3dcce76d69de2f081bd"],["/archives/2022/page/2/index.html","f08c547c80fc9a101b21d08f0e5067c7"],["/archives/2022/page/3/index.html","ba6960e05ecffdcf0a941bd308c22341"],["/archives/index.html","9a78984d6811fc91267c57e09be135b1"],["/archives/page/2/index.html","63a70e5bc0a8d35f0b05baf4963136e0"],["/archives/page/3/index.html","8434e95761e9309dfc46f1a3d8d46914"],["/categories/Linux/index.html","8bc634ead8385702eda2f56a68c34e8d"],["/categories/Linux/vim/index.html","4b7c8f9be0dd0d8743e1edb0608f3c48"],["/categories/index.html","3eb223ef81458e830189d46815f87d70"],["/categories/学习笔记/C-C/index.html","ad6fa7646326e457f1bca85f661f6aae"],["/categories/学习笔记/Java/Api/index.html","9012bb1aed4ad02575b5e12c4d47e063"],["/categories/学习笔记/Java/index.html","cde54a47f460385e06b385a109c1b726"],["/categories/学习笔记/Java/page/2/index.html","9262ac14178521fe84b8d949aae358a7"],["/categories/学习笔记/Python/index.html","7cebce0b34408cb395e4ebcd80a75e78"],["/categories/学习笔记/index.html","eb451fa5ca4b96aa8d40e86142b2b384"],["/categories/学习笔记/page/2/index.html","89684cdaa58b4deae0683147f8d68e98"],["/categories/学习笔记/page/3/index.html","112932f2b621f939a5c26c982d773cb0"],["/categories/学习笔记/安卓/index.html","a2182f6c296ab5d1af91e85f042d54b4"],["/categories/学习笔记/数据库/index.html","9fca36b957803345ca88e3bc8d6609d2"],["/categories/安卓/index.html","e4d0face533cee78762787ef8ebbf132"],["/categories/安卓/新大陆/index.html","cf87f711ec18f92be8768bbc56889f2d"],["/categories/算法/index.html","15f744fd27028abb289fe8c20744b980"],["/comment/index.html","23d88a9135009b8a9255243da52f7bce"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","1db73f328372cd66ac3ec1c859c20f5f"],["/gallery/index.html","02f9a8529f167698ce85b3e6dec33e5c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","1887d1f141ed688b8e7d61e190448a00"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","1d7c7561754855dc497e365f218ed0c5"],["/page/3/index.html","4bd9800489654e5d84bb9b8d1e13e9f0"],["/sw-register.js","6662a2063d575fc85962d122f7ccc774"],["/tags/Bundle/index.html","2f75b52b70a3b2a01dba770272e8bd2f"],["/tags/C-C/index.html","9cd3e26515d82baf9c3c7c8f1b7e21d5"],["/tags/Intent/index.html","310dea26ca15f0e1c17fdfb95f30cc46"],["/tags/Java/index.html","ed9db88082128cc03aec464e8cd79d72"],["/tags/Java/page/2/index.html","4f774cef0783e7d6dced71224c9f8154"],["/tags/MySQL/index.html","bfea444f0852ff61f4484f7ec8696db2"],["/tags/String/index.html","c50d7e32058b17f3f972c70031137da7"],["/tags/Thread/index.html","ecd5faa65c69d1be9dbd1b6c38fe913b"],["/tags/api/index.html","c9f96200db91bf2a22d788b1256df130"],["/tags/gcc/index.html","a903fbfc659cbd8145446084e4e92de0"],["/tags/index.html","d97ef597158a8b389286156c0aae06e2"],["/tags/python/index.html","a0dec0b928ed075c750ee0e567cf652d"],["/tags/vim/index.html","9eb62a2df4aa294b8883227761c52b22"],["/tags/云平台/index.html","15ce06baf741e55f2cc8d7ff17488836"],["/tags/冒泡排序/index.html","e6bb66bedc7aa4b6232a6cd126c9b519"],["/tags/安卓/index.html","74553669350cdbb24ddcb39f0231580c"],["/tags/斐波那契数列/index.html","d9ace72f6cdda12febb8ae0a5ba7ba95"],["/tags/新大陆/index.html","d3d5d534c2e242b111de9c1625dbf798"],["/tags/选择排序/index.html","835c8e7e402252d1832267ccf27c2f7e"],["/tags/面向对象/index.html","2947b502440c6c772fa6f624d1f623f4"],["/tags/面向对象编程/index.html","97841af7fd8ed4f5e74a02638001355a"]];
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
