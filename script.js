let txtmail = document.querySelector('input#email');
let mail = document.querySelector('span.mail');
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let invalido = document.querySelector("span.invalido"); 

function showalert() {
    let email = txtmail.value.trim(); 

    if (email === '' || !regex.test(email)) {
        invalido.style.display = 'inline';
        txtmail.style.background = '#e74c415e';
        txtmail.style.color = '#FF6257';
    } else {
        
        document.querySelector("section.alert").classList.add("show");
        mail.innerHTML = email;
        invalido.style.display = 'none';
        txtmail.style.background = '';
        txtmail.style.color = '';
    }
}

function hidealert() {
    document.querySelector("section.alert").classList.remove("show");
    mail.innerHTML = '';
}