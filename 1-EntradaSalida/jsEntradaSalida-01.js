/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	//variables de entrada
	let nameProductOne;
	let nameProductTwo;
	let nameProductThree;
    let PrimerProducto;
    let segundoProducto;
    let tercerProducto;
    let pedirPorcentaje;

    //variables de salida
    let precioBruto;
    let promedio;
    let precioConIva;
    
    //declaro mis variables
    nameProductOne = prompt("Ingrese Nombre Del Producto");
    PrimerProducto = prompt("Primer Producto");
    nameProductTwo = prompt("Ingrese Nombre Del Producto");
    segundoProducto = prompt("segundo Producto");
    nameProductThree = prompt("Ingrese Nombre Del Producto");
    tercerProducto = prompt("tercer Producto");
    pedirPorcentaje = prompt("Ingrese Porcentaje");

    
    //convierto texto a numeros
    PrimerProducto = parseFloat(PrimerProducto);
    segundoProducto = parseFloat(segundoProducto);
    tercerProducto = parseFloat(tercerProducto);
    pedirPorcentaje = parseInt(pedirPorcentaje);


    //sumo los 3 productos
    precioBruto = PrimerProducto+ segundoProducto+ tercerProducto;
 
    //saco el promedio del precio bruto
    promedio = precioBruto /3;


    // al precio bruto le sumo el 21%
    precioConIva = precioBruto*1.21;


    pedirPorcentaje = precioConIva-(pedirPorcentaje/100);
 

	alert("El precio del Primer Producto es: "+ nameProductOne + PrimerProducto +  " segundo precio "+ nameProductTwo + segundoProducto + 
		" tercer precio "+ nameProductThree + tercerProducto + " El precio bruto es: "+ precioBruto+ " El promedio es:"+
		 promedio+ " El precio total con IVA es "+ precioConIva+ " El precio con Descuento es "+ pedirPorcentaje );
}

/* 
en este programa uso el alert y muestro un mensaje al usuario
*/