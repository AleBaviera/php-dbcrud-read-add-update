function init(){
  getDataBar();
  $(document).on('click', '#btn-del', deleteDrink);
}

function resetPage(){
  $('.drinksSquares').html('');
}

function getDataBar(){
  resetPage();

  $.ajax({
    url: 'api.php',
    method: 'GET',

    success:function(data){
      printDataBar(data);
    },
    error: function(){}
  });
}

function thisDrinkId(me){
  var drink = me.parent();
  var id = drink.data('id');

  return id;
}

function deleteDrink(){
  var idDel = thisDrinkId($(this));

  $.ajax({
    url: 'api-delete-drink.php',
    method: 'GET',
    data: {id: idDel},
    success: function(data){
      getDataBar();
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
