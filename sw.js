/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","e024f905ea607386c980fa35c345ac1f"],["/2022/05/31/Android新大陆云平台API使用/index.html","d3d8b6cbc38ee183e081bc1e451b37da"],["/2022/05/31/Android页面跳转/index.html","d183e05c3cad35002bda84d43b5b734c"],["/2022/05/31/Java内部类详解/index.html","ccea5a34b57bda286a02065675e987c7"],["/2022/05/31/Java多线程/index.html","7b474e2e8bc4c5a1347496a142973f62"],["/2022/05/31/Linux-vim的使用/index.html","4557da4fd28a7f5336ede7054c64c5e2"],["/2022/05/31/MySQL基础/index.html","ea950ed8c59dc5b693cc02e4053745b4"],["/2022/05/31/String/index.html","cf01e579861fa7ba5b7f63599c26f492"],["/2022/05/31/final关键字/index.html","e6afc090e8c1b7f16986df9c814ee092"],["/2022/05/31/static关键字/index.html","2f201d7789143bbf4a09b22fab761074"],["/2022/05/31/this关键字/index.html","a4997d792b8f816841536b43484a9cc5"],["/2022/05/31/冒泡排序/index.html","cfc94263f3163d3abe54919ae283846a"],["/2022/05/31/引用类型使用小结/index.html","f7307bf874c415647e7ce413dbb1ea0d"],["/2022/05/31/抽象类/index.html","7776a00cf088a7b9fcef33555a0cc093"],["/2022/05/31/接口/index.html","56a5d47e0d9c2d56b182b456d52689ee"],["/2022/05/31/斐波那契数列/index.html","da35868eb4769e85caa01f4382bfaf2c"],["/2022/05/31/类的五大成分/index.html","c96d3e763e9ad7928e8ee465377db14f"],["/2022/05/31/选择排序/index.html","de5ad265b5fe3309e2b1e1c0950867bf"],["/2022/05/31/面向对象的三大特征/index.html","72853e0444eea85005279725207f68e8"],["/2022/06/01/01.初识Python/index.html","b2f7859c6f975e005bb41bf89690f597"],["/2022/06/01/02.语言元素/index.html","7097e219122f15c36e0a6e48c5a7d747"],["/2022/06/01/03.分支结构/index.html","ef8a33d65775ad44fcf1d1ecb2769e24"],["/2022/06/01/04.循环结构/index.html","1b577f46215f08cc91c26bada9f00ce2"],["/2022/06/01/05.构造程序逻辑/index.html","026a98180e3028293fc1752c444aa20a"],["/2022/06/01/06.函数和模块的使用/index.html","56719fe6ed5b977559842ef0209459c7"],["/2022/06/01/07.字符串和常用数据结构/index.html","81de29d6875a3b7730bb9e3b34a79869"],["/2022/06/01/08.面向对象编程基础/index.html","e34efa90c22386cd5bf25ba09c4638b5"],["/2022/06/01/09.面向对象进阶/index.html","0811d0ec214f863066e99be136b7892c"],["/2022/06/01/C语言笔记/index.html","03d02ba50fd3814400399c6bab4e4a39"],["/2022/06/07/安卓基础-布局/index.html","42d225231f7c09c8ba4d2176fde02078"],["/2022/06/28/C51单片机学习笔记一/index.html","3e2ba571bdb13e5360a7a803f44437c9"],["/2022/06/28/C51单片机学习笔记二/index.html","850e2d6c4bb32be610f407d34d21dd74"],["/2022/06/29/C51单片机学习笔记三/index.html","fecf7509f1757b9608aa0e95d128695a"],["/about/index.html","5882f085620b3b5006f85a3fb7b38e21"],["/archives/2022/05/index.html","d2831007ab7ee81027ed49ed12d892f6"],["/archives/2022/05/page/2/index.html","b3eb65d39bd46fd96405dbd2b9bc7533"],["/archives/2022/06/index.html","97d6a0d50dd10f365becd236d1ba6367"],["/archives/2022/06/page/2/index.html","617d261e869579051ebf21e0b1701280"],["/archives/2022/index.html","7f5da2657da9d7c0d454095f343e6b86"],["/archives/2022/page/2/index.html","6bd86697d9d45d448daa1b6833294d28"],["/archives/2022/page/3/index.html","fdd044f9f13d6b96b1c8871661a9d978"],["/archives/2022/page/4/index.html","c1bee7ffead8c12e3014b61ac150b454"],["/archives/index.html","77af9c47d6ee5bc6975f8e84e22b69c8"],["/archives/page/2/index.html","2daf34b6f88034496c436151dc4f0952"],["/archives/page/3/index.html","bac24dce179935998c3fc546738b0aba"],["/archives/page/4/index.html","10d2df9b71401c0d9defd3c8122504dd"],["/categories/Linux/index.html","375e4a0378c63d1eae9bed7c747e9624"],["/categories/Linux/vim/index.html","bc865d25002c125c35941d71c016f2e0"],["/categories/index.html","f089982444c27a065bea30179a0eec7d"],["/categories/学习笔记/C-C/index.html","137eb4166027007129d1419d9c262920"],["/categories/学习笔记/Java/Api/index.html","705bd2d4e975d9cb416357a30df77ca1"],["/categories/学习笔记/Java/index.html","7c1190f672d1a1faf172b4dadada85b6"],["/categories/学习笔记/Java/page/2/index.html","606463f8d00b1b95c3fcabacf27df83f"],["/categories/学习笔记/Python/index.html","9903c5a1f4e310a29911d37e44dd8b18"],["/categories/学习笔记/index.html","b7f4dc2a5e2cb0e3cb357095735252a9"],["/categories/学习笔记/page/2/index.html","d81dd3cd6ddd7dea67248e7e2daa4ef0"],["/categories/学习笔记/page/3/index.html","45f9eaeace8f0e5ca02c6c5a338a9c28"],["/categories/学习笔记/单片机/index.html","6ffcf053018adf0a97d5da0e88e9fce2"],["/categories/学习笔记/安卓/index.html","31035606f988582e1a6d355f59adeecb"],["/categories/学习笔记/数据库/index.html","40e1344b843c1b5b710bcaa259d883b6"],["/categories/安卓/index.html","c5b021af813a0bff0c7f519b543f4b1c"],["/categories/安卓/新大陆/index.html","f24e5bc54405808377ff5fe2be98b05c"],["/categories/算法/index.html","cf355391a7fc699ab569d3a80d880ec7"],["/comment/index.html","efa2529f5a3456e4eea96d90a8cbcb47"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","3d3cb8565b8536164ff9086e2e4a55fb"],["/gallery/index.html","f530361229325e78eb4df6f22a3acbf2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","e4af2fe683c8d41415421f61cd6ec742"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","00d84333d7a11871045baa264e2a49f0"],["/page/3/index.html","47f8394f526923bb0622e1bbedce57cc"],["/page/4/index.html","25bd70a97f5cbebebf9b763feb3b942f"],["/sw-register.js","717b2476b2676f01d5bad125d4c8500f"],["/tags/Bundle/index.html","e7675250e8296887d825b5dfa9ada0a8"],["/tags/C-C/index.html","3d8e1bc96a5150017a173b7feb04a379"],["/tags/C51单片机/index.html","97d66a7b15fa773c3abf98630f1470b8"],["/tags/Intent/index.html","db2f203506ae27d5b450501e93e707fb"],["/tags/Java/index.html","2de9602c95c430b8c2034a7e0266906b"],["/tags/Java/page/2/index.html","1a7cb6aa1847fb07c985287ff53b93e4"],["/tags/MySQL/index.html","e930d84a15dc5949a4805014b90f00ed"],["/tags/PWM/index.html","0b3c726ad17d16ca59dedaf8f35bc33c"],["/tags/String/index.html","9dcb9567eb020b8bffeeb3d4bd0f12b6"],["/tags/Thread/index.html","f57bc65574a11afdfe43106b557a121d"],["/tags/api/index.html","ceaaca799ebc0433e5325e0471e09802"],["/tags/gcc/index.html","f4e2693bc82fe5ccd424ab2b3e3de966"],["/tags/index.html","8136525b443c4ed8b4f7b30b5e2cea0f"],["/tags/python/index.html","d2c3d1860e7996ab96d40484af44fc5c"],["/tags/vim/index.html","c6a5cce73cc708c0657b7af44f2e4bce"],["/tags/云平台/index.html","c15a04f474601971614e3b67f5507ad4"],["/tags/冒泡排序/index.html","de0b43345d636ed8056a5c1bc044bad1"],["/tags/单片机/index.html","567d05bc037635074738bd829be0f70c"],["/tags/安卓/index.html","325cb997d9354d5139ab150b8dc2f3e8"],["/tags/定时器/index.html","de5e2ce9a374d9b88880a1594e916ce6"],["/tags/斐波那契数列/index.html","6ec2bf4405b90b80810d83a4d4cf3ad9"],["/tags/新大陆/index.html","fd093ae48d4f300aa7b355f0d4bbea70"],["/tags/选择排序/index.html","555365d449385ea152228cf9b42841be"],["/tags/面向对象/index.html","f16b6cc43753dbd4734248b0817eced6"],["/tags/面向对象编程/index.html","b952794229e74dfd554ff356f50a0489"]];
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
