$(document).ready(function(){
    $("#image").animate({
        width: "100%",
        fontSize: "3em",
        borderWidth: "10px",
    }, 1500 );

    setTimeout(function () {
        $("button")[0].click()
    }, 1)

});
