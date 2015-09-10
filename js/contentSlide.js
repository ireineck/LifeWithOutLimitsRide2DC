$(function(){
   
   $tabs = $(".sideTabs")
   $tabAbout = $("#tabAbout");
   $tabRiders = $("#tabRiders");
   $tabPledge = $("#tabPledge");
   
   $defaultContent = $("#defaultContent");
   $about = $("#about");
   
   $riderBios =  $('.ridersBios');
   $dave = $('#dave');
   $marry = $('#mary');
   $tim = $('#tim');
   
// hover over tabs   
   $tabs.hover(function () {
       
      $(this).css({
         "background-color": "black",
         "color": "darkorange",
         "cursor": "hand",
         "box-shadow": "1px 1px 1px darkorange,1.5px 1.5px 5px white,2px 2px 5px  darkorange"
               });
      
   }, function () {
   
      $(this).css({
         "background-color": "darkorange",
         "color": "black",
         "cursor": "pointer",
         "box-shadow": "none"
      });
   });
   
   
   $tabs.click(function () {
      
      $clickedTab = $("#" + $(this).attr('id').slice(3).toLowerCase(0)); 
     
      $riderBios.css({"visibility": "hidden"});
   
      if ($defaultContent.is(":visible")){
         
        
            $defaultContent.css({
               "visibility": "hidden"
            }) // end defaultContent.css
      
      } 
      if($("." + $clickedTab.attr('class')).is(":visible")){
        
         $(".slideInDivs").css({
            "visibility": "hidden"
         })
      }
         
      
         $clickedTab.stop().css({
            "visibility": "visible",
            "background-color": "white",
      }) 
      
          $defaultContent.css({"visibility": "visible"});                      
      
   } 
   
      
            
//      }// end if
                                
   ); // end tabs.click
   
   
   
   // riders bio content toggeles 
   
  
   
  $dave.hover(function(){
     
     $(this).css({
        "color": "darkorange",
         "cursor": "hand",
     })
  }, function () {
     
     $(this).css({
        "color": "black",
        "cursor": "pointer"
     })
  })
  
  $marry.hover(function(){
     
     $(this).css({
        "color": "darkorange",
         "cursor": "hand",
     })
  }, function () {
     
     $(this).css({
        "color": "black",
        "cursor": "pointer"
     })
  })
  
  $tim.hover(function(){
     
     $(this).css({
        "color": "darkorange",
         "cursor": "hand",
     })
  }, function () {
     
     $(this).css({
        "color": "black",
        "cursor": "pointer"
     })
  })
  
  $dave.click(function () {
              
              $('#daveBio').css({"visibility": "visible"})
              })
   
   
   
   $('.exitButton').click(function () {
    
      $riderBios.css({
         "visibility": "hidden"
      })
      
   })

    $marry.click(function () {
              
              $('#marryBio').css({"visibility": "visible"})
              })
     $tim.click(function () {
              
              $('#timBio').css({"visibility": "visible"})
              })
   
   
   
  
   

}); // END
     
      
    // need to close the default content or any other open content and show the clicked tabs 
      // corosponding div 
      
      
     
      
      
      
      
      
//      if ($defaultContent.is(":visible")){
//         
//         $defaultContent.slideToggle(200,function () {
//            
//            $defaultContent.css({
//               "visibility": "hidden"
//            })
//     
//      })}
//                                     
//         alert ('here');


   
   

   
   
   
   
   
      