nombre_invitado_array=[];
function agregar()
{
    var nombre_invitado=document.getElementById("nombre_invitado").value;
    console.log(nombre_invitado);
    nombre_invitado_array.push(nombre_invitado);

    document.getElementById("ver_invitados").innerHTML=nombre_invitado_array;
}
function ordenar()
{
    nombre_invitado_array.sort();
    var invitado_array_ordenar=[];
    
    var longitud_nombre_invitado_array=nombre_invitado_array.length;
    console.log(longitud_nombre_invitado_array);
    for(var k=0; k<longitud_nombre_invitado_array; k++)
    {
        invitado_array_ordenar.push( "<h4>Nombre invitado: "+nombre_invitado_array [k]+"</h4>");
    }
    var remover_comas=invitado_array_ordenar.join(" ");
    document.getElementById("ver_invitados_ordenados").innerHTML=remover_comas;
}
function buscar()
{
 var buscar_nombre_invitado=document.getElementById("buscar_invitado").value;
 var numero=0;
 for(var j=0; j<nombre_invitado_array.length; j++)
 {
     if(buscar_nombre_invitado==nombre_invitado_array[j])
     {
         numero=numero+1;
     }
 }
 document.getElementById("ver_nombres_buscados").innerHTML="El numero de personas con ese nombre son "+ numero;
}