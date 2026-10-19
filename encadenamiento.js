const insumos = [
    { nombre: "Insecticida A", categoria: "Químico", precio: 60000, disponible: true },
    { nombre: "Abono Orgánico", categoria: "Biológico", precio: 35000, disponible: true },
    { nombre: "Fungicida B", categoria: "Químico", precio: 85000, disponible: false },
    { nombre: "Compost", categoria: "Biológico", precio: 25000, disponible: true }
];

// Biologico
// BIOLOGICO

const resultado = insumos
    .filter((bio) => bio.categoria == "Biológico" && bio.disponible)
    .map((mayus) => `${mayus.categoria.toUpperCase()}`)

console.log(resultado)
