# 根据 proxy_body 生成输出最后的 pac_file 内容
def pac_file(proxy_body)
  %Q(function FindProxyForURL(url, host) {
  var PROXY = "SOCKS5 127.0.0.1:8181";
  var DEFAULT = "DIRECT";

#{proxy_body}

  return DEFAULT;
})
end

def domain_to_proxy_body(file_path)
  proxy_body = ""
  File.open(file_path, 'r').each { |line| proxy_body << %Q(  if(shExpMatch(url, "*#{line.strip}/*")) return PROXY;\n) }
  proxy_body
end

# 长文件
#file_paths = ['./google_domain', './amazon_domain']

# 域名精简的文件
file_paths = ['google_domain_tiny', 'amazon_domain_tiny', 'ebay_domain_tiny', 'facebook_domain_tiny', 'youtube_domain_tiny', 'twitter_domain_tiny']


proxy_body = file_paths.map { |path| domain_to_proxy_body(path) }.join("")
File.open('./pac_file.pac', 'w') { |io| io.write(pac_file(proxy_body)) }


