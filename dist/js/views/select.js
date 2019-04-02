/* Custom Select Module ***************************************************************************/
$(document).ready(Select = function() {
    var select = '.js-select';
    var trigger = '.js-select-trigger';
    var content = '.js-select-content';
    
    $(select).find(content).hide();

    $(select).each(function(index) {
        var selectTarget = '.js-select:eq('+ index +')';
        var contentTarget = '.js-select-content:eq(' + index + ')';

        $(selectTarget).find(trigger).find('span').text($(contentTarget).find('li').first().text());
    });

    $('body').click(function() {
        $(select).find(content).removeClass('isActive').slideUp(0);
    });

    $(select).find(content).click(function(e) {
        e.stopPropagation();
    });

    $(select).find(trigger).off('click.global.select.trigger').on('click.global.select.trigger', function(e) {
        e.stopPropagation();
        $(this).parent(select).find(content).slideToggle(0);
    });

    $(select).find(content).off('click.global.select.content').on('click.global.select.content', function() {
        $(this).hide();
    });

    $(select).find(content).find('li').off('click.global.select.content.li').on('click.global.select.content.li', function() {
        $(this).parent(content).parent(select).find(trigger).find('span').text($(this).text());
    });

});

module.exports = Select;