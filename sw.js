/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","1c5acb3deadac959cf2cdd3bbf4795dd"],["/2022/05/31/Android新大陆云平台API使用/index.html","5b28ebcd7c4929a938a740ab0513f101"],["/2022/05/31/Android页面跳转/index.html","31461aa1d32cac26f12c9f4f6bec1853"],["/2022/05/31/Java内部类详解/index.html","ac211b97faf80261320ac2ae9a7d6b03"],["/2022/05/31/Java多线程/index.html","659f5bbde6366b89077af32be75aaa83"],["/2022/05/31/Linux-vim的使用/index.html","fcca056ccdc0bfd5d321481a758cc0af"],["/2022/05/31/MySQL基础/index.html","b658645a04ae7bc53d06cb0aba4c1ad4"],["/2022/05/31/String/index.html","be2fe5339fcbd38a8b4335d4dbf6c77e"],["/2022/05/31/final关键字/index.html","8e711b11a7cbfd9cb8f6960a90c6f7e1"],["/2022/05/31/static关键字/index.html","5255fa8f5eaf0797bd455d191ea15884"],["/2022/05/31/this关键字/index.html","5128ac0a482ddd58b5a1c16b5fbeae37"],["/2022/05/31/冒泡排序/index.html","877a357504cebb023c2d498e2c96b564"],["/2022/05/31/引用类型使用小结/index.html","368a7db0edd22182b01592bde51d1373"],["/2022/05/31/抽象类/index.html","abce20a9bce6c515200b0a3fed8d26b3"],["/2022/05/31/接口/index.html","64e569c6d727c58d1af4c9c904e39a7a"],["/2022/05/31/斐波那契数列/index.html","06b95bfb728027526043a2e807523989"],["/2022/05/31/类的五大成分/index.html","529593eb982ae1a87a5821d991e4965a"],["/2022/05/31/选择排序/index.html","93ac6e7def515c7fae18f5a5000787bf"],["/2022/05/31/面向对象的三大特征/index.html","ced5fb0da13f73523ca92bee911de0e1"],["/2022/06/01/01.初识Python/index.html","65bb8c7834b542acae3066d4b0fa893c"],["/2022/06/01/02.语言元素/index.html","928d6292c22431674c63fe206465a781"],["/2022/06/01/03.分支结构/index.html","0ad31b7de9abb356b1cc1cc8a6a4bea4"],["/2022/06/01/04.循环结构/index.html","f4124144ccf1a8a67b51b1fd54046c2a"],["/2022/06/01/05.构造程序逻辑/index.html","6f5c78ab45aab83c0a39721b8a5e0258"],["/2022/06/01/06.函数和模块的使用/index.html","1ef55a01fbfd162341d28f142bfc49c5"],["/2022/06/01/07.字符串和常用数据结构/index.html","8de7bf31ddff06ae0abf6d71d3116dfd"],["/2022/06/01/08.面向对象编程基础/index.html","78732bf06cc2b20bc88002807a6417a6"],["/2022/06/01/09.面向对象进阶/index.html","3faaac3f5d2993d2c50c09d778086aae"],["/2022/06/01/C语言笔记/index.html","150fd8329826e5badd57037dae89167b"],["/2022/06/07/安卓基础-布局/index.html","9fd7b9705962ee8506bd90a5f9204f70"],["/2022/06/28/C51单片机学习笔记一/index.html","74abdb8f8fa77fa880b680aa230ab9c8"],["/2022/06/28/C51单片机学习笔记二/index.html","7a623621a683829ad9ddbecc207c5490"],["/2022/06/29/C51单片机学习笔记三/index.html","fe88e9c88393bf1f358fe6414db06efc"],["/about/index.html","0997a1eef1da765ee77e22eca3a8f54c"],["/archives/2022/05/index.html","499a40fdb675badb3804a72301d0d4bb"],["/archives/2022/05/page/2/index.html","e66fd550063734d6d6175a7c81b6d24c"],["/archives/2022/06/index.html","51f1713c19dd9ea48b1c3d1715dfa579"],["/archives/2022/06/page/2/index.html","6afaef403bcea1f609a42f75ef044708"],["/archives/2022/index.html","4d5debf0459df27ebb97b6d19c2af8bf"],["/archives/2022/page/2/index.html","d77445f625f28926869eec15a1fbc527"],["/archives/2022/page/3/index.html","ec26f986109f17f5a23c10dc1e14cc4e"],["/archives/2022/page/4/index.html","95dd4d69048763bd0e68d21c9a66eb2d"],["/archives/index.html","3e1f66f9df992c818d1a7bb6fcc08536"],["/archives/page/2/index.html","ec23793f81c5d65658f93b3a2f13818a"],["/archives/page/3/index.html","9ffddd6095e4db4523bb9e8ee1bfa8f8"],["/archives/page/4/index.html","5b6ab00512cd2710ed2ae8210c629b4c"],["/categories/Linux/index.html","1749c81a5da556ffbd898a9e32d66fad"],["/categories/Linux/vim/index.html","baa4fda3ac1500bb3094929588c06cd1"],["/categories/index.html","50365bedb14c092e59a3cc018dfcfa26"],["/categories/学习笔记/C-C/index.html","dda5e586f0bee8a18e746430e4e9f062"],["/categories/学习笔记/Java/Api/index.html","b65f802a7dc3659c05819c0ffeab6f5b"],["/categories/学习笔记/Java/index.html","84919410cc74ec13355f9040e07bafa7"],["/categories/学习笔记/Java/page/2/index.html","66db82355320fe4483432d62d0bad1bd"],["/categories/学习笔记/Python/index.html","511d1409b50c989a5a96b3de82e6e442"],["/categories/学习笔记/index.html","35752b0ea6e9aed70fb0c7ec1f4397b2"],["/categories/学习笔记/page/2/index.html","6cb2056e603071e1ba4956e945d8e1d9"],["/categories/学习笔记/page/3/index.html","41edfc50b9863c46fe232c5dd85ec67c"],["/categories/学习笔记/单片机/index.html","5e1ab119bb269cc0e5c875fb6706f2db"],["/categories/学习笔记/安卓/index.html","c334e18c42c0af682e18d50ada2f3791"],["/categories/学习笔记/数据库/index.html","9f4ffa127289d7f4aef09a76de394391"],["/categories/安卓/index.html","5cf85ddd6371c22e26db309561052597"],["/categories/安卓/新大陆/index.html","9e904d417288bd70f8e9559bceacd6c7"],["/categories/算法/index.html","089155f397626511c4484bf522435768"],["/comment/index.html","d3d612feb3dcc8156d16f21c963470b0"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","1b2fd3c94c58967776b138bfaa171ba7"],["/gallery/index.html","62b2dba49054668e0b8a24604aa14505"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","108829178b89bd66748c1999722ed1dc"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","92386f96f63c2a18146334ae434fb5bc"],["/page/3/index.html","7d1471cd11f0fd76f274b0ac0a32da9f"],["/page/4/index.html","b0cb1a9509c5f8eb6a0e21514ef1dd9e"],["/sw-register.js","9c844a19235db5a587c08a4c22a397be"],["/tags/Bundle/index.html","d899813b47080c1b796a49d80a83462a"],["/tags/C-C/index.html","70b2a1ab57564318b7bf13c0d146384f"],["/tags/C51单片机/index.html","c61c70d12b041acceb04619ced4d85a1"],["/tags/Intent/index.html","bcb75ce245ef8e388f0b3fd7b8d0f9b3"],["/tags/Java/index.html","8d25cb05a3eedfa23c676759c51dd4d0"],["/tags/Java/page/2/index.html","eaa0481d32941206ea71e759a3600a75"],["/tags/MySQL/index.html","ba796efc5dc3620106188580ce0d9acf"],["/tags/PWM/index.html","5509659d51eb6b92b1c646ef1f5dbbf4"],["/tags/String/index.html","1f2498fda19cf1a92604c94ce3cf42f4"],["/tags/Thread/index.html","6a635ee727471105ce0e423d0d1c8525"],["/tags/api/index.html","03f78b243f26d38fe9412983d48a662f"],["/tags/gcc/index.html","523b05cb4165c29e9fd942208a7f51f3"],["/tags/index.html","fd72491cf78e99b7e4caea7691e4bc8c"],["/tags/python/index.html","ecb5dd98d10714f90899da7ee951a779"],["/tags/vim/index.html","6cfa8d09752ca2df5bc7a856bddb0394"],["/tags/云平台/index.html","a1cec452f01b0322b358ff7cd1faceb1"],["/tags/冒泡排序/index.html","a59c3508433cc4cd88bb09d094ea0c5b"],["/tags/安卓/index.html","17b43f4a8a663c3954e050d5c58ec6a2"],["/tags/定时器/index.html","5a55f2da0279055d3c4aaaf07fa8d0ee"],["/tags/斐波那契数列/index.html","23b36d0e33c81e276c4c1369a77958c8"],["/tags/新大陆/index.html","353c46516c27dbb6c1564b2fb1ab05f2"],["/tags/选择排序/index.html","13d2bd2e6d99ae9c818fd4a4946a5ff0"],["/tags/面向对象/index.html","ad2306a7d202e1c65752fb546cb7537a"],["/tags/面向对象编程/index.html","d9c1794829780803e3e869406eb4f947"]];
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
