$(document).ready(function(){
    $("#searchButton").click(function(){
        $("#searchInput").toggle();
        $("#primary_nav_wrap").toggle(display = false);
        // $("#categories").toggle(display = false);
    });
    
    
    $("#userButton").click(function(){
        $("#primary_nav_wrap").toggle();
        $("#searchInput").toggle(display = false);
        // $("#categories").toggle(display = false);
    });
});