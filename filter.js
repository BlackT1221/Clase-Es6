const inventarioFinca = [
    { id: 1, cultivo: "Café", hectareas: 12, orgánico: true },
    { id: 2, cultivo: "Papa", hectareas: 5, orgánico: false },
    { id: 3, cultivo: "Aguacate Hass", hectareas: 20, orgánico: true },
    { id: 4, cultivo: "Flores", hectareas: 3, orgánico: false }
];

const hectareasMayoresA15 = inventarioFinca.filter((prod) => prod.hectareas > 10)
console.log(hectareasMayoresA15)

const peliculas = [
    {nombre: "Hereditary", calificacion: 0.5},
    {nombre: "Insidius", calificacion: 0.35},
    {nombre: "El lobo de wall street", calificacion: 0.9},
]

const mejoresPeliculas = peliculas.filter((peli) => peli.calificacion > 0.5)
console.log(peliculas)