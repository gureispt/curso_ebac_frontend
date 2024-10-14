const valida = document.getElementById('form')

valida.addEventListener('submit', function(e){
    e.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)

    const messageSucess = "Formulário Válido!"
    const messageInvalid = "Formulário Inválido!"

    const containerMessageSucess = document.querySelector('.sucess-message')
    const containerMessageInvalid = document.querySelector('.invalid-message')

    containerMessageSucess.style.display = 'none';
    containerMessageInvalid.style.display = 'none';

    // Usa o a função
    if (Validator(num1, num2)) {
        containerMessageSucess.innerHTML = messageSucess;
        containerMessageSucess.style.display = 'block';
    } else {
        containerMessageInvalid.innerHTML = messageInvalid;
        containerMessageInvalid.style.display = 'block';
    }
})

// Lógica da função
function Validator(A, B){
    if(B > A){
        return true;
    }else{
        return false;
    }
}