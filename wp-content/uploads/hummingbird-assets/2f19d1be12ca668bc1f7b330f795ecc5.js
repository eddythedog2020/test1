/**handles:kouki-js**/
jQuery(document).ready(function(e){"use strict";function a(e){var a=imagesLoaded(e,function(){new Masonry(e,{itemSelector:".gallery-item",columnWidth:".gallery-item"})})}e(window).bind("scroll",function(){e(this).scrollTop()>10?e(".top-bar").removeClass("tb-large").addClass("tb-small"):e(".top-bar").removeClass("tb-small").addClass("tb-large")}),e(".primary-nav-trigger").on("click",function(){e(".menu-icon").toggleClass("is-clicked"),e("#menu").fadeToggle("fast")});var o=e(".js-masonry");o.imagesLoaded(function(){o.masonry({itemSelector:".js-item"})}),e(window).resize(function(){o.masonry()});var n=0;e(document.body).on("post-load",function(){n+=1;var a=e("#infinite-view-"+n+".js-item").css({opacity:0});o.imagesLoaded(function(){a.animate({opacity:1}),o.masonry("appended",a).masonry("reload")})});for(var t=document.querySelectorAll(".gallery"),i=0,r=t.length;i<r;i++){var s=t[i];a(s)}});