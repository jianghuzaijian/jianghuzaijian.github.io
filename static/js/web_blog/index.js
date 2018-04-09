// 我的清单
function Wodeqingdan() {
  this.layer = $(".m-layer");
  this.init();
}

Wodeqingdan.prototype.init = function() {
  var a = this;
  $("#lastYear").text(new Date().getFullYear());
  this.eventBind();
};
Wodeqingdan.prototype.eventBind = function() {
  this.blogEventBind();
  this.layerEventBind();
  this.writeEventBind();
};
Wodeqingdan.prototype.blogEventBind = function() {
  var a = 0;
  $(".blog-button")
    .off("mouseenter")
    .on("mouseenter", function(b) {
      $(".blog-qr").show();
      if (a) {
        clearTimeout(a);
      }
    });
  $(".blog-button")
    .off("mouseleave")
    .on("mouseleave", function(b) {
      a = setTimeout(function() {
        $(".blog-qr").hide();
      }, 200);
    });
  $(".blog-qr")
    .off("mouseenter")
    .on("mouseenter", function(b) {
      sendLog("w1-1", ["official_website", "download_app", "wapindex"]);
      if (a) {
        clearTimeout(a);
      }
    });
};
Wodeqingdan.prototype.writeEventBind = function() {
  var that = this;
  $(".write-button")
    .off("click")
    .on("click", function() {
      that.layer.find("h5").text("我的清单");
      that.layer.fadeIn(300);
    });
};
Wodeqingdan.prototype.layerEventBind = function(b) {
  var that = this;
  this.layer.off("click").on("click", function(e) {
    var d = $(e.target);
    if (d.hasClass("close")) {
      that.layer.fadeOut(300);
    }
  });
};

$(function() {
  new Wodeqingdan();
});
