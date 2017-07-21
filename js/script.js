$(document).ready(function () {
    
    var $grid = $('.container');

for (i = 0; i < 16; i++) 
{
    var row = '<div>';

    for (j = 0; j < 16; j++)
        row += '<div class="squares">' + j + '</div>';

    row += '</div>';

    $grid.append(row);
}
  
  //setting width for default
  $('.squares').width(500/16);
    $('.squares').height(500/16);
  
  //setting drawing function
  
    $('.squares').mouseenter(function() {
    $(this).css("background-color", "#d46a6a");
   }); 
  
  
  $('.blue').click(function() {
    $('.squares').mouseenter(function() {
      $(this).css("background-color", "blue")
    });
  });
   $('.red').click(function() {
    $('.squares').mouseenter(function() {
      $(this).css("background-color", "#d46a6a")
    });
  });
  
  
  $(".squares").click(function () {
   $(this).css("background-color", "white");
});
   
  
  
  
  
  //setting clear pad
  $('.one').click(function() {
    $('.squares').css("background-color", "white");
     

  });
  
  // start of resize function
  
  $('#resize').click(function() {
   
    $('.squares').remove();
    
    var gridsize = prompt('Pick a number between 1 and 100!!');
    
   
    var $grid = $('.container');
//build new grid with for loop
    //conditional if to test if user presses cancel
    //if user returns null then build default grid
    if(gridsize === null) {
       var $grid = $('.container');

for (i = 0; i < 16; i++) 
{
    var row = '<div>';

    for (j = 0; j < 16; j++)
        row += '<div class="squares">' + j + '</div>';

    row += '</div>';

    $grid.append(row);
} //end of for loop
    //set height and width of the default grid.
    $('.squares').width(500/16);
    $('.squares').height(500/16);
    } else {
for (i = 0; i < gridsize; i++) 
{
    var row = '<div>';

    for (j = 0; j < gridsize; j++)
        row += '<div class="squares">' + j + '</div>';

    row += '</div>';
    
    
  
    
    $grid.append(row);
  
} // for loop end
    } //end of else statement   
    //setting draw function for new pad
    $('.squares').mouseenter(function() {
    $(this).css("background-color", "#d46a6a");
  });
    //setting the resize width and height
    $('.squares').width(500/gridsize);
    $('.squares').height(500/gridsize);
  
     
  
  }); // end of resize.click

  
 
    
    
}); //document.ready end

