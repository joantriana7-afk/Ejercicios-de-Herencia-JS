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
        super(nombre, salario);
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
        
    }

}

let lider1 = new Lider("Ana", "8000000", ["Joan"])
lider1.agregarMiembro("Yessica")

console.log(lider1.presentarEquipo());





    