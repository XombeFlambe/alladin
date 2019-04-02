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