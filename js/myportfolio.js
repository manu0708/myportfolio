// Navigation-bar Responsive start

let menu = document.querySelector('.menu i');
let rightNav = document.querySelector('.right-nav');
let navbar = document.querySelector('nav');

menu.addEventListener('click', () => {
    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
        navbar.style.height = '320px';
        rightNav.style.display = 'block';
    } else {
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
        navbar.style.height = '70px';
        rightNav.style.display = 'none';
    }
});

// Navigation-bar Responsive end

// Animation text start

let animatedText = document.querySelector('.animated-text');
let text = ['Web Developer', 'Java Developer', 'Backend Developer','.Net Developer','Spring Developer'];

function changeText() {
    setTimeout(() => animatedText.innerText = text[0], 0);
    setTimeout(() => animatedText.innerText = text[1], 4000);
    setTimeout(() => animatedText.innerText = text[2], 8000);
    setTimeout(() => animatedText.innerText = text[3], 12000);
    setTimeout(() => animatedText.innerText = text[4], 16000);
}
changeText()
setInterval(() => changeText(), 20000);

// Animation text end

// tabs in about start

let span = document.querySelectorAll('.about-section .about-right .tabs span');

// this method is used for set the content of education
window.addEventListener('DOMContentLoaded', () => {
    span[0].classList.add('active');
    document.querySelectorAll('.tab-window>div').forEach((element) => element.style.display = "none");
    document.querySelector(`#${span[0].innerText.toLowerCase()}`).style.display = "flex";
});

span.forEach((element) => {
    element.addEventListener('click', () => {
        let removeLine = document.querySelector('.active');
        if (removeLine != null) {
            removeLine.classList.remove('active');
            document.querySelector(`#${removeLine.innerText.toLowerCase()}`).style.display = "none";
        }
        element.classList.add('active');
        document.querySelector(`#${element.innerText.toLowerCase()}`).style.display = "flex";
    });
});

// tabs in about end

// for sending the mail start

let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;
let message = document.querySelector('#message').value;
let btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    sendEmail();
});

function sendEmail() {
    Email.send({
        SecureToken : "fea401e1-818b-4502-806c-ffa307e3511c",
        To : 'www.djmanu143@gmail.com',
        From : "mrsbank468@gmail.com",
        Subject: "Contact manu",
        Body : `Name is ${name}, email is ${email} 
        message:
        ${message}`
    }).then(
        message => alert(message)
    );
}

// for sending the mail end

// scrolling effcet start

let section = document.querySelectorAll('.section');
let navBarLinks = document.querySelectorAll('.nav-bar .right-nav .nav-main-item .nav-item .nav-link');

window.onscroll = () => {
    section.forEach(element => {
        let top = window.scrollY+70;
        let offset = element.offsetTop;
        let height = element.offsetHeight;
        
        if (top >= offset && (top < offset+height)) {
            navBarLinks.forEach(link => {
                link.classList.remove('high-light');
                if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                    navBarLinks[5].classList.add('high-light');
                } else {
                    document.querySelector('.nav-bar .right-nav .nav-main-item .nav-item a[href*=' + element.getAttribute('id') + ']').classList.add('high-light');
                }
            });
        }
    }); 
};

// scrolling effcet end