/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","d1a126117665e766016e6d113650e2ea"],["/2022/05/31/Android新大陆云平台API使用/index.html","e500261a098eabcb54cdea4bbd933d6f"],["/2022/05/31/Android页面跳转/index.html","4df4152c84676475e50ff453fa72ce0d"],["/2022/05/31/Java内部类详解/index.html","518a155186c2812eb573840a3322b338"],["/2022/05/31/Java多线程/index.html","59e2b5f48b89749626af74c033910691"],["/2022/05/31/Linux-vim的使用/index.html","cfd49858298209017ab64da7ded90610"],["/2022/05/31/MySQL基础/index.html","3afb26cb31ed1e4b59899801e2650c96"],["/2022/05/31/String/index.html","4d258bca0657e5fbda9d1c7359aa1d22"],["/2022/05/31/final关键字/index.html","2685a354ef0e65fb222f990321be2670"],["/2022/05/31/static关键字/index.html","3d563def02ac4855047509992a41939d"],["/2022/05/31/this关键字/index.html","ee91bc9462cbf9cc50e99d2650040baa"],["/2022/05/31/冒泡排序/index.html","b7e386a407a784721203249d24ff5e9f"],["/2022/05/31/引用类型使用小结/index.html","d5d59d420cc93dff73f88742fd5fbfcb"],["/2022/05/31/抽象类/index.html","5ef1324bd02b1eab11cce8c85210e3fb"],["/2022/05/31/接口/index.html","adf27c63616fbfebd629514c33c13484"],["/2022/05/31/斐波那契数列/index.html","cab50b4b010fb829edd2e928706492f0"],["/2022/05/31/类的五大成分/index.html","57ea8f64d688fd7f7ab844ccf8db975e"],["/2022/05/31/选择排序/index.html","3248da1122cc277239b51bc2e71611b9"],["/2022/05/31/面向对象的三大特征/index.html","89b21aeaa19d66021b9dd567e56046da"],["/2022/06/01/01.初识Python/index.html","1e22f27ba5f367a94b34778c071b98e3"],["/2022/06/01/02.语言元素/index.html","86c0696cf647cc65ed4d9ba627fc869f"],["/2022/06/01/03.分支结构/index.html","b897c06ec3e54fa45f4ccaa40e5d591e"],["/2022/06/01/04.循环结构/index.html","cb734886d04c589eedede7c3353c2c65"],["/2022/06/01/05.构造程序逻辑/index.html","f11dc31ca143d4d1d5ef7f9c47cf4327"],["/2022/06/01/06.函数和模块的使用/index.html","539cb0aa9aee61ea55664b599a5268ac"],["/2022/06/01/07.字符串和常用数据结构/index.html","f725c6bea15a3c1d279f1cbdcf399be4"],["/2022/06/01/08.面向对象编程基础/index.html","b3917998f288e60e4d542a30f13690ad"],["/2022/06/01/09.面向对象进阶/index.html","7891aeaeb74d9991c0eb1c4d3a8e9584"],["/2022/06/01/C语言笔记/index.html","182fe66b28e57aad35973dea02b5ca06"],["/2022/06/07/安卓基础-布局/index.html","e937b3f408412e8677e7964a921b029b"],["/2022/06/28/C51单片机学习笔记一/index.html","a434a7540ace1d284f41f1875a6ff701"],["/2022/06/28/C51单片机学习笔记二/index.html","241181106dca36b7a310243b47b0d45d"],["/2022/06/29/C51单片机学习笔记三/index.html","777ec82f52031122426066af9e9ef086"],["/about/index.html","af8e43f77abf9eae2a2ee40ec48a1753"],["/archives/2022/05/index.html","41668a3e934051ecb63c76b96be28452"],["/archives/2022/05/page/2/index.html","dee0a50d2e8f525a4410dfd72c398d0a"],["/archives/2022/06/index.html","5f8a29d8c325e25373568694f547b2e7"],["/archives/2022/06/page/2/index.html","514d586b0285d1a533e3b993ff2a1516"],["/archives/2022/index.html","4e00f961ba5c2de8965269c896413f67"],["/archives/2022/page/2/index.html","ea7ece4c33c4aa43151df0400ec4f7d2"],["/archives/2022/page/3/index.html","1ec8a31758aec5a523c24d591e73fc52"],["/archives/2022/page/4/index.html","1bd374cc6bf13fbda669b734848cb7a2"],["/archives/index.html","c3b505577248dd17ce4949ca035b02c4"],["/archives/page/2/index.html","002c133ab9b7e0c7ea577f672421a848"],["/archives/page/3/index.html","e2512f2f81da23a3738d64887b725def"],["/archives/page/4/index.html","88e1455979344e5beaccd18c69c34d3a"],["/categories/Linux/index.html","e358a96f90dd0cdab93e66e109ddd59c"],["/categories/Linux/vim/index.html","760bce28469702a2c5e7f5fe776562aa"],["/categories/index.html","2b9eb99047f2c40ba1f76d998631ed2c"],["/categories/学习笔记/C-C/index.html","875ad172f330ad8c8e9edda1e1b24a37"],["/categories/学习笔记/Java/Api/index.html","088d4c0a2bc02316efef4cb21ca9963a"],["/categories/学习笔记/Java/index.html","2a9ee6e86c9e1cc4f140ab3d714fdaf7"],["/categories/学习笔记/Java/page/2/index.html","21c5de6a67f15e548b5b7a9b5c57440c"],["/categories/学习笔记/Python/index.html","351433554ad3510bd28a2fd6678ac63a"],["/categories/学习笔记/index.html","397bb0ab97dbc940c0d2547a3ad27fce"],["/categories/学习笔记/page/2/index.html","ec2d907e014deeca21ad3d7645a63fa4"],["/categories/学习笔记/page/3/index.html","5b94fa9dad6c3e62af11289d13261cac"],["/categories/学习笔记/单片机/index.html","5c51448bb3a8841cc2af3858b1bf7150"],["/categories/学习笔记/安卓/index.html","d665841528f6910764910a1c23bd116a"],["/categories/学习笔记/数据库/index.html","97121473e9019388f8ce1674e3a6c9d0"],["/categories/安卓/index.html","091a52edf0942d62ec2a571deb829e94"],["/categories/安卓/新大陆/index.html","a470371f0d46e83b7383bb8f9f1b44ae"],["/categories/算法/index.html","72d9e1aca4bcfa649e89e39c0f491dae"],["/comment/index.html","a65093a64eab8e283ed4594a91d40a90"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","2c95d95e3a16ede797bcc3b6458b43d5"],["/gallery/index.html","5739fd07d321b5bd2b4aa766773f98fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","6f62b1b39e56d88e12eaec44f5edc964"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","4df8894c705d530bd64e2e25a97d0deb"],["/page/3/index.html","4bc21426506732f9e40ae057743f753b"],["/page/4/index.html","1624eca370208f92f1aad6f65819d7c0"],["/sw-register.js","b6819990d806c43907b0eece6f48c27d"],["/tags/Bundle/index.html","42df27b4cf284af53b89fbaf60667ed7"],["/tags/C-C/index.html","2f6023450e884777195cde8f3c0d88d3"],["/tags/C51单片机/index.html","0b1f3f4ac759268248271f677d989d30"],["/tags/Intent/index.html","eb2f9a059036381ef167e29ac786c229"],["/tags/Java/index.html","608c24e898d4084677aa4a51b26a593d"],["/tags/Java/page/2/index.html","ebe5cb16e84f820f28063b4146f6b279"],["/tags/MySQL/index.html","f26a849fe60237efa9645d3e85bed17d"],["/tags/PWM/index.html","1155c81a873d832ca075261f38f994d9"],["/tags/String/index.html","3726c1b3aadd38a534133d36ad137cc2"],["/tags/Thread/index.html","c051a81e91ada4422da7fe659922b8c2"],["/tags/api/index.html","e62a5829813852f71aa146eb61c48575"],["/tags/gcc/index.html","22f056b47c069246eea4ff79f19d4589"],["/tags/index.html","0cb97cfa59a2fb6107fe862313f0729f"],["/tags/python/index.html","4cebf28c433c57146c2c33f03845dd8f"],["/tags/vim/index.html","34b73fe8ed8a3f04328fb437eca7a1c8"],["/tags/云平台/index.html","f7f9d60581b8f37cb33bf15cd164792d"],["/tags/冒泡排序/index.html","4ea4ab7c9f02faa596325d9162e061da"],["/tags/单片机/index.html","fa2324c6cb18700f3cab531a357b76c7"],["/tags/安卓/index.html","3b960c4bd2e9eeadca2ae8950317acae"],["/tags/定时器/index.html","695fc1d44a22a28c19c3c558ded07d91"],["/tags/斐波那契数列/index.html","65ccdbef560ff4bb2061df0a6b164ad4"],["/tags/新大陆/index.html","c184717e8836baace9827e5e228869ce"],["/tags/选择排序/index.html","1e93ef255a2fac8e2b474d9558692d13"],["/tags/面向对象/index.html","a4fb0ecc5efe9dcea32b805206f220aa"],["/tags/面向对象编程/index.html","c05fc0c0d31b7eb4d07283103827b56a"]];
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
