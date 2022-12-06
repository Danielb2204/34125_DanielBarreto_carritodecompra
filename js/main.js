const productos = [
    {nombre: "harina", precio: 60},
    {nombre: "fideos", precio: 80},
    {nombre: "leche", precio: 40},
    {nombre: "coca-cola 2L", precio: 160},
    {nombre: "helado 2L", precio: 250},
];
let carrito = []

let seleccion = prompt("Hola, desea comprar algún producto? si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, ingresa si o no")
    seleccion = prompt("Hola, desea comprar algo? si o no")
}

if(seleccion == "si"){
    alert("A continuación nuestra lista de productos...")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "))
} else if(seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto!")
}

while(seleccion !="no"){
    let producto = prompt("Agregue un producto al carrito")
    let precio = 0

    if(producto == "harina" || producto == "fideos" || producto == "fideos" || producto == "leche" || producto == "coca-cola 2L" || producto == "helado 2L"){
        switch (producto){
            case "harina":
                precio = 60;
                break;
            case "fideos":
                precio = 80;
                break;
            case "leche":
                precio = 40;
                break;
            case "coca-cola 2L":
                precio = 160;
                break;
            case "helado 2L":
                precio = 250;
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
