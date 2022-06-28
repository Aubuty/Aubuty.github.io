/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","7639d8abe59ccbe5d53451aedc0f82c9"],["/2022/05/31/Android新大陆云平台API使用/index.html","f1088f04b0baaed69f67ab4f0cc3c1e7"],["/2022/05/31/Android页面跳转/index.html","0e57fb64a5494546fd2c161d479ce178"],["/2022/05/31/Java内部类详解/index.html","9d5b3ff7ace445277cff11f01bb3573b"],["/2022/05/31/Java多线程/index.html","cd78f9e08d94f2be11fe04e90fdf1227"],["/2022/05/31/Linux-vim的使用/index.html","d75bceab72c85d9f3bcde4e958e4fed6"],["/2022/05/31/MySQL基础/index.html","ace154445a8c862f26b9da5162cd54bc"],["/2022/05/31/String/index.html","8dbf62120bca3c83a1bcae35d475775f"],["/2022/05/31/final关键字/index.html","6b4f79913abad2d111d8534923d0ce06"],["/2022/05/31/static关键字/index.html","72003218cb9d3863e4b5489405434726"],["/2022/05/31/this关键字/index.html","d3fa30725c557b71803f0a407038e18b"],["/2022/05/31/冒泡排序/index.html","16583c36485d32e2addbb1370b59b234"],["/2022/05/31/引用类型使用小结/index.html","285406fd00341be6b7e9dde74c320e91"],["/2022/05/31/抽象类/index.html","84120e1d69dca497099f39db76e3c659"],["/2022/05/31/接口/index.html","d7d47027d5d7e1ecb98439c20c24a04c"],["/2022/05/31/斐波那契数列/index.html","a17151f935f14cfca0ef4c22c00e12e3"],["/2022/05/31/类的五大成分/index.html","5ac01f8c3195628c1accdd9af5bfd6c3"],["/2022/05/31/选择排序/index.html","0a594934e62818705b578bbb4eecc5e9"],["/2022/05/31/面向对象的三大特征/index.html","65657beacbf304d7d0e657b40cb2379e"],["/2022/06/01/01.初识Python/index.html","8f478f87f4e4993436020252c3c969a1"],["/2022/06/01/02.语言元素/index.html","ddcaed544861292de280f2f7f34bd5f6"],["/2022/06/01/03.分支结构/index.html","95d0195bb043a1d834a616054756fe90"],["/2022/06/01/04.循环结构/index.html","74e3afc6ba9add576d5786200ba77a87"],["/2022/06/01/05.构造程序逻辑/index.html","1a1009f619e6d6dc634dfaec55585b52"],["/2022/06/01/06.函数和模块的使用/index.html","6f98f4709169d263fb3954b1a0c8631f"],["/2022/06/01/07.字符串和常用数据结构/index.html","d6a73aad258d982f9b30bc2db2f0f65b"],["/2022/06/01/08.面向对象编程基础/index.html","992a9fd83ced03bb055e8049dd06cb4e"],["/2022/06/01/09.面向对象进阶/index.html","7e34998bf8bcc15e8521d5b9da4f0adf"],["/2022/06/01/C语言笔记/index.html","5170c5ed977428ce4a4989ee89f23e95"],["/2022/06/07/安卓基础-布局/index.html","0d4003c64e356be4d8bcf170a1b714f3"],["/2022/06/28/C51单片机学习笔记一/index.html","4a09b5203cd54054d87bf4d43fe586de"],["/2022/06/28/C51单片机学习笔记二/index.html","c85883c1cb4e1b97b0802a041707a8bc"],["/about/index.html","25e38dbd183be12acd6cc7db99e7171c"],["/archives/2022/05/index.html","987004a3869a050d47afa1f92d63499b"],["/archives/2022/05/page/2/index.html","7ef1e3d94f79c077fba975042d803041"],["/archives/2022/06/index.html","ea1106261374e45237a30c19c57f855d"],["/archives/2022/06/page/2/index.html","2affd298be0353d562c7ff6d9a1e5107"],["/archives/2022/index.html","3451a04742abe95487f626f1ec9196e3"],["/archives/2022/page/2/index.html","52f40a2c8de6436bd7f60adbeabcf60b"],["/archives/2022/page/3/index.html","651e1d7bab81d60b5e7f9e401249b190"],["/archives/2022/page/4/index.html","8d3219057d23a7723517578fec3a5917"],["/archives/index.html","978836e51a6cc84a0035ca925c2a3d17"],["/archives/page/2/index.html","d93ca08e7d7a8f483d7adba08fe44694"],["/archives/page/3/index.html","90f871da61e76df0b61e2ac877876a0d"],["/archives/page/4/index.html","8a4a259cd5cf45febce790bdbe5b7466"],["/categories/Linux/index.html","d24afa7721cbf9f8242bb01d70185e61"],["/categories/Linux/vim/index.html","b8d2ad739be9f8d327caa3f030b3e8ea"],["/categories/index.html","c86188d4d533f6c1c473ca85b07bc2ee"],["/categories/学习笔记/C-C/index.html","69c888c6e0decabdf2077986fe21923e"],["/categories/学习笔记/Java/Api/index.html","2befbb2702efc8202ce4081c17017f8e"],["/categories/学习笔记/Java/index.html","3622d46809f512ff33737e47b204cf37"],["/categories/学习笔记/Java/page/2/index.html","96058d682453d012869c4e7b1cdb4276"],["/categories/学习笔记/Python/index.html","1560e8021a4be2af71ce676cbfefb584"],["/categories/学习笔记/index.html","9dcbb9f75d4ed2faeac7c49650aaaa81"],["/categories/学习笔记/page/2/index.html","301d0e986d2ae81c83603876b2c7f452"],["/categories/学习笔记/page/3/index.html","f5935b853dccd37806948496dfe215f7"],["/categories/学习笔记/单片机/index.html","e6605d21a189bd69a9a8e6927edcc669"],["/categories/学习笔记/安卓/index.html","e4fba22b6c6b9ce5ecd4b959c8e7498d"],["/categories/学习笔记/数据库/index.html","b4da8b642bc5e3709482a1151cda0fef"],["/categories/安卓/index.html","b4b135263620bdb57612dec1008ef21a"],["/categories/安卓/新大陆/index.html","31d29294682fdb822bfb3c4c5ecd3776"],["/categories/算法/index.html","2ec9b57fc684d12b61ad7ae98ffc4a70"],["/comment/index.html","6b5588cf70ecdee72ecb1e414219d69f"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","108993c158af4450a2dee0477a5eb895"],["/gallery/index.html","0ca577d06e0d30f6ab421eaa5c3b6fe7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","58ec1015f09b0ddc05ac4864e1ce3429"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","ce737a99f294ac568207878bb2adb514"],["/page/3/index.html","e213f9240d8093f779d20bf4dd58c874"],["/page/4/index.html","30958e4101be3a25ece64b03f9335c4a"],["/sw-register.js","3051271e7243b40756d4ae40ed31b087"],["/tags/Bundle/index.html","d5df3f3152e84b89f184719dc9cad171"],["/tags/C-C/index.html","f2c14f96772c9b72c09f443798d8014a"],["/tags/C51单片机/index.html","134acd8ed69b5b5267ae1e3147e17610"],["/tags/Intent/index.html","9b08d80f1afa9d851c54979f7173c07a"],["/tags/Java/index.html","0c59c9ff1e035d699fb9daaec694e0cd"],["/tags/Java/page/2/index.html","d2d98df06635e6facffbaba243393d4d"],["/tags/MySQL/index.html","d38251c39ff9234ab6a3b0c47597589c"],["/tags/String/index.html","ef392fd087d94e3e66b2c2cc6ce0c334"],["/tags/Thread/index.html","6d52ec98904c3d0b634ffa03c9760ee5"],["/tags/api/index.html","ce9eab1dc260e3ed08846a6a752eeb7d"],["/tags/gcc/index.html","d5ef50c17b27b933255b21a8de5ff06c"],["/tags/index.html","62c7e6f7ef78e61522f05a1d1cbf7a4c"],["/tags/python/index.html","fd33bd641485d12e5a11bada4ec03f65"],["/tags/vim/index.html","399e4cd1b596644ab0bfd8413240d29c"],["/tags/云平台/index.html","5a5f10849fb48e586f046b751f86ddfb"],["/tags/冒泡排序/index.html","c4fab13ac5e48a78e66ec1fcc6144212"],["/tags/安卓/index.html","e2d60ef05a818cf4b73c59d38356aec6"],["/tags/定时器/index.html","8605787b7a4ebb6bc7249952b6a18267"],["/tags/斐波那契数列/index.html","5d0d3c96f4e4e37eafaa455f934077f8"],["/tags/新大陆/index.html","ba118033e288f490267837c261e1c461"],["/tags/选择排序/index.html","1f69bcb6b1c0ded520b806146250d4fe"],["/tags/面向对象/index.html","dd2b0a81df31a3aae04c31864c546282"],["/tags/面向对象编程/index.html","32153013bceb4d2525ba9f155845c6cd"]];
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
