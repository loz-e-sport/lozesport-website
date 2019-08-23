$(function() {
    // $.scrollify({
    //     section: ".example-classname",
    //     sectionName: "section-name",
    //     interstitialSection: "",
    //     easing: "easeOutExpo",
    //     scrollSpeed: 1500,
    //     offset: 0,
    //     scrollbars: true,
    //     standardScrollElements: "",
    //     setHeights: false,
    //     overflowScroll: false,
    //     updateHash: true,
    //     touchScroll: false,
    //     before: function() {},
    //     after: function() {},
    //     afterResize: function() {},
    //     afterRender: function() {}
    // });

    $('.menu, .overlay').click(function() {
        $('.menu').toggleClass('clicked');

        $('#nav').toggleClass('show');

    });
});