## 域名收集
域名收集分为两块, 一块为根据网站访问所使用的完整的全域名, 另一块为根据的网站访问人工加工出来的根域名.

* 完整域名: xxx_domain 的文件
* 加工的域名: xxx_domain_tiny 的文件


## pac.rb
此脚本将会根据 xxx_domain/ xxx_domain_tiny 中记录的域名生成符合 [Proxy Auto-config](http://www.proxypacfiles.com/proxypac/static/netscape-proxy-format.html) 规则的 PAC File 文件, 并且使用 shExpMatch 进行域名的模糊匹配以及使用 SOCKS5 Direct 代替 SOCKS 避免使用 SOCK4 协议.


## pac_file.pac, pac_file_socks5.pac
这个文件为最后一次使用 pac.rb 脚本生成的目标 pac 文件.  有 socsk5 文件是因为在正常的 [Proxy Auto-config](http://www.proxypacfiles.com/proxypac/static/netscape-proxy-format.html) 文件中, *Return Value Format* 中是只有 DIRECT, PROXY, SOCKS 这三种形式的, 但是在 Chrome 浏览器中使用 SOCKS 无效, 使用 SOCKS5 执行才有效, 而在 Mac OS 系统的 PAC 配置, 只有当使用 SOCKS 有效, 使用 SOCKS5 无效. 所以会独立生成两份文件, 以便给 Mac OS 使用.