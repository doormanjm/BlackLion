function toggleMenu() {
  const menu = document.getElementById('context-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

window.onclick = function(event) {
  if (!event.target.matches('.material-icons')) {
    const dropdowns = document.getElementsByClassName('context-menu');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};