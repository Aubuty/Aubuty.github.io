/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","17a6304a884bfa967331bd286c23985a"],["/2022/05/31/Android新大陆云平台API使用/index.html","6171da30ba2244b195fb8802336b3b6e"],["/2022/05/31/Android页面跳转/index.html","76a4ca0c2c56b0a91f441484f512dfc8"],["/2022/05/31/Java内部类详解/index.html","abd57c0ef608a31b257b5c0c8d1d797d"],["/2022/05/31/Java多线程/index.html","7c66f1e047fd194d47addf4f43546196"],["/2022/05/31/Linux-vim的使用/index.html","ba24f49c71daa42a8248b4b7d5261030"],["/2022/05/31/MySQL基础/index.html","9dbf6e39601b4cbe2fcb31125137103c"],["/2022/05/31/String/index.html","7308549026db16dd89099afb44ed8d14"],["/2022/05/31/final关键字/index.html","55139612997dd35ce62e6024afb9c4d1"],["/2022/05/31/static关键字/index.html","ba00de42aa5d6d29a67ef9a56309eacd"],["/2022/05/31/this关键字/index.html","40961904334436b058a4941358b959df"],["/2022/05/31/冒泡排序/index.html","c530ea8e74b47930a039cb682b9b1430"],["/2022/05/31/引用类型使用小结/index.html","11cef0d9fc996648a3789e2a510435a5"],["/2022/05/31/抽象类/index.html","77f405aee493c6bf626aa0f7cbe3ce43"],["/2022/05/31/接口/index.html","82b42f0e0a2a43c838f0b18098feaa5f"],["/2022/05/31/斐波那契数列/index.html","05bd2359e70de5b7a765c15017222f14"],["/2022/05/31/类的五大成分/index.html","c164094d7d8f7759ab8e6fad4a2b9dea"],["/2022/05/31/选择排序/index.html","0d29a03be5ddee9d2b9ab2d1d37cebea"],["/2022/05/31/面向对象的三大特征/index.html","b1254bd9f37d6b5789e8de75eb0334c4"],["/2022/06/01/01.初识Python/index.html","c83e41c42058313a7922ca4c0dee5242"],["/2022/06/01/02.语言元素/index.html","6242e317f234137c6a9b0ab2fc02c2ef"],["/2022/06/01/03.分支结构/index.html","6dc525341ebaef7472a8c510ecd124f6"],["/2022/06/01/04.循环结构/index.html","b19b7b96e2ad502749d7822434d87680"],["/2022/06/01/05.构造程序逻辑/index.html","8cbf2baefae7ecec699d4287c527f36e"],["/2022/06/01/06.函数和模块的使用/index.html","0a0fd016a7b9a6c7c9839988793b9c38"],["/2022/06/01/07.字符串和常用数据结构/index.html","1d9e6e5ddc3b2aaf16eb5140394fd7f0"],["/2022/06/01/08.面向对象编程基础/index.html","ca25c23de329d9099102fe871237d839"],["/2022/06/01/09.面向对象进阶/index.html","cf55aa145745147a63cba0b6717655fb"],["/2022/06/01/C语言笔记/index.html","6ffb332df941673d441402d70441e2c6"],["/2022/06/07/安卓基础-布局/index.html","a2392aad1694ad5dbd7b7604b7f2c50c"],["/2022/06/28/C51单片机学习笔记一/index.html","464d1ca9bfbe53c122287c5da6bdc636"],["/2022/06/28/C51单片机学习笔记二/index.html","ec4500d03ee7fad0595e4ac9975185a1"],["/2022/06/29/C51单片机学习笔记三/index.html","9b00509a871f0231f3f90b1b80d8eae5"],["/about/index.html","2a000a8fa47687767e11ffe2f03a07e5"],["/archives/2022/05/index.html","a4e3d91f05958ed4e3b97ceee722cb34"],["/archives/2022/05/page/2/index.html","16c68fad3deb0442f681c9296519e3f3"],["/archives/2022/06/index.html","7603c8dae1263fbe025ee6bfde855741"],["/archives/2022/06/page/2/index.html","30d2526f9e8e2e3f2fd2c08b27c66baa"],["/archives/2022/index.html","42e78e691930d7c2c631a2d04bc1d5ea"],["/archives/2022/page/2/index.html","5c6bbc3b136d3b5a1e4aa32996f37aaa"],["/archives/2022/page/3/index.html","a316d9e68b6eaab0092a9e930a1a2cc5"],["/archives/2022/page/4/index.html","5227a875fa0a4b27a92a5519266f6c38"],["/archives/index.html","4e2fbcb6550a06885927c7d577539b0b"],["/archives/page/2/index.html","53957d5ab49b25ad89901837e37ab9d7"],["/archives/page/3/index.html","4017013359d191fd62403d3d8e508f3d"],["/archives/page/4/index.html","01e21c376882ca5cc1ca8297845f26b1"],["/categories/Linux/index.html","4ba2a80e1201bacf165b571be270d002"],["/categories/Linux/vim/index.html","e3c17576a77cadde678843e0851fc0cf"],["/categories/index.html","de7de21752dab4e46214a21f15f01161"],["/categories/学习笔记/C-C/index.html","1825cc7673167aeabf2b898fc498d2c6"],["/categories/学习笔记/Java/Api/index.html","b1752812093bdb5fde08bad5269364cf"],["/categories/学习笔记/Java/index.html","163a30dc1f592fe73b06d84172652669"],["/categories/学习笔记/Java/page/2/index.html","71cbba68b4cb6aef8e926f7ded9eff12"],["/categories/学习笔记/Python/index.html","b1a98edf55a9005ae63959cd29063e7d"],["/categories/学习笔记/index.html","d81ffbb9c6c88ec0d2ed3ff4452bc9ac"],["/categories/学习笔记/page/2/index.html","bedfd9c3a6cd6d613e1e72a6cd568b0c"],["/categories/学习笔记/page/3/index.html","784ea2e0b21b2ac351a75fad8ddd343e"],["/categories/学习笔记/单片机/index.html","853d959a13b2253b9fea46aa781f241a"],["/categories/学习笔记/安卓/index.html","8b70d9b1cccc174654ebda14f55415bc"],["/categories/学习笔记/数据库/index.html","d3b98e05a38aacd0c9607f9537097d96"],["/categories/安卓/index.html","61a67d0ba3f16142fd6602b8990ae792"],["/categories/安卓/新大陆/index.html","336de97f14ec3ccd530f1f39ef801c56"],["/categories/算法/index.html","f8ceb7998d561f9f0cdbab7a85db5d96"],["/comment/index.html","0febd86e36c111da0bd6525332c445a3"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","ba145c854799b039e224830ad43c7877"],["/gallery/index.html","d816a35b489e636336a8e6cd16a4e9c4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","0eb14673bd9533b934338af53c6aa79d"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","2012b4d7f6a4cfc86e988f93a82c9bc5"],["/page/3/index.html","c77bf923225a3f13ecb6391808378c8a"],["/page/4/index.html","efa576583d75ba7a6564b883c9ad57b6"],["/sw-register.js","7e82690002c981c02ea2d83f2cf8b8b9"],["/tags/Bundle/index.html","db8a716fae8c9a334b25c9e7dbd0f243"],["/tags/C-C/index.html","70183dae939584b7d0e5b60da1258414"],["/tags/C51单片机/index.html","a3fcba4f1c10573df58d9f38a12c3405"],["/tags/Intent/index.html","875c5afed0b2fc65ee552dcc351311f0"],["/tags/Java/index.html","d2130f6c683da95d14ddd4c8fd927efb"],["/tags/Java/page/2/index.html","bae28963534a4deab3662ec3b03af19a"],["/tags/MySQL/index.html","987b5561af0cab172c832e344e0132f4"],["/tags/String/index.html","3043222e9346eb6a66550a042242ced6"],["/tags/Thread/index.html","86a47a9276a0cf43b87c59fc4cc81f12"],["/tags/api/index.html","0c883a3f18824ffa64b9347b8180afca"],["/tags/gcc/index.html","7a3c93e5f587665e56a5fe4420339c8e"],["/tags/index.html","d9abb044b9c39e542b076188ccdbf2c1"],["/tags/python/index.html","e8d3db1e0e6cae31eac8600ba5e04252"],["/tags/vim/index.html","26ea782b87b557db248c1c6b8e38443d"],["/tags/云平台/index.html","d3f5261c2741addfb79534add66cd133"],["/tags/冒泡排序/index.html","40dbe2c35bcfc24f57687a771875c5c9"],["/tags/安卓/index.html","87a8caa4450982f2158faa72fa52c2ea"],["/tags/定时器/index.html","5a8e70f5d5e2e8e3972971427a6de556"],["/tags/斐波那契数列/index.html","780da16a079cc94e96608b76a7092805"],["/tags/新大陆/index.html","b49096b08fd5ecbf07390f96becceec0"],["/tags/选择排序/index.html","f067c8914eb581c40c652c0d67061639"],["/tags/面向对象/index.html","8de76ed2ea2aa4ceb15fdd8dd6224738"],["/tags/面向对象编程/index.html","5f13b63894f67ff27d2d7ed21f126004"]];
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
