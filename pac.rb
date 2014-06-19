# 根据 proxy_body 生成输出最后的 pac_file 内容
PROXY_HOST = "192.168.1.150"
def pac_file(proxy_body, socks5: true, ios: false)
  %Q(function FindProxyForURL(url, host) {
  var PROXY = "SOCKS#{socks5 ? '5' : ''} #{PROXY_HOST}:#{ios ? '1983' : '8181'}";
  var DEFAULT = "DIRECT";

#{proxy_body}

  return DEFAULT;
})
end

def domain_to_proxy_body(file_path)
  proxy_body = ""
  File.open(file_path, 'r').each do |line_outer|
    line = line_outer.strip
    next if line.size <= 0
    next if line.empty?
    proxy_body << %Q(  if(shExpMatch(url, "*#{line.strip}/*")) return PROXY;\n)
  end
  proxy_body
end

# 域名精简的文件
file_paths = Dir['./config/*tiny'].map { |path| File.expand_path("../#{path}", __FILE__)}


proxy_body = file_paths.map { |path| domain_to_proxy_body(path) }.join("")
File.open('./pac_file_socks5.pac', 'w') { |io| io.write(pac_file(proxy_body)) }
File.open('./pac_file.pac', 'w') { |io| io.write(pac_file(proxy_body, socks5: false)) }
# https://github.com/linusyang/MobileShadowSocks
File.open('./pac_file_ios.pac', 'w') { |io| io.write(pac_file(proxy_body, socks5: false, ios: true)) }


