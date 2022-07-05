/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","30ea96a2da2f8a2243aa6b41787d1884"],["/2022/05/31/Android新大陆云平台API使用/index.html","6fe2b5a04a48954b64a417d9895a45e8"],["/2022/05/31/Android页面跳转/index.html","604942aaeb80683a334e12a9e4f8343c"],["/2022/05/31/Java内部类详解/index.html","c207149cc7e9654888bed5c7a803802d"],["/2022/05/31/Java多线程/index.html","9e6910d461209fa1f140f48f54235ecd"],["/2022/05/31/Linux-vim的使用/index.html","cbdc29b60a6451ed5462739df7bfbbfc"],["/2022/05/31/MySQL基础/index.html","addfdf39a99272cff0ce82d7231ef42f"],["/2022/05/31/String/index.html","dcd7e177d8e177140592c731490883e6"],["/2022/05/31/final关键字/index.html","a8b05c9f6cf631c781f2225f6fa2fb33"],["/2022/05/31/static关键字/index.html","55f690932ae55459972258f90bcc6e64"],["/2022/05/31/this关键字/index.html","8584246a46ef7c6e95db6fbfc7c9e942"],["/2022/05/31/冒泡排序/index.html","7f48893135cfaa067ecf824081c17da6"],["/2022/05/31/引用类型使用小结/index.html","77157e70023085b39e15378143a069ce"],["/2022/05/31/抽象类/index.html","242e4c0e6fa1973ac11c597fa1d3d6e5"],["/2022/05/31/接口/index.html","79a22a6bb0f17fc5118754ac8bf38d10"],["/2022/05/31/斐波那契数列/index.html","9414f8a67e2d9e1823998ef6490dff5d"],["/2022/05/31/类的五大成分/index.html","0e0916177c43082e8e4f1bec66f85912"],["/2022/05/31/选择排序/index.html","7a8d20fb10130f215a500ec9419e7e5b"],["/2022/05/31/面向对象的三大特征/index.html","c2e2bd9ea45792cae98c193a9f998d2b"],["/2022/06/01/01.初识Python/index.html","49011827a784ad3edbd3a7aeaaac24df"],["/2022/06/01/02.语言元素/index.html","2d98d0da3a8108950e0a57b220164ca7"],["/2022/06/01/03.分支结构/index.html","085af3bb1d96660be7d7e4e5c5f5b1cf"],["/2022/06/01/04.循环结构/index.html","d2ce435e50a64af1fcae5e35c16a3cd6"],["/2022/06/01/05.构造程序逻辑/index.html","695ec61a5ba0e7d9060b41bc77674bd7"],["/2022/06/01/06.函数和模块的使用/index.html","47f3fc47c19071758ae03e2d8e06f47d"],["/2022/06/01/07.字符串和常用数据结构/index.html","9380b35f4bcb5ed1899ec2f671cc4123"],["/2022/06/01/08.面向对象编程基础/index.html","20c8721ceb5dd7a6221f640abdb5bbff"],["/2022/06/01/09.面向对象进阶/index.html","20eea449500ed47a3c7f12310a08fef5"],["/2022/06/01/C语言笔记/index.html","83888e2e20d8c35cd64c9571ec82a34f"],["/2022/06/07/安卓基础-布局/index.html","033a9ef64b425b991dbd0e566517102c"],["/2022/06/28/C51单片机学习笔记一/index.html","face6b8d14d36770900af4e21540ae6c"],["/2022/06/28/C51单片机学习笔记二/index.html","e6e543dbe700db60bd000821573e5770"],["/2022/06/29/C51单片机学习笔记三/index.html","1f04f2fd3e3b9c639c4f4bfc22bfffaa"],["/2022/06/30/C51单片机学习笔记四/index.html","1c9c5159291856952a8aa2deae904bb6"],["/2022/07/02/C51单片机学习笔记五/index.html","7de1880cffe0c729f26704b5b30b06c6"],["/2022/07/05/C51单片机学习笔记六/index.html","30da07e2b2d7ebdd39a54caf1ce150d3"],["/about/index.html","c5eb9b996870193a914d9a8ac9f5a39d"],["/archives/2022/05/index.html","0b8fc71bbce7e27fc07659325a1d629f"],["/archives/2022/05/page/2/index.html","6777a7b68b8382cf41ea320fb25a5649"],["/archives/2022/06/index.html","74bdbc1c2029b513b1f0f25c55e130db"],["/archives/2022/06/page/2/index.html","89bbd2ef906c52d72ed2eab28d048ee1"],["/archives/2022/07/index.html","b7d84a57bce72f5cf084b76f2d6c2aed"],["/archives/2022/index.html","7c0f118d3eb5fc57f0e5ecfc6d119c1e"],["/archives/2022/page/2/index.html","3ee0b307333424f526c5e1cf77de06c0"],["/archives/2022/page/3/index.html","d2a83ebd28e4b8b384486edd06c23d11"],["/archives/2022/page/4/index.html","1cc1152223620276ef0fe717ae1bf0ec"],["/archives/index.html","5bb4a69debd5bad32382588df5fc90d9"],["/archives/page/2/index.html","ad4e52e51bf645c9da9589db94cf9d43"],["/archives/page/3/index.html","1c0cbdc1e3a1b37f7869043b562fafc1"],["/archives/page/4/index.html","45c4aedcb09da1ea1bd935f8c1877b5e"],["/categories/Linux/index.html","78521656946b6994c055ee94fef4c2e0"],["/categories/Linux/vim/index.html","9a02fceeda48a57088486e5776ce9395"],["/categories/index.html","5b61218d5fb8c32989396762bcb1ed39"],["/categories/学习笔记/C-C/index.html","5478a65663ab590eebb10572f18d09bb"],["/categories/学习笔记/Java/Api/index.html","ea9c98fe39c571c176f3eae217be24b3"],["/categories/学习笔记/Java/index.html","c683f61171595c454a4415f7179d3ecf"],["/categories/学习笔记/Java/page/2/index.html","9fd27f3e8be345f7473c8551311109a2"],["/categories/学习笔记/Python/index.html","b1c02a9b70865eae590a14197406f423"],["/categories/学习笔记/index.html","29a73fc3db252454fe8fa2217fbe4fcb"],["/categories/学习笔记/page/2/index.html","a49af693e5ac667aacb5ddff4da460e9"],["/categories/学习笔记/page/3/index.html","15c61530a813666d915bda7cf2ed8d5c"],["/categories/学习笔记/单片机/index.html","1dc4b99e183eac3338f1a5af416257b5"],["/categories/学习笔记/安卓/index.html","840fedc6dba056a3bf52adafb5c2f4e7"],["/categories/学习笔记/数据库/index.html","05b6e366af2e4b45c18182c651c7bb50"],["/categories/安卓/index.html","e93c22fe350086233d4adca984f7f937"],["/categories/安卓/新大陆/index.html","7c9cf1e38e7aae731fad2981aa0b7891"],["/categories/算法/index.html","f7eac958ca3c1ce1b3ecf09b88e690ff"],["/comment/index.html","d7093fcaf6b690f88c570fbf58866e3c"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","b43226a84ceed13fd3b1f95ba2d46258"],["/gallery/index.html","862b7dbc7aca6fb0ceba9a85dc56c4d1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","2852bae4ca838e6daab16df258df6151"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","0ff2aecadaac794e5979e7e00d7cc99f"],["/page/3/index.html","7f1bd2ff4bc339834fe7421e18041448"],["/page/4/index.html","21a5b046231b801d413777cfe5f897eb"],["/sw-register.js","42342bdb57b5ee1687a4e1898a1e8241"],["/tags/Bundle/index.html","4cc5163bce9cf2fc64776709f39484e9"],["/tags/C-C/index.html","655058ea4dc9d6572073335f5a83e814"],["/tags/C51单片机/index.html","c89883d946c484cb8de674b9b376fa4d"],["/tags/Intent/index.html","f5aa4bbd49cd9644332192dc046f28a4"],["/tags/Java/index.html","b690187fbbf0786c0f489a6f9deb62a9"],["/tags/Java/page/2/index.html","87584e049bae3eb087b371a84ab3d9a3"],["/tags/LCD1602/index.html","0d52824a40aafd9c63015b5b4d922ada"],["/tags/MySQL/index.html","6c0cb6733129fbcc8142b7d5020aaacf"],["/tags/PWM/index.html","4102063d08aaacd0269c68a6d4e3a83e"],["/tags/String/index.html","e473b7a930c55c5a5b42bb4dbe7635b0"],["/tags/Thread/index.html","558595af1f6de9b7fb73ef8dfc6fecad"],["/tags/api/index.html","9521bda5f07c12d48d0e7d35ea821ce3"],["/tags/gcc/index.html","0adc8e34385edf23680e1cd42606327a"],["/tags/index.html","ab7a99b8288c5fcbc5c93fcac20c2e08"],["/tags/python/index.html","c3d52bad282ca040c1d8eb2839d0e018"],["/tags/vim/index.html","c05e18b367ae73010285fb0fb0f59360"],["/tags/wifi/index.html","4dde9744d3fc0eccd6134a94ae5d6d72"],["/tags/串口/index.html","b9a330e41955eb37b71cf1d1a77119df"],["/tags/云平台/index.html","c85997fde9b088015aa4e9df026a6625"],["/tags/冒泡排序/index.html","ed0e7b5844d98909e184b325da2417be"],["/tags/单片机/index.html","0b74dfb9e57f8d813150342b4034bacf"],["/tags/安卓/index.html","d0380d794ab7d1caeab7f9a842c8795c"],["/tags/定时器/index.html","fde1a325a3e30c7851ed26103949eddc"],["/tags/斐波那契数列/index.html","17401d50bda6611bac40da2bd51a50a3"],["/tags/新大陆/index.html","5a43e3fea3ef1d6fd0f28ae43150b5f5"],["/tags/蓝牙/index.html","d6b4827b6b896b34c34722ee0c19b2b8"],["/tags/选择排序/index.html","f3d1f3f883b9ec5fb2b35b696ce83000"],["/tags/面向对象/index.html","ecc7ebb6b03213badb98966c4c2b0564"],["/tags/面向对象编程/index.html","091018c411509a2ff84f917cbf86eb4e"]];
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
