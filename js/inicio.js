const btnIngresar = document.getElementById("ingresar"),
      user = document.querySelector("#user"),
      pass = document.querySelector("#pass");
      

      //Funciones

function inicioSesion(usuarios){
    let userFound = usuarios.find(usuario => {
        return usuario.nombre === user.value && usuario.pass === pass.value;
    });
    if(userFound){
        window.location.href = "./carrito.html"
    }else{
        document.querySelector("#mensaje").innerText = "Usuario no encontrado";
    }
}

function recuperarLS(){
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

//Ej de funciones

const usuariosLS = recuperarLS();

//Eventos
btnIngresar.addEventListener("click", (e) => {

    e.preventDefault
    inicioSesion(usuariosLS)
});
