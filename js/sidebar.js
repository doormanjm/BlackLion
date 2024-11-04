function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var main_container = document.getElementById('main_container');
  var grid_container = document.getElementById('grid-container');


  sidebar.classList.toggle('open');
  main_container.classList.toggle('open');
}
