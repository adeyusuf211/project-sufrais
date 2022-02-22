// const sidebars = document.querySelectorAll('.sidebar-link ul li');
// sidebars.forEach(sidebar => {
//     sidebar.addEventListener('click', function() {
//         for(const sidebar of sidebars) {
//             sidebar.classList.remove('active');
//         }
//         sidebar.classList.add('active');
//     });
// });

const links = document.querySelectorAll('.sidebar-link ul li a');
links.forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
    const sidebar           = document.querySelector('.sidebar');
    const sidebarBrandSpan  = document.querySelector('.sidebar .sidebar-brand span');

    sidebar.classList.toggle('side');
    sidebarBrandSpan.addEventListener('click', () => {
        sidebar.classList.remove('side');
    });
});

const badges = document.querySelectorAll('.badge');
badges.forEach(badge => {
    if(badge.textContent === 'Paid') {
        badge.style.backgroundColor = "rgb(144, 165, 236)";
    } else if(badge.textContent === 'Pending') {
        badge.style.backgroundColor = "rgb(236, 144, 144)";
    } else {
        badge.style.backgroundColor = "rgb(100, 228, 132)";
    }
});