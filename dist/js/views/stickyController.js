/* Sticky Header on load and resize ***************************************************************************/
$(document).ready(stickyController = function() {
	var controller = '.js-stickyController';
    var gap ='.js-stickyController-gap';
    var controllerHeight = $(controller).outerHeight();
    var header = '.js-stickyHeader';
    var headerHeight = $(header).outerHeight();
    var pageHeader = '.js-pageHeader';
    var offset = $(pageHeader).outerHeight();

    console.log(headerHeight);

    $(window).scroll(function() {
        if ($(this).scrollTop() >= offset) {
            $(controller).addClass('controller_fixed');
            $(controller).css('top', headerHeight + "px");
            $(gap).css('height', controllerHeight);
        } else {
            $(controller).removeClass('controller_fixed');
            $(gap).css('height', '0');
        }
    });
});

module.exports = stickyController;