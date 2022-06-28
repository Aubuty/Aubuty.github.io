/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","d902e009d5fa7947da3b7818541dc159"],["/2022/05/31/Android新大陆云平台API使用/index.html","0880b9ade71e3dc5c7e7afc24af22e15"],["/2022/05/31/Android页面跳转/index.html","14353f72fb3c13aec50caefe7f5f1853"],["/2022/05/31/Java内部类详解/index.html","55cc5dd347b2ef74d47dc52226405a40"],["/2022/05/31/Java多线程/index.html","58358b3cec61974734cf5f4eb5b10c07"],["/2022/05/31/Linux-vim的使用/index.html","5f51f20f732f0a0092a119e80e92ae72"],["/2022/05/31/MySQL基础/index.html","b6bb4d48bc79ed587da18dac9a43c24f"],["/2022/05/31/String/index.html","c2395aa62ed2343a0c37585586d86f67"],["/2022/05/31/final关键字/index.html","408dbd2337f712bc140669277082070c"],["/2022/05/31/static关键字/index.html","ad21e945669889e49b2b3460d8b079ae"],["/2022/05/31/this关键字/index.html","2af3d035f34515abbe7f73169a88fc41"],["/2022/05/31/冒泡排序/index.html","21626006326720c997fb8008e903942b"],["/2022/05/31/引用类型使用小结/index.html","322165d7a20e8512255304a628384313"],["/2022/05/31/抽象类/index.html","dd0451d3c3eaad7a2922cd7381389bb4"],["/2022/05/31/接口/index.html","4166d9981ac80ef9fddd09fc1352c947"],["/2022/05/31/斐波那契数列/index.html","ac386d07e4b46406c9f4687195ff55c8"],["/2022/05/31/类的五大成分/index.html","6a32a933e5432d6c248203634154677f"],["/2022/05/31/选择排序/index.html","d2e75094dd44a03600ea8d35468c3424"],["/2022/05/31/面向对象的三大特征/index.html","09b347ee1170376e119e7140601772eb"],["/2022/06/01/01.初识Python/index.html","113c8bb6e11d72dc44b7084e0882dad4"],["/2022/06/01/02.语言元素/index.html","4feb6a914c4b23f699d66ab4b5a65cb3"],["/2022/06/01/03.分支结构/index.html","11e57a961c62ef9197e613bd1772fa43"],["/2022/06/01/04.循环结构/index.html","05a1253d5f86259cb45fd989fdeb92f8"],["/2022/06/01/05.构造程序逻辑/index.html","0988bfac0d66ec80f41f87529937b762"],["/2022/06/01/06.函数和模块的使用/index.html","cb2791e38e7187f188f677ba04e06b03"],["/2022/06/01/07.字符串和常用数据结构/index.html","9e03b1c111499edb58c5326b269d5162"],["/2022/06/01/08.面向对象编程基础/index.html","8ca0267f0e0748f13c507bed70d9aded"],["/2022/06/01/09.面向对象进阶/index.html","b93b8a509d1a8b6345f043eca2e8d7ff"],["/2022/06/01/C语言笔记/index.html","dc96b6a92fbb6ca558ff871745c43047"],["/2022/06/07/安卓基础-布局/index.html","50f3bf26f364f47747169defedfee6ea"],["/2022/06/28/C51单片机学习笔记一/index.html","a190b55a13a39f5a3f22192b42ae6fbb"],["/2022/06/28/C51单片机学习笔记二/index.html","609cf0e09680e4cfb24d6fee681c934a"],["/about/index.html","0e68448ac126bd6b2d7099fc397965c0"],["/archives/2022/05/index.html","f4b25fc63f1add4f59f5651fcf0543af"],["/archives/2022/05/page/2/index.html","8a4096fb6c722ab606c075d94d6d325c"],["/archives/2022/06/index.html","e104cadb6c611b0c50ef4bc8c9bc5d41"],["/archives/2022/06/page/2/index.html","530e0a21d482fe925761be9043200382"],["/archives/2022/index.html","24c9c2d5681e748e132a91ba74c84b8a"],["/archives/2022/page/2/index.html","379968a7c997f0845f8cce355415f0d3"],["/archives/2022/page/3/index.html","907fe3a50edbc4140453bc0a89624bd5"],["/archives/2022/page/4/index.html","131723a0b66a3e349b90ebcc40dddd71"],["/archives/index.html","b96b53c629210545c0f3ff417b1b3d12"],["/archives/page/2/index.html","a027d380149d9b64b732586c35526aad"],["/archives/page/3/index.html","09edc456135e2bf11254d947fd0d4be4"],["/archives/page/4/index.html","a9875b36b33b5a95bb35bf9fe2ed8147"],["/categories/Linux/index.html","9333a3e52e59fea444cd5f4619d0f796"],["/categories/Linux/vim/index.html","3876c0ebe0a7b23e7b0a62d656d6c3a6"],["/categories/index.html","e47f42f0f8988f7e6b4820c5405eea50"],["/categories/学习笔记/C-C/index.html","2d4436be00279ee6365a4aff77f36c90"],["/categories/学习笔记/Java/Api/index.html","a4a461490d632445c6a0fd4f94d40481"],["/categories/学习笔记/Java/index.html","92c19f51a26d8088be386ef07e8e991a"],["/categories/学习笔记/Java/page/2/index.html","434401cce50e48f470db342f318db2f0"],["/categories/学习笔记/Python/index.html","90cb1faeb7e377ef160e6a58106a1160"],["/categories/学习笔记/index.html","73f5d338248d02efae0a2bc5d2093016"],["/categories/学习笔记/page/2/index.html","e11a02b0c99fb51cb65772c927ccfb71"],["/categories/学习笔记/page/3/index.html","4df8b70e60a315d3efb39815b35c2a5b"],["/categories/学习笔记/单片机/index.html","7456078ec241a36e6481251fe62c2d3c"],["/categories/学习笔记/安卓/index.html","81b62f3b83532d342f809e19f6c4ab39"],["/categories/学习笔记/数据库/index.html","6a63abd7473b17874cf964f5b813c29d"],["/categories/安卓/index.html","b3fc2eaf904bfddc10e0b28b940cf825"],["/categories/安卓/新大陆/index.html","bf49183d614d7ab697042c98de75587a"],["/categories/算法/index.html","b215e8a2e854770bfec36b0731ebf91c"],["/comment/index.html","3d5cef3c7c0df92edf5919f11e5c3316"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","863d949502e7e2ec6050ccbf2824f227"],["/gallery/index.html","ac20a99c4ae84b33f84e3ee304c8ac5a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","a9c1ca8de7a08cc214959348f6e2acf2"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","8c44aa102dcc7449b9ddb7e398fa31e5"],["/page/3/index.html","ea404c27f1959186c0656e1e283f42da"],["/page/4/index.html","1e558d1e20591607656427660105b957"],["/sw-register.js","5563005ef648ae5ed77d4195140bea29"],["/tags/Bundle/index.html","2d4595bc98100e6d9bb4e788aedfbe80"],["/tags/C-C/index.html","7737f58dfa4ff37316f5ee5d0942afb9"],["/tags/C51单片机/index.html","bfc6049d638c44105637a17eac02a8ba"],["/tags/Intent/index.html","9e3b1e6f1cafacf57f376588d6e0bc37"],["/tags/Java/index.html","59d04dde3b38c0be5759a87cfa52c8b5"],["/tags/Java/page/2/index.html","48f7634dad3a3e7c0feb2fc9c399e7ab"],["/tags/MySQL/index.html","c57757604977cb558fa22efd4c29e8a9"],["/tags/String/index.html","5953dabbbb97478a80269dc1070556e9"],["/tags/Thread/index.html","db4a27cb5b14fdba96cb5395759cb6a2"],["/tags/api/index.html","8b8e9cd8f38a8aac9feb63aae3a5444f"],["/tags/gcc/index.html","05a1283bee8b14a2af22ccba7a59c335"],["/tags/index.html","b94beb483e95ccd27fc9ba88a6ed043e"],["/tags/python/index.html","906c95d2c27b2ac445d631d0c2613cf7"],["/tags/vim/index.html","dbd8c2c02f14571d7fe75138569b7dc8"],["/tags/云平台/index.html","0dd7c7fef192743797641569159f48b1"],["/tags/冒泡排序/index.html","16379136c0c1c8b8b61070a53bc6a19f"],["/tags/安卓/index.html","f00f51766fa19d430349686af64a8996"],["/tags/定时器/index.html","5c81bc0ef4bb7fc1b889e70412845350"],["/tags/斐波那契数列/index.html","3d5384f9813b862b0751e53d731d6596"],["/tags/新大陆/index.html","25255ad4939a23469b50d97d07785aee"],["/tags/选择排序/index.html","ce789ea64afad735aeb69e032c0851f9"],["/tags/面向对象/index.html","c6af561f139ff9353673bc40fe0e4469"],["/tags/面向对象编程/index.html","a999ecb9b165553d189a493829065787"]];
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
