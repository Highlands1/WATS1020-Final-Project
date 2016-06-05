//jquery.usmap.js - there was an error I kept getting with line 490 "this.paper.safari();". 
//I went ahead and commented out this line and everything appears to be working well with the map and no more //errors in the console
$(document).ready(function () {
    
    
    //Script to turn the element into a map
    $('#map').usmap({
         
        
          stateSpecificStyles: {
              'WA' : {fill: 'pink'},
              'OR' : {fill: 'pink'},
              'ID' : {fill: 'pink'}, 
              'CA' : {fill: 'pink'},
              'NV' : {fill: 'pink'},
              'MT' : {fill: 'pink'},
              'WY' : {fill: 'pink'},
              'UT' : {fill: 'pink'},
              'CO' : {fill: 'pink'},
              'NV' : {fill: 'pink'},
              'AZ' : {fill: 'pink'},
              'NM' : {fill: 'pink'},
              'AK' : {fill: 'pink'},
              'HI' : {fill: 'pink'},
              'ND' : {fill: 'blue'},
              'SD' : {fill: 'blue'},
              'NE' : {fill: 'blue'},
              'KS' : {fill: 'blue'},
              'MO' : {fill: 'blue'},
              'IA' : {fill: 'blue'},
              'MN' : {fill: 'blue'},
              'WI' : {fill: 'blue'},
              'IL' : {fill: 'blue'},
              'IN' : {fill: 'blue'},
              'MI' : {fill: 'blue'},
              'OH' : {fill: 'blue'},
              'TX' : {fill: 'yellow'},
              'OK' : {fill: 'yellow'},
              'AR' : {fill: 'yellow'},
              'LA' : {fill: 'yellow'},
              'MS' : {fill: 'yellow'},
              'AL' : {fill: 'yellow'},
              'KY' : {fill: 'yellow'},
              'TN' : {fill: 'yellow'},
              'FL' : {fill: 'yellow'},
              'GA' : {fill: 'yellow'},
              'SC' : {fill: 'yellow'},
              'NC' : {fill: 'yellow'},
              'VA' : {fill: 'yellow'},
              'WV' : {fill: 'yellow'}, 
              'NY' : {fill: 'green'},
              'NJ' : {fill: 'green'},
              'CT' : {fill: 'green'},
              'MA' : {fill: 'green'},
              'NH' : {fill: 'green'},
              'VT' : {fill: 'green'},
              'RI' : {fill: 'green'},
              'MD' : {fill: 'green'},
              'PA' : {fill: 'green'},
              'DC' : {fill: 'green'},
              'ME' : {fill: 'green'},
              'RI' : {fill: 'green'},
              'DE' : {fill: 'green'},
        },
        
         // The correct state
          click: function(event, data) {
              if ('WA' == data.name)
                  {alert('correct');}
              
              else if ('OR' == data.name)
                  {alert('correct');}
              
              else if ('CA' == data.name)
                  {alert('correct');}
              
              else if ('AZ' == data.name)
                  {alert('correct');}
              
              else if ('ID' == data.name)
                  {alert('correct');}
              
              else if ('NV' == data.name)
                  {alert('correct');}
              
              else if ('AK' == data.name)
                  {alert('correct');}
              
              else if ('HI' == data.name)
                  {alert('correct');}
              
              else if ('NM' == data.name)
                  {alert('correct');}
              
              else if ('UT' == data.name)
                  {alert('correct');}
              
              else if ('WY' == data.name)
                  {alert('correct');}
              
              else if ('MT' == data.name)
                  {alert('correct');}
              
              else if ('CO' == data.name)
                  {alert('correct');}
              
              else if ('NM' == data.name)
                  {alert('correct');}
              
              else if ('ND' == data.name)
                  {alert('incorrect');}
              
              else if ('SD' == data.name)
                  {alert('incorrect');}
              
              else if ('NE' == data.name)
                  {alert('incorrect');}
              else if ('NM' == data.name)
                  {alert('incorrect');}
              
              else if ('KS' == data.name)
                  {alert('incorrect');}
              
              else if ('MO' == data.name)
                  {alert('incorrect');}
              
              else if ('IA' == data.name)
                  {alert('incorrect');}
              
              else if ('MN' == data.name)
                  {alert('incorrect');}
              
              else if ('WI' == data.name)
                  {alert('incorrect');}
              
              else if ('IL' == data.name)
                  {alert('incorrect');}
              
              else if ('IN' == data.name)
                  {alert('incorrect');}
              
              else if ('MI' == data.name)
                  {alert('incorrect');}
              
              else if ('OH' == data.name)
                  {alert('incorrect');}
              
              else if ('TX' == data.name)
                  {alert('incorrect');}
              
              else if ('OK' == data.name)
                  {alert('incorrect');}
              
              else if ('AR' == data.name)
                  {alert('incorrect');}
              
              else if ('LA' == data.name)
                  {alert('incorrect');}
              
              else if ('MS' == data.name)
                  {alert('incorrect');}
              
              else if ('AL' == data.name)
                  {alert('incorrect');}
              
              else if ('KY' == data.name)
                  {alert('incorrect');}
              
              else if ('TN' == data.name)
                  {alert('incorrect');}
              
              else if ('FL' == data.name)
                  {alert('incorrect');}
              
              else if ('GA' == data.name)
                  {alert('incorrect');}
              
              else if ('SC' == data.name)
                  {alert('incorrect');}
              
              else if ('NC' == data.name)
                  {alert('incorrect');}
              
              else if ('VA' == data.name)
                  {alert('incorrect');}
              
              else if ('WV' == data.name)
                  {alert('incorrect');}
              
              else if ('MD' == data.name)
                  {alert('incorrect');}
              
              else if ('DE' == data.name)
                  {alert('incorrect');}
              
              else if ('DC' == data.name)
                  {alert('incorrect');}
              
              else if ('NJ' == data.name)
                  {alert('incorrect');}
              
              else if ('CT' == data.name)
                  {alert('incorrect');}
              
              else if ('RI' == data.name)
                  {alert('incorrect');}
              
              else if ('MA' == data.name)
                  {alert('incorrect');}
              
              else if ('NH' == data.name)
                  {alert('incorrect');}
              
              else if ('VT' == data.name)
                  {alert('incorrect');}
              
              else if ('ME' == data.name)
                  {alert('incorrect');}
              
              else if ('NY' == data.name)
                  {alert('incorrect');}
              
              else if ('PA' == data.name)
                  {alert('incorrect');}
   
          },
    });  
    
    
    

    
 
    
    
  });


