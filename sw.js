/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","5058f11c06eed89db1e2397051df02bd"],["/2022/05/31/Android新大陆云平台API使用/index.html","cc08dbaf5f5b32fc297c7ba1d4d2175a"],["/2022/05/31/Android页面跳转/index.html","6a8d23e1bf9342686902c879281f3c22"],["/2022/05/31/Java内部类详解/index.html","14690d54985d40d68aea6d336eab479f"],["/2022/05/31/Java多线程/index.html","5a4d8203854f3ef90585bdee3aabf4c2"],["/2022/05/31/Linux-vim的使用/index.html","39f5ef1c1ea3d73f636e0f03ff28466a"],["/2022/05/31/MySQL基础/index.html","397ea5e7a99ae1c23f73260bbb07f74f"],["/2022/05/31/String/index.html","51a61785698ebbf3378598383c8739af"],["/2022/05/31/final关键字/index.html","c8ff4ae0a77fed6f0c0bd16c94365ae6"],["/2022/05/31/static关键字/index.html","4ecfdd2a2f79a837eac11a8969e1ad11"],["/2022/05/31/this关键字/index.html","ff0f53d223904610fb9d7c9d77fec4b7"],["/2022/05/31/冒泡排序/index.html","3c4b38d1ec91f802adaae2e13a7d2444"],["/2022/05/31/引用类型使用小结/index.html","6aa6cf03a105a0eed7ec39469540e20d"],["/2022/05/31/抽象类/index.html","c21f25edd48716d78efe466b6c887c82"],["/2022/05/31/接口/index.html","4b82e5b1c49fd21ec636cee0c5d1f7ea"],["/2022/05/31/斐波那契数列/index.html","2bcb74b48b763f1546880ebabd24552b"],["/2022/05/31/类的五大成分/index.html","03d18eaf7fb951dd8c41439710dd60b7"],["/2022/05/31/选择排序/index.html","037ac789e3613c106c9d725db317ba2f"],["/2022/05/31/面向对象的三大特征/index.html","4085ef5f1123582f56073026f35dd755"],["/2022/06/01/01.初识Python/index.html","037fbd88c0a5df40c3c7c1683d976f22"],["/2022/06/01/02.语言元素/index.html","71301bac5631f67b7b183148a410c4fe"],["/2022/06/01/03.分支结构/index.html","c934ecc1c21d2dcb35b368cb4e373b05"],["/2022/06/01/04.循环结构/index.html","5a5897008688f89256d8a4e141fd17fd"],["/2022/06/01/05.构造程序逻辑/index.html","589758390bc8b03e917e09d677e29da7"],["/2022/06/01/06.函数和模块的使用/index.html","4e091c2be9f374440739ce29f8813e80"],["/2022/06/01/07.字符串和常用数据结构/index.html","406299ef3787e50d3213038c7eb45bed"],["/2022/06/01/08.面向对象编程基础/index.html","322c1d315e5e6996d5b920d730eb610b"],["/2022/06/01/09.面向对象进阶/index.html","3459c7609ac320b6eb47a156a83c997b"],["/2022/06/01/C语言笔记/index.html","7cf1ca97db883079cdc33740cd259a78"],["/2022/06/07/安卓基础-布局/index.html","b6c9882934a07f94e0a1bf5a888a0ee4"],["/2022/06/28/C51单片机学习笔记一/index.html","66a0163df0a8bbee0716593cb2caad51"],["/2022/06/28/C51单片机学习笔记二/index.html","0656b1a9c54b30fbdd92555f1b40a6de"],["/2022/06/29/C51单片机学习笔记三/index.html","9878b7cb3a5babe08e81b1d1ab83961a"],["/about/index.html","d4e0b6b554d800a7560ebbc375e4b2e4"],["/archives/2022/05/index.html","d8bcb368dfb25c4b3d35355814ed474d"],["/archives/2022/05/page/2/index.html","2e1c7b1de96a40519367fd055068fab9"],["/archives/2022/06/index.html","a4720754feee1a68a4a1f049d35af512"],["/archives/2022/06/page/2/index.html","efb0d73b6d8a08665d6eb94544a9c50a"],["/archives/2022/index.html","86b6b56f5ca3924ecab77616b3e7a666"],["/archives/2022/page/2/index.html","250fea9d8aa699a037c4e971e73133ac"],["/archives/2022/page/3/index.html","dce53a4e122e3a7c983a833065e7da4a"],["/archives/2022/page/4/index.html","127c4aaa24240287852f254cec779c9f"],["/archives/index.html","1941639620345161db6ee21948e5937c"],["/archives/page/2/index.html","32a5e7ec5576f8467618e74c5e7b2948"],["/archives/page/3/index.html","ffa689daf24aa2ba10edd33309dc659f"],["/archives/page/4/index.html","8f227fecca43e1e793ec9e261036bf3e"],["/categories/Linux/index.html","e38895af819fe580b6cbd1a1dc687b7f"],["/categories/Linux/vim/index.html","07736cf92756399f3182a0a01b51ba05"],["/categories/index.html","93a44cd5fb7f568dda8a0c9d5b30a58a"],["/categories/学习笔记/C-C/index.html","b557f583c8e28e29bffecf77dedf220b"],["/categories/学习笔记/Java/Api/index.html","497b7243745317a8b2b14fd0ce7eb042"],["/categories/学习笔记/Java/index.html","6fd919dfb830e99078ed805295137b88"],["/categories/学习笔记/Java/page/2/index.html","7686a53833aff7cc35f11e5905c28ae2"],["/categories/学习笔记/Python/index.html","6faac639d34fa2ae9a7e85a9d13fd5e3"],["/categories/学习笔记/index.html","c65fb85e5235097095a0905cc8928086"],["/categories/学习笔记/page/2/index.html","d1c507965a8d720cf65eee3ac7e5bddb"],["/categories/学习笔记/page/3/index.html","2508a43dc1dcc89509cf64483244cdcf"],["/categories/学习笔记/单片机/index.html","7d170bb5b91d31baec8e90a6d9ee08a8"],["/categories/学习笔记/安卓/index.html","606fe7340fe52ad574b97a0378f7800a"],["/categories/学习笔记/数据库/index.html","b3e9691749ea446da9ea2824e6d7896c"],["/categories/安卓/index.html","b0d2f5fa26484a3e2391f4fc0ddcbf19"],["/categories/安卓/新大陆/index.html","b80846ebd9d377d6f2fb27ac83645599"],["/categories/算法/index.html","5fa05364a47591e8987354131b3cab4e"],["/comment/index.html","316539b53d1f2cb69050b33e4e3d2eda"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","cb47b37c8a4cc96371bd48b851570867"],["/gallery/index.html","15dbce89f9f6eaa748550423e8654006"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","3e4a674ecc6b5be7f209989a1426786f"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","b62bd044b8992ba0af4bce9442cff39e"],["/page/3/index.html","6486cb6a53e41d7d87e79b11c42ab242"],["/page/4/index.html","defdda7f7bf531612d97a6c1c705b6c0"],["/sw-register.js","8c3e8736feac546332d515e2714e1610"],["/tags/Bundle/index.html","548d3caa6ed65970d18c7de0114fff41"],["/tags/C-C/index.html","6decac215c31b28c1dfd4d761281c8da"],["/tags/C51单片机/index.html","16e4dc17591968f3b8586d7bcaa32fe1"],["/tags/Intent/index.html","6ef5d86d2ad25f581b795fd85bde2833"],["/tags/Java/index.html","d737a0fd48c3a569673f783368fedc19"],["/tags/Java/page/2/index.html","1282e6b5f5dcf665207ea0f607258707"],["/tags/MySQL/index.html","9a8fd6e5cee82b11ccdbea8284c0d0ad"],["/tags/PWM/index.html","b73445698a24149416cd9760ed5bed45"],["/tags/String/index.html","789e616aef94ff9d7adaa0711d34a9cd"],["/tags/Thread/index.html","aa510911c19a42a7cd081d0a9ae9d84c"],["/tags/api/index.html","78027557a8999fd0293eff1fb48727af"],["/tags/gcc/index.html","e0ead411f705e41a0367f5d9578d8385"],["/tags/index.html","c62902779d313f89fa64c5e9d33ada39"],["/tags/python/index.html","553440641e8ad0a67dfc16cd9b56d89a"],["/tags/vim/index.html","b9af6b3b08e31bfb14f3e7cafcddc502"],["/tags/云平台/index.html","126b81a09421709b3a05cd12f4211b97"],["/tags/冒泡排序/index.html","55417df038671d86e0ff6f04fb2f61b0"],["/tags/单片机/index.html","c859bcfdc831ee9e55999363ab1042f3"],["/tags/安卓/index.html","cf5a26c414b82f792fc006b3bdbcb88a"],["/tags/定时器/index.html","da9798a4701573476f99db282d9d462d"],["/tags/斐波那契数列/index.html","6b86fae43424724d02bed173d34348e6"],["/tags/新大陆/index.html","7987c554c15b99aa9bae25557ff530bc"],["/tags/选择排序/index.html","d102a73eeae37b5f15485d2bb0f0fbd0"],["/tags/面向对象/index.html","440b8dd4f718d7f1e0eea57c685c67df"],["/tags/面向对象编程/index.html","d02f308f7e2e8f01c4a9d9506e384ab0"]];
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
