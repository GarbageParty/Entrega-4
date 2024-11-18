let librosLeidos = ["El Código da Vinci","El señor de los anillos","Don Quijote de la Mancha","El diario de Ana Frank","El nombre de la rosa","Historia de dos ciudades","El Alquimista"];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

// Esto busca dentro del array un libro especifico que hayas leído

let libroEspecifico = librosLeidos [0];

console.log("El Libro que buscas es: " + libroEspecifico);

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
}

// Usando la funcion se agrega el libro
agregarLibro("Cien años de soledad");
agregarLibro("1984");
agregarLibro("El Principito");

// Esta función te muestra el array con los libros agregados

mostrarLibrosLeidos();