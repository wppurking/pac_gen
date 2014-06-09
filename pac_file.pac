function FindProxyForURL(url, host) {
  var PROXY = "SOCKS 127.0.0.1:8181";
  var DEFAULT = "DIRECT";

  if(shExpMatch(url, "*googleusercontent.com/*")) return PROXY;
  if(shExpMatch(url, "*gstatic.com/*")) return PROXY;
  if(shExpMatch(url, "*ggpht.com/*")) return PROXY;
  if(shExpMatch(url, "*appspot.com/*")) return PROXY;
  if(shExpMatch(url, "*googleapis.com/*")) return PROXY;
  if(shExpMatch(url, "*googlevideo.com/*")) return PROXY;
  if(shExpMatch(url, "*googlecode.com/*")) return PROXY;
  if(shExpMatch(url, "*keyhole.com/*")) return PROXY;
  if(shExpMatch(url, "*gstatic.cn/*")) return PROXY;
  if(shExpMatch(url, "*chromium.org/*")) return PROXY;
  if(shExpMatch(url, "*google.cn/*")) return PROXY;
  if(shExpMatch(url, "*google.com.hk/*")) return PROXY;
  if(shExpMatch(url, "*android.com/*")) return PROXY;
  if(shExpMatch(url, "*googlesyndication.com/*")) return PROXY;
  if(shExpMatch(url, "*googlelabs.com/*")) return PROXY;
  if(shExpMatch(url, "*feedburner.com/*")) return PROXY;
  if(shExpMatch(url, "*g.co/*")) return PROXY;
  if(shExpMatch(url, "*gmail.com/*")) return PROXY;
  if(shExpMatch(url, "*goo.gl/*")) return PROXY;
  if(shExpMatch(url, "*googlemail.com/*")) return PROXY;
  if(shExpMatch(url, "*googleadservices.com/*")) return PROXY;
  if(shExpMatch(url, "*googlesource.com/*")) return PROXY;
  if(shExpMatch(url, "*google.com/*")) return PROXY;
  if(shExpMatch(url, "*google-analytics.com/*")) return PROXY;
  if(shExpMatch(url, "*adbclick.com/*")) return PROXY;
  if(shExpMatch(url, "*blogspot.com/*")) return PROXY;
  if(shExpMatch(url, "*ssl-images-amazon.com/*")) return PROXY;
  if(shExpMatch(url, "*i2o7.net/*")) return PROXY;
  if(shExpMatch(url, "*amazonaws.com/*")) return PROXY;
  if(shExpMatch(url, "*amazon-adsystem.commages-amazon.com/*")) return PROXY;
  if(shExpMatch(url, "*amazon.de/*")) return PROXY;
  if(shExpMatch(url, "*amazon.com/*")) return PROXY;
  if(shExpMatch(url, "*amazon.it/*")) return PROXY;
  if(shExpMatch(url, "*amazon.ca/*")) return PROXY;
  if(shExpMatch(url, "*amazon.es/*")) return PROXY;
  if(shExpMatch(url, "*amazon.fr/*")) return PROXY;
  if(shExpMatch(url, "*amazon.in/*")) return PROXY;
  if(shExpMatch(url, "*amazon.co.uk/*")) return PROXY;
  if(shExpMatch(url, "*amazon.co.jp/*")) return PROXY;
  if(shExpMatch(url, "*amazon.com.br/*")) return PROXY;
  if(shExpMatch(url, "*amazon.com.mx/*")) return PROXY;
  if(shExpMatch(url, "*amazon.com.au/*")) return PROXY;
  if(shExpMatch(url, "*amazonsupply.com/*")) return PROXY;
  if(shExpMatch(url, "*amazonlocal.com/*")) return PROXY;
  if(shExpMatch(url, "*ebay.de/*")) return PROXY;
  if(shExpMatch(url, "*ebay.at/*")) return PROXY;
  if(shExpMatch(url, "*ebay.nl/*")) return PROXY;
  if(shExpMatch(url, "*ebay.ca/*")) return PROXY;
  if(shExpMatch(url, "*ebay.it/*")) return PROXY;
  if(shExpMatch(url, "*ebay.ie/*")) return PROXY;
  if(shExpMatch(url, "*ebay.in/*")) return PROXY;
  if(shExpMatch(url, "*ebay.ph/*")) return PROXY;
  if(shExpMatch(url, "*ebay.pl/*")) return PROXY;
  if(shExpMatch(url, "*ebay.ch/*")) return PROXY;
  if(shExpMatch(url, "*ebay.es/*")) return PROXY;
  if(shExpMatch(url, "*ebay.fr/*")) return PROXY;
  if(shExpMatch(url, "*ebay.vn/*")) return PROXY;
  if(shExpMatch(url, "*ebay.com/*")) return PROXY;
  if(shExpMatch(url, "*ebay.com.my/*")) return PROXY;
  if(shExpMatch(url, "*ebay.com.tw/*")) return PROXY;
  if(shExpMatch(url, "*ebay.com.th/*")) return PROXY;
  if(shExpMatch(url, "*ebay.com.sg/*")) return PROXY;
  if(shExpMatch(url, "*ebay.com.au/*")) return PROXY;
  if(shExpMatch(url, "*ebay.co.uk/*")) return PROXY;
  if(shExpMatch(url, "*gmarket.co.kr/*")) return PROXY;
  if(shExpMatch(url, "*tradera.com/*")) return PROXY;
  if(shExpMatch(url, "*gittigidiyor.com/*")) return PROXY;
  if(shExpMatch(url, "*ebayimg.com/*")) return PROXY;
  if(shExpMatch(url, "*ebaystatic.com/*")) return PROXY;
  if(shExpMatch(url, "*ebayrtm.com/*")) return PROXY;
  if(shExpMatch(url, "*facebook.com/*")) return PROXY;
  if(shExpMatch(url, "*akamaihd.net/*")) return PROXY;
  if(shExpMatch(url, "*fb.me/*")) return PROXY;
  if(shExpMatch(url, "*youtube.com/*")) return PROXY;
  if(shExpMatch(url, "*ytimg.com/*")) return PROXY;
  if(shExpMatch(url, "*vimeo.com/*")) return PROXY;
  if(shExpMatch(url, "*vimeocdn.com/*")) return PROXY;
  if(shExpMatch(url, "*twitter.com/*")) return PROXY;
  if(shExpMatch(url, "*twimg.com/*")) return PROXY;
  if(shExpMatch(url, "*t.co/*")) return PROXY;


  return DEFAULT;
}