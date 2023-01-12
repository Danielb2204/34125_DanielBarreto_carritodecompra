const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal_container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
    {id: 1, nombre: "pelota mikasa", precio: 4000, img: "../img/mikasa_piso.jpg", cantidad: 1},
    {id: 2, nombre: "pelota mikasa playa", precio: 2000, img: "../img/mikasa_playa.jpg", cantidad: 1},
    {id: 3, nombre: "pelota molten 4500", precio: 3000, img: "../img/molten_4500.jpg", cantidad: 1},
    {id: 4, nombre: "pelota molten 5000", precio: 3500, img: "../img/molten_5000.jpg", cantidad: 1},
    {id: 5, nombre: "botas mizuno", precio: 9500, img: "../img/botas_mizuno.png", cantidad: 1},
    {id: 6, nombre: "botas asics", precio:10000, img: "../img/botas_asics.jpg", cantidad: 1},
    {id: 7, nombre: "rodilleras mikasa", precio: 1500, img: "../img/rodilleras_mikasa.jpg", cantidad: 1},
    {id: 8, nombre: "rodilleras asics", precio: 1500, img: "../img/rodilleras_asics.jpg", cantidad: 1},
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        console.log(carrito.length);
        saveLocal();
        carritoCounter();
        
    });
}); 

/*set item*/

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

/*get item*/

JSON.parse(localStorage.getItem("carrito"));


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
