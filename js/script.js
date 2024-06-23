$(function(){
    /*
    $("nav > ul > li").mouseenter(function(){
        $(".sub").stop().slideDown();
    });
    $("nav > ul > li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    */
    //console.log("스크립트 시작");

    // 초기 팝업
    $("#popup_n1").show();

    // 슬라이드
    function slide(){
        $(".slide ul").animate({top:"-500px"},1000, function(){
            $(".slide ul").append($(".slide ul li").first());
            $(".slide ul").css({top:0});
        });
    }

    setInterval(slide, 5000);
    
    // 탭메뉴
    $(".tabmenu > li").click(function(){
        $(".popup").hide();

        $(".tabmenu > li").removeClass("on");
        $(this).addClass("on");

        var idx = $(this).index();
        //console.log("idx = "+idx)

        $(".tabcon").hide();
        $(".tabcon").eq(idx).show();

        return false;

    });

    // 팝업1
    $(".pp1").click(function(){
        $(".popup").hide();
        $("#popup_n1").show();
        return false;
    });

    // 팝업2
    $(".pp2").click(function(){
        $(".popup").hide();
        $("#popup_n2").show();
        return false;
    });

    // 팝업3
    $(".pp3").click(function(){
        $(".popup").hide();
        $("#popup_n3").show();
        return false;
    });

    // 팝업4
    $(".pp4").click(function(){
        $(".popup").hide();
        $("#popup_n4").show();
        return false;
    });

    // 갤러리1
    $(".gal1").click(function(){
        $(".popup").hide();
        $("#popup_n1").show();
        return false;
    });

    // 갤러리2
    $(".gal2").click(function(){
        $(".popup").hide();
        $("#popup_g2").show();
        return false;
    });

    // 갤러리3
    $(".gal3").click(function(){
        $(".popup").hide();
        $("#popup_g3").show();
        return false;
    });

    // 로고
    $("#logo").click(function(){
        //$(".popup").hide();
        //$("#popup_n1").show();
        window.location.href = "https://ezenps.netlify.app";
        
        return false;
    });

    $(".close").click(function(){
        $(".popup").hide();
        return false;
    });
    
});

// 갤러리
function fn_gall(){
    var idx = $(this).index();
    console.log("idx = "+idx)
    //$(".popup").hide();
    //$("#popup4").show();
    return false;
}


    