/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","a4984492d1de95b6021058f723ff1402"],["/2022/05/31/Android新大陆云平台API使用/index.html","48ad53e126a75cbe5b7a4ef5c5481728"],["/2022/05/31/Android页面跳转/index.html","a8090a3404159c005a27e3b1404ebdbe"],["/2022/05/31/Java内部类详解/index.html","2903c5082e6e8bd70a2eaed8b2fe9d9d"],["/2022/05/31/Java多线程/index.html","50930de22374b95a77a59cbb5a6bdd95"],["/2022/05/31/Linux-vim的使用/index.html","ae4f2362a3b656cb470e719fe8941a4b"],["/2022/05/31/MySQL基础/index.html","d95b42bc4926c9b6e00fc5e1c5cfcecd"],["/2022/05/31/String/index.html","5aeaa98dd1fc46839383eedea47e1b3f"],["/2022/05/31/final关键字/index.html","8d6d76464c40731bf01f29c939e50454"],["/2022/05/31/static关键字/index.html","58b2ff0580a658f31e7b9edaa968ce12"],["/2022/05/31/this关键字/index.html","93fa98b65040e3c3944f0c21a2f93c9e"],["/2022/05/31/冒泡排序/index.html","a665eddfae1a5b13f38a05270d90381b"],["/2022/05/31/引用类型使用小结/index.html","405c7c7ee930c661ce4c11b4aa713d6c"],["/2022/05/31/抽象类/index.html","5cfdc1e6f3ca132ca879829968282240"],["/2022/05/31/接口/index.html","4b44e503fb21d82287ea4b09a4aaa9d3"],["/2022/05/31/斐波那契数列/index.html","62c264ab80857286bbd450f186f188d3"],["/2022/05/31/类的五大成分/index.html","99206a2a698c7be41348d86bfcdd4f93"],["/2022/05/31/选择排序/index.html","f2cea6a663943d4eaaf03215cd7b2560"],["/2022/05/31/面向对象的三大特征/index.html","c665001d1f53a41623628c2fda666d9c"],["/2022/06/01/01.初识Python/index.html","1f46c5f5a1ef3175448b73459c63e6ea"],["/2022/06/01/02.语言元素/index.html","515b7536c4ab473f526f451d0a701704"],["/2022/06/01/03.分支结构/index.html","e874633e164831583abb3480350d47cd"],["/2022/06/01/04.循环结构/index.html","c961400176009bd8a9854daf8bc2f122"],["/2022/06/01/05.构造程序逻辑/index.html","5efe0345c7c5d2c8afa478cebada9eb2"],["/2022/06/01/06.函数和模块的使用/index.html","a0e8d7d1d116389ce6d38d7522224ff6"],["/2022/06/01/07.字符串和常用数据结构/index.html","8f54e04f2fb53bb12eebbcb3525802d1"],["/2022/06/01/08.面向对象编程基础/index.html","49ebf54b52676511c3e5f81fb8111f5c"],["/2022/06/01/09.面向对象进阶/index.html","d871f4782673fdd9045e872c81afd29d"],["/2022/06/01/C语言笔记/index.html","0435048cc7afd05af6e5d56579fa7f67"],["/2022/06/07/安卓基础-布局/index.html","a768fb8c4425cfacf811e825675051fd"],["/2022/06/28/C51单片机学习笔记一/index.html","66c1ff5ada82654b55fd2c0b98782f29"],["/2022/06/28/C51单片机学习笔记二/index.html","5094caa287ea4aa44d0f5d98dd7682fc"],["/2022/06/29/C51单片机学习笔记三/index.html","ce56e5d10b9da81547003d72c33e74dc"],["/2022/06/30/C51单片机学习笔记四/index.html","dae2244ab170adf3532ddfae8d684ae6"],["/2022/07/02/C51单片机学习笔记五/index.html","6361c6e70c418bcc9c5055ee35492133"],["/about/index.html","257c0802ad1003b831c25bbd0118e365"],["/archives/2022/05/index.html","dfa25e3baeb5431cbaea1aaa42f56fc4"],["/archives/2022/05/page/2/index.html","d5c0371b6f3dca613c3cb2cdde4e056c"],["/archives/2022/06/index.html","42a2f688411c1109f20d80614d574c7d"],["/archives/2022/06/page/2/index.html","e63530977baafb9d494a35e9aa1f1ccb"],["/archives/2022/07/index.html","40f5221baf44cb3dac09fe8bf80601e5"],["/archives/2022/index.html","3c7b435ae91d7270b7d2e0bff74e79a2"],["/archives/2022/page/2/index.html","18c8660151f500946a0c1c5f86b1adba"],["/archives/2022/page/3/index.html","bcaa0836f5c2df827fef1ce0f4903e29"],["/archives/2022/page/4/index.html","48bed3300dd2fd19180994cae4489d9f"],["/archives/index.html","e66852c96e07cd8733745ff46232e320"],["/archives/page/2/index.html","4a01441573df1b6e40d8e8623b508d6f"],["/archives/page/3/index.html","7854bd434a6a944817bb672802503b0f"],["/archives/page/4/index.html","5d827f03a5cce64d6dc264a7cdcbf2be"],["/categories/Linux/index.html","6ee094516453b6926336bee70a0f25ac"],["/categories/Linux/vim/index.html","71725533c9bc67545fa6c93784575ea9"],["/categories/index.html","9a28fe7a8670d7f8b19886e8fc11bd55"],["/categories/学习笔记/C-C/index.html","eaf8dd7a51998793810d1ab5c008731a"],["/categories/学习笔记/Java/Api/index.html","f9938eb0142a630af8a63b4805d99143"],["/categories/学习笔记/Java/index.html","7f501c8d1db312213b9237398aba54c4"],["/categories/学习笔记/Java/page/2/index.html","d5ce1d5f12cd731757edb9874cac9aff"],["/categories/学习笔记/Python/index.html","5c3b7fc8228d3847fc20b12782a2732e"],["/categories/学习笔记/index.html","74dcca8d154f371e192178e100f5524b"],["/categories/学习笔记/page/2/index.html","41315c124bc3713697b7ae26173303f1"],["/categories/学习笔记/page/3/index.html","554572fd83ea0c1e2b0b88c6befeda5d"],["/categories/学习笔记/单片机/index.html","6e15a1cef8d56eb8903e38fea6b9ac67"],["/categories/学习笔记/安卓/index.html","9d227eac689018d57f78da896eb1aa0d"],["/categories/学习笔记/数据库/index.html","73420c8387feaf1fb513e82970babc52"],["/categories/安卓/index.html","977391b4aed98857e3797e93ff158aac"],["/categories/安卓/新大陆/index.html","44a53ff160744920723fed0531f0c7c2"],["/categories/算法/index.html","95627c57e10c2abeec3bd624ca432082"],["/comment/index.html","26c2b7494590ba680676e738cf3d4370"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","65146119c0c86da9e6fc474ccfb96316"],["/gallery/index.html","c15d24e87c2b745496ae39713d51e833"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","e2271fdda9361c4cf5c28d94e797c8fe"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","07207dc8e22d9f3bf4def0b482db724e"],["/page/3/index.html","831d7360a6d8bc988198c2178a66fb3d"],["/page/4/index.html","769e5a5afe6c560c90b5540f614f18e6"],["/sw-register.js","bf53dd99313ebe04e5c37188016b079b"],["/tags/Bundle/index.html","14bfc474e5977edf317de4dfbda5e534"],["/tags/C-C/index.html","7c43382605e2fc4557d860b1ea899f70"],["/tags/C51单片机/index.html","76440f55561b75898cf853510bb02c8c"],["/tags/Intent/index.html","0e6b67d40e7b0d0276d68d1885df2e0d"],["/tags/Java/index.html","ff05241ca622ce17e63f8ba49f060fff"],["/tags/Java/page/2/index.html","87fd75f7c3810ba90e21fd407e2a4bbd"],["/tags/MySQL/index.html","2009718eb9cbef218eef2ee12ce8e0fa"],["/tags/PWM/index.html","052d015674db559cd1b6dec65239468f"],["/tags/String/index.html","8b71909ff99b16a483716b1468bbc18a"],["/tags/Thread/index.html","de014cfa218e84318fc1410a760fb07a"],["/tags/api/index.html","43de7b1f9e9c3a8ae909d282ed4ca213"],["/tags/gcc/index.html","576a87d12e635d766dac47d21cd055d1"],["/tags/index.html","80508de54bdf6cc0dc99b3a137186714"],["/tags/python/index.html","7350b10f7c6597101b5b9d32b2f93fcb"],["/tags/vim/index.html","72a6f1e4ae576323e1bad3cd3ff2c4a4"],["/tags/wifi/index.html","09b48ed5f59216519426586fc33ab14e"],["/tags/串口/index.html","f919d3188d026a1d158d610491a7a203"],["/tags/云平台/index.html","9689b1cd2ad460e63ea327c6b887fa42"],["/tags/冒泡排序/index.html","f39944d292f701613df1610ba7521c55"],["/tags/单片机/index.html","a7861bd4d0dede4361b4defa13eac012"],["/tags/安卓/index.html","4e0af56d1d7e92c4da5b3830d4bd97a7"],["/tags/定时器/index.html","9c59e06db3808dfb28536c1fc25fd9dc"],["/tags/斐波那契数列/index.html","9b06f1d49f1fdce5d38f0680dbe1c04f"],["/tags/新大陆/index.html","ce8c85ca2131b4b78e96c65119e11ada"],["/tags/蓝牙/index.html","ab422f92253e0826622b9e1ccf19278d"],["/tags/选择排序/index.html","cfebb176749c022d6e3c9b4b143689eb"],["/tags/面向对象/index.html","379e58dcce3cb3b6f6e19441fcab942e"],["/tags/面向对象编程/index.html","1d3c483fa2c3b8716ec2ed1670412751"]];
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
