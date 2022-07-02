/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","aae08fc5f2cf8148341626db59e828ef"],["/2022/05/31/Android新大陆云平台API使用/index.html","268def45ec8012da61557b8a95572623"],["/2022/05/31/Android页面跳转/index.html","1c2dc693d1e31ac6648e2fc1d797255c"],["/2022/05/31/Java内部类详解/index.html","99e06ef4bccb75fda3adaf6dcacafee1"],["/2022/05/31/Java多线程/index.html","7e2359d18e0afc9bc0fb4740cd53e528"],["/2022/05/31/Linux-vim的使用/index.html","03093e590d1e03e637fb56ed57d2ad2a"],["/2022/05/31/MySQL基础/index.html","b62d5560015402f3c1b05d96889a607d"],["/2022/05/31/String/index.html","cf12a78fd7ab6a097ed23bb5bf845b85"],["/2022/05/31/final关键字/index.html","7e58b5f2417197bcf97b3dfac5b7e5e8"],["/2022/05/31/static关键字/index.html","dc3911a913d14eef6a7740e9776912a5"],["/2022/05/31/this关键字/index.html","d35d612e3cc4cc29f128b715af4196c9"],["/2022/05/31/冒泡排序/index.html","588d9781f6864d11e0931a55b7602128"],["/2022/05/31/引用类型使用小结/index.html","4135ec00fa5de299695a61f31bf0c2c4"],["/2022/05/31/抽象类/index.html","6fcef888a376779743f7bd87146abb28"],["/2022/05/31/接口/index.html","56865b4268613125e1326a0fdf995d72"],["/2022/05/31/斐波那契数列/index.html","da5ea80918fc7acb62995f13ae0f29a0"],["/2022/05/31/类的五大成分/index.html","fffb981f1e7f7a20fcb056d72050e81d"],["/2022/05/31/选择排序/index.html","d5ab96bba12d38869ae584226904643d"],["/2022/05/31/面向对象的三大特征/index.html","b0b6b15b849b7c48d705d03232af95a6"],["/2022/06/01/01.初识Python/index.html","3abbbfe12821bbd3f0efdc94395749b2"],["/2022/06/01/02.语言元素/index.html","d08f5a4f02ce047753af03080981bb69"],["/2022/06/01/03.分支结构/index.html","2d5e19c0f68516d9bdc4cda78fff0295"],["/2022/06/01/04.循环结构/index.html","386f9f8b8742e570aab41fc86b6d44ab"],["/2022/06/01/05.构造程序逻辑/index.html","42ae5c765e0dbb0a612890df777bd7de"],["/2022/06/01/06.函数和模块的使用/index.html","c0597000794a14bd1079ddb8bca70c6d"],["/2022/06/01/07.字符串和常用数据结构/index.html","3fcdb55e4a51cb253f18b9a2ab108dff"],["/2022/06/01/08.面向对象编程基础/index.html","156201ba5b9145f62a1baf7e4832361a"],["/2022/06/01/09.面向对象进阶/index.html","04d0ed40d1ec53109e247e8ce9ccc57a"],["/2022/06/01/C语言笔记/index.html","7793151af0c3c360a125d06b2030b7ec"],["/2022/06/07/安卓基础-布局/index.html","bb9b1cebdf4e658a99adb5a1d14ec816"],["/2022/06/28/C51单片机学习笔记一/index.html","40f8e1706c129b6ae2c63fcefcad1f6d"],["/2022/06/28/C51单片机学习笔记二/index.html","3be755749873eef03e49d729dc76178f"],["/2022/06/29/C51单片机学习笔记三/index.html","3349200a37291d3ba68cb2219bf619b2"],["/2022/06/30/C51单片机学习笔记四/index.html","b6fbccc32e49cfd50910f76542d8ed8f"],["/about/index.html","9fb9137601ef44d2d1da8adce9a3ba1f"],["/archives/2022/05/index.html","bdc268a5858dc83ac0e07dac35d76013"],["/archives/2022/05/page/2/index.html","672c91c345494f114763d00413d6063f"],["/archives/2022/06/index.html","fc4de215e4440b61a930ede612cff9a6"],["/archives/2022/06/page/2/index.html","57b1565f355d7e5cf8addb3fa67d51e1"],["/archives/2022/index.html","eea032fcba2d000cd16c9aa2404db819"],["/archives/2022/page/2/index.html","c5abc5df64c73a583882d0e1a54c48e2"],["/archives/2022/page/3/index.html","dc0e2325e39abf3f00472b701a4869f0"],["/archives/2022/page/4/index.html","d1b7d9d5b61ff93b8247b3d071ba4af1"],["/archives/index.html","a07166a34d07fe7c23e57effefb1ff78"],["/archives/page/2/index.html","446f87ec00dd653ef3d0f2a40f22ab42"],["/archives/page/3/index.html","2c1d0e21f663fc3bd6a9b7f3bd764ef1"],["/archives/page/4/index.html","edb7f8bdc2f5b4fbb6c267c26a53b5b0"],["/categories/Linux/index.html","4bbd4dd68ff4061fca2b6160d7c704f5"],["/categories/Linux/vim/index.html","9efa1380c3d5aedd79fdc6d8d0cf431b"],["/categories/index.html","c29ae9bc46365ce212220e33b08cfd73"],["/categories/学习笔记/C-C/index.html","f4eb083c4c5f34e527ff8c2dd983ae25"],["/categories/学习笔记/Java/Api/index.html","6ed697dda5882f166da2b2cfa3ccec4f"],["/categories/学习笔记/Java/index.html","2c4bf0f1397e788c70cc26b1622074da"],["/categories/学习笔记/Java/page/2/index.html","5a02cb814a531f9d07818c0604de3a0c"],["/categories/学习笔记/Python/index.html","c05e4ea206e009ed2c664fb261ed1d8b"],["/categories/学习笔记/index.html","b9e87bf8ccd539e4c0a7bb2037db5ce8"],["/categories/学习笔记/page/2/index.html","1960441c4f6ec8ad740bba9d9798295a"],["/categories/学习笔记/page/3/index.html","26762564295a21489ac94955922e0221"],["/categories/学习笔记/单片机/index.html","85cc2d3e0e7110a714b852ed0c0caa2e"],["/categories/学习笔记/安卓/index.html","bc41d88426b8b36fa14054245d0a1085"],["/categories/学习笔记/数据库/index.html","9105c9bbbc012d0dfb0cfc02b1444d40"],["/categories/安卓/index.html","3202c136055b397fa8b9be3b3e47c480"],["/categories/安卓/新大陆/index.html","0354d8cfba5951a1ab0c55b43ae8549f"],["/categories/算法/index.html","e42b610821fdc8c50983a9f4f84d8bd5"],["/comment/index.html","349f751b482b027c8cd47e64364ae467"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","f9bf85c44bd4378061a8eb341f9fda05"],["/gallery/index.html","1bce1d344b31d6bf7e0c56d6f5f44c96"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","10f26a700eb2d06d9b775e87e66a5a80"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","d76f06b264e387a1ee733e5dcad4dfd8"],["/page/3/index.html","cb79c93107b2cf9ac0877e645f95eeeb"],["/page/4/index.html","3f4eec06d1d68ecbe8c7484acb3e858a"],["/sw-register.js","c29706084cbd28178f023b0796117489"],["/tags/Bundle/index.html","f07c2f38e6ea53558a83ef8b8de2589a"],["/tags/C-C/index.html","0a7c5498463d8f5736ae45a847e7d292"],["/tags/C51单片机/index.html","f6b70f025ae57d8e8d01a5a340caa3dd"],["/tags/Intent/index.html","b92d99e99d17112883017978dbf62da9"],["/tags/Java/index.html","c2f08c2bb95b7272b7803b96c5be24c2"],["/tags/Java/page/2/index.html","4ae4226f1f7821be47cde2787cb98fb0"],["/tags/MySQL/index.html","4f7ca7a1f028d29290dcc7a31e0e136e"],["/tags/PWM/index.html","7eb67071a04770eaf34867bdc98a6ef6"],["/tags/String/index.html","1726a037205f4927e8676821d6b70d61"],["/tags/Thread/index.html","0231831369b495d7b105b8ac56fbe128"],["/tags/api/index.html","47ae1b910a6b64a41495711ce15b2e35"],["/tags/gcc/index.html","2c6cf3a6d133a6659dae8ebb5a242cff"],["/tags/index.html","54768b90dad89e4d0deeafc50bacedaf"],["/tags/python/index.html","c12f33e6ab029c2edfa92df9ea27de03"],["/tags/vim/index.html","f86b8c879b9259c9b3f113935ce29414"],["/tags/串口/index.html","6d3e1c9b9aaee657c04deb560d052a50"],["/tags/云平台/index.html","0496c11e48f67aca76f78f9ac97356c5"],["/tags/冒泡排序/index.html","5c5055a3cc609ae23540d837bdf51f78"],["/tags/单片机/index.html","d37ef9c69b9981301b8ea17b1ddc8352"],["/tags/安卓/index.html","ecd06f4842360aa4d4cb9cb0b6f35940"],["/tags/定时器/index.html","15d28ed3db79b31101792dedbbde638e"],["/tags/斐波那契数列/index.html","16d38606d60eb21c51186172a9b46132"],["/tags/新大陆/index.html","939a7d8be2fc894df9d714d743f66947"],["/tags/选择排序/index.html","acca8b471106d69e24e8e624e36d5d50"],["/tags/面向对象/index.html","fc6fd498629b1ceb738175b6d76d5bc1"],["/tags/面向对象编程/index.html","ebbfebdbc2a836f730c9426b3792e893"]];
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
