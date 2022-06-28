/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","38ba1c53eca84162c62a0abfb81d5aec"],["/2022/05/31/Android新大陆云平台API使用/index.html","e8b6dde8b8b7aef255869417c4a665a8"],["/2022/05/31/Android页面跳转/index.html","f80d74043c815cd8fd409096efb82838"],["/2022/05/31/Java内部类详解/index.html","8e5820c9b031ace080848c506f58d8ab"],["/2022/05/31/Java多线程/index.html","f4624f062b3ae362035e087eb4f8327b"],["/2022/05/31/Linux-vim的使用/index.html","51befcb594d0e0a67eb56d99ed78ee50"],["/2022/05/31/MySQL基础/index.html","28a5ed446c5e2a996b3f673a3344d60e"],["/2022/05/31/String/index.html","97f11b8edebf843db8f2870ae8a9ad3b"],["/2022/05/31/final关键字/index.html","895d642f6a205bf104434b784d28a7cc"],["/2022/05/31/static关键字/index.html","a9f3f1abd4c476d69cae303c723316ec"],["/2022/05/31/this关键字/index.html","0499bc7da3bdb7199f312ae7c171f89d"],["/2022/05/31/冒泡排序/index.html","94f748ead8bca817dedc018e0c313f88"],["/2022/05/31/引用类型使用小结/index.html","2a325b5fe044045dfa8deb1eec7a24c1"],["/2022/05/31/抽象类/index.html","7459512c937cae85b86a1393d48fe68f"],["/2022/05/31/接口/index.html","62b152a51de43447e7399166b5f300cf"],["/2022/05/31/斐波那契数列/index.html","8d93c642b28303b37594e236a647e9a6"],["/2022/05/31/类的五大成分/index.html","aeb91c5e66d6c72b02f617538ed573aa"],["/2022/05/31/选择排序/index.html","4551f109c2579fef58bca9cbed84bf11"],["/2022/05/31/面向对象的三大特征/index.html","1a776fb8269c2451b325f11ed2ab9a84"],["/2022/06/01/01.初识Python/index.html","19ba6115b6a33f01730023e3d8c97c36"],["/2022/06/01/02.语言元素/index.html","f07b1451924cf0ef4763fbd258197167"],["/2022/06/01/03.分支结构/index.html","bdb7c6adf86d2b92ed986fdada95a792"],["/2022/06/01/04.循环结构/index.html","58e8427b99a66bafb06f0876c336a6ca"],["/2022/06/01/05.构造程序逻辑/index.html","14511754144114b6dd8f1fd8164f714f"],["/2022/06/01/06.函数和模块的使用/index.html","ebdecd3072b3cdf2f4a2044f9442092b"],["/2022/06/01/07.字符串和常用数据结构/index.html","2ec6724529a4e2eb9b9cf10c7164ab35"],["/2022/06/01/08.面向对象编程基础/index.html","9e22dbced4aa23009647528ad360fa2b"],["/2022/06/01/09.面向对象进阶/index.html","1e640115ddbef763d50642d7e0acb6d6"],["/2022/06/01/C语言笔记/index.html","9839e98580e5a4391949f1769ed1a11d"],["/2022/06/07/安卓基础-布局/index.html","d2957bc7d953a1c0262555aff4864d95"],["/2022/06/28/C51单片机学习笔记一/index.html","f31fe63d397a5d242b82473539d9dba4"],["/2022/06/28/C51单片机学习笔记二/index.html","a4e57a5c20b6010d74674ab88fd37366"],["/about/index.html","eae45740d9bef5668c789bb2c95f3961"],["/archives/2022/05/index.html","0129ecd84fec8e95706b4f7fb41c1b85"],["/archives/2022/05/page/2/index.html","0dfc1eec1e4536012bcd7e8b3c231d0d"],["/archives/2022/06/index.html","fa40ac6ef97feca3e999553b58d13a51"],["/archives/2022/06/page/2/index.html","8abe1cf765ad21ddf9afb225eafb12e1"],["/archives/2022/index.html","b445f94d9253351919bb3dd324d74dd0"],["/archives/2022/page/2/index.html","3b26e558c52e434d8e7648379a3b6ddd"],["/archives/2022/page/3/index.html","f014fe8d485a0e3dda7f9febd72ef2bc"],["/archives/2022/page/4/index.html","64dad673a2e21fe681e3320c8e84c787"],["/archives/index.html","0c57ea66b5460011697cf6495674e75f"],["/archives/page/2/index.html","e02d3d607c34789fada3c962a0baf614"],["/archives/page/3/index.html","24d01158ca35edd1c408bbb8ba7ddf49"],["/archives/page/4/index.html","bc6fcd4b49f182833463da816677f745"],["/categories/Linux/index.html","dc0bb3fc0ffe9f046de478d8a8c279b4"],["/categories/Linux/vim/index.html","d4cd42b989c66863dc268da8280b0092"],["/categories/index.html","da87718e24422245fd6753c2c01c2d0a"],["/categories/学习笔记/C-C/index.html","811fef77feabeed59681bafac3d08a7e"],["/categories/学习笔记/Java/Api/index.html","50c32ebb28413686c8dff4c77a7adfb1"],["/categories/学习笔记/Java/index.html","b5350c7db04bb5e424454bb8237da13f"],["/categories/学习笔记/Java/page/2/index.html","e7696cd4b59dd3b38f7b6f3ac10ddd81"],["/categories/学习笔记/Python/index.html","4c0359520075fafb3bfe1a8bfbd02750"],["/categories/学习笔记/index.html","13b901682ddb0080282e68e43b995e38"],["/categories/学习笔记/page/2/index.html","ce73d21d335809e07cde1e7ed3ba8501"],["/categories/学习笔记/page/3/index.html","437d636d36e2f03d4d625ebb77d0b9ca"],["/categories/学习笔记/单片机/index.html","1f8a28f82a3b9b51d38c06ecf9074c96"],["/categories/学习笔记/安卓/index.html","20a09310e4d9c6bc99db957010016b4a"],["/categories/学习笔记/数据库/index.html","01dc1d56d9f8b666941b9557fdd797db"],["/categories/安卓/index.html","15f46cb7b10556226bdeaa295ad4e8a6"],["/categories/安卓/新大陆/index.html","49dc59e609a00d2c75b344961ddbfcc8"],["/categories/算法/index.html","79f2494eb4fc0736ca1a8756de51f8b8"],["/comment/index.html","68a67c2c1d1cd8e9e7da8f23ab277e1c"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","09247740dde05dafec87e0d38f3d35c9"],["/gallery/index.html","ab2b8fbb708605d0bb5d8ebf367ab7f7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","c7e4585436b146877490176c80c72e3d"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","dcd2ff4dae0013ae5d050f482aace413"],["/page/3/index.html","5a2d8d3c15869252e89c15a2f5a92025"],["/page/4/index.html","844fed156d302530fd7571f0551e2974"],["/sw-register.js","3e703a27fdd03c95a778097fcf5f2ed3"],["/tags/Bundle/index.html","f3656a13df410199e29b7218ef0d61c5"],["/tags/C-C/index.html","9dbe8c3689aee4f531a611f6b1609ea7"],["/tags/C51单片机/index.html","becbc3dd1c56d7a6aeec87b93ad557ae"],["/tags/Intent/index.html","5cb0baa8b232868df184074dc7bd61a9"],["/tags/Java/index.html","076b304695698ac3721b0f3578cd2348"],["/tags/Java/page/2/index.html","c99ecb9d6495a5dcc62a45db96bdd345"],["/tags/MySQL/index.html","c75b7ce048af1d5319ce1033a3c05d9e"],["/tags/String/index.html","45a0bca35b3fe3ed199887b0c4b50909"],["/tags/Thread/index.html","9a9ee6b8e662bd016d3c4dbe669f4628"],["/tags/api/index.html","fc27fd6e3abcdb2913093dedcc357e9e"],["/tags/gcc/index.html","5478b97e7b06295372f3f06bef2b6bce"],["/tags/index.html","cf20725012cbf4bebeb15b8340036ebb"],["/tags/python/index.html","09796e178b280fd43c3111aed2700bf3"],["/tags/vim/index.html","073c9bd40600eeea6984c049231a733b"],["/tags/云平台/index.html","31e990305b195610a8130138b91439e4"],["/tags/冒泡排序/index.html","2a5d2df37b33641664fada8ff278f40b"],["/tags/安卓/index.html","d69c78435ed2f10585f0eed64be1da1d"],["/tags/定时器/index.html","fe9cf0565a3293d9791f3e163f80b2cd"],["/tags/斐波那契数列/index.html","facc84ccf86505b802fb23763d10a3aa"],["/tags/新大陆/index.html","5b482955d992bb979c92467dc1d5d388"],["/tags/选择排序/index.html","ea9be508e5e9b238c030f37cbb933f8b"],["/tags/面向对象/index.html","7c323c420da8da7819cd52a10fa9ed47"],["/tags/面向对象编程/index.html","7e9464e9c4aa21b6aa82f61c3877f7db"]];
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
