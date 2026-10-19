const calcularSubtotal = (precio, kilos) => precio * kilos;

const subtotalCafe = calcularSubtotal(18000, 25, 2);
console.log(subtotalCafe)

const stockDisponible = 8;

const estadoStock = stockDisponible > 0 ? "Disponible" : "Agotado"

//

const calcularPrecioFinal = (precioTotal, kilos) => 
    kilos >= 50 ? precioTotal * 0.90 : precioTotal;

const generarFactura = (producto, kilos, precioKg) =>  {
    const subtotal = calcularSubtotal(precioKg, kilos);
    const totalConDescuento = calcularPrecioFinal(subtotal, kilos);

    return `
=== FACTURA ===
Producto: ${producto},
Cantidad: ${kilos},
Aplica descuento ${kilos >= 50 ? "SI (10% OFF)" : "NO (Sin descuento)"},
Total a pagar: $${totalConDescuento}`;
};

console.log(generarFactura("Bulto de café colombia", 50, 45000))