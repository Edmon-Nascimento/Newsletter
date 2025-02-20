let txtmail = document.querySelector('input#email');
let mail = document.querySelector('span.mail');
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let invalido = document.querySelector("span.invalido"); // Pegamos apenas uma vez

function showalert() {
    let email = txtmail.value.trim(); // Remove espaços extras

    if (email === '' || !regex.test(email)) {
        // Se o campo estiver vazio ou o email for inválido, mostra o erro
        invalido.style.display = 'inline';
        txtmail.style.background = '#e74c415e';
        txtmail.style.color = '#FF6257';
    } else {
        // Se o email for válido, exibe o alerta e apaga o erro
        document.querySelector("section.alert").classList.add("show");
        mail.innerHTML = email; // Corrigido para evitar repetição
        invalido.style.display = 'none';
        txtmail.style.background = ''; // Reseta o fundo
        txtmail.style.color = ''; // Reseta a cor
    }
}

function hidealert() {
    document.querySelector("section.alert").classList.remove("show");
    mail.innerHTML = ''; // Limpa o e-mail ao fechar
}