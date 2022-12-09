$(function(){

    // AOS
    AOS.init();

    // HEADER FIXED
    headerFixed();
    $(window).scroll(function(e){ 
        headerFixed();
    });


    // MOBILE MENU
    $('body').on('click', '.js-mobile-menu', function(e) {
        e.preventDefault();
        $('body').toggleClass('mobile-menu-opened')
    })
    
    function headerFixed() {
        let currentScroll = $(window).scrollTop();
        if (currentScroll > 50) {
            $('body').addClass('is-header-fixed');
        } else {
            $('body').removeClass('is-header-fixed');
        } 
    }
})