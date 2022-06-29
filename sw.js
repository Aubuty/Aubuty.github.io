/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","658496c65eafba3ecbb98dc2ca8a8134"],["/2022/05/31/Android新大陆云平台API使用/index.html","784419de18640cfb6c15767e450d9630"],["/2022/05/31/Android页面跳转/index.html","fa9174c57ac94a7320fc348dbede7371"],["/2022/05/31/Java内部类详解/index.html","9079d1e50090b63cf858cb3eb9fe3e7a"],["/2022/05/31/Java多线程/index.html","38c0a5131e540ef7622018384dd041e7"],["/2022/05/31/Linux-vim的使用/index.html","a8746551fec81413abd3fd9a81a9b349"],["/2022/05/31/MySQL基础/index.html","dac88ea6643894a2e9b048babed6f979"],["/2022/05/31/String/index.html","2f10d550192b75fc3a8cead1c68b5e6c"],["/2022/05/31/final关键字/index.html","fdd79549a76715fdd9eae64208b711cc"],["/2022/05/31/static关键字/index.html","d0fe12ea6148e0307c816acc9a56e3ff"],["/2022/05/31/this关键字/index.html","7c439aaf619217aabdb6de633b6ede03"],["/2022/05/31/冒泡排序/index.html","197571ae3f37601e623bbaca567c11a1"],["/2022/05/31/引用类型使用小结/index.html","9e476d2653840effd7b1d336066bfec2"],["/2022/05/31/抽象类/index.html","9811bb2840d1105a70b704c84ac0202b"],["/2022/05/31/接口/index.html","401d74c037bd891684a5229969daa2f1"],["/2022/05/31/斐波那契数列/index.html","0229f495a174be1b8d4987accc3167a0"],["/2022/05/31/类的五大成分/index.html","abf41f6a4a0b16ffd293fd3b320c49a6"],["/2022/05/31/选择排序/index.html","cfa1e04af091c24d9d3430d4f729e82a"],["/2022/05/31/面向对象的三大特征/index.html","f1d41eb7a937815952dd9aeeb2518e37"],["/2022/06/01/01.初识Python/index.html","008b144c1846e975544f1d672e160e5c"],["/2022/06/01/02.语言元素/index.html","d54e4e4317a20412e4667ed5655d13b0"],["/2022/06/01/03.分支结构/index.html","08b296811cae984b18a2d3b93be9669d"],["/2022/06/01/04.循环结构/index.html","62b97a2e92314e8dcbb84b87abf01143"],["/2022/06/01/05.构造程序逻辑/index.html","f22aa67852a5a9f936d6549329e16888"],["/2022/06/01/06.函数和模块的使用/index.html","50e777601be1494e5e9dff42704def62"],["/2022/06/01/07.字符串和常用数据结构/index.html","b6cdbb95a87453c30c78997a135699b7"],["/2022/06/01/08.面向对象编程基础/index.html","7639dba0fbf50415b4e828b608d1bd34"],["/2022/06/01/09.面向对象进阶/index.html","360119ee54c0046dcf19f0df07061ca0"],["/2022/06/01/C语言笔记/index.html","c05f6b2eae13683ed1984138246409da"],["/2022/06/07/安卓基础-布局/index.html","f44648fed957c050ab9ce15a3e17d4f2"],["/2022/06/28/C51单片机学习笔记一/index.html","70d16349e68116ee955da6f4a1bf4fa6"],["/2022/06/28/C51单片机学习笔记二/index.html","e673fcd2241223f0e2b27716b3f3133c"],["/2022/06/29/C51单片机学习笔记三/index.html","5b14fa072bf487f3381fb4c35f8800e2"],["/about/index.html","0ff53c22160ad2c3bb82fe9d9e648078"],["/archives/2022/05/index.html","8fb38f905cd99886eab6556c815956af"],["/archives/2022/05/page/2/index.html","bcb8617ffafa1f60fd109d9dbe3c4478"],["/archives/2022/06/index.html","acf32b0bf8709de1e45141ceaf14a67e"],["/archives/2022/06/page/2/index.html","0ce2397fc4711c11c522008762acd479"],["/archives/2022/index.html","2753ffb78a5b51dafcb664926f6a449a"],["/archives/2022/page/2/index.html","0c32a1e897e23e6818322af8ed70a4e9"],["/archives/2022/page/3/index.html","077ab8b1283aafda9753a8a715acd7e7"],["/archives/2022/page/4/index.html","27697e0ee405eb2ac1f7214bfa93f7fa"],["/archives/index.html","98b4e5c61c4c65c27726865eecf11ee6"],["/archives/page/2/index.html","e6cd7309fc1ba440c41b513523e583b9"],["/archives/page/3/index.html","3e1dd6dd7922d11ad2544b1705fd7a4a"],["/archives/page/4/index.html","9dfba520e9c67861b15c779a1036bf77"],["/categories/Linux/index.html","a471627ce53f97c3d37e3fa6298c4014"],["/categories/Linux/vim/index.html","32c01faa7c9be29d115e633466912ebd"],["/categories/index.html","fbc401c58101e5d9faa943085678d89b"],["/categories/学习笔记/C-C/index.html","9172856c00dfa626f0d34047f00ac7d4"],["/categories/学习笔记/Java/Api/index.html","d9011e4619b3c1a589f4d71aeac5185a"],["/categories/学习笔记/Java/index.html","8efaeae1c19b644d16480f6b0c95e2da"],["/categories/学习笔记/Java/page/2/index.html","78957fbdd23841585e0c1ea67ac22a72"],["/categories/学习笔记/Python/index.html","f652414f1864b4b0c240b252a85371f3"],["/categories/学习笔记/index.html","03ad5bcf8311c003d602b384c8691844"],["/categories/学习笔记/page/2/index.html","5878e33413a28863bb726f78bad027f8"],["/categories/学习笔记/page/3/index.html","1f7dcc93aa4b01451165392e90ee409e"],["/categories/学习笔记/单片机/index.html","1024eb5abfabae95aa952ad8d43c3804"],["/categories/学习笔记/安卓/index.html","fd2a80a8d3081bbabe0d480a86c91d3d"],["/categories/学习笔记/数据库/index.html","8f6f0fc065062227b4c07d1a14bbb498"],["/categories/安卓/index.html","9bff0bc816e7104b65acbdc06cdb72ac"],["/categories/安卓/新大陆/index.html","f667e1e3947343163b35f3e70b473da2"],["/categories/算法/index.html","8d6dde5b841651b79b79393bfec27194"],["/comment/index.html","82b0cc660f35429fbeae8e0dcb233bca"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","9177290b917928ad2f75e379095543b0"],["/gallery/index.html","04f36dc15273a029720d211cfe6fa710"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","2c0b72f6c928b5ef06bc138d271f9b74"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","807f5ae6d3a93705f10da14f8b902b8a"],["/page/3/index.html","93bc76057ff6b7e7cfdf1fbd7dd758f8"],["/page/4/index.html","2984f5b6bece3211cc6ca53eecd81b8b"],["/sw-register.js","97513ce1bb60f745bc51a2db60681ca7"],["/tags/Bundle/index.html","60affb4cc61e754790dd5378c33dc2e7"],["/tags/C-C/index.html","f20a166f9ab2eec57b70d261f8af049e"],["/tags/C51单片机/index.html","32e252459aa0c12ab2dc26275d277848"],["/tags/Intent/index.html","1cf7c24556e58d66da0068ba076425dd"],["/tags/Java/index.html","a5900e526e7c9075a81dc6abcf7b3232"],["/tags/Java/page/2/index.html","af7e38a322724e0ba5744a9b3c2d6120"],["/tags/MySQL/index.html","5d1477638e8ed689d93c95c3dbe41c5b"],["/tags/PWM/index.html","05f4066fd36b3e8d935977c1db4f745c"],["/tags/String/index.html","27c16738e7d7848540b037c14a03c147"],["/tags/Thread/index.html","f4ca91ee9ad3b200450e04a835a13217"],["/tags/api/index.html","25e8ebbea461f0d6d5085a45c14e3f64"],["/tags/gcc/index.html","d3998b1ef7bad5a09dda21848ebd6426"],["/tags/index.html","d260d54c2b530d57bbba04b59d750d80"],["/tags/python/index.html","f7ce4dd4281a9221e3239f96809e8bfd"],["/tags/vim/index.html","5a132fe540d190e51136f93af3f532b9"],["/tags/云平台/index.html","e934d17ba64bf22ec088cda1b125395f"],["/tags/冒泡排序/index.html","0f1b55f22a8949f590b059e4b282bf6c"],["/tags/单片机/index.html","3752b19ff62c10d6f200e2ca64c06051"],["/tags/安卓/index.html","ef512b24ada55147274a91b147259d76"],["/tags/定时器/index.html","1ced241d6fcbea5b596583cd0a0a645f"],["/tags/斐波那契数列/index.html","432755fdeebf5f4e73dfbaf298118f72"],["/tags/新大陆/index.html","054aa617a46e1666c7a1b93c7768ebd9"],["/tags/选择排序/index.html","5d9cd2c8df8d3a3da8015526217546a2"],["/tags/面向对象/index.html","b7f198c6f4170e97c6c5fe2bcb4157bf"],["/tags/面向对象编程/index.html","f2c1fecea53720885170b080744ba73d"]];
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
