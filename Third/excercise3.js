function validatePassword(pass) {
    
    console.debug("validatePassword | [Entry] ");
    // Debe tener al menos 16 caracteres.
    if (pass.length < 16) {
      return false;
    }
  
    // Debe tener letras minúsculas y mayúsculas.
    let hasLowercase = false;
    let hasUppercase = false;
  
    for (let i = 0; i < pass.length; i++) {
      const char = pass[i];
      if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      }
  
      if (hasLowercase && hasUppercase) {
        break;
      }
    }
  
    if (!hasLowercase || !hasUppercase) {
      return false;
    }
  
    // No puede tener 2 letras iguales consecutivas.
    for (let i = 1; i < pass.length; i++) {
      if (pass[i] === pass[i - 1]) {
        return false;
      }
    }
  
    // Debe contener al menos 4 números.
    let numCount = 0;
  
    for (let i = 0; i < pass.length; i++) {
      const char = pass[i];
      if (char >= '0' && char <= '9') {
        numCount++;
      }
  
      if (numCount >= 4) {
        break;
      }
    }
  
    if (numCount < 4) {
      return false;
    }
  
    // No puede tener 2 números iguales consecutivos.
    for (let i = 1; i < pass.length; i++) {
      const char = pass[i];
      if (char >= '0' && char <= '9' && char === pass[i - 1]) {
        return false;
      }
    }
  
    // Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?)
    // ninguno de ellos puede repetirse en ninguna posición y no pueden estar juntos.
    const specialChars = "!@#$%^&*-_+=?";
    let specialCount = 0;
  
    for (let i = 0; i < pass.length; i++) {
      const char = pass[i];
      if (specialChars.includes(char)) {
        specialCount++;
        if (specialChars.includes(pass[i + 1])) {
            console.log("fallo");
          return false;
        }
      }
    }
  
    if (specialCount < 2) {
      return false;
    }
  
    // No se puede usar el número 0.
    if (pass.includes("0")) {
      return false;
    }
  
    // No se puede colocar espacios.
    if (pass.includes(" ")) {
      return false;
    }

    console.debug("validatePassword | [Exit] TRUE ");
    return true;
}

// test
const password = "G@nzalo!12347656";
if (validatePassword(password)) {
  console.log("La contraseña es segura.");
} else {
  console.log("La contraseña no cumple con los requerimientos de seguridad.");
}