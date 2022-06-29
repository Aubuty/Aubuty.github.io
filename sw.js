/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/31/Android-添加库/index.html","e1ff15fcc1b6d249396a5e785847c7b1"],["/2022/05/31/Android新大陆云平台API使用/index.html","bfdea0b7063753a975da0884c88b27e2"],["/2022/05/31/Android页面跳转/index.html","77a4ff01368d1ca56e05565f221d0bd6"],["/2022/05/31/Java内部类详解/index.html","f3729e8ee3eafeffb92faa73d064403d"],["/2022/05/31/Java多线程/index.html","0f4509b44e23b68b17951512460627dc"],["/2022/05/31/Linux-vim的使用/index.html","23161ae16f8c17b7c0cfe36e1bfefd6e"],["/2022/05/31/MySQL基础/index.html","7465933d0891e9672c3b1ac8a685ab26"],["/2022/05/31/String/index.html","330516dc0fdf7e488f34f575fcb05eda"],["/2022/05/31/final关键字/index.html","0bd4f2e8227bd61a44a14385ff5d85e1"],["/2022/05/31/static关键字/index.html","670a5cc7c3709124dadfc99ccabd9959"],["/2022/05/31/this关键字/index.html","68f656fb6c4a69cf089c3917c1fee9e4"],["/2022/05/31/冒泡排序/index.html","83051781eb4423593c6fd1649458c130"],["/2022/05/31/引用类型使用小结/index.html","e642085de4c898861cca4efa4cff854e"],["/2022/05/31/抽象类/index.html","c1bbad060201ef00d19db2b4678664aa"],["/2022/05/31/接口/index.html","bcb58ed09832ad51a4237737f6f798db"],["/2022/05/31/斐波那契数列/index.html","229547b8f19fb5895d73f3e9a5081e4f"],["/2022/05/31/类的五大成分/index.html","5f8f61fc54264be421e344515b684732"],["/2022/05/31/选择排序/index.html","301d067ea54782abbaa6f248cb659cdc"],["/2022/05/31/面向对象的三大特征/index.html","fb03ce2790b6ca198fcf523f7ead2223"],["/2022/06/01/01.初识Python/index.html","c22221ed3352290f811b393a54f6ffed"],["/2022/06/01/02.语言元素/index.html","04c3c3bc62c4442db1b931b20d73b9ab"],["/2022/06/01/03.分支结构/index.html","a5f6e9e4572521d48ea03037bd502ee2"],["/2022/06/01/04.循环结构/index.html","25de08a0b8d97e4676b07f37e193fd08"],["/2022/06/01/05.构造程序逻辑/index.html","a054b1149f3df4299a20cf01f268204a"],["/2022/06/01/06.函数和模块的使用/index.html","bc7c10d28b317c3222c5c5a875f3a590"],["/2022/06/01/07.字符串和常用数据结构/index.html","d85bf65df3dcac77318ab9d7362e5ef5"],["/2022/06/01/08.面向对象编程基础/index.html","3a2eaa7e328c49e8a5b2be5345a49a47"],["/2022/06/01/09.面向对象进阶/index.html","8e06fc5da5a9eb8bd8362b98aab8991b"],["/2022/06/01/C语言笔记/index.html","60d75b9ba3af09200c33d90c5804415c"],["/2022/06/07/安卓基础-布局/index.html","4703d533cc50ad3adbb5c680fe336907"],["/2022/06/28/C51单片机学习笔记一/index.html","c8895ef536f0ec52c558a18af60e840b"],["/2022/06/28/C51单片机学习笔记二/index.html","44cc836c7d9422714491f059ab8d47f7"],["/2022/06/29/C51单片机学习笔记三/index.html","c04a69cf471f8d7d76089ca74a9f71d9"],["/about/index.html","4fe69ff63ca1b3e3b1c8b28d6476e953"],["/archives/2022/05/index.html","d87b64ca738dcea07610509a474e7d0e"],["/archives/2022/05/page/2/index.html","31abdf44c74db3c0e8babab2c9e48005"],["/archives/2022/06/index.html","c1f64ed418c6dc2a4c02b8e28a9cd482"],["/archives/2022/06/page/2/index.html","056cbd801dbbd185243d806cbf310638"],["/archives/2022/index.html","eecc3e91f9852a98873b55fba59b54ec"],["/archives/2022/page/2/index.html","fa046e3b6541a8b90d44c8b28c10821b"],["/archives/2022/page/3/index.html","c0a19f196da825e3c9345e91a8efa994"],["/archives/2022/page/4/index.html","89eb35a03773f20256e7fb7894b77d9c"],["/archives/index.html","1dff217fd8084448aea69ce3adb4589f"],["/archives/page/2/index.html","f136d830a9b0069a2fca10522121ec74"],["/archives/page/3/index.html","9a0a0f15bc1169d1f92e012cbd1199df"],["/archives/page/4/index.html","c4d62bf61e26e1b5f1ec46dc5e11dcad"],["/categories/Linux/index.html","27a1b858bc4f15ffc437296223a71e19"],["/categories/Linux/vim/index.html","85aba34568ac8a3eb424c5a83e47f70f"],["/categories/index.html","2ca5ca5a139ab1aeddacbfb8bf2afeb5"],["/categories/学习笔记/C-C/index.html","505afed70b5e85bad7d928da85dbe812"],["/categories/学习笔记/Java/Api/index.html","9fecbbdbfde96276dfe212dbaa9dfdab"],["/categories/学习笔记/Java/index.html","7281feb033b55e80618f078e3e51d3fc"],["/categories/学习笔记/Java/page/2/index.html","0a63e615ecb8e3784026b248493ba019"],["/categories/学习笔记/Python/index.html","3917f94c463778867ac883855e16a0ec"],["/categories/学习笔记/index.html","92601f7efbd629c5fd5f6d208eb95955"],["/categories/学习笔记/page/2/index.html","1f8a16df31d3c0e2db55112772704b83"],["/categories/学习笔记/page/3/index.html","b9bd26fc56a399070819ef1e4254a1cd"],["/categories/学习笔记/单片机/index.html","9a6f7bd85f51b3439b78e8e706bebc35"],["/categories/学习笔记/安卓/index.html","39643f5750bf683b525fba2c9005f66f"],["/categories/学习笔记/数据库/index.html","8f73a51b5bbf4061dca1c5f86c62b9a3"],["/categories/安卓/index.html","66e5ea07dca0f2c0d4549dc421f9024e"],["/categories/安卓/新大陆/index.html","98af24f470c2bdb4c4f7dc038e032ca2"],["/categories/算法/index.html","61f75dbf1940283de4ae93d377e59bcc"],["/comment/index.html","d77f53edc360d642b338b9ae5d99a496"],["/css/backgound.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","06903865519d2fbbcd2a0b75738009d7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/BG/a1.jpg","6fb9f4b1a3149df5c786dada68bd8ae2"],["/gallery/BG/index.html","8edf4e00b568ebeace31df3c98449465"],["/gallery/index.html","5112704c9609eb76a2ca33c372832677"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9561.jpg","7352214b32669eaf926fe455679367e8"],["/img/a.jpg","2949928c39497705d5e8697390297e01"],["/img/a2.jpg","f69f2da820903003e87be1dd5638168e"],["/img/a3.jpg","a9de0477db69a554443572e9fdde9845"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favucin.png","48f26f5a7d5b2f0d9235bea9c2db8786"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e4b6323e19e57f6761b1ce47b7d329e0"],["/img/one.jpg","f69f2da820903003e87be1dd5638168e"],["/index.html","f04f9e441b69f8dc128e822716f4660a"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","94558bf64ae0bd5e2d0ec4fa5c9731a8"],["/page/3/index.html","359a99b7a46d09eba042ccaf401a1a26"],["/page/4/index.html","e2124da8ab090a342ea88857aa093a86"],["/sw-register.js","df9d15f03e397f89e877669b211dd8ee"],["/tags/Bundle/index.html","43ee803dfa3bdfc5251dc0e7ee1b065f"],["/tags/C-C/index.html","2795954047712bbac0595d567f851e41"],["/tags/C51单片机/index.html","75d0b528b11e8a8fb271ecadb710bed1"],["/tags/Intent/index.html","903f81b974cd44b92bbf46a00a5f69bf"],["/tags/Java/index.html","bb22a3ff9b42e2cf318f1a8495bf24f3"],["/tags/Java/page/2/index.html","202947688b50cb19c3b7ca47b9ea62b0"],["/tags/MySQL/index.html","0342024dd49a65db015c9deb47c76267"],["/tags/PWM/index.html","3cced3f6cbf85c7dbeec996838f1c14d"],["/tags/String/index.html","e1af6c6bb75232c16f4a7db1fcddcfff"],["/tags/Thread/index.html","fcda1fce7cf7f30ca4f824a0c06d6cc9"],["/tags/api/index.html","a7c0ae162688e06cc4fb0a9c8fcce6d5"],["/tags/gcc/index.html","8c422b368e38f892cf01a0bb6e0be326"],["/tags/index.html","2e67286b3263e8089ffe4861dea50300"],["/tags/python/index.html","4814f469381ae0719f317e7db98cc3c8"],["/tags/vim/index.html","d08108cc945ea8f1fc4f50ebadaf1907"],["/tags/云平台/index.html","af6b601bc6acb6a14816d66c708cfa23"],["/tags/冒泡排序/index.html","96cb66a69b45a762c9a9db820a132d95"],["/tags/单片机/index.html","9e53f8d2f8e5a4a9bfc090cb19f67f44"],["/tags/安卓/index.html","0ed187a5fb6a2498965f44dabe3643b4"],["/tags/定时器/index.html","1a5fc1c8e2c313093672030739ba057c"],["/tags/斐波那契数列/index.html","d41260e9243e95164eba2775e3ce6580"],["/tags/新大陆/index.html","a0dbd27d91d95e2fdc659ba3ebf31829"],["/tags/选择排序/index.html","75628ff24fc5eaeab140967630b163ec"],["/tags/面向对象/index.html","24732488cc9f89219abb882d1f201e20"],["/tags/面向对象编程/index.html","22d008981552fdf1b85dce3777cc9e08"]];
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
