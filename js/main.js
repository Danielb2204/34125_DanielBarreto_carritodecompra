const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
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
    console.log("prueba");
});

let seleccion = prompt("Hola, desea comprar algún producto? si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, ingresa si o no");
    seleccion = prompt("Hola, desea comprar algo? si o no");
}

if(seleccion == "si"){
    alert("A continuación nuestra lista de productos...");
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "));
} else if(seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto!");
}

while(seleccion !="no"){
    let producto = prompt("Agregue un producto al carrito");
    let precio = 0;

    if(producto == "pelota mikasa" || producto == "pelota mikasa playa" || producto == "pelota molten 4500" || producto == "pelota molten 5000" || producto == "botas mizuno" || producto == "botas asics" || producto == "rodilleras mikasa" || producto == "rodilleras asics"){
        switch (producto){
            case "pelota mikasa":
                precio = 4000;
                break;
            case "pelota mikasa playa":
                precio = 2000;
                break;
            case "pelota molten 4500":
                precio = 3000;
                break;
            case "pelota molten 5000":
                precio = 3500;
                break;
            case "botas mizuno":
                precio = 9500;
                break;
            case "botas asics":
                precio = 10000;
                break;
            case "rodilleras mikasa":
                precio = 1500;
                break;
            case "rodilleras asics":
                precio = 1500;
                break;
                default:
                    break;   
        }
     let unidades = parseInt(prompt("Cuántas unidades quiere llevar?"))

     carrito.push({producto, unidades, precio})
     console.log(carrito)
    } else{
        alert("No tenemos ese producto :(")
    }

    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por la compra! hasta pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)

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

