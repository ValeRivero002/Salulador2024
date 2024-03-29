function saludar_es (nombre, edad, genero)
{
  var fechaHoraActual = new Date();
  var hora = fechaHoraActual.getHours();
  var saludar;
  if(hora >= 12 && hora<19) 
  {
    saludar="Buenos tardes";
  }
  if(hora >= 19 && hora < 0)
  {
    saludar="Buenos noches";
  }
  if(hora >= 0 && hora<12 )
  {
    saludar="Buenos dias";
  }
  if ( edad>30 ){

    if(genero=="masculino")
    {
      return  saludar + " Sr "+ nombre ;
    }
    if(genero=="femenino")
    {
      return saludar + " Sra "+ nombre;
    }
  }
  else{
    return saludar + " " + nombre;
  }
}

function saludar_en (nombre,edad,genero)
{
  
  var fechaHoraActual = new Date();
  var hora = fechaHoraActual.getHours();
  var saludar;
  if(hora >= 12 && hora<19) 
  {
    saludar="Good Afternoon";
  }
  if(hora >= 19 && hora < 0)
  {
    saludar="Good Night";
  }
  if(hora >= 0 && hora<12 )
  {
    saludar="Good Morning";
  }
  if ( edad>30 ){

    if(genero=="male")
    {
      return  saludar + " Mr "+ nombre ;
    }
    if(genero=="female")
    {
      return saludar + " Mrs "+ nombre;
    }
  }
  else{
    return saludar + " " + nombre;
  }
 
}
export { saludar_es, saludar_en };
