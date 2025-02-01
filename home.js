document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buttons a");

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            if (button.classList.contains("register-track")) {
                window.location.href = "register_track.html";
            } else {
                event.preventDefault();
                alert("This functionality is not yet implemented.");
            }
        });
    });
});
