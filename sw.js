/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","63c10fbed6dd1d609b611c5f46d747af"],["/2022/05/31/Android新大陆云平台API使用/index.html","e6dd2113b84485a8cf6dbc52e84949ac"],["/2022/05/31/Android页面跳转/index.html","d58cc5c387feb0bc0347ada32c69092b"],["/2022/05/31/Java内部类详解/index.html","9442edab94a41ca18d4dc6db30389467"],["/2022/05/31/Java多线程/index.html","fa1fabb327ecd1eb7952e0139d0afbc0"],["/2022/05/31/Linux-vim的使用/index.html","4db4c242635807fcaafd93c5fd23b9fe"],["/2022/05/31/MySQL基础/index.html","333a583e72d16fbaf25937182adfe656"],["/2022/05/31/String/index.html","30b6245c6fba602d465359ead4cc1051"],["/2022/05/31/final关键字/index.html","4ed2be0bb775af9bd63b49b803e29d4f"],["/2022/05/31/static关键字/index.html","835db954c2e61af2735433bbb7222995"],["/2022/05/31/this关键字/index.html","0b3169bafe8cdbc810e94704cf5e00e5"],["/2022/05/31/冒泡排序/index.html","6065b02c0596c2889a5ad9bc09d9be12"],["/2022/05/31/引用类型使用小结/index.html","37116f2bafddf7469953adb4c903fe26"],["/2022/05/31/抽象类/index.html","e191f623b909b772d8217ba641681cad"],["/2022/05/31/接口/index.html","0c1cdf53791234bb5295d0dafcd87f07"],["/2022/05/31/斐波那契数列/index.html","6e58ccfaedf84730a272716930b1b673"],["/2022/05/31/类的五大成分/index.html","aa0ca673771bfdeeca9ff06adca7af8e"],["/2022/05/31/选择排序/index.html","e3417ed9dd134ed80a754a84937b06bd"],["/2022/05/31/面向对象的三大特征/index.html","60c2ec4a31f036ee1dbd00019b5b6397"],["/2022/06/01/01.初识Python/index.html","8f996b79618ba2d1c23ac52e8215fb08"],["/2022/06/01/02.语言元素/index.html","0bda9c1212e08c028439d41e2d082c0e"],["/2022/06/01/03.分支结构/index.html","500e26cead8782edd96ef10926797540"],["/2022/06/01/04.循环结构/index.html","f65ae1af4bc3608de538c6201e290697"],["/2022/06/01/05.构造程序逻辑/index.html","93b5b088aa9875668baa0ccaffe5c616"],["/2022/06/01/06.函数和模块的使用/index.html","b781ca466cfb5dbd57072868277b63ee"],["/2022/06/01/07.字符串和常用数据结构/index.html","c84b09eed92aac154cac6a8d8f91a041"],["/2022/06/01/08.面向对象编程基础/index.html","343e453694efbe79b9a26718100f5409"],["/2022/06/01/09.面向对象进阶/index.html","f89066677757d356a2f3233432543f73"],["/2022/06/01/C语言笔记/index.html","22319bb0d57b2e9c46f899a28fac06de"],["/2022/06/07/安卓基础-布局/index.html","86ab818ad295e0ecd160ba25b6f52b7b"],["/2022/06/28/C51单片机学习笔记一/index.html","3d5b43a47e2e963230fb37a8efb3deac"],["/2022/06/28/C51单片机学习笔记二/index.html","713033922b1b6bb985f82e7b4ac94bcd"],["/2022/06/29/C51单片机学习笔记三/index.html","410f1237fe3c38cb0b5fdb382eebe86e"],["/2022/06/30/C51单片机学习笔记四/index.html","f93f7214aeeb092fc5229a3e73cdc67c"],["/about/index.html","d25e6b3aa38834b2695b502c4f4413ee"],["/archives/2022/05/index.html","97d6815736922dee93320fbde65dfba2"],["/archives/2022/05/page/2/index.html","479fb174e18acf12d5648fe10c163057"],["/archives/2022/06/index.html","7d72d1bc19762cecc0f5cddf354f4a6b"],["/archives/2022/06/page/2/index.html","7b5a5574f001f450b541105914289e12"],["/archives/2022/index.html","9895dec2caa709d85ab51d999c6b7e6c"],["/archives/2022/page/2/index.html","37ae653eae9d3bd122cef0d6b5cbf474"],["/archives/2022/page/3/index.html","7403fc043d690ebcc7176fdd699a1f86"],["/archives/2022/page/4/index.html","d3b05ff2898dd30b9e99e58b760f4d8a"],["/archives/index.html","89f229dbee2fc1578202cce3e79a408f"],["/archives/page/2/index.html","314f09e4dcabd1eb49025bd3daf33a52"],["/archives/page/3/index.html","7ec5e522d3bbb118da9f490ce42d8fce"],["/archives/page/4/index.html","18ae21ff0920ee4753046b2f69ae6244"],["/categories/Linux/index.html","01eb0db5e9169c52e1ec9d8daf1b25a9"],["/categories/Linux/vim/index.html","d5bbf4aff31e6d2f879b3183637f5c33"],["/categories/index.html","86c25d3e9513b228942ba26df14f3b7d"],["/categories/学习笔记/C-C/index.html","912d3a1983ca7fe622386f15ce934c63"],["/categories/学习笔记/Java/Api/index.html","0eeddfa61a56993b3ebb383e8b236a0b"],["/categories/学习笔记/Java/index.html","2585a5e80470cc44daa230a317d63287"],["/categories/学习笔记/Java/page/2/index.html","b168ba11bb9571f791bcea2892f8b68f"],["/categories/学习笔记/Python/index.html","35068d57186672a7494b030e269bf64b"],["/categories/学习笔记/index.html","a00ab9a5f902a4c0e57cfea09142e765"],["/categories/学习笔记/page/2/index.html","18d030ed151a34bc880a3a2cbf0ea7af"],["/categories/学习笔记/page/3/index.html","30fe24967c389121878b2951ef932eb2"],["/categories/学习笔记/单片机/index.html","d6667ba5a57abe6e5a497aa460acefaf"],["/categories/学习笔记/安卓/index.html","460a4139eb78b99b6cd96bd2e6467d0d"],["/categories/学习笔记/数据库/index.html","fb92b45763d00ca83118d09411918ec1"],["/categories/安卓/index.html","1429644d5a8ef44ccaa9dc3d34feb830"],["/categories/安卓/新大陆/index.html","f6728f315c675be40b33b763e8dbfb40"],["/categories/算法/index.html","3c5440004c90f537b8d30b7f09fa8e6b"],["/comment/index.html","b8e563c3d25384e89e8d01a9c6f8aa4c"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","d157881243182d178be050da19ef2f9a"],["/gallery/index.html","79b2d0f09041280307f08d40ddd4b416"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","8ad61ac76155df48ce07eded7d2b6e1b"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","1670a17f3c4bef7342686348dec247e3"],["/page/3/index.html","242c955220720bc560d7ec0475bd1520"],["/page/4/index.html","9aba3bbaa918e4403cd437ba1b1461b8"],["/sw-register.js","9a64f5c74b6710ca4f1023b59662c253"],["/tags/Bundle/index.html","271bb0ebd4fcffe424798d12e2a675ed"],["/tags/C-C/index.html","d17f177ab30baaad187bc3f6885c95c4"],["/tags/C51单片机/index.html","49b3d359b33a42c13026ee77a2e575bd"],["/tags/Intent/index.html","4a9fe9e88e3a18bbbe75a695f4bb2db8"],["/tags/Java/index.html","b9367cb936c748351809eb634684b0ea"],["/tags/Java/page/2/index.html","d1933dfc1d0ea2cf109b8f534e789006"],["/tags/MySQL/index.html","96e5215f77337bca81bcf612373aeb8a"],["/tags/PWM/index.html","6e1a8c539302b47018f8020562094aaf"],["/tags/String/index.html","0b2fb475de1a79f900f05c23b228aa92"],["/tags/Thread/index.html","4dd503d6b6e5dafb275cc864173b0142"],["/tags/api/index.html","980ee4a2dcc14ee54e1d2e42558e675a"],["/tags/gcc/index.html","f97c1a6e24ab2984c7ef8935999ce044"],["/tags/index.html","d888843b6e8f152b1321f7d03a76584e"],["/tags/python/index.html","f1c50e9df882874e6af2e908dade5c37"],["/tags/vim/index.html","b9f97b2cb662a5e2b3990b6412542aaf"],["/tags/串口/index.html","e471bd5da48ad547f48a76d0d80b2945"],["/tags/云平台/index.html","21485e729f4f53a2b285ee4bc94f201b"],["/tags/冒泡排序/index.html","4e71307eadd8ccb1527b452b0496b410"],["/tags/单片机/index.html","d1f9425c737c0ee943b6ee05bdb03f44"],["/tags/安卓/index.html","19b4c0901551341361827229a75b107f"],["/tags/定时器/index.html","3e7f99ab89034e77827b3fa4f24e0cea"],["/tags/斐波那契数列/index.html","b0f50d716353075ac163ab1e08f1e0b9"],["/tags/新大陆/index.html","49d88bfa55f81ad5f7243e78980a0b5b"],["/tags/选择排序/index.html","3885dd4652d57ee4a40c502e0ed37a07"],["/tags/面向对象/index.html","bd49434b6827fda1bbc5db54be4d9904"],["/tags/面向对象编程/index.html","b136df68e14b9abc58c7af672139cb99"]];
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
