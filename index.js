// template_eq0oz0y
// service_krx664a
// 8QZLa1hE0kFTufO1O

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