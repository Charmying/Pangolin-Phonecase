// ====================   精選系列   ==================== //

let select_input = document.querySelectorAll(".selectslider");

function select_click(i){
    setTimeout(function(){

        select_input[i].click();
        i++;

        if(i <= 2){
            select_click(i);
        }

        if(i > 2){
            let i = 0;
            select_click(i);
        }
    }, 2000);
}
window.addEventListener("load", select_click(1));



// ====================   Loading 頁面   ==================== //

window.addEventListener("load", function(){

    setTimeout(function () {
        $(".loadcontent").fadeOut();
        $(".bar1").attr("style", "animation: bar 1.5s ease;");
        $(".bar2").attr("style", "animation: bar 1.5s .3s ease;");
        $(".bar3").attr("style", "animation: bar 1.5s .6s ease;");
    }, 500);

    setTimeout(function(){
        $(".bar").css("width", "0%");
    }, 2000);

    setTimeout(function(){
        $(".loadingpage").remove();
    }, 2200);
});