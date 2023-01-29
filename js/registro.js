const register = document.querySelector(".register"),
email = document.querySelector("#email"),
nombre = document.querySelector("#nombre"),
userReg = document.querySelector("#userReg"),
passReg = document.querySelector("#passReg"),
btnRegistrar = document.querySelector("#registrar");

let usuarios;

if(localStorage.getItem(usuarios)){
    usuarios = JSON.parse(localStorage.getItem(usuarios));
}else{
    usuarios = [];
}
//Constru de User
class Usuario {
    constructor(nombre, usuario, email, password) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.pass = password;
    }
}
//Limpiar campos
function limpiarCampos(){
    nombre.value = "";
    userReg.value = "";
    passReg.value = "";
    email.value = "";
}

// Save user
function guardarUsuario(usuario){
    return usuarios.push(usuario)
}
//Save in LS
function guardarStorage(elemento){
    return localStorage.setItem('usuarios', JSON.stringify(elemento))
}


//Evento
btnRegistrar.addEventListener("click",(e) => {
    e.preventDefault
    let newUser = new Usuario(nombre.value, userReg.value, email.value, passReg.value);
    console.log(newUser);
    guardarUsuario(newUser);
    guardarStorage(usuarios);
});