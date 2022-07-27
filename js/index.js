ingreso()

function ingreso() {
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    alert(`Bienvenido a Metropolis ${nombre + " " + apellido}`)
}


mostrarCategorias()


function mostrarCategorias() {
    const categorias = ["Indumentaria", "Calzado", "Accesorios"];

    categorias.forEach((categoria) => {
        mostrarCategoria(categoria);
    })


}



function mostrarCategoria(categoria) {
    const nodoMenu = document.getElementById("menu");
    const btn = document.createElement("button");
    btn.innerText = categoria;
    btn.classList.add("boton");
    btn.setAttribute("id", categoria);
    nodoMenu.classList.add("menu")

    btn.addEventListener("click", () => {
        mostrarProductos(categoria)
    })

    nodoMenu.appendChild(btn);
}

function mostrarProductos(categoria) {
    switch (categoria) {
        case "Indumentaria":
            mostrarIndumentaria();
            break;
        case "Calzado":
            mostrarCalzado();
            break;
        case "Accesorios":
            mostrarAccesorios();
            break;
        default:
            alert("Categoria Inválida")
            break;
    }
}

function mostrarIndumentaria() {
    const indumentaria = ["Jean:100usd", "Buzo:150usd", "Remera:50usd"]
    mostrarProductosCategoria(indumentaria)
}

function mostrarCalzado() {
    const calzado = ["Zapatilla:250usd", "Zapato:200usd", "Botas:400usd"]
    mostrarProductosCategoria(calzado)
}

function mostrarAccesorios() {
    const accesorios = ["Collar:20usd", "Pulsera:10usd"]
    mostrarProductosCategoria(accesorios)
}

function mostrarProductosCategoria(productos) {
    const nodoContenedor = document.getElementById("contenedor");
    nodoContenedor.innerText = "";
    productos.forEach((producto) => {
        const nodoDiv = document.createElement("div")
        nodoDiv.classList.add("lista");
        nodoDiv.innerText = producto;
        nodoContenedor.appendChild(nodoDiv)
    })
}

BotonComprar()

function BotonComprar() {
    const boton = document.getElementById("miBoton");

    boton.addEventListener("click", () => {
        comprar();
    }
    )

}

function comprar()
{
    let numCompras = prompt("Ingrese el numero de productos que desea comprar")
    let contador = 0;
    let total = 0;
    if (NaN)
        {
            alert("ERROR, EL DATO INGRESADO ES INVALIDO")
            comprar()
        }
    else{
        while(contador<numCompras)
            {
                let cifras = Number(prompt(`Ingrese el monto del producto ${contador+1}`))
                if (cifras>0){
                    total+=cifras
                }
                contador++;
            }
            alert(`Su monto total (mas iva incluido) es $${total+(total*21/100)}`)
            let cuotas = Number(prompt("Ingrese el numero de cuotas en las que desee abonar (1,3,6,9 o 12)"))
                switch(cuotas)
                {
                    case 1:
                        alert(`su monto final es $${total+(total*21/100)}`);
                        break;
                    case 3:
                        alert(`su total (mas iva incluido) son 3 cuotas de $${(total+(total*0.21))/3}`);
                        break;
                    case 6:
                        alert(`su total (mas iva incluido) son 6 cuotas de $${(total+(total*0.21))/6}`);
                        break;
                    case 9:
                        alert(`su total (mas iva incluido) son 9 cuotas de $${(total+(total*0.21))/9}`);
                        break;
                    case 12:
                        alert(`su total (mas iva incluido) son 12 cuotas de $${(total+(total*0.21))/12}`);
                        break;
                    default:
                        alert("ERROR, EL DATO INGRESADO ES INVALIDO")
                        login()
                        break;
                }      
    }
}


