$("menu-2 ul li a").hover( function() {
    $("menu-2 ul li a").transition({'font-size': '50px'}, 1000);
    }, function(){
    $("menu-2 ul li a").transition({"font-size":"20px"}, 1000);    
    });