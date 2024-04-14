document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById('dropicon');
    const drop = document.getElementById('dropdown');

    icon.addEventListener('click', function() {
        drop.classList.toggle('hidden');
    });
});