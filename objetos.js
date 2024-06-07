class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        const mensaje = `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
        console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años');
        return mensaje;
    }
}

const persona1 = new Persona("juan", 23);
const persona2 = new Persona("maria", 25);
persona1.saludar();
persona2.saludar();

persona1.nombre = "pedro";
persona1.edad = 30;
persona1.saludar();



function crearPersona() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    const persona3 = new Persona(nombre, edad);
    console.log(persona3.edad);
    const saludo = persona3.saludar();
    document.getElementById('salida').innerHTML = saludo;
}

document.getElementById('ejecutar').addEventListener('click', crearPersona);



//***************************************************************** */
//      creacion de la clase Estudiante

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    saludoEstudiante() {
        const mensaje = `Hola, soy ${this.nombre} y tengo ${this.edad} años y estudio ${this.curso}`;
        console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años y estudio ' + this.curso);
        return mensaje;
    }
}

const estudiante1 = new Estudiante("Pedro", 23, "programacion");
const estudiante2 = new Estudiante("Maria", 25, "diseño");

console.log(estudiante1.saludar());
console.log(estudiante1.saludoEstudiante());
console.log(estudiante1.nombre);
console.log(estudiante1.edad);
console.log(estudiante1.curso);

//************************************************************* */
//              polimorfismo clase animal

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        return "El animal hace ruido";
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    hacerSonido() {
        return "guau guau";
    }
}

class Gato extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    hacerSonido() {
        return "miau miau";
    }
}

const paco = new Perro("paco", "labarador");
console.log(paco.hacerSonido());
const mono= new Gato("mono","persa");
console.log(mono.hacerSonido());