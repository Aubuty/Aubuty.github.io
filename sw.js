/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","1069eb435b82e8bfef1008ca0aad7d8c"],["/2022/05/31/Android新大陆云平台API使用/index.html","fcbc9bebb2924c71d89e07f2003f42a3"],["/2022/05/31/Android页面跳转/index.html","b55ea044fa33ee0a30fcba75555117b2"],["/2022/05/31/Java内部类详解/index.html","ef884e439ace908f84295a02d3cea9d3"],["/2022/05/31/Java多线程/index.html","b6e7bc806d16d26a8a6c162298ac1b4e"],["/2022/05/31/Linux-vim的使用/index.html","68714b389bc2d39166fd2f45934f7df4"],["/2022/05/31/MySQL基础/index.html","b71c38621cdd1c18762abc8b67e47016"],["/2022/05/31/String/index.html","6904f1960dd888859e3c2ce7857821b9"],["/2022/05/31/final关键字/index.html","b917628d7f469af0b7d99d9b1cc02f3c"],["/2022/05/31/static关键字/index.html","794ee153a0ef37124a897b31ba3966e0"],["/2022/05/31/this关键字/index.html","de08227c20042a5e78c08c15ac95cd34"],["/2022/05/31/冒泡排序/index.html","013377c06d2cd26d92a6b42a9666e981"],["/2022/05/31/引用类型使用小结/index.html","9275350e18d07c0fcf184c06c3f78fbc"],["/2022/05/31/抽象类/index.html","a13bb1f573507aaf0337900d8fe8072b"],["/2022/05/31/接口/index.html","725f7ff0b27adf99d1d6e52237b7df68"],["/2022/05/31/斐波那契数列/index.html","9ddc4cb62811ba512ca25676b14ef4a1"],["/2022/05/31/类的五大成分/index.html","f0e384cff4e9778fb9ad2feac4fc51aa"],["/2022/05/31/选择排序/index.html","9e13694f3ef72fb63a75bef596014b40"],["/2022/05/31/面向对象的三大特征/index.html","c5f3bb08c71a22b009aef0bf5aa7e82d"],["/2022/06/01/01.初识Python/index.html","6beb51930ecc493f8b5c0f6d64a77cd1"],["/2022/06/01/02.语言元素/index.html","d540236603cb7fb484ef009273b9c2a7"],["/2022/06/01/03.分支结构/index.html","4b2b2dd3b36df5c80ed742b2e2dfe9bd"],["/2022/06/01/04.循环结构/index.html","9f1e89160f8e4feb46543c1ed71dd163"],["/2022/06/01/05.构造程序逻辑/index.html","59684e2d35522152d9385f1df6d3bef0"],["/2022/06/01/06.函数和模块的使用/index.html","b0973c63ff0fece47d921765f7a244c3"],["/2022/06/01/07.字符串和常用数据结构/index.html","92a813503fa5cf5491136dfb3f5049f1"],["/2022/06/01/08.面向对象编程基础/index.html","57e86a85c288403e5110ddee000755e8"],["/2022/06/01/09.面向对象进阶/index.html","1336805bb51115d1f4f5d559a72561a8"],["/2022/06/01/C语言笔记/index.html","46ff52774242b34b2fcaf0d6a53162a5"],["/2022/06/07/安卓基础-布局/index.html","c2c1211714d09036ef9378dee753b401"],["/2022/06/28/C51单片机学习笔记一/index.html","a1d87690d0a4201e49905a3967de29ed"],["/2022/06/28/C51单片机学习笔记二/index.html","94354065d7b17e8cb8e5be4034952e71"],["/about/index.html","92c4af0e9dba6ed662195d9da777c0fd"],["/archives/2022/05/index.html","2b208b0c0d12af7562b8dc192155a1d2"],["/archives/2022/05/page/2/index.html","898918394d89d969429e0a40323c4166"],["/archives/2022/06/index.html","ce93da3efdced6c014b89572bd30a34a"],["/archives/2022/06/page/2/index.html","f438a77a7b0b13faeb5896fa0aa51016"],["/archives/2022/index.html","1d51fabbb7aa384678cac26723bd4ac7"],["/archives/2022/page/2/index.html","f976911466349bfff08cbff6f0c6ea85"],["/archives/2022/page/3/index.html","2e5e9f2c096402d02c18226e1f0965ca"],["/archives/2022/page/4/index.html","cfddd4c14788c3cc2d6eb70374d8dc80"],["/archives/index.html","9e006df9a8193df9161c5d362dc1eb5e"],["/archives/page/2/index.html","b4e389cd7ae432fb4f02b70e562e37b4"],["/archives/page/3/index.html","742c3296111679a0ae7e034ba67f7def"],["/archives/page/4/index.html","1b7eca38508854fcecd40b46d4dab7a1"],["/categories/Linux/index.html","2cd884640ff1a8faa4611fa88db9781d"],["/categories/Linux/vim/index.html","12144d06492b2db11fe0cb9314e378e2"],["/categories/index.html","d89d2ffcaf4e1690399424cb31753067"],["/categories/学习笔记/C-C/index.html","84a52de32c091cecf5406fdbdbc6c2be"],["/categories/学习笔记/Java/Api/index.html","02b89222c3522b452ba5841cb8df6bf0"],["/categories/学习笔记/Java/index.html","6ef669af544384543f7a943ca5f96b1c"],["/categories/学习笔记/Java/page/2/index.html","b52ff874314d613daebddd072206b47b"],["/categories/学习笔记/Python/index.html","379779682772bc61893419a5fc5f9918"],["/categories/学习笔记/index.html","c8417be148b5b2891a059b69d093e33c"],["/categories/学习笔记/page/2/index.html","a5850f59d654f23a1d5da6cad6836d5d"],["/categories/学习笔记/page/3/index.html","235f1ec9e9f92328767862a41b7c5a64"],["/categories/学习笔记/单片机/index.html","b3f4744ee14300c05b4a70eb68fc4432"],["/categories/学习笔记/安卓/index.html","623362221727663ca028295cf7f05f08"],["/categories/学习笔记/数据库/index.html","d4a077170795d1219ab019f4bdd56adb"],["/categories/安卓/index.html","f77a73afaf45fc6485064649750e2c00"],["/categories/安卓/新大陆/index.html","01ba08de8a1b9df7dbc9e311081fd628"],["/categories/算法/index.html","29d6f8bdd40fea3ed9effddd77fe1304"],["/comment/index.html","78811b75bb815dabbbff718eab18efbb"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","ea8064808a56c08b027ac5a2191d82d2"],["/gallery/index.html","54609b882b30a4152eaac447091462e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","8e90be6ff275a38ffb988835a412e18f"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","296741ab161bf36a981a2086ad78df80"],["/page/3/index.html","885f212f90636806b8ca02f7b1943bf1"],["/page/4/index.html","cd76383236b301c562c9084fdce45c21"],["/sw-register.js","b4c7a40d022fd5237db07e60976c7033"],["/tags/Bundle/index.html","fb6e6d0452d4501d218e3688281ebadc"],["/tags/C-C/index.html","b46f1ec0635993a486f69630bdedb7f2"],["/tags/C51单片机/index.html","4114425b958b4293fb67310d7274b9d5"],["/tags/Intent/index.html","775e16dfaea5c1eb44572b32eccd88c4"],["/tags/Java/index.html","16d1c4b6c485dec02b5305ab6e06adb3"],["/tags/Java/page/2/index.html","0eac55810d38204e671de9f3d77cdde9"],["/tags/MySQL/index.html","03a8d9c0d883389c4bc2cff33267bb16"],["/tags/String/index.html","8a2b05ba43d583e37dc3f3350cc534e7"],["/tags/Thread/index.html","aa163d15991607bede92333a3532fb0c"],["/tags/api/index.html","90d042960103fb3104786ea679c9f88c"],["/tags/gcc/index.html","052ef0a2fdfae74e1edcc657a7c6e1a8"],["/tags/index.html","a0d67e20ac04543f762863f2dc878646"],["/tags/python/index.html","fc31ce825343ce4f673824a28178ebfe"],["/tags/vim/index.html","a7fb48a44de3672dbd2324ea2c1c3d42"],["/tags/云平台/index.html","776e366e2235e743a6d5bcfd909abd15"],["/tags/冒泡排序/index.html","747ebf4d970442fd2ccc64e894e8405c"],["/tags/安卓/index.html","bedf622131c84b98ecaea117fed4ab35"],["/tags/定时器/index.html","efa7c3fe080c4e0715d3defdb18d3bfd"],["/tags/斐波那契数列/index.html","462a9695ca1a674241b9c373d2488b4a"],["/tags/新大陆/index.html","9d2b48b5138f013bea80c38441034263"],["/tags/选择排序/index.html","3a0379fde3c8909c9d9f556bf80b3d11"],["/tags/面向对象/index.html","6e692bf070182444c280676e25bba639"],["/tags/面向对象编程/index.html","6c681ec112c6ec43aa5a79a8d283adf5"]];
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
