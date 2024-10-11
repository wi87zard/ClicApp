function registrar() {
  // Obtener los valores de los campos
  const nombres = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const pass = document.getElementById("pass").value;

  // Verificar si algún campo está vacío
  if (!nombres || !email || !tel || !pass) {
      alert("Por favor, complete todos los campos");
      return; // Detener la ejecución si hay campos vacíos
  }

  // Si todos los campos están llenos, proceder con el registro a la base de datos
  db.collection("usuarios").add({
      nombres: nombres,
      email: email,
      tel: tel,
      pass: pass
  })
  .then((docRef) => {
      alert("Registro exitoso!");
      document.getElementById("form").reset();
  })
  .catch((error) => {
      alert("Error en el registro: " + error.message);
  });
}