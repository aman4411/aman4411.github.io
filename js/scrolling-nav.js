//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).on('load', function() {
    if($(window).width() < 753) {
        console.log("resizing to mobile configs");
        $('nav').addClass('navCollapseColor');
    }else{   
        $('nav').removeClass('navCollapseColor');
    }
})

$(window).on('resize', function() {
    if($(window).width() < 753) {
        $('nav').addClass('navCollapseColor');
    }else{   
        $('nav').removeClass('navCollapseColor');
    }
})
