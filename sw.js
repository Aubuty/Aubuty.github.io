/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","08f6f35f333ea132b2f1ecc6404a5e44"],["/2022/05/31/Android新大陆云平台API使用/index.html","e3af3f8710babf6dee7e3cecc6df2d66"],["/2022/05/31/Android页面跳转/index.html","36c0740eaf3bf753203f805fd5516647"],["/2022/05/31/Java内部类详解/index.html","f32c1d09a54b27f847bdedc0d325b1b3"],["/2022/05/31/Java多线程/index.html","79188271e96f069c57ee5f60d6783191"],["/2022/05/31/Linux-vim的使用/index.html","d2d486fc800f64b884ea17cdbe3f61bc"],["/2022/05/31/MySQL基础/index.html","ef515548922d0b2558058c2409fbaeb6"],["/2022/05/31/String/index.html","38cf076b16fb47a2169bac84c52ef479"],["/2022/05/31/final关键字/index.html","47b96f11d8d2dab1432a20edecf2c881"],["/2022/05/31/static关键字/index.html","9e504e0e449f18d56023b3d25b2cf4c9"],["/2022/05/31/this关键字/index.html","979a6a02579a787036cd6799ab752b25"],["/2022/05/31/冒泡排序/index.html","6cd5ddf035cf36d5a21385308316701c"],["/2022/05/31/引用类型使用小结/index.html","fef45850dcdf36cd10415f5df6451b3f"],["/2022/05/31/抽象类/index.html","3951d49653f66ae559d4db0dfbfe34e8"],["/2022/05/31/接口/index.html","897b3ee1c339eaf98e04f795ea8b3d81"],["/2022/05/31/斐波那契数列/index.html","53f5d9e53a2c35f9346862a37c0445f6"],["/2022/05/31/类的五大成分/index.html","857a1a167ca9c7b07afb4c885597d323"],["/2022/05/31/选择排序/index.html","5ae83720215ed3407355adca9378e55c"],["/2022/05/31/面向对象的三大特征/index.html","fc4eb66330aef7574e7bcbaedfb22c38"],["/2022/06/01/01.初识Python/index.html","8e3ca84b9f46379551c97177b910ce92"],["/2022/06/01/02.语言元素/index.html","434e908a9561eabde43017b4d7d0dc4a"],["/2022/06/01/03.分支结构/index.html","5618542db0e22ef7a2d004c794774f7a"],["/2022/06/01/04.循环结构/index.html","d9ff30537c660b7265919da39fb0070f"],["/2022/06/01/05.构造程序逻辑/index.html","8cc208aa47cde998c728012a18ad126a"],["/2022/06/01/06.函数和模块的使用/index.html","d7235d77c1f75ac9660870f566d55819"],["/2022/06/01/07.字符串和常用数据结构/index.html","ebe331f5bc6c1139a0d98db06dcd49f8"],["/2022/06/01/08.面向对象编程基础/index.html","bd95674ccea730a6f1bc111e3ddda2f5"],["/2022/06/01/09.面向对象进阶/index.html","971b1fdd245cb62d16a03a167d1c9a88"],["/2022/06/01/C语言笔记/index.html","0295ec4a79704dccda5a52a6e613ba0b"],["/2022/06/07/安卓基础-布局/index.html","966efc74ad0a6d11f9032c8aac82c212"],["/2022/06/28/C51单片机学习笔记一/index.html","92d29c7821a20fe024f6b0353989710f"],["/2022/06/28/C51单片机学习笔记二/index.html","9a0f4ceebb175ea78418dcfbc3991b7e"],["/2022/06/29/C51单片机学习笔记三/index.html","be8e0eea6896545b1fa78b974a732164"],["/about/index.html","ce55c21f2f291d82e03ccbbbd300fa56"],["/archives/2022/05/index.html","1e197fdb07dbd01b05f99ad09e37b73c"],["/archives/2022/05/page/2/index.html","96a85e897fd5426e055eae6c25789ef0"],["/archives/2022/06/index.html","a8e410a09b6b75f0bbc4c19fbb4c58bb"],["/archives/2022/06/page/2/index.html","de30250d3c38833ce8f5d906f3ed8e99"],["/archives/2022/index.html","ec776a4770d03213cd6382b24be783f3"],["/archives/2022/page/2/index.html","8fe050cd7acda6dc3b35979bc2400251"],["/archives/2022/page/3/index.html","f4f51b8a09857f8087e57651d52d872c"],["/archives/2022/page/4/index.html","c76b9c59986ffddffbc7c1624236979b"],["/archives/index.html","d1f3d0b8210e781ab143aa4f5a787a77"],["/archives/page/2/index.html","e0a89d550bc0b233fcd71d9813f9d91a"],["/archives/page/3/index.html","786458cbc3defd1591a08a5609249b7f"],["/archives/page/4/index.html","3ce0015f459701f80f2cce9145f3f454"],["/categories/Linux/index.html","5755c971a30d5e6754efde93468c7540"],["/categories/Linux/vim/index.html","5a182c1ed50e694ba3a63503885daa45"],["/categories/index.html","aab43dea3dc83e6173f63754c3b9bf20"],["/categories/学习笔记/C-C/index.html","06bbb6f9461c02a43f74adecb05f1ef0"],["/categories/学习笔记/Java/Api/index.html","ff8462564931eec980833e5eab844b4a"],["/categories/学习笔记/Java/index.html","2b77c92c2f2b4fd8d86b00188de9ba6b"],["/categories/学习笔记/Java/page/2/index.html","f408409f2c2bef7ca22a526bc8ce467f"],["/categories/学习笔记/Python/index.html","af9e531658d8efd0affbe32789bd45c3"],["/categories/学习笔记/index.html","aacadf8ceee97be8f3e8de76e909a294"],["/categories/学习笔记/page/2/index.html","8d0946134b7edf24536a76880eaa1c94"],["/categories/学习笔记/page/3/index.html","98cb389ab11dd66207b3a384b452813f"],["/categories/学习笔记/单片机/index.html","5f26cbf3573466807092166720a0e9e3"],["/categories/学习笔记/安卓/index.html","a33ad58250058e695f544f57f8b66566"],["/categories/学习笔记/数据库/index.html","ceef7e5673c1c704bee370a200438254"],["/categories/安卓/index.html","8179bf74f11e9e2f87cfdd6bd72bfa1b"],["/categories/安卓/新大陆/index.html","d20ba7d1549805743170a35732964ca5"],["/categories/算法/index.html","bdf2b60ee86889e7ceca4bc208d1605b"],["/comment/index.html","67000f44cdc46813472798124f90c4c8"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","a7774239ac619ad8ef158f4c58f0b9d0"],["/gallery/index.html","0b112105f912bfcdc5c259a83a706a60"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","5c4d41169d84fd6925105d3c550032c2"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","fdc8b972a5847e19c2160d6621af56d3"],["/page/3/index.html","6f3542fa79320c2ecb95284de0f5d8f0"],["/page/4/index.html","12712af8bd570246e064687e5180312c"],["/sw-register.js","143d50a26aed3a5217441d6270ed23b7"],["/tags/Bundle/index.html","f3448cd327af66ae8d2286248f3b9e1b"],["/tags/C-C/index.html","e13e0f242a7342c60eb733d36562c58a"],["/tags/C51单片机/index.html","d510ef67c4ffee81b1c6ee8f46030943"],["/tags/Intent/index.html","8c82379fcadc7783720eb044cc6b687f"],["/tags/Java/index.html","2a1a6efcf9a29c5f0eff6a25ce8a650f"],["/tags/Java/page/2/index.html","4cba9b327980e7f373f5bf87248ced3a"],["/tags/MySQL/index.html","fe78a854f9b2c877c2fee3729802d6a5"],["/tags/String/index.html","2b7ae1d9b096401928cfc23cc915bae1"],["/tags/Thread/index.html","fcd39deb73c9fb5355afc7dc38c53e0e"],["/tags/api/index.html","4aacf9bc3b22373e223dfc53c70a3ddf"],["/tags/gcc/index.html","4208360b6ded0c56af5bf67c27be2ecf"],["/tags/index.html","77911d2a7032c2f0f2a76ef35cf08285"],["/tags/python/index.html","6694a3a79e274bcb7295fb0e5b23543b"],["/tags/vim/index.html","0e31954ed5e4e289eb43a71a596f5039"],["/tags/云平台/index.html","068642493eff470be41f6e0f290b47f7"],["/tags/冒泡排序/index.html","76892ae2a16019ed8093744a3c7958e9"],["/tags/安卓/index.html","83deaa9f1435f4e3c3755f5c8091a4cd"],["/tags/定时器/index.html","92a39c3bdd4847954135588d4a660f3e"],["/tags/斐波那契数列/index.html","5aa57cfe57b280c24bb9f893b0d23d47"],["/tags/新大陆/index.html","8ada8ed8cd961d7766c16eca3efa537d"],["/tags/选择排序/index.html","6d50023bc88e1a8681a074b1c9e33801"],["/tags/面向对象/index.html","fab9b5c0e8e08402110406cab03ec335"],["/tags/面向对象编程/index.html","fab0356476cc8e7d481dbfc6d6020500"]];
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
