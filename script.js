document.addEventListener("DOMContentLoaded", function() {

  const button = document.querySelector("button")
  
  button.addEventListener("click", function(){
    const id = button.getAttribute("data-id")
  
  if(button.classList.contains("liked")){
    button.classList.remove("liked")
    button.innerText ="Me gusta"
    
  }
  else{
    button.classList.add("liked")
    button.innerText ="Quitar me gusta"
  }
  })
  
  });
  


document.addEventListener("DOMContentLoaded", function(){

  const button = document.querySelector("button.verificar")
  button.addEventListener("click", function(){
  if(button.classList.contains("verificar")){   // revisar solo funciona cuando le doy 2 clics
    button.classList.remove("verificar")
    button.classList.add("Listo");
    button.innerText = "No listo"
  }
 
  
 
  else {
    button.classList.remove("Listo") //pista, tenia que borrar la clase verificar antes de 
                                         // añadir otra clase 
    button.classList.add("verificar");
    button.innerText = "Listo"; // Cambia el texto del botón a "Listo"
  }
  })
})