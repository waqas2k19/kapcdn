var visibleSection = 1;
var levelArray = ['false', 'true', 'true', 'true', 'true'];
var leftSecSpeed = 0.999;
var middleSecSpeed = 2.5;
var rightSecSpeed = 3;
var bxSliderGallery = '';
var bxSliderGalleryThumb = '';
var bxSliderLatest = '';
var doit;
$(document).ready(function () {

    drawLines(2);
    drawLines(3);
    drawLines(4);
    /*'New car' detail tabs function*/

    $('.tabs-opener li a').on('click', function () {
        var tabIndex = $(this).attr('href');
        if (!$(this).parent().hasClass('active')) {
            $('.tabs-opener li').removeClass('active');
            $(this).parent().addClass('active');
            $(".tab-content section").removeClass('active');
            $(eval('"' + tabIndex + '"')).addClass('active');
            if ($(window).width() < 767) {
                var elmnt = document.getElementById(".tab-content section");
                var x = elmnt.scrollLeft;
                var y = elmnt.scrollTop;
            }
        }
        return false;
    });

    if ($('.filters').length > 0) {
        $(".landscape-view").click(function () {
            $(".portrait-view").removeClass("active");
            $(this).addClass("active");
            $(".product-wrapper").removeClass("portrait");
            $(".product-wrapper").parents(".cars-listing").removeClass("portrait-wrapper");
            $('.car-content').matchHeight({
                remove: true,
            });
        });
    }
    if ($('.filters').length > 0) {
        $(".portrait-view").click(function () {
            $(".landscape-view").removeClass("active");
            $(this).addClass("active");
            $(".product-wrapper").addClass("portrait");
            $(".product-wrapper").parents(".cars-listing").addClass("portrait-wrapper");
            

        });
    }
    if ($('.product-detail').length > 0) {
        $('.list-items').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
    if ($('.product-detail').length > 0) {
        $('.product-detail p').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
    if ($(window).width() > 769) {
        if ($('.product-wrapper.portrait .monthly-installment').length > 0) {
            $('.product-wrapper.portrait .monthly-installment ul').matchHeight({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        }
    }
    
    if ($('.product-detail header').length > 0) {
        $('.product-detail header h2').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
    if ($('.car-detail-wrapper').length > 0) {
        $('.car-img').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
    if ($('.car-img-wrapper').length > 0) {
        $('.car-img').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
    if ($('.product-detail').length > 0) {
        $('.promotion-usedCar').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
    /*'New car' bottom tabs function*/
    if ($('.new-car-config').length > 0) {
        $('.new-car-config ul.tabs-opener li a').click(function () {
            var tabIndex = $(this).attr('href');
            if (!$(this).parent().hasClass('active')) {
                $('.new-car-config ul.tabs-opener li').removeClass('active');
                $(this).parent().addClass('active');
                $(".new-car-config section").removeClass('active');
                $(eval('"' + tabIndex + '"')).addClass('active');
            } else {
                $('.new-car-config ul.tabs-opener li').removeClass('active');
                $(".new-car-config section").removeClass('active');
            }
            return false;
        });
    }
    /*'Refine Search' Tabs Function*/
    if ($('.refine-search').length > 0) {
        $('.refine-search .tabs-opener a.tab-link').click(function () {
            var tabIndex = $(this).attr('href');
            if (!$(this).parent().hasClass('active')) {
                $('.refine-search .tabs-opener a.tab-link').removeClass('active');
                $(this).addClass('active');
                $(".refine-search .tab-content .tab").removeClass('active');
                $(eval('"' + tabIndex + '"')).addClass('active');
            }
            return false;
        });
    }
    /*'car-search' Tabs Function*/
    if ($('.car-search-area').length > 0) {
        $('.car-search-area .tabs-opener a.tab-link').click(function () {
            var tabIndex = $(this).attr('href');
            if (!$(this).parent().hasClass('active')) {
                $('.car-search-area .tabs-opener a.tab-link').removeClass('active');
                $(this).addClass('active');
                $(".car-search-area .tab-content .tab").removeClass('active');
                $(eval('"' + tabIndex + '"')).addClass('active');
            }
            return false;
        });
    }
    /*bx slider*/
    if ($('.bxslider').length > 0) {
        $('.bxslider').bxSlider({
            slideMargin: 0,
            auto: true,
            responsive: true,
            useCSS: false
        });
    }

    //if($('.latest-vehicles-slider').length > 0)
    //{
    //	bxSliderLatest = $('.latest-vehicles-slider').bxSlider(getSliderOpts());
    //	$(window).resize(function() {
    //		clearTimeout(doit);
    //		doit = setTimeout(reloadSliders, 200);
    //	});
    //}

    if ($('nav#nav').length > 0 && $('.homeSlider').length > 0) {
        $('nav#nav .nav-holder > ul > li').on('mouseover', function () {
            if ($(this).find('.dropdown')) {
                var offset = $(window).scrollTop();
                if (offset <= '190') {
                    if ($(this).find('.dropdown').height() != null) {
                        $('html, body').stop().animate({ scrollTop: $(this).find('.dropdown').height() + 10 }, 400);
                    }
                }
            }
        });
    }

    var tableOffset = 1;
    var $navigation = $('#outercontainer');
    if ($('.home-slides').length > 0) {
        if ($(window).width() < 1024) {
            tableOffset = $('.intro').height();
            if ($(window).width() <= 768) {
                tableOffset = 0;
            }
        }
        else {
            tableOffset = ($(window).height() - 104);
        }
        $('.intro').height(tableOffset + "px");
    }

    $('.homeSlider').bxSlider({
        mode: 'fade',
        slideMargin: 0,
        auto: true,
        responsive: true,
        useCSS: false,
        pager: false
    });

    $('.go-bottom').on('click', function () {

        $('html, body').stop().animate({ scrollTop: ($('.map-screen').offset().top - 283) }, 1500);

    });

    $(window).bind("scroll", function () {
        var offset = $(this).scrollTop();
        //if (offset >= tableOffset) {
        if (offset >= 115) {
            $navigation.addClass('fixed');
            if ($(window).width() > 767) {
                $("#navholder").hide();
                $(".icon-mobile-menu").show();
            }
        }
        else if (offset < tableOffset) {
            $navigation.removeClass('fixed');
            if ($(window).width() > 767) {
                $("#navholder").show();
                $(".icon-mobile-menu").hide();
            }
        }
    });
    $(".icon-mobile-menu").click(function () {
        $("#navholder").toggle();
    });
    if ($(window).width() < 1024) {
        $(".icon-mobile-menu").hide();
    }
    $('.section_link').on('click', function (e) {
        e.preventDefault();
        var url = $(this).data('location');
        var pathArea = $(this).data('direction');
        var hash = url.substring(url.indexOf('#') + 1);
        var moveHeight = (hash == 'services_repairs' ? 200 : 230);

        $('.path').attr('stroke', '#B1B2B3');

        $('.' + pathArea + '_path').attr('stroke', 'red');
        $('.' + pathArea + '_path').each(function () {
            if ($(this).attr("marker-end") !== undefined) {
                $(this).attr('marker-end', 'url(#head2)');
            }
        });
        $('html, body').animate({ scrollTop: $('.' + hash).offset().top - moveHeight }, 3500);
        return false;
    });

    $(window).scroll(function () {

        var offsetTop = $(this).scrollTop();

        if (offsetTop < 1200) {
            leftSecSpeed = 0.999;
            middleSecSpeed = 2.5;
            rightSecSpeed = 3;
        }
        else if (offsetTop > 1200) {
            leftSecSpeed = 0.8;
            middleSecSpeed = 2.3;
            rightSecSpeed = 3;
        }
        else if (offsetTop > 1250) {
            leftSecSpeed = 0.8;
            middleSecSpeed = 2.1;
            rightSecSpeed = 3;
        }
        else if (offsetTop > 1300) {
            leftSecSpeed = 0.8;
            middleSecSpeed = 1.9;
            rightSecSpeed = 3;
        }
        else if (offsetTop > 1350) {
            leftSecSpeed = 0.8;
            middleSecSpeed = 1.7;
            rightSecSpeed = 3;
        }
        else if (offsetTop > 1400) {
            leftSecSpeed = 0.8;
            middleSecSpeed = 1.5;
            rightSecSpeed = 3;
        }

        for (var i = 1 ; i < levelArray.length; i++) {
            if (levelArray[i] == 'true') {
                drawLines(i);
                $('.level-' + i).css('visibility', 'visible');
            }
        };
    });
    //Branches area same height js
    if ($('.branches-area .branche').length > 0) {
        $('.branches-area .branche').matchHeight({
            byRow: true,
            property: 'min-height',
            target: null,
            remove: false
        });
    }
    if ($('.newCarfirstRow').length > 0) {
        $('.newCarfirstRow').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }
    if ($('.newCar-price-section').length > 0) {
        $('.newCar-price-section').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }
    if ($('.newCarDiscount').length > 0) {
        $('.newCarDiscount').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }
    
    
    if ($(window).width() > 767) {
        if ($('.alignleft').length > 0) {
            $('.kap-menu-area').matchHeight({
                byRow: true,
                property: 'min-height',
                target: null,
                remove: false
            });
        }
    }
    
    //Mobile Menu Swipe



    $('.swiper-slide .hasdropdown').on('click', function () {
        var x = $(this).next();
        //alert(x.text());
        var z = $('#dialog').find('div');
        z.empty();
        $('#dialog').find('div').append(x.html());
        $('#dialog').dialog();

        $('#dialog > div > ul > li > a').on('click', function () {
            var sibling = $(this).parent().next();
            if ((sibling).is(':hidden')) {
                $(sibling).slideDown();
                $(this).addClass('rotation');
            }
            else {
                $(sibling).slideUp();
                $(this).removeClass('rotation');
            }
            //$(sibling).slideToggle();
            /*if((sibling).is(':hidden')){
            $(link).removeClass('rotation');
            }*/
        });
    });
    $(".swiper-slide").click(function () {
        $(".main-menu").hide();
        $(".display-bar").removeClass("active");
    });
    //	$('.display-bar').on('click',function(){
    //			/*$('.display-bar').on('click',function(){
    //				$('.swiper-container').css('visibility','hidden');
    //			});*/
    //			if(isElementReallyHidden ('.swiper-container')){
    //				$('.swiper-container').css('opacity',1);
    //				$('.swiper-container').css('transition','opacity 0.5s linear');
    //				$('.swiper-container').css('visibility','visible');
    //				$('.swiper-container').css('height','auto');
    //			}
    //			else{
    //				$('.swiper-container').css('visibility','hidden');
    //				$('.swiper-container').css('opacity',0);
    //				$('.swiper-container').css('height','0');
    //				$('.swiper-container').css('transition','visibility 0s 0.5s, opacity 0.5s linear');
    //			}
    //	});
    $('.display-bar').on('click', function () {
        /*$('.display-bar').on('click',function(){
            $('.swiper-container').css('visibility','hidden');
        });*/
        $(".main-menu").slideToggle();
        //alert(0);
        $(this).toggleClass("active");
    });
    var owl = $("#owl-demo");

    if (owl.length > 0) {
        owl.owlCarousel({
            items: 10, //10 items above 1000px browser width
            itemsDesktop: [1000, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 3], //2 items between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            pagination: false,
            navigation: true,
            navigationText: ["", ""],
            slideSpeed: 800

        });
    }
    var owl = $("#owl-demo1");

    if (owl.length > 0) {
        owl.owlCarousel({
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            pagination: false,
            navigation: false,
            loop:true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut'

        });
    }

    var owl = $("#imageSlider");

    if (owl.length > 0) {
        owl.owlCarousel({
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            pagination: false,
            navigation: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut'

        });
    }

    var owl = $("#kapBrandSlider");

    if (owl.length > 0) {
        owl.owlCarousel({
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            pagination: true,
            navigation: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut'

        });
    }
    var owl = $("#owl-mobile-brand");

    if (owl.length > 0) {
        owl.owlCarousel({
            items: 10, //10 items above 1000px browser width
            itemsDesktop: [1000, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            pagination: false,
            navigation: true,
            navigationText: ["", ""],
            slideSpeed: 800
        });
    }
    $('.coll h3').on('click', function () {
        var width = $(window).width();
        if (width <= 768) {
            $(this).addClass('rotation');
            var sibling = $(this).next();
            if ((sibling).is(':hidden')) {
                $(sibling).slideDown();
                $(this).addClass('rotation');
            }
            else {
                $(sibling).slideUp();
                $(this).removeClass('rotation');
            }
        }
    });
    $('a.phone').on('click', function () {
        $('#address').dialog();
        $(".main-menu").hide();
        $(".display-bar").removeClass("active");
    });
    function isElementReallyHidden(el) {
        return $(el).is(":hidden") || $(el).css("visibility") == "hidden" || $(el).css('opacity') == 0;
    }
    //Mobile Menu Swipe End
    if ($('.share-area').length > 0) {
        $('.share-area .share').click(function () {
            if ($('.share-area').hasClass('open')) {
                $('.share-area').removeClass('open');
            } else {
                $('.share-area').addClass('open');
            }
        });
    }

    //Slide Up Service, Vehicle
    $(".kap-slider-tabs .tablinks").click(function () {
        $('html, body').animate({
            scrollTop: $('.kap_tab_container').offset().top - 0 //#DIV_ID is an example. Use the id of your destination on the page
        }, 'slow');
        $(this).children('.button-close').show();
    });
    $('.button-close').click(function () {
        $(this).hide();
        $(".tablinks").removeClass("active");
        $(".kap_tab_content").hide();
        $('html, body').animate({
            scrollTop: $('.kap_tab_container').offset().top - 200 //#DIV_ID is an example. Use the id of your destination on the page
        }, 'slow');
        return false;
    });

    // Cookie Policy
    if ($.cookie('IsCookiePolicyAccepted') == undefined) {
        $('.cookiePopUp').show();
    }
    $('.cookiePopUp').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $.cookie('IsCookiePolicyAccepted', 'true'); // set cookie on click
    });
});

function drawLines(Level) {
    $.each($("path.level-" + Level), function (i, val) {
        var line = val;
        drawLine($(this), line, Level);
    });
}

function drawLine(container, line, Level) {
    var length = 0;
    var pathLength = line.getTotalLength();
    var distanceFromTop = container.offset().top - $(window).scrollTop();
    var percentDone = 1 - (distanceFromTop / $(window).height());

    if (Level == 2) {
        length = (percentDone * pathLength) / rightSecSpeed;
    }
    else if (Level == 3) {
        length = (percentDone * pathLength) / middleSecSpeed;
    }
    else if (Level == 4) {
        length = (percentDone * pathLength) / leftSecSpeed;
    }
    else {
        length = percentDone * pathLength * 2 + 20;
    }
    line.style.strokeDasharray = [length, pathLength].join(' ');
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}

function adjustStyle() {
    var width = $(window).width();

    if (width > 583 && width < 943) {
        return 3;
    } else if (width <= 583) {
        return 2;
    } else if (width >= 942) {
        return 4;
    }
}

function getSliderOpts() {
    return {
        minSlides: 1,
        maxSlides: getMinSlides()['minSlides'],
        slideWidth: getMinSlides()['width'],
        auto: true,
        responsive: true
    }
}

function getMinSlides() {

    var width = $(window).width(),
	noSlides = '';
    var data = new Array();

    if (width <= 400) {
        noSlides = 1;
        slideWidth = 320;
    }
    else if (width <= 480) {
        noSlides = 2;
        slideWidth = 230;
    }
    else if (width <= 500) {
        noSlides = 2;
        slideWidth = 230;
    }
    else if (width <= 600) {
        noSlides = 2;
        slideWidth = 230;
    }
    else if (width <= 768) {
        noSlides = 3;
        slideWidth = 230;
    }
    else if (width <= 800) {
        noSlides = 3;
        slideWidth = 230;
    }
    else {
        noSlides = 4;
        slideWidth = 230;
    }

    data['minSlides'] = noSlides;
    data['width'] = slideWidth;



    return data;
}

if ($('.latest-vehicles used').is(':visible')) {
    function reloadSliders() {
        bxSliderLatest.reloadSlider(getSliderOpts());
    }
}

//sharing post function
function sharePost($media) {
    var url = window.location.href;
    var title = '';
    var txtToBeShared = $('.car-detail-new .banner-text h1');
    if (txtToBeShared.length > 0) {
        title = txtToBeShared.text();
    } else {
        title = $('.car-detail .banner-text h1').text();
    }

    if ($media == 'facebook') {
        return 'http://www.facebook.com/share.php?u=' + url + '&title=' + title;
    }
    else if ($media == 'twitter') {
        return 'http://twitter.com/home?status=' + title + ' ' + url;
    }
    else if ($media == 'google') {

        return 'https://plus.google.com/share?url=' + url;

    }
}

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    grabCursor: true,
    setWrapperSize: true
});
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("kap_tab_content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 

