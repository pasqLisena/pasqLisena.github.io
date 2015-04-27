$(document).ready(function(){
    $(window).on('scroll', function (e) {
        var scroll = $(window).scrollTop();
        var $header = $('#header');
        var alpha = scroll / ($('#home').outerHeight() - 2 * $header.outerHeight())
        $header.toggleClass('opaque', alpha >= 1);
        $header.css('background', 'rgba(54,54,54,' + alpha + ')');
    }).scroll();
});
