/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","5013bb799e81dd245890d9d686e9fca2"],["/2022/05/31/Android新大陆云平台API使用/index.html","34c963d6a76e5b848c3395c04ab1b71b"],["/2022/05/31/Android页面跳转/index.html","dacf819d1575a35166e63c99ea8f8f58"],["/2022/05/31/Java内部类详解/index.html","f7238973b8eb83c307ec7af0261fe56b"],["/2022/05/31/Java多线程/index.html","c28ac8369230c7c7851c0fedc54c2cbb"],["/2022/05/31/Linux-vim的使用/index.html","0400644134d7473265f7979e6f68510d"],["/2022/05/31/MySQL基础/index.html","ad6420d2cbcee4d4dbe7c5ce1f152415"],["/2022/05/31/String/index.html","bee396f21fcce7994485ab47f73ebf63"],["/2022/05/31/final关键字/index.html","aacc3823ef79965adebd9ef78c7a105c"],["/2022/05/31/static关键字/index.html","9813a9af651c4cda32b06d533aac0f7a"],["/2022/05/31/this关键字/index.html","309c4a14f30eaf0a68b2dd0f92600046"],["/2022/05/31/冒泡排序/index.html","386a6b3783af5ad025a8e6f1f2ffb9ca"],["/2022/05/31/引用类型使用小结/index.html","74304667b4303e1beef64a500ffa37e8"],["/2022/05/31/抽象类/index.html","59247840a577497564beee630cddaa7d"],["/2022/05/31/接口/index.html","1b8881790ee24d0296fd778b85de0e86"],["/2022/05/31/斐波那契数列/index.html","ddecc094c403b1bbae865aaa93c98d5b"],["/2022/05/31/类的五大成分/index.html","625a2472bb2e2449ff537617734ccb29"],["/2022/05/31/选择排序/index.html","f34f2899e173b1e4c23a748dec9b16f7"],["/2022/05/31/面向对象的三大特征/index.html","8aa86bbcb514236cd6b3150b8b2530be"],["/2022/06/01/01.初识Python/index.html","865a75bc999916833cfe966283a7f7d5"],["/2022/06/01/02.语言元素/index.html","ac5ff23450b3aba8a7ea85b470578bb9"],["/2022/06/01/03.分支结构/index.html","618890bb550f374d3d1a1be8d3cca473"],["/2022/06/01/04.循环结构/index.html","87e0895cb054ca4306b4d8cc6ac0257b"],["/2022/06/01/05.构造程序逻辑/index.html","eb8513422aaae5094a01e435c936ddb2"],["/2022/06/01/06.函数和模块的使用/index.html","e34edb66230e51305d56b37d3ccb28e5"],["/2022/06/01/07.字符串和常用数据结构/index.html","e1bfb15573aa13a5c7264bdf9061b573"],["/2022/06/01/08.面向对象编程基础/index.html","63383a949da04552ee06a68888345744"],["/2022/06/01/09.面向对象进阶/index.html","0e6f4904b1a2b99dec078626befe31f9"],["/2022/06/01/C语言笔记/index.html","2df40347bf2fdc7d4caa7ca4b99eaab5"],["/2022/06/07/安卓基础-布局/index.html","89e1c6c4468a9e9275b74f2838de8f12"],["/2022/06/28/C51单片机学习笔记一/index.html","4f72f3d950c9b91be19d41cda7785e60"],["/2022/06/28/C51单片机学习笔记二/index.html","57c84f40400e2255cf92857215c32fbc"],["/2022/06/29/C51单片机学习笔记三/index.html","f4ab8f0d7896eef21277dc1650fa334f"],["/2022/06/30/C51单片机学习笔记四/index.html","3145bd7dcb87ca2701b91a535edd602b"],["/2022/07/02/C51单片机学习笔记五/index.html","27d833c830584cc0a7d57552f199f8c0"],["/about/index.html","6ac8b09ed9e1ef01a774b5048c125d5d"],["/archives/2022/05/index.html","93301cb1e7fcadffa5e4dc7a5a75f228"],["/archives/2022/05/page/2/index.html","c56d5a80435f00adae76e16491475e8f"],["/archives/2022/06/index.html","97c0ff8b1713b542b3cc0ef6a0cb9ade"],["/archives/2022/06/page/2/index.html","e9e02458e72bfde25e16bf29941e78c0"],["/archives/2022/07/index.html","dcfd703a64a336c80078daa696064914"],["/archives/2022/index.html","978ccbee3cfd41255b72288b31577db5"],["/archives/2022/page/2/index.html","6af810a8f8ecce563f22f9fff6ff6285"],["/archives/2022/page/3/index.html","ef053cdfb30fec5725813ab6819cf25c"],["/archives/2022/page/4/index.html","6841643e71e63511fd408836bc7e5f9e"],["/archives/index.html","ba3ac051cff354990d0413008f13b19e"],["/archives/page/2/index.html","45c68ecd945b7a1d0ab5a0dc8716e860"],["/archives/page/3/index.html","d7eb3e36d3499f0cdb298d41c3afdbeb"],["/archives/page/4/index.html","039ed1cc3f11ad180e387ff2cef78575"],["/categories/Linux/index.html","e484aa56a68c783df91e76564904441a"],["/categories/Linux/vim/index.html","952f551fa77a40176ce470472713ae74"],["/categories/index.html","fe234ea6fbfb251f4551f67b674cf21b"],["/categories/学习笔记/C-C/index.html","8015c00c66513f5945eb10b699e49e1d"],["/categories/学习笔记/Java/Api/index.html","5468f24297eb46199011d831ae52e24e"],["/categories/学习笔记/Java/index.html","778b50116ef7539814f173348371c464"],["/categories/学习笔记/Java/page/2/index.html","c08f8906a390611033a69f2bd23c01c2"],["/categories/学习笔记/Python/index.html","5838f1302848b4dae7cc47d372761a01"],["/categories/学习笔记/index.html","d875af95a1f084a58eb8115b955c0052"],["/categories/学习笔记/page/2/index.html","3d812292b344f36351bc69a914804d11"],["/categories/学习笔记/page/3/index.html","1472fcb3a86a4e94fb28f37afb974d0b"],["/categories/学习笔记/单片机/index.html","c6395845e8e98542db3bdecf0c464688"],["/categories/学习笔记/安卓/index.html","319921b405895b32c27ec78bf3c539cf"],["/categories/学习笔记/数据库/index.html","4b26147f69451da543af0a56c874f9db"],["/categories/安卓/index.html","206214c54777334988e159804f3d9bd0"],["/categories/安卓/新大陆/index.html","e6c93ec711a7ba7ef6a5503382e35507"],["/categories/算法/index.html","f32ad6f2d0b6723a34164f0976282fee"],["/comment/index.html","862cb73357a552a9ebb75241555fe0bd"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","562f0473fe3c7a472cb5d9d16070be8a"],["/gallery/index.html","8ca35336f6c38aa6260f7df5d9f655f0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","1528dcf3b59edc31e4fea262344a31de"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","6773a1d23aef91a7d228d28c26c162a9"],["/page/3/index.html","ace5dc8aef00f168062da29b8b2f13a3"],["/page/4/index.html","16cc6112df6ed780c3ff05ed814b0d12"],["/sw-register.js","b09103806fdaf83c7bd8b6830c6eba15"],["/tags/Bundle/index.html","ac63ebc0c7bdccb5524062896f2e19cc"],["/tags/C-C/index.html","af1e50e0b178803b4757731362aa68bf"],["/tags/C51单片机/index.html","134f6bfc35380d9d393b4ba3c37bcc5e"],["/tags/Intent/index.html","0c3fc5463cef1a10b094209b257e3e4e"],["/tags/Java/index.html","8339cdf2927d9cb3af60954a92eca01c"],["/tags/Java/page/2/index.html","f83582f68b2dd9d217284007e5a04518"],["/tags/MySQL/index.html","4bf0d93cce45cb5cb3ffbb6968678040"],["/tags/PWM/index.html","50ec31511f82b8c05a042460d2ce3a58"],["/tags/String/index.html","96ee02d4c41e68a28031aeb8acbba76a"],["/tags/Thread/index.html","8ef742894e23b5aed9cbbc44c0b69c9a"],["/tags/api/index.html","c786e281e6a63db5c503d3bc8aed0112"],["/tags/gcc/index.html","7374e8eb4f340bc06efa2176a96438fa"],["/tags/index.html","6bd65df3daa8c7c88fe157946d0bb9cf"],["/tags/python/index.html","18c8fbf0024c3cccd7eeda0ad9bc67b9"],["/tags/vim/index.html","116f59a9597a4b6bce372ab8844787ec"],["/tags/wifi/index.html","2a71d77e1e35f27ff9b753058b61bd17"],["/tags/串口/index.html","e7a1d09dd1ed22d0b5898a437e4f7fad"],["/tags/云平台/index.html","5bb26e23e6ad270bd67ad1bb01c8565f"],["/tags/冒泡排序/index.html","b4d4a24c2a9599f6c8fecbfef7da815b"],["/tags/单片机/index.html","3aa2946cf87bbb1d624f36e646f006b1"],["/tags/安卓/index.html","b46b111ee7ef9496c1a5efba8323f27b"],["/tags/定时器/index.html","499132610ed426256dc3124228f0c185"],["/tags/斐波那契数列/index.html","d6f407f989e6e4b31390a8d3161215f6"],["/tags/新大陆/index.html","ff69a34b9c6e837f3d831a6362e4d101"],["/tags/蓝牙/index.html","73aad40dc795989e1c01e72fbd028afc"],["/tags/选择排序/index.html","dbde43f42f42c6000e5cab4e15e423a0"],["/tags/面向对象/index.html","b54bb73fbd79fc25a8931741866525a8"],["/tags/面向对象编程/index.html","826b0cf2889fcf3237e1ccb78ef9853b"]];
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
