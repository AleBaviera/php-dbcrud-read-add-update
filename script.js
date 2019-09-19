function init(){
  getDataBar();
}



function getDataBar(){

  $.ajax({
    url: 'api.php',
    method: 'GET',

    success:function(data){
      printDataBar(data);
    },
    error: function(){}
  });
}

function printDataBar(data){
  var target = $('.drinksSquares');

  var source = $('#item-template').html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < data.length; i++) {
    var d= data[i];
    var context = d;
    var html = template(context);

    target.append(html);
  }
}



$(document).ready(init);
