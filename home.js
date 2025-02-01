document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buttons a");

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("This functionality is not yet implemented.");
        });
    });
});
