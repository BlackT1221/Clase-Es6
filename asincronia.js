// console.log("1. Pedir insumos a Bogotá")

// // Tarea que se tarda tres segundos

// setTimeout(() => {
//     console.log("2. Insumos traídos de bogotá. Se tardaron 3 segundos.")
// }, 3000)

// console.log("3. Seguimos haciendo otras tareas")

// Promesas

// Buscar un producto en la BD
const buscarProductor = new Promise((resolve, reject) => {
  let baseDatosActiva = true;

  setTimeout(() => {
    if (baseDatosActiva) {
        resolve({id: 1, nombre: "juan", cultiva: "Papas"}) // Si sale bien
    } else {
        reject("Error: No se pudo conectar a la base de datos") // sale mal
    }
  }, 2000);
});

// buscarProductor
//     .then((datos) => console.log("Éxito:", datos))
//     .catch((error) => console.log(error));

// async y await

const cargarDatos = async () => {
    try{
        console.log("Buscando productor...")
        const datos = await buscarProductor;
        console.log("Datos cargados:", datos);
    } catch (err){
        console.error("Hubo un problema", err);
    }
};

cargarDatos()