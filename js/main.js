
$(document).ready(function () {
    
    //Script to turn the element into a map
    $('#map').usmap({
 
        stateStyles: {
            fill: 'lightgreen'
        },
        
    clickState: {
    'WA' : function(event, data) {
      console.log('You interacted with the state of Washington');
    }
  },
        
        stateSpecificStyles: {
          'WA' : {fill: 'purple'},  
          'OR' : {fill: 'purple'},
          'ID' : {fill: 'purple'},    
        
        },
        
        
    
    });  
    

    //select radio button to call event
    $(".radio").click(function ( ){
        alert("highlight states")
        
      
    });

    
    
    
    
    
    
    
    
  });


