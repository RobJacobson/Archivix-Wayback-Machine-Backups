!function(a,t){"use strict";function e(a){var e=s++,n=a.next();t&&n.removeClass("no-animation"),a.attr("id","tab"+s+"-"+e).attr("aria-selected","false").attr("aria-expanded","false").attr("aria-controls","panel"+s+"-"+e).attr("role","tab"),n.attr("id","panel"+s+"-"+e).attr("aria-hidden","true").attr("aria-labelledby","tab"+s+"-"+e).attr("role","tabpanel")}function n(a){var e=a.next(),n=e.find(".gs-faq__answer__heading");a.toggleClass("gs-faq--expanded"),e.toggleClass("gs-faq--expanded"),n.attr("tabindex","-1").focus(),t&&e.slideToggle(200,function(){n.focus()}),e.hasClass("gs-faq--expanded")?(a.attr("aria-selected","true").attr("aria-expanded","true"),e.attr("aria-hidden","false")):(a.attr("aria-selected","false").attr("aria-expanded","false"),e.attr("aria-hidden","true"))}a("body").addClass("js");var r=a(".gs-faq__question"),s=0;a(".gs-faq").on("click",".gs-faq__question",function(){n(a(this))}),r.each(function(t,n){e(a(n))})}(jQuery,gs_faq_animation.js_animation);