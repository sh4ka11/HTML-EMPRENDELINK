function logear(){

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contraseña").value;
    
    if(user== "dayron" && pass=="mona"){
    
      window.location="home_inversor.html ";
    
    }
    else{
      alert("usuario no encontrado, verifique sus datos");
    }
    }