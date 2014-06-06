## 域名收集
域名收集分为两块, 一块为根据网站访问所使用的完整的全域名, 另一块为根据的网站访问人工加工出来的根域名.
完整域名: xxx_domain 的文件
加工的域名: xxx_domain_tiny 的文件


## pac.rb
此脚本将会根据 xxx_domain/ xxx_domain_tiny 中记录的域名生成符合 [Proxy Auto-config](http://www.proxypacfiles.com/proxypac/static/netscape-proxy-format.html) 规则的 PAC File 文件, 并且使用 shExpMatch 进行域名的模糊匹配以及使用 SOCKS5 Direct 代替 SOCKS 避免使用 SOCK4 协议.