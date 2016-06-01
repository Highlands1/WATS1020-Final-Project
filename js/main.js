//jquery.usmap.js - there was an error I kept getting with line 490 "this.paper.safari();". 
//I went ahead and commented out this line and everything appears to be working well with the map and no more //errors in the console
$(document).ready(function () {
    
    //Script to turn the element into a map
    $('#map').usmap({
        
 
        stateStyles: {
            fill: 'lightgreen'
        },
        
        
        stateSpecificStyles: {
          'WA' : {fill: 'purple'},
          'OR' : {fill: 'purple'},
          'ID' : {fill: 'purple'},
          'AK' : {fill: '#f00'}
        
        },
        
        stateSpecificHoverStyles: {
          'WA' : {fill: 'yellow'},
          'OR' : {fill: 'yellow'},
          'ID' : {fill: 'yellow'},
          'HI' : {fill: '#ff0'}
        },
        
        clickState: {
           'WA' : function( event, data ) {
              console.log('You interacted with the state of Washington');
           },

        },
        
    
    });  
    

    //select radio button to call event
    $("#optionsRadios1").click(function ( ){
        alert("question 1 with highlighted region");
        
        
      
    });

    
    
    
    
    
    
    
    
  });


