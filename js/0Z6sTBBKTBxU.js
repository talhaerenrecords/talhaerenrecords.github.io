$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".phone-navigation").show().removeClass('slide-out').addClass("slide-in")
        $(".main-logo").css('display', 'none');
        $(".menu-icon").css('display', 'none');
    })

    $(".nav-link-wrapper").click(function(){
        if($(".phone-navigation").css('display') == 'block') {
            $(".phone-navigation").removeClass('slide-in').addClass("slide-out").hide();
            $(".main-logo").css('display', 'block');
            $(".menu-icon").css('display', 'flex');
        }
    })

    $(".mobile-menu").click(function(){
        if($(".phone-navigation").css('display') == 'block') {
            $(".phone-navigation").removeClass('slide-in').addClass("slide-out").hide();
            $(".main-logo").css('display', 'block');
            $(".menu-icon").css('display', 'flex');
        }
    })
});