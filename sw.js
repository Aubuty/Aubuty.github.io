/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","56747b1026724fa165e992355c5988d5"],["/2022/05/31/Android新大陆云平台API使用/index.html","64c014f9ea35d3c78788bfdefaedc71e"],["/2022/05/31/Android页面跳转/index.html","3f6617e8d4ce0b7681540b85f31368b8"],["/2022/05/31/Java内部类详解/index.html","c140e7050df555fb96dd9d3e5c3e5ae1"],["/2022/05/31/Java多线程/index.html","53573b3c356c12fbb55dbfe638bd508b"],["/2022/05/31/Linux-vim的使用/index.html","aa8e6e089de556a79333365c87ff36dc"],["/2022/05/31/MySQL基础/index.html","e21eaf005ce3a4eb4bf94f7b2254ca87"],["/2022/05/31/String/index.html","fd74e2433b3a981d8e8dbb45cfb8e6a8"],["/2022/05/31/final关键字/index.html","5a200930b30472eef33103dc90b7bb38"],["/2022/05/31/static关键字/index.html","237f2523081286bbaf8f9eca08d4783e"],["/2022/05/31/this关键字/index.html","84523fe3b03b93bce0e826ee88fcac75"],["/2022/05/31/冒泡排序/index.html","05a93010dcadced5142b62fa234c91ce"],["/2022/05/31/引用类型使用小结/index.html","f56032ab8b82144a115b6d801416585c"],["/2022/05/31/抽象类/index.html","842d2fd723e4f739bff10b1552c75821"],["/2022/05/31/接口/index.html","4433bef6b8f3193a0904552c48c4a916"],["/2022/05/31/斐波那契数列/index.html","16175e8920ec414c26c4a21e0576ecf2"],["/2022/05/31/类的五大成分/index.html","3188c90ed6ac7782486e20567a957802"],["/2022/05/31/选择排序/index.html","cd6d6934cf2401e6ada1e4b5444628cd"],["/2022/05/31/面向对象的三大特征/index.html","9ac9be1ea408a4e548a704048a28125e"],["/2022/06/01/01.初识Python/index.html","c2db28465b6c4d7bb7ec096e0caa3e50"],["/2022/06/01/02.语言元素/index.html","5069d0d1daebc448f1b1d45884d07dc1"],["/2022/06/01/03.分支结构/index.html","47f950e9dc43eecd7aafe10fe5485457"],["/2022/06/01/04.循环结构/index.html","ab4460d98a4127b584f1dfa187bc07bb"],["/2022/06/01/05.构造程序逻辑/index.html","dbe943eb61d44af94ac89329bb7f53d7"],["/2022/06/01/06.函数和模块的使用/index.html","5444688266e1a0bac05ac393a1c4c761"],["/2022/06/01/07.字符串和常用数据结构/index.html","89981e018633f24286a91099f49610a2"],["/2022/06/01/08.面向对象编程基础/index.html","345ef069d6e73dfe2c0e258ce84bfca2"],["/2022/06/01/09.面向对象进阶/index.html","975dcc22a950138f143adb5cb8a0a060"],["/2022/06/01/C语言笔记/index.html","01609f9ba1ede6b8c682b95884c443a6"],["/2022/06/07/安卓基础-布局/index.html","7d7e804aeb772d1e139a6476b892ef84"],["/2022/06/28/C51单片机学习笔记一/index.html","bf1092c90f63f690807eaf4e54df58e9"],["/2022/06/28/C51单片机学习笔记二/index.html","ecb46f98a5b2d68b70e3dab40daf4cc9"],["/2022/06/29/C51单片机学习笔记三/index.html","d6c1d692c00250dbf83ea7b3ca748494"],["/2022/06/30/C51单片机学习笔记四/index.html","9f5449db5ba3dd520be6754caa5c20c8"],["/2022/07/02/C51单片机学习笔记五/index.html","d7c6c5764e24ab5170836dc4fdeb7170"],["/about/index.html","7f054c6dbcdccd687321c7c21f312eda"],["/archives/2022/05/index.html","396504b1557031574220858bbbf25381"],["/archives/2022/05/page/2/index.html","eebeb70dc7edc73f30121bda8bd76681"],["/archives/2022/06/index.html","83391e13360a62c40ee40e2fdc38fa43"],["/archives/2022/06/page/2/index.html","eea4297decf8513081c7ef0e98f90c63"],["/archives/2022/07/index.html","7c67acff2f9dc3eb76238a22b70bed29"],["/archives/2022/index.html","ce62c12dc176e5ee6f67b01be0d1ddf9"],["/archives/2022/page/2/index.html","661f15f9a647d37e905f24b076b2b771"],["/archives/2022/page/3/index.html","1638557681cd45710b41afc692bbfe8d"],["/archives/2022/page/4/index.html","dce443d3dcdc542c664591ebfd8e0a16"],["/archives/index.html","37b4fac64de4ac98dba931fede97facf"],["/archives/page/2/index.html","472553c76d0823c72a1c52b9e9bb313f"],["/archives/page/3/index.html","b68547ad6ae6c9c37acd0fff388d0861"],["/archives/page/4/index.html","0160a47ad1907d97f337030701d239a0"],["/categories/Linux/index.html","7786ac85b20fe9919a546186467a66a0"],["/categories/Linux/vim/index.html","68c3aebb148fefa0ef7e7448eac19f64"],["/categories/index.html","aa56b93aa2eff78651d22eee0290666b"],["/categories/学习笔记/C-C/index.html","6c1f3e9f6b996f6694ff570407b640c9"],["/categories/学习笔记/Java/Api/index.html","edce48e8b422ed927bbef08ce087c906"],["/categories/学习笔记/Java/index.html","6ecde4a6155d5fe0170c9a61bd85c1b6"],["/categories/学习笔记/Java/page/2/index.html","e08a545059c35618ea61163c22ac7acc"],["/categories/学习笔记/Python/index.html","cb5b72a136198b7a14b646b9fcc62054"],["/categories/学习笔记/index.html","cb65f7bafc704c4c4347a50db0fa8d50"],["/categories/学习笔记/page/2/index.html","f451575ea37c8a6739ff613448a89a3d"],["/categories/学习笔记/page/3/index.html","38688daead4d3c5c792b40da77b7466b"],["/categories/学习笔记/单片机/index.html","efdb4b0ec0908d21d3a0fdea74910aa8"],["/categories/学习笔记/安卓/index.html","f86116a82af6e5063a75d0d60c10fec9"],["/categories/学习笔记/数据库/index.html","46a70d351a7e4938e75db3bfcc6a4d46"],["/categories/安卓/index.html","839e1e6bc36517dfff8881b7fd1b3f3b"],["/categories/安卓/新大陆/index.html","6624e4072fdc56114bb9b65e985487b1"],["/categories/算法/index.html","40c2496d120e03f901f9805b3303cad3"],["/comment/index.html","fff18bc0ea35abfb7c4dbb4170abae4b"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","dbf75495e5be9659c5e609f145a230df"],["/gallery/index.html","3c9487eee023f2cfe768c3e712fc31fa"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","74ac7aa144780864b7f707a6c8516dc1"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","fca06af4adc3b66f96e1917eeaa46560"],["/page/3/index.html","eec0d01919e6fb634eb6f7cc7f7a5dd3"],["/page/4/index.html","c8361d80b975c200a12d9aae0ac8dd32"],["/sw-register.js","e24c368066c3e44ee9d6f05b9430be58"],["/tags/Bundle/index.html","626ac055400b4a98f2dccb2c5e29f01c"],["/tags/C-C/index.html","1e62b9e991ac625e98eab3c8cf0a06f9"],["/tags/C51单片机/index.html","b33b746dd0b13487715a84b6d581f5b3"],["/tags/Intent/index.html","df487194ebaa4dd3a7901a8b5daed198"],["/tags/Java/index.html","068b362dc777e65b1d89d4a96a405fda"],["/tags/Java/page/2/index.html","9c01cb2e50f889d74720b9bb500ac24a"],["/tags/MySQL/index.html","35ded3eb2f0bae33770c313f5dcec9ff"],["/tags/PWM/index.html","ff14d558d8e5249f2f9efb738ef82176"],["/tags/String/index.html","063466de5338275ab893b0c780879f5f"],["/tags/Thread/index.html","7ccfe129e91c272f348001ab0a4b1491"],["/tags/api/index.html","3b8cfcc4be6f312c784d068010d14740"],["/tags/gcc/index.html","18cd3744420100d0eaf9bb6f0736b64a"],["/tags/index.html","fff0244f48f9ee0f45aa59ff49d58daf"],["/tags/python/index.html","6b20f1f6324d3572fe3284460b11fd8d"],["/tags/vim/index.html","7d20c4069d57ccb53d34bbe76fa50c27"],["/tags/wifi/index.html","986abe1717170761825a07bed7e423bd"],["/tags/串口/index.html","058a5fdef1a1f3b29ed3cf72abc016ee"],["/tags/云平台/index.html","52dab19e998c730322d8ca13794043dc"],["/tags/冒泡排序/index.html","4e259128153b09a15d73e6c3ae89d693"],["/tags/单片机/index.html","5bb91dba0eccb0c3ae68d5e59e66fd92"],["/tags/安卓/index.html","15c2e1e6e9b412429169072785c2bae3"],["/tags/定时器/index.html","53643b031a947f8062d11045cd9786be"],["/tags/斐波那契数列/index.html","a031a9d9c8fb55e8eb87239698e80a3d"],["/tags/新大陆/index.html","f56471661553d3455a13b3a5ea065d20"],["/tags/蓝牙/index.html","44a08c00b0a883351f97f1d62eabf0ea"],["/tags/选择排序/index.html","5f7a47e3c2d2ecc3d1a999e970d06c2b"],["/tags/面向对象/index.html","1e36ed55fe365b9ce9b98476eee486e4"],["/tags/面向对象编程/index.html","f7ac83e5485610fa219e379ffb8a9509"]];
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
