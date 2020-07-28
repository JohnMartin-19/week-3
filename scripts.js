$(document).ready(function() {
    $(".clickable").click(function() {
        $(".toggle-showing").fadeToggle();
        $(".toggle-hidden").fadeToggle();
    });
});