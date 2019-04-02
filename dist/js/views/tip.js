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