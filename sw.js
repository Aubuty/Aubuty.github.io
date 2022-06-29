/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","cf1ea96683b228409e8306a69fc13b4e"],["/2022/05/31/Android新大陆云平台API使用/index.html","97a621b36c904744bf5f3456fc2f15a4"],["/2022/05/31/Android页面跳转/index.html","de675bace780a062ec1359480e2cd573"],["/2022/05/31/Java内部类详解/index.html","7d3b3a355e7811bf7258f7d39f473701"],["/2022/05/31/Java多线程/index.html","fcd7c396efb4c2580b3ff6c5ac679f5d"],["/2022/05/31/Linux-vim的使用/index.html","6bbd0645894c848471a369e8ee0b05d9"],["/2022/05/31/MySQL基础/index.html","b392c1f25b0f3241c636b7ae2468206c"],["/2022/05/31/String/index.html","9d31d92f40d2803127bb21e226c79e8b"],["/2022/05/31/final关键字/index.html","2237eef4f3fa5f4b60ab2f3cf55cfffa"],["/2022/05/31/static关键字/index.html","6a572dc31c0b2e2275ad00c404ad0bed"],["/2022/05/31/this关键字/index.html","a825833944b59e297b27a8955eaa8ce4"],["/2022/05/31/冒泡排序/index.html","1579195bbb1591e093f371c26356b13a"],["/2022/05/31/引用类型使用小结/index.html","8f5e117f2e3b2619820e600d3167acdf"],["/2022/05/31/抽象类/index.html","931dedebb318e5334b1a0e4d84be905a"],["/2022/05/31/接口/index.html","a5a5f5ddee73de9aa04c2f452a5cf732"],["/2022/05/31/斐波那契数列/index.html","afea0aa1d6f5f9c9120efcc1e2dde900"],["/2022/05/31/类的五大成分/index.html","97187b203f8aa2978d14f94c1206b95c"],["/2022/05/31/选择排序/index.html","a2e21606b3229b5705fbc7911b9a9d3a"],["/2022/05/31/面向对象的三大特征/index.html","ff221cdc11b1ab1542e617411d845668"],["/2022/06/01/01.初识Python/index.html","4713927d72f58cd946f115b3d357b877"],["/2022/06/01/02.语言元素/index.html","c88091906146529736ded244f2efd701"],["/2022/06/01/03.分支结构/index.html","6396cdbc0a20c151f0a593e4375f0cec"],["/2022/06/01/04.循环结构/index.html","aff7106049f5d05299d129d78ef2cd6c"],["/2022/06/01/05.构造程序逻辑/index.html","052f1ff07bbf332d858c2a3ddb5edf9e"],["/2022/06/01/06.函数和模块的使用/index.html","ede3c1d685505cbf4a65d5356ffe991d"],["/2022/06/01/07.字符串和常用数据结构/index.html","b74ce84f4ad863744953fb66f3f995eb"],["/2022/06/01/08.面向对象编程基础/index.html","7ea91a3a32495ca85ea9780e2ba36c5f"],["/2022/06/01/09.面向对象进阶/index.html","e730515e5b95dd02566398e7ac5f89d6"],["/2022/06/01/C语言笔记/index.html","d02e8cbf16df2c522e7486c138384165"],["/2022/06/07/安卓基础-布局/index.html","d7743b259084efad09d2ccd39396353f"],["/2022/06/28/C51单片机学习笔记一/index.html","973adad94b5f30a876a77d146ddace0e"],["/2022/06/28/C51单片机学习笔记二/index.html","b363a770ad2d5069935d03447c5ceca9"],["/2022/06/29/C51单片机学习笔记三/index.html","09300ab0d2164d28cf22ea31789a58c7"],["/about/index.html","659033e5d9c8f3dd1356ca46cfd8d7e8"],["/archives/2022/05/index.html","0c83952b5523bb890221c6405c4f5e30"],["/archives/2022/05/page/2/index.html","852244e66ee76d352b1e8e3fd35860e1"],["/archives/2022/06/index.html","123336c650ce504944baa4f733adb176"],["/archives/2022/06/page/2/index.html","8aa0f055bddcb31450f3b7c43ac54e9f"],["/archives/2022/index.html","5ac5639cd263c05a02d8ed6fee0d7e77"],["/archives/2022/page/2/index.html","7b048461a488d32c5712567279445982"],["/archives/2022/page/3/index.html","801d7012a3ea530303ffd915d712d14b"],["/archives/2022/page/4/index.html","f9243302450245170592d818e7682dd1"],["/archives/index.html","d5c97208ec20e751d5bbf72da3f25267"],["/archives/page/2/index.html","45264ca5ed4c350d741b80cecaf647ce"],["/archives/page/3/index.html","28d9af92e65a13d169704329c47f5252"],["/archives/page/4/index.html","3fd72dccce8d278af6e3bae09599af42"],["/categories/Linux/index.html","8052bb95ac949c22f0350fa824dea1d0"],["/categories/Linux/vim/index.html","bff26c232bc42c9131693c37aa2b46e8"],["/categories/index.html","0b238e4f73cf018526902bbc260b8618"],["/categories/学习笔记/C-C/index.html","ee7475e7c8802bf7d0a65768d32f52e1"],["/categories/学习笔记/Java/Api/index.html","874c05686717bf94e18facbc71d81eca"],["/categories/学习笔记/Java/index.html","0cd5c4cdee9dc6140576e59506a7409a"],["/categories/学习笔记/Java/page/2/index.html","b7804fd337429b2df964978de11f05ff"],["/categories/学习笔记/Python/index.html","0416b94f66c04c9fb180357a44e1f085"],["/categories/学习笔记/index.html","f4c7390d4932b05c642aed3f757a6bd6"],["/categories/学习笔记/page/2/index.html","5eab7939a202fe32fa87bdb8ba82095a"],["/categories/学习笔记/page/3/index.html","52bd5aa1dc491002467341bf4c03e6d0"],["/categories/学习笔记/单片机/index.html","0a985ee40705fef8f8b487f5c004b75f"],["/categories/学习笔记/安卓/index.html","9920dc42255071fe04730360abeeea2d"],["/categories/学习笔记/数据库/index.html","d26b3a27d8b5bd3a64e6486b3fe205c5"],["/categories/安卓/index.html","6addbfb725308f52d6b5f1144407cf02"],["/categories/安卓/新大陆/index.html","e1c0559df442c6e6b03f7cc86f1c9b83"],["/categories/算法/index.html","2651f13eee1bd744c033acb562680227"],["/comment/index.html","834371ee2a2292d0ff20a62f297ebe05"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","6e2b56de7dab7178cf60fcb11b5702b2"],["/gallery/index.html","c4fa04168753ea7f9311f2f003e00d13"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","06e6999a01291a3421b0aa8ee20219b3"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","34f24aaf48e17b851015f8c6d4cb41c5"],["/page/3/index.html","257a86f3cc0b540f13b48fc3b9938a23"],["/page/4/index.html","8b613faa55d8b761b157e8a0edb1456a"],["/sw-register.js","9c9e6cf1834be08b1470c29d4037d219"],["/tags/Bundle/index.html","886d0371c17936122fa529327b717236"],["/tags/C-C/index.html","bcefb7103390a420b5c7b62c9a72fc7b"],["/tags/C51单片机/index.html","4c6216e16542ef9378cbef380ac6b0d2"],["/tags/Intent/index.html","e88ea8392f20e2a4b4fed5338385be39"],["/tags/Java/index.html","718ee77a5e23e50cdbd100f172ea3196"],["/tags/Java/page/2/index.html","78c7b7cb021e7f3dad831130feadcd87"],["/tags/MySQL/index.html","972bbd7d870d868cef2405b556b85d59"],["/tags/PWM/index.html","d7cec65163a06a84dcc16c67ee87839b"],["/tags/String/index.html","070d888e22dda2f732e116b043b1b2d0"],["/tags/Thread/index.html","21f2eea6ec58de93bd7dc2323b652ccd"],["/tags/api/index.html","3f88779e0f041a84671334b77e4a3973"],["/tags/gcc/index.html","7daa87170ed4234631513acd3d8b32ba"],["/tags/index.html","69bd4758801bc1f29dfe61b86261033e"],["/tags/python/index.html","3af0ff81ad2764d40ee19db7634d25e2"],["/tags/vim/index.html","d397f0f7b6a7be6eb96c26ef559d8308"],["/tags/云平台/index.html","5a1e5e376ec8dbc4970b4ac01395105d"],["/tags/冒泡排序/index.html","71cd606c978a7f398aa41461b7d120d7"],["/tags/单片机/index.html","e25f43a300f8c295d07ee0c9192e42a9"],["/tags/安卓/index.html","7a79e2b12f761fff3e69f7025d6ae610"],["/tags/定时器/index.html","c111d72e4cfbff18d36c6cb7d7657b6a"],["/tags/斐波那契数列/index.html","24514c8fc7e5ae1d1e43a5f425d18078"],["/tags/新大陆/index.html","b3f72b4b528a984942cf2ae2e2f7e98b"],["/tags/选择排序/index.html","fdde072be35a14f96e277fb7cf165db9"],["/tags/面向对象/index.html","6c3708f02c8e2c298715932690b672c3"],["/tags/面向对象编程/index.html","69035ce524c050fa85fe3867db00ca8b"]];
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
