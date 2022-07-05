/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","7ddc1c45044b96a744d8f87693eb2183"],["/2022/05/31/Android新大陆云平台API使用/index.html","e756d524defff1b2be19e6bb9d007f60"],["/2022/05/31/Android页面跳转/index.html","9e4a1da3a5acbe69d96c71f238dd49c4"],["/2022/05/31/Java内部类详解/index.html","12f03780e6edf1e17d4f9f6334424068"],["/2022/05/31/Java多线程/index.html","6c067369c5a22428f1d2d7f23603fc43"],["/2022/05/31/Linux-vim的使用/index.html","150ec0dc2c45fc638756d969d2701f8b"],["/2022/05/31/MySQL基础/index.html","153c72edfc099ef91fba569923e8b40a"],["/2022/05/31/String/index.html","6e1e66c7bf2c24146a70737be31c123e"],["/2022/05/31/final关键字/index.html","970031c8ead179ab98a4b5125626bc3f"],["/2022/05/31/static关键字/index.html","58bf7eda14f3dbe6d2c69a58e74dd0ff"],["/2022/05/31/this关键字/index.html","9a54c3585dfe2c62fb3e2f895eab9ca6"],["/2022/05/31/冒泡排序/index.html","9b849b0186b9cc45f7a8f8d880266500"],["/2022/05/31/引用类型使用小结/index.html","77fe33d2be5068753a111fd8adf729dc"],["/2022/05/31/抽象类/index.html","e7924428bf306862a8ca17f43a6931e0"],["/2022/05/31/接口/index.html","52bf9d26e64d883384654a7cbd1ac828"],["/2022/05/31/斐波那契数列/index.html","d7598dc51a8a2a9b0b74fdaf8e892489"],["/2022/05/31/类的五大成分/index.html","e94009137d76c9291f3dfa9f52963a53"],["/2022/05/31/选择排序/index.html","ae35614493b87fbead25019be3a78df4"],["/2022/05/31/面向对象的三大特征/index.html","c6257ddb3b6445150946f3d6496f6ed5"],["/2022/06/01/01.初识Python/index.html","1c96b852d7d32eba9c2a11210bb59151"],["/2022/06/01/02.语言元素/index.html","fb322d140650d58af8b651ca64864d87"],["/2022/06/01/03.分支结构/index.html","71bbf1fefbcdf2802280894ab36544d2"],["/2022/06/01/04.循环结构/index.html","7ecc46a2ebb9522bf0dfa0674589e292"],["/2022/06/01/05.构造程序逻辑/index.html","c63e0c9cd324da86fad088d03ed300d2"],["/2022/06/01/06.函数和模块的使用/index.html","1d916597512b383aa00b62c7e87b288c"],["/2022/06/01/07.字符串和常用数据结构/index.html","6bf1fcb335c4c2e4d787c2cc057e3c5b"],["/2022/06/01/08.面向对象编程基础/index.html","32f41987bf4a87b99d4a9be650f40859"],["/2022/06/01/09.面向对象进阶/index.html","88db7ef3403801564e397849b850907d"],["/2022/06/01/C语言笔记/index.html","a4aeaad46fac75f69cc1c223dcb2e3df"],["/2022/06/07/安卓基础-布局/index.html","b7038ad9af3cbd63ee9a4ef9c5de0318"],["/2022/06/28/C51单片机学习笔记一/index.html","c13572cd6b049c785086d3a5c3fa8cb5"],["/2022/06/28/C51单片机学习笔记二/index.html","2db8d6817dbaddf9139407d6a86b89e0"],["/2022/06/29/C51单片机学习笔记三/index.html","9c6b11a99c98a38e1ba74638b2cab08e"],["/2022/06/30/C51单片机学习笔记四/index.html","32c2b277de892a581522ca8f67bffa0e"],["/2022/07/02/C51单片机学习笔记五/index.html","7936e73d82c0a8ed3a6ed9bae1f76357"],["/2022/07/05/C51单片机学习笔记六/index.html","f619a998be9f6031497ae1dfb5430dce"],["/about/index.html","967e007bff75bd6f25d46dba236eb427"],["/archives/2022/05/index.html","1109db382d27c9759cc54402da0ec1ab"],["/archives/2022/05/page/2/index.html","ba28c88abd37d47cd804c4230c937953"],["/archives/2022/06/index.html","ba924c7079683aa31f3a7a65690817e4"],["/archives/2022/06/page/2/index.html","75713814044c0b46584709e81c5e26c9"],["/archives/2022/07/index.html","d77262128b44580db5dec225b8c27293"],["/archives/2022/index.html","bb3d56002f64d778349f8acc6ee14389"],["/archives/2022/page/2/index.html","6af3a174b7ae04566fe97845dc8906e2"],["/archives/2022/page/3/index.html","1f8e64a9991a8a2269408d4b7f54c056"],["/archives/2022/page/4/index.html","e14769c42135ecec291d5b2b2af94a63"],["/archives/index.html","486db3505251362d794268b68198aa1e"],["/archives/page/2/index.html","c17c9587a5c76b7846a9aff502fdd2f4"],["/archives/page/3/index.html","dc0d13463c222f96be97c139fab8a9c8"],["/archives/page/4/index.html","bcf4372e9912dac370b4dbd8c193c82d"],["/categories/Linux/index.html","4f92ebafbdee60637f4284137fc77ab4"],["/categories/Linux/vim/index.html","0030f5fd0fcc8a3f9754dffb21be5193"],["/categories/index.html","39db9f24744b80a7d412c2bac8feaac9"],["/categories/学习笔记/C-C/index.html","794384e17865f2eece129cd07cd87a79"],["/categories/学习笔记/Java/Api/index.html","226d3c6e6915d44b9867ffdfc4f05dc2"],["/categories/学习笔记/Java/index.html","3ee5eee80a9f5e29847311d2ae8ae4cc"],["/categories/学习笔记/Java/page/2/index.html","a29b88cec2e780624aa80016aeefa4c7"],["/categories/学习笔记/Python/index.html","f5ebcfb9cd61c150d0b3d0fa20badaa5"],["/categories/学习笔记/index.html","034f7db3485115d28ea7bc673f898da5"],["/categories/学习笔记/page/2/index.html","c6e0060179dc505279d39f4e2e92e111"],["/categories/学习笔记/page/3/index.html","842555d7b0092bf0ebff9751b62b499d"],["/categories/学习笔记/单片机/index.html","c994be3c8e073d654cf07272dcb43b2b"],["/categories/学习笔记/安卓/index.html","c61d458c7b8bb6e355dad22b8b84ad12"],["/categories/学习笔记/数据库/index.html","83f84191e2bfbaaeafacd79df2b36869"],["/categories/安卓/index.html","e043f35a23bc567dd5686c5d130da95e"],["/categories/安卓/新大陆/index.html","fabc7c3e72efe38f818328e8dbb1f65a"],["/categories/算法/index.html","4d81993c990f205715dcfe195425a090"],["/comment/index.html","b16caadf918ddefc3ecf075b0858bb13"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","d7f31759bc9e0c04557d3d4a50c8d918"],["/gallery/index.html","47475ff27454a23e2516a31678e63440"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","0074932ddd7b691c4e3211280e6bb29b"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","40c91ccb3f0e3f9fa21f83dcab37ba5b"],["/page/3/index.html","8e4f8441e20f0db497aa3ed769e97bfa"],["/page/4/index.html","419843c095a99c635c27dc1ba27140cb"],["/sw-register.js","279a1a9964db1b659a9b19a0330496e0"],["/tags/Bundle/index.html","32abfb2782cf439b47b87eb8b2524379"],["/tags/C-C/index.html","34bace7ff54513e8263a16dd2a1f4145"],["/tags/C51单片机/index.html","78ddc5625c8d34fb018685d4730e2bf7"],["/tags/Intent/index.html","6a00d83fa56896f3753bae4a60bd808b"],["/tags/Java/index.html","70d9ba7751037b09809a30efe46b4262"],["/tags/Java/page/2/index.html","fc156041f66bd52a4de8044a01235bf8"],["/tags/LCD1602/index.html","6b2ba6fee5e5235d3df52db57aa40fc2"],["/tags/MySQL/index.html","03b5ca2c28e6bca121ccccf5d8770a6c"],["/tags/PWM/index.html","df4aba7c2dd0cbedbd8ce2367b5b2dbb"],["/tags/String/index.html","212ecb4ca940dddcf34bdda601164cb4"],["/tags/Thread/index.html","b2289deffeb7c67a0418d3ee9421b3ae"],["/tags/api/index.html","51012ddb8d2cae1d4a1a139cf18924e7"],["/tags/gcc/index.html","662bb79a4a2a387dee14e76fe5d17101"],["/tags/index.html","2e2cf740004d90a6e9018815bc2e56ab"],["/tags/python/index.html","51869a1b351caab01aeab40bb0781631"],["/tags/vim/index.html","bcccab1469fa6b8bcbdb1962b8d85c7e"],["/tags/wifi/index.html","5110acb54fff614a2ca8fcede5dfdbf9"],["/tags/串口/index.html","4ff0af3e563dbf6d86cefe1476b57792"],["/tags/云平台/index.html","34ac23909bba4d3890266a4ae3566edd"],["/tags/冒泡排序/index.html","9d41414f03012be5bb9a76a39e354aa3"],["/tags/单片机/index.html","6f2a3d1509c71c14500c311724a8841e"],["/tags/安卓/index.html","b558fbad8190fa4b6df4b1449d694f6a"],["/tags/定时器/index.html","58f8870811a1e49544d6eb1ae6e7e3f5"],["/tags/斐波那契数列/index.html","7a78ecd823ea834fc7ab15effd64c0c7"],["/tags/新大陆/index.html","607d0c3a4321d2671b5850dc1e71c2ad"],["/tags/蓝牙/index.html","0f5ed05307e17d9a3f6734c707109851"],["/tags/选择排序/index.html","98968914f4f89af9cb7719d8c2b34251"],["/tags/面向对象/index.html","80ecbb26254a6f861333ab05bb1b9646"],["/tags/面向对象编程/index.html","871c0c6a49b22c3704dad377d8d5a025"]];
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
