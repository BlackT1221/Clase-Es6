const obtenerUsuarios = async () => {
    try{
        // Petición GET a jsonplaceholder
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

        // Convertir texto json a un objeto JS
        const datos = await respuesta.json()

        console.log("Lista de usuarios extraida de la API")
        console.log(datos)

        const nombresDeUsuario = datos.map(user => user.name)
        console.log("solo nombres:", nombresDeUsuario)
    } catch (err){
        console.log("Error al conectar con la API", err)
    }
}

obtenerUsuarios()