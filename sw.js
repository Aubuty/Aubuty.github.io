/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","ee23b7951e759216b45f4caae7182f15"],["/2022/05/31/Android新大陆云平台API使用/index.html","3f22e8c6e5778c4b80503bce8a16f568"],["/2022/05/31/Android页面跳转/index.html","94fecfb914fed6e39ee912c01026907f"],["/2022/05/31/Java内部类详解/index.html","068a80bd249c3086d22565ed8cf3b304"],["/2022/05/31/Java多线程/index.html","cb3e35e766622dbc1bb784247c416cf0"],["/2022/05/31/Linux-vim的使用/index.html","ba5117d5808620b19ef10fd644015ea1"],["/2022/05/31/MySQL基础/index.html","3391d0b185d5b3ad1f28db49aad50864"],["/2022/05/31/String/index.html","3ad1a7bf0a05c3179a62f2ff97aac29e"],["/2022/05/31/final关键字/index.html","d6cdb848ba4b2f5e497ab241f40bb19f"],["/2022/05/31/static关键字/index.html","c0f1cf248246259af5f651b0c07d0724"],["/2022/05/31/this关键字/index.html","961643f4df9109465f6dbd97219ad392"],["/2022/05/31/冒泡排序/index.html","0fb70497adc33293e0715cfc657430c6"],["/2022/05/31/引用类型使用小结/index.html","8ded25a93e7f0e95012abad21c53bd61"],["/2022/05/31/抽象类/index.html","d735e5edc4f658682291127f57f84eb5"],["/2022/05/31/接口/index.html","ccdb5fe8b3f4a8c1347c49880d5280b0"],["/2022/05/31/斐波那契数列/index.html","4f09e20c43d3585ec7435726f724f798"],["/2022/05/31/类的五大成分/index.html","84e866366ddf44a3fefb03782cb55ff7"],["/2022/05/31/选择排序/index.html","a7e716a4ba70378d460d4321bb298025"],["/2022/05/31/面向对象的三大特征/index.html","671f1cd7acd439c3ebb8375cc269d759"],["/2022/06/01/01.初识Python/index.html","42745cc8dd207e6fa2117e075bcabecf"],["/2022/06/01/02.语言元素/index.html","6bc962a288207cbdd2b168ef92de2dce"],["/2022/06/01/03.分支结构/index.html","9875ce1e6f66475393b9409c72e13271"],["/2022/06/01/04.循环结构/index.html","743b507c91ca2bd80ab4bad70c969b4c"],["/2022/06/01/05.构造程序逻辑/index.html","eea52d411815fd662ca148df9cac7f4b"],["/2022/06/01/06.函数和模块的使用/index.html","99c4a958d8b90f151ac666498e12e217"],["/2022/06/01/07.字符串和常用数据结构/index.html","d4ea447d989f14c4d311bad5ad4088c4"],["/2022/06/01/08.面向对象编程基础/index.html","2fcb0aaf2f62989ce2856490e14f0f3f"],["/2022/06/01/09.面向对象进阶/index.html","f302c03de9708a23aef2ac319a2fd32d"],["/2022/06/01/C语言笔记/index.html","b88d801b3b208a62a30b54ebf1a1dc26"],["/2022/06/07/安卓基础-布局/index.html","cfc62e43b0d896c103c34bb4e4d04fd1"],["/2022/06/28/C51单片机学习笔记一/index.html","d0b45de27e36c4bdbed599a4ecfd5459"],["/2022/06/28/C51单片机学习笔记二/index.html","9c2a8eb58c5e2906bd9e6688e6cd7893"],["/2022/06/29/C51单片机学习笔记三/index.html","6e4483cda2bcb6f5dd35d370f444f7eb"],["/2022/06/30/C51单片机学习笔记四/index.html","604fb6bd9508f03dc6550c2f1417eb79"],["/2022/07/02/C51单片机学习笔记五/index.html","8a583f56325e2cc5c5019a119a5a1dc8"],["/about/index.html","fa11b27d8da720d93293cb7ff1f6661f"],["/archives/2022/05/index.html","168f0c365da8496adb49462ba818b9bf"],["/archives/2022/05/page/2/index.html","7f4b3318da2a5c16640b85b682a30006"],["/archives/2022/06/index.html","e83f37a62d36289f9e74a29889184080"],["/archives/2022/06/page/2/index.html","5e9120060de006d37b67caf49bf76725"],["/archives/2022/07/index.html","b344646c12c0a5e6f0538a700eff8dd9"],["/archives/2022/index.html","146e7d6b62efd2d708187cdfc22ff343"],["/archives/2022/page/2/index.html","d46e11750a6d3bf882c44b8f3c106def"],["/archives/2022/page/3/index.html","f7ea66b14d8f2c8ca9ee74395e1faef4"],["/archives/2022/page/4/index.html","90529e361f92ae41fc9732b87557aebe"],["/archives/index.html","336da90d4de62b20cf10efedebc3defc"],["/archives/page/2/index.html","560101d56902132c3e9352844435ca10"],["/archives/page/3/index.html","77c974858d5506bba0593482f480c600"],["/archives/page/4/index.html","d57d19489ca5f18221b11369afdca564"],["/categories/Linux/index.html","205dec6d1fdd3972d3a967195c103a2f"],["/categories/Linux/vim/index.html","38cd38bf087394f68c62c2f0af7020bf"],["/categories/index.html","3520253633fccdba134af0c3a04de789"],["/categories/学习笔记/C-C/index.html","384c4a326082018e1a81389bde576af9"],["/categories/学习笔记/Java/Api/index.html","4b5efc6e16c8bdab54b32c0f626130fc"],["/categories/学习笔记/Java/index.html","0dc97ecb1af4601a69aa2fa18e373e8f"],["/categories/学习笔记/Java/page/2/index.html","3004d83cccb25b7f7c2cab35dfeca136"],["/categories/学习笔记/Python/index.html","c5ef094654dbd5aab56b0f63b1c9243c"],["/categories/学习笔记/index.html","6c8b59b999346648f4b0ed0b4b89aff9"],["/categories/学习笔记/page/2/index.html","e5db7e7dcf770d316e75aa83aa72aec9"],["/categories/学习笔记/page/3/index.html","06892e528e9a3b4b03990e20fb8658c0"],["/categories/学习笔记/单片机/index.html","41a7f2c8dac9ec27031ac034099f1362"],["/categories/学习笔记/安卓/index.html","2ea6fda7768f9956ab2a473809d9014c"],["/categories/学习笔记/数据库/index.html","e3aa4d49eee5288bb1e9e459c5e98818"],["/categories/安卓/index.html","91c961f434c270ccb9c4259640b90340"],["/categories/安卓/新大陆/index.html","8ae39e34546e847f87caa301b7aef3ca"],["/categories/算法/index.html","ba3088fc7dd1912dd3dcb7187dfd483a"],["/comment/index.html","3d2cacd5ab7f43bc57e8b6f5bc170336"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","6ac2bab86cf43e41dcc9537d26dd5308"],["/gallery/index.html","d0a031428893c0bfc137dc257b56176f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","20f8e3f6762a70cf648d0db3f3890c92"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","63439524b9b32df6e7c190b648eb6c9e"],["/page/3/index.html","89c243d7b80a0ec142ef04c870f39f9d"],["/page/4/index.html","bbdf7bacb28f70fd029b5d5b2b5a1702"],["/sw-register.js","c7d18ed23943db6fbbd969bc3421e0f7"],["/tags/Bundle/index.html","959a09ccf6265dd845f981603c54ced6"],["/tags/C-C/index.html","1bae891e79e6f4eb7ffe900dccc6944c"],["/tags/C51单片机/index.html","60b550846c0c452e89f31855d69cbc4d"],["/tags/Intent/index.html","5680b095e206518fefd42b25360b8b2f"],["/tags/Java/index.html","0ad6dbae32a15da0127a33bbd726e297"],["/tags/Java/page/2/index.html","623e0e11e85ef3f9094c95d63bddd48d"],["/tags/MySQL/index.html","4e89f159fd1a22eb39554ca1ee1ea51d"],["/tags/PWM/index.html","1409db9a6f7274487b36e5a2542b76ff"],["/tags/String/index.html","8c3a420c613ad6d792caf84f5a4cb015"],["/tags/Thread/index.html","142ff1343619bc10200962955ef73432"],["/tags/api/index.html","810dced540b87654c6d6db4381dddbf3"],["/tags/gcc/index.html","698e77a201e07609544dd7ee58735d25"],["/tags/index.html","494eab8b91f7ed045f34e57793de02b7"],["/tags/python/index.html","b2da3fe11a5e27ec649bf37bf5a9abde"],["/tags/vim/index.html","faca646a6433324b8cd5cab7807b638b"],["/tags/wifi/index.html","f27f806d98fc2c38cfa0df66a3e94f4c"],["/tags/串口/index.html","3636953e2bca283d573c8d1e802e6771"],["/tags/云平台/index.html","671e378ed1ef186d5f689374ba0694ab"],["/tags/冒泡排序/index.html","eff805c89c7d2ba7511df5393ddd3f16"],["/tags/单片机/index.html","727bb6f794cb4c3f0edefb6b3f7161ab"],["/tags/安卓/index.html","1941f2e8a7b15eccf9314a80366c2fc0"],["/tags/定时器/index.html","b9a65ccd71dc7d38d07f7738030b0d6e"],["/tags/斐波那契数列/index.html","39ca1f24571c3c58922893f9f342a2f8"],["/tags/新大陆/index.html","625e9d01af8c6805744536f05d8f738e"],["/tags/蓝牙/index.html","209438e08e3cbdb529adbdf247af8cf8"],["/tags/选择排序/index.html","4f366561b1b8e97c4812bb81aaf62a9f"],["/tags/面向对象/index.html","f5fe0bbc6e90184469cd82267ae51b14"],["/tags/面向对象编程/index.html","338b8503be8a2ee01ed70321683c5e0e"]];
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
