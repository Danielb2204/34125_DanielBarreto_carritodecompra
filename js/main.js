const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal_container");

const productos = [
    {id: 1, nombre: "pelota mikasa", precio: 4000, img: "../img/mikasa_piso.jpg"},
    {id: 2, nombre: "pelota mikasa playa", precio: 2000, img: "../img/mikasa_playa.jpg"},
    {id: 3, nombre: "pelota molten 4500", precio: 3000, img: "../img/molten_4500.jpg"},
    {id: 4, nombre: "pelota molten 5000", precio: 3500, img: "../img/molten_5000.jpg"},
    {id: 5, nombre: "botas mizuno", precio: 9500, img: "../img/botas_mizuno.png"},
    {id: 6, nombre: "botas asics", precio:10000, img: "../img/botas_asics.jpg"},
    {id: 7, nombre: "rodilleras mikasa", precio: 1500, img: "../img/rodilleras_mikasa.jpg"},
    {id: 8, nombre: "rodilleras asics", precio: 1500, img: "../img/rodilleras_asics.jpg"},
];

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
}); 

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
   const modalHeader = document.createElement("div");
   modalHeader.className = "modal_header";
   modalHeader.innerHTML = `
   <h1 class="modal_header_title">Carrito.</h1>
   `;
   modalContainer.append(modalHeader);

   const modalButton = document.createElement("h1");
   modalButton.innerText = "x";
   modalButton.className = "modal_header_button";

   modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
   });

   modalHeader.append(modalButton);
   
   carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
   carritoContent.className = "modal_content";
   carritoContent.innerHTML = `
   <img src="${product.img}">
   <h3>${product.nombre}</h3>
   <p>${product.precio} $</p>
   `;

   modalContainer.append(carritoContent);
   });

   const total = carrito.reduce((acc, el) => acc + el.precio, 0);

   const totalBuying = document.createElement("div");
   totalBuying.className = "total_content";
   totalBuying.innerHTML = `total a pagar: ${total} $`;
   modalContainer.append(totalBuying);
});


//Funcion constructora
function producto(nombre, precio, img){
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    if(this.img === undefined){
        this.img = "https://https://via.placeholder.com/300";
    } else{
        this.img = img;
    }
}

//Funciones de filtrado

console.log(productos);

function findProduct(arr, filtro){
    const encontrado = arr.find((product)=>{
        return product.nombre.includes(filtro.toLowerCase())
    })
    return encontrado;
}
//let buscar = prompt("Ingresa el nombre del producto")
const prodEncontrado = findProduct(productos, buscar)
console.log(prodEncontrado);

//Funcion de filtrado generica

function filtrar(arr, filtro, param){
    return arr.filter((el)=>{
        if(param == "precio"){
            return el[param] <= filtro;
        } else if (param === "id"){
            return el[param] == filtro;
        } else{
            return el[param].includes(filtro);
        }
    });
}

//Filtrar por precio
const porPrecio = filtrar(productos, 7000, "precio")

console.log(porPrecio);

//Filtrar por ID
const porId = filtrar(productos, 3, "id")

console.log(porId);

//Filtrar por nombre
const porNombre = filtrar(productos, "mi", "nombre")
 console.log(porNombre);
