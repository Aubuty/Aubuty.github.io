/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","20e9488bd19abd4f92c599770bde8e3f"],["/2022/05/31/Android新大陆云平台API使用/index.html","96abb7142afe7bded1cc2a8e54e57ab5"],["/2022/05/31/Android页面跳转/index.html","cbe2cfab3f21a1078e10fdaaaf0572b8"],["/2022/05/31/Java内部类详解/index.html","588e9e3789a2aea0fd354887d7b62dbb"],["/2022/05/31/Java多线程/index.html","51f1e1465113ae10e14556211ee40f39"],["/2022/05/31/Linux-vim的使用/index.html","e5f9c65ce09ad5bcccfc1a09900b2eda"],["/2022/05/31/MySQL基础/index.html","4a1aa8bc20d7efb4b1c2d0201e687e87"],["/2022/05/31/String/index.html","ad62d91e94181587498fff446c99b870"],["/2022/05/31/final关键字/index.html","ee0a20b6916f23c7116f63f224519059"],["/2022/05/31/static关键字/index.html","39286ef7aee2cd216f5e3adcc131aafe"],["/2022/05/31/this关键字/index.html","8ddcc03960eb8fd5cc03f8fefe28a8b1"],["/2022/05/31/冒泡排序/index.html","0d2a30351efa7ab8597605100cec6b8a"],["/2022/05/31/引用类型使用小结/index.html","90b6652b928bb2d3aa094188aee190f9"],["/2022/05/31/抽象类/index.html","daacd41900bd4601d7e6c2ae9edf95e4"],["/2022/05/31/接口/index.html","f704038c3974dd540a24e7c069418717"],["/2022/05/31/斐波那契数列/index.html","fd9d526e82098296cc9ed7096ed57862"],["/2022/05/31/类的五大成分/index.html","cf39074ac78d1d86b5f39586a128cb2b"],["/2022/05/31/选择排序/index.html","af83dbfe94f4ccfdd496abe36a7e682d"],["/2022/05/31/面向对象的三大特征/index.html","84353bc1ccb1a37d1dcee24d9f4167cd"],["/2022/06/01/01.初识Python/index.html","a944f3e891b395c2138be7e7f8664919"],["/2022/06/01/02.语言元素/index.html","d01e171e5ffd21f9306cdaa406da30b0"],["/2022/06/01/03.分支结构/index.html","b96aeaceb66f4aed46eaa31e35bf4f9f"],["/2022/06/01/04.循环结构/index.html","c3dc4db1a5f42baa46caa8644ffb4ef3"],["/2022/06/01/05.构造程序逻辑/index.html","5d6ce504fb730b9694e6e0b3c57eee1c"],["/2022/06/01/06.函数和模块的使用/index.html","9fa974bff235c1008201ec0ee4cfbc7f"],["/2022/06/01/07.字符串和常用数据结构/index.html","bfe80ea473866a00b24f305e554a4983"],["/2022/06/01/08.面向对象编程基础/index.html","e0fd29c4947871bd3052c764f14624cb"],["/2022/06/01/09.面向对象进阶/index.html","58c453ae8fee9ece3184b0cbc07875df"],["/2022/06/01/C语言笔记/index.html","c4b7b7ff3ab9e24eb07e6acbc40db539"],["/2022/06/07/安卓基础-布局/index.html","7e9d4c2a02d5f01a95fd31a8da88fa09"],["/2022/06/28/C51单片机学习笔记一/index.html","396bab7ccabc8d259b887ffbf8721bbf"],["/2022/06/28/C51单片机学习笔记二/index.html","69649ef075a9c1298027b9e019a608a3"],["/2022/06/29/C51单片机学习笔记三/index.html","7711ff9776f18af3f64d125f00962dcc"],["/2022/06/30/C51单片机学习笔记四/index.html","dd622c75f7a9aa4107fb15a7067e7be6"],["/about/index.html","454d513eddbb6c2f41641f743f6a31be"],["/archives/2022/05/index.html","724b5aab1fb6d8664a856a07247964d3"],["/archives/2022/05/page/2/index.html","85eacba0408a287f34c8c48015742601"],["/archives/2022/06/index.html","227accbefc373cfad0dd841655c6d49e"],["/archives/2022/06/page/2/index.html","140b85134caf171603f42e8908b8f29f"],["/archives/2022/index.html","11836fd985ae065fb5f46cd509f16b2b"],["/archives/2022/page/2/index.html","53ac1ccef24ab94976f9e7bf9c15a41a"],["/archives/2022/page/3/index.html","bbc29cad36d57d256ee7b4e1a1d47338"],["/archives/2022/page/4/index.html","75c634e076078875e7e2fc5731a5c8b6"],["/archives/index.html","7fc33afaf1dc9de2ef44cc6b1d4c754d"],["/archives/page/2/index.html","a51d5ae402ce97dc639ab0599e2d53b8"],["/archives/page/3/index.html","274d907a374be2dfe9b915c097de090e"],["/archives/page/4/index.html","e4a92c2fda4e34791a76a801e501e9e1"],["/categories/Linux/index.html","e539ce4cf953cd466e6e26017f050fc6"],["/categories/Linux/vim/index.html","3916fad0620aeea9060be51609615c68"],["/categories/index.html","6c08640e31192dd56668b5e10d8233bf"],["/categories/学习笔记/C-C/index.html","8fc1e3d9fc03ab1cbd36280b598fbb83"],["/categories/学习笔记/Java/Api/index.html","082a6cc5c35d3e3ba287f25181950f71"],["/categories/学习笔记/Java/index.html","483d2a385b59e0b02b54e60e0eda2d85"],["/categories/学习笔记/Java/page/2/index.html","2ef7c905f4b9dd1b9dda1598bd26a8bd"],["/categories/学习笔记/Python/index.html","45fdb7a05015883198362225a6a3a77a"],["/categories/学习笔记/index.html","eca6c53a5a4bdb1f6d457539d5eefd8b"],["/categories/学习笔记/page/2/index.html","a0d3780aea14c01a9138cc272b02f91d"],["/categories/学习笔记/page/3/index.html","0d45084c2f363098a02739ff0261c6d2"],["/categories/学习笔记/单片机/index.html","81e09eb93b99a2f3aba332f07b8b7b85"],["/categories/学习笔记/安卓/index.html","4d5d0c54db3b24e41e820c2da9e82d5f"],["/categories/学习笔记/数据库/index.html","2e7eb9061b8641b598b32b59e05097b1"],["/categories/安卓/index.html","b3b4a95b1d2d3780fc615322c6784dbf"],["/categories/安卓/新大陆/index.html","03f0100baa71d0771db47d9e0f847ef0"],["/categories/算法/index.html","3644c1fc0927a4981776f10c7a752488"],["/comment/index.html","6461dcd70a52b9b0ec934d8234259a45"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","8af9181c1fadb57a47e84e2ba04676bc"],["/gallery/index.html","93e29f1f755fa31d1e4bfe49ccd85ff3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","4e787253578c18c4f49931fe484c19d9"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","9dc0c18e30d467ea49cbacd4ca271c02"],["/page/3/index.html","67bddf380a54c9cc1bcb356a10a7776a"],["/page/4/index.html","2c783f8169cd7290ca35cfa499f7c660"],["/sw-register.js","f0be35fa5aefcc5eb69119367b31c3a8"],["/tags/Bundle/index.html","1a1a6602a77ec0ec9390cf4dd607cf78"],["/tags/C-C/index.html","aa424156f059742eeb3ed46f114a489b"],["/tags/C51单片机/index.html","ff0d5efb5ed6a298de67d598aa150aeb"],["/tags/Intent/index.html","c3d3605f46a606b068322b897b18006a"],["/tags/Java/index.html","d8a29afaa386193b1e5641e03e3540cf"],["/tags/Java/page/2/index.html","2c339aa2885f88e2aff0306b01c09563"],["/tags/MySQL/index.html","d6ac5942bbc75953c3495b3a63e4f614"],["/tags/PWM/index.html","b9341a46cb48bef2b67f58d1da4ae8a7"],["/tags/String/index.html","b74b3bb8b28e58a2945cd01950e68046"],["/tags/Thread/index.html","a35f69f891661906a8b368a7176c6c0a"],["/tags/api/index.html","b1ffa8913fadf3aed1c3eb7aac844e04"],["/tags/gcc/index.html","b7247da8226b9b664daf8a6e70df8150"],["/tags/index.html","a68fb826bcb5e8cb516c70b98c0b73eb"],["/tags/python/index.html","1e1785c3ec9f302548f5724399351511"],["/tags/vim/index.html","60fb814ef8fb386cb48f738ef109d46f"],["/tags/串口/index.html","3879a3d51f75d0412b794cc12a83466b"],["/tags/云平台/index.html","7073ad1b93757b1e2aaaf87fd4c03391"],["/tags/冒泡排序/index.html","6253020f5780c3017537c14a87568ba7"],["/tags/单片机/index.html","0e3d6eb18b0540c664bec26c533029b1"],["/tags/安卓/index.html","e0f3859e8a04ac2f1731cd577666287f"],["/tags/定时器/index.html","56bddef14b8c83aa179b2481e40bc822"],["/tags/斐波那契数列/index.html","0149c9486faa5dd42a4422938388e317"],["/tags/新大陆/index.html","ec55fd8bb5db6927c4955ca7942ed13b"],["/tags/选择排序/index.html","4368a34be29fcd72d18ea3311c21923f"],["/tags/面向对象/index.html","d7a5f0fef5b233480b05f7bf36c036b3"],["/tags/面向对象编程/index.html","0730d0b009f47f4272ef73ba9ee38794"]];
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
