/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","d37e4b3a394abf57152c7c494486666e"],["/2022/05/31/Android新大陆云平台API使用/index.html","32ef8fdb039a6b994e54f5ab59f5bd1f"],["/2022/05/31/Android页面跳转/index.html","f2b13586afb472b84096a2a4026a2bf1"],["/2022/05/31/Java内部类详解/index.html","ba1bb1f7c0423088c2e11cbca3db442a"],["/2022/05/31/Java多线程/index.html","d4d310203717c52575084e33d0d21b41"],["/2022/05/31/Linux-vim的使用/index.html","26a90feaad730161fc3b48d9081bc0a9"],["/2022/05/31/MySQL基础/index.html","3d594fa881463a3b3a18eb9c5fe87837"],["/2022/05/31/String/index.html","92c572641cdc55ee78393e6279d11c04"],["/2022/05/31/final关键字/index.html","d3ec1ceeab8730e3263567fce3290bd8"],["/2022/05/31/static关键字/index.html","05dcf3285f7749eafa3f43f53ed75d44"],["/2022/05/31/this关键字/index.html","be66673418c333ad2de8751c8c3c0225"],["/2022/05/31/冒泡排序/index.html","c6fd1879b64bfa5f2939893f798e0e3d"],["/2022/05/31/引用类型使用小结/index.html","aa2e6e1b97a2ecde1957bc236d7e296c"],["/2022/05/31/抽象类/index.html","462c5b1619995e51918045ccdaa052c5"],["/2022/05/31/接口/index.html","eecba0409d59cd1afc801b079e5d4582"],["/2022/05/31/斐波那契数列/index.html","879c12cedfd4cb5641f0e7d614cd923c"],["/2022/05/31/类的五大成分/index.html","88180a21699b509efd17ba31faec1ed2"],["/2022/05/31/选择排序/index.html","371b2ee84107676321ad5d6e9713a047"],["/2022/05/31/面向对象的三大特征/index.html","b1ce84d42670c04e30f9fdfd9997d2b9"],["/2022/06/01/01.初识Python/index.html","5f0053dd731a6ba159294f6c42e5aee8"],["/2022/06/01/02.语言元素/index.html","ecd9afe1a493edfb7427bd6cf6c55aa5"],["/2022/06/01/03.分支结构/index.html","8d82091630e5423e84d6ae02e4a5b6f7"],["/2022/06/01/04.循环结构/index.html","4e641d110334d8d6d2326989ed53af2a"],["/2022/06/01/05.构造程序逻辑/index.html","bb1f8c4956b4e2f96edd55fda46996af"],["/2022/06/01/06.函数和模块的使用/index.html","62e0976e7aba1e79d9d3445d3131b8d3"],["/2022/06/01/07.字符串和常用数据结构/index.html","4a51b9e1b67e547ff04bca27834fd69d"],["/2022/06/01/08.面向对象编程基础/index.html","32ef3daaa74ac83d9ee5e6b062a4c115"],["/2022/06/01/09.面向对象进阶/index.html","99326671223e9746d3426dafa3097e7f"],["/2022/06/01/C语言笔记/index.html","913ba85fb96360abe981d425ed26ee2d"],["/2022/06/07/安卓基础-布局/index.html","306de8abcb9ae930a7bea00eb1ab4bc1"],["/2022/06/28/C51单片机学习笔记一/index.html","c25fd98a1b9e0a24231200143511e60e"],["/2022/06/28/C51单片机学习笔记二/index.html","fe3236f1591a61277eaa14befef00011"],["/about/index.html","21dbcab8437a71468d45cc17a8771fb2"],["/archives/2022/05/index.html","2d103aef6b14e83f1d44a825b0743bf1"],["/archives/2022/05/page/2/index.html","353ebdbc41b6a659455fd3093f5e2731"],["/archives/2022/06/index.html","e6b8b60d0e7b524b6d332fa5664de7fa"],["/archives/2022/06/page/2/index.html","1e0b01fe2e8ece7da445d71d6e168b97"],["/archives/2022/index.html","0c9c1dd07182d95c5d5226df0ed0291f"],["/archives/2022/page/2/index.html","289156769d80dd5e33c5963c89d2f140"],["/archives/2022/page/3/index.html","42ad7bd454475309c00572b37f13a106"],["/archives/2022/page/4/index.html","1679c6115a537c508e3af5beac9639ce"],["/archives/index.html","35c5769c1f4d13005ef634e3c8e97ebc"],["/archives/page/2/index.html","ab586e2d27927842be3513c5b00b7fcc"],["/archives/page/3/index.html","bf72259908eaca06c151990b460e8283"],["/archives/page/4/index.html","d3e1d4cd50eb6eeac84221898b56faae"],["/categories/Linux/index.html","53d2af9cdd3f56f95a716ee93027ef9b"],["/categories/Linux/vim/index.html","7f58426974886222988927b3532c5e63"],["/categories/index.html","e7c37a7be9a00ecdba04f08302552692"],["/categories/学习笔记/C-C/index.html","f48734dcc5b0442f10f3e30ca9360590"],["/categories/学习笔记/Java/Api/index.html","c09071c685ee4831b24c1f8ff89f885b"],["/categories/学习笔记/Java/index.html","dadf57bd3976850a2e78dfb554482947"],["/categories/学习笔记/Java/page/2/index.html","2dcf245514a5450d282f6a2fe3bc5235"],["/categories/学习笔记/Python/index.html","8f8b20ed48cf5e3e959d34a68348bdc2"],["/categories/学习笔记/index.html","8ca6f12c8cdafd0aab1e3b7f8ad43e0e"],["/categories/学习笔记/page/2/index.html","a6c43d65e2109cea8d280ca47dcb289d"],["/categories/学习笔记/page/3/index.html","6ebc48b9adb634b0327abe13898a1102"],["/categories/学习笔记/单片机/index.html","0a8944bc2af4f55cd8c3578ba517edd1"],["/categories/学习笔记/安卓/index.html","22c2991f83292475c00c67774e68367e"],["/categories/学习笔记/数据库/index.html","28ae9f9fbde6f24ed1f9b02201de7ad1"],["/categories/安卓/index.html","8f821171047261eaf68af15d89777209"],["/categories/安卓/新大陆/index.html","123820ca44a0cb269d881790affff9f0"],["/categories/算法/index.html","7a74bc5ac6d345dfbfe92c3df4fc293f"],["/comment/index.html","ebc899f0b2a45bbd1e47c4c1b9ec78aa"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","60310054bf7de21c1da3bcfbc5f34501"],["/gallery/index.html","a41bca64247a80eebd5feb7daad6c359"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","9bc4c5094ccd691a955b1a8efc373c70"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","74e5b60ab2d4c8f9238bddb36a4aa438"],["/page/3/index.html","918a9e863ca938221d9bc00ccad47185"],["/page/4/index.html","10ec7bd348c401d87b2e9221eee04b79"],["/sw-register.js","5e3fcb2c7d28fea2036b0f057fdcaad1"],["/tags/Bundle/index.html","a0caf7d6ea62b3b4f75bd5e5bb9deb03"],["/tags/C-C/index.html","302bd4117276bf44a558771ad5a14518"],["/tags/C51单片机/index.html","cef7315ee849b1a068a811aec5fbc3f1"],["/tags/Intent/index.html","a71d8b55c241ce8efac00d84221f53ef"],["/tags/Java/index.html","cf8b9f665c583fda23e45b68453f7883"],["/tags/Java/page/2/index.html","4f41685f6cc5c741b029dbfc2f61e889"],["/tags/MySQL/index.html","de56023b85616b0bcbbc5a7007690b6f"],["/tags/String/index.html","5372a9af0d77b4c74dca729b6d1170e2"],["/tags/Thread/index.html","4ae5782a2a7309f49ecffb2d1a514831"],["/tags/api/index.html","d667387a57af03bf98e098aaf8c2ca37"],["/tags/gcc/index.html","057956222d52c2ad5058e502cad9fe18"],["/tags/index.html","9354ad4d44fecbb13eacec07cbb4809d"],["/tags/python/index.html","8645711e310e1f07a00d93c7a5196624"],["/tags/vim/index.html","2f0b9743020c78aef3dcc2aaebbaf86d"],["/tags/云平台/index.html","600c4ea111f5866629bda7bfcdca5ed3"],["/tags/冒泡排序/index.html","9190ffc03a50d3fe06a423f7403fcf05"],["/tags/安卓/index.html","e5e8edc0112623d910d16b9e7d082fd9"],["/tags/定时器/index.html","4890b29dc260b58978333b4fa293286b"],["/tags/斐波那契数列/index.html","cca0ec0ca9c3bb54b09092b21ce7dd16"],["/tags/新大陆/index.html","bed086a314ddcef82a73e51c5459a46c"],["/tags/选择排序/index.html","d679f64498194a6090fecfc11e714ef8"],["/tags/面向对象/index.html","cc2e9b8825ba8a773397f7a751b54e86"],["/tags/面向对象编程/index.html","1fc1be78e38df2daf053abb7c656bde8"]];
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
