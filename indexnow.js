// Melder alle URL'er i sitemappet til IndexNow (Bing, Yandex, Seznam, Naver m.fl.).
//
// Google bruger ikke IndexNow - der er Search Console vejen. Men Bing og de
// andre crawler et nyt domaene langsomt, og IndexNow lader siden selv sige
// "disse sider findes". Noeglen ligger i roden som <noegle>.txt; uden den
// afviser IndexNow indsendelsen.
//
// Bings endpoint, ikke api.indexnow.org: den faelles svarede 403
// "SiteVerificationNotCompleted" lige efter, at noeglen kom op, mens Bing tog
// imod med det samme (27-09-2026). Bing deler indsendelsen med de andre.
//
// Koer efter et deploy, hvor der er kommet nye sider til:
//   node indexnow.js
var fs = require("fs");
var https = require("https");
var path = require("path");

var NOEGLE = "5477165fb45f19e30c3dd6c5b90ef5a8";
var VAERT = "gulplade.dk";

var sm = fs.readFileSync(path.join(__dirname, "sitemap.xml"), "utf8");
var urls = [];
sm.replace(/<loc>([^<]+)<\/loc>/g, function (_, u) { urls.push(u); });

var krop = JSON.stringify({
  host: VAERT,
  key: NOEGLE,
  keyLocation: "https://" + VAERT + "/" + NOEGLE + ".txt",
  urlList: urls
});

var req = https.request({
  hostname: "www.bing.com", path: "/indexnow", method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8",
             "Content-Length": Buffer.byteLength(krop) }
}, function (res) {
  var svar = "";
  res.on("data", function (d) { svar += d; });
  res.on("end", function () {
    // 200 = modtaget, 202 = modtaget, noeglen valideres senere.
    console.log("IndexNow: " + res.statusCode + " for " + urls.length + " URL'er " + svar);
    if (res.statusCode >= 300) process.exitCode = 1;
  });
});
req.on("error", function (e) { console.error(e.message); process.exitCode = 1; });
req.end(krop);
