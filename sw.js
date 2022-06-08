/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","8e1429a93fbd367745c4bb66ec167df7"],["/2022/05/31/Android新大陆云平台API使用/index.html","2792974de64138c99a66dd904a82d8bd"],["/2022/05/31/Android页面跳转/index.html","f4bb7b726fa07ff8edd6f6175dc0783b"],["/2022/05/31/Java内部类详解/index.html","1d1d865ff90d4e037c556fa1ca54aefa"],["/2022/05/31/Java多线程/index.html","69ef5d6b5160c2dd9a445c2397c81b03"],["/2022/05/31/Linux-vim的使用/index.html","f288203eab374b16ac9474eaf213ca75"],["/2022/05/31/MySQL基础/index.html","550961317b226bb4f71bc0ca6da80ef7"],["/2022/05/31/String/index.html","8480f09977c76ca36f7b0c94688eae68"],["/2022/05/31/final关键字/index.html","36094251871df0c89276a272ead8f906"],["/2022/05/31/static关键字/index.html","7efef4f4bea0409aa223546709ad0def"],["/2022/05/31/this关键字/index.html","740d72e27875f0b0de1d9cb9625d3df9"],["/2022/05/31/冒泡排序/index.html","4a262f22a348e2c8e9eebb794925ed53"],["/2022/05/31/引用类型使用小结/index.html","eebd10b2442d900c99f1b4bf87cdaff0"],["/2022/05/31/抽象类/index.html","06652396678d602ad555c8df23d021bb"],["/2022/05/31/接口/index.html","99c4c7929e4abd70763c49040b3608c8"],["/2022/05/31/斐波那契数列/index.html","1e5cf7b3f1db79829afc64b59b5a07b3"],["/2022/05/31/类的五大成分/index.html","3580c5afbd5368f6196752ef9c3d577d"],["/2022/05/31/选择排序/index.html","ed8e6d5af16ce4917964966ad0c8feb0"],["/2022/05/31/面向对象的三大特征/index.html","42ed6eb0e9862929eb3b4bf841c8150b"],["/2022/06/01/01.初识Python/index.html","323cb6aa3ce8268e3c048c550dfb16a6"],["/2022/06/01/02.语言元素/index.html","fa4d03106b1fad5319e904fad7ab217c"],["/2022/06/01/03.分支结构/index.html","c5b260944f947a26bd190343a9a3314f"],["/2022/06/01/04.循环结构/index.html","2bbabaf6a970a2c5e8bbabc0f6bf6421"],["/2022/06/01/05.构造程序逻辑/index.html","c0496c20aa7d579e859a5e8f1d57dc3a"],["/2022/06/01/06.函数和模块的使用/index.html","3a31bf79cd3636f902c9bcc4c8e9c919"],["/2022/06/01/07.字符串和常用数据结构/index.html","afd25b6d1b61f972dc9ce195276e14e4"],["/2022/06/01/08.面向对象编程基础/index.html","c9a692ef251504c3c89bf75ef273d941"],["/2022/06/01/09.面向对象进阶/index.html","68f25d8cce470a0cbf02b8586fab2124"],["/2022/06/01/C语言笔记/index.html","e4350bcfb6806e4787c5805bae2c23cd"],["/2022/06/07/安卓基础-布局/index.html","abd96059beaca910876a2b3d86eb3417"],["/about/index.html","d404c14acf5d2e1926593e782d0306bc"],["/archives/2022/05/index.html","40caa179881ddd5d77a2e6df4900191d"],["/archives/2022/05/page/2/index.html","fb286fe2db20bc9d1c4c6e70cc72813d"],["/archives/2022/06/index.html","b9c93440f4bb66b0f08a752707d1346a"],["/archives/2022/06/page/2/index.html","dcf1a9d4520b7dc066791c0169da6b33"],["/archives/2022/index.html","0ba551f6df7d2f9b12548c2c9b7e74ff"],["/archives/2022/page/2/index.html","91b3e7dcf17c0600a8bde434e1fdad96"],["/archives/2022/page/3/index.html","59ea5e28457fb859726986cf512aba1a"],["/archives/index.html","a2e552b77933e670405a0f5c6a9ccb79"],["/archives/page/2/index.html","15c910195affd42168d1e32021ce8158"],["/archives/page/3/index.html","5a828abd2a546775d5cb14cbda63c224"],["/categories/Linux/index.html","e8035940a936c0d0c79003fc2a49728b"],["/categories/Linux/vim/index.html","1750d76ab4b1fb3af4d7d42528b29071"],["/categories/index.html","b54eb55ee79e78e918a1d528d5f21217"],["/categories/学习笔记/C-C/index.html","ada57c669e101e49c76e53dde4b6f44a"],["/categories/学习笔记/Java/Api/index.html","bcefd00fb70763bf45e362bc9f08acba"],["/categories/学习笔记/Java/index.html","07e9065bfb7165d8a2163119e1622ebc"],["/categories/学习笔记/Java/page/2/index.html","939ee5e5cb22fbc385d18bdf10705475"],["/categories/学习笔记/Python/index.html","44baa33cd9133f1928f75b8cf9fe148f"],["/categories/学习笔记/index.html","4dfd262c3c9e40e4e7ac0855e66f5e31"],["/categories/学习笔记/page/2/index.html","77287e529692ce8c0efe3d22ccaf0f46"],["/categories/学习笔记/page/3/index.html","55c4cfaa4ab8c0cfe4f3797d55dee2d8"],["/categories/学习笔记/安卓/index.html","0b9acaecc2099c48e01d184dc81d3ede"],["/categories/学习笔记/数据库/index.html","e710b896ca12e7d885b1d2882dbf88fa"],["/categories/安卓/index.html","cf1527c707c83077a78ae13774458047"],["/categories/安卓/新大陆/index.html","d917d1fdd8a72975339d9e9d25d80710"],["/categories/算法/index.html","e0d72b8c639be931770cf081e5b90b32"],["/comment/index.html","c06e1c46970f61e6f2a9f7f83378d519"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","8b9ccb7eb53ea5535991cf38d78762cd"],["/gallery/index.html","b3d744aa7118b75caa57b016340d46fb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","c32ff43e0a282f106b9a22a6281113cb"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","6e42abe19bf9f43723898665201275ea"],["/page/3/index.html","6f8b35188531171d73dfef62c7cee1da"],["/sw-register.js","956e80c6881b520f04d0199502d29f50"],["/tags/Bundle/index.html","5a81ffd1549a280c9fb13353264a1b3b"],["/tags/C-C/index.html","b9367cf4eae182ccf3c58354054cf88b"],["/tags/Intent/index.html","7c474107011d1f42cb9439c458386fca"],["/tags/Java/index.html","57e7f84672f0c0572f270193384c1a1c"],["/tags/Java/page/2/index.html","cfc524dbf5a536f22057ebf574d8fea7"],["/tags/MySQL/index.html","b033a3fbad6b3be14eb7eeaf74f4c9df"],["/tags/String/index.html","bd3e80f6d175a1103d78b56b9a100320"],["/tags/Thread/index.html","1ea11119a9de5ce549537d791293a2bf"],["/tags/api/index.html","e7bcdce522d8f905986e7359c0358c08"],["/tags/gcc/index.html","cece17d3e509ec3bbfe84d2b8ccb8767"],["/tags/index.html","3219718e6bb2942cb45ee7561c87b357"],["/tags/python/index.html","31e6ce23862883c15dabdba4ea06fdb2"],["/tags/vim/index.html","8117c708a7fbb9dd227365877678b28b"],["/tags/云平台/index.html","b14e89146d492f2c00e389b4d66f24b8"],["/tags/冒泡排序/index.html","42dfa77fd416705b1e46d281dc1e601b"],["/tags/安卓/index.html","45c92e0f79a147233704f27bc5a384e1"],["/tags/斐波那契数列/index.html","b023e32d31d4ac3f706e2ad76964d47a"],["/tags/新大陆/index.html","1b2cb82fb7805f2b3dbd7269b45453ed"],["/tags/选择排序/index.html","795175dc0342e3731943ac73bbdb7476"],["/tags/面向对象/index.html","044eb5ceb0936a549be57a122b2c27c9"],["/tags/面向对象编程/index.html","45337f38c35cc35b752c2c63fdd70975"]];
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
