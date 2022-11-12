class Usuario {

 constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = [mascotas];
    }

    getFullName = () => `${this.nombre} ${this.apellido}`;


    addMascota (newMascotas) {
        this.mascotas.push(newMascotas)
    }

    countMascotas () {
        return this.mascotas.length;
    }

    getBookName ()  {
        let nombresLibros = []
        this.libros.forEach(item => nombresLibros.push(item.nombre));
        return nombresLibros
    }

    addBook (nombre, autor)  {
        this.libros.push(
         {   "nombre": nombre,
            "autor": autor,}
        )
    }

}

let mascotas = ["Papelon"]

let libros = [
    {
        "nombre": "El asesino de Brujas",
        "autor": "Shelby Mahurin"
    }
]


const usuario1 = new Usuario('Mariana', 'Paez', libros, mascotas);

usuario1.addBook("Introduccion al spicoanalisis", "Sigmu Freud")

usuario1.addMascota("Alma")
usuario1.addMascota("Preciosa")

console.log(`Me llamno ${usuario1.getFullName()}` )

console.log(`Nombres de libros: ${ usuario1.getBookName() }` )

console.log(`Cantidad de Mascotas: ${ usuario1.countMascotas() }`);
