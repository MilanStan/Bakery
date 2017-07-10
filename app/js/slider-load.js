$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });
    var owl = $('.owl-carousel');
    // Go to the next item
    $('#right-arrow-slider').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('#left-arrow-slider').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});