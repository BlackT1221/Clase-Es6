# Actividad: Gestión de Datos Agropecuarios con JavaScript

## Objetivo

Consolidar los conocimientos adquiridos mediante la resolución de un problema completo de gestión y procesamiento de datos agropecuarios utilizando JavaScript.

## Instrucciones para los aprendices

Dado el siguiente conjunto de datos:

```javascript
const inventarioAgro = [
    { id: 101, producto: "Yuca", tipo: "Tubérculo", cantidadKg: 120, precioKg: 2500 },
    { id: 102, producto: "Tomate de Árbol", tipo: "Fruta", cantidadKg: 40, precioKg: 4000 },
    { id: 103, producto: "Plátano Hartón", tipo: "Fruta", cantidadKg: 200, precioKg: 3000 },
    { id: 104, producto: "Zanahoria", tipo: "Hortaliza", cantidadKg: 15, precioKg: 1800 }
];
```

### 1. Desestructuración

Utiliza **desestructuración** dentro de una función flecha para extraer y mostrar las propiedades del primer producto del arreglo.

Debes mostrar la información correspondiente a:

- `id`
- `producto`
- `tipo`
- `cantidadKg`
- `precioKg`

### 2. Filtrado del inventario

Utiliza el método **`.filter()`** para obtener únicamente los productos cuya cantidad disponible sea mayor o igual a **50 kg**.

Estos productos serán considerados como aquellos que cuentan con **stock suficiente**.

### 3. Cálculo del valor de cada lote

Utiliza **`.map()`** sobre el resultado obtenido en el paso anterior.

Debes crear un nuevo arreglo de objetos que conserve la información de los productos y agregue una nueva propiedad denominada:

```javascript
valorTotalLote
```

El valor debe calcularse mediante la siguiente fórmula:

```text
cantidadKg × precioKg
```

### 4. Valor total del inventario

Utiliza **`.reduce()`** para calcular la suma total en dinero que representan **todos los productos del inventario original**.

La operación debe considerar para cada producto:

```text
cantidadKg × precioKg
```

### 5. Reporte final

Imprime en consola un reporte final resumido utilizando **template literals**.

El reporte debe incluir información relevante del procesamiento realizado, como:

- Producto o productos con stock suficiente.
- Cantidad disponible.
- Valor total de cada lote.
- Valor total del inventario.

## Resultado esperado

La solución debe demostrar el uso correcto de los siguientes conceptos de JavaScript:

| Concepto | Uso requerido |
|---|---|
| Desestructuración | Extraer propiedades del primer producto |
| Funciones flecha | Implementar las operaciones solicitadas |
| `.filter()` | Obtener productos con `cantidadKg >= 50` |
| `.map()` | Agregar `valorTotalLote` |
| `.reduce()` | Calcular el valor total del inventario |
| Template literals | Construir el reporte final |
| `console.log()` | Mostrar los resultados |

## Condiciones

- Trabajar directamente con el arreglo `inventarioAgro` proporcionado.
- No modificar los datos originales del inventario.
- Utilizar los métodos `.filter()`, `.map()` y `.reduce()` según lo solicitado.
- Utilizar una función flecha para la desestructuración.
- Presentar los resultados de manera clara en la consola.