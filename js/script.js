$(document).ready(function () {
    $(window).on('scroll resize', function (e) {
        var scroll = $(window).scrollTop();

        var $header = $('#header'), $floating_photo = $('.floating_photo');
        var alpha = scroll / ($('#home').outerHeight() - 2 * $header.outerHeight());
        $header.toggleClass('opaque', alpha >= 0.5);
        $header.css('background', 'rgba(33, 150, 243,' + alpha + ')');
    }).scroll();
});
