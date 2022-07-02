/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","89a00dd75333b8680e8f75f1854cdf4b"],["/2022/05/31/Android新大陆云平台API使用/index.html","1936be390d8638708d73e8024c2fbe89"],["/2022/05/31/Android页面跳转/index.html","3a67e66341a1c3a006594173bcedbadb"],["/2022/05/31/Java内部类详解/index.html","2a8427f20649496ec09eee7c9b1c3a8f"],["/2022/05/31/Java多线程/index.html","4980a5f595b7aba07dcc786656bc305b"],["/2022/05/31/Linux-vim的使用/index.html","b387501558dc74f1ffc1316ebe1a612d"],["/2022/05/31/MySQL基础/index.html","71339e3d6d72173ee0dc07c45addd187"],["/2022/05/31/String/index.html","293cb3e6397704d68443f91ed8252a3c"],["/2022/05/31/final关键字/index.html","99ab66e8ac43303e72aa22e931a021e0"],["/2022/05/31/static关键字/index.html","3ec2cebb5ae155e188315e646991aad2"],["/2022/05/31/this关键字/index.html","f2c2925682265aa1657313f3db5c2516"],["/2022/05/31/冒泡排序/index.html","d57a1f4d402feab62603a387c6763a42"],["/2022/05/31/引用类型使用小结/index.html","903e91cdda7ae7b4aad539f46da1c6fc"],["/2022/05/31/抽象类/index.html","55af77f546736fb7ea15b136922bc576"],["/2022/05/31/接口/index.html","1f842ce83c87abdc0edebec2855c3ef7"],["/2022/05/31/斐波那契数列/index.html","d1093a7f9b8a2cae6c74edf6cf8e7f2a"],["/2022/05/31/类的五大成分/index.html","7290a070ac45f0629e08ab3dc361856b"],["/2022/05/31/选择排序/index.html","7b7151597029901b417c40e6d9708bf3"],["/2022/05/31/面向对象的三大特征/index.html","eb6d93a2d207d15f75c352c9aac56926"],["/2022/06/01/01.初识Python/index.html","30f9e3dc7555b7f431189dedc51a0aca"],["/2022/06/01/02.语言元素/index.html","00ae97881dd51fc8d4fea2fa67b6be49"],["/2022/06/01/03.分支结构/index.html","c49d56d396e3a79dbd40326d15f90027"],["/2022/06/01/04.循环结构/index.html","d7a42630dbf89f8062e29216622d1fa6"],["/2022/06/01/05.构造程序逻辑/index.html","85a29f133723c4eba9c1ec4067cea95c"],["/2022/06/01/06.函数和模块的使用/index.html","bc03c41d068dde9fb5f75902156252da"],["/2022/06/01/07.字符串和常用数据结构/index.html","aaa91cb1888d89d75a923fbf2189173e"],["/2022/06/01/08.面向对象编程基础/index.html","1b8f4a56ae8dfd1d44a976107a294dc9"],["/2022/06/01/09.面向对象进阶/index.html","ed0d7236c36b79764e405227a6f45fa2"],["/2022/06/01/C语言笔记/index.html","820235b694afd454219428ce5361155c"],["/2022/06/07/安卓基础-布局/index.html","9394c7a5ba6b11c17926000d2efae1b7"],["/2022/06/28/C51单片机学习笔记一/index.html","c5bcc756966ff0afc21eff2ecc87896f"],["/2022/06/28/C51单片机学习笔记二/index.html","f0338d2dfabd10cf93fa526300e2905e"],["/2022/06/29/C51单片机学习笔记三/index.html","967f03a7d3e013b5969001bf826c7385"],["/2022/06/30/C51单片机学习笔记四/index.html","343a5adcf64d02660fa487dd79aad4f0"],["/about/index.html","36319cbbcfc8cdd6e649e157158d606e"],["/archives/2022/05/index.html","92bbf0debef85115a1eab4a27904fa2b"],["/archives/2022/05/page/2/index.html","e9415a031a95c4ab3fee0264acf876c1"],["/archives/2022/06/index.html","222c1a56b925abf84c39453487866c75"],["/archives/2022/06/page/2/index.html","acd4b16db354f542e6efc9e05f8166e1"],["/archives/2022/index.html","de3e62639adbb9fb756932a778b76d6f"],["/archives/2022/page/2/index.html","424d3b74b2adc17d561260f78f8ac2ed"],["/archives/2022/page/3/index.html","cb262c12ee4de4d38e11ccd984eca7a1"],["/archives/2022/page/4/index.html","f157f161a1ec7fd38759d999db65c0df"],["/archives/index.html","34606b503b1c2ae553f68c7d5f0c375d"],["/archives/page/2/index.html","d52a0fd9584597618cf29744d8ca42d6"],["/archives/page/3/index.html","849f50914b27e6de2445808ba28de805"],["/archives/page/4/index.html","a18b482881072356ac840ba0794db92a"],["/categories/Linux/index.html","1f7e5ec4a8c9659a2f18c5ad39d5cdaa"],["/categories/Linux/vim/index.html","506d9c9af0094731557bbe58709a8ef3"],["/categories/index.html","c09bdc16f0b745e645db557f8d9089d6"],["/categories/学习笔记/C-C/index.html","51737f5b75fff0c74a00677e9835abb6"],["/categories/学习笔记/Java/Api/index.html","d822c94ccce1c1215a380d541d4b24cd"],["/categories/学习笔记/Java/index.html","a18a79a19987b2526266ad6a17086908"],["/categories/学习笔记/Java/page/2/index.html","5f9c21df6488b6e402af3f39d9f629db"],["/categories/学习笔记/Python/index.html","bff89c49f71cf6443393d23aee17e001"],["/categories/学习笔记/index.html","3dbbf875f89b20aa7f3c0addb397c15f"],["/categories/学习笔记/page/2/index.html","f06dc66c59c8537cbe41ccc50d5c22eb"],["/categories/学习笔记/page/3/index.html","cab00b39af9c1f2a12e919d814df5a81"],["/categories/学习笔记/单片机/index.html","76a5073f3e2009af11a4a390020c3983"],["/categories/学习笔记/安卓/index.html","b3aab6576257f220d4598463a232b4d7"],["/categories/学习笔记/数据库/index.html","93083ca026df0a166135def47cc7c705"],["/categories/安卓/index.html","381821285130185a9e110fbe02044ac6"],["/categories/安卓/新大陆/index.html","6858812b8c09254e9ad3372e7cf57322"],["/categories/算法/index.html","485baf3dfe0953c17d08b509f8e35626"],["/comment/index.html","382d32048ded530784571e8380487bd5"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","ea599f26e82b2eff5f1663b579d625af"],["/gallery/index.html","31653149bf78a418a458a241b3fc945a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","311700ef0978737699bed24d986cd8ad"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","501c7d0d34ecfe85370e2a5d1d21b5e1"],["/page/3/index.html","c5139fec4d0b5dec03691f332d30d50d"],["/page/4/index.html","f9917d651051f76e9c0a32d04bdfcee0"],["/sw-register.js","e2bddafd96adb2904bbfa3618c46e846"],["/tags/Bundle/index.html","2cfca5d66bdf3ac67ee680ef430e0dc0"],["/tags/C-C/index.html","1e57cff6645453b159ec2cdf7a4da15a"],["/tags/C51单片机/index.html","494e39dadc201dc3d0ddea5f3dda74d8"],["/tags/Intent/index.html","d96cba31aef50cc5d6e6685a2cd550ac"],["/tags/Java/index.html","5827d6821a4dc7224a26885da118d1f3"],["/tags/Java/page/2/index.html","a5528b3854a8ae4b788e754c28455734"],["/tags/MySQL/index.html","bbd75c245f667768d15180014326c000"],["/tags/PWM/index.html","548c3fc1a2c83f3cb2019f52dcb69932"],["/tags/String/index.html","144b4d6de74703159b438cc7bc25820d"],["/tags/Thread/index.html","503e035a7e414c2fa6db9571fdac03b7"],["/tags/api/index.html","981260e33bb3ffeb8db47a5d4f5b624c"],["/tags/gcc/index.html","c730bb5f3648e77ab247c742571a972e"],["/tags/index.html","f1d2200f6acf64b319cc168c36774b3c"],["/tags/python/index.html","0c22f68185305d1441a878fdb1f29655"],["/tags/vim/index.html","f0c8bf4df50f49d021bd9d105048fe0e"],["/tags/串口/index.html","001e6f44b3f2b1436d9a90f076f4fce8"],["/tags/云平台/index.html","b0c222415e76bd95e1399e2980da929d"],["/tags/冒泡排序/index.html","bab9f456804a5250499a3b1eaa9468fa"],["/tags/单片机/index.html","58162cf906bccddfd5100484fc46c9cd"],["/tags/安卓/index.html","7891d5fe83453e68935078529531f0b0"],["/tags/定时器/index.html","53847112697689c172a8abccec9ebf3e"],["/tags/斐波那契数列/index.html","5ae6c0037ab99a9691b5292db6d3c4d3"],["/tags/新大陆/index.html","19bb3b0461fb366629a879dbda62808f"],["/tags/选择排序/index.html","788b1c2ffbcbc2319e7ab790d0d6ce3e"],["/tags/面向对象/index.html","0fa274eb5ae908f371e479ea08e6d2ca"],["/tags/面向对象编程/index.html","ffce20ce10b6877bc2b925da14e5f629"]];
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
