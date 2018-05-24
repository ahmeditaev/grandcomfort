$(document).ready(function () {
	// Функционал для адаптивной шапки сайта
    var trigger = $('.button--toggle'),
        menu = $('.nav-menu'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == false) {
            menu.removeClass('is-closed');
            menu.addClass('is-open');
            isClosed = true;
        } else {
            menu.removeClass('is-open');
            menu.addClass('is-closed');
            isClosed = false;
        }
    }

    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $(".slider-nav").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
});
var $gridTypeOne = $('.grid-type-1').masonry({
    itemSelector: '.grid-type-1__item',
    columnWidth: 1,
    horizontalOrder: true,
    fitWidth: true
});
$gridTypeOne.imagesLoaded().progress(function () {
    $gridTypeOne.masonry();
});

var $gridTypeTwo = $('.grid-type-2').masonry({
    itemSelector: '.grid-type-2__item',
    columnWidth: 376,
    horizontalOrder: true
});
$gridTypeTwo.imagesLoaded().progress(function () {
    $gridTypeTwo.masonry();
});

function initMap() {
    var grandComfort = {
        lat: 42.8600663, lng: 74.6761475
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: grandComfort
    });
    var marker1 = new google.maps.Marker({
        position: grandComfort,
        map: map
    });
}