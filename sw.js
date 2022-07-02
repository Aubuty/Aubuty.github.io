/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","e804729890157a24440e9041ed0011d9"],["/2022/05/31/Android新大陆云平台API使用/index.html","11f660b1316232a890116c985adbd346"],["/2022/05/31/Android页面跳转/index.html","8c5d8292dbf2f4ef2f023587b7f84c8e"],["/2022/05/31/Java内部类详解/index.html","445334833af56cf916492143c00b0e2a"],["/2022/05/31/Java多线程/index.html","2d9e0057191b79593d05b82eb5dde726"],["/2022/05/31/Linux-vim的使用/index.html","9569c78056b1c96d7b97308019514090"],["/2022/05/31/MySQL基础/index.html","fb9c6a168e9c89012940b13bd36e3ee5"],["/2022/05/31/String/index.html","297af994123fcae06d2e8a958b84c8ff"],["/2022/05/31/final关键字/index.html","552b81be0bad5f57fc55752fe8e3f90d"],["/2022/05/31/static关键字/index.html","78cf5e3ff7609f6e8138dd278f58c2db"],["/2022/05/31/this关键字/index.html","72c4ebdbbb32005ebd7e0d402e3bffcb"],["/2022/05/31/冒泡排序/index.html","e0315d715e171a578b1aed0332c55463"],["/2022/05/31/引用类型使用小结/index.html","a015f2e404f4e31680fc2dfd08e25677"],["/2022/05/31/抽象类/index.html","90611ed6e1cdcdd6a0476a117f8ab3f2"],["/2022/05/31/接口/index.html","378a623db0edff22f52216c76c756ae0"],["/2022/05/31/斐波那契数列/index.html","0fef59941abf3a71e0d5015c3eda0e9a"],["/2022/05/31/类的五大成分/index.html","a72752cc170ab51c5a4e82e68d8b5a20"],["/2022/05/31/选择排序/index.html","0c813e78ee546ec4b697cdd708e67d75"],["/2022/05/31/面向对象的三大特征/index.html","f20c5505e860c77aca8450a9a25a14f2"],["/2022/06/01/01.初识Python/index.html","e498389a4280e86c87717782b5b5c324"],["/2022/06/01/02.语言元素/index.html","e70eb99295f2986a08ebd6422d576e85"],["/2022/06/01/03.分支结构/index.html","bf013d716693d99bf5fc94f46540d1cb"],["/2022/06/01/04.循环结构/index.html","8a00ba84b8ae060b3f3d7561070cdb34"],["/2022/06/01/05.构造程序逻辑/index.html","32d941b4b2041ac8e30b18da88cca42f"],["/2022/06/01/06.函数和模块的使用/index.html","2917b5ead10d644f37f8f51022ff39ad"],["/2022/06/01/07.字符串和常用数据结构/index.html","552d90d11cae1ffddb5e053b8df96fef"],["/2022/06/01/08.面向对象编程基础/index.html","ab98f63c7840ed7b8dfe1727e0d3c09e"],["/2022/06/01/09.面向对象进阶/index.html","08b03e7796d62a62cb27f77587fe60f2"],["/2022/06/01/C语言笔记/index.html","467bbcaab415e813109e0edc50b4307a"],["/2022/06/07/安卓基础-布局/index.html","5a475447259ab669a9c779246d23b234"],["/2022/06/28/C51单片机学习笔记一/index.html","9eb8ba3cde8d5909420fea79669bd94e"],["/2022/06/28/C51单片机学习笔记二/index.html","454399f4d5ecd313b14cd0ee92b1c777"],["/2022/06/29/C51单片机学习笔记三/index.html","9340894be3e0b4c96603acad474de0ba"],["/2022/06/30/C51单片机学习笔记四/index.html","a15644f7b7d66579188db2d9790c08aa"],["/about/index.html","8b4609193e362824b4e430d6f6c9bf7f"],["/archives/2022/05/index.html","f1b6138bc17ded4c193c609636bd40f8"],["/archives/2022/05/page/2/index.html","933af8053fc8fa23825c2254797b8acd"],["/archives/2022/06/index.html","358f7e1ef2cd1d41cebbf121db57b7fb"],["/archives/2022/06/page/2/index.html","a4ee2f213d325ad47ed476161c0ef400"],["/archives/2022/index.html","3dd0c32decd39b13ede79a04a49567e6"],["/archives/2022/page/2/index.html","a39e51670b293b302784057d51036a92"],["/archives/2022/page/3/index.html","313d3c8a03ec8adafd30dafd7d6054dd"],["/archives/2022/page/4/index.html","2af200d9aa757eb296672e035344707f"],["/archives/index.html","c3b0b4d39fafec521050a7750e301d22"],["/archives/page/2/index.html","f6a32ed3cee6b4569c45941fce302713"],["/archives/page/3/index.html","6e52625b1db25e167d43bb12558b652e"],["/archives/page/4/index.html","11d3bfe12d7e3fc4c4ffe585c8bb8fc5"],["/categories/Linux/index.html","70cae1c338b50ab44e27dc2b9a85ebe7"],["/categories/Linux/vim/index.html","883ed2c16cffe98c5a588ae106eb85eb"],["/categories/index.html","121604b6ebbe45bb3d62d1c574ec74e8"],["/categories/学习笔记/C-C/index.html","f04ba390850864cc82d0fd5bee86e349"],["/categories/学习笔记/Java/Api/index.html","2339876fd9ece361c27fcfa8bdbfb367"],["/categories/学习笔记/Java/index.html","a3876699be46c04fa86c37472496b1b3"],["/categories/学习笔记/Java/page/2/index.html","6e66e25d850894b56ddcc55410ac4064"],["/categories/学习笔记/Python/index.html","156f22ee38520030246af22fce2e88d5"],["/categories/学习笔记/index.html","86851180209ab02c25fe751db7e3cfc2"],["/categories/学习笔记/page/2/index.html","959e303397c2c279d6ca0f9fc87944c8"],["/categories/学习笔记/page/3/index.html","f167ef4f1f72a1f59c07c027139e19ed"],["/categories/学习笔记/单片机/index.html","13d7acfc5e23c517bbbddabde2706e15"],["/categories/学习笔记/安卓/index.html","b69a625f1e8f7bff39954a3cad52cab0"],["/categories/学习笔记/数据库/index.html","3f4024cb0baf3f2b39a50df6cd703851"],["/categories/安卓/index.html","7ddf1e6eeff98948fd4730a6d86ecd8c"],["/categories/安卓/新大陆/index.html","bfd1856f12dffb96b95d5779f7b0c6f1"],["/categories/算法/index.html","3963ce122de21d1801c2b2ea500f062f"],["/comment/index.html","6faaf9d8bc47f06a8744bca22cfc6680"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","8ada3e447206e51e28b1ea12a0eb1ee6"],["/gallery/index.html","3a9d104627feaf23b42652a9c4795d71"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","53eaa850d662804fda989786c6299a3d"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","689f68eea464f36ad9dd11218fa815aa"],["/page/3/index.html","eb4216d3bfec9c217e33212a78dc5338"],["/page/4/index.html","058296096f522f2cb055efbdbf434959"],["/sw-register.js","36f9b038199e991e4bdd081b315c86da"],["/tags/Bundle/index.html","3b24165a00ea9f55faabac6f7b49ff41"],["/tags/C-C/index.html","15f1945c2bb6f404b0e5fa04bda13947"],["/tags/C51单片机/index.html","4d69f4e5eaf187870d1ebaed8bb7a2cd"],["/tags/Intent/index.html","a1ba5888b60e56f854146798b94d30b0"],["/tags/Java/index.html","306f0c6b6803a1dda72b4051f800f01c"],["/tags/Java/page/2/index.html","06caff4a0004f6699ad10e633bb2d7ff"],["/tags/MySQL/index.html","aeaf463052e1c4ae8f229ad905adbe34"],["/tags/PWM/index.html","938488d0466aab3010b349023d189c35"],["/tags/String/index.html","c4d9c0abd1f591a05280ec192860dd1d"],["/tags/Thread/index.html","58232517c80410efadb3c093e6453f81"],["/tags/api/index.html","29f7762b55b0a319479ff8dc8c4f85c2"],["/tags/gcc/index.html","24c56882d7629880bfe7332acdc8d375"],["/tags/index.html","cf405666010497b09d64f3d74a8e4d64"],["/tags/python/index.html","d619df37b4bc72d7d04fe113e4bae19d"],["/tags/vim/index.html","904b7fac3c903601b3cc7c338b7c82a3"],["/tags/串口/index.html","cc53859fbc437566f7b9ce55afcce891"],["/tags/云平台/index.html","ea543067d4f9fded9db61435ee869933"],["/tags/冒泡排序/index.html","0887557382176e954305d58a677287ba"],["/tags/单片机/index.html","7930b5e87ae1ec76181962ed8926c3a7"],["/tags/安卓/index.html","882a51503fb566a9c90bc6131425b56b"],["/tags/定时器/index.html","ca82014bb3804b2a485d842fac99d806"],["/tags/斐波那契数列/index.html","12af2e792a1ba49402639ef0509b19f0"],["/tags/新大陆/index.html","b1489bb0032a8a94d8b15c75a0ce0992"],["/tags/选择排序/index.html","44166ad6b0606a804726a1b92b266741"],["/tags/面向对象/index.html","d4138425a9d3e9a9f01fd6b328d12676"],["/tags/面向对象编程/index.html","47f487003d2f5e3f66d1e92fc7fc38d0"]];
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
