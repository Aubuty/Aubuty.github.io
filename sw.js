/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","4314a18ec6b7f162d13622cab1433f1d"],["/2022/05/31/Android新大陆云平台API使用/index.html","5077dcd333d0d341a8be67d0bb7f8957"],["/2022/05/31/Android页面跳转/index.html","75be20c15d1e073f83897341ee7e13ca"],["/2022/05/31/Java内部类详解/index.html","af3d9a573219e7f392ddce84c709c213"],["/2022/05/31/Java多线程/index.html","dda9c2e14de1a9e3a7f5cdf4fa943b8a"],["/2022/05/31/Linux-vim的使用/index.html","620e126e479b3c760c54ca7e1b3bca7d"],["/2022/05/31/MySQL基础/index.html","91748a2c7da87867dac9386d0994f43a"],["/2022/05/31/String/index.html","9535f6ae6b5bd2ac1cd421309d943098"],["/2022/05/31/final关键字/index.html","7d7f345786069b4f22f0bdd9ccd9c771"],["/2022/05/31/static关键字/index.html","ce72342ada70e002da0085174f5e2e2f"],["/2022/05/31/this关键字/index.html","89a2056e86ea41f2ccc5f96f2a31d093"],["/2022/05/31/冒泡排序/index.html","327ba9cb6c2dab53a10878a86939f393"],["/2022/05/31/引用类型使用小结/index.html","130a78e5dcdd34a296387ff68fb17a92"],["/2022/05/31/抽象类/index.html","329ba597a576693dce9fd6d82731df8a"],["/2022/05/31/接口/index.html","8d6dc0781a9393b4ac0f6f4dab21c3c4"],["/2022/05/31/斐波那契数列/index.html","64f9df369fbc2aae6f42f99b42f57564"],["/2022/05/31/类的五大成分/index.html","40bd99a389263470f5c2bf2e82f50715"],["/2022/05/31/选择排序/index.html","ba146d441978f48aef4330af9332002f"],["/2022/05/31/面向对象的三大特征/index.html","7ffd6ccbbc472d0d154429d4ed7d0856"],["/2022/06/01/01.初识Python/index.html","f5533ec4579a52b6eef606ab1f819833"],["/2022/06/01/02.语言元素/index.html","3e0b5856d9336a0421b6d9d719c4215e"],["/2022/06/01/03.分支结构/index.html","cadca6ed9d3351d5220f17bdb0a7ed26"],["/2022/06/01/04.循环结构/index.html","87b664242f117013581850b0f2e75e5e"],["/2022/06/01/05.构造程序逻辑/index.html","4425664645cd941d090bfd4c49bcee34"],["/2022/06/01/06.函数和模块的使用/index.html","3f7f7cbd36a09ccc3061c218b393f1ed"],["/2022/06/01/07.字符串和常用数据结构/index.html","0f5d39a601fe7292b66abb7914233036"],["/2022/06/01/08.面向对象编程基础/index.html","9dd22ed4680ba5a2ee139046e17c797b"],["/2022/06/01/09.面向对象进阶/index.html","7b9f2087d3c1ba6ad9cfb6d046103279"],["/2022/06/01/C语言笔记/index.html","6d313a14500d425266dac379468e263f"],["/2022/06/07/安卓基础-布局/index.html","d33d26a70f094b5cab738f0fc9b6b1cc"],["/2022/06/28/C51单片机学习笔记一/index.html","54faa17f53e326cc4440402c94e15d78"],["/2022/06/28/C51单片机学习笔记二/index.html","e21921c055cf1a4ecd264d914e6e6b2b"],["/about/index.html","33ed9a01e9933cde73c7f520a470c2cb"],["/archives/2022/05/index.html","66e1c6c9bd6f6f8d3eb3973594b7fef7"],["/archives/2022/05/page/2/index.html","6bdc8687620feb988e0c0af2fc8a7bdd"],["/archives/2022/06/index.html","af6b064269590c8050d10f0db2bdbc6d"],["/archives/2022/06/page/2/index.html","6daa20f6c36b0d3c1a69272b5b8e97c7"],["/archives/2022/index.html","d477607f3cf01a57e445b60f46ad3386"],["/archives/2022/page/2/index.html","6d96d45eff6daa84e59dcda9cfa8a1d3"],["/archives/2022/page/3/index.html","0cd221304b2341ef219967029689a50c"],["/archives/2022/page/4/index.html","1acee0ee38e560c494c519a0f299c000"],["/archives/index.html","806acb0b41f73d193346ee0bec273cdd"],["/archives/page/2/index.html","ef44d568082fc5a480113d3e7c421023"],["/archives/page/3/index.html","8e8e85a8f3fffdc5fd05d07f3a91fefa"],["/archives/page/4/index.html","e59393bebc59e4d84174663d47d680ed"],["/categories/Linux/index.html","163810805129deac31131e96e4db3d05"],["/categories/Linux/vim/index.html","da15228c873bc465f505fcd6c0df99c5"],["/categories/index.html","1ffd8e92a0a524d0c39be6e00d58b074"],["/categories/学习笔记/C-C/index.html","0a47cdb97cb66c29a1a4c9dffccddba0"],["/categories/学习笔记/Java/Api/index.html","38033f066708259a253db507e46b3aaf"],["/categories/学习笔记/Java/index.html","5b4ae6fcb4ecd7ef7683d0fcf54ffd1b"],["/categories/学习笔记/Java/page/2/index.html","3028d12e87557f98acc41eaf83722306"],["/categories/学习笔记/Python/index.html","bec329c5d7b28b93914ec2579931b7c2"],["/categories/学习笔记/index.html","89f74ee626b625c117955b5af6bc3385"],["/categories/学习笔记/page/2/index.html","7780b1e46b2dfc6c5aa1f9e11d8920e3"],["/categories/学习笔记/page/3/index.html","0f05440435326b9cda7a9fbf4d400f7b"],["/categories/学习笔记/单片机/index.html","0251534e489145b7427ff495ceb1aca0"],["/categories/学习笔记/安卓/index.html","9eab058befec1b164590df24ddf1b06b"],["/categories/学习笔记/数据库/index.html","8d8568f747164065b9162b2baa6c9f99"],["/categories/安卓/index.html","1be9da26d1514219e0e9dc919521032c"],["/categories/安卓/新大陆/index.html","e60b3ce6f733fb34b1eee93e17305968"],["/categories/算法/index.html","07390acb3208f5b28e830771712ae377"],["/comment/index.html","f80f0b380b0c2875f882a3e65b24c4b4"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","755951929a2ed4dd3de9c73dbfbe4047"],["/gallery/index.html","9e92a6ddd1be009b7ee900383a292ecd"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","5a19289b764697185f5d43419e804443"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","31cfdc8e285aafe5afbf06767f1d0e28"],["/page/3/index.html","abaeed9dea2502f6318b57143455c768"],["/page/4/index.html","44e9e6650dddccffae5df3b4b85dd04f"],["/sw-register.js","46abe937d88b065c614ce5007520d708"],["/tags/Bundle/index.html","44d4fdc9cd4420e9d1e9daf7547d7b1b"],["/tags/C-C/index.html","382ef62e759ee19bd50636e2cb518410"],["/tags/C51单片机/index.html","2f222e2ca3700bd0949b927f01dcc1d4"],["/tags/Intent/index.html","bc7ec2cf2ba584f98254ba50cb4123a9"],["/tags/Java/index.html","f909d98eab70b9cb565f14513e6d4ab0"],["/tags/Java/page/2/index.html","79e04d3fb915cd0bbd44b3c402155a70"],["/tags/MySQL/index.html","75c97fcb5fb42d7faa929eecfb5dde9b"],["/tags/String/index.html","22035fa366df9b82c3695a74d53e99ad"],["/tags/Thread/index.html","05fdf4d8b4274ea1248c8180dd2a48bf"],["/tags/api/index.html","b3f50d6698734816ae44aa8ece16ef64"],["/tags/gcc/index.html","5175dbdab7ee83788255ce2c7d87c409"],["/tags/index.html","35c1c3411f09d9b4f5704f64bb625847"],["/tags/python/index.html","88cb98ad0b8e292aaa78d1f9ac7e141c"],["/tags/vim/index.html","0e7310750bd1ec4d3b144f7cdb2eb6e9"],["/tags/云平台/index.html","157c39ac156981e06181c949a45e5e43"],["/tags/冒泡排序/index.html","49614dea04fb665d440007785bea3322"],["/tags/安卓/index.html","003ba587468029692d271a9baeba0dac"],["/tags/定时器/index.html","586897749e2709ec1eed72636efdb4a8"],["/tags/斐波那契数列/index.html","2a3fc159307e98d5effa5443766c0063"],["/tags/新大陆/index.html","b01e3a89491782fa25f1463af946322d"],["/tags/选择排序/index.html","04c01a9059b4f12d2886d8a7a453a1eb"],["/tags/面向对象/index.html","4ed0a7c035685503d26a0557ac75b0fa"],["/tags/面向对象编程/index.html","b497090cfae0da0bda4aa16bc809cea0"]];
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
