function saludar (nombre, edad, genero)
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

export default saludar;
