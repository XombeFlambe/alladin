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