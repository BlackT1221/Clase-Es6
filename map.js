const cosechasKg = [10, 25, 50]

// A libras 2lb = 1kg

const librasConMap = cosechasKg.map((kg) => kg * 2);
console.log("Original (Kg)", cosechasKg)
console.log("Transformado (Lb)", librasConMap)

// ################################################

const productos = [
    { id: 1, nombre: "Fertilizante NPK", precio: 80000 },
    { id: 2, nombre: "Bulto de Úrea", precio: 110000 },
    { id: 3, nombre: "Semilla de Maíz", precio: 45000 }
];

// Fertilizante -> 80000


// const {nombre, precio} = productos
const listaNombres = productos.map((prod) => `${prod.nombre} -> $${prod.precio}`)
console.log(listaNombres)

console.log(listaNombres[2])