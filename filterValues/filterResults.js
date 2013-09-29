var fillDropDown = {
    values : ['adidas', 'fila', 'atg', 'pop', 'qwerty'],
    targetDom : '#filter-dropdown',
    init : function(){
          fillDropDown.loadHtml()
    },
    loadHtml : function(){
        var html = '';
        for(var i in fillDropDown.values)
        {
            var value = fillDropDown.values[i];
            html += '<span value =' + value +  ' id = "check-'+ value +  '">';
            html += '<input type="checkbox"  value = "' + value + '">' + value;
            html += '</span>';
            html += '<br>';

        }
        $(fillDropDown.targetDom).html( html );
    }

};

var FilterValues = {
    values : ['adidas', 'fila', 'atg', 'pop', 'qwerty'],
    init : function(){
        FilterValues.bindEvents();
    },
    bindEvents : function(){
        $('#select-box').keyup(function(){
           var text = $(this).val();
            FilterValues.filter( text );

        });
    },
    filter : function( text ){
        $('[id^=check]').filter( function( index ){
            $(this).show()// loading all intiallly
            var value = $(this).attr('value');
            return (value.toLowerCase().indexOf( text.toLowerCase() ) != 0);
        })
            .hide();
    }
};

$(document).ready(function(){
    fillDropDown.init();
    FilterValues.init();
});

