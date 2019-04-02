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