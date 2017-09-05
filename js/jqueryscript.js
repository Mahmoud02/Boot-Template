/*global $, jquery,alert*/
$(document).ready(function () {
    
    "use strict"; // jQuery methods go here..
    $("#gear").click(function () {
        $("#color").fadeToggle();
    });
    
    var color = $(".option .color-option ul li");
    color
        .eq(0).css("backgroundColor", "deepskyblue").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#FFD500").end()
        .eq(3).css("backgroundColor", "#E41B17");
    
    color.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
  //scroll
    var scrol = $("#scroll");
    $(window).scroll(function () {
      
        if ($(this).scrollTop() >= 1600) {
          
            scrol.show();
          
        } else {
            scrol.hide();
        } 
    });
  //work of scroll button
    scrol.click(function () {
        $("html,bod").animate({scrollTop: 0}, 0);
    });
});
//loading screen
$(window).load(function () {
    
    "use strict";
    
    $(".loading .sk-cube-grid").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            
            $(this).remove();
        });
    });
});

