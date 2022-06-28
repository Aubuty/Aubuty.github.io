/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","b21a0dddcd7b18c178626a826412aba1"],["/2022/05/31/Android新大陆云平台API使用/index.html","754cf0881cff0be191f1277a62cf3cc0"],["/2022/05/31/Android页面跳转/index.html","4817d72e41955fcaba9940159475045e"],["/2022/05/31/Java内部类详解/index.html","530e651ae61a6b13d66c88cdfef32d06"],["/2022/05/31/Java多线程/index.html","a759514c932e0b9caeb0af611de3bb46"],["/2022/05/31/Linux-vim的使用/index.html","cb6aba265a5b4ffe2a437b4aa5e19dd4"],["/2022/05/31/MySQL基础/index.html","10b5f19905c51b864b9f95e33d3e72d7"],["/2022/05/31/String/index.html","fd6645dcf83e638933e53e16d22bfd7b"],["/2022/05/31/final关键字/index.html","18bf42895283cc854ca492230e6b0007"],["/2022/05/31/static关键字/index.html","ad0aebdfcfd79b5397336ab96685c905"],["/2022/05/31/this关键字/index.html","bbecf50e94ab643fcd065aa98634659b"],["/2022/05/31/冒泡排序/index.html","0f9a4636b7c39f5ac3fa4f4e0a628b0e"],["/2022/05/31/引用类型使用小结/index.html","dabc3119bfa71aaf1b2c28808d92fe00"],["/2022/05/31/抽象类/index.html","e8228f621e135fa101617d302389de50"],["/2022/05/31/接口/index.html","ac23eeac70cf39e9426103cd40dfe12c"],["/2022/05/31/斐波那契数列/index.html","c0e7e00f4f2a31ceb974ad4a3a1f7b5b"],["/2022/05/31/类的五大成分/index.html","50db7ee70e3fc48e30656aa0dc7f509c"],["/2022/05/31/选择排序/index.html","0ab0cb7a60a54551bd2428e19e419e06"],["/2022/05/31/面向对象的三大特征/index.html","80e910484c2043b33c513ac84f687c95"],["/2022/06/01/01.初识Python/index.html","2a6e0ee03770948ab4ac55cbd2d19cb3"],["/2022/06/01/02.语言元素/index.html","10ae2843ffd458243f9b7513c9e2ee62"],["/2022/06/01/03.分支结构/index.html","9e9e9f8279c3d736d3753c47f450712e"],["/2022/06/01/04.循环结构/index.html","5db112c3315e266a36a333989fb7e068"],["/2022/06/01/05.构造程序逻辑/index.html","57702910f0d85129ceb06616801fe792"],["/2022/06/01/06.函数和模块的使用/index.html","a5e4b776616eb49d6d411dad3e4716da"],["/2022/06/01/07.字符串和常用数据结构/index.html","209960dc194fe827a94f998f7461a46d"],["/2022/06/01/08.面向对象编程基础/index.html","c17d431966ddb07630415a1bd87ccba7"],["/2022/06/01/09.面向对象进阶/index.html","578b275b96600012e8de7799258f3c7d"],["/2022/06/01/C语言笔记/index.html","001b5b8ab9f4e88b4da31c7cd5e35bf8"],["/2022/06/07/安卓基础-布局/index.html","fc184b20f2ea5908759da31a62225919"],["/about/index.html","2520aa56bcdae2ad4fa900baa42f732f"],["/archives/2022/05/index.html","acdbc357c25e70d114e680b04a77a173"],["/archives/2022/05/page/2/index.html","052a135629865f753dc8a349e1b85f0f"],["/archives/2022/06/index.html","2eb6a7e26577c39318e8f8731cfff88f"],["/archives/2022/06/page/2/index.html","7ff0492321f813e268a5725825b817cf"],["/archives/2022/index.html","0fc746e314d8e77649a62b6d4609623e"],["/archives/2022/page/2/index.html","a3ed6e1b13e6ffc4d315eb94626fe3d6"],["/archives/2022/page/3/index.html","59b37f2b0a75a237a86284a8b68aa2ee"],["/archives/index.html","20a00ea6d230a455fb6cf76cac21f57a"],["/archives/page/2/index.html","d27dbf5f7f60a4a0a4e257c48cb2a298"],["/archives/page/3/index.html","fb7aa316680f8384ff8f0776961358b2"],["/categories/Linux/index.html","67f1ea0262ef2178df2c9f9af63715dc"],["/categories/Linux/vim/index.html","266a01bbd7f2eeda6b676e16e6a4a767"],["/categories/index.html","d45e717d25f6dbc743248f89caba84b6"],["/categories/学习笔记/C-C/index.html","2ace3141eb270a571006996c0b932f9b"],["/categories/学习笔记/Java/Api/index.html","f3c3f21d96bff4bddcf8f253a21396a6"],["/categories/学习笔记/Java/index.html","f6be7b9af2bf6d3811a616d5702b4997"],["/categories/学习笔记/Java/page/2/index.html","7c39182baf16e362c22eb205a09513a4"],["/categories/学习笔记/Python/index.html","3f77217963e2c220615768a5505bd052"],["/categories/学习笔记/index.html","57ced40e267a14af51ff72af594dcd1b"],["/categories/学习笔记/page/2/index.html","da5ac96c3fa643a2f429878ebce80cb7"],["/categories/学习笔记/page/3/index.html","d288365fcb54848ed1d1f60bada27dfc"],["/categories/学习笔记/安卓/index.html","98026d844953bfb5467b66a5d5e34fed"],["/categories/学习笔记/数据库/index.html","06a8571e5ab5bc0dbc17504b850dd908"],["/categories/安卓/index.html","3d3743bbc0cc7c6ca69c6b352bdccbc5"],["/categories/安卓/新大陆/index.html","b587c4ea2b5988d1519c9aa5eb0e9f01"],["/categories/算法/index.html","49886135bf8b639c9eb7ce334d33eae3"],["/comment/index.html","0c94df98220d5301b5cf2934633c252c"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","c83955a7acd36ae1876a80c09b43fb25"],["/gallery/index.html","220841ce5ec55cd94440319448143cc6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","5ceac15c14b9354dc2225d78f3abe2f2"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","fb94401439596bb92691c719c1dfdf25"],["/page/3/index.html","055cc9fd52da2fe8a0581206f0d33eb4"],["/sw-register.js","9fed58b7acd6a122427b95abe18227b2"],["/tags/Bundle/index.html","074358dd60748d7ab3f7e3fcb1193f62"],["/tags/C-C/index.html","bdb98947109efcfd175da31bf21623c3"],["/tags/Intent/index.html","7ccfcb9143b4fcb56ff30b5c2d8009ca"],["/tags/Java/index.html","317bfd589cad04e8316e6f2375544005"],["/tags/Java/page/2/index.html","e941e75e094970b4757be3e90dfbf18a"],["/tags/MySQL/index.html","03e1a963efd82903fe0d1c0ff732662f"],["/tags/String/index.html","bb00aaf165bc918c17cb3a11a50dfbbf"],["/tags/Thread/index.html","5ffe445bcbac397e05ca1d53eeaa165e"],["/tags/api/index.html","54adc4d8d5a69920417da47e41e1cfc2"],["/tags/gcc/index.html","12572c0ef8ebdf77b5101280fb84af7f"],["/tags/index.html","8c867d56cf8420197543400ed7d4c766"],["/tags/python/index.html","248646806363e1dd74734a3695d25e7a"],["/tags/vim/index.html","a2c57befbd6aa7714a550076da05f9d4"],["/tags/云平台/index.html","02dcb931fbcaeeb2f246d71aed68939f"],["/tags/冒泡排序/index.html","ade3bd0cb581ee0d9d1d89564a096871"],["/tags/安卓/index.html","2139c306e99fa269c95b67b588be552b"],["/tags/斐波那契数列/index.html","b77f29de565645d64100747d4bea99fe"],["/tags/新大陆/index.html","64b128161cd936576eab208eab6a6b74"],["/tags/选择排序/index.html","71e678d7126620cd7b4380a06950c6cc"],["/tags/面向对象/index.html","3147b76f121ae62f205641c1e31e5bc9"],["/tags/面向对象编程/index.html","daade43fa06d85fe6766c5497bb7477b"]];
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
