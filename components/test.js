document.getElementById('menu').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var main = document.getElementById('content');

    sidebar.classList.toggle('open');
    main.classList.toggle('open');
});