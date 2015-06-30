$(document).ready(function(){

    
    /*$('.nav a').on('click', function(){
    $(".btn-navbar").click(); 
    $(".navbar-toggle").click();
    });*/

     $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 10){
        console.log(scrollTop);
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
    }
});
});