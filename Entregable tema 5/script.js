document.querySelector("form").addEventListener("submit", (event) => {
    const campos = ["nombre", "motivo", "correo"];
    let valido = true;

    campos.forEach((campo) => {
      const valor = document.getElementById(campo).value.trim();
      const errorDiv = document.getElementById(`${campo}-error`);

      if (errorDiv) {
        errorDiv.remove();
      }

      if (!valor) {
       
        const errorMessage = document.createElement("div");
        errorMessage.textContent = `El campo ${campo} es obligatorio.`;
        errorMessage.classList.add("error-message");
  
        
        document.getElementById(campo).insertAdjacentElement("afterend", errorMessage);
  
        valido = false; 
      }
    });
 
    if (!valido) {
      event.preventDefault();
    }
  });
  