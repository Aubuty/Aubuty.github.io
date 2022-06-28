/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","a9b0bc00ca382363aa92380eba95db17"],["/2022/05/31/Android新大陆云平台API使用/index.html","0a0175d291f7d96c0e4d8a577167a847"],["/2022/05/31/Android页面跳转/index.html","5a0e4d85c9503ad4d9d30771724a4859"],["/2022/05/31/Java内部类详解/index.html","ab9ac82968c9efce58fd47bd72acdf0b"],["/2022/05/31/Java多线程/index.html","c4204acc37a5c5ab3894b66b4ffc1a5c"],["/2022/05/31/Linux-vim的使用/index.html","42967c23699f56a8d36a90cf4548af6a"],["/2022/05/31/MySQL基础/index.html","ad521c72998115a411bc96cd927858ac"],["/2022/05/31/String/index.html","f8eaf55221d2b765e9eb5395b31c2a14"],["/2022/05/31/final关键字/index.html","2d3826eb701263bbc77ac1dbbe3ece86"],["/2022/05/31/static关键字/index.html","88055d5e6c0a554dc4192e7260ef58ff"],["/2022/05/31/this关键字/index.html","311d655b9db278856aa397907cd80da9"],["/2022/05/31/冒泡排序/index.html","ba3509e18721a01cb8d368f92314466d"],["/2022/05/31/引用类型使用小结/index.html","54a9443ae58c190577eb5093795627c9"],["/2022/05/31/抽象类/index.html","eb37165844f75527a4d47fbc0da977af"],["/2022/05/31/接口/index.html","264964bdc039390eec24d81af5da27eb"],["/2022/05/31/斐波那契数列/index.html","cb6a5cf0bfc87eda999d9ab51735ecd0"],["/2022/05/31/类的五大成分/index.html","5ee6396fd7438ece1cc750b223f2bb70"],["/2022/05/31/选择排序/index.html","377e723be91417540683bada930129ac"],["/2022/05/31/面向对象的三大特征/index.html","503964734fda73a9ed94eb0a75bc02a7"],["/2022/06/01/01.初识Python/index.html","1a172e432ff7e456daf6706e739aed9e"],["/2022/06/01/02.语言元素/index.html","96001720c98c056438b3e30e18bc5507"],["/2022/06/01/03.分支结构/index.html","3b46a4cd60429654dbaaf8a24dff08a4"],["/2022/06/01/04.循环结构/index.html","7a40b050bde5590515ab0fc3146a86b4"],["/2022/06/01/05.构造程序逻辑/index.html","e612d4a4fe3fc32ad5b0d1778455f55b"],["/2022/06/01/06.函数和模块的使用/index.html","ed67b03b8b0d0e3b4648388c215ee3fb"],["/2022/06/01/07.字符串和常用数据结构/index.html","149809f2ea39c846c87e79cfff3dcd9f"],["/2022/06/01/08.面向对象编程基础/index.html","04c96e226cff7324b15d5157db6294b6"],["/2022/06/01/09.面向对象进阶/index.html","1c3efa241e662edb63b6232bc0d351b9"],["/2022/06/01/C语言笔记/index.html","f6ebc702df000354827cf6e21e50de3a"],["/2022/06/07/安卓基础-布局/index.html","1eb3442e0d36a9d3ffe59cff5b7c5973"],["/2022/06/28/C51单片机学习笔记一/index.html","f861c50a925416401c46e0e6af7b0ab1"],["/2022/06/28/C51单片机学习笔记二/index.html","05f5802a1df83acbc6ae7cfb982b3424"],["/about/index.html","1242453ab19c158e992d0c469535202b"],["/archives/2022/05/index.html","fa7c491b650446fa1fafa8920299efb4"],["/archives/2022/05/page/2/index.html","7d7e4b1ec0b133e88aeed423f22402e7"],["/archives/2022/06/index.html","446e42bb7a16be20789a93b0d673b0ea"],["/archives/2022/06/page/2/index.html","e82bea2c83effa3d243945faf8a00954"],["/archives/2022/index.html","ea82272d18d94bc18dac14a1c8fd7742"],["/archives/2022/page/2/index.html","c50b7e065a90742354c8f0ac63feb51e"],["/archives/2022/page/3/index.html","efe36f21e856ad34338bd545ac82ecdf"],["/archives/2022/page/4/index.html","84e14e902543cc2e2a5c54460ef886ba"],["/archives/index.html","1779f62dd7f873ad5431c19eebe13bfa"],["/archives/page/2/index.html","0dbb1b1c9cf591bb2336d0dbfc3956b9"],["/archives/page/3/index.html","7ec142ec93bed24047845bd6bd492c09"],["/archives/page/4/index.html","e5bf104d7545788a576dd004f206de10"],["/categories/Linux/index.html","739550dee675453af82eed18ebe346f2"],["/categories/Linux/vim/index.html","9cd224dcf745961ec62b8492fe4b0939"],["/categories/index.html","70b689408d9cfd29584b50217920afbe"],["/categories/学习笔记/C-C/index.html","f6097c45fd320d7230419a734e60530f"],["/categories/学习笔记/Java/Api/index.html","e705c896bddedbb6c1ca40c117b52a2a"],["/categories/学习笔记/Java/index.html","ae15e48de4abaee314a97b3ae14ce188"],["/categories/学习笔记/Java/page/2/index.html","9887bf9153ed0887a6251d458131d514"],["/categories/学习笔记/Python/index.html","422dcc55a6e6c069072b54dde72572ff"],["/categories/学习笔记/index.html","c60e07a1c6dbdcbc198c8281a181ecb1"],["/categories/学习笔记/page/2/index.html","79551bcdf655a83e5df0a1b2ca1a600f"],["/categories/学习笔记/page/3/index.html","c84b8488b1f265dda7799a6c5f9d1175"],["/categories/学习笔记/单片机/index.html","7749745e051b53edbd7b521585a7b87c"],["/categories/学习笔记/安卓/index.html","39061c2ce03ab71064688fcdca2a217a"],["/categories/学习笔记/数据库/index.html","4229e288781491976c76c8bebc902cc6"],["/categories/安卓/index.html","ff01d8a03c928fdb8465f33c5d456508"],["/categories/安卓/新大陆/index.html","8db787a69eb4519ea75eb16c3d55f066"],["/categories/算法/index.html","c2e5544be97df5b791f140d160d027fc"],["/comment/index.html","7e4c7789b5029b65daaff45b71d05191"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","38edd29cc60c7d92db07231285dd32bc"],["/gallery/index.html","b52e9228ea25eea530ef5308a2c67437"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","03bccac895f18ac5db0b9735682011b4"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","12d6670b3dae130603cf9d3ae31b8223"],["/page/3/index.html","e920b0c1109f47c4dd888c754be9ad6c"],["/page/4/index.html","49b46646907c4a3bbbefcc57c5d70e3a"],["/sw-register.js","a8c67b028182cc3f6a64890d85627bde"],["/tags/Bundle/index.html","8f216b8550abade3ac9005e270190955"],["/tags/C-C/index.html","7de34e01eb63250bdbb43c061e17e296"],["/tags/C51单片机/index.html","c8cf06b01fb5a65be48b57486b08020f"],["/tags/Intent/index.html","6aa9852176aacf4e5bd4102db9e7bafd"],["/tags/Java/index.html","bb015f7ab2bcb1c1bfdf2651f06e9ad8"],["/tags/Java/page/2/index.html","b196319460399989976f4a41f2fe13ff"],["/tags/MySQL/index.html","362c9f00bdb528bf676614e63c736b7b"],["/tags/String/index.html","d35f4dcf00a40cf45fb4c440ca309e02"],["/tags/Thread/index.html","3fee51d9635691f44e613920495de377"],["/tags/api/index.html","793ddd7225b0f1a0a20cd9c2db6b0111"],["/tags/gcc/index.html","49bbdcd8642acc40b9419d25ea0eeb8a"],["/tags/index.html","b70e83f394cd146fe2be85a94aff6af8"],["/tags/python/index.html","d3d98fc8ada1c231770e77b0d09476e0"],["/tags/vim/index.html","66f3bfe7016f9163b8e1dd91dd0f693b"],["/tags/云平台/index.html","55f3298e854f715b909746d0dab3e61b"],["/tags/冒泡排序/index.html","950698b8702cdbef22d490a2a50aa627"],["/tags/安卓/index.html","aab89366fb685d800b7be4da735a79ba"],["/tags/定时器/index.html","ec283badd91b6e5faab9f34e14531479"],["/tags/斐波那契数列/index.html","9d72df39a80e771e5073eb317bae4f74"],["/tags/新大陆/index.html","9279b690b0ac8cfbbd24dd3daa150d86"],["/tags/选择排序/index.html","1dcebd5d4d7a4f86d92c18f35c11d725"],["/tags/面向对象/index.html","15f0adcb2013c4d12751e88b4c5f6b8e"],["/tags/面向对象编程/index.html","dbb573fdc4ec74717485011701b70062"]];
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
