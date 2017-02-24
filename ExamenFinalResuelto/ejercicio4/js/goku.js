
$(document).ready(inicio);

function inicio() {
    jQuery.fx.speeds.gokuRapido = 800;
    jQuery.fx.speeds.gokuLento = 1500;
    $("#bola").hide();
    $("#rayos").hide();

    $("#lanzar").click(function(){
        $("#goku").attr("src","img/goku.png");
        for (var i=0; i<6; i++){
            $("#rayos").show(100);
            $("#rayos").hide(100);
        }
        $("#rayos").fadeIn("gokuLento",function(){
            $("#bola").css({"height":"100px", "top": "300px"});
            $("#bola").show();
            $("#bola").animate({
                top: '0px',
                height: '400px',
            },"gokuLento").delay("gokuLento").fadeOut("gokuLento");
        }).fadeOut("gokuLento");
    });
    $("#volar").click(function(){
        $("#goku").attr("src","img/nube.png");
        $("#goku").animate({
            top: "-=100px", 
            left: "+=100px"
        },"gokuRapido").animate({
            top: "+=100px", 
            left: "+=100px"
        },"gokuRapido").animate({
            top: "+=100px", 
            left: "-=100px"
        },"gokuRapido").animate({
            top: "-=100px", 
            left: "-=100px"
        },"gokuRapido").delay(2000);
    });
}
    