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