console.log("Mi First JS");//se usa el metodo log de la clase consola para mostrar el mensaje ""
var resultado = window.confirm("¿Estas seguro?")//se le asigna el metodo confirm de la clase window a la variable 
//resultado recien creada de tipo var(global)
if(resultado==true)
{//si la var es verdadera, se muestra en la ventana emergente
    window.alert("Entonces estas seguro :D")
}
else
{//si la var es false se muestra el siguiente mensaje en la ventana emergente
    window.alert("Pareces indeciso...")
}
function calcular(numcalc)
{
    let mostrar="tabla del "+numcalc+"<br/><br/>";//una variable para mostrar cada renglon calculado de la tabla
    let mult=0;//la variable para almacenar el rresultado de la multiplicacion
    let i=0;//la variable que ingrementa y con la que se multiplica  el num ingresado
    do{
        mult=numcalc*i;//la multiplicacion es igual al numero a calcular por el valor en incremento
        mostrar=mostrar+numcalc+"*"+i+"="+mult+"<br/>";//mostrar ahora es igual a el num a calcular, su texto de visualizacion y el resultado de esa multiplicacion
        i++;//incremento el valor i
    }while(i<=20);//mientras i sea menor a 20
    //Se accede al DOM y en archivo HTML con <div id="data"
    let datos=document.getElementById("data");//la variable datos contiene lo obtenido en el div con id="data"
    datos.innerHTML=mostrar;//datos contiene la referencia al objeto en html a modificar, innerHTML es una propiedad que se encarga de  
    //acceder y modificar el contenido HTML dentro de ese elemento; y lo que se modificara en el id.modificar sera igual a lo contenido en la variable tipo let mostrar
}