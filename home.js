document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.language-btn').addEventListener('click', function() {
        alert("Language selection feature coming soon!");
    });

    // Mobile dropdown handling
    document.querySelectorAll('.dropdown-container').forEach(item => {
        item.addEventListener('click', function() {
            let dropdown = this.querySelector('.dropdown');
            dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
        });
    });
});

document.querySelector('.toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
