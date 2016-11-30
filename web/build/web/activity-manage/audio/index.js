webpackJsonp(["web/activity-manage/audio/index"],[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){var e=$("#step2-form"),t=e.data("validator",t);t=e.validate({rules:{content:"required",minute:"required unsigned_integer",second:"second_range",media:"required"},messages:{content:"请输入简介",minute:{required:"请输入时长",unsigned_integer:"时长必须为非负整数"},second:{unsigned_integer:"时长必须为非负整数"},media:"请选择或者上传视频"}})}var r=n("6951aa140a8a4d030429"),d=a(r);jQuery.validator.addMethod("unsigned_integer",function(e,t){return this.optional(t)||/^([1-9]\d*|0)$/.test(e)},"时长必须为非负整数"),jQuery.validator.addMethod("second_range",function(e,t){return this.optional(t)||/^([0-9]|[012345][0-9]|59)$/.test(e)},"秒数只能在0-59之间"),i(),$(".js-length").blur(function(){var e=$("#step2-form").data("validator");if(e&&e.form()){var t=0|parseInt($("#minute").val()),n=0|parseInt($("#second").val());$("#length").val(60*t+n)}});var o=new d.default,u=function(e){if(e.length){var t=parseInt(e.length/60),n=Math.round(e.length%60);$("#minute").val(t),$("#second").val(n)}$("#ext_mediaSource").val(e.source),"self"==e.source?($("#ext_mediaId").val(e.id),$("#ext_mediaUri").val("")):($("#ext_mediaId").val(""),$("#ext_mediaUri").val(e.uri))};o.on("select",u)}]);