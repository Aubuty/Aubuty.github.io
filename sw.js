/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","22b3912a10ff389b0c6a323483ecda81"],["/2022/05/31/Android新大陆云平台API使用/index.html","69305cc6271aaf7e1076c466781e3483"],["/2022/05/31/Android页面跳转/index.html","0462ee6564b47ea6acf68be68ecd7328"],["/2022/05/31/Java内部类详解/index.html","10fd21168e13a024aae8bdd45c26f567"],["/2022/05/31/Java多线程/index.html","3f724c17c209a23d4e4d8730f2c1a31d"],["/2022/05/31/Linux-vim的使用/index.html","96cdab355ecaaee72029d4ef66fd5dda"],["/2022/05/31/MySQL基础/index.html","c65f7b327ffd0f79a67c517dfb790637"],["/2022/05/31/String/index.html","63dc4de761efdbe57ed78be394ea9b54"],["/2022/05/31/final关键字/index.html","daddcfaeb161f8b67ffa314a976b38aa"],["/2022/05/31/static关键字/index.html","af1dba6c1e175d6a0ac91caf80172329"],["/2022/05/31/this关键字/index.html","afe61643394bb15bd5fcd35e1afe57c1"],["/2022/05/31/冒泡排序/index.html","5c859c77b567eef9c90e8a0d22782a3d"],["/2022/05/31/引用类型使用小结/index.html","eede43e9711edb7412dd2351fc06ebf7"],["/2022/05/31/抽象类/index.html","84dbaff32048e8cec2a610183efcab18"],["/2022/05/31/接口/index.html","4f0c5f4a4f0901f2a7cc8659c8b27c54"],["/2022/05/31/斐波那契数列/index.html","b2aa0acdbc3502e9326f71c7fbc5ea56"],["/2022/05/31/类的五大成分/index.html","b265b42e39606661f751eb6773e44bcd"],["/2022/05/31/选择排序/index.html","1168c2af8ded8b68fdaeb2f584940d50"],["/2022/05/31/面向对象的三大特征/index.html","b14eb81dd7dd813d7e6a65f06f58c652"],["/2022/06/01/01.初识Python/index.html","66aeaeafe4e04ebeadc7df0dc3642d10"],["/2022/06/01/02.语言元素/index.html","89ae626174bf217c852fca4ab6518ec7"],["/2022/06/01/03.分支结构/index.html","7f1c94d9c7a0d3db89bd6dc3be5ce085"],["/2022/06/01/04.循环结构/index.html","a82e45843ad1deb824f1b45315142777"],["/2022/06/01/05.构造程序逻辑/index.html","0753f66213ca83ab6da72eaabbf6df4d"],["/2022/06/01/06.函数和模块的使用/index.html","88d0100a634cdd3d44e86c21d85d8907"],["/2022/06/01/07.字符串和常用数据结构/index.html","4a80515470a771cb7cb0e3aaf4416f1a"],["/2022/06/01/08.面向对象编程基础/index.html","036a5605ded068060b99dabd7da8cad9"],["/2022/06/01/09.面向对象进阶/index.html","64bb6220780b50a7c243a866198166d7"],["/2022/06/01/C语言笔记/index.html","9c0802f4f6567fc1176e57270806ebf8"],["/2022/06/07/安卓基础-布局/index.html","f0e8d77fb99698d5ff5f12b4ac902366"],["/about/index.html","7fdc6e1fb4c867ee28a51a0ddc6c4315"],["/archives/2022/05/index.html","6fec2a2ad88692afe31ed60e31761ddf"],["/archives/2022/05/page/2/index.html","3f11b18eabfb883d2892d634606cf47e"],["/archives/2022/06/index.html","155285dd13c0cb3a080fb2550f1a90e9"],["/archives/2022/06/page/2/index.html","2733fe8d338259b98b2d04beac21fcd3"],["/archives/2022/index.html","1310c013b64350a8b1a787564177c00d"],["/archives/2022/page/2/index.html","7867cc49a4dfce626443562b096fd870"],["/archives/2022/page/3/index.html","6302e0d7f13904a560d4bf5581d43db8"],["/archives/index.html","75ba9612c74c6cb3f124a28c0daa4df1"],["/archives/page/2/index.html","836cec1307b9e534339cdc9aaf7de7bc"],["/archives/page/3/index.html","640febf1d9fb5317dec5fc5f1e43e8ee"],["/categories/Linux/index.html","6a79fdfb71dea75c38c513e121df4ab4"],["/categories/Linux/vim/index.html","8befb4a68fe5d9302078ebf98b14ddf4"],["/categories/index.html","3bce31ba8009e3e12dae19ce13e76b3a"],["/categories/学习笔记/C-C/index.html","480915d4b8056861d734061015e2823c"],["/categories/学习笔记/Java/Api/index.html","6053dd3a3550076d691ea7d820a4a4ab"],["/categories/学习笔记/Java/index.html","b74cd44c591da7ff7660ee5f707ab2d9"],["/categories/学习笔记/Java/page/2/index.html","13dbc5071b66c39265df8f329f01ef9f"],["/categories/学习笔记/Python/index.html","85afb53c5319374dd5c77be44e1c76a2"],["/categories/学习笔记/index.html","ffef15f6be099486e90dc778e6767007"],["/categories/学习笔记/page/2/index.html","f134b4e59d9aac9fb8001d9f403218a0"],["/categories/学习笔记/page/3/index.html","dc94d5827590ba6c252732c4eb2c77c1"],["/categories/学习笔记/安卓/index.html","e24823d58d832df5e98f63e4c0e61bf0"],["/categories/学习笔记/数据库/index.html","ee6d2630a087cb01250d63f16223f79c"],["/categories/安卓/index.html","d5942c6588a76c2970cd8a397ca51a2e"],["/categories/安卓/新大陆/index.html","969b97f187bfa1a91add5c5bf25fbb25"],["/categories/算法/index.html","38667fdd0feb522688b8b4252466a52b"],["/comment/index.html","03b563e071bc08320403acde6c4de048"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","c22b347491828338f08eea8b7dd0946c"],["/gallery/index.html","d817780228b303576ae8d13fbe6653b8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","a0c65a43e79f7cb270f6eb358b032f33"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","8731107a173118197686ebf57b5d0e5b"],["/page/3/index.html","17cee658e398dba8002b59dbcb443a7c"],["/sw-register.js","58a6d70bfdd66c65766d11c48a593eed"],["/tags/Bundle/index.html","67f005a186d034cc5d7a8db31854e007"],["/tags/C-C/index.html","75317c8c1ebffcbbd9e1a9531b216649"],["/tags/Intent/index.html","ae744622c394b956a296e3b3bc03b765"],["/tags/Java/index.html","657cfd6eef7b6c5007cfa82b08d00b66"],["/tags/Java/page/2/index.html","1d45ac3e485ac6b890e2fd2265df094a"],["/tags/MySQL/index.html","f9b2e12ea38cc15821373904dfffc35c"],["/tags/String/index.html","4951a47e3576dd3ea984e6e188bdfad1"],["/tags/Thread/index.html","a02277438befbf48da3bb95cf7840f0a"],["/tags/api/index.html","1f8d251d7bac77a5ca8e57d07ae6f710"],["/tags/gcc/index.html","0c5db3f22a309d74fb9767af91640dcc"],["/tags/index.html","aeff2b8b643882ef9752eba4c93d2d8d"],["/tags/python/index.html","66457008314384eda0a7fd8e00642e2f"],["/tags/vim/index.html","d25920ab1489aee38fac0bc3fd43c6dd"],["/tags/云平台/index.html","0aba943f3e5436b795a935999695d085"],["/tags/冒泡排序/index.html","b4d24f18548568c364d8671f852457da"],["/tags/安卓/index.html","beebd2ea38eaaf8b33d6cf3d06be80fa"],["/tags/斐波那契数列/index.html","fb1b5ac43e5d359861fa1827fd19cf99"],["/tags/新大陆/index.html","2ad863d6751b7f613954909dd3ca7d14"],["/tags/选择排序/index.html","24f41c471f2bb129c65a3ce60482e2dd"],["/tags/面向对象/index.html","6c65ae921e1de6a3b79ca11ee24eae3c"],["/tags/面向对象编程/index.html","d7c800ced5da7354ba57e53a21b5000f"]];
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
