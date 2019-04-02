/* Chest Module ***************************************************************************/
$(document).ready(Chest = function() {
	var chest = '.js-chest';
	var trigger = '.js-chest-trigger';
	var content = '.js-chest-content';
	var close = '.js-chest-close';
	var speed = 300;

	$(chest).find(trigger).off('click.global.chest.trigger').on('click.global.chest.trigger', function(g) {
		$(chest).find(content).slideToggle(speed);
		g.preventDefault();
	});

	$(chest).find(close).off('click.global.chest.close').on('click.global.chest.close', function() {
		$(chest).find(content).slideUp(speed);
	});
});

module.exports = Chest;