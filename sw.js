/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","7a7c616a04a53ef22ad74991cecccc17"],["/2022/05/31/Android新大陆云平台API使用/index.html","7e5cb5b56e677c2e8a914e33062cad73"],["/2022/05/31/Android页面跳转/index.html","94dee94bb3e02164c449b161305eea2f"],["/2022/05/31/Java内部类详解/index.html","2f1e252dc3f2b71136009df16bb6364f"],["/2022/05/31/Java多线程/index.html","e16ad5d8cd2fc9f24300a7734ede16be"],["/2022/05/31/Linux-vim的使用/index.html","2701b656af2029bdc1e4bd5871b99b19"],["/2022/05/31/MySQL基础/index.html","959583c9e1cea065cc88bdd789820753"],["/2022/05/31/String/index.html","f91e3c0996cbf1f8207df7172fb492e8"],["/2022/05/31/final关键字/index.html","3cdd5412db60d91f51062981050a9a37"],["/2022/05/31/static关键字/index.html","6a745666dd94b6a7b715a1eb2600d141"],["/2022/05/31/this关键字/index.html","1f6a2d65b77b1e720799fe3e959c3259"],["/2022/05/31/冒泡排序/index.html","ea80462106478defe49f5289d0a14bc4"],["/2022/05/31/引用类型使用小结/index.html","87e1658e2a920bb32b6c196755901e6c"],["/2022/05/31/抽象类/index.html","1d86344adde6fe861eb3133a8c551ea4"],["/2022/05/31/接口/index.html","7ff53b42cb616d978268e51db2ef6e39"],["/2022/05/31/斐波那契数列/index.html","ceac293d3aa97d35e5924c14ee772219"],["/2022/05/31/类的五大成分/index.html","eec7e93752c5025b4d7f6976a41be13f"],["/2022/05/31/选择排序/index.html","c30f98c258e04399ca6e784d6f398a68"],["/2022/05/31/面向对象的三大特征/index.html","57348a5ee9634eede6f9c269b74b2eed"],["/2022/06/01/01.初识Python/index.html","c024b77cb85fa8a29a031db7f0534072"],["/2022/06/01/02.语言元素/index.html","5a661a2d773f591a6ac5fe769abebc9f"],["/2022/06/01/03.分支结构/index.html","fe3dced746449de61e498d1b1e476a2c"],["/2022/06/01/04.循环结构/index.html","386b6cd4706a105b3288f6e486fe8604"],["/2022/06/01/05.构造程序逻辑/index.html","21f3e30e83e0be2f7e24753903ef4929"],["/2022/06/01/06.函数和模块的使用/index.html","12e76a62ab3f27c134676e671fd6b5b1"],["/2022/06/01/07.字符串和常用数据结构/index.html","f7e4080462095079e69e862d377358f5"],["/2022/06/01/08.面向对象编程基础/index.html","2e8d52fe735054c9fb504b0ec1c5ad4b"],["/2022/06/01/09.面向对象进阶/index.html","0e78fb884e5647b1e4f3c6cd52be3674"],["/2022/06/01/C语言笔记/index.html","dbadc419e389207f97ba2d588762072e"],["/2022/06/07/安卓基础-布局/index.html","9e40a89b8b8c31df7a0dea2438865ec2"],["/about/index.html","2ac64226e3e40e5d876277b5f4faf3f0"],["/archives/2022/05/index.html","21d822266a1a206ad556b529bf4ccfe2"],["/archives/2022/05/page/2/index.html","d4b446bd5e069da509686ed84a5c5a54"],["/archives/2022/06/index.html","4fa6cf75bf48b95080b3a05b56bf57c6"],["/archives/2022/06/page/2/index.html","ea7c2bda730eb217f7411a6ced97cabc"],["/archives/2022/index.html","3b7480bcfdcee8ea0f45432d253ee176"],["/archives/2022/page/2/index.html","c6b0ef38bb45c4fcf7b97035fbb7e1db"],["/archives/2022/page/3/index.html","2e88b4ba603ee4212f4a6f9664fdf690"],["/archives/index.html","9e672429f90133b6bafafd0026d07c1b"],["/archives/page/2/index.html","a79737146598b91d1af4d7b1701e19e2"],["/archives/page/3/index.html","aefcc00969523554957b0c664e0bafbc"],["/categories/Linux/index.html","1d0ebd2004072eaffeaa48105b5d9f46"],["/categories/Linux/vim/index.html","8316973c18e433e0805f1529c483f051"],["/categories/index.html","7c52048ca5706cdf99585a7a25212a0f"],["/categories/学习笔记/C-C/index.html","f8c2408dc99ab5ea30c225da64667031"],["/categories/学习笔记/Java/Api/index.html","84b6bc8398a5bd30cbc5ca312283ee9f"],["/categories/学习笔记/Java/index.html","360c06b658b59b7c9f8b59d5773c00e0"],["/categories/学习笔记/Java/page/2/index.html","e9c7222f934a6b263bca7d9c9830fdfb"],["/categories/学习笔记/Python/index.html","ec43b83212d433d59930ed3034bcd12d"],["/categories/学习笔记/index.html","1a4a8a3caa375d9fc5c23de990f83adf"],["/categories/学习笔记/page/2/index.html","e8efc2802d7bb43d232c0f910f617fc2"],["/categories/学习笔记/page/3/index.html","21d5b662a263b3a5ac49154adcf8dec0"],["/categories/学习笔记/安卓/index.html","38533f20e32f8a2e0be0661354ca4186"],["/categories/学习笔记/数据库/index.html","92c6f67555b9aa7df282a7a3bf3710b0"],["/categories/安卓/index.html","1c9960ee65db928262599b517c573310"],["/categories/安卓/新大陆/index.html","b87bd7fbc9e5a5f3a4d284aa61866dc2"],["/categories/算法/index.html","0e075a53a7dbea1ca52c0292deeb3512"],["/comment/index.html","e0b0a801816a47715c1bb24a3309a0ec"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","8a2d8a86c48e8629424414127c5d6a77"],["/gallery/index.html","8898fec11811832808185abcc5887a81"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","62ad84018cdaffff07dcda374399dbe6"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","68243f94b6fc09fbcf7706003d9c140f"],["/page/3/index.html","1e1bd0898d666dccce0c7f8edc026d14"],["/sw-register.js","38d54c8afb7b04edd4341d184385d619"],["/tags/Bundle/index.html","65a580fd9570271a8995e50dbb6406fa"],["/tags/C-C/index.html","f61bdb46b4049f2324d397c49fb33b46"],["/tags/Intent/index.html","eaad6137a6a9e2cc0013f266483f9bd2"],["/tags/Java/index.html","5a2f94c8edf51bee100b98a03cb226e0"],["/tags/Java/page/2/index.html","196654c4b239ca52f568aebe846793fc"],["/tags/MySQL/index.html","0cba8bcfadf953e6915af7358d80282a"],["/tags/String/index.html","949be4a219ccbe0d0eec64beda65e766"],["/tags/Thread/index.html","2b1edf28f1b8ce9bc8afa8263ed23283"],["/tags/api/index.html","96510bb4cc0d837c15e3be3b13b79ae7"],["/tags/gcc/index.html","8d286f9e56e09c76a51de5f3b045c98d"],["/tags/index.html","d6246973fd2858989590c5f495d8e11b"],["/tags/python/index.html","d666f3a2a6b4cc3ed3f4654067037e92"],["/tags/vim/index.html","50960176019c370bf348d1e9edfcd4c1"],["/tags/云平台/index.html","1808d3479273c06e0b2183c38d529456"],["/tags/冒泡排序/index.html","deb154593d20e6d8d8f445fccb781d69"],["/tags/安卓/index.html","581fba37ae4897dda79ac0e45b3efea5"],["/tags/斐波那契数列/index.html","a9e0e352a73a9f898e35aba2cd733598"],["/tags/新大陆/index.html","3d51c3e33f1357459479ff16ec324fba"],["/tags/选择排序/index.html","6b13784e79f4c9139c5484d61e1c5d26"],["/tags/面向对象/index.html","4cc30f0c632bcec89b7fa63c16bfc6ce"],["/tags/面向对象编程/index.html","3b3881bab915b71bc1838748ef783437"]];
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
