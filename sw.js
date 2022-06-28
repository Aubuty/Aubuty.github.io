/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","775055487bcf6ae5e9926ac7e7ad4560"],["/2022/05/31/Android新大陆云平台API使用/index.html","736741026a991f523665378fd69cf971"],["/2022/05/31/Android页面跳转/index.html","71edd16a5d340ef35268961de777c19e"],["/2022/05/31/Java内部类详解/index.html","ef6574d10b4e9d0e5f34e499b297f4a4"],["/2022/05/31/Java多线程/index.html","a20e949053a92316f03c1ccb7f106c69"],["/2022/05/31/Linux-vim的使用/index.html","a809d87adf792538bd330a19d591e9cb"],["/2022/05/31/MySQL基础/index.html","ab225fa70291f3e2eff1adcd717b7b1b"],["/2022/05/31/String/index.html","cf9e2f0d4f78abcd019003ecce2b22c2"],["/2022/05/31/final关键字/index.html","52a8cde454003d845807f72147eb1457"],["/2022/05/31/static关键字/index.html","eb3a2cfd974f642876e4436201e65f35"],["/2022/05/31/this关键字/index.html","d1e4263f500e87199bd3b3052d4ac1f4"],["/2022/05/31/冒泡排序/index.html","d0b935544606913de6409253e7c51659"],["/2022/05/31/引用类型使用小结/index.html","20de9bb1244bf332eb14c7dda1741633"],["/2022/05/31/抽象类/index.html","00119c1ab8211e70917148bfae7a8777"],["/2022/05/31/接口/index.html","4ce16d7d7e0e1d5b62de20909ae1f3a3"],["/2022/05/31/斐波那契数列/index.html","ff3f46bb3793d223ee78fcbaf5d49fea"],["/2022/05/31/类的五大成分/index.html","115914bb0fd283fdbd30bf06c72fdcef"],["/2022/05/31/选择排序/index.html","d5fad9dd589de8aacd2d641163639995"],["/2022/05/31/面向对象的三大特征/index.html","df5002d913f2af88c251ed46bfb29b7e"],["/2022/06/01/01.初识Python/index.html","1b3aee7a710c19f0260ee20dd173b929"],["/2022/06/01/02.语言元素/index.html","4818456ddf9b462ff29367485b568a3f"],["/2022/06/01/03.分支结构/index.html","f1dd3d16571b986034487e9f967272d5"],["/2022/06/01/04.循环结构/index.html","bc69d7fe7399fd5e56c681ee61b2098f"],["/2022/06/01/05.构造程序逻辑/index.html","a5c83c2c052a5eb205678495b36253d2"],["/2022/06/01/06.函数和模块的使用/index.html","4ba6562305ab2c6a870c680e26161c99"],["/2022/06/01/07.字符串和常用数据结构/index.html","ae8beac4efe73cc3b8673d0ce2f0ce37"],["/2022/06/01/08.面向对象编程基础/index.html","e5c1136836d869bb8eb4afd9baf57e40"],["/2022/06/01/09.面向对象进阶/index.html","3c783fadf6b94b5419ba9650c330571a"],["/2022/06/01/C语言笔记/index.html","8b9cd16c3f5cc4378dc847283f2782ea"],["/2022/06/07/安卓基础-布局/index.html","1db291066f172e17de348808be2a551d"],["/2022/06/28/C51单片机学习笔记一/index.html","762ce4bd9fcfb28e74849bc25f853cf0"],["/2022/06/28/C51单片机学习笔记二/index.html","a4d7e44f4010d74995808b8d06bf1aa4"],["/about/index.html","29e449a031224ea3a64fb0c8a12b07c4"],["/archives/2022/05/index.html","52787ab8416a565b8a6072076221f81f"],["/archives/2022/05/page/2/index.html","53a2eb63f51a6b52825cc5c245e6385c"],["/archives/2022/06/index.html","eacb7465bb69ba15569fffc4c6f9894a"],["/archives/2022/06/page/2/index.html","c19cfe7e1bdb4c7e85221992969cf1e0"],["/archives/2022/index.html","794085835b29113e1e74b27c6d695f1b"],["/archives/2022/page/2/index.html","6fad016bc430a5b970b62fb8a3be6f3e"],["/archives/2022/page/3/index.html","530148d33f4273d5e590391fe138bfdd"],["/archives/2022/page/4/index.html","2eefb303635ae01352b8e5d0120729a6"],["/archives/index.html","7625306dff2cfc38bc88369291d6f5ea"],["/archives/page/2/index.html","d994b09d9e597fb18eba6bbdf156f689"],["/archives/page/3/index.html","20ed5d2ab7e7f421f48a6a80575fd95c"],["/archives/page/4/index.html","8467284a2dfebd6276a1e80c0224e1da"],["/categories/Linux/index.html","af503929931b5319aa58356932079eba"],["/categories/Linux/vim/index.html","0fbc041e0cb3bba32bb935abc00abe66"],["/categories/index.html","418e2a257f1933ae17f0d5715649bce4"],["/categories/学习笔记/C-C/index.html","3178e5cdee75022160946c80c7552c8a"],["/categories/学习笔记/Java/Api/index.html","fad90666e89012f568b9c19dad0855df"],["/categories/学习笔记/Java/index.html","109eb0bc847cca85286cc32b0adc8a89"],["/categories/学习笔记/Java/page/2/index.html","21dcc847faf0a45ba704e97f3ddb9613"],["/categories/学习笔记/Python/index.html","6348050b4ec298dc1d83579c5e81a68a"],["/categories/学习笔记/index.html","95dd9cf9ec8d1c5b8f277886d25f1260"],["/categories/学习笔记/page/2/index.html","29775a09c6113464c1eeb023966a7a9b"],["/categories/学习笔记/page/3/index.html","3ddfbf28c11b8e35300969a464901b8d"],["/categories/学习笔记/单片机/index.html","57e25ca9b12d4d4fa42d0e0d72815b4d"],["/categories/学习笔记/安卓/index.html","68c17cb75598c97422b2c258c2f54b52"],["/categories/学习笔记/数据库/index.html","61ea9092997dae4f6d33c26c9f483fc7"],["/categories/安卓/index.html","8e304f43a77ea72e968ac7ab45b938c8"],["/categories/安卓/新大陆/index.html","679dc7bc6fc4fa8127b44ef665ff4144"],["/categories/算法/index.html","dcaed13de4b573425c0752b88a094f26"],["/comment/index.html","1cd8fcc8e1c9e69d4039e8eb4af58a7e"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","d75bfc51bf3cc121e727d4e72fe9f485"],["/gallery/index.html","4a17a8e0c817b7b0c001f0edef4ad951"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","de0c828ab379782be5533a24c593daaa"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","bf81782a43e4ac1c39e112dc835dce60"],["/page/3/index.html","60b188976aa401f74123512e39da8a62"],["/page/4/index.html","7bce1371b4fe57c327c7b0ec8db26d40"],["/sw-register.js","e9c52faf04b2b6ffa65c1da8dbf97ac9"],["/tags/Bundle/index.html","b459a9f9e5bb53dc30fb5f8e6630362e"],["/tags/C-C/index.html","a8458a59eabf7edbe8d691d9d92750d7"],["/tags/C51单片机/index.html","502556713989d76041ae2028b44c68f8"],["/tags/Intent/index.html","f42bb16a6aa823adbcdf1740eafcc9af"],["/tags/Java/index.html","b3d6dbece1dd270943a5c5390e6241e1"],["/tags/Java/page/2/index.html","5de63cfae32fafd1ec3827de94ce7723"],["/tags/MySQL/index.html","949abc920002c5fb942a00d0236355d0"],["/tags/String/index.html","4b77c834d3e81b127d75eb5906b9dd1d"],["/tags/Thread/index.html","3e58d73589bbf217becea7c5164b12d3"],["/tags/api/index.html","a81ef6f22fd32558f9e3d74cee03bc6b"],["/tags/gcc/index.html","171d364d87e71f68e64deaee7e6b881c"],["/tags/index.html","7395523c3fa03e13562c795b6ffb6b0f"],["/tags/python/index.html","a79f69082f34199c666001637d210ac9"],["/tags/vim/index.html","323947e31d477e765bd93ff9b596ab65"],["/tags/云平台/index.html","83a11071f64accb70ba8c5360b11224f"],["/tags/冒泡排序/index.html","56e19814179fc4a33d1572d7898446e2"],["/tags/安卓/index.html","db2edd92547e48c0da5e553c13b4de23"],["/tags/定时器/index.html","b120c0ac0259d05af057ce505919855e"],["/tags/斐波那契数列/index.html","d67ed3654b6c921279538ad55eeeef54"],["/tags/新大陆/index.html","e652c2bcc792610948ba2929c233285f"],["/tags/选择排序/index.html","10fa8585dccf224089255e02586e3533"],["/tags/面向对象/index.html","00323598fb8376573c86fea44fdc6d4b"],["/tags/面向对象编程/index.html","d06d7a5d584f91c4a4db33d8b1b9d262"]];
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
