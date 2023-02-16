jQuery(window).on('scroll', function () {
    if (600 < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('change-color');
    } else {
        jQuery('.header').removeClass('change-color');
    }
});
jQuery(window).on('scroll', function () {
    if (600 < jQuery(this).scrollTop()) {
        jQuery('.header .nav-list li a').addClass('change-color');
    } else {
        jQuery('.header .nav-list li a').removeClass('change-color');
    }
});
jQuery(window).on('scroll', function () {
    if (600 < jQuery(this).scrollTop()) {
        jQuery('.header h1 .logo01,.header h1 .logo02').addClass('change');
    } else {
        jQuery('.header h1 .logo01,.header h1 .logo02').removeClass('change');
    }
});
    
$(function() {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 580, // 399px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '8%',
        },
      },
    ],
  });
    
//scroll
  $(".scroll").on("click",function(event){
    event.preventDefault();
    const target_element = $(this).attr("href") === "#" ? "html,body" : $(this).attr("href") ;
    let target_scroll = $(target_element).offset().top;
    if($(".sp").is(":visible")){
      target_scroll = target_scroll - 60;
    }else if($(".tb").is(":visible")){
      target_scroll = target_scroll - 80;
    }else{
      target_scroll = target_scroll - 50;
    }
    $("html,body").animate({scrollTop:target_scroll},350,function(){
      return false;
    });
  });
    
});
    
$(function() {
  var ua = window.navigator.userAgent.toLowerCase(),par=1;
  if(ua.indexOf("windows nt") !== -1) {
    if(ua.indexOf("edge") !== -1 || ua.indexOf("edga") !== -1 || ua.indexOf("edgios") !== -1) {
    }
    par=30;
    }else{
      if(ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
        par = 7;} else if(ua.indexOf('edge') != -1) {
          par = 14;} else if(ua.indexOf('chrome') != -1) {
          } else if(ua.indexOf('safari') != -1) {  //safari
} else if(ua.indexOf('firefox') != -1) {
 par = 7;} }; var c="current",ck="click",$_s = $(".scroll"),$_mbn = $(".menu-button"),$_gnv = $(".global-navi"),$_acb = $(".ac-button"),$_hb = $("html,body"),$_slis = $(".slides-inner .slide"),$_sli = $(".slides-inner"),$_tabt= $(".tab-target"),$_tabtr= $(".tabs a"),$_sl=$_sli.find(".slide"),$_t=$(".thumb"),$_n=$(".next"),$_p=$(".prev"),$_w=$(window),$_jf=$(".js-fade-obj"),$_bmacb=$("#bmw .lineup-tab-buttons a"),$_bmacc=$("#bmw .lineup-tab-content"),$_cp=$(".cp"),$_gc=$(".global-navi .close"),$_coslid=$(".all-wrap.detail .our-slide-inner"),$_coslia=$(".archive .our-slide-inner");$_bmacb.on(ck,function(e){ e.preventDefault(); var $t =$(this),_t = $t.attr("href"),_tt=$(_t);$_bmacb.removeClass(c);$t.addClass(c);$_bmacc.removeAttr("style").removeClass(c);_tt.slideDown(500);});if($_coslid.length){$_coslid.slick({centerMode: true,draggable:false,touch:false,swipe:false,variableWidth:true,prevArrow:'<div class="prev arrow"></div>',nextArrow:'<div class="next arrow"></div>',autoplay:true,responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        variableWidth:false,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: true
      }
    }]})};if($_coslia.length){$_coslia.slick({draggable:false,touch:false,swipe:false,variableWidth:true,prevArrow:'<div class="prev arrow"></div>',nextArrow:'<div class="next arrow"></div>',autoplay:true,responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        variableWidth:false,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: true
      }
    }]})};$_s.on("click",function(e){ e.preventDefault();  var _t = $(this).data("target"); var _th  =$(_t).offset().top;
  $_hb.animate({scrollTop:_th},500);});$_mbn.on("click",function(e){e.preventDefault();
    $_gnv.stop(true,true).fadeToggle(700,"easeInOutCubic").toggleClass("on");
  });$_acb.on("click",function(){
    var _t = $(this).data("target");
    $(_t).toggleClass("on").stop(true,true).slideToggle();
    $(this).toggleClass("on");
  });var _I,_fl=false,_l=$_sl.length,_c=0,_t=function(n){
    $_t.removeClass("current").eq(n).addClass("current");
  },_s = function(n){clearInterval(_I);
    if(_fl) return;_fl=true;if(!n&&n!==0) n = _c+1>_l ? 1 : _c+1;if(n >= _l){
      $_sli.css("margin-left",-(_l-1)*100+"vw");
      n = 0;
    }else if(n == -1){
      n = _l-1;
      $_sli.css("margin-left",-(_l*2)*100+"vw");
    }else{
    } $_sli.animate({"margin-left":-(n+_l)*100+"vw"},700,'easeOutExpo');$_sl.removeClass("on").eq(n).addClass("on");
    _c=n;_t(n);setTimeout(function(){_fl=false;_I=setInterval(function(){if(_fl)return;_s();},5200);},800);};
  var _q = $_slis.clone().clone(),_q2 = $_slis.clone().clone();;$_sli.append(_q.clone());$_sli.prepend(_q.clone());
  _I=setInterval(function(){if(_fl)return;_s();},5200);$_t.on("click",function(){
    if(_fl)return;var i = $_t.index(this);_s(i);
  });$_tabtr.on("click",function(e){e.preventDefault();var t = $(this).data("target");$_tabt.removeClass("current");$(t).addClass("current");$_tabtr.removeClass("current");$(this).addClass("current");});$_p.on("click",function(e){ e.preventDefault(); if(_fl)return;_s(_c-1>=-1? _c-1: _l-1); });$_n.on("click",function(e){  e.preventDefault(); if(_fl)return;_s(_c+1>_l?0:_c+1); });$_w.on("scroll load",function(){ var _s=$_w.scrollTop(),_h=$_w.height();$_cp.each(function(){ if(_s+_h > $(this).offset().top){ $(this).addClass("ac"); } });$_jf.each(function(){ if(_s+_h > $(this).offset().top){ $(this).addClass("on");}});});$_gc.on("click",function(){
    $_gnv.stop(true,true).fadeOut(500).removeClass("on");
  }); var $sub = $(".sub-scroll-box"),$spb = $(".sp-box"); $("#about .history-inner").mousewheel( function(event){
    if( $spb.is(":visible") ) return;
      var v = $sub.css("left").replace("px","")*1;
      var cw = $sub.innerWidth();
      var ww = $(window).width();
      var p = cw - ww + v;
      var l = event.deltaY*par+v;
      var flg = false;
      if( v + event.deltaY*par > 0) { l =0; flg = true; }
    if((p - event.deltaY*par < 0 || p <= 0) && event.deltaY < 0 ){ l = -(cw - ww); flg = true; }
      $sub.css("left",l+"px");
      if(!flg) event.preventDefault(); });
});


$(function() {

//menu
  $(".menu").on("click",function(e){
    e.preventDefault();
    $(this).toggleClass("on");
    $(".globalnavi-base").stop(true,true).fadeToggle(700);
  });

});

$(function(){
    $("#video-btn").click(function (){
        if($('#video')[0].paused){
          $('#video')[0].play();
          $(this).addClass('current');
        }else{
          $('#video')[0].pause();
          $(this).removeClass('current');
        }
    });
    $("#video-btn02").click(function (){
        if($('#video02')[0].paused){
          $('#video02')[0].play();
          $(this).addClass('current');
        }else{
          $('#video02')[0].pause();
          $(this).removeClass('current');
        }
    });
    $("#video-btn03").click(function (){
        if($('#video03')[0].paused){
          $('#video03')[0].play();
          $(this).addClass('current');
        }else{
          $('#video03')[0].pause();
          $(this).removeClass('current');
        }
    });
    $("#video-btn04").click(function (){
        if($('#video04')[0].paused){
          $('#video04')[0].play();
          $(this).addClass('current');
        }else{
          $('#video04')[0].pause();
          $(this).removeClass('current');
        }
    });
    $("#video-btn05").click(function (){
        if($('#video05')[0].paused){
          $('#video05')[0].play();
          $(this).addClass('current');
        }else{
          $('#video05')[0].pause();
          $(this).removeClass('current');
        }
    });
});

//$(function(){
//if($("#showroom").length ){
//    var d_current = 0;
//    var d_deley = 3500;
//    var d_slideId,d_slideId02;
//    var d_slide_locked = false;
//    var d_slide = function(num){
//      if(d_slide_locked) return;
//      d_slide_locked = true;
//      clearTimeout(d_slideId);
//      clearTimeout(d_slideId02);
//      num = num ? num : d_current+1;
//      num = num >= $(".slides-list li").length ? 0 : num;
//      $(".slides-list li").removeClass("current");
//      $(".slides-list li").eq(num).addClass("current");
//      $(".thumbnails li").removeClass("current");
//      $(".thumbnails li").eq(num).addClass("current");
//      d_slideId02 = setTimeout(
//        function(){
//          d_current = num;
//          d_slide_locked = false;
//          d_slideId = setTimeout(d_slide,d_deley);
//        },
//        1000
//      );
//    };
//    $(".thumbnails li").on("click",function(){
//      if(d_slide_locked) return;
//      clearTimeout(d_slideId);
//      clearTimeout(d_slideId02);
//      var index = $(".thumbnails li").index(this);
//      d_slide(index);
//    });
//    d_slideId = setTimeout(d_slide,d_deley);
//  }
//});
//
//$(function(){
//if($("#showroom").length ){
//    var d_current = 0;
//    var d_deley = 3500;
//    var d_slideId,d_slideId02;
//    var d_slide_locked = false;
//    var d_slide = function(num){
//      if(d_slide_locked) return;
//      d_slide_locked = true;
//      clearTimeout(d_slideId);
//      clearTimeout(d_slideId02);
//      num = num ? num : d_current+1;
//      num = num >= $(".slides-list-sp li").length ? 0 : num;
//      $(".slides-list-sp li").removeClass("current");
//      $(".slides-list-sp li").eq(num).addClass("current");
//      $(".thumbnails-sp li").removeClass("current");
//      $(".thumbnails-sp li").eq(num).addClass("current");
//      d_slideId02 = setTimeout(
//        function(){
//          d_current = num;
//          d_slide_locked = false;
//          d_slideId = setTimeout(d_slide,d_deley);
//        },
//        1000
//      );
//    };
//    $(".thumbnails-sp li").on("click",function(){
//      if(d_slide_locked) return;
//      clearTimeout(d_slideId);
//      clearTimeout(d_slideId02);
//      var index = $(".thumbnails-sp li").index(this);
//      d_slide(index);
//    });
//    d_slideId = setTimeout(d_slide,d_deley);
//  }
//});

//list01
$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list.list01 li").length ? 0 : num;
      $(".slides-list.list01 li").removeClass("current");
      $(".slides-list.list01 li").eq(num).addClass("current");
      $(".thumbnails.list01 li").removeClass("current");
      $(".thumbnails.list01 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails.list01 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails.list01 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list-sp.list01 li").length ? 0 : num;
      $(".slides-list-sp.list01 li").removeClass("current");
      $(".slides-list-sp.list01 li").eq(num).addClass("current");
      $(".thumbnails-sp.list01 li").removeClass("current");
      $(".thumbnails-sp.list01 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails-sp.list01 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails-sp.list01 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

//list02
$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list.list02 li").length ? 0 : num;
      $(".slides-list.list02 li").removeClass("current");
      $(".slides-list.list02 li").eq(num).addClass("current");
      $(".thumbnails.list02 li").removeClass("current");
      $(".thumbnails.list02 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails.list02 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails.list02 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list-sp.list02 li").length ? 0 : num;
      $(".slides-list-sp.list02 li").removeClass("current");
      $(".slides-list-sp.list02 li").eq(num).addClass("current");
      $(".thumbnails-sp.list02 li").removeClass("current");
      $(".thumbnails-sp.list02 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails-sp.list02 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails-sp.list02 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});
//list03
$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list.list03 li").length ? 0 : num;
      $(".slides-list.list03 li").removeClass("current");
      $(".slides-list.list03 li").eq(num).addClass("current");
      $(".thumbnails.list03 li").removeClass("current");
      $(".thumbnails.list03 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails.list03 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails.list03 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list-sp.list03 li").length ? 0 : num;
      $(".slides-list-sp.list03 li").removeClass("current");
      $(".slides-list-sp.list03 li").eq(num).addClass("current");
      $(".thumbnails-sp.list03 li").removeClass("current");
      $(".thumbnails-sp.list03 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails-sp.list03 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails-sp.list03 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});
//list04
$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list.list04 li").length ? 0 : num;
      $(".slides-list.list04 li").removeClass("current");
      $(".slides-list.list04 li").eq(num).addClass("current");
      $(".thumbnails.list04 li").removeClass("current");
      $(".thumbnails.list04 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails.list04 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails.list04 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list-sp.list04 li").length ? 0 : num;
      $(".slides-list-sp.list04 li").removeClass("current");
      $(".slides-list-sp.list04 li").eq(num).addClass("current");
      $(".thumbnails-sp.list04 li").removeClass("current");
      $(".thumbnails-sp.list04 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails-sp.list04 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails-sp.list04 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});
//list04
$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list.list05 li").length ? 0 : num;
      $(".slides-list.list05 li").removeClass("current");
      $(".slides-list.list05 li").eq(num).addClass("current");
      $(".thumbnails.list05 li").removeClass("current");
      $(".thumbnails.list05 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails.list05 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails.list05 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list-sp.list05 li").length ? 0 : num;
      $(".slides-list-sp.list05 li").removeClass("current");
      $(".slides-list-sp.list05 li").eq(num).addClass("current");
      $(".thumbnails-sp.list05 li").removeClass("current");
      $(".thumbnails-sp.list05 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails-sp.list05 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails-sp.list05 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});
//list05
$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list.list06 li").length ? 0 : num;
      $(".slides-list.list06 li").removeClass("current");
      $(".slides-list.list06 li").eq(num).addClass("current");
      $(".thumbnails.list06 li").removeClass("current");
      $(".thumbnails.list06 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails.list06 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails.list06 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list-sp.list06 li").length ? 0 : num;
      $(".slides-list-sp.list06 li").removeClass("current");
      $(".slides-list-sp.list06 li").eq(num).addClass("current");
      $(".thumbnails-sp.list06 li").removeClass("current");
      $(".thumbnails-sp.list06 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails-sp.list06 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails-sp.list06 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});
//list06
$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list.list07 li").length ? 0 : num;
      $(".slides-list.list07 li").removeClass("current");
      $(".slides-list.list07 li").eq(num).addClass("current");
      $(".thumbnails.list07 li").removeClass("current");
      $(".thumbnails.list07 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails.list07 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails.list07 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});

$(function(){
if($("#showroom").length ){
    var d_current = 0;
    var d_deley = 3500;
    var d_slideId,d_slideId02;
    var d_slide_locked = false;
    var d_slide = function(num){
      if(d_slide_locked) return;
      d_slide_locked = true;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      num = num ? num : d_current+1;
      num = num >= $(".slides-list-sp.list07 li").length ? 0 : num;
      $(".slides-list-sp.list07 li").removeClass("current");
      $(".slides-list-sp.list07 li").eq(num).addClass("current");
      $(".thumbnails-sp.list07 li").removeClass("current");
      $(".thumbnails-sp.list07 li").eq(num).addClass("current");
      d_slideId02 = setTimeout(
        function(){
          d_current = num;
          d_slide_locked = false;
          d_slideId = setTimeout(d_slide,d_deley);
        },
        1000
      );
    };
    $(".thumbnails-sp.list07 li").on("click",function(){
      if(d_slide_locked) return;
      clearTimeout(d_slideId);
      clearTimeout(d_slideId02);
      var index = $(".thumbnails-sp.list07 li").index(this);
      d_slide(index);
    });
    d_slideId = setTimeout(d_slide,d_deley);
  }
});
//list05