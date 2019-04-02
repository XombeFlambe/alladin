/* Table Header width control ***************************************************************************/
$(document).ready(Table = function() {
	var tableHead1 = '.js-table-head-1';
    var tableCol1 = '.js-table-col-1';
    var tableCol1Width = $(tableCol1).width();
    var tableHead2 = '.js-table-head-2';
    var tableCol2 = '.js-table-col-2';
    var tableCol2Width = $(tableCol2).width();
    var tableHead3 = '.js-table-head-3';
    var tableCol3 = '.js-table-col-3';
    var tableCol3Width = $(tableCol3).width();
    var tableHead4 = '.js-table-head-4';
    var tableCol4 = '.js-table-col-4';
    var tableCol4Width = $(tableCol4).width();
    var tableHead5 = '.js-table-head-5';
    var tableCol5 = '.js-table-col-5';
    var tableCol5Width = $(tableCol5).width();
    var tableHead6 = '.js-table-head-6';
    var tableCol6 = '.js-table-col-6';
    var tableCol6Width = $(tableCol6).width();
    var tableHead7 = '.js-table-head-7';
    var tableCol7 = '.js-table-col-7';
    var tableCol7Width = $(tableCol7).width();
    var tableHead8 = '.js-table-head-8';
    var tableCol8 = '.js-table-col-8';
    var tableCol8Width = $(tableCol8).width();

    $(tableHead1).width(tableCol1Width);
    $(tableHead2).width(tableCol2Width);
    $(tableHead3).width(tableCol3Width);
    $(tableHead4).width(tableCol4Width);
    $(tableHead5).width(tableCol5Width);
    $(tableHead6).width(tableCol6Width);
    $(tableHead7).width(tableCol7Width);
    $(tableHead8).width(tableCol8Width);

    $(window).resize(function() {
        $(tableHead1).width(tableCol1Width);
        $(tableHead2).width(tableCol2Width);
        $(tableHead3).width(tableCol3Width);
        $(tableHead4).width(tableCol4Width);
        $(tableHead5).width(tableCol5Width);
        $(tableHead6).width(tableCol6Width);
        $(tableHead7).width(tableCol7Width);
        $(tableHead8).width(tableCol8Width);
    });

});

module.exports = Table;