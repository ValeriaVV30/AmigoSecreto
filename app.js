let listaDeNombres = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  listaDeNombres.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  listaDeNombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaDeNombres.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }
  const indice = Math.floor(Math.random() * listaDeNombres.length);
  const nombreSorteado = listaDeNombres[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}

function reiniciarJuego() {
  listaDeNombres = [];

  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const input = document.getElementById("amigo");
  input.value = "";

  alert("Juego reiniciado");
}
