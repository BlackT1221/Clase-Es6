Copien el siguiente arreglo de datos en su editor de código. Su tarea es crear tres funciones flecha utilizando desestructuración directamente en los parámetros de la función para extraer y formatear la información solicitada.

// Datos de origen
const productores = [
    {
        id: 1,
        nombre: "María Rodríguez",
        ubicacion: { municipio: "Mosquera", departamento: "Cundinamarca" },
        contacto: { telefono: "3115551234", email: "maria.agro@email.com" },
        asociado: true
    },
    {
        id: 2,
        nombre: "Jorge Eliecer Silva",
        ubicacion: { municipio: "Fusagasugá", departamento: "Cundinamarca" },
        contacto: { telefono: "3209876543", email: "jorge.silva@email.com" },
        asociado: false
    }
];


Tareas a resolver:

    Función 1 — Datos de Contacto:

    Crea una función flecha obtenerContacto que reciba un objeto productor y use desestructuración en los parámetros para extraer el nombre y el email.

    Retorno esperado: "Productor: María Rodríguez | Correo: maria.agro@email.com"

    Función 2 — Ubicación Geográfica:

    Crea una función flecha obtenerUbicacion que reciba un objeto productor y desestructure la propiedad anidada ubicacion (municipio y departamento).

    Retorno esperado: "Ubicación: Mosquera, Cundinamarca"

    Función 3 — Ficha de Membresía (Ternario + Desestructuración):

    Crea una función flecha verificarMembresia que desestructure nombre y asociado. Debe retornar si el productor está registrado en la coactiva o no.

    Retorno esperado: "El productor Jorge Eliecer Silva NO está asociado a la cooperativa."