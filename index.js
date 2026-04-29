// template_eq0oz0y
// service_krx664a
// 8QZLa1hE0kFTufO1O

let isModalOpen = false;
let isDark = false;
let scaleFactor = 1/20;


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");
    emailjs.sendForm(
        "service_krx664a",
        "template_eq0oz0y", 
        event.target, 
        "8QZLa1hE0kFTufO1O"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please contact me directly at joanmart_castillo@hotmail.com");
    })
}


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for(let i=0; i<shapes.length; i++) {
        const modifier = (i % 2 !== 0) ? -1 : 1;
        shapes[i].style.transform = `translate(${x * modifier}px, ${y * modifier}px)`;
    }
}


function toggleContrast() {
    let addend = "dark-theme";
    if(isDark) document.body.classList.remove(addend);
    else document.body.classList.add(addend);
    isDark = !isDark;
}


function toggleModal() {
    let addend = "modal--open";
    if(isModalOpen) document.body.classList.remove(addend);
    else document.body.classList.add(addend);
    isModalOpen = !isModalOpen;
}

