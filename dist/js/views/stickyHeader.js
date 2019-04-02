/* Sticky Header on load and resize ***************************************************************************/
$(document).ready(StickyHeader = function() {
    var header = '.js-stickyHeader';
    var gap ='.js-stickyHeader-gap';
    var anchor = '.js-stickyAnchor';
    var headerHeight = $(header).outerHeight();

    $(gap).height(headerHeight);
    $(anchor).css("position", "absolute").css("top", -headerHeight);

    $(window).resize(function() {
        var headerHeight = $(header).outerHeight();

        $(gap).height(headerHeight);
        $(anchor).css("top", -headerHeight);
    });

});

module.exports = StickyHeader;

/*$(document).ready(StickyHeader = function() {
	var header = '.js-stickyHeader';
    var headerHide = '.js-stickyHeader-hide';
    var nav = '.js-stickyHeader-nav';
    var error = '.js-stickyHeader-alert';
    var gap ='.js-stickyHeader-gap';
    var offset = 1;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            //$('body').addClass('bodyFixedHeader');
            //$(header).addClass('header_fixed');
            $(header).find(headerHide).hide();
            //$(nav).addClass('wrap_navFixed');
            $(error).addClass('alert_fixed');
            $(gap).css('height', '35px');
        } else {
			//$('body').removeClass('bodyFixedHeader');
            //$(header).removeClass('header_fixed');
            $(header).find(headerHide).show();
            //$(nav).removeClass('wrap_navFixed');
            $(error).removeClass('alert_fixed');
            $(gap).css('height', '0px');
        }
    });
});

module.exports = StickyHeader;*/