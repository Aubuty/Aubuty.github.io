/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","2b7cec9e374dacfc5b17bd74fdb2de13"],["/2022/05/31/Android新大陆云平台API使用/index.html","a553b6b847eff4719c4f347ffdfeabf2"],["/2022/05/31/Android页面跳转/index.html","a39047c96b423cf6a1167f5e07e01d14"],["/2022/05/31/Java内部类详解/index.html","3f06cf685fd32928b264899518c6dd97"],["/2022/05/31/Java多线程/index.html","7cd6f3eda74e4eacbb3b7e9193890107"],["/2022/05/31/Linux-vim的使用/index.html","55abe3f51906b3c0d3cd192cd34ef98c"],["/2022/05/31/MySQL基础/index.html","4a458daaac065db8e27b68f23b525df2"],["/2022/05/31/String/index.html","0cd7760b8ccffad61d24503ea649650d"],["/2022/05/31/final关键字/index.html","0b712bcf8268ffc86fb69e91b528a926"],["/2022/05/31/static关键字/index.html","872dc6f82ead3b8b71a33c3b48a30615"],["/2022/05/31/this关键字/index.html","4f48e7552c1997898e058c0e67b00b66"],["/2022/05/31/冒泡排序/index.html","7d822e502c328a8ef1eb27918b421ed8"],["/2022/05/31/引用类型使用小结/index.html","5ce409ad5b4d2cce46bbfd2a8d0169f1"],["/2022/05/31/抽象类/index.html","3fabbc40110e73fea9a5c80d067a7fdb"],["/2022/05/31/接口/index.html","3994ad1ed33a155fcce8339d5c1ba79d"],["/2022/05/31/斐波那契数列/index.html","7a7c6a93a1e52f4554701750ef02d522"],["/2022/05/31/类的五大成分/index.html","04be5742d00426356c2461732d49dd64"],["/2022/05/31/选择排序/index.html","5b4d51d9eb78d8e1efed8ae2ce6bdfa6"],["/2022/05/31/面向对象的三大特征/index.html","b8491bc4cc5de5bff9d42c3541b6fcfd"],["/2022/06/01/01.初识Python/index.html","c829006588a4ab7e33e7986290f6bbb5"],["/2022/06/01/02.语言元素/index.html","b325ab81aab1ff87e7599abf5d4bd5ff"],["/2022/06/01/03.分支结构/index.html","42d49687fb6db1b0cff28761dfcb0865"],["/2022/06/01/04.循环结构/index.html","e9fc091a4f16e5a11f9fa4044aa27534"],["/2022/06/01/05.构造程序逻辑/index.html","03b9ac6b47716aad9d189499d8ec8fab"],["/2022/06/01/06.函数和模块的使用/index.html","48988298a5aed5190281b5488d500aa6"],["/2022/06/01/07.字符串和常用数据结构/index.html","b75d1f43ebf8360d4120bd059770410d"],["/2022/06/01/08.面向对象编程基础/index.html","1f0b3384a01db9abd906d57e4d88bc3e"],["/2022/06/01/09.面向对象进阶/index.html","01b25307a8096d3368de13a1b15943a2"],["/2022/06/01/C语言笔记/index.html","a70c21fc99565fb7a6f79b041696a0ea"],["/2022/06/07/安卓基础-布局/index.html","b08bcf675b90981786568b413889de40"],["/2022/06/28/C51单片机学习笔记一/index.html","4e005d9c6646e9c8d7ecdd8d03c3c3ad"],["/2022/06/28/C51单片机学习笔记二/index.html","610ccbaf49e02779ffcbad639457d8e6"],["/2022/06/29/C51单片机学习笔记三/index.html","9fc727e7745f336d332b1eef7a6eff7f"],["/2022/06/30/C51单片机学习笔记四/index.html","6297a3aa5014586093b8fd4af3584922"],["/2022/07/02/C51单片机学习笔记五/index.html","37660b121a226c700e4117640e765e04"],["/2022/07/05/C51单片机学习笔记六/index.html","460ce52ae017652839a5a39a4a404160"],["/about/index.html","9aa5edac520d408ee7dc76b95234d225"],["/archives/2022/05/index.html","1d313a39a6257a853c720ce017b8b865"],["/archives/2022/05/page/2/index.html","1b062f28aab060934a8661cbdc612959"],["/archives/2022/06/index.html","45ff3632bc7f6c62cbeb3c074a414181"],["/archives/2022/06/page/2/index.html","d4a4ac18efa4209416d8f9011349ce64"],["/archives/2022/07/index.html","e92e99c2b2750a33033012a069664bf4"],["/archives/2022/index.html","8ce5fe244d31980710102f3fc4242e53"],["/archives/2022/page/2/index.html","6c647e6c44fb1ba2952c66bbfbcb58fa"],["/archives/2022/page/3/index.html","497fc7531a0a2bd94b1eb9c2336f75b4"],["/archives/2022/page/4/index.html","9df6fea26fd4e11e55c4c1b38a91d6b0"],["/archives/index.html","e163043d2d96807b8ac2c00f99f03dad"],["/archives/page/2/index.html","37f850864f879bbffd3706371f6dffa5"],["/archives/page/3/index.html","e626e3b84470d5cdf4f9c50b7b9db517"],["/archives/page/4/index.html","1aefbf04ad56497c3e223914cdf33559"],["/categories/Linux/index.html","aa7aff2b7af92b73a70ddbbf211db893"],["/categories/Linux/vim/index.html","074a46aeaa530dff876552a6b7a2577a"],["/categories/index.html","948b2a41251c5b7d1a1915378782f029"],["/categories/学习笔记/C-C/index.html","1b2fe8599adb0a61ee85e333b6e59027"],["/categories/学习笔记/Java/Api/index.html","af965719619d9819d709cfd7927c609c"],["/categories/学习笔记/Java/index.html","561474d2dee56d67ed9947b3f9d0d551"],["/categories/学习笔记/Java/page/2/index.html","123a626ab6229571689fdea0e48392ce"],["/categories/学习笔记/Python/index.html","a27af9a0138c374e6d2d16fc5cc9dc23"],["/categories/学习笔记/index.html","98e0a8b169315c42a8c4cea1b136dde4"],["/categories/学习笔记/page/2/index.html","a907b79c5d2b17c969d7f3a6ee72d470"],["/categories/学习笔记/page/3/index.html","76885faa34a1a8fd10b6a20b5f50f54f"],["/categories/学习笔记/单片机/index.html","b8c7c6b92e8810850dae4eb0deb4b4bb"],["/categories/学习笔记/安卓/index.html","3e4c65b00df5dd307436880ea4570bf6"],["/categories/学习笔记/数据库/index.html","73e6f5ab8ea9bdf360899d3bcfa43529"],["/categories/安卓/index.html","d7b0801a50cc0cdbba69819de651fa88"],["/categories/安卓/新大陆/index.html","505dc0dc6ec83c48c822af7ed0014fea"],["/categories/算法/index.html","5e76fdb8c78e91416f02ed1adc149c98"],["/comment/index.html","db2daa08cef01813c7c4c4919f1bdecb"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","0828739bdfc3bfabebc21b3f0e3f19f5"],["/gallery/index.html","c9d2fca088d7419fcd557f868bee6289"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","63216aaf955cc4520c4b3eab428da577"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","f53580d0c9a51ba8a61bc27af94bfaf0"],["/page/3/index.html","067a6b8a83f8e9947b055aab1bf8e3c0"],["/page/4/index.html","a655ec8f9d47591ed45e399e278363f2"],["/sw-register.js","1a657a680cbb0afb33845b4923b8001a"],["/tags/Bundle/index.html","ad20a693c0ebc96affbac64e5d933a33"],["/tags/C-C/index.html","6133c207f7d53c2f10244b9cb0dc0e5b"],["/tags/C51单片机/index.html","a19fcf2763f9f6710146c2bcfa2834f2"],["/tags/Intent/index.html","d28efb91a02e4570d9d3fd23bb0ce05b"],["/tags/Java/index.html","706e6ea2b62564e7388855367953caee"],["/tags/Java/page/2/index.html","47fb6c3c1c40d2da43e5d79a1f0539f8"],["/tags/LCD1602/index.html","894d9ccb6b294e645cfd0f70ef5b14c3"],["/tags/MySQL/index.html","cced6f50e92632e76cf83d13d8953436"],["/tags/PWM/index.html","788c07318739721ca21cfd4a2afcfc9b"],["/tags/String/index.html","bc639941e5a2ea5e6b4c216f2792411f"],["/tags/Thread/index.html","1a6c8492db5bf85d032d757301a1339e"],["/tags/api/index.html","8d019c667dc98d05bf828b825f9cecbf"],["/tags/gcc/index.html","7d143fb3b088b78258f4ddac09ef69a7"],["/tags/index.html","03e6ee5c760dcc26e49317374f00353c"],["/tags/python/index.html","a2a12cd65ea801351158f2e667656f9d"],["/tags/vim/index.html","cb6b20fd73ca1e8a13de2c04f5538e84"],["/tags/wifi/index.html","5be6cb7333dae6ebe635ce87bbe36ad5"],["/tags/串口/index.html","add5a94271aae859e36e6eee55347d59"],["/tags/云平台/index.html","c545423a7dede44c1064e2b35bc95f47"],["/tags/冒泡排序/index.html","8cd75c9ebde87919364254bb887b4835"],["/tags/单片机/index.html","9f93f33b3e5c31b7cb0d48c1e9f7509c"],["/tags/安卓/index.html","f6b8a98e2e20f9fc108bc220c8b6644e"],["/tags/定时器/index.html","025f08ae52e219be1a93392661660ccf"],["/tags/斐波那契数列/index.html","8e893268a1afd0c0f121d5d259799025"],["/tags/新大陆/index.html","63f861582bdc818b647ad949336c91e0"],["/tags/蓝牙/index.html","fc9958550b68d4d7171426faf735f4e7"],["/tags/选择排序/index.html","77b2484d5525c3f21c1210c29f485257"],["/tags/面向对象/index.html","21fbb3eca6fc680398fb30a3bb685fc5"],["/tags/面向对象编程/index.html","6d51c8ed72731ad1bcf9d00e712cfcd8"]];
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
