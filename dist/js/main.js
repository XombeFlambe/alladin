(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Drawer = require('./views/drawer.js');
var Drawer = require('./views/subDrawer.js');
//var Chest = require('./views/chest.js');
//var Menu = require('./views/menu.js');
//var MobileNav = require('./views/mobileNav.js');
var Modal = require('./views/modal.js');
var Accordion = require('./views/accordion.js');
var Dropdown = require('./views/dropdown.js');
var Tip = require('./views/tip.js');
var Topside = require('./views/topside.js');
//var EaseScroll = require('./views/easeScroll.js');
//var Tree = require('./views/tree.js');
var StickyHeader = require('./views/stickyHeader.js');
var StickyController = require('./views/stickyController.js');
var Close = require('./views/close.js');
var Table = require('./views/table.js');
var TableDrawer = require('./views/tableDrawer.js');
var Tabs = require('./views/tabs.js');
//var Select = require('./views/select.js');
var Sort = require('./views/sort.js');
var Toggle = require('./views/toggle.js');
},{"./views/accordion.js":2,"./views/close.js":3,"./views/drawer.js":4,"./views/dropdown.js":5,"./views/modal.js":6,"./views/sort.js":7,"./views/stickyController.js":8,"./views/stickyHeader.js":9,"./views/subDrawer.js":10,"./views/table.js":11,"./views/tableDrawer.js":12,"./views/tabs.js":13,"./views/tip.js":14,"./views/toggle.js":15,"./views/topside.js":16}],2:[function(require,module,exports){
/* Accordion Module ***************************************************************************/
$(document).ready(Accordion = function() {
	var accordion = '.js-accordion';
	var item = '.js-accordion-item';
	var trigger = '.js-accordion-trigger';
	var content = '.js-accordion-content';
	var contentActive = '.js-accordion-content.active';
	var icon = 'i';
	var duration = 300;

	// Styles accordion item if you choose to start with an open accordion on load //
	$(accordion).find(contentActive).parent(item).find(trigger).addClass('active');
	$(accordion).find(contentActive).css("display", "block");

	// Click function logic //
	$(accordion).find(item).find(trigger).click(function(event) {

		$(accordion).find(contentActive).slideUp(duration);
		$(trigger).removeClass('active');

		if ($(this).next(content).hasClass('active')) {
			$(content).removeClass('active');
			$(this).removeClass('active');
		} else {
			$(content).removeClass('active');
			$(this).next(content).slideDown(duration);
			$(this).next(content).addClass('active');
			$(this).addClass('active');
		}
		
	});
});

module.exports = Accordion;

},{}],3:[function(require,module,exports){
/* Close Module ***************************************************************************/
$(document).ready(Close = function() {
	var close = '.js-close';
	var trigger = '.js-close-trigger';

	$(close).find(trigger).click(function() {
		$(this).parent(close).slideUp(200);
		return false;
	});
});

module.exports = Close;
},{}],4:[function(require,module,exports){
/* Drawer Module ***************************************************************************/
$(document).ready(Drawer = function() {
	var drawer = '.js-drawer';
	var trigger = '.js-drawer-trigger';
	var content = '.js-drawer-content';
	var icon = 'i';

	$(trigger).css("cursor", "pointer");

	$(drawer).find(trigger).click(function() {
		$(this).parents(drawer).find(content).slideToggle(200);
		$(this).find(icon).toggleClass('active');
		$(this).find('a').toggleClass('active');
		$(this).find('a').find('.hdg').toggleClass('hdg_gray');
		return false;
	});
});

module.exports = Drawer;
},{}],5:[function(require,module,exports){
/* Dropdown Module ***************************************************************************/
$(document).ready(Dropdown = function() {
	var dropdown = '.js-dropdown';
	var trigger = '.js-dropdown-trigger';
	var content = '.js-dropdown-content';
	var contentActive = '.js-dropdown-content.isActive';
	var icon = 'i';
	var duration = 100;

	$('body').click(function() {
		$(dropdown).find(content).removeClass('isActive').slideUp(duration);
	});

	$(dropdown).find(content).click(function(e) {
		e.stopPropagation();
	});

	$(dropdown).find(trigger).off('click.global.dropdown').on('click.global.dropdown', function(e) {
		e.stopPropagation();

		$(dropdown).find(contentActive).slideUp(duration);

		if ($(this).next(content).hasClass('isActive')) {
			$(content).removeClass('isActive');
		} else {
			$(content).removeClass('isActive');
			$(this).next(content).addClass('isActive').slideDown(duration);
		}

	});

});

module.exports = Dropdown;
},{}],6:[function(require,module,exports){
/* Modal Module ***************************************************************************/
$(document).ready(Modal = function() {
	var modalArc = '.js-modalArc';
	var trigger = '.js-modalTrigger';
	var modal = '.js-modal';
	var content = '.js-modal-content';
	var close = '.js-modal-close';
	var maskClose = '.js-modal-mask_close';
	var duration = 300;

	$(modalArc).find(trigger).click(function() {
		$(this).parents(modalArc).find(modal).fadeIn(duration);
	});
	$(modal).find(close).click(function() {
		$(this).parents(modal).fadeOut(duration);
	});
	$(maskClose).click(function() {
		$(this).parent(modal).fadeOut(duration);
	});
});

module.exports = Modal;
},{}],7:[function(require,module,exports){
/* Sort Module ***************************************************************************/
$(document).ready(Sort = function() {
	var sort = '.js-sort';
	var icon = 'i';

	$(sort).off('click.global.sort').on('click.global.sort', function() {
		$(this).find(icon).toggleClass('sortASC');
		return false;
	});

});

module.exports = Sort;
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
/* Sub Drawer Module ***************************************************************************/
$(document).ready(SubDrawer = function() {
	var drawer = '.js-subDrawer';
	var trigger = '.js-subDrawer-trigger';
	var content = '.js-subDrawer-content';
	var icon = 'i';

	$(trigger).css("cursor", "pointer");

	$(drawer).find(trigger).click(function() {
		$(this).parents(drawer).find(content).slideToggle(200);
		$(this).find(icon).toggleClass('active');
		$(this).find('a').toggleClass('active');
		$(this).find('a').find('.hdg').toggleClass('hdg_gray');
		return false;
	});
});

module.exports = SubDrawer;
},{}],11:[function(require,module,exports){
/* Table Header width control ***************************************************************************/
$(document).ready(Table = function() {
	var tableHead1 = '.js-table-head-1';
    var tableCol1 = '.js-table-col-1';
    var tableCol1Width = $(tableCol1).width();
    var tableHead2 = '.js-table-head-2';
    var tableCol2 = '.js-table-col-2';
    var tableCol2Width = $(tableCol2).width();
    var tableHead3 = '.js-table-head-3';
    var tableCol3 = '.js-table-col-3';
    var tableCol3Width = $(tableCol3).width();
    var tableHead4 = '.js-table-head-4';
    var tableCol4 = '.js-table-col-4';
    var tableCol4Width = $(tableCol4).width();
    var tableHead5 = '.js-table-head-5';
    var tableCol5 = '.js-table-col-5';
    var tableCol5Width = $(tableCol5).width();
    var tableHead6 = '.js-table-head-6';
    var tableCol6 = '.js-table-col-6';
    var tableCol6Width = $(tableCol6).width();
    var tableHead7 = '.js-table-head-7';
    var tableCol7 = '.js-table-col-7';
    var tableCol7Width = $(tableCol7).width();
    var tableHead8 = '.js-table-head-8';
    var tableCol8 = '.js-table-col-8';
    var tableCol8Width = $(tableCol8).width();

    $(tableHead1).width(tableCol1Width);
    $(tableHead2).width(tableCol2Width);
    $(tableHead3).width(tableCol3Width);
    $(tableHead4).width(tableCol4Width);
    $(tableHead5).width(tableCol5Width);
    $(tableHead6).width(tableCol6Width);
    $(tableHead7).width(tableCol7Width);
    $(tableHead8).width(tableCol8Width);

    $(window).resize(function() {
        $(tableHead1).width(tableCol1Width);
        $(tableHead2).width(tableCol2Width);
        $(tableHead3).width(tableCol3Width);
        $(tableHead4).width(tableCol4Width);
        $(tableHead5).width(tableCol5Width);
        $(tableHead6).width(tableCol6Width);
        $(tableHead7).width(tableCol7Width);
        $(tableHead8).width(tableCol8Width);
    });

});

module.exports = Table;
},{}],12:[function(require,module,exports){
/* Table Drawer Module ***************************************************************************/
$(document).ready(TableDrawer = function() {
	var drawer = '.js-table-drawer';
	var trigger = '.js-table-drawer-trigger';
	var content = '.js-table-drawer-content';
	var icon = 'i';

	$(trigger).css("cursor", "pointer");

	$(drawer).find(trigger).click(function() {
		$(this).parents(drawer).find(content).slideToggle(200);
		$(this).find(icon).toggleClass('active');
		return false;
	});
});

module.exports = TableDrawer;
},{}],13:[function(require,module,exports){
/* Tabs Module ***************************************************************************/
$(document).ready(Tabs = function() {
	var tab = '.js-tab';
	var trigger = '.js-tab-trigger';
	var duration = 300;

	$(tab).find(trigger).find('> li:eq(0)').addClass('active');
	
	$(tab).find(trigger).find('li a').click(function(g) {
		var tab = $(this).closest('.js-tab');
		var index = $(this).closest('li').index();
		var contentItem = '.js-tab-content-item';
		var contentItemActive = '.js-tab-content-item:eq(' + index + ')';

		$(tab).find(trigger).find('li').removeClass('active');
		$(this).closest('li').addClass('active');

		tab.find(contentItem).not(contentItemActive).slideUp(duration);
		tab.find(contentItemActive).slideDown(duration);

		g.preventDefault();

	});

});

module.exports = Tabs;
},{}],14:[function(require,module,exports){
/* Tip Module ***************************************************************************/
$(document).ready(Tip = function() {
	var tip = '.js-tip';
	var trigger = '.js-tip-trigger';
	var content = '.js-tip-content';
	var contentActive = '.js-tip-content.active';
	var spike = '.js-tip-spike';
	var duration = 200;

	$(tip).css("position", "relative");
	$(trigger).css("cursor", "pointer");
	$(tip).find(content).prepend('<div class="tip-spike js-tip-spike"></div>');

	$(tip).find(trigger).click(function() {

		$(tip).find(contentActive).slideUp(duration);
		$(trigger).removeClass('active');

		if ($(this).next(content).hasClass('active')) {
			$(content).removeClass('active');
		} else {
			$(content).removeClass('active');
			$(this).next(content).slideDown(duration);
			$(this).next(content).addClass('active');
		}

	});

});

module.exports = Tip;
},{}],15:[function(require,module,exports){
/* Toggle Module ***************************************************************************/
$(document).ready(Toggle = function() {
	var toggle = '.js-toggle';
	var trigger = '.js-toggle-trigger';
	var content = '.js-toggle-content';

	$(toggle).find(trigger).off('click.global.toggle').on('click.global.toggle', function() {
		$(this).parents(toggle).find(content).slideToggle(200);
	});

});

module.exports = Toggle;
},{}],16:[function(require,module,exports){
/* Back to Top Button ***************************************************************************/
$(document).ready( Topside = function() {
	var topside = '.js-topside';
    var offset = 250;
    var duration = 300;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $(topside).fadeIn(duration);
        } else {
            $(topside).fadeOut(duration);
        }
    });
 
    $(topside).off('click.global.topside').on('click.global.topside', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
});

module.exports = Topside;
},{}]},{},[1])