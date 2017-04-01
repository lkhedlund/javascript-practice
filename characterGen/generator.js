$(function() {
  var container = $('#stats').find('tbody');
  var tr = $('<tr>').appendTo(container);
  $('<td>').text('5').appendTo(tr);
  $('#primary_stat').keypress(function() {
    var primary_stat = $(this).val();
  });
  $('#name').keypress(function() {
    var player_name = $(this).val();
    $('#player_name').text(player_name);
  });
  $.get('classes.xml', function(data) {
    $(data).find('class').each(function() {
      var $class = $(this);
      var class_name = $class.find('class > name');
      var proficiency = $class.find('class > proficiency');
      var level = $class.find('autolevel').attr('level');
      $('#class_name').append(class_name);
      $('#proficiency').append(proficiency);
    });
  });
});
