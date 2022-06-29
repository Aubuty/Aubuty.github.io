/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","f441f894e1ca5e2154a9fb898c78e6d5"],["/2022/05/31/Android新大陆云平台API使用/index.html","b6587427146cf4dbc32ecbf108cd4c0b"],["/2022/05/31/Android页面跳转/index.html","473732f83fd0fecef123455f1a8d6a72"],["/2022/05/31/Java内部类详解/index.html","03002c802bc6c87be8cee8035b936c00"],["/2022/05/31/Java多线程/index.html","e38cb3581e8cd1bbf9e7b0e8f3fb02bf"],["/2022/05/31/Linux-vim的使用/index.html","b3a83a40b9cde2785273694a6e7cc27c"],["/2022/05/31/MySQL基础/index.html","ad1a8222ae76dd4f072391c6d9b5f3ae"],["/2022/05/31/String/index.html","70b0ebe96b1abac390bb8525b2d55590"],["/2022/05/31/final关键字/index.html","317b8ec25572f53a0ede0ac7c83699df"],["/2022/05/31/static关键字/index.html","fad159a88dcb071985515b6125562a1b"],["/2022/05/31/this关键字/index.html","8d8b5aff6cc8a8c42a0baa5577fc8d42"],["/2022/05/31/冒泡排序/index.html","212c18886f221e9f40f14371fc771f73"],["/2022/05/31/引用类型使用小结/index.html","709489c3b310a0ca36899af011abfb2a"],["/2022/05/31/抽象类/index.html","459b30d32de6f5dd58168f09de432d90"],["/2022/05/31/接口/index.html","b50b02849c515e99b5dc8ac921491c86"],["/2022/05/31/斐波那契数列/index.html","27eda983826b2687040dd195ce7a67eb"],["/2022/05/31/类的五大成分/index.html","39b130bfeb54719e6e923142cb6113c3"],["/2022/05/31/选择排序/index.html","b5f41a0308ce71f3d9a65bee5c7b3b94"],["/2022/05/31/面向对象的三大特征/index.html","ee40d1af8c355176b5186275a8f6ab3f"],["/2022/06/01/01.初识Python/index.html","7b62b886d295a51d377fa2515aad7b9a"],["/2022/06/01/02.语言元素/index.html","771277519409ba2c194d2ade2e4f4a77"],["/2022/06/01/03.分支结构/index.html","da92141a336130a84c575e429e2a624a"],["/2022/06/01/04.循环结构/index.html","ba74d29dd30a1e7e4396109265ac8e31"],["/2022/06/01/05.构造程序逻辑/index.html","6cf7f2d5d0129d0f561b707ebceae916"],["/2022/06/01/06.函数和模块的使用/index.html","4674e21bce6a092409db333c9e504ec6"],["/2022/06/01/07.字符串和常用数据结构/index.html","a15231616912bebf77b298332307a40b"],["/2022/06/01/08.面向对象编程基础/index.html","084d8f7b1c091cbc860cf2445dfae6f8"],["/2022/06/01/09.面向对象进阶/index.html","f842567502f5db9b505a6dc3b584136c"],["/2022/06/01/C语言笔记/index.html","6fef4853d172790971062afbf4a7fd61"],["/2022/06/07/安卓基础-布局/index.html","12032d58c797e7cd6330e59fd6a47266"],["/2022/06/28/C51单片机学习笔记一/index.html","c26fd6b96e31dfd208004bef53b1242a"],["/2022/06/28/C51单片机学习笔记二/index.html","5e35c4b56c7046d6d5a497a4122af5d4"],["/2022/06/29/C51单片机学习笔记三/index.html","e6773966eaa198637908a591ce089376"],["/about/index.html","fb1eae827ccd6c4cf37fb1ca199df99f"],["/archives/2022/05/index.html","3e996bc1db6b98bd613168aa00a82f5a"],["/archives/2022/05/page/2/index.html","48a06de4f563b7239dd7eb5fd6d4145f"],["/archives/2022/06/index.html","05a6c482e5ab6a1bc1c02ef98a234f10"],["/archives/2022/06/page/2/index.html","34cd4d98f78e6173be4e79793dbd6a8e"],["/archives/2022/index.html","435ae153576daed8334d41da5136985e"],["/archives/2022/page/2/index.html","4380eb8c143613cbe961ecc12a410e18"],["/archives/2022/page/3/index.html","9c12f34d0d6236c69e5eb6e5e868c6db"],["/archives/2022/page/4/index.html","3765d8b4cc4f01fce6a5dd0e69d9e000"],["/archives/index.html","b6477161865f62da3f7dbd409a33380c"],["/archives/page/2/index.html","370495c97833cfdfaee880c88ccba62d"],["/archives/page/3/index.html","3281ff7ee366bd0279b5cc8158aca9e7"],["/archives/page/4/index.html","299ad3d9f580daead40fb1a490630896"],["/categories/Linux/index.html","6d04202e640933b624a1c293765526ed"],["/categories/Linux/vim/index.html","69490ddfc18c778dbc1df6e3be4ef5ad"],["/categories/index.html","51622b8d6356b82cbdf3ed3ff74f5336"],["/categories/学习笔记/C-C/index.html","3a001f83b390b78d612806f805223ba3"],["/categories/学习笔记/Java/Api/index.html","0242ee0cf6a45c58d5a8a6eebdb4c8a6"],["/categories/学习笔记/Java/index.html","6c524a0138379da204b23be2649239aa"],["/categories/学习笔记/Java/page/2/index.html","a133268ba5100e593f69f9103ff4c998"],["/categories/学习笔记/Python/index.html","5bd054fbb300393b369bf8808e4080a3"],["/categories/学习笔记/index.html","6013609d9a4d202c18a2ffc35a125d19"],["/categories/学习笔记/page/2/index.html","d36ba64bce399d34149c07f81aba4a79"],["/categories/学习笔记/page/3/index.html","509e14b9cff71a384ecbb22f201827e5"],["/categories/学习笔记/单片机/index.html","074832034e4e4ff5f31b61b5fb879aaa"],["/categories/学习笔记/安卓/index.html","15c6de731fda11cf38d47515e2442606"],["/categories/学习笔记/数据库/index.html","1edc24a69232be2c06761c4ae70713e9"],["/categories/安卓/index.html","2e3cc09e7bfdaf990ef932c839b674f8"],["/categories/安卓/新大陆/index.html","0731facb528f0163d4761743b340c806"],["/categories/算法/index.html","002fe0d0faf1c3d1371f2a54a8cdc3ee"],["/comment/index.html","bebb8903e5e985fa64a291e737e48f29"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","5e008dc606ccddfc52d693200c392320"],["/gallery/index.html","1efe2dd72d4c1432768e2329166d86e7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","5209c4820881c52bbf8d1b38fb873920"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","c6eb816b760f675e01f0b2200a760921"],["/page/3/index.html","ef0690bf12823e64373f9ead649f11c1"],["/page/4/index.html","d46c64b5644b1b47df118f2a2de89cf1"],["/sw-register.js","66ab729e6117e49c80d0f3532b874f18"],["/tags/Bundle/index.html","4717cd953d21c64122880c0811b803c4"],["/tags/C-C/index.html","bc2212ef155760faa53b9ba961fc82dd"],["/tags/C51单片机/index.html","df45cda414fc41276205c90554a693ed"],["/tags/Intent/index.html","c958671509e056f8187c0186609d666d"],["/tags/Java/index.html","4b344cad7719f7e723423a0c7447fada"],["/tags/Java/page/2/index.html","64652038f5f08987ecff1706faeb68f0"],["/tags/MySQL/index.html","7a0f5220953bb67465b28f073e7ad271"],["/tags/PWM/index.html","2e09dd4efdcd1cf4249e3a0e3ea2d8e6"],["/tags/String/index.html","7e494dd4423cef274ed30e5c7a99e474"],["/tags/Thread/index.html","3d6c433745bb0b4a3b87c08e0d9af380"],["/tags/api/index.html","b635a357cb9ede2aef4a3148b433e9a1"],["/tags/gcc/index.html","c5bcb601b86f2de19a738551548e74bf"],["/tags/index.html","bb3c61febf441b48250459d4789d128c"],["/tags/python/index.html","20cd080725afdd03ce7c0fcb4da781a5"],["/tags/vim/index.html","537dc272fc239c4f4c136ec60e3968d2"],["/tags/云平台/index.html","cf696fd221de69c7adbe25682b5fc645"],["/tags/冒泡排序/index.html","1901fb7b3c7758f83b6398c380f7e486"],["/tags/单片机/index.html","07d9bd33cb8f38edd438398df0b9315b"],["/tags/安卓/index.html","cccbf270cb87c06aacdf245b361a1fcc"],["/tags/定时器/index.html","6fda8759476e0ad3ef25419b8e53e407"],["/tags/斐波那契数列/index.html","26c372511b49321d96799e397865ce5b"],["/tags/新大陆/index.html","ba48636684d2dbf148ddc93c36f98add"],["/tags/选择排序/index.html","c4e11600e0a880a5e21b29c31b4962d2"],["/tags/面向对象/index.html","945bb1a64922198ec42ce5c3484d4c97"],["/tags/面向对象编程/index.html","a94c2e6835c5d8a8b205589c7632a528"]];
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
