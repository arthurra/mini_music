$(document).ready(function() {
  $('div.toggle__fav-button button').click(function(){
    $(this).toggleClass('active');
  });

  $('div.toggle__repeat-button button').click(function(){
    $(this).toggleClass('active');
  });

  $('div.toggle__shuffle-button button').click(function(){
    $(this).toggleClass('active');
  });
});