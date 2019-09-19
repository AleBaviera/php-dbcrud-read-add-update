function init(){
  getDataBar();
  $(document).on('click', '#btn-del', deleteDrink);
  $(document).on('click', '#add', addDrink);
  $(document).on('click', '#btn-up', updateDrink);
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

function addDrink(){
  var newType = prompt('inserisci tipo bevanda');
  var newBrand = prompt('inserisci marca bevanda');
  var newPrice = prompt('inserisci prezzo');
  var newDate = prompt('inserisci scdenza bevanda');

  $.ajax({
    url: 'api-add-drink.php',
    method: 'GET',
    data: {
      tipo: newType,
      marca: newBrand,
      prezzo:newPrice,
      scadenza:newDate
    },
    success: function(data){
      getDataBar();
    },
    error: function(data){}
  });

}

function updateDrink(){
  var id = thisDrinkId($(this));
  var newType = prompt('aggiorna tipo bevanda');
  var newBrand = prompt('aggiorna marca bevanda');
  var newPrice = prompt('aggiorna prezzo');
  var newDate = prompt('aggiorna scdenza bevanda');

  $.ajax({
    url: 'api-update-drink.php',
    method: 'GET',
    data: {
      id: id,
      tipo: newType,
      marca: newBrand,
      prezzo:newPrice,
      scadenza:newDate
    },
    success: function(data){
      getDataBar();
    },
    error: function(data){}
  });

}

$(document).ready(init);
