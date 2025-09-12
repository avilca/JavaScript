// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Métodos HTTP:

// - GET (Obtener datos)
// - POST (Enviar datos)
// - PUT (Actualizar un recurso)
// - DELETE (Eliminar un recurso)


// Códidos de respuesta HTTP:
// - 200 OK (Indica solicitud correcta)
// - 201 (Indica solicitud correcta y muestra que recursos ser a creado)
// - 400 (Error por parte del cliente)
// - 404 (Resultado no encontrado del cliente)
// - 500 (Error del lados del servidor)


// Consumir una API

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        // Transforma la respuesta a JSON
        return response.json()
    })
    .then(data => {
        // Procesa los datos
        console.log(data)
    })
    .catch(error => {
        // Captura errores
        console.log("Error", error)
    })


//  Uso de Async/Await

async function getPosts() {

   try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts") 

        const data = response.json()

        console.log(data)
   
    } catch (error) {

        console.log("Error", error)
    }

   
}

getPosts();

// Solicitud POST

async function createPost() {

   try {
        const newPost = {
            userId: 1,
            title: "Este es el título de mis post",
            body: "Este es el cuerpo de mi post"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost) 
        }) 


        const data = await response.json()
        console.log(data)
   
    } catch (error) {
        console.log("Error", error)
    }

   
}

createPost(); 

// Manejo de Errores

fetch("https://jsonplaceholder.typicode.com/luasoft")
    .then(response => {
        if (!response.ok) {
            throw Error(`Error HTTP, ${response.status}`)
        }
        return response.json()
    })
    .catch(error => {
        console.log("Error", error)
    })


// Métodos HTTP adiciones

// - PATCH
// - OPTIONS

async function partialPostUpdate() {

   try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "Este es el nuevo título de mi post"}) 
        }) 


        const data = await response.json()
        console.log(data)
   
    } catch (error) {
        console.log("Error", error)
    }

   
}

partialPostUpdate(); 


// Autenticación mediante API Key

/* async function getWeather(city) {
    const apiKey = "bc423c75dd6df244e2e76d2217baa06b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getWeather("Lima"); */


// Otros métodos de Autenticación y Autorización
// - Bearer Tokens
// - JWT


// Versionado de APIs
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources


// Otras APIs

async function getPokemon(pokemon) {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        });
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu");