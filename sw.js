/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","e37f2eb77ec0647534b235f58cd78e01"],["/2022/05/31/Android新大陆云平台API使用/index.html","846f4e51ff9b158d687706ad9ddb6556"],["/2022/05/31/Android页面跳转/index.html","e67813bc3523b3b6035d4d6cfa962853"],["/2022/05/31/Java内部类详解/index.html","8b353681b86405538ade3c5325f33b90"],["/2022/05/31/Java多线程/index.html","7005e47f409d54ea688983d206afd48c"],["/2022/05/31/Linux-vim的使用/index.html","3301d71278892bccd59830591bbc1e71"],["/2022/05/31/MySQL基础/index.html","8185954e8e267e80aadc68340fe95402"],["/2022/05/31/String/index.html","93485179a5bc90c644cd809250bdaf1d"],["/2022/05/31/final关键字/index.html","21fa71c1ae3f09451da1ca734d496bd7"],["/2022/05/31/static关键字/index.html","c126d822ac13176cd3991e34d6997d60"],["/2022/05/31/this关键字/index.html","be3db07d2a9e6460d89887e338cf6c59"],["/2022/05/31/冒泡排序/index.html","c6be20c9bd919253eef46004dee0133b"],["/2022/05/31/引用类型使用小结/index.html","a223af3b60b8106ec8ba74442ab39c8f"],["/2022/05/31/抽象类/index.html","cbfab692af80328e31d54f0b6ddacdad"],["/2022/05/31/接口/index.html","39a45b55e176921b323b8b06a34cc0fb"],["/2022/05/31/斐波那契数列/index.html","07038d7f3ab00e57f2b38bba97ed225c"],["/2022/05/31/类的五大成分/index.html","440f65d30ef85cfc2307f06cbc8004a3"],["/2022/05/31/选择排序/index.html","a64aba26456ac8788b247c25a8d81ca5"],["/2022/05/31/面向对象的三大特征/index.html","5424be01cf9e8b4a3bf0a36d549371bf"],["/2022/06/01/01.初识Python/index.html","df4f0dc6fc547c268fffcdea8d23654a"],["/2022/06/01/02.语言元素/index.html","a0dc22672152118fa07c5dd1f018682c"],["/2022/06/01/03.分支结构/index.html","c36e5e19afd57bf93fb52377bbd2a12c"],["/2022/06/01/04.循环结构/index.html","438762694a7f2978ac2f6fe0c6ea8d8d"],["/2022/06/01/05.构造程序逻辑/index.html","c19322a2a7711d1c19826425471a24d0"],["/2022/06/01/06.函数和模块的使用/index.html","1ea75797926bc7e52433eab27df1b743"],["/2022/06/01/07.字符串和常用数据结构/index.html","0655116654e40a5291984735bd201a35"],["/2022/06/01/08.面向对象编程基础/index.html","8ee424afc87285451df9fcad60462008"],["/2022/06/01/09.面向对象进阶/index.html","d3f2053a0fffa6cb116153c381917cd1"],["/2022/06/01/C语言笔记/index.html","6eb39e805bbc0b02a5bf6d654a206ea2"],["/2022/06/07/安卓基础-布局/index.html","1825b49e122b805c39cda3b5d232dee6"],["/2022/06/28/C51单片机学习笔记一/index.html","008e8527fa81bc60d8d2ee6c65d78fd4"],["/2022/06/28/C51单片机学习笔记二/index.html","cdd7692c1dd879e47dc375d245088832"],["/about/index.html","faf3d6feba272090035db7651c36027c"],["/archives/2022/05/index.html","e117a9c5b44450b73d95c409b8a66cf5"],["/archives/2022/05/page/2/index.html","f88ad862d62c2e70583c790bfe22671b"],["/archives/2022/06/index.html","602f52aaec0fb2871ead60955b57d3a3"],["/archives/2022/06/page/2/index.html","4cacd93cfcf16f6a4d414c309c467680"],["/archives/2022/index.html","0c7ed3d5f0f04b2b055382d00962e7b6"],["/archives/2022/page/2/index.html","8b618a1149b7a25873419e9a9bcdde94"],["/archives/2022/page/3/index.html","5161fb7af50792a8e753b96bc05259ce"],["/archives/2022/page/4/index.html","7ef6be02a883794e3f9b42f97f430ce5"],["/archives/index.html","4efa3cd9edf61c7398e36b2f61678b8f"],["/archives/page/2/index.html","0ad915b2b86294f03b0439deb2dbfe88"],["/archives/page/3/index.html","c70920dc2c50fd775ecaf86349fb9492"],["/archives/page/4/index.html","a0a9a5c9e1a8357a743cd73531230285"],["/categories/Linux/index.html","d098cd7b23709af6232a038e1c43d516"],["/categories/Linux/vim/index.html","5b594fab9314dfd6482178ddb58c534d"],["/categories/index.html","831ca82edfe617934d1e4d2a19c4b49a"],["/categories/学习笔记/C-C/index.html","38fc9722d8008f56449492d619a19277"],["/categories/学习笔记/Java/Api/index.html","2d5f2af2a84fed9ed3ecef537b998b28"],["/categories/学习笔记/Java/index.html","28b901f670d40b21e4b8ff9390038b08"],["/categories/学习笔记/Java/page/2/index.html","01056efad2b04c2488c586d5fe7ba97a"],["/categories/学习笔记/Python/index.html","2f76212209cb390f213d2e128be6e05c"],["/categories/学习笔记/index.html","ecf753d253521e8a88d12281e7f16f8e"],["/categories/学习笔记/page/2/index.html","0cdfff097c802717335b776e80fe6c21"],["/categories/学习笔记/page/3/index.html","e040369014af2408f9ee5aade9c55a1c"],["/categories/学习笔记/单片机/index.html","071523eb9a74947be60ce96154996819"],["/categories/学习笔记/安卓/index.html","99234c1a7d25a69a4817936bf21e26ee"],["/categories/学习笔记/数据库/index.html","051d7749978abb1757d5a6cc3d156eca"],["/categories/安卓/index.html","a1273fc172d0868f02c8495c85498a63"],["/categories/安卓/新大陆/index.html","223f7ea6079551fa0e07d3f8b9069d4f"],["/categories/算法/index.html","3cb580145e125e0d49289a62ce52df9c"],["/comment/index.html","b312970bfdb2b775f2d487fa460149ae"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","41431d64330a8a0303549b59d340e5df"],["/gallery/index.html","632a21ba9c64fa2fd493fb27449e9c30"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","a2f3557e4a2fcba0bd4a7503098e9de7"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","f359cacbb5bc3add05fb124856d88df8"],["/page/3/index.html","8b1d88cdf6d6baec95f74c86f6bcebc8"],["/page/4/index.html","27c58885d66a43b68b0f4a0d6523b650"],["/sw-register.js","7e3da445ddf42f80a31420694d1016dc"],["/tags/Bundle/index.html","6211328866acc9b6a72999cdaa8c1bbc"],["/tags/C-C/index.html","31b4341a3685bbd8457cf9c44a316ba9"],["/tags/C51单片机/index.html","24a5cd49552aab2b57f3fa86884d6530"],["/tags/Intent/index.html","17c31e2f682cddf1e2b8af7c811a8f79"],["/tags/Java/index.html","ed360ac811c0b139bc15113c117a2cbd"],["/tags/Java/page/2/index.html","9f8c32b910825daa21370687e034e070"],["/tags/MySQL/index.html","c563fc9ac0c4d1b97712ff63a6113742"],["/tags/String/index.html","762585c47a02b485aa7aa4152d6fbb5a"],["/tags/Thread/index.html","8ceff8699f8c2b332100549defa50e4c"],["/tags/api/index.html","7bc1e1698237bb8c4b4fec472b7d16c7"],["/tags/gcc/index.html","670d8b49e982bfa3c3c9c832c6e2165f"],["/tags/index.html","ee73602c4e97202052e25261b496c1d0"],["/tags/python/index.html","a10003af16fa0c5acb36ef8e705c73ea"],["/tags/vim/index.html","efb538d4e99aa22c94b101fb7f0ca70b"],["/tags/云平台/index.html","b82d6e4817598544cb0c77153d65acb1"],["/tags/冒泡排序/index.html","509ace4093aa7efe794e53c6c3e2d793"],["/tags/安卓/index.html","9c7b1409e449a47b001fc4118361e1c1"],["/tags/定时器/index.html","5a83d8b90b89538ad2fd14aeb2b9bf61"],["/tags/斐波那契数列/index.html","d3407b510644190e6a41b1b725806702"],["/tags/新大陆/index.html","8e300063bbeb05d0aa176e41afe08531"],["/tags/选择排序/index.html","f1b7e42c78dd5a8e44fdbbdd7b5cc755"],["/tags/面向对象/index.html","5f708a415559036935a7dd298d7f223a"],["/tags/面向对象编程/index.html","bee89159966cd8d353cefe3eec5b3900"]];
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
