$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("buttonDevour");

    var newStatus = {
      devoured: isDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newStatus
    }).then(
      function() {
        console.log("changed status to", isDevoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
