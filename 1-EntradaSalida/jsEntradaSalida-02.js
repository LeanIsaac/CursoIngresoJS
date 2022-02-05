/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
en el prompt se puede poner un mensaje, estilos de la catedra lowcamelcase ,
buen uso de las variables declararlas pero no asignarlas */
function mostrar()
{
   //declaro la variable
   let nombreIngresado; 

   //guardo el nombre
	nombreIngresado = prompt("ingresa tu nombre");

    // muestro al usuario
    //concateno la variable con "+"
	alert ( "su nombre es: "+nombreIngresado);
}

