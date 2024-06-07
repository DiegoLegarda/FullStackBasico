function cambioPepito(){
    document.getElementById('texto').innerHTML = "Este es el nuevo título";    
    document.getElementById('pepito').innerHTML = "hola mundo";
    document.getElementById('pepito').style.color="red";
    document.getElementById('pepito').style.fontSize="40px";
    document.getElementById('pepito').style.fontWeight="bold"; 
}
function cambioTitulo(){
    document.getElementById('texto').innerHTML = "otro titulo";
}
/*
x=3;
y=4;
z=x+y;
console.log(z);*/
nombre="juan";
edad=24;
edad=2;
console.log("hola "+nombre+" tienes "+edad+" años");
document.getElementById('boton').addEventListener('click',cambioPepito);
document.getElementById('boton2').addEventListener('click',cambioTitulo);
let a=9;
let b=7;

//esta función suma dos valores internos
function suma(){
    let operandoA=3,operandoB=5;                         
    let resultado=operandoA+operandoB;    
    console.log(resultado);    
}
let operandoA=5;
const z=23;
//let z=4;
const paises=["Colombia","Perú","Brasil"];
console.log(paises[1]);
paises[1]="Ecuador";
console.log(paises[1]);
console.log(paises);
paises.push("Panamá");
console.log(paises);

document.getElementById('sumar').addEventListener('click',suma);

const automovil={marca:"Fiat",modelo:2024,color:"Azul",dueño:"Juan",vendido:false};
const automovil2={marca:"mazda",modelo:2010,color:"Gris",dueño:"Carlos",vendido:true};
const autos=[automovil,automovil2];
console.log(autos);
console.log(automovil);
console.log(automovil.color);
automovil.color="Rojo";
console.log(automovil.color);
automovil.kilometraje=300;
console.log(automovil);
const parte1="hola";
const parte2=" mundo";
const frase=parte1+parte2;
console.log(frase);
const numeroA=15;
const numeroB=16;
const resultado=numeroA+numeroB;
console.log(resultado);