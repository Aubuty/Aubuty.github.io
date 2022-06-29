/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","e81c93a8aa6efc138c34b1972178f263"],["/2022/05/31/Android新大陆云平台API使用/index.html","241af21fabf6a0a0c4bb0f146f4a9122"],["/2022/05/31/Android页面跳转/index.html","611d403d49d4768280145ea3c03b4f61"],["/2022/05/31/Java内部类详解/index.html","2a381acd8bb18d04b327f5f35cd5ef29"],["/2022/05/31/Java多线程/index.html","1214a7a57a6cce5d9be1b7e5ca8a1fc3"],["/2022/05/31/Linux-vim的使用/index.html","330cbf9b08e394d4f131e9d3d22e5b0f"],["/2022/05/31/MySQL基础/index.html","8854bd6c2bc69e6b8f22772bcb03fcc3"],["/2022/05/31/String/index.html","56ff54ddb7ea5dbd8edd15fff0f42183"],["/2022/05/31/final关键字/index.html","6c5cde9ba6f301295faccf97c79fe119"],["/2022/05/31/static关键字/index.html","0428471e10bb1b5da11b855e9772f4f2"],["/2022/05/31/this关键字/index.html","916cf2b14c31b11359e7a41903754906"],["/2022/05/31/冒泡排序/index.html","45dcc52ec33bc3b889fca549f77f0eab"],["/2022/05/31/引用类型使用小结/index.html","d252325d274738f5af35ece0452ea507"],["/2022/05/31/抽象类/index.html","d691f6f83c34aca65405fde458384439"],["/2022/05/31/接口/index.html","8e4bbaf8d45f04763bcdade0834d2662"],["/2022/05/31/斐波那契数列/index.html","b37a0eadc0e9e9fcb9d92e73c5fe702f"],["/2022/05/31/类的五大成分/index.html","fe302df72d8193f686b47fd58efbecf0"],["/2022/05/31/选择排序/index.html","9ddc1e476772e66b60dddb41cb9f4f63"],["/2022/05/31/面向对象的三大特征/index.html","8f3a8259d21263dda34584c4dd18a1c5"],["/2022/06/01/01.初识Python/index.html","12159130f95c25bbf35ab597bedcad6b"],["/2022/06/01/02.语言元素/index.html","4adba3c9efbd881c10ca0a0e96a7eefd"],["/2022/06/01/03.分支结构/index.html","59380455b1243d02a0f8a3ad288a4b70"],["/2022/06/01/04.循环结构/index.html","4ba1723e8d41302b3cf464f17f5ea322"],["/2022/06/01/05.构造程序逻辑/index.html","8e532f163d26c836275f56dbd56fd451"],["/2022/06/01/06.函数和模块的使用/index.html","8152efa737834d9e4afb7ada6b4fa3b2"],["/2022/06/01/07.字符串和常用数据结构/index.html","8a6d1af14d192c4ee1a18c42447e46c4"],["/2022/06/01/08.面向对象编程基础/index.html","8499c5af2188da588c1da691fe5eb8e6"],["/2022/06/01/09.面向对象进阶/index.html","1f32578594fc7ff9af5d84c28f39b30d"],["/2022/06/01/C语言笔记/index.html","f2b38196eee723298c7186f4f648646b"],["/2022/06/07/安卓基础-布局/index.html","186a6e6dfa8571e52e07e43f9728eac5"],["/2022/06/28/C51单片机学习笔记一/index.html","0cab636541a7e5810ec6dca04eb9e066"],["/2022/06/28/C51单片机学习笔记二/index.html","284c509843291123f2a5c9c5bdeae89b"],["/about/index.html","cba60d700f90974b0a26206cf0480277"],["/archives/2022/05/index.html","14b80f1a3b4d1ca2ab46c14eb56ae962"],["/archives/2022/05/page/2/index.html","688e8daa1daa87952e090a9347bd364a"],["/archives/2022/06/index.html","4b80a01fc5d7d7d56b94e2796fac04e0"],["/archives/2022/06/page/2/index.html","41c5ce909f86e9df5582d988fe461524"],["/archives/2022/index.html","70925ac39c994bea9b694502e79855f4"],["/archives/2022/page/2/index.html","f7de663b0f97712d8afe576f7303af7f"],["/archives/2022/page/3/index.html","2eb46c2aef8402a8d3f68c1fbc00c710"],["/archives/2022/page/4/index.html","278def3db1fb91cd58a99d27504e2191"],["/archives/index.html","ee5b4ff061bdaaf535772ebf45f1b5dc"],["/archives/page/2/index.html","b44ee1efcc31b4593fd1dac5749d6cb0"],["/archives/page/3/index.html","2cd503b1f5407188087c80ee6b2b26b4"],["/archives/page/4/index.html","62679c95f3565cb1fc7f2d86aa585da5"],["/categories/Linux/index.html","8ffe6964f7d2bbe06fabffe382437760"],["/categories/Linux/vim/index.html","07fa9315bfd51c580f9f84cc80158188"],["/categories/index.html","71af67172080c7155f8e5044e0274092"],["/categories/学习笔记/C-C/index.html","2c03cdf10edbdf77d329d9d93ff33cd3"],["/categories/学习笔记/Java/Api/index.html","dd2265b21a2ebc7caf5d79b672aca078"],["/categories/学习笔记/Java/index.html","eabd18fbfe2441f716b457f5139e4f10"],["/categories/学习笔记/Java/page/2/index.html","392c8858ce8f6c94f6248160dfc9b2e3"],["/categories/学习笔记/Python/index.html","5727a83d67be8a806f4fab2e4175aa2c"],["/categories/学习笔记/index.html","275fe1ea1ef5c4835fc3d563ec1d6d8a"],["/categories/学习笔记/page/2/index.html","be056cfb27166b0af849cdcac6b775d5"],["/categories/学习笔记/page/3/index.html","568b26504e1bb45d5fe2521caa48a89a"],["/categories/学习笔记/单片机/index.html","b13540830b42c960ca1f0573021305ba"],["/categories/学习笔记/安卓/index.html","fea91307d077deda4981556a123a3dc5"],["/categories/学习笔记/数据库/index.html","82901278856c01f1c1ca79849dd7f34d"],["/categories/安卓/index.html","60d16ebd39f9f5c80e11022c0f2dd01a"],["/categories/安卓/新大陆/index.html","feaf9d98fd59f5946ac86bd5c3690573"],["/categories/算法/index.html","898372fe1b3ac7f0e59d866b71f5a07f"],["/comment/index.html","da2a55c6efa274dd60446f8feb73fc37"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","87234ccde5fcf1e25f4ac65bd98f66e7"],["/gallery/index.html","8cdd3444d8680c9952aa996d457967d9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","0300a58b58d1f9c146dea908eab384ee"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","325ef1d0eb2fc4650b5265c5b0c84db5"],["/page/3/index.html","d4808c28b79d69037d99787bf0164d93"],["/page/4/index.html","4fac5bcf0fe195107b9c7c51edd9cad0"],["/sw-register.js","5a52df2cdb9e9802946308ecbfe37948"],["/tags/Bundle/index.html","c3b20e2b0bca787a9bfb292102dd6998"],["/tags/C-C/index.html","4408e8b1913151323e9ef1b6841bfbce"],["/tags/C51单片机/index.html","f63115ca1b8c8e8bab26d8b85db727b9"],["/tags/Intent/index.html","49c1ab2280ec27f10885abc5c5882200"],["/tags/Java/index.html","0d7ceaa5a7a4703386b6586499a805ee"],["/tags/Java/page/2/index.html","600ae29a1ce4e7f4441f16cc5fde6f0a"],["/tags/MySQL/index.html","0b15865870b6e38220c34ea37239ca0e"],["/tags/String/index.html","4632dc1287e564aa17f0436c6192e30a"],["/tags/Thread/index.html","ec062682127d86e187c18b8b7fb47504"],["/tags/api/index.html","c56a6e10e6d50c1288ed2915cbc5e4b5"],["/tags/gcc/index.html","5df58a9feec555c52c5b9d94ba733a6c"],["/tags/index.html","1c34f17ef134d4a08595c67a64b087dc"],["/tags/python/index.html","748d15ccd7f0e0ac0287af240a0b490f"],["/tags/vim/index.html","c78bdbbcbb5d47d21f42b1efbba8e68d"],["/tags/云平台/index.html","a8b83ebf11421f4d6d7150165a419149"],["/tags/冒泡排序/index.html","6ee6b776dab4244635072158f851892e"],["/tags/安卓/index.html","2cba28df39af22b0f116a05c770559bd"],["/tags/定时器/index.html","21abbbf816a9aafb1cfb70943178fab0"],["/tags/斐波那契数列/index.html","1f200ba930790dc246d1b9313db94b13"],["/tags/新大陆/index.html","2b5a409813222553595498fbc1df2128"],["/tags/选择排序/index.html","12663fb29d26ae45526614f915210784"],["/tags/面向对象/index.html","a6b7ec9ae9888c53581d973d58da8bdb"],["/tags/面向对象编程/index.html","d6a376d190afa0a17cada5fa180f2e68"]];
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
