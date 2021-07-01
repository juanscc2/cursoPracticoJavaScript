//Codigo del cuadrado
//Abrimos
console.group("Cuadrados");

//console.log("Los lados del cuadrado miden: "+ladoCuadrado+ "cm");

function perimetroCuadrado(lado){
return lado*4;
}


function areaCuadrado(lado){
    return lado*lado;
}

//Cerramos
console.groupEnd();
//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1= 6;
const ladoTriangulo2=6;
const baseTriangulo=4;




    const alturaTriangulo=5.5;
    

    function perimetroTriangulo(lado1,lado2,base){
return lado1+lado2+base;
    }
    

    function areaTriangulo(base,altura){
        return (baseTriangulo*alturaTriangulo)/2;
    }
    

     
    console.groupEnd();
    
console.group("Circulo");

function diametroCirculo(radio){
    return radio*2;
}

//PI
const PI= Math.PI; 
console.log("PI es :"+PI )
//Circunferencia
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}

//Area
function areaCirculo(radio){
    return(radio*radio)*PI;
};
console.groupEnd();
//Triangulo Isosceles
function alturaTrianguloIsosceles(lado1,lado2,baseTriangulo){
    if(lado1==lado2&&lado1==baseTriangulo){
        alert('Es un triangulo isosceles');
        const altura=Math.sqrt(lado1**2-baseTriangulo*2/4)
        console.log(altura)
    }else{
        alert("No es un triangulo isosceles");
    }
   

}
alturaTrianguloIsosceles(6,6,4)

//Aqui interacturamos con el HTML
function calcularPerimetroCuadrado(){
const input=document.getElementById("InputCuadrado");
const value=input.value;

const perimetro=perimetroCuadrado(value);
alert(perimetro);
}
function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    
    const area=areaCuadrado(value);
    alert(area);
}
//Triangulo
function calcularPerimetroTriangulo(){
    const input1=document.getElementById("InputTriangulo1")
    const value1=Number(input1.value);
    const input2=document.getElementById("InputTriangulo2")
    const value2=Number(input2.value);
    const base=document.getElementById("InputBaseTriangulo")
    const value3=Number(base.value);
    const perimetro=perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es :" + perimetro);


}
function calcularAreaTriangulo(){
    const input1=document.getElementById("InputTriangulo1")
    const value1=Number(input1.value);
    const input2=document.getElementById("InputTriangulo2")
    const value2=Number(input2.value);
    const base=document.getElementById("InputBaseTriangulo")
    const value3=Number(base.value);
    const area=areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es :"+area);

}
//Circulo
function calcularPerimetroCirculo(){
    const input=document.getElementById("InputCirculo");
    const value=input.value;
    
    const perimetro=perimetroCirculo(value);
    alert("El perimetro del circulo es: "+perimetro);
    }
    function calcularAreaCirculo(){
        const input=document.getElementById("InputCirculo");
        const value=input.value;
        
        const area=areaCirculo(value);
        alert("El area del circulo es :"+area);
    }





















console.groupEnd();

    

    
