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
        callbacks: {
            open: function () {
                var $clickedEl = $(this.currItem.el[0]);
                history.pushState(null, $clickedEl.attr('title') + " | " + $('title').text(),
                    window.location.href.match(/^[^\#\?]+/)[0] + '#' + $clickedEl.data('proj'));
            },
            close: function () {
                history.pushState(null, $('title').text(),
                    window.location.href.match(/^[^\#\?]+/)[0]);
            }
        },
        fixedContentPos: true,
        closeBtnInside: true
    });

    if (window.location.hash) {
        var hashContent = window.location.hash.replace('#', '');
        $('[data-proj="' + hashContent + '"]').click();
    }
});
