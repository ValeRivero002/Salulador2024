function saludar (nombre, edad,genero)
{
  if (edad>30){
    
    if(genero=="masculino")
    {
      return "Sr "+ nombre;
    }
    if(genero=="femenino")
    {
      return "Sra "+ nombre;
    }
  }
  else{
    return nombre;
  }
}

export default saludar;
