webpackJsonp(["app/js/task/preview/index"],{"584608d4ce1895020bac":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buyBtn=void 0;var a=n("4dd0dc4a22e4189b3c4e"),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.buyBtn=function(e){e.on("click",function(e){$.post($(e.currentTarget).data("url"),function(e){"object"===(void 0===e?"undefined":(0,o.default)(e))?window.location.href=e.url:$("#modal").modal("show").html(e)})})}},c6f4bde86e6859a99a01:function(e,t,n){"use strict";(0,n("584608d4ce1895020bac").buyBtn)($(".js-task-preview-buy-btn")),$("#modal").on("hidden.bs.modal",function(){$("#viewerIframe").attr("src","")}),$("#js-buy-btn").on("click",function(){$("#modal").modal("hide")}),function(){var e=$("#modal-event-report"),t=e.data();$.post(e.data("url"),t)}()}},["c6f4bde86e6859a99a01"]);