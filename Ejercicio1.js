/** 
 * Van a modelar el sistema de empleados de una empresa de tecnologia. La empresa tiene empleados
regulares y empleados que lideran equipos. Ambos comparten caracteristicas comunes, pero los lideres tienen
responsabilidades adicionales
 */

class Empleados{
    constructor (nombre, cargo, salario){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }

    presentarse(){
        return "empleado: " + this.nombre +", mi cargo es: " + this.cargo
    }
    
    calcularSalarioAnual(){
        return "tu salario anual: " + parseFloat(this.salario) * 12  
    }

    desactivar(){
        this.activo = false;
        return "correctamente descativado: " 
    }

    info(){
        return `nombre: ${this.nombre}, cargo: ${this.cargo}, salario: ${this.salario}, activo: ${this.activo}`
        
    }

}

let empleado1 = new Empleados("Daniel", "Desarrollador Junior", "5000000")
console.log(empleado1.presentarse());
console.log(empleado1.calcularSalarioAnual());
console.log(empleado1.info());

let empleado2 = new Empleados("Yessica", "Desarrollador Junior", "4500000")
console.log(empleado2.presentarse());
console.log(empleado2.calcularSalarioAnual());
console.log(empleado2.info());

let empleado3 = new Empleados("Joan", "Desarrollador Junior", "3000000")
console.log(empleado3.presentarse());
console.log(empleado3.calcularSalarioAnual());
console.log(empleado3.info());


class Lider extends Empleados{
    constructor(nombre, salario, equipo){
        super(nombre, "Lider de equipo", salario);
        this.equipo = equipo
        this.cargo = "Lider de equipo"
    }

    presentarEquipo(){
        return `El equipo de ${this.nombre} son: ${this.equipo.join(", ")}`
    }

    agregarMiembro(nombre){
        this.equipo.push(nombre)
        return "empleado agregado"
    }

    info(){
        let miembros = super.info();
        return miembros
    }

}

let lider1 = new Lider("Ana", "8000000", ["Joan"])
lider1.agregarMiembro("y Yessica")

console.log(lider1.info());
console.log("En el quipo hay un total de: " + lider1.equipo.length + " miembros");
console.log(lider1.presentarEquipo());

// creacion del 4 empleao y 2 lider
let empleado4 = new Empleados("Luis", "Desarrollador Junior", "5000000")
let lider2 = new Lider("Pablo", "8500000", ["Dani"])

//Nomina mensual
let total = 0;

total = total + parseFloat(empleado1.salario);
total = total + parseFloat(empleado2.salario);
total = total + parseFloat(empleado3.salario);
total = total + parseFloat(empleado4.salario);
total = total + parseFloat(lider1.salario);
total = total + parseFloat(lider2.salario);

//Costo anual
console.log("Costo mensual total:", total);
console.log("Costo anual total:", total * 12);

//Desactivar empleado
empleado2.desactivar();
console.log(empleado2.info());

//Mostrar lideres.
console.log(lider1.info());
console.log(lider1.presentarEquipo());

console.log(lider2.info());
console.log(lider2.presentarEquipo());

















    