//Le wild menu appears
$(function(){
    var menuStatus;
 
    $(".showMenu").click(function(){
        if(menuStatus != true){
        $("#universe").animate({
            left: "165px",
          }, 300, function(){menuStatus = true});
          return false;
          } else {
            $(".ui-page").animate({
            left: "0px",
          }, 300, function(){menuStatus = false});
            return false;
          }
    });
 
    $('#universe').live("swipeleft", function(){
        if (menuStatus){
        $(".ui-page").animate({
            left: "0px",
          }, 300, function(){menuStatus = false});
          }
    });
 
    $('#universe').live("swiperight", function(){
        if (!menuStatus){
        $(".ui-page").animate({
            left: "165px",
          }, 300, function(){menuStatus = true});
          }
    });
 
    $("#menu li a").click(function(){
        var p = $(this).parent();
        if($(p).hasClass('active')){
            $("#menu li").removeClass('active');
        } else {
            $("#menu li").removeClass('active');
            $(p).addClass('active');
        }
    });
 
});