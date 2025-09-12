// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        // Transforma la respuesta a JSON
        return response.json();
    })
    .then(data => {
        // Procesa los datos
        console.log(data);
    })
    .catch(error => {
        // Captura errores
        console.log("Error", error);
    })

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw Error(`Error HTTP, ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("Error", error)
    })


// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPosts() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = response.json();
        console.log(data);

    } catch (error) {
        console.log("Error", error);
    }
}

getPosts();


// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function crearPost() {
    try {
        const nuevoPost = {
            title: "Este es mi nuevo título",
            body: "Este es el nuevo cuerpo"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoPost)
        })

        const data = await response.json();
        console.log(data);



    } catch (error) {
        console.log("Error", error);
    }
}

crearPost();


// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder


async function actualizarPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Aprendiendo Javascript on MoureDev",
                body: "Soy nuevo en Javascript pero con las clases de MoureDev estoy aprendiendo",
                userId: 1
            })
        })

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error", error);
    }
}

actualizarPost();


// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente


async function modificarUnCampo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Aprendiendo Javascript on MoureDev",
            })
        })
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error", error);
    }
}

modificarUnCampo();


// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function borrarPublicacion(id) {
    try {
        //comprobando si existe la publicación
        const check = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);       
        if (!check.ok) {
            console.log("Error al eliminar la publicación: no existe");
            return;
        }
        //=========================================================

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('ID eliminado');
        }
    } catch (error) {
        console.error('Error al eliminar ID:', error);
    }

}

borrarPublicacion(10);



// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap


async function getWeather(country) {
    const apiKey = "bc423c75dd6df244e2e76d2217baa06b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getWeather("Perú");


// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

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

getPokemon("pidgeotto");
