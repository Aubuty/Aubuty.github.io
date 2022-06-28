/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","5b193b6897bb582a23701766947ddb78"],["/2022/05/31/Android新大陆云平台API使用/index.html","281e427ddd2d048d94f057b2ae78db1d"],["/2022/05/31/Android页面跳转/index.html","0e50459bf3cd98ce3945c8b4fbc35c86"],["/2022/05/31/Java内部类详解/index.html","4bb3d4bd8c1e6d1cab6b3ce85066bf62"],["/2022/05/31/Java多线程/index.html","78c7c23a02d4261d9658fdf500f1087d"],["/2022/05/31/Linux-vim的使用/index.html","9b89cc4b9de5a26112f8dbe3d3eed8af"],["/2022/05/31/MySQL基础/index.html","929592d5c246de573df255623a3a23cd"],["/2022/05/31/String/index.html","9f6997cb936862b7166605efefe3876f"],["/2022/05/31/final关键字/index.html","452ff0b18ebec5030577246485bfe247"],["/2022/05/31/static关键字/index.html","fc3ed2268bff07a90addd90df28cf550"],["/2022/05/31/this关键字/index.html","8d4ad340ae8081feb68baaac41ad5db4"],["/2022/05/31/冒泡排序/index.html","dc6eed33d705aa1f039cb55d4bb1cb24"],["/2022/05/31/引用类型使用小结/index.html","0cb4fdf867f29a3f6ebfe25713e0e7c9"],["/2022/05/31/抽象类/index.html","ff38cebe9490f89032034b3a5713818b"],["/2022/05/31/接口/index.html","2ee65f6ad96ad64c79dad9724074bfe7"],["/2022/05/31/斐波那契数列/index.html","551b427756741e871b0b3b2039d8e739"],["/2022/05/31/类的五大成分/index.html","f87abe021f6b316a0394f35e39f2d83e"],["/2022/05/31/选择排序/index.html","b6c3fb06bfe1b02131d6fdc7d29a6b8f"],["/2022/05/31/面向对象的三大特征/index.html","b8bfdfc0e761bce6e1738a558ad96bc4"],["/2022/06/01/01.初识Python/index.html","9b2d8dd3b0e1c93f5066612f75e08789"],["/2022/06/01/02.语言元素/index.html","c7c4934788bf1e74ad6073eff31cb99a"],["/2022/06/01/03.分支结构/index.html","0ca9d745e9bf570ee4b72d6fa2c0db57"],["/2022/06/01/04.循环结构/index.html","fab4417b6bb97292b6e1d2610da69011"],["/2022/06/01/05.构造程序逻辑/index.html","928c360646250da9ea9294c7bbb8b079"],["/2022/06/01/06.函数和模块的使用/index.html","7c9f5fe9c53c6c2160a9ca1be62f77a3"],["/2022/06/01/07.字符串和常用数据结构/index.html","807f304e47a5046314e4eb633fa87907"],["/2022/06/01/08.面向对象编程基础/index.html","962d7be986f04f6ceb7bb2ed759b4efe"],["/2022/06/01/09.面向对象进阶/index.html","f873b750d393408c17a40d0990272bfd"],["/2022/06/01/C语言笔记/index.html","4f2dc058438e06ae3a21755abdeda215"],["/2022/06/07/安卓基础-布局/index.html","cf54bc92c33101aec62c539be482c4aa"],["/2022/06/28/C51单片机学习笔记一/index.html","3529ae38cd428c20eb2227dd409494c0"],["/2022/06/28/C51单片机学习笔记二/index.html","f228ef3e1d84f860d1812be29d0e886e"],["/about/index.html","e5fc64f20aa1d34dc0e105c060d25e1d"],["/archives/2022/05/index.html","ad3135aab94673724394fc6988124ac4"],["/archives/2022/05/page/2/index.html","e6fdf7b15ed60f50938c3d30dbb935e1"],["/archives/2022/06/index.html","d157be95c569b671c8bd339c0a8b88a7"],["/archives/2022/06/page/2/index.html","14c7b24a51278d73bb011bb568d0ec6f"],["/archives/2022/index.html","d55be4494fccf2fa93812383f999c87c"],["/archives/2022/page/2/index.html","46d00e6397bca44ea1bb21721c655543"],["/archives/2022/page/3/index.html","720178c8af745edbf2a125886dfb13c4"],["/archives/2022/page/4/index.html","19adc9394eb5705bb752cf8685fcd39c"],["/archives/index.html","10ef83bb971cb487a9be38451a9b7a1e"],["/archives/page/2/index.html","561da447b27768ca76769c651e173139"],["/archives/page/3/index.html","4108a8a6d66b1fc41f80060f32cac44a"],["/archives/page/4/index.html","e38b7f2f1daf4dbcc1485ebb7ed1ce9b"],["/categories/Linux/index.html","b49c6e5adcb87450a24d5ce5cf15b002"],["/categories/Linux/vim/index.html","70e7faf5c1d17efef9c6dcf73d3dbf66"],["/categories/index.html","2d4ee47f6feac29fd11a69f6dac0b869"],["/categories/学习笔记/C-C/index.html","046f30f13b7eed1aee6bccbe7036c99a"],["/categories/学习笔记/Java/Api/index.html","74828a35daea441118c5f77727a6d9a8"],["/categories/学习笔记/Java/index.html","76e3e8734ddbf6e39c0a7c22c308e091"],["/categories/学习笔记/Java/page/2/index.html","eb683985a116eacb9a94ac93a66313c6"],["/categories/学习笔记/Python/index.html","96614115c00a872db4da67e770bf2f5f"],["/categories/学习笔记/index.html","0d46e73d26b8f3e19a748fde7d36c9d9"],["/categories/学习笔记/page/2/index.html","021bcbadc2991cc4a2105881f041da5b"],["/categories/学习笔记/page/3/index.html","91d4009568ee187885a7d1ba02f3d5c7"],["/categories/学习笔记/单片机/index.html","96354733762286166dc281dfbcca5ba6"],["/categories/学习笔记/安卓/index.html","06ffd376d47d0b524f898fc28ef8dec2"],["/categories/学习笔记/数据库/index.html","8b104c9cd88275a586be539f7e165e2e"],["/categories/安卓/index.html","9614e03c1c1572c29848828c51e109f4"],["/categories/安卓/新大陆/index.html","163435124670ca76cde4a92c4ebe4219"],["/categories/算法/index.html","7cd75d18cb25cd0b7135091b8c7913db"],["/comment/index.html","205cd5dda2a292c33fc8829963320b68"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","8389eb7eb9b09519c91d310ab88d7706"],["/gallery/index.html","f55b53910fc9b2c638c2b68e112c2770"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","ad54fb3ff988c82cdb22911b6c741cff"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","d2cfbc1c8a6863f62eecbc14d4971509"],["/page/3/index.html","94791647d829b07fb2121793791e88e9"],["/page/4/index.html","270fc4e6c70ad9eff56f1705ccf51315"],["/sw-register.js","0adc69c7a8056d5a94fab684fcf65d35"],["/tags/Bundle/index.html","178d7a9e23aa72ebd4e9708d1faa1d20"],["/tags/C-C/index.html","8460fc7a62e1dce8dded71665abecfeb"],["/tags/C51单片机/index.html","dcb052970ecaa186f47aa64ba162f8f1"],["/tags/Intent/index.html","934564be32e4324232858869ee78c557"],["/tags/Java/index.html","9e56cb71566c09073946b299e9159913"],["/tags/Java/page/2/index.html","7446714034c6e5e5696e30559fb00d65"],["/tags/MySQL/index.html","eb67afd9e2bb0cecca04b7cd246da539"],["/tags/String/index.html","2b3a684661806921290cfc854bb5c2dc"],["/tags/Thread/index.html","08a180b1265fcc5661635e5b914fc35b"],["/tags/api/index.html","5fa78d95c2a3c16294fd509e36e7b220"],["/tags/gcc/index.html","86ae36cf06b8ecec7a56396cdd5df8a8"],["/tags/index.html","dcac2d12ec26e8e94313f42acd63b657"],["/tags/python/index.html","76d757ad37b7c18a7a35a48744f71f60"],["/tags/vim/index.html","5be3897e159c58a076f8fbf55f8caf5c"],["/tags/云平台/index.html","98378dcc58a7123206eee9f162915127"],["/tags/冒泡排序/index.html","86cb65f578fe2b127987e2a550f74f56"],["/tags/安卓/index.html","68c86537b8fb5ff6797fa8fcbe8c6613"],["/tags/定时器/index.html","8243396950a11c2aafe6b9660def0e56"],["/tags/斐波那契数列/index.html","bfd7f534390473aecb8033832ff20a43"],["/tags/新大陆/index.html","7826d6a6510a1394515058c70ff95749"],["/tags/选择排序/index.html","90aa5ff3d994c6d4aa00eb2dac717c0b"],["/tags/面向对象/index.html","1f147fe0540857970256e51e4427e751"],["/tags/面向对象编程/index.html","59b4e3f3a2891b81844022a42dc7d86c"]];
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
