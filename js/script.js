// const sidebars = document.querySelectorAll('.sidebar-link ul li');
// sidebars.forEach(sidebar => {
//     sidebar.addEventListener('click', function() {
//         for(const sidebar of sidebars) {
//             sidebar.classList.remove('active');
//         }
//         sidebar.classList.add('active');
//     });
// });

const email         = document.querySelector('[data-attr="email"]');
const smallEmail    = document.querySelector('.small-email');

smallEmail.style.display = "none";

email.addEventListener('input', function() {
    if(email.value.includes('@')) {
        email.style.border          = "1px solid blue";
        smallEmail.style.display    = 'none';
    } else {
        email.style.border          = "1px solid red";
        smallEmail.style.display    = 'flex';
    }
});

const password  = document.querySelector('[data-attr="password"]');
const smallPass = document.querySelector('.small-password');

smallPass.style.display = "none";

password.addEventListener('input', function() {
    if(password.value.length >= 8) {
        password.style.border   = "1px solid blue";
        smallPass.style.display = 'none';
    } else {
        password.style.border   = "1px solid red";
        smallPass.style.display = 'flex';
    }
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

const toastrTopRightID       = document.getElementById('toastr-top-right');
const toastrTopRightClass    = document.querySelector('.toastr-top-right');
toastrTopRightID.addEventListener('click', () => {
    toastrTopRightClass.classList.add('slide-top-right');
    setTimeout(() => {
        toastrTopRightClass.classList.remove('slide-top-right');
    }, 5000);
});

const toastrTopCenterID      = document.getElementById('toastr-top-center');
const toastrTopCenterClass   = document.querySelector('.toastr-top-center');
toastrTopCenterID.addEventListener('click', () => {
    toastrTopCenterClass.classList.add('slide-top-center');
    setTimeout(() => {
        toastrTopCenterClass.classList.remove('slide-top-center');
    }, 5000);
});

const toastrTopLeftID        = document.getElementById('toastr-top-left');
const toastrTopLeftClass     = document.querySelector('.toastr-top-left');
toastrTopLeftID.addEventListener('click', () => {
    toastrTopLeftClass.classList.add('slide-top-left');
    setTimeout(() => {
        toastrTopLeftClass.classList.remove('slide-top-left');
    }, 5000);
});

const toastrBottomRightID     = document.getElementById('toastr-bottom-right');
const toastrBottomRightClass  = document.querySelector('.toastr-bottom-right');
toastrBottomRightID.addEventListener('click', () => {
    toastrBottomRightClass.classList.add('slide-bottom-right');
    setTimeout(() => {
        toastrBottomRightClass.classList.remove('slide-bottom-right');
    }, 5000);
});

const toastrCenterBottomID     = document.getElementById('toastr-center-bottom');
const toastrCenterBottomClass  = document.querySelector('.toastr-center-bottom');
toastrCenterBottomID.addEventListener('click', () => {
    toastrCenterBottomClass.classList.add('slide-center-bottom');
    setTimeout(() => {
        toastrCenterBottomClass.classList.remove('slide-center-bottom');
    }, 5000);
});

const toastrBottomLeftID     = document.getElementById('toastr-bottom-left');
const toastrBottomLeftClass  = document.querySelector('.toastr-bottom-left');
toastrBottomLeftID.addEventListener('click', () => {
    toastrBottomLeftClass.classList.add('slide-bottom-left');
    setTimeout(() => {
        toastrBottomLeftClass.classList.remove('slide-bottom-left');
    }, 5000);
});

// const notificationID        = document.getElementById('notification');
// const notificationClass     = document.querySelector('.notification');

// notificationID.addEventListener('click', () => {
//     notificationClass.classList.add('notif-add');
//     setTimeout(() => {
//         notificationClass.classList.remove('notif-add');
//     }, 5000); 
// });