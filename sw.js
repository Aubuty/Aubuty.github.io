/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","ad4b1d8dacd504bc9b3195ec7d264fc1"],["/2022/05/31/Android新大陆云平台API使用/index.html","94a7a712481d17c103bbdb08332d632f"],["/2022/05/31/Android页面跳转/index.html","6041e1f5fc30db9636607cf80e9360e8"],["/2022/05/31/Java内部类详解/index.html","1de10b41830e08af0393a1a1ff7d92f1"],["/2022/05/31/Java多线程/index.html","295ca574d5aaa0a1092a9dda5918f201"],["/2022/05/31/Linux-vim的使用/index.html","2705a7bbaf806cfc533937e74ef5c699"],["/2022/05/31/MySQL基础/index.html","66298e638a935a00a13923ed14e9bdd5"],["/2022/05/31/String/index.html","da34445476fc460c93e0ce5f4cf1591b"],["/2022/05/31/final关键字/index.html","1bc909910db6b64c8dee14c2249ef7ac"],["/2022/05/31/static关键字/index.html","4cf44c3813c90ad6884a63428750a8a6"],["/2022/05/31/this关键字/index.html","7e0497159e84fa7681b45e6f4f581982"],["/2022/05/31/冒泡排序/index.html","e54ce739ded870bc36c23a5ed99c71ca"],["/2022/05/31/引用类型使用小结/index.html","dab7bfcb2cc19e502554bd2ea87b9667"],["/2022/05/31/抽象类/index.html","96b870372490b361ec4cd928e7aa8076"],["/2022/05/31/接口/index.html","c97854e59f8c131b446d3f80bfddaedc"],["/2022/05/31/斐波那契数列/index.html","d0a86e4a9100ba8f54e39ed05e12a210"],["/2022/05/31/类的五大成分/index.html","05ecddf943507839de00ab878646a06b"],["/2022/05/31/选择排序/index.html","2be53bd151862fdf2aff1f93ac8569bf"],["/2022/05/31/面向对象的三大特征/index.html","3335d91702d7f3b77a4365bffe60cd4f"],["/2022/06/01/01.初识Python/index.html","7b9cd9c40e54a65e392a8c2f08072a67"],["/2022/06/01/02.语言元素/index.html","2165d315ea7ec5d61766e26fa36494a3"],["/2022/06/01/03.分支结构/index.html","25be7f401440dee69def88d19d0a8b62"],["/2022/06/01/04.循环结构/index.html","034b7f82a56b2dc8acb9c5b2570663de"],["/2022/06/01/05.构造程序逻辑/index.html","5eba93428a96adb43cb8ebe28f1050dc"],["/2022/06/01/06.函数和模块的使用/index.html","3b3830798cf3004d7cd1ba932077f201"],["/2022/06/01/07.字符串和常用数据结构/index.html","59cd3fea2b8e5fadcbc43e03676a6fe7"],["/2022/06/01/08.面向对象编程基础/index.html","7e5e307566758d000887868555de9632"],["/2022/06/01/09.面向对象进阶/index.html","7ad1d857ee7616d80d0aac426341c6dd"],["/2022/06/01/C语言笔记/index.html","c39fbe6a93b8175adbf1a9f265393312"],["/2022/06/07/安卓基础-布局/index.html","3e466b833e206c99b88fb889985a6031"],["/about/index.html","c7619e7c2cd2e582add5e77817c7be04"],["/archives/2022/05/index.html","ac5effe603e1f69e6dce4deeb89671c5"],["/archives/2022/05/page/2/index.html","1fb932f687bbd256cc78dd70cbd4194c"],["/archives/2022/06/index.html","6a8e4402d1836d8643a3d84cf725e922"],["/archives/2022/06/page/2/index.html","eaf18599444eda4bffed8676e37e2f69"],["/archives/2022/index.html","47881944a817f6d10ee71e9a7a058352"],["/archives/2022/page/2/index.html","f476ff31623930cba8fad718ac5bb093"],["/archives/2022/page/3/index.html","83eaf2f0f6eb89e0219cbd9d091bd183"],["/archives/index.html","4058c9ae893d87107e64b1a21e0e15de"],["/archives/page/2/index.html","dde9cc5a2f53e40a95f298cd56cfb5a2"],["/archives/page/3/index.html","81fe3dcf75243f7a584bede1228fff3f"],["/categories/Linux/index.html","612d67df8e950144e78c987cedbeac72"],["/categories/Linux/vim/index.html","e6da956eee10854413cfb1081e58d299"],["/categories/index.html","aa0518c48d50d92a80e5175ea684cfb5"],["/categories/学习笔记/C-C/index.html","ada39ece9ef3b044b80690ef0a8a85de"],["/categories/学习笔记/Java/Api/index.html","51fa14a910c49608b9b4b73695297962"],["/categories/学习笔记/Java/index.html","50ff1f1535ee35258603fe699173da55"],["/categories/学习笔记/Java/page/2/index.html","5dfdc1e07677cbdf608303d809645c3d"],["/categories/学习笔记/Python/index.html","31eccc2c204a143f3d5c42a0080b10d9"],["/categories/学习笔记/index.html","02c5de177e4e04592c0325ab81485a29"],["/categories/学习笔记/page/2/index.html","8f6de9b6beec291204cd364572b11eed"],["/categories/学习笔记/page/3/index.html","bf6c6b0ed6c3ddcde504011629e335be"],["/categories/学习笔记/安卓/index.html","143262f5ea0fd46a38e8017e199a7abb"],["/categories/学习笔记/数据库/index.html","18db3fabd3e36a99399abc7990302973"],["/categories/安卓/index.html","b7b1c3b2a84305d5cf6a92809c9df009"],["/categories/安卓/新大陆/index.html","77be811325afa16a950a9b093b718c07"],["/categories/算法/index.html","2a2ff3c51477e87ba799f6e242427016"],["/comment/index.html","1a5a04def7c5c0e1c2118af0b9177796"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","35bdf88fbb6e6e91bbccc7a2c7ad6f83"],["/gallery/index.html","69bf36871436af9e60c7446abe3a96b1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","5f40830e8f9caf8691cf046037c0045f"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","1d120ba5ca234769cd0be95a49735ed5"],["/page/3/index.html","ba4aaf44323eb7b1e8e99678b88132ae"],["/sw-register.js","398d3d810029794699c897da87814cd7"],["/tags/Bundle/index.html","f2e19048001b00a229d40964f1f5cd90"],["/tags/C-C/index.html","b631349dd7d8f4050190087600deab25"],["/tags/Intent/index.html","1cf7a69d3addbcc1f294ad39b08bbc0c"],["/tags/Java/index.html","5f461cfbfe68d7da5e9c27f8dd608b8e"],["/tags/Java/page/2/index.html","6c91809a971253ee4f8f776b6785af1c"],["/tags/MySQL/index.html","ea4dcde9c45277ae134994c639ed8500"],["/tags/String/index.html","c4e4bc350f6d366d5dad709e7727fb70"],["/tags/Thread/index.html","bc8741d1ab097263073dc9d1a46a3064"],["/tags/api/index.html","367289b7a2e3eec8de0bb79086ec7ef5"],["/tags/gcc/index.html","7cd7eb40afe3571026d281e709480046"],["/tags/index.html","d10f94b181a3996a258ab1d265c8784b"],["/tags/python/index.html","6749be6715e0458d72b715a87f80dc0c"],["/tags/vim/index.html","fd52f823b68f478098eb411309d759aa"],["/tags/云平台/index.html","1a26db10f7afc3043e852e1c9a1accec"],["/tags/冒泡排序/index.html","6217d1bb76afa783816ddf6df93a2a01"],["/tags/安卓/index.html","db9c5cfa923adee25ca3c0271fac2f7f"],["/tags/斐波那契数列/index.html","b35b5b04dd8e37f3ac1de750b756a08f"],["/tags/新大陆/index.html","8537a1e43cf5a994045a86db28c945e6"],["/tags/选择排序/index.html","e0f6c1c28a674fbbb395ab2cb005ac70"],["/tags/面向对象/index.html","aae387fda85c44f0febf7ad55ae7908d"],["/tags/面向对象编程/index.html","223e307037d92291cbf0fccb3bb20d94"]];
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
