/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","4600e79fb42394f391e515de99d6bcf7"],["/2022/05/31/Android新大陆云平台API使用/index.html","5fedb777c576edfaacdba950a8f5f759"],["/2022/05/31/Android页面跳转/index.html","db48bf2e0bcf63010e2601aafd6e997a"],["/2022/05/31/Java内部类详解/index.html","debeff3f5914c58792a13b21cfb453d3"],["/2022/05/31/Java多线程/index.html","ffc49923896cf57b80e3e2a8a91dc411"],["/2022/05/31/Linux-vim的使用/index.html","a66aac22e2b6426ab4e12843b0900d58"],["/2022/05/31/MySQL基础/index.html","29bf818002d0bba69e64468878dd6564"],["/2022/05/31/String/index.html","a91498ac1907ba166f5d39d8743cf81e"],["/2022/05/31/final关键字/index.html","27ef06ff7531589ae8589fd939df16dd"],["/2022/05/31/static关键字/index.html","8d90fcf8cc3a3296f00b9f0f1770ac28"],["/2022/05/31/this关键字/index.html","25c2440fce32aa635897766003edfd24"],["/2022/05/31/冒泡排序/index.html","62077686024f24d55b0dd5f30eee1548"],["/2022/05/31/引用类型使用小结/index.html","310b4735fb76bae700ef732b275484d2"],["/2022/05/31/抽象类/index.html","a5b7339d0e2286bde1dd892fc335a2b6"],["/2022/05/31/接口/index.html","99ddd86d092fc14b9d6cd49c340b8e84"],["/2022/05/31/斐波那契数列/index.html","1b515c1426807360d13d28892f98e2b2"],["/2022/05/31/类的五大成分/index.html","c749afec67261450201b0879f3ceeacc"],["/2022/05/31/选择排序/index.html","94df04535c723d2992e8015d6f58acbd"],["/2022/05/31/面向对象的三大特征/index.html","db9d842a8b6cf7b6b8d135f810a39c72"],["/2022/06/01/01.初识Python/index.html","1d12491ab6e7b59fdee5b6d11397e92e"],["/2022/06/01/02.语言元素/index.html","caa8720a9befb0fdce29ecb659088cb8"],["/2022/06/01/03.分支结构/index.html","0242dbd8b96b98eb6e9d114270adca8e"],["/2022/06/01/04.循环结构/index.html","18293811a78ff779f6c9aaa8dd0ef60e"],["/2022/06/01/05.构造程序逻辑/index.html","b20dd80a995c94b3c98fb3621dfcb119"],["/2022/06/01/06.函数和模块的使用/index.html","6f46a3848cb86953bcf6f16233d72596"],["/2022/06/01/07.字符串和常用数据结构/index.html","0b8ea17561ff8047cebd8ed3aa168e42"],["/2022/06/01/08.面向对象编程基础/index.html","5aeb1a23e9510d9b1e3db47c87ffd6b4"],["/2022/06/01/09.面向对象进阶/index.html","0876a1e091f7fa122aaa2ade3488e6d2"],["/2022/06/01/C语言笔记/index.html","3a7149be4b1d1585de0da61ff3f341b7"],["/2022/06/07/安卓基础-布局/index.html","e9ac781f6c26d09c502eb57ddc1c0995"],["/2022/06/28/C51单片机学习笔记一/index.html","4c6bc99ee36bb074a75d59a4025772e6"],["/2022/06/28/C51单片机学习笔记二/index.html","bed57c80833d856f0822df0a73775d20"],["/about/index.html","60f0ac7a26bf55f0e743e9ce9f4fbae8"],["/archives/2022/05/index.html","cb35671703f03eacdfba7ee5163f18e4"],["/archives/2022/05/page/2/index.html","4a985c9fb5322feb7441d6892b365ce5"],["/archives/2022/06/index.html","055b7742e34d344bfec8f91e2f3a5760"],["/archives/2022/06/page/2/index.html","e29fd25a87d23f2ee5ac702a72f99c96"],["/archives/2022/index.html","e50995c64445c8903c6f914ac324392b"],["/archives/2022/page/2/index.html","e866cd0715863ecde0989b045b41b566"],["/archives/2022/page/3/index.html","de8423c6c94537b8d79f4f30e06fe5d2"],["/archives/2022/page/4/index.html","ee35eef084a9d410dd604130a94fb838"],["/archives/index.html","fb1075b4de682d87a0bd0b897155895f"],["/archives/page/2/index.html","f3a5bdcb74ac5016dae09ca6b123c584"],["/archives/page/3/index.html","768cf97e17a37cb79c79ad5f924c62bf"],["/archives/page/4/index.html","0a9f9d2f61a61d690c5a4790c9d812fa"],["/categories/Linux/index.html","06ff6269746ef850ba817de2a588f910"],["/categories/Linux/vim/index.html","cd2e5d9cf33132d15ee0f7c649030a3f"],["/categories/index.html","6a888cc9b6a902796331ff3bd89d02da"],["/categories/学习笔记/C-C/index.html","44990a9fd83898d856553990bda92442"],["/categories/学习笔记/Java/Api/index.html","e8c05e18ab5a1c52777349e42ad3033d"],["/categories/学习笔记/Java/index.html","055b66e21fee454e34b6d36cf7a0a1db"],["/categories/学习笔记/Java/page/2/index.html","fad6ac088865ea8a1ace5936781d9aa5"],["/categories/学习笔记/Python/index.html","257faabb18a2c10940e0519f62dba5b2"],["/categories/学习笔记/index.html","1495aaf69d7cc0fc715632dfb52e8b1c"],["/categories/学习笔记/page/2/index.html","c01e280644e0826a02b144cfa8af8e8d"],["/categories/学习笔记/page/3/index.html","1ac50887b1c2e8f9f0c0b744f3362f0a"],["/categories/学习笔记/单片机/index.html","4e744981273efdd3d8a136f17f7f69b9"],["/categories/学习笔记/安卓/index.html","316339320e03fff8218a2936d40a7513"],["/categories/学习笔记/数据库/index.html","c069389a93bb261d652a1602bdc3987c"],["/categories/安卓/index.html","258b8cedb3685631ae3f04bfd628f4c5"],["/categories/安卓/新大陆/index.html","fcbb3b9b1678e4ccda96404a319030b4"],["/categories/算法/index.html","1491b30b82aa33c57966f8c8fcdccc8e"],["/comment/index.html","0ce80a7eb91c85dc54566c6885377fd4"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","8281885a18165c1df790be8892999c0f"],["/gallery/index.html","8b33ff7c0b31eabf261ba4ad49dca2ab"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","464007fbd79e734619e2944c586c5b49"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","99b3c31e932cd6d9fca9724b77a480ac"],["/page/3/index.html","35284a6f2e1d772cf2555c6d763e155b"],["/page/4/index.html","d9650b57347c9b2886b364daf14dd530"],["/sw-register.js","8309ea640d26b2b28037208fe9b6694e"],["/tags/Bundle/index.html","8475a33cbc50204351e29729bff9d26c"],["/tags/C-C/index.html","0b27f154186992b7c491d4b704a08543"],["/tags/C51单片机/index.html","6cc555e6a9c8d9401ba89ffc5347a716"],["/tags/Intent/index.html","ab7d5d933cd0c6c0f00c055dd3f1bfb3"],["/tags/Java/index.html","9cd7da11df0079650dd492e4705294f2"],["/tags/Java/page/2/index.html","da6eabc40f8123b9031f6f8c2e1beabb"],["/tags/MySQL/index.html","ca2aa86305e1a17deb2a10d4924bede3"],["/tags/String/index.html","b2bd7cec6ce33b285d7bd3432a12a359"],["/tags/Thread/index.html","b6c9bf45fe39fb850e3182c54aa3c2d4"],["/tags/api/index.html","e523965e48b425d3e75a8349fd668c76"],["/tags/gcc/index.html","9e82aa64b06fe649dc6f86f6e86f6d5a"],["/tags/index.html","b16679fa10bb81506109c0103bf891aa"],["/tags/python/index.html","8e21fb7920b440a3f91e4f1adc97de9e"],["/tags/vim/index.html","6a9972fdee8802c3a40a72a857a33772"],["/tags/云平台/index.html","c79dbfda3bb5306ec0b2013ba5d7f9db"],["/tags/冒泡排序/index.html","f36f7cf20f94efdff47d88389aa4d0ba"],["/tags/安卓/index.html","5b759b5a72d41faeea9def3f2a1ab3b3"],["/tags/定时器/index.html","3aec138173c17d5c628f98ad316b7298"],["/tags/斐波那契数列/index.html","dc18e74cf89f962f74f245f01aed3a9b"],["/tags/新大陆/index.html","d0d0b1b651878fc1c69c2e0fe72263e8"],["/tags/选择排序/index.html","ff55e276b2b5e04417ef21ef1fae2605"],["/tags/面向对象/index.html","04b451bf2c7b1a05ce62e007a3639a7a"],["/tags/面向对象编程/index.html","7297341aed6e2fb3795f24140c23dd29"]];
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
