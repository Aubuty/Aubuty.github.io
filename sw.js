/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","fd69778336390b90ad38844b9d8a398a"],["/2022/05/31/Android新大陆云平台API使用/index.html","d90fc53d5f97288181b65c323efd1b84"],["/2022/05/31/Android页面跳转/index.html","fc8e17de599cf263c02dfe5874311af7"],["/2022/05/31/Java内部类详解/index.html","3ceda81437aecab23150f00643afc6b5"],["/2022/05/31/Java多线程/index.html","006b48b5702e655247681bf925488de7"],["/2022/05/31/Linux-vim的使用/index.html","181c68e3ea6161656a365796356675ae"],["/2022/05/31/MySQL基础/index.html","877d7ffc84eb9401b53da59bcebac36d"],["/2022/05/31/String/index.html","919dd28755a305d624f6b61461b8ad65"],["/2022/05/31/final关键字/index.html","abe7a0c76ab32dc43eac552729722177"],["/2022/05/31/static关键字/index.html","fcfe1a098bfc8646db5cd4a69b938151"],["/2022/05/31/this关键字/index.html","abeb93be405bcabe0318a0a961dd20e7"],["/2022/05/31/冒泡排序/index.html","73e8cbfdcc3eac8936092426b9c7e294"],["/2022/05/31/引用类型使用小结/index.html","3033b07ad7ffa4513ec6799be97d9632"],["/2022/05/31/抽象类/index.html","7b7ba9a162541223d771f693be3cd475"],["/2022/05/31/接口/index.html","9ea00415b18eaaffed8b63a4794bb7ec"],["/2022/05/31/斐波那契数列/index.html","5b80dde879a7f1b7af4812750a8f1e64"],["/2022/05/31/类的五大成分/index.html","17f361a184b06471341bac4f9e632d4d"],["/2022/05/31/选择排序/index.html","ff48306040a7ccf78c8e7360601f443e"],["/2022/05/31/面向对象的三大特征/index.html","eb210ef6a4ac3be535d22860cd7819a8"],["/2022/06/01/01.初识Python/index.html","984a2f26ad95165ce30c90cd09fda57b"],["/2022/06/01/02.语言元素/index.html","8c1c04eedc314f0d3e7dfc3f7b071bd7"],["/2022/06/01/03.分支结构/index.html","cbd10d8314986857e1926a287a8dbbcb"],["/2022/06/01/04.循环结构/index.html","29ba393b35cef8f5e4d6570a98a72082"],["/2022/06/01/05.构造程序逻辑/index.html","72d6bb41b110a08e04431ade901eb48b"],["/2022/06/01/06.函数和模块的使用/index.html","6e7d6041e08113feb35265686386ffc2"],["/2022/06/01/07.字符串和常用数据结构/index.html","ed480b14c00930e3ba73f9ffec671171"],["/2022/06/01/08.面向对象编程基础/index.html","b0ac718afdd56fbc8563f7fee5e68639"],["/2022/06/01/09.面向对象进阶/index.html","3de022a7206ad4d11621a4bd3cd06145"],["/2022/06/01/C语言笔记/index.html","08abe9f35ead5bdffd29168459a6e3ee"],["/2022/06/07/安卓基础-布局/index.html","f971449e916a0e6e75f1e7fdc1643fb1"],["/2022/06/28/C51单片机学习笔记一/index.html","591892e37538dfe4790b5e8d529b6037"],["/2022/06/28/C51单片机学习笔记二/index.html","deeb24e0d687c482ac09c9eff5de91c6"],["/2022/06/29/C51单片机学习笔记三/index.html","3b48560139a27716919d2aac91dc0595"],["/2022/06/30/C51单片机学习笔记四/index.html","3180b87e6b6359eea04ff14be2f4ce8e"],["/2022/07/02/C51单片机学习笔记五/index.html","0fdf12274904ea5d6d0483be83ab8521"],["/2022/07/05/C51单片机学习笔记六/index.html","f20ec38dd2f83e0b7bcd1268b69c78d2"],["/about/index.html","cce36cabb5d8c1aac935d4b595557a87"],["/archives/2022/05/index.html","5695850f6108a6652443dddca3578304"],["/archives/2022/05/page/2/index.html","1b77614699267ea749b672cfc08bfebf"],["/archives/2022/06/index.html","441be45038a4828359ceb2e947eb1d99"],["/archives/2022/06/page/2/index.html","915f00eb352cce8be371629d6bb17dc3"],["/archives/2022/07/index.html","830cd2d25a3b547578267604ef01e25b"],["/archives/2022/index.html","b338a0ffa42c451da3055074f7d2faad"],["/archives/2022/page/2/index.html","aea837222af4d5f13b1b5846d025f7fb"],["/archives/2022/page/3/index.html","3dda2a632240505f196f97ba3a76f668"],["/archives/2022/page/4/index.html","7006587026bad5c0cdc1a84a15cae1f6"],["/archives/index.html","2b1a3802bbd340b9ecf64efa6aad9dce"],["/archives/page/2/index.html","3b9f904f884df1f0e3247b1fbabffb1d"],["/archives/page/3/index.html","6bf410b78de9b178cbbcdb7ed987cd61"],["/archives/page/4/index.html","c4af245c1bb2cafac179b51707f3a56b"],["/categories/Linux/index.html","d15b94eb0a128259d572bfb59c360329"],["/categories/Linux/vim/index.html","d6cd132e6062216258922dd8f3d30f47"],["/categories/index.html","cbcfbf3b989dabbb77fc9b08a5403cc6"],["/categories/学习笔记/C-C/index.html","eba1e3af8807cee17032a90a2d8cf771"],["/categories/学习笔记/Java/Api/index.html","c3cb718c83cc3e9eb01e490a3888be9e"],["/categories/学习笔记/Java/index.html","7debbf629c74e36e1fcb7f462c7c67c6"],["/categories/学习笔记/Java/page/2/index.html","571a95ae3621c6bec4af0b6c982081cf"],["/categories/学习笔记/Python/index.html","397c2d0edaac3c317e2edd3550bd1b0c"],["/categories/学习笔记/index.html","7e88598cc22e5737a8a42a0380dc054f"],["/categories/学习笔记/page/2/index.html","c60e916a89e7d18a85df2a780c3fa8b0"],["/categories/学习笔记/page/3/index.html","b779a457a66a078ee2b66accccb5a796"],["/categories/学习笔记/单片机/index.html","5307ef528c86542adeabdc8e240398d3"],["/categories/学习笔记/安卓/index.html","4c27772f0db581f426dce0ad090cf7f7"],["/categories/学习笔记/数据库/index.html","eb605e3b44febd13b8db3b3dde437f54"],["/categories/安卓/index.html","94f82e192deb68d7b4c0751075374960"],["/categories/安卓/新大陆/index.html","85f505f3cf34ccbb5bf387ec4b0756b2"],["/categories/算法/index.html","a7c541946489460f8db72110c313e6dd"],["/comment/index.html","a0e826f5d0213d4439c32f5da5f4d72b"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","ddbc3169bb5256e4d20983215d94e36f"],["/gallery/index.html","046a7cac2256137d878473ae3723158b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","89fbc8d4b4c8cf7e4b5527ea83ef0d3e"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","c5cd97085e2cb9997d0f34706446675a"],["/page/3/index.html","f192f40451a070f725826c67fb1f99c7"],["/page/4/index.html","3e65c9ab4a695f234c3e926dd14cead8"],["/sw-register.js","d9aa9c73130d6db040d04dfbe8f7087e"],["/tags/Bundle/index.html","9ab21f21dff113234da50663b50f097b"],["/tags/C-C/index.html","e16cf9f07cc9aaee63736543e3ab89dc"],["/tags/C51单片机/index.html","cd9c1b93cb13fd4c286f84b9413c9021"],["/tags/Intent/index.html","a1fe212257e10e68ceca6171e383c237"],["/tags/Java/index.html","e9e7daff1d4500b7402d2b768b7756f9"],["/tags/Java/page/2/index.html","e7e2292e441f1ec9a69ce8cdda2f4ed9"],["/tags/LCD1602/index.html","70222b54068c56c7080613ce781796d4"],["/tags/MySQL/index.html","66675655fcebca6ba0380ccb47c1bc5d"],["/tags/PWM/index.html","f0ed92bb665e25d0099cb2c343add59a"],["/tags/String/index.html","0137019d9af0f71f7b5558c005aa9748"],["/tags/Thread/index.html","058d268eca06cfd914435acb17a501a6"],["/tags/api/index.html","a8bacfe5bb50fbb864fee087e901d815"],["/tags/gcc/index.html","0b326b0f4087af0127f3197527c42741"],["/tags/index.html","32e26e01ce605f545dbbcc4b3dfea6b8"],["/tags/python/index.html","b5f4e04dd317f6180bb974f38075d2f8"],["/tags/vim/index.html","c68161ddcb2ce9efe2f5dcf6cb438cae"],["/tags/wifi/index.html","d2c1b966cb6bd9f8795fbcef7d407299"],["/tags/串口/index.html","4259e5e4470b0e0d6fbf243a4314eb5f"],["/tags/云平台/index.html","af7b0d09f1ad8b83031951d73fc713a2"],["/tags/冒泡排序/index.html","4f9ae099d2e9af52bfe15d38f8c0c94e"],["/tags/单片机/index.html","e464d088e8796436554d24e24e499eb7"],["/tags/安卓/index.html","9f97bffde4ad22047bd075bfcaa47cb3"],["/tags/定时器/index.html","fced6a3d6a84b626704cd96cf7265387"],["/tags/斐波那契数列/index.html","596c9772bc0a69d6800fb08ece738be6"],["/tags/新大陆/index.html","4705506dc782f3ffcebf694b405e4918"],["/tags/蓝牙/index.html","a42b7d2645cb239e4a7e55c9367ad2dd"],["/tags/选择排序/index.html","05bc8035be8682460f83703cee0a488c"],["/tags/面向对象/index.html","778882b74f870a97b2214fab4368a7f5"],["/tags/面向对象编程/index.html","6c30dad3bfbb098ec44fa0307304fde2"]];
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
