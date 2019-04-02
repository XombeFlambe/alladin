/* Mobile Nav Module ***************************************************************************/
$(document).ready(MobileNav = function() {
	var container = 'body';
	var trigger = '.js-mobileNav-trigger';
	var content = '.js-mobileNav';

	$(container).find(trigger).click(function() {
		$(this).next(content).toggleClass('active');
	});
});

module.exports = MobileNav;