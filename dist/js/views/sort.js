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