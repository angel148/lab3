let frutas = ["mandarina", "naranja", "pera", "limon"];
const ordenarFrutas = (listaFrutas) => {
  return listaFrutas.sort();
};
console.log(ordenarFrutas(frutas));


let elementos = [2, 3, 4, 14, 5, 23, 23, 4, 32, 54, 35, 34554, 36, 45, 6];
const obtenerElementoEnElMedio = (listaNumeros) => {
  let indice = listaNumeros.length % 2 === 0
    ? Math.floor(listaNumeros.length / 2)
    : Math.ceil(listaNumeros.length / 2);

  return {valor: listaNumeros[indice], indice: indice};
};

let miObjeto = obtenerElementoEnElMedio(elementos);
console.log("el valor es: ", miObjeto.valor, "mi índice es: ", miObjeto.indice);

let usuario = "DANIEL";
const inicioSesionAdmin = (nombreUsuario) => {
  if (nombreUsuario == "ADMIN") return true;
  if (nombreUsuario == "DEV") return true;
  return false;
};
console.log(inicioSesionAdmin(usuario));
