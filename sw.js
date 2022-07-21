/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","b186515c7d0b6ea03b72236226c57b52"],["/2022/05/31/Android新大陆云平台API使用/index.html","079def1c630b69d9a8ff9f458c97134d"],["/2022/05/31/Android页面跳转/index.html","cf5e4b2d2b1093be4b349c3ea8d8b08e"],["/2022/05/31/Java内部类详解/index.html","23de7b2cb44a9caaa2162b3f1237b051"],["/2022/05/31/Java多线程/index.html","fd7a040798c7c8c353f526c4afcae8f4"],["/2022/05/31/Linux-vim的使用/index.html","752a724f334958ff9f442573c7970d72"],["/2022/05/31/MySQL基础/index.html","cdf72de55f49972d502a7e581018db65"],["/2022/05/31/String/index.html","1a9b90d4a1193570bfd4fab88c521f0d"],["/2022/05/31/final关键字/index.html","81c5ff73cccfa62761771f108d0a73ef"],["/2022/05/31/static关键字/index.html","e1c1814ef0b849a9d7ed5f1154795c18"],["/2022/05/31/this关键字/index.html","60e3d5dbcaa4841fafcb641e6140521d"],["/2022/05/31/冒泡排序/index.html","7d443596baac7717ab3feb7c509ae718"],["/2022/05/31/引用类型使用小结/index.html","8a9357d746e4c9fe10f5c441386af1af"],["/2022/05/31/抽象类/index.html","6f1fce20c65320889f9278902caf065c"],["/2022/05/31/接口/index.html","3ec56f803780b36081ff382ec42acabf"],["/2022/05/31/斐波那契数列/index.html","2af68888765750c210698713fcd1a792"],["/2022/05/31/类的五大成分/index.html","9eba1ac8c8af2d2e1d5c53d6de0d265b"],["/2022/05/31/选择排序/index.html","4857eb3e24750b7a440bfed6e2e72280"],["/2022/05/31/面向对象的三大特征/index.html","4818bdc1c4063cb8d61d0330586872eb"],["/2022/06/01/01.初识Python/index.html","cdd272e65087682101616a692116ee86"],["/2022/06/01/02.语言元素/index.html","9d2d99d7b8801138e4a44bd9c0d127a8"],["/2022/06/01/03.分支结构/index.html","a70e8651df86748f872e580f87e6d2e0"],["/2022/06/01/04.循环结构/index.html","260ffb3d358e36bd14be5ad4b721a5c6"],["/2022/06/01/05.构造程序逻辑/index.html","5dafb73f22c6a8a840e77e593510c714"],["/2022/06/01/06.函数和模块的使用/index.html","ec120bec22f87c6c9df469149488983d"],["/2022/06/01/07.字符串和常用数据结构/index.html","857d268876257d65d7ea455b29aa50c9"],["/2022/06/01/08.面向对象编程基础/index.html","0680527f51bf6a469645a6631d168dec"],["/2022/06/01/09.面向对象进阶/index.html","0277b7b658e5c203c7dc209c083095a2"],["/2022/06/01/C语言笔记/index.html","407d39d48f9ebbf9f3a10a2cd0ad1ab9"],["/2022/06/07/安卓基础-布局/index.html","15924d071fc167fd030c92b7445de133"],["/2022/06/28/C51单片机学习笔记一/index.html","e5362da54d3405ea5cb69bbd08f8b3e4"],["/2022/06/28/C51单片机学习笔记二/index.html","f45fe10e4abc6137620d27f5c0952ee5"],["/2022/06/29/C51单片机学习笔记三/index.html","2c7cf80c1b98c156dfb63206d4a43d3c"],["/2022/06/30/C51单片机学习笔记四/index.html","eef489587a204ce02c74e71d5244394f"],["/2022/07/02/C51单片机学习笔记五/index.html","050ce132919d5b528567362a0d112152"],["/2022/07/05/C51单片机学习笔记六/index.html","e5b288cf27b6c5f4c0db52f499baad49"],["/about/index.html","e651f6762c614e49dc980078133bfa8e"],["/archives/2022/05/index.html","f0332ea83acc2b79195362f980bbc355"],["/archives/2022/05/page/2/index.html","0898548dad6ce12a09f4203fe600606b"],["/archives/2022/06/index.html","07ff90e2417f38fb3ea18d5cf0942b88"],["/archives/2022/06/page/2/index.html","378a91ab53d3452ccebbe05b9ba1acc0"],["/archives/2022/07/index.html","1f5cabe2111a26f32e1ab9438fe0cccf"],["/archives/2022/index.html","6564f320e63a9b4255c54af6870ed056"],["/archives/2022/page/2/index.html","93d342bbecc4beefc80b2d34f7d3f443"],["/archives/2022/page/3/index.html","8f0e5674132201b0bc561d72561e84d0"],["/archives/2022/page/4/index.html","d33f6b3c383c909f3f6b19890e59339c"],["/archives/index.html","4c31cb6eff6e733ad8c02d4cc71a6386"],["/archives/page/2/index.html","1b5848a981314ee497856dcc49e321f3"],["/archives/page/3/index.html","014d02a797bcf314c0c44b356281a465"],["/archives/page/4/index.html","1131f011f49c14d8899da8e5a4b219f2"],["/categories/Linux/index.html","fb46621fd7dfaec485d43832e9e3ee59"],["/categories/Linux/vim/index.html","c3d58535feddd91060aa3467627551ae"],["/categories/index.html","241bcf04a09b16a04b0a4d4cdc840a50"],["/categories/学习笔记/C-C/index.html","8cf8fd5f0a86759bacfddf79e8a55342"],["/categories/学习笔记/Java/Api/index.html","ae3bc2e6a23f3f091cd7d42e58000426"],["/categories/学习笔记/Java/index.html","2b35589ffdbafd6f97a6e2f61d4b228c"],["/categories/学习笔记/Java/page/2/index.html","d3143509c9ac334953ca612796086312"],["/categories/学习笔记/Python/index.html","6f4872af2f3484eb33c2ae15cd45cf4a"],["/categories/学习笔记/index.html","3bec48507cd3aee1a98afbcb3900beb4"],["/categories/学习笔记/page/2/index.html","2d6be501b43ed15d5c3d61cb01bf4833"],["/categories/学习笔记/page/3/index.html","7e6bab3cab1104f0682866d5c1786ed8"],["/categories/学习笔记/单片机/index.html","ade9439f860ae5203834a2e4c5748a4a"],["/categories/学习笔记/安卓/index.html","2e4041dfff1cab3d50108774b71250e8"],["/categories/学习笔记/数据库/index.html","879fda9fee170cd391e179fbaa0c74da"],["/categories/安卓/index.html","f9c4101c9bdfa1683080c3aabdf4537d"],["/categories/安卓/新大陆/index.html","5ecc3b430cf3a96fda393c8f7de7f41c"],["/categories/算法/index.html","f546cb920a8c640e1daf9fb18ec6f2ee"],["/comment/index.html","0df13509e621792f2b01412f42643eb9"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","ace7e7008144a65cc2660e70c6087e97"],["/gallery/index.html","2c91aad001c0efac06b98f2b504c4403"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","d985354a35a238903af8fc779897d931"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","1a8f2a5790db24dfb04602f1b1b60b68"],["/page/3/index.html","aaafd0ec4df9489c8418e7656402a9c6"],["/page/4/index.html","8f1f8647f2388fb6ae96b5f14fc4c1d2"],["/sw-register.js","9fddb6c24f3bab784bc4933d5a26d494"],["/tags/Bundle/index.html","800e4df5fe842ef38bff0a3325f31010"],["/tags/C-C/index.html","94c46a69c2848d573821a9783fa0d3a0"],["/tags/C51单片机/index.html","89e0baddeacea66c5495c609f8173010"],["/tags/Intent/index.html","fe0e86ba7c56f08bdf334192bd465dc7"],["/tags/Java/index.html","ba69f6ef0b0e38f0cb4a242d5f888ee0"],["/tags/Java/page/2/index.html","74a3bedb7bb48608240a6a27f26832f0"],["/tags/LCD1602/index.html","668c4dab1d91124cf3182f10fc278026"],["/tags/MySQL/index.html","978452bb23a2158f5480309b2e467a08"],["/tags/PWM/index.html","b1460ace985ec6e8d01d0be40d6387f0"],["/tags/String/index.html","ef2e46d0dc59dc6311439c2286482336"],["/tags/Thread/index.html","dcaa8c385bf612a3bb1e9343cfe458a7"],["/tags/api/index.html","d2d2c36f51d232bd9e723e17251004f5"],["/tags/gcc/index.html","8439170c3971d97c280695c4189fb127"],["/tags/index.html","d07ce81ded7c6618378e70612e1437dc"],["/tags/python/index.html","aa96b2ad2fbd83d00fc4f349a26658b7"],["/tags/vim/index.html","5cffbbf662efd80e71305c30f10d8eb1"],["/tags/wifi/index.html","fb15ce75a6658f8ff130aca028eaafee"],["/tags/串口/index.html","cab801b2594ca33e8bb658bb7f35481d"],["/tags/云平台/index.html","c914993d8d75c2b3e17fe7ba58279bf7"],["/tags/冒泡排序/index.html","b34daa1fb239c55e82fe1307b1a926cc"],["/tags/单片机/index.html","c7f414272691f1d192d9106b7e4d00b7"],["/tags/安卓/index.html","74276f8c6eea9d5b4572a26e278310b5"],["/tags/定时器/index.html","809edba27443a83b202fce60014a379a"],["/tags/斐波那契数列/index.html","75ff2206f5d9406a7a9826841b094d7c"],["/tags/新大陆/index.html","eb13f63facb596fc812d9094e4b4e462"],["/tags/蓝牙/index.html","a3f38b8b5d24e175ea4556ff262c7a3b"],["/tags/选择排序/index.html","77c9e8c89f93c395aff3f4a16b542994"],["/tags/面向对象/index.html","b0df383f599aab998c85e313644313d7"],["/tags/面向对象编程/index.html","877fce698ee2725d905cd0f3e6a309fe"]];
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
