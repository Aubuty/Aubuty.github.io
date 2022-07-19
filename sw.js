/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","c3e2fb04e229bd0ba80b9626a64960cd"],["/2022/05/31/Android新大陆云平台API使用/index.html","8102ab4f569712f53ce10bb7667c6f2e"],["/2022/05/31/Android页面跳转/index.html","d7e2bcc7991af7fa087009cb3f4e7240"],["/2022/05/31/Java内部类详解/index.html","4f7f5bd60a79adcbd9fca80bc09af812"],["/2022/05/31/Java多线程/index.html","c21ee3ee5e0e738e09939ccb7cd49b22"],["/2022/05/31/Linux-vim的使用/index.html","431d01116155bbd90f0596bb42ba8833"],["/2022/05/31/MySQL基础/index.html","27b37c5e3b43b9fe93ebbfd98be4951d"],["/2022/05/31/String/index.html","b6a6c89ced498a6a3eb31937692384cd"],["/2022/05/31/final关键字/index.html","fdc5b32a85284a1ebd495c4684140f5f"],["/2022/05/31/static关键字/index.html","5f3ecd2efbc5adf3b752b8c94f8c4b47"],["/2022/05/31/this关键字/index.html","b81e66d111733e289ed4667700596434"],["/2022/05/31/冒泡排序/index.html","ed020e044c64344eeb0eb28fe221e7bb"],["/2022/05/31/引用类型使用小结/index.html","27562f2f498ca2c2fcdd141c6f0acc20"],["/2022/05/31/抽象类/index.html","ccde5d576aa5e5809a8343c264a33150"],["/2022/05/31/接口/index.html","6f656512afe39aceb326164a980fbdbc"],["/2022/05/31/斐波那契数列/index.html","55196911ae7a421595b6223df1ad4624"],["/2022/05/31/类的五大成分/index.html","f8e20e16f215222a4e3b86bc57e18430"],["/2022/05/31/选择排序/index.html","5f99a23351eeff9195e723c3b980e833"],["/2022/05/31/面向对象的三大特征/index.html","9c41622ce3dbd58104a8ae4bec25849d"],["/2022/06/01/01.初识Python/index.html","a7391a08a3c927e43ee77c4516b9949b"],["/2022/06/01/02.语言元素/index.html","cc86bd41cc068a84ee5d10cfd47c0f72"],["/2022/06/01/03.分支结构/index.html","c609c62c26e11bcc43fa3122a25f3433"],["/2022/06/01/04.循环结构/index.html","678724fd6c0f2ed7970f03a0ee1e186b"],["/2022/06/01/05.构造程序逻辑/index.html","a15bed1f52d07e7fb1d9ecfe67ff00a3"],["/2022/06/01/06.函数和模块的使用/index.html","76cb9412013c544fac7e7ebcc18fde39"],["/2022/06/01/07.字符串和常用数据结构/index.html","680fc6ce94ac1c76f89dc0b34796177a"],["/2022/06/01/08.面向对象编程基础/index.html","5ec3d8ca4512c84af0f0c9a6e4973acb"],["/2022/06/01/09.面向对象进阶/index.html","d294bfdba275c7028a39d32f2a6f23a0"],["/2022/06/01/C语言笔记/index.html","44c2edb35cb676e7b9fec7779967f3cd"],["/2022/06/07/安卓基础-布局/index.html","08cb1830f244a3bdafc106d9be33b501"],["/2022/06/28/C51单片机学习笔记一/index.html","f24d8a1feb1f6dea7bb1da8f3966e054"],["/2022/06/28/C51单片机学习笔记二/index.html","c2cf0a685abfa4b25ee527f6b094ad6d"],["/2022/06/29/C51单片机学习笔记三/index.html","42069ceef4d379fdb3e7f008b3d567d8"],["/2022/06/30/C51单片机学习笔记四/index.html","50904b0fa56fe33318ebbab0950743a5"],["/2022/07/02/C51单片机学习笔记五/index.html","f982e1eff6b68e5db1365cbe369f55fc"],["/2022/07/05/C51单片机学习笔记六/index.html","b0b94408b0c50c490449da65c2de0516"],["/about/index.html","dc63448c47332e442a2f4a071aba2835"],["/archives/2022/05/index.html","5aef0b768516b147145075053f20703d"],["/archives/2022/05/page/2/index.html","85bb9678ac8f87eea9b2d96c270c4629"],["/archives/2022/06/index.html","9ad173d7cac79a9b9c6db0ae2a4bbd1e"],["/archives/2022/06/page/2/index.html","e89ce34e0536f106077e9d6d4ffcba2a"],["/archives/2022/07/index.html","16867217e51fde1cd4bd94a9cd084328"],["/archives/2022/index.html","39ac466b4c55b9b93838d6ed31fd3a12"],["/archives/2022/page/2/index.html","778b231de943dd8a5ba792b696c60889"],["/archives/2022/page/3/index.html","3c2a8712c12d432074e945507683bc24"],["/archives/2022/page/4/index.html","edbf5987bf46edabd65678cc9cf42544"],["/archives/index.html","cd109cce2c3b0ff29299164dd0da7872"],["/archives/page/2/index.html","d7a5ba60663d8cf7d859fb24a8fc9a8d"],["/archives/page/3/index.html","56b01ece20eb32a84f2ee605b4dc68db"],["/archives/page/4/index.html","cedc61e54560fac597ccdf556ce17e73"],["/categories/Linux/index.html","ded256b4c2f70c6c4aefc2287b4ab509"],["/categories/Linux/vim/index.html","c3eebc05ad968d2380fbb46ebe97a85a"],["/categories/index.html","1aa54678d19924fd06f8b874b4047424"],["/categories/学习笔记/C-C/index.html","3eee8d71c5404f3d0afa6c708af3da8a"],["/categories/学习笔记/Java/Api/index.html","cf343ed2d422072e5d7917b83b7d95df"],["/categories/学习笔记/Java/index.html","5bf6eb8dda2555d1b535973d603628e7"],["/categories/学习笔记/Java/page/2/index.html","117be387816a5728708fecfc6b748375"],["/categories/学习笔记/Python/index.html","6a7a7419d8a9b2fd3035f8532b5bf1fe"],["/categories/学习笔记/index.html","ae721f33d18995231db0053d799b3a8a"],["/categories/学习笔记/page/2/index.html","802cc4a3616aa32c2564118ef7119d63"],["/categories/学习笔记/page/3/index.html","bd7951daec18f06fe45e37acaf5e154f"],["/categories/学习笔记/单片机/index.html","3ff72573f83447f3bb45c2f07f9db219"],["/categories/学习笔记/安卓/index.html","3e0f41ef7eb758e4fbf1b3ae485ffa9f"],["/categories/学习笔记/数据库/index.html","1a10df83a4c76015a8294e85ef1c317f"],["/categories/安卓/index.html","2cb5902aca7b4118e3edbd9e67872271"],["/categories/安卓/新大陆/index.html","2524bc33dfbd16eafa7780593ec21e5a"],["/categories/算法/index.html","cd449b8f583a6b468d925ab2627a502c"],["/comment/index.html","b791e153d87413f2b0e75fff00cb36d9"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","4ae02494253d80f189efbe66a89cb3df"],["/gallery/index.html","ad9eebae4e67fc42e165286ce964597c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","f7fb2e3d92462796e45312ba2b2d8636"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","53515ad369be0cafd9dcf30d762741e8"],["/page/3/index.html","286d4e711bc59cd7e576e48a305dd0be"],["/page/4/index.html","873a79a77a54a1be889be33b3291a165"],["/sw-register.js","b002fbf63b7964263fe4f45fad8e7b5f"],["/tags/Bundle/index.html","8673046690a58404eecddd0e086b9521"],["/tags/C-C/index.html","bef27cedd10b9f9d66a883f46ed8ff74"],["/tags/C51单片机/index.html","2bee1d2369a4822468eb1bac1ae07b96"],["/tags/Intent/index.html","258558128f096c45a12712a383593728"],["/tags/Java/index.html","76b950fab017daf78285811cdd180709"],["/tags/Java/page/2/index.html","cf37b4a08551afc1c8188f5389c05380"],["/tags/LCD1602/index.html","468c70eaf3edd3d757aafdb5e3f84cc7"],["/tags/MySQL/index.html","e0599a6e2de76f1cc506060d8413e560"],["/tags/PWM/index.html","463002b3b87aab4c59ca6a3b938ded48"],["/tags/String/index.html","93c06c8748c2b00107df75da8d556e3d"],["/tags/Thread/index.html","4660fc96af41e1948fee586ea786cab7"],["/tags/api/index.html","04781276da1624e818de5bb5831c0171"],["/tags/gcc/index.html","86a96e188ef42998fec0dbe184748719"],["/tags/index.html","6c76392aee95e7ec8f1fe524374e6742"],["/tags/python/index.html","62a28e3020f17b63e87830b5757ef8ee"],["/tags/vim/index.html","ce9f2715522595f9fff4a6447af8403e"],["/tags/wifi/index.html","51fe481313e869d90dd7cf2781d89d4e"],["/tags/串口/index.html","3fb5a6fc82824415e0b5fd25c5aa9698"],["/tags/云平台/index.html","9618faeaf1f106efb7c51f5d6e0af825"],["/tags/冒泡排序/index.html","7f45cae9e3190cb39751d251ee5a024b"],["/tags/单片机/index.html","a874fb7e4f94f89116254fa2755c9843"],["/tags/安卓/index.html","795f184cfc61fc4afe80ac65226eefdf"],["/tags/定时器/index.html","450409de1c1555276a326002499315f4"],["/tags/斐波那契数列/index.html","1e857913bd3c0e8574cf14d2289330da"],["/tags/新大陆/index.html","377961372175b90d6fba62c1ccf6ab74"],["/tags/蓝牙/index.html","53ea379e7b4ca68137bca42459af250e"],["/tags/选择排序/index.html","0b93203b9435cfa4cbc3f9d88b15bd2c"],["/tags/面向对象/index.html","2cae9444613fd7f01eb747ccffa42837"],["/tags/面向对象编程/index.html","4fd038d54952f672e6eee9a891a9a12e"]];
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
