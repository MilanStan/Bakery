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
                items: 3
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

    //set height on pancake-image div
    if ($(window).width() > 991) {
        setPanImageHeight();
    }
    $(window).resize(function () {
        if ($(window).width() > 991) {
            setPanImageHeight();
        }
    })
});

//set height of pancake-image equal to pancake-text
function setPanImageHeight() {
    var heightPan = $(".pancake-text").css("height");
    $(".pancake-image").css("height", heightPan);
}