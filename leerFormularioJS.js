function leerdatos() 
{
    var nom=document.forms["formulario"].elements[0].value;
    var clave=document.getElementById("contra").value;
    var car=document.getElementsByTagName("select")[0].value;
    var gen=document.getElementsByName("genero");
    for(i=0;i<gen.length;i++)
    {
        if (gen[i].checked)
        {
            var g=gen[i].value;
        }

    }
    var ok=document.getElementById("check").checked;
    document.getElementById("resultado").innerHTML= "\<br>Tu nombre:" + nom + "\<br>Tu contraseña:" + clave + "\<br>Tu carrera:" + car + "\b<br>Tu género: " + g + "\<br> Aceptado:" +ok;
}