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
