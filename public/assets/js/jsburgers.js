$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newlyDevoured = {
            devoured: newDevoured
        };

    $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: newlyDevoured
    }).then(function() {
        console.log("burgers devoured: ", newDevoured);
        location.reload();
    });
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log('submit working')

        var newBurger = {
            name: $("#bgrName").val().trim(),
            devoured: false
        };
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("New Burger Created");
            location.reload();
        });
    });
});