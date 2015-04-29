Modernizr.load({
    test: Modernizr.objectFit,
    yep : 'geo.js',
    nope: 'geo-polyfill.js'
});


$(window).on('scroll resize', function (e) {
    var scroll = $(window).scrollTop();

    var $header = $('#header'), $floating_photo = $('.floating_photo');
    var alpha = scroll / ($('#home').outerHeight() - 2 * $header.outerHeight());
    $header.toggleClass('opaque', alpha >= 0.5);
    $header.css('background', 'rgba(33, 150, 243,' + alpha + ')');
}).scroll();

$(document).ready(function () {
    $('.popup-link').magnificPopup({
        type: 'ajax',
        ajax:{
            cache: true
        },
        callbacks: {
            open: function () {
                var $clickedEl = $(this.currItem.el[0]);
                history.pushState(null, $clickedEl.attr('title') + " | " + $('title').text(),
                    window.location.href.match(/^[^\#\?]+/)[0] + '#' + $clickedEl.data('proj'));
            },
            close: function () {
                //if the url still contains the hash
                if (window.location.hash) {
                    //remove it!
                    history.pushState(null, $('title').text(),
                        window.location.href.match(/^[^\#\?]+/)[0]);
                }
            }
        },
        fixedContentPos: true,
        closeBtnInside: true
    });

    onChangeHash();
});

$(window).on('popstate', onChangeHash);

function onChangeHash() {
    $.magnificPopup.close();
    if (window.location.hash) {
        var hashContent = window.location.hash.replace('#', '');
        $('[data-proj="' + hashContent + '"]').click();
    }
}
