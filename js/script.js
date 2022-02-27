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

const alertTopRightID       = document.getElementById('alert-top-right');
const alertTopRightClass    = document.querySelector('.alert-top-right');
alertTopRightID.addEventListener('click', () => {
    alertTopRightClass.classList.add('slide-top-right');
    setTimeout(() => {
        alertTopRightClass.classList.remove('slide-top-right');
    }, 5000);
});

const alertTopCenterID      = document.getElementById('alert-top-center');
const alertTopCenterClass   = document.querySelector('.alert-top-center');
alertTopCenterID.addEventListener('click', () => {
    alertTopCenterClass.classList.add('slide-top-center');
    setTimeout(() => {
        alertTopCenterClass.classList.remove('slide-top-center');
    }, 5000);
});

const alertTopLeftID        = document.getElementById('alert-top-left');
const alertTopLeftClass     = document.querySelector('.alert-top-left');
alertTopLeftID.addEventListener('click', () => {
    alertTopLeftClass.classList.add('slide-top-left');
    setTimeout(() => {
        alertTopLeftClass.classList.remove('slide-top-left');
    }, 5000);
});

const alertBottomRightID     = document.getElementById('alert-bottom-right');
const alertBottomRightClass  = document.querySelector('.alert-bottom-right');
alertBottomRightID.addEventListener('click', () => {
    alertBottomRightClass.classList.add('slide-bottom-right');
    setTimeout(() => {
        alertBottomRightClass.classList.remove('slide-bottom-right');
    }, 5000);
});

const alertCenterBottomID     = document.getElementById('alert-center-bottom');
const alertCenterBottomClass  = document.querySelector('.alert-center-bottom');
alertCenterBottomID.addEventListener('click', () => {
    alertCenterBottomClass.classList.add('slide-center-bottom');
    setTimeout(() => {
        alertCenterBottomClass.classList.remove('slide-center-bottom');
    }, 5000);
});

const alertBottomLeftID     = document.getElementById('alert-bottom-left');
const alertBottomLeftClass  = document.querySelector('.alert-bottom-left');
alertBottomLeftID.addEventListener('click', () => {
    alertBottomLeftClass.classList.add('slide-bottom-left');
    setTimeout(() => {
        alertBottomLeftClass.classList.remove('slide-bottom-left');
    }, 5000);
});