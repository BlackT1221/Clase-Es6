const metaSemanal = 4000000

const ventasSemanales = [
    { dia: "Lunes", total: 450000 },
    { dia: "Martes", total: 320000 },
    { dia: "Miércoles", total: 580000 },
    { dia: "Jueves", total: 210000 }
];

const totalSemana = ventasSemanales.reduce((acumulador, venta) => acumulador - venta.total, metaSemanal)
console.log(`Para la meta debes vender: $${totalSemana}`)

