## 目的
主要目的为保证公司内网络正常使用, 所以不会像 [AutoProxy2PAC](https://autoproxy2pac.appspot.com/) 弄得那么全面, 因为公司所需要使用的网站与其又有差别, 所以不能直接使用 AutoProxy2PAC, 所以只有自己加工处理了

## 域名收集
域名收集分为两块, 一块为根据网站访问所使用的完整的全域名, 另一块为根据的网站访问人工加工出来的根域名.

* 完整域名: xxx_domain 的文件
* 加工的域名: xxx_domain_tiny 的文件


## pac.rb
此脚本将会根据 xxx_domain/ xxx_domain_tiny 中记录的域名生成符合 [Proxy Auto-config](http://www.proxypacfiles.com/proxypac/static/netscape-proxy-format.html) 规则的 PAC File 文件, 并且使用 shExpMatch 进行域名的模糊匹配以及使用 SOCKS5 Direct 代替 SOCKS 避免使用 SOCK4 协议.


## pac_file.pac
这个文件为最后一次使用 pac.rb 脚本生成的目标 pac 文件.  有 socsk5 文件是因为在正常的 [Proxy Auto-config](http://www.proxypacfiles.com/proxypac/static/netscape-proxy-format.html) 文件中, *Return Value Format* 中是只有 DIRECT, PROXY, SOCKS 这三种形式的. 而在 Mac OS 中, 只有当 Return Value Format 为 SOCKS 的时候有效, 所以此文件用于 Mac OS 的 PAC 代理设置.

## pac_file_socks5.pac
此文件用于 Chrome 浏览器 + Switch Proxy 的工具, 因为在 Switch Proxy 中只有当 Return Value Format 为 SOCKS5 的时候才能够正常的自动域名选择使用, 所以此文件用于跨平台的 Chrome 浏览器 + Switch Proxy 插件

## pac_file_ios.pac
这个文件是为了配合 [MobileShadowsocks](https://github.com/linusyang/MobileShadowsocks) 使用, 在这个软件中 local port 被设置成为了 1983, 并且 Return Value Format 需要与 Mac OS 平台的一样为 SOCKS, 所以针对这个情况单独生成一份用于 iOS 平台手机的 PAC 文件.