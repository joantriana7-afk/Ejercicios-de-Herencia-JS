// 2.1 Clase base: Contenido

class Contenido{
    constructor (titulo, genero, anio){
        this.titulo = titulo
        this.genero = genero
        this.anio = anio
        this.disponible = true
    }

    ficha(){
        return "Nombre de la pelicula: " + this.titulo + ", el genero es: " + this.genero + " y su año de lanzamiento fue en el año : " + this.anio
    }

    retirar(){
        this.disponible = false
        return "Ya no esta disponible"
    }

    estado(){
        if (this.disponible){
            return "Disponible"
        }
        else{
            return "Retirado"
        }

        
        }
    }

    //2.2 Clases extendidas: Pelicula y Serie

class pelicula extends Contenido{
        constructor(titulo, genero, anio, duracion){
            super(titulo, genero, anio)
            this.duracion = duracion
        }

        duracionFormateada(){
            let horas = Math.floor(this.duracion / 60);
            let minutos = this.duracion % 60;

            return `${horas}h ${minutos}min`;
        }

        ficha(){
            return super.ficha() + ", duración: " + this.duracionFormateada();
        }
    }

class Serie extends Contenido{
        constructor(titulo, genero, anio, temporadas){
            super(titulo,genero, anio);
            this.temporadas = temporadas;
            this.episodiosPorTemporada = 0;

        }

        registrarEpisodios(cantidad){
            this.episodiosPorTemporada = cantidad;
        }   

        totalEpisodios(){
            return this.episodiosPorTemporada*this.temporadas
        }

        ficha(){
             return `${super.ficha()}, Temporadas: ${this.temporadas} Total episodios: ${this.totalEpisodios()} `
        }
    }      
        
    

    //2.3 Catalogo completo//

    //1. Creen al menos tres peliculas y tres series.

    let peli1 = new pelicula("Batman", "Acción", 2022, 135);
    let peli2 = new pelicula("Una voz silenciosa", " Animación", 2016, 130)
    let peli3 = new pelicula("Proyecto almanaque", "Ficción", 2015, 106)
    
    let serie1 = new Serie("juego de tronos", "Drama", 2011, 8);
    serie1.registrarEpisodios(73)
    let serie2 = new Serie("Fruits Basket ", "Anime", 2019, 3);
    serie2.registrarEpisodios(63)
    let serie3 = new Serie("Steins;Gate", "Anime", 2011, 2);
    serie3.registrarEpisodios(47)

    //Guarden todo en un array llamado catalogo
    
    let catalogo = [peli1, peli2, peli3, serie1, serie2, serie3]
    

    //3. Recorran el catalogo con un for e impriman la ficha() de cada elemento.

    for (let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i].ficha());
    }

    //4. Retiren dos contenidos e impriman su estado() para verificar..
    
    console.log(peli3.retirar())
    console.log(peli3.estado())
    console.log(serie1.retirar())
    console.log(serie1.estado())


    //5. Cuenten cuantos elementos siguen disponibles e impriman el resultado.

    let contador = 0;
    for (let i = 0; i < catalogo.length; i++){
        if (catalogo[i].disponible === true){
             contador++;
        }
           
    }
    console.log("Contenidos disponibles:", contador);
    

    


    
    
    

