const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    const sideBar = document.getElementById('sideBar');

    sideBar.classList.toggle('d-none');
})