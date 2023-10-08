    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("registerForm");
        const errorMessage = document.getElementById("errorMessage");
      
        form.addEventListener("submit", function (event) {
          event.preventDefault();
      
          const emailInput = form.querySelector("input[type='email']");
          const usernameInput = form.querySelector("input[placeholder='Nombre de usuario']");
          const passwordInput = form.querySelector("input[placeholder='Contraseña']");
          const termsCheckbox = form.querySelector("#terms");
      
          if (!isValidEmail(emailInput.value)) {
            showError("Por favor, ingresa un correo electrónico válido.");
            return;
          }
      
          if (!isValidUsername(usernameInput.value)) {
            showError("El nombre de usuario debe tener al menos 5 caracteres y no contener caracteres especiales.");
            return;
          }
      
          if (!isValidPassword(passwordInput.value)) {
            showError("La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número.");
            return;
          }
      
          if (!termsCheckbox.checked) {
            showError("Por favor, acepta los términos y condiciones.");
            return;
          }
      
          // Simulacro
          fetch("https://example.com/register", {
            method: "POST",
            body: JSON.stringify({
              email: emailInput.value,
              username: usernameInput.value,
              password: passwordInput.value
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              alert("Registro completado con éxito!");
              form.reset();
            } else {
              showError("Hubo un error en el registro. Por favor, inténtalo de nuevo.");
            }
          });
        });
      
        function showError(message) {
          errorMessage.textContent = message;
          errorMessage.style.display = "block";
          setTimeout(() => {
            errorMessage.style.display = "none";
          }, 3000);
        }
      
        function isValidEmail(email) {
          const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          return re.test(String(email).toLowerCase());
        }
      
        function isValidUsername(username) {
          const re = /^[a-zA-Z0-9]{5,}$/; // Al menos 5 caracteres, sin caracteres especiales
          return re.test(username);
        }
      
        function isValidPassword(password) {
          const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/; // Al menos 6 caracteres, al menos 1 letra mayúscula, 1 letra minúscula y 1 número
          return re.test(password);
        }
      });
