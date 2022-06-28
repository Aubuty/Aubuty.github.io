/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","f2cde1ad6b48c0a81a4ed46e505109f6"],["/2022/05/31/Android新大陆云平台API使用/index.html","46a2bca09e137914404ce7ed3a305023"],["/2022/05/31/Android页面跳转/index.html","7cf3e1805d2b19a6d447e11d43d64482"],["/2022/05/31/Java内部类详解/index.html","11e08d1122489e7ac789c59acd7aa9a7"],["/2022/05/31/Java多线程/index.html","395dd0fa00d31dbc5c0c78703c23d97b"],["/2022/05/31/Linux-vim的使用/index.html","43ea559754afdbc6b10eb0677c620331"],["/2022/05/31/MySQL基础/index.html","8495660fa48d1d638a3db0790ccaafe5"],["/2022/05/31/String/index.html","1e32fca3c1329c385df50c21ec519af5"],["/2022/05/31/final关键字/index.html","e7a7185c096d9c6e7c2042bf8d1ebebe"],["/2022/05/31/static关键字/index.html","9a698a6066555804c68ecb52f9a4c0c1"],["/2022/05/31/this关键字/index.html","f6708a16004c26f25154e51b9521b6fa"],["/2022/05/31/冒泡排序/index.html","545e484da8166df3f11d12dc92eba08e"],["/2022/05/31/引用类型使用小结/index.html","dd6603e1ee0e8ff43388a216a1a421e3"],["/2022/05/31/抽象类/index.html","79334a98094379c572c1f9b462ef8fbc"],["/2022/05/31/接口/index.html","beb11d235b842845a61e88792d0026ee"],["/2022/05/31/斐波那契数列/index.html","3d13b6247583497ee897c756bc137c00"],["/2022/05/31/类的五大成分/index.html","fbe1cd5df8edc3ce6e767cb28a43505a"],["/2022/05/31/选择排序/index.html","37378189bee0b5d168074904b693107c"],["/2022/05/31/面向对象的三大特征/index.html","eeb4cc1b31993eb8669ce067deadf6a3"],["/2022/06/01/01.初识Python/index.html","8638ca84a027537bffaf81ccb4f75c0c"],["/2022/06/01/02.语言元素/index.html","f901f73898e78c26a52ad4e626d849b7"],["/2022/06/01/03.分支结构/index.html","945f847d6ba862dec7573ccb95219ab0"],["/2022/06/01/04.循环结构/index.html","8e2d628ec23611574095b96e2a1dde9a"],["/2022/06/01/05.构造程序逻辑/index.html","5e07b3e833493ae034afac3394628b1a"],["/2022/06/01/06.函数和模块的使用/index.html","1919fbf6a2ff1ca803bf2e4c341a686f"],["/2022/06/01/07.字符串和常用数据结构/index.html","05cdbd4d340c4f0f3a61864a97fd8032"],["/2022/06/01/08.面向对象编程基础/index.html","875f3211ca2bb93fc4e3bc8a548c440a"],["/2022/06/01/09.面向对象进阶/index.html","27ee93710081722d482a5ec46d6ce439"],["/2022/06/01/C语言笔记/index.html","6f92e82e3f1ca79300a88b09f48f4c1a"],["/2022/06/07/安卓基础-布局/index.html","5a8e3c2989b5ef1990fdba994204885a"],["/2022/06/28/C51单片机学习笔记一/index.html","2a3fa56b88c7352b7741b812251eb521"],["/2022/06/28/C51单片机学习笔记二/index.html","bda8f807e082457b3d6745c454397916"],["/about/index.html","9ae43edbba21a76d4b4ab166f884c821"],["/archives/2022/05/index.html","e5aec45ecfdbd0fb3ea883579d9d9db9"],["/archives/2022/05/page/2/index.html","e94a95c4bd7a395f0ee6f64eee6af480"],["/archives/2022/06/index.html","2f510e071debaea020a82f6ee87b5c62"],["/archives/2022/06/page/2/index.html","0f183e2eaa47dfb6ea9d77b4912b05df"],["/archives/2022/index.html","1e3f6d694ee4586760defc93858533e1"],["/archives/2022/page/2/index.html","f1fc393fbd2ed7651a34ad1c180ecda3"],["/archives/2022/page/3/index.html","4fab6b730c42b2bbb0b0c75e3616e3ef"],["/archives/2022/page/4/index.html","5d17ebe828228267c66935df7233d74d"],["/archives/index.html","88536fc2a6cc38a3a073758a37b29b2d"],["/archives/page/2/index.html","c221496584233873254835999ac8e6ca"],["/archives/page/3/index.html","8cb0ecf52909a0a4c5e151dd83c7777d"],["/archives/page/4/index.html","0aa882ef0491bbe6f65f8b9e744b6f3d"],["/categories/Linux/index.html","49baef36b9ffc0692c3cf60c07f4be95"],["/categories/Linux/vim/index.html","98a3bfa622acd1c7efa731499daefe66"],["/categories/index.html","c23e13c44e2f36284c6276a7061ec7f7"],["/categories/学习笔记/C-C/index.html","f4604a0b9ab90c54aeccef1f2c94b8df"],["/categories/学习笔记/Java/Api/index.html","db81412a75517bdcf3c20274806a1cb0"],["/categories/学习笔记/Java/index.html","96cf4a184b92827c564363e4573a1f13"],["/categories/学习笔记/Java/page/2/index.html","486f748bce525faece14406fc3f7fb97"],["/categories/学习笔记/Python/index.html","678894109b89513e832b3cf84ad8a23b"],["/categories/学习笔记/index.html","0a0e0e5bd2c0828eb62f369f39c0111c"],["/categories/学习笔记/page/2/index.html","78d646e92125db8fbe7d41c2f5ac4a5a"],["/categories/学习笔记/page/3/index.html","723f2f3066e98e7bb0d032a46c55a577"],["/categories/学习笔记/单片机/index.html","c80d3860c2595f2efd6f5db0ebcc3860"],["/categories/学习笔记/安卓/index.html","f7216be3056436cde1793431aa64626f"],["/categories/学习笔记/数据库/index.html","0e4f2a70aae297625e98ade4f51c00f2"],["/categories/安卓/index.html","419e9d02f3642d9e076b39d53969df29"],["/categories/安卓/新大陆/index.html","fe643257f3a3ae7a9622dbf8cbce9e0c"],["/categories/算法/index.html","c902dbfb4b1f4f7ca7d6170643bc841f"],["/comment/index.html","093ecafe86474eadf1d4bf1f0dcb3c89"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","13a146eb993e7a13cec3358fb4cad949"],["/gallery/index.html","18b5ccf120e88b820d301a57069832ce"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","897f89cbbc0392ec7da59cb7410ca364"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","1fb21f4e741c9f17441693f448d91563"],["/page/3/index.html","4c2e84f5703cca6512518aad491db204"],["/page/4/index.html","bbe82c77bbce2dae4ceb160b8c6b2498"],["/sw-register.js","f5b8784adbe3532222de53c3f2202b05"],["/tags/Bundle/index.html","cb93d2fff09feeb5f6a544e2090b9ec8"],["/tags/C-C/index.html","8346a1b88073f897ea808f09fbb326d9"],["/tags/C51单片机/index.html","f499a7102a4a04ac37778c0f625957f4"],["/tags/Intent/index.html","cdcd9233ae6d3908d72841a529ab3ba2"],["/tags/Java/index.html","72eed38b13ea37135bf9534603464a79"],["/tags/Java/page/2/index.html","3014e503e67de5c77a7df4dc0869ddb6"],["/tags/MySQL/index.html","e2b948c6b653f157830e428919b533ee"],["/tags/String/index.html","1bd52ef06e8e9ec312b0e32a212679c8"],["/tags/Thread/index.html","e7ac279d8932595dfad9ba5c6f896da2"],["/tags/api/index.html","b253a7b1226b7918ec93560004327e99"],["/tags/gcc/index.html","be2219cd60680198799b71097876df5c"],["/tags/index.html","83bf1d0a7e925050ea769ae274402705"],["/tags/python/index.html","a90bd986a970e89da7be951e5cd042c1"],["/tags/vim/index.html","72441de7ad90abe15cf3f4013e9f41cc"],["/tags/云平台/index.html","d3479409b6564c7e683ef479d786ffe9"],["/tags/冒泡排序/index.html","8084d5c0190e26248632a35872dd13e9"],["/tags/安卓/index.html","e5bb4a580c30ca626a81e3f4ece1ab2b"],["/tags/定时器/index.html","bde9d0ff4d2b410fffbb9307017ed07b"],["/tags/斐波那契数列/index.html","72fb7d8c21acff54bd3dd79805fb83f7"],["/tags/新大陆/index.html","e5299017493d0e15c67e49939de9196c"],["/tags/选择排序/index.html","645ef86714321b639d31db147624fd14"],["/tags/面向对象/index.html","24a41e3e9705e99e5d1f3cccdb98dc56"],["/tags/面向对象编程/index.html","5b63807257027c11e1f1f197cbee64b5"]];
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
