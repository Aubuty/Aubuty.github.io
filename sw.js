/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","d6ddbe75f944d0b2458a90ec226ed0fd"],["/2022/05/31/Android新大陆云平台API使用/index.html","8634894276b92ccde5d50c42ff71e201"],["/2022/05/31/Android页面跳转/index.html","141d43b5fae98dc024e3348c7005cc37"],["/2022/05/31/Java内部类详解/index.html","fbd74a6345efb17544021ba9d1145f5b"],["/2022/05/31/Java多线程/index.html","bec2b7b3fc429ad6dcdfbb815e361a7f"],["/2022/05/31/Linux-vim的使用/index.html","230a13bc0ef21461584f4aefefda6b13"],["/2022/05/31/MySQL基础/index.html","7418a7d04c29a79d860ae39d1c2f92ee"],["/2022/05/31/String/index.html","d288376a21a78c5b885f8cb049baf149"],["/2022/05/31/final关键字/index.html","f5e1e5e51552fa6389cd653619e1a4ac"],["/2022/05/31/static关键字/index.html","495451e1d0be6399b3bcdb06bda7b61c"],["/2022/05/31/this关键字/index.html","f5f277721832772337816a871bf14539"],["/2022/05/31/冒泡排序/index.html","3e72b56623410ffcafc3dca6dfbb0a3d"],["/2022/05/31/引用类型使用小结/index.html","09439b7b2feaee32603ef90c563df253"],["/2022/05/31/抽象类/index.html","33a10fb99370bf06805717dbad3c9cb8"],["/2022/05/31/接口/index.html","c0dec2ffffb0ce0e8a04c73fefcc2a9b"],["/2022/05/31/斐波那契数列/index.html","eb933b2bbd20d7c0920cd5203ac80ad5"],["/2022/05/31/类的五大成分/index.html","c9cd2f8f3813e23c4472ab6b7e6a0cb9"],["/2022/05/31/选择排序/index.html","0486b57bc127a6a19e043000194a6fcb"],["/2022/05/31/面向对象的三大特征/index.html","a21533ca892ec3a2a5ff9213f6273aee"],["/2022/06/01/01.初识Python/index.html","be985b5bb1637e62049b6c5e0e0cadf6"],["/2022/06/01/02.语言元素/index.html","7cb4d65369bc09bc58f50cbd5f8518b2"],["/2022/06/01/03.分支结构/index.html","01d77643a8e4f11d5e09f3fb2b3ef255"],["/2022/06/01/04.循环结构/index.html","77bcb7f1157ff37ad7aaccaff3cc69f7"],["/2022/06/01/05.构造程序逻辑/index.html","31c10eef8133c9b067020e934b0882db"],["/2022/06/01/06.函数和模块的使用/index.html","575bdf7ca227995928b24f97d6d82a0f"],["/2022/06/01/07.字符串和常用数据结构/index.html","dd1b4115e0008fbfdc2fd2fcaf8067a3"],["/2022/06/01/08.面向对象编程基础/index.html","d9a305a42aaed8c8b3ce2817b6bac178"],["/2022/06/01/09.面向对象进阶/index.html","c8cd328129fcb4b4372e3c2b6fee2381"],["/2022/06/01/C语言笔记/index.html","41e0ac388f886cd01dd12fd3e262f849"],["/2022/06/07/安卓基础-布局/index.html","81839d7ac9ad411e1e4c00da7440f978"],["/2022/06/28/C51单片机学习笔记一/index.html","f0a3e335c1aa48c3f0902a8972d0425d"],["/2022/06/28/C51单片机学习笔记二/index.html","7af349bc46aa5dadb3c8838d35bc9a3f"],["/2022/06/29/C51单片机学习笔记三/index.html","d4b6d572f7174e4a6ddc81f17026617d"],["/about/index.html","dbc7cb020f4bf2974848e420db6a1828"],["/archives/2022/05/index.html","1700e9eed87f730306b7f47e615d88a8"],["/archives/2022/05/page/2/index.html","fa90397b3b1f2fe184cc07358202c414"],["/archives/2022/06/index.html","877a3f8e65fbcacf72a43c608260b84f"],["/archives/2022/06/page/2/index.html","9a58558746e134cdb5eb0a7d916cd1ee"],["/archives/2022/index.html","b808273f4490c1de8d5975637b8e7d97"],["/archives/2022/page/2/index.html","3dd4aca8d45c1977a53c451308e1ac3c"],["/archives/2022/page/3/index.html","4fc0244b3178cc2b5cd27e4b5d567aef"],["/archives/2022/page/4/index.html","1aad40c768e0f8aab0fe5e639dc16d39"],["/archives/index.html","ad157905d62b7e23f13cb698276df499"],["/archives/page/2/index.html","0b3cbde6a773ff44b1a48e9eb091be30"],["/archives/page/3/index.html","befe3ab17be7f5261abfcfc4b20f499d"],["/archives/page/4/index.html","c31171f2276604052ab80d8e7cc5d260"],["/categories/Linux/index.html","e48b6f452e59f37ac74e1cb3e97e8612"],["/categories/Linux/vim/index.html","aee4691aca00c8eedd3ec20b082fb1b5"],["/categories/index.html","1dc0d467399db8b9ddf46440b4672d4a"],["/categories/学习笔记/C-C/index.html","1bfe2c04bdbe9331d178fc4d82db6099"],["/categories/学习笔记/Java/Api/index.html","2992f25175877282bde0285604728430"],["/categories/学习笔记/Java/index.html","a4167a868ef172858414ed284d8a98e8"],["/categories/学习笔记/Java/page/2/index.html","32169a006db855590f91ab6b24b643b6"],["/categories/学习笔记/Python/index.html","545a32ebdd07f7fd943171033c53b6ff"],["/categories/学习笔记/index.html","a1c65072d59a507fe9398a09d2e1633e"],["/categories/学习笔记/page/2/index.html","ea371c834ef4fd47f669b959131ba00c"],["/categories/学习笔记/page/3/index.html","792a1044bc906b29e57c7d46dcd19817"],["/categories/学习笔记/单片机/index.html","025f25926c899f29709f02fd88b26e37"],["/categories/学习笔记/安卓/index.html","320212abfb1d2f371adf78ff97d6a15f"],["/categories/学习笔记/数据库/index.html","97fc9a1c7584ecca7cda3bc9a6aaac99"],["/categories/安卓/index.html","6e2b26bfd0de812453c5420086a4f25f"],["/categories/安卓/新大陆/index.html","fbcd2684ba61c5b6e443c023b4107e26"],["/categories/算法/index.html","3a75767de69e4d91908afe094a37ab30"],["/comment/index.html","e44a62bdbe6b77850f41df4a0aa63281"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","f84bf7197f9a01d07e7e5ba834e242ef"],["/gallery/index.html","b1f1226a04f8ec6e44f4517c3a6bf3f6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","eb74bc216363b3c06b3b4532525a73fb"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","6e5321088b009db5fc4105857b3d10d9"],["/page/3/index.html","68e402faacab3cde6b6c214e6934356e"],["/page/4/index.html","6a55f2702cd1674cbb4dc0193fb2d538"],["/sw-register.js","335b778b210b57bda0d322082f100df4"],["/tags/Bundle/index.html","a49fa349ee96b8b459b20976fe7e8b03"],["/tags/C-C/index.html","30482e53223ad94768f7cb1df5869b40"],["/tags/C51单片机/index.html","46007d1e98ff2920e1587605e20e52d6"],["/tags/Intent/index.html","105a14a414359ae4bac68e77add8fa8b"],["/tags/Java/index.html","c2e55268ed39accaacb02e07e497924b"],["/tags/Java/page/2/index.html","274add87f103a0b106a468aa1e8d3aa0"],["/tags/MySQL/index.html","f312d5b7f513a5eab2ee562d7a3a5d4e"],["/tags/PWM/index.html","43bf7bb61680ac1d83ee531c6673ae64"],["/tags/String/index.html","b8330aea9fa3e246bf788d6b4e75c98d"],["/tags/Thread/index.html","f5febf612246b6473cca811fe15e1faf"],["/tags/api/index.html","24aabde18b8da31d5c7887f26abf4e35"],["/tags/gcc/index.html","6ae74f966c5f88001a4b21026f80c606"],["/tags/index.html","3f4964de040038043f00c85ad9e80d46"],["/tags/python/index.html","3075852fa9ef32b2d2f534d56e61d95d"],["/tags/vim/index.html","265149f6d9e171a22a6136d58df9dfb7"],["/tags/云平台/index.html","9c503ac9130319f6417252576f5ef630"],["/tags/冒泡排序/index.html","ebebe472455388b9bbafddb493d72cfd"],["/tags/单片机/index.html","a57fcce5893db09b8e6434dcb1627800"],["/tags/安卓/index.html","847a2e0808e6dc2df44430e4a4ecaf62"],["/tags/定时器/index.html","8edc1290e64c009eea4ea79a895576c5"],["/tags/斐波那契数列/index.html","923a60f38afb759c8d51dc44aee8e4ad"],["/tags/新大陆/index.html","06d27927e7b4122234bafe19c4024706"],["/tags/选择排序/index.html","eafcaef42d02b1c3638ae5e246d494cc"],["/tags/面向对象/index.html","fde7f032f06a6a2f5a53bf6350c995e2"],["/tags/面向对象编程/index.html","5e9be46193def0d9c47069969017c2f1"]];
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
