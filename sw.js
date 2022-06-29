/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","878f2b2874eb65127c4937185d968c84"],["/2022/05/31/Android新大陆云平台API使用/index.html","d2192cee1d5f36574d6612c704312fba"],["/2022/05/31/Android页面跳转/index.html","92dc05c52cdd9828ca724f15c7eb0075"],["/2022/05/31/Java内部类详解/index.html","aa0771a37012ed5beb5c1f8d9b898f15"],["/2022/05/31/Java多线程/index.html","ecc11621567482bcc3c2398f23a0c474"],["/2022/05/31/Linux-vim的使用/index.html","855165339559708f94619f2020ea51ea"],["/2022/05/31/MySQL基础/index.html","7fc2f856e4f571aedb477b20e92b8a7c"],["/2022/05/31/String/index.html","0c7c252be7348bda97f23b9547f7271d"],["/2022/05/31/final关键字/index.html","cbbba2ab958becb882021c77bb3cde59"],["/2022/05/31/static关键字/index.html","a4f47121009fb9cb701e6dc47e109380"],["/2022/05/31/this关键字/index.html","15e56fc3c77b9afe13e024b39017fdbe"],["/2022/05/31/冒泡排序/index.html","0d3941ad222ee7a6c544bbef3fdbda1d"],["/2022/05/31/引用类型使用小结/index.html","9483aab187b4110b0c14ccfea17315be"],["/2022/05/31/抽象类/index.html","3ec966e14102880f01e0ff72fecd43d0"],["/2022/05/31/接口/index.html","6272654875a4f1136cc039d9d68de484"],["/2022/05/31/斐波那契数列/index.html","1622d92718a3024a1e1abd3d48404fce"],["/2022/05/31/类的五大成分/index.html","3901f88793aa75182c3024987b3d72f3"],["/2022/05/31/选择排序/index.html","12248834661a7a98c1783c06da910327"],["/2022/05/31/面向对象的三大特征/index.html","a933496de9e31ca71b58a28c3dc590c5"],["/2022/06/01/01.初识Python/index.html","87c2ce72c88b174853311c3e7aefb09b"],["/2022/06/01/02.语言元素/index.html","4c4f38a83517fb417b427edbcce9b79f"],["/2022/06/01/03.分支结构/index.html","b2b1013dae89e9dc97a9809f37ea55b2"],["/2022/06/01/04.循环结构/index.html","efd9ed928a95565516c0a067ff4d929c"],["/2022/06/01/05.构造程序逻辑/index.html","6ef0bc5331875ce6ede4f1e7cc20c4ac"],["/2022/06/01/06.函数和模块的使用/index.html","368493a4f9fed0f5dc681de919d617c0"],["/2022/06/01/07.字符串和常用数据结构/index.html","975932f0fbb4640f28aec38e16c4f917"],["/2022/06/01/08.面向对象编程基础/index.html","edbd856438e8701b5b4143d2640009cd"],["/2022/06/01/09.面向对象进阶/index.html","34dc84eeb231490f7d0a6b94e1bed636"],["/2022/06/01/C语言笔记/index.html","0a0415f74dbca016e0f64bf123547e11"],["/2022/06/07/安卓基础-布局/index.html","991f1c9d7286ccda6f4b280c7dff965e"],["/2022/06/28/C51单片机学习笔记一/index.html","b219b3625b4df5397f0a245172c5e5b3"],["/2022/06/28/C51单片机学习笔记二/index.html","877dfef76feacace82d2fe58f356516e"],["/2022/06/29/C51单片机学习笔记三/index.html","ffef5c4a1a84f48a76e5ff2e6ec28b97"],["/about/index.html","4261b3a3e416c2fab0ee2f8f93b6cf5b"],["/archives/2022/05/index.html","761dbdc522dbac53943948fffeebece3"],["/archives/2022/05/page/2/index.html","47f27f5eed2dafa4ca3ddbac5c33ae9a"],["/archives/2022/06/index.html","4f5604b50450e19619c1f9fa202b619f"],["/archives/2022/06/page/2/index.html","c1220886292ca4bc089bd0279e3de37c"],["/archives/2022/index.html","9639b388546309659d71f3d7dc752560"],["/archives/2022/page/2/index.html","a26441451e026479a4455161f602457f"],["/archives/2022/page/3/index.html","2c7aace84e7cf0e012ffe0338c75868f"],["/archives/2022/page/4/index.html","953da35feab3ccc3ac9c806c759b5c6b"],["/archives/index.html","cb20c8e7bc2c0e48f03c5353137ba0a1"],["/archives/page/2/index.html","b0088f3e2f5ea41c23dd336fd2922fdc"],["/archives/page/3/index.html","cc9257b23d0c6187382b73da2090a4f3"],["/archives/page/4/index.html","1dfa0b650072edb8d24660430ea6dd4a"],["/categories/Linux/index.html","e08c4bb6a853af817c48726b8141a036"],["/categories/Linux/vim/index.html","13e1219bd1ae1951c3720840f9e589a1"],["/categories/index.html","484045120de5bb252bdcd61066d7a1a3"],["/categories/学习笔记/C-C/index.html","59d58746397795a8cfa3fbad016c4409"],["/categories/学习笔记/Java/Api/index.html","ff34546e52feebadc17e917caf2e8999"],["/categories/学习笔记/Java/index.html","49c975b196648d6380900b2fe95121a0"],["/categories/学习笔记/Java/page/2/index.html","463c7fb6cc946001f2f14f784aab3a5e"],["/categories/学习笔记/Python/index.html","c856e6d9e17c1761447d9641752d0952"],["/categories/学习笔记/index.html","7ad093e43789682e747a38df8af2bcd6"],["/categories/学习笔记/page/2/index.html","24f61cdc8bdccdee1340a92ed8af95c8"],["/categories/学习笔记/page/3/index.html","0f129700e40aca76481c0c0c9ece6068"],["/categories/学习笔记/单片机/index.html","71b5ba0a503b8ec9e3ea5bdde2ab9f73"],["/categories/学习笔记/安卓/index.html","47fd8b7c2acf20194eb79916d86e9543"],["/categories/学习笔记/数据库/index.html","2e07fc17b5d83503fd77959e4315b3ff"],["/categories/安卓/index.html","559dea490da2b498c6a367fd76079d0f"],["/categories/安卓/新大陆/index.html","1d91e39728f9f701c69eb425f6b650a2"],["/categories/算法/index.html","3f8e53e3a96aca8cfb17ecbe83fd9baa"],["/comment/index.html","08ffbcf38381d7f0f9b3ed3b5d57611f"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","23dd5c5ad0158f825487b4a238da642e"],["/gallery/index.html","dc5e4865b3215cc69149099701baa3cb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","fc8f15e099137ba940b48b9dfd44b398"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","c331082d4708fe996b9e49ec8c220b73"],["/page/3/index.html","89ad1648f0ab171d992f74905d1def5a"],["/page/4/index.html","6910d7a617d23d5cbed482f5408b8868"],["/sw-register.js","515cd1fee5d6e724b8700630168f8ca4"],["/tags/Bundle/index.html","ae3c6634c3f1ddd9545cc490be7cc7f0"],["/tags/C-C/index.html","70777f703079b3be6dc595a5bad025dc"],["/tags/C51单片机/index.html","902b315dac5d50797d3cac46651a541e"],["/tags/Intent/index.html","641762240a0962fee693baf150a09773"],["/tags/Java/index.html","8dd6bb331611241a0ed207ffda261981"],["/tags/Java/page/2/index.html","ca69590561ee540910144f92da286184"],["/tags/MySQL/index.html","6dfcd9d37cc0ced67c97528151ab82d1"],["/tags/PWM/index.html","85e0ee111f285add9ca4f3aa3d7f62a8"],["/tags/String/index.html","252a8c2346416804db4fa23cf08dbc41"],["/tags/Thread/index.html","b02babf366731c34cc4f43a8ee7da03c"],["/tags/api/index.html","17e8f6d048bd61a386d1e85d009a2484"],["/tags/gcc/index.html","f8074f05d7cc670ca93f2234b99f39f2"],["/tags/index.html","3f0732ce3919cf108ee8797203ab07fb"],["/tags/python/index.html","4a193538162eb27431765c99f78aaec6"],["/tags/vim/index.html","f9b4b71c343f6460918f9df6edf50557"],["/tags/云平台/index.html","76bed1fd62cc32b6d6b03cb7ae3fa7cc"],["/tags/冒泡排序/index.html","b27ce8d4db8361a33722bb9497001f76"],["/tags/单片机/index.html","6b84491036e146a1c705bb04ed26acf2"],["/tags/安卓/index.html","28b50f3e8273edeb043196422550909f"],["/tags/定时器/index.html","869beb0202c03078f4fbf432590056ba"],["/tags/斐波那契数列/index.html","1b85a64f2632f4ebfdc262eec94f59ce"],["/tags/新大陆/index.html","bd8164ca85d60481a90027c484a56030"],["/tags/选择排序/index.html","333860b4c88952c5404930255f79f15c"],["/tags/面向对象/index.html","e334f6e227391966e8baaf8bb99c658f"],["/tags/面向对象编程/index.html","b6a75d85ecb6302d8e9f5420b44d2845"]];
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
