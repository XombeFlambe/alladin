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