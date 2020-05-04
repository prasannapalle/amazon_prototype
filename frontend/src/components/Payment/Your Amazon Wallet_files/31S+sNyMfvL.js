P.register("cvfVersion",function(){return{version:"0.1.0.0-2020-04-17"}});
P.when("A","cvfFormDataGenerator","ready").register("cvf-account-switcher",function(b,k){function a(h,v){h.preventDefault();var a=k.retrieveFormData(h.target),c=a.inputData.serializeArray();c.push(r(h.target));b.ajax(window.location.protocol+"//"+window.location.host+a.requestPath,{method:"POST",params:c,success:v,error:l})}function r(h){h=c(h);var a=h.attr("name");a||(a=h.closest(".cvf-account-switcher-sign-out-link").attr("data-name"));var b=h.attr("value");b||(b=h.closest(".cvf-account-switcher-sign-out-link").attr("data-value"));
return{name:a,value:b}}function l(h,a,c){b.trigger(q.error,c)}function d(a){var b=/([^@\s]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9._-]+)/ig.exec(a);if(null!==b){a=b[1];a=c.trim(a);var f=a.length;if(1!==f){for(var g=a.charAt(0),d=0;d<f-2;d++)g+="*";a=g+=a.charAt(f-1)}a+="@";g=b[2];g=c.trim(g);f=g.length;g=g.charAt(0);for(d=0;d<f-1;d++)g+="*";return a+g+b[3]}b=c.trim(a);a=b.length;if(!(4>=a)){f="";for(g=0;g<a-4;g++)f+="*";b=f+b.substr(a-4,a-1)}return b}function m(){0===c(".cvf-account-switcher-check-mark:visible").length&&
(c(".cvf-account-switcher-check-mark-area").remove(),c(".cvf-account-switcher-profile-details").toggleClass("cvf-account-switcher-profile-details cvf-account-switcher-profile-details-after-account-removed"))}var c=b.$,q={success:"cvf:account_switcher:success",error:"cvf:account_switcher:error"};(function(){var a=c("#ap-account-switcher-container")[0],b=window.MutationObserver||window.WebKitMutationObserver;if(void 0!==a&&void 0!==b){var d=new b(function(a){for(var b=0;b<a.length;b++)if(null!==a[b].addedNodes){m();
d.disconnect();break}});d.observe(a,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}})();(function(){c(".cvf-account-switcher-sign-out-link").live("click",function(h){a(h,function(a){if(a.redirectUrl)window.location=a.redirectUrl,b.trigger("cvf:account_switcher","redirectOnSignOut");else if(a.succeeded){var f="."+c(h.target).attr("class").match(/cvf-account-switcher-account-group-\w+/g)[0];c(f+"-hide").hide();c(f+"-name").text(c("#cvf-account-switcher-sign-out-replace-text").text());c(f+
"-claim").text(d(c(f+"-claim").text()));c(f+"-image").replaceWith(c("<div />").append(c("#cvf-account-switcher-sign-out-replace-image").clone().removeClass("cvf-hidden")).html());c(f+"-button").removeClass("cvf-widget-btn-val cvf-widget-btn-verify-account-switcher");a=a.switchedAccountId;void 0!==a&&c(".cvf-account-switcher-account-group-"+a+"-check-mark").show();m()}else b.trigger(q.error,a)})})})()});
P.when("A","cvfVersion","cvfFormDataGenerator","ready").register("cvf",function(b,k,a){function r(h){function k(a){"string"===typeof e.options.widgetMetricsScope&&"function"===typeof window.uet&&window.uex("ld",e.options.widgetMetricsScope,{wb:1});e.options.spinnerTarget&&e.options.spinnerTarget.hide();a.hasOwnProperty("error")?b.trigger(p.error,a.error):a.redirectUrl?window.location=a.redirectUrl:a.redirect?(b.trigger(p.success,a.token,a.status,a.redirect),e.options.autoDestroy?e.destroy():(d(".cvf-widget-alert").hide(),
a.status?d(".cvf-widget-status-success").show():d(".cvf-widget-status-error").show(),w()),b.trigger("cvf:verification:complete",a.status),n.find(".cvf-widget-btn").unbind("click",f),n.find(".cvf-widget-btn-val").unbind("click",f),b.off(p.success),b.off(p.error)):(n.html(a.replace(/<form/g,"<div").replace(/<\/form/g,"</div")),r())}function f(c,f){c.preventDefault();d(".cvf-widget-alert").hide();e.options.spinnerTarget&&e.options.spinnerTarget.show();var h=a.retrieveFormData(c.target),g=h.inputData.serializeArray();
f&&g.push(a.getNameValue(c.target));b.ajax(t+h.requestPath,{method:"POST",params:g,success:k,error:x})}function g(a){13===a.keyCode&&f(a)}function r(){n.find(".cvf-widget-btn").click(function(a){f(a,!1)});n.find(".cvf-widget-btn-val").click(function(a){f(a,!0)});n.find('input[name="code"]').focus().keypress(g)}function l(a){return function(c,d,e){"timeout"!==d||3<=u?b.trigger(p.error,e):b.delay(a,10*u++)}}function x(a,c,d){e.options.spinnerTarget&&e.options.spinnerTarget.hide();b.trigger(p.error,
d)}function w(){d.each(n.find("input"),function(a,b){var c=d(b);c.attr("disabled","disabled");c.hasClass("a-input-text")?c.addClass("a-form-disabled"):c.hasClass("a-button-input")?c.closest(".a-button").addClass("a-button-disabled"):c.closest(".a-input-text-wrapper").length&&c.closest(".a-input-text-wrapper").addClass("a-form-disabled")});d.each(n.find("a"),function(a,b){var c=d(b);c.hasClass("cvf-widget-link-disable-target")&&c.addClass("cvf-link-disabled")})}var e=this;c++;var p={success:"cvf:"+
c+":success",error:"cvf:"+c+":error"};e.options={};d.extend(e.options,m,h);(function(a){if(1!==d(a.target).length)throw Error("The CVF widget requires a unique element.");if(!d.isFunction(a.onSuccess))throw Error("The CVF widget requires a success callback function.");if(!d.isFunction(a.onError))throw Error("The CVF widget requires an error callback function.");})(e.options);var t=e.options.server,n=d(e.options.target);b.on(p.success,e.options.onSuccess);b.on(p.error,e.options.onError);e.start=function(){if(0===
d.trim(e.options.requestToken).length)throw Error("The CVF widget requires a request token.");var a;a=e.options.requestToken;var c=e.options.requestArbToken;a=0===d.trim(c).length?t+"/ap/cvf/request.embed?requestToken="+a:t+"/ap/cvf/request.embed?arb="+c;"string"===typeof e.options.widgetMetricsScope&&"function"===typeof window.uet&&window.uet("bb",e.options.widgetMetricsScope,{wb:1});b.ajax(a,{method:"GET",params:q,success:k,error:l(e.start)})};e.destroy=function(){n.html("")};r();var u=0;e.options.autoStart&&
e.start()}function l(a){return new r(a)}var d=b.$,m={server:"",target:void 0,requestToken:void 0,requestArbToken:void 0,onSuccess:void 0,onError:void 0,spinnerTarget:void 0,autoStart:!0,autoDestroy:!0,widgetMetricsScope:void 0},c=0,q=[{name:"CVFVersion",value:k.version},{name:"AUIVersion",value:P.AUI_BUILD_DATE}];b.on("cvf:verification:request",function(a){var c=d("#"+a),f=c.data("token"),g=c.data("spinnerId"),g=d("#"+g);l({target:c,spinnerTarget:g,requestToken:f,onSuccess:function(c,d,f){b.trigger("cvf:verification:complete:"+
a,c,d,f)},onError:function(c){b.trigger("cvf:verification:error:"+a,c)},autoStart:!0,autoDestroy:!1})});return{create:l}});
P.when("A","cvf","ready").execute(function(b,k){var a=b.$;a(document).ready(function(){function b(a,c,d){window.location=d;console.log("Client Side: "+a)}function l(a){console.log(a)}var d=a(".cvf-widget-spinner"),m=a("#cvf-widget-content");if(1===m.length){var c=a('[name="requestToken"]').first().attr("value");k.create({target:m,spinnerTarget:d,requestToken:c,onSuccess:b,onError:l,autoStart:!1})}})});
P.when("A").execute(function(b){b.declarative("auth-popup","click",function(b){var a=b.data;b=b.$target.closest("a")[0];(a=window.open(b.href,b.target,a.windowOptions))&&a.focus()})});P.when("A","cvfFormDataGenerator","ready").execute(function(b,k){});
P.when("A","cvfFormDataGenerator","ready").execute(function(b,k){var a=b.$;a(".cvf-widget-btn-val").click(function(b){var l=a(b.target).closest(".cvf-widget-form");b=k.getNameValue(a(b.target));l.append('<input type="hidden" name="'+b.name+'" value="'+b.value+'">').submit()})});
P.when("A","ready").register("cvfFormDataGenerator",function(b){var k=b.$;return{retrieveFormData:function(a){a=k(a).closest(".cvf-widget-form");return{requestPath:a.data("use-only-form-action")?a.attr("action"):"/ap/cvf/"+a.attr("action")+".embed",inputData:a.find(".cvf-widget-input,.cvf-widget-hidden-fields,.cvf-widget-input :input"),form:a}},getNameValue:function(a){a=k(a);var b=a.attr("name");b||(b=a.closest(".cvf-widget-btn-val").attr("data-name"));var l=a.attr("value");l||(l=a.closest(".cvf-widget-btn-val").attr("data-value"));
return{name:b,value:l}}}});P.when("A","ready").register("codeResendTimer",function(b){function k(a,k,l){var d=(new Date).getTime(),m=setInterval(function(){var c=(new Date).getTime()-d,c=a-c;if(0>=c)clearInterval(m),b.$("#timer").html(l);else{var c=Math.floor(c/1E3),q=k.split(" +timeleft+ "),c=q[0].split('"').join("")+c+q[1].split('"').join("");b.$("#timer").html(c)}},100)}return{createTimer:function(a,b,l){return new k(a,b,l)}}});