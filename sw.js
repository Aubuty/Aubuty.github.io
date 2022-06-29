/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","ec142d0faa340d177ee5d179e3ebc8ca"],["/2022/05/31/Android新大陆云平台API使用/index.html","aae3aeb8922f17798f697fb70c03c858"],["/2022/05/31/Android页面跳转/index.html","349354624097f19001466a64203ce423"],["/2022/05/31/Java内部类详解/index.html","44739297558386551fb1dbc201046718"],["/2022/05/31/Java多线程/index.html","3b97662abdb4e26d58e34aa7c5c28c33"],["/2022/05/31/Linux-vim的使用/index.html","baf74dd28d4e92844a0593e06e1d0787"],["/2022/05/31/MySQL基础/index.html","6f1ad59570720afe3a3dae471a6bdb4e"],["/2022/05/31/String/index.html","f134afd539fb0fc81572c68629b80000"],["/2022/05/31/final关键字/index.html","96ce9a20d64125b7bbe68fe848dc3327"],["/2022/05/31/static关键字/index.html","5c5bd7f2ceff459e4c18c2fbb795067d"],["/2022/05/31/this关键字/index.html","42710dc1da58a81c247c82d8a88a54ad"],["/2022/05/31/冒泡排序/index.html","8854efb118cded1d46ca067a6df51454"],["/2022/05/31/引用类型使用小结/index.html","8f114af58783acad4f81cca39a72752e"],["/2022/05/31/抽象类/index.html","e61149e15232c8993c425321d59bb36b"],["/2022/05/31/接口/index.html","c563a526e5d585e4429de7aa30e75638"],["/2022/05/31/斐波那契数列/index.html","e357e832879f67d1e9b1463234584f44"],["/2022/05/31/类的五大成分/index.html","484256da04c3c924a430f335a6b188ba"],["/2022/05/31/选择排序/index.html","f475dbd2b4fa6dadcf22493c8dc20a01"],["/2022/05/31/面向对象的三大特征/index.html","1bdf4b339bc30a332c247762777f6e2c"],["/2022/06/01/01.初识Python/index.html","a4dc3eab9122c96b8fc23b646c059ef3"],["/2022/06/01/02.语言元素/index.html","a80c65e09eadb779fb91f301903a6d8a"],["/2022/06/01/03.分支结构/index.html","8f31052b3497d5e9d48c53fa35be2557"],["/2022/06/01/04.循环结构/index.html","2a6e3b4ddf35c5b9848f84a3ee02991c"],["/2022/06/01/05.构造程序逻辑/index.html","171d7b34f3d2047e11e377aa211f0bae"],["/2022/06/01/06.函数和模块的使用/index.html","5127ec39edf0114927f7dcd01c0bce75"],["/2022/06/01/07.字符串和常用数据结构/index.html","d6e43a155d38f8d2b94c97ca9401aac4"],["/2022/06/01/08.面向对象编程基础/index.html","3efc4684d1ad969b1c4179590eaaf966"],["/2022/06/01/09.面向对象进阶/index.html","6e2792e281749887052c268621827518"],["/2022/06/01/C语言笔记/index.html","a277885aadee2b34ab1490d95a7b5088"],["/2022/06/07/安卓基础-布局/index.html","a05a7b1b22866b0a09960feea36d9b99"],["/2022/06/28/C51单片机学习笔记一/index.html","d67c8e3b3e0468e5226443290018ac36"],["/2022/06/28/C51单片机学习笔记二/index.html","a92ef6c6bb2d72a125e42723c3c7da01"],["/2022/06/29/C51单片机学习笔记三/index.html","5f06c2a4cfb6475f15ff7079502482db"],["/about/index.html","ad1c24eaa6169f21a7cb481376c0e52d"],["/archives/2022/05/index.html","d9896bd5b8c4ba3b5367a02c57e0411e"],["/archives/2022/05/page/2/index.html","8a55d3d5426ad15a78d219c52e494b25"],["/archives/2022/06/index.html","ea758ab3260b22d45c82ac2b3bbefdfd"],["/archives/2022/06/page/2/index.html","8d6adaf879916e61b9b3c791490ebfd1"],["/archives/2022/index.html","8f1176266be8ef0e95541eeee5e5dca5"],["/archives/2022/page/2/index.html","6323b212809313bd169cf76a5856c314"],["/archives/2022/page/3/index.html","2ce1df75e426520f308887fade028f34"],["/archives/2022/page/4/index.html","9212e267a0b6cbbbba790338db49785a"],["/archives/index.html","2f7de1e6009e0bc9274de268767c934a"],["/archives/page/2/index.html","c76cbc7c59be2383037f5c5ca18d617a"],["/archives/page/3/index.html","19d1df8de61dfe3f21395d707a0a9b9b"],["/archives/page/4/index.html","ef027276602d0e3b8cf9a8c54323eae1"],["/categories/Linux/index.html","c3691406d2572f8f0dad6da034da51be"],["/categories/Linux/vim/index.html","8ef0c214444000a4f01a4aaf79f758da"],["/categories/index.html","baffb3c32f20c535c517bd71fc32ff62"],["/categories/学习笔记/C-C/index.html","b568483374b719baca7c9cbed1916f0e"],["/categories/学习笔记/Java/Api/index.html","1d27825cca1cb7763b43f75f4b64248f"],["/categories/学习笔记/Java/index.html","a605ec2dd4fbca246537c1770a5516bf"],["/categories/学习笔记/Java/page/2/index.html","ea490e31018ff805457bde598518a099"],["/categories/学习笔记/Python/index.html","a3e1f2745292399541837461232581ca"],["/categories/学习笔记/index.html","e8d9c0e90c1f0f3bf20cfad42298f436"],["/categories/学习笔记/page/2/index.html","dff04a97cb9618e34c9100eded486441"],["/categories/学习笔记/page/3/index.html","787436e726c563570b56c098bfbfbd7a"],["/categories/学习笔记/单片机/index.html","11f4364617e85b250ed542f65d96e692"],["/categories/学习笔记/安卓/index.html","098f729724982c3f667b1f11063cec47"],["/categories/学习笔记/数据库/index.html","0c182fba7ebf6b26fb590cfe9e08221c"],["/categories/安卓/index.html","2bbb92bba0f762168b87c40deafe90f2"],["/categories/安卓/新大陆/index.html","0f4b1d3ed0d11255bbbc530c947ce390"],["/categories/算法/index.html","1b3c167243d5b4a59fab00f571986b7f"],["/comment/index.html","f791c6a5b8faed5148074fcbf1811c2f"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","be9b199e0ae9775be7d8275b1f5c8408"],["/gallery/index.html","93521f9da02f0efca9e1856e549dea9d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","27bb820184fe1780438b787ddc5a072e"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","6414a305fbe49ffa042997374b8bab91"],["/page/3/index.html","cf18366834335a5802f64679257610fa"],["/page/4/index.html","1c17308202272cbba67675247f79551a"],["/sw-register.js","08c0905100bf8afad6765886b60b80dc"],["/tags/Bundle/index.html","385973e04073306c109208b696a4f478"],["/tags/C-C/index.html","975b0e5ace306d4cf1e9fa7a75feb843"],["/tags/C51单片机/index.html","cb711e014ad60629ee987893330a508a"],["/tags/Intent/index.html","224facf2c034f5763490444d00b135b2"],["/tags/Java/index.html","91608adaa02bae3bb3e044ce717f7064"],["/tags/Java/page/2/index.html","97456017aa06529815f8160210e56724"],["/tags/MySQL/index.html","442f78a912ae871c5be117e6d151774c"],["/tags/String/index.html","2ac0d283540cd9fd4556f11e0a61a506"],["/tags/Thread/index.html","3434e7edf099f5779314a79824266d36"],["/tags/api/index.html","a779a0dfa7068fde4a8862ebc7f4c7e2"],["/tags/gcc/index.html","89f23df9fc80f7f4bd14be6dca8557a8"],["/tags/index.html","c626917de53625058f422b831fa9fd00"],["/tags/python/index.html","bd5535dc45be434324b5b8fe3a03217a"],["/tags/vim/index.html","8aae8a9db2df2edc9420cc7194993a14"],["/tags/云平台/index.html","3ddee7d5d0586aef300804be7aaa36e6"],["/tags/冒泡排序/index.html","fc4d6e09601fc40e99fb8c4eb4638c3c"],["/tags/安卓/index.html","f85a514ee210256a5f932c9eaf588255"],["/tags/定时器/index.html","6a150497eea474ec72543cd40938eaec"],["/tags/斐波那契数列/index.html","75149036d91f7cdb843fe76d888e36fd"],["/tags/新大陆/index.html","99fab4cda636ded12275a5cbdaca32f1"],["/tags/选择排序/index.html","5e4f33457d55397eaa6f4ec75c3af8bf"],["/tags/面向对象/index.html","dec98927b8ad89d867f57beb5e76d45b"],["/tags/面向对象编程/index.html","99503fcfbf37f81f3bb17db27fe11330"]];
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
