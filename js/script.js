// FALLA 10: Variables globales sin organización
let datos = [];

// FALLA 11: Función sin validación de entrada
function procesarDatos() {
  const input = document.getElementById("numerosInput").value;

  // FALLA 12: No maneja espacios ni formatos diferentes
  datos = input.split(",");

  // FALLA 13: No valida que sean números
  calcularMedia();
  calcularDesviacion();
}

// FALLA 14: Algoritmo de media incorrecto
function calcularMedia() {
  let suma = 0;

  // FALLA 15: No convierte a números
  for (let i = 0; i < datos.length; i++) {
    suma += datos[i]; // Suma strings en lugar de números
  }

  // FALLA 16: No maneja división por cero
  const media = suma / datos.length;

  // FALLA 17: No formatea el resultado
  document.getElementById("mediaResult").textContent = media;
}

// FALLA 18: Algoritmo de desviación estándar incorrecto
function calcularDesviacion() {
  // FALLA 19: No calcula la media primero
  let media = 0; // Media incorrecta

  let sumaCuadrados = 0;

  // FALLA 20: Fórmula incorrecta (usa n en lugar de n-1)
  for (let i = 0; i < datos.length; i++) {
    const diferencia = datos[i] - media;
    sumaCuadrados += diferencia * diferencia;
  }

  // FALLA 21: No verifica si hay suficientes datos
  const varianza = sumaCuadrados / datos.length; // Debería ser n-1
  const desviacion = Math.sqrt(varianza);

  // FALLA 22: No maneja decimales
  document.getElementById("desviacionResult").textContent = desviacion;
}

// FALLA 23: No hay manejo de errores
function mostrarError(mensaje) {
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = mensaje;
  errorDiv.style.display = "block";
}

// FALLA 24: No hay función de limpieza/reset
function limpiarDatos() {
  // No implementada
}

// FALLA 25: No hay validación de entrada en tiempo real
document.getElementById("numerosInput").addEventListener("input", function (e) {
  // No hace validación
});

// FALLA 26: No permite otros separadores
function procesarEntradaAlternativa() {
  // No implementada
}

// FALLA 27: No maneja números negativos correctamente
function validarNumero(numero) {
  // No implementada
  return true; // Siempre retorna verdadero
}

// FALLA 28: Cálculos sin precisión decimal
function formatearNumero(numero) {
  // No implementada
  return numero; // Retorna el número sin formatear
}

// FALLA 29: No hay pruebas de los cálculos
function verificarCalculos() {
  // No implementada
}

// FALLA 30: Código desorganizado y sin comentarios útiles
