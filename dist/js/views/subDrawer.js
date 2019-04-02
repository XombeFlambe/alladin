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