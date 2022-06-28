/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","c6c578657075c87abfab261336bcc21e"],["/2022/05/31/Android新大陆云平台API使用/index.html","5baf0e075c179e099f32dfd68155b6ea"],["/2022/05/31/Android页面跳转/index.html","baa476b623c1d845aea51464d6d07c30"],["/2022/05/31/Java内部类详解/index.html","24e27328a6f69379779d3bd062227d93"],["/2022/05/31/Java多线程/index.html","c3ddb60ef6e0bbbaeca8be2756cfd225"],["/2022/05/31/Linux-vim的使用/index.html","d648fcd0649ea20fbb4677e3d1af92f3"],["/2022/05/31/MySQL基础/index.html","d6886c7fa0fffaf365d76e52a2103533"],["/2022/05/31/String/index.html","6fe04aa2255d91eceaf995be85ddf4ee"],["/2022/05/31/final关键字/index.html","cde0e9ac1b1432bbedd82b2348c17978"],["/2022/05/31/static关键字/index.html","4f2f99290adcc556d76eec1a76f6338c"],["/2022/05/31/this关键字/index.html","86a4fcbe01501e2877467d2b74ae9a88"],["/2022/05/31/冒泡排序/index.html","9903d5d335e0f69100cccdc17fe05b47"],["/2022/05/31/引用类型使用小结/index.html","47877ea03949d3df2f5fbe5d41655060"],["/2022/05/31/抽象类/index.html","97d4715f92ea5e10b3e3f2f0e4b8a1ca"],["/2022/05/31/接口/index.html","969b5eea3367281a847ce3a09f445d5c"],["/2022/05/31/斐波那契数列/index.html","67da7ceaf258b794ce4ee40241dcc4be"],["/2022/05/31/类的五大成分/index.html","7b02cdad9e733765941e522838e5ec4c"],["/2022/05/31/选择排序/index.html","02ab46f9f82e5db0f425c318cb0966a9"],["/2022/05/31/面向对象的三大特征/index.html","024fb3d5ab2d6d2a806415d3fca7b108"],["/2022/06/01/01.初识Python/index.html","63e5cd7e895fb93c5b481ce64b5080f5"],["/2022/06/01/02.语言元素/index.html","766eed89f7f1342d1916ff5411676bef"],["/2022/06/01/03.分支结构/index.html","bfb16a67113c8b14b0fe318d1d7b956e"],["/2022/06/01/04.循环结构/index.html","9f1732c369c5ff38b08f61e4bbf3f3ce"],["/2022/06/01/05.构造程序逻辑/index.html","914c026bc98f90fe31e206d164eea2f1"],["/2022/06/01/06.函数和模块的使用/index.html","a48b129ac8385acab051c725acde69b5"],["/2022/06/01/07.字符串和常用数据结构/index.html","ff1586e6452082dd3c0f7fd3b354d6c1"],["/2022/06/01/08.面向对象编程基础/index.html","25ffcb1427ade0a2d4bd522b4d41da37"],["/2022/06/01/09.面向对象进阶/index.html","8d3512c92f539e288be20004c1be5a2c"],["/2022/06/01/C语言笔记/index.html","8d15a5898d5e52f1574c0ca63efe7a95"],["/2022/06/07/安卓基础-布局/index.html","4b4e8101c9989e76deb428a88539ab2f"],["/2022/06/28/C51单片机学习笔记一/index.html","e34d2be48b3a2ef933fa3a05db35baa1"],["/2022/06/28/C51单片机学习笔记二/index.html","623577a5af7bfd78d30e7b35d81ee60f"],["/about/index.html","83428acf28acb3191515f0bd28d0f162"],["/archives/2022/05/index.html","eb1af4248c7436f4ccba47eced2065ee"],["/archives/2022/05/page/2/index.html","fc52d2021f83d92e1c3785f0874495fb"],["/archives/2022/06/index.html","1f06eacfa8ec4636f7a6662085b40247"],["/archives/2022/06/page/2/index.html","a3a03154264c79123131067bd8fcb757"],["/archives/2022/index.html","888e0b794f03ec9827a25dfd56a78c26"],["/archives/2022/page/2/index.html","7d8fa9f38efa4aae2b2651fa0a44c92a"],["/archives/2022/page/3/index.html","171f9e42578054fba13dd8d707b613ab"],["/archives/2022/page/4/index.html","1622d3527469e85bafe94ce1347f9de7"],["/archives/index.html","2a3bc74097c8b3a71fe7069ad9e5e82d"],["/archives/page/2/index.html","a7e26a12c5adbc82176b5d3db3715a5b"],["/archives/page/3/index.html","1ae7f478d345edf82b4bba8025b2dcd8"],["/archives/page/4/index.html","f6e2cffed6478aedb5efb570f6dbc0f3"],["/categories/Linux/index.html","c09c279814242ce92e6638d3cb7f206a"],["/categories/Linux/vim/index.html","93d0f5fba523c517d7f08f21ae318327"],["/categories/index.html","81d8862ed431ce366892583f1bda5b3f"],["/categories/学习笔记/C-C/index.html","e0e4f2da0f6f42190525c51c2976111e"],["/categories/学习笔记/Java/Api/index.html","f54cbf8e926c8743048e928807efa9b7"],["/categories/学习笔记/Java/index.html","81e3dc289dcffa987c767fd43ac39a95"],["/categories/学习笔记/Java/page/2/index.html","1dc84d8e0b62cd1a3c46f1f260cca29f"],["/categories/学习笔记/Python/index.html","b4abf31f3b1ea5f728400426642a7b19"],["/categories/学习笔记/index.html","c07c9f4a19fe3756f1f3f8c1f98813ae"],["/categories/学习笔记/page/2/index.html","972902176fdc38e82417d1881783c049"],["/categories/学习笔记/page/3/index.html","0a9b46a60a4ebea10777e1527ee9f868"],["/categories/学习笔记/单片机/index.html","b080cc512e4e6a4ffeaeb3e56c054727"],["/categories/学习笔记/安卓/index.html","ab1932e01e88551c80170c9dd2ea3c13"],["/categories/学习笔记/数据库/index.html","2cee4d2166051a1b2b41d5e635602d1e"],["/categories/安卓/index.html","8f831e1d2ae48d3633c2da241b9a2411"],["/categories/安卓/新大陆/index.html","849a520cca0dca2e1ca796e4be323c52"],["/categories/算法/index.html","3df890a0d640ac8080e44c8441a30bcd"],["/comment/index.html","866d627fab58dee06b8a3438d546332e"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","e5fd51fbc0bbd69c21f3fec5f13f2c11"],["/gallery/index.html","1b548bcc8a0778305b1fa635ab290709"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","6dd1eba145a3d847441cbd027db1a292"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","3da77c5cf319dc4042c5463419294c90"],["/page/3/index.html","3b5f6a69da4c204853ccda0de7325ad1"],["/page/4/index.html","ea823bb698f68f14300223deae5e7190"],["/sw-register.js","c4d2411589a81db6269454496a2ccd1a"],["/tags/Bundle/index.html","28f142de0bfdcfdb2d10c5efdf16cd5b"],["/tags/C-C/index.html","426039d0d3b734c9588d7786dbbee3a4"],["/tags/C51单片机/index.html","bc07ca206cc6dd0faf93bf5a1317e45f"],["/tags/Intent/index.html","028bbef261541c7750b0a66b5bd34795"],["/tags/Java/index.html","f21c66d65731f8b92f56b248c7fce03c"],["/tags/Java/page/2/index.html","2f275a1e2e133e3431998ae213be2b7c"],["/tags/MySQL/index.html","9ecdb10919a0e97170f4ada65f68408f"],["/tags/String/index.html","8b863557a3e72a84fcd70777982bff7f"],["/tags/Thread/index.html","ec31cece15028440816917d9ddc017b8"],["/tags/api/index.html","f314f562608d1bef2ae89ed6e080a160"],["/tags/gcc/index.html","b252de0d517826eb81cc8f36c2febf8a"],["/tags/index.html","71f0aa3fbff73876c92c9b5b63175f3c"],["/tags/python/index.html","f285d364ce5bd93f4c44d911064478fa"],["/tags/vim/index.html","b00398334305cced416aac5f8d59efbf"],["/tags/云平台/index.html","f0f5ef4d5ddd0718d2bf9d41e7f8ce32"],["/tags/冒泡排序/index.html","77c05294e6b6c77e57df4afb6525440f"],["/tags/安卓/index.html","f39e73af5fd0ee6a1745a5bb41419310"],["/tags/定时器/index.html","baa082ecaa5e744a84858433a41a775b"],["/tags/斐波那契数列/index.html","910a9f95fe896a0c7faa340ae0fcfc49"],["/tags/新大陆/index.html","b8a7f87aacd4a1cd4230cc1a7ec6461e"],["/tags/选择排序/index.html","63a75d60a2e0f1f498cf66ea79ddcf47"],["/tags/面向对象/index.html","c73e095ad4a65c93756889a29b52fec4"],["/tags/面向对象编程/index.html","3530a4b8c551dee2fafc26013695b132"]];
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
