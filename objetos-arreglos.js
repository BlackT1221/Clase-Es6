// const finca = {
//     id: 101,
//     nombre: "La esmeralda",
//     ubicacion: "Faca",
//     productor: {
//         nombreProductor: "Carlos Perez",
//         telefono: "300000000"
//     }
// }

const aprendiz = {
    nombre: "Alberto",
    edad: 45,
    ficha: 398989
}

// Forma tradicional
// const nombre = finca.nombre;
// const ubicacion = finca.ubicacion;

// Forma moderna

// const {nombre, ubicacion, productor: {nombreProductor}} = finca;
// console.log(`Finca: ${nombre} ubicada en ${ubicacion}, Administrador: ${nombreProductor}`)

const {nombre} = aprendiz
console.log(`El aprendiz se llama ${nombre}, tiene ${aprendiz.edad}`)

const coordenadas = [4.8142, -74.3529]
const [lat, lng] = coordenadas
console.log(`Ubicación GPS: Latitud ${lat}, Longitud ${lng}`)