const { guardarDatos, validarFormulario } = require('../dist/GuardarDatos.js');  

describe('Pruebas para la función validarFormulario()', () => {
  it('debería devolver error si algún campo está vacío', () => {
    const resultado = validarFormulario("", "juan@example.com", "1234567890");
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toBe("Todos los campos son obligatorios.");
  });

  it('debería devolver error si el email no es válido', () => {
    const resultado = validarFormulario("Juan Pérez", "juanexample.com", "1234567890");
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toBe("El email no tiene un formato válido.");
  });

  it('debería ser válido cuando todos los campos son correctos', () => {
    const resultado = validarFormulario("Juan Pérez", "juan@example.com", "1234567890");
    expect(resultado.valido).toBe(true);
    expect(resultado.mensaje).toBe("");
  });
});

describe('Pruebas para la función guardarDatos()', () => {
  it('debería devolver un objeto JSON con los datos del cliente cuando el formulario es válido', () => {
    const resultado = guardarDatos("Juan Pérez", "juan@example.com", "1234567890");
    expect(resultado).toEqual({
      nombre: "Juan Pérez",
      email: "juan@example.com",
      telefono: "1234567890"
    });
  });

  it('debería devolver un mensaje de error si algún campo está vacío', () => {
    const resultado = guardarDatos("", "juan@example.com", "1234567890");
    expect(resultado).toBe("Todos los campos son obligatorios.");
  });

  it('debería devolver un mensaje de error si el email es inválido', () => {
    const resultado = guardarDatos("Juan Pérez", "juanexample.com", "1234567890");
    expect(resultado).toBe("El email no tiene un formato válido.");
  });
});
