
function validarFormulario(nombre, email, telefono) {
    if (!nombre || !email || !telefono) {
      return { valido: false, mensaje: "Todos los campos son obligatorios." };
    }
  
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valido: false, mensaje: "El email no tiene un formato válido." };
    }
  
    return { valido: true, mensaje: "" };
  }
  
  
  function guardarDatos(nombre, email, telefono) {
    const validacion = validarFormulario(nombre, email, telefono);
    
    if (!validacion.valido) {
      return validacion.mensaje;  
    }
  
    const datosCliente = {
      nombre: nombre,
      email: email,
      telefono: telefono
    };
  
    return datosCliente;
  }
  

  module.exports = { guardarDatos, validarFormulario };
  