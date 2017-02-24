$(document).ready(inicio);
function inicio(){
    $("div#siteSub").css("font-style","italic");
    $("table.infobox th").css("color","darkgreen");
    $("p").eq(0).css("background-color","pink");
    $("div#toc ul").hide();
    $("div#toc div#toctitle span").click(function(){
        $("div#toc ul").slideToggle("slow");
        if ($("div#toc div#toctitle span").text() == "[ocultar]")
            $("div#toc div#toctitle span").text("[mostrar]");
        else $("div#toc div#toctitle span").text("[ocultar]");
    });
    $("h2").add("h3").css("color","blue");
    $("a").each(function(index) {
        console.log(index + ": " + $(this).attr("href"));
        $(this).css("color","red");
    });
    $(".references li:even").css({"color": "white", "background-Color": "grey"});
    $(".references li:odd").css({"color": "black", "background-Color": "lightgrey"});
    $("li a").css({"text-decoration": "none"});
}