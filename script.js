/*
API a usar: https://fakestoreapi.com/

NOTA: Crear un repo en GitHub para el ejercicio. Rama main, dev, y otras features

////////PASOS:
*/

/*
1 - Hacer fetch de productos
https://fakestoreapi.com/products
*/
fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(productList=>console.log(productList))




/*
2 - Generar en el DOM tarjetas que contengan título, foto, descripción, precio de cada elemento.
*/
/*
fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(elementCard=>{
        let paragraph = document.createElement("p");
            document.body.appendChild(paragraph);
            paragraph.innerText = `
            Título: ${elementCard.title}
            
            Descripción: ${elementCard.description}

            Precio: ${elementCard.price}

        `;
        let photo = document.createElement("img");
            document.body.appendChild(photo);
            photo.src = elementCard.image;
    })
*/



/*
3 - Hacer un fetch a fakestoreapi para obtener las categorías de productos (Buscar en la documentación de la API el endpoint correspondiente)
*/




/*
4 - Generar en el DOM un <select> que contenga en sus opciones los nombres de las categorías en fakestoreapi. Las opciones deberán generarse dinámicamente, como las tarjetas del punto 2, no podrán escribirse a mano. La primera opción de nuestro <select> deberá ser "Todas las categorías".
*/





/*
5 - Al seleccionar una categoría, nuestra app deberá hacer un nuevo fetch a fakestoreapi para obtener solo los productos correspondientes a esa categoría. (Buscar en la documentación de la API el endpoint correspondiente)
*/





/*
6 - Eliminar del DOM la lista anterior y generar los nuevos items con la información de cada elemento.
*/




/*
7 - Modificar la función que muestra en el DOM las tarjetas (punto 2), para que nuestra aplicación muestre la información completa de cada producto en una tarjeta como las que podemos encontrar en una tienda online.
*/
