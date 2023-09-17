function Mostrar() {
    const phoneInput = document.getElementById("phone");
    const dialCode = document.querySelector(".dial-code").textContent;
    const phoneNumber = phoneInput.value;
    alert(`Número de teléfono: ${dialCode} ${phoneInput.value}`);
}

function updateDialCode() {
    const countrySelect = document.getElementById("country");
    const selectedOpction = countrySelect.options[countrySelect.selectedIndex];
    if (selectedOpction) {
        const dialCode = selectedOpction.value;
        document.querySelector(".dial-code").textContent= ` +${dialCode}`
    }
}

/*const validate = () => {
    let phone = document.getElementById("phone");
    phone.value = phone.value.replace(/[^\d]/g, "");
}*/

const validate = () => {
    const phoneInput = document.getElementById("phone");
    const phoneNumber = phoneInput.value;
    const validationResult = document.getElementById("validation-result");

    // Expresión regular para validar un número de teléfono de 10 dígitos
    const phoneRegex = /^[0-9]{10}$/;

    if (phoneRegex.test(phoneNumber)) {
        validationResult.textContent = "Número válido";
        validationResult.style.color = "green";
    } else {
        validationResult.textContent = "Número no válido";
        validationResult.style.color = "red";
    }
}
