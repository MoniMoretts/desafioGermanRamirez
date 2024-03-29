let nombre = localStorage.getItem("nombre") || prompt("Ingrese su nombre");

nombre !== "" && localStorage.setItem("nombre", nombre)
nombre !== "" && saludarUsuario();

function saludarUsuario() {

    swal({title:`Que bueno verte ${nombre}!`,
icon:"success"});

}

titulo()

function titulo() {
    const a = document.getElementById("titulo")
    const h1 = document.getElementById("fondoTitulo")
    a.addEventListener("mouseenter", () => {
        a.setAttribute("style", "color:black")
    });
    h1.addEventListener("mouseenter", () => {
        h1.setAttribute("style", "background-color:white")
    })
}

tituloReturn()

function tituloReturn() {
    const a = document.getElementById("titulo")
    const h1 = document.getElementById("fondoTitulo")
    a.addEventListener("mouseleave", () => {
        a.setAttribute("style", "color:white")
    });
    h1.addEventListener("mouseleave", () => {
        h1.setAttribute("style", "background-color:rgba(0, 0, 0, 0.767)")
    })
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
            swal({text:"Categoria Inválida",
        icon:"error"})
            break;
    }
}
const indumentaria1 = {
    prenda: "Jean",
    valor: "9000ars"
}
const indumentaria2 = {
    prenda: "Buzo",
    valor: "15000ars"
}
const indumentaria3 = {
    prenda: "Remera",
    valor: "5000ars"
}
const indumentaria = [indumentaria1.prenda, indumentaria1.valor, indumentaria2.prenda, indumentaria2.valor, indumentaria3.prenda, indumentaria3.valor]

function mostrarIndumentaria() {

    mostrarProductosCategoria(indumentaria)
}

const calzado1 = {
    prenda: "Jordan 3",
    valor: ("40000ars")
}
const calzado2 = {
    prenda: "Botas Dr Martens",
    valor: "50000ars"
}
const calzado3 = {
    prenda: "Vans Classic",
    valor: "13000ars"
}

const calzado = [calzado1.prenda, calzado1.valor, calzado2.prenda, calzado2.valor, calzado3.prenda, calzado3.valor]

function mostrarCalzado() {

    mostrarProductosCategoria(calzado)
}

const accesorio1 = {
    prenda: "Collar Plata",
    valor: "1500ars"
}
const accesorio2 = {
    prenda: "Collar Oro",
    valor: "10000ars"
}
const accesorio3 = {
    prenda: "Pulsera Plata",
    valor: "500ars"
}

const accesorios = [accesorio1.prenda, accesorio1.valor, accesorio2.prenda, accesorio2.valor, accesorio3.prenda, accesorio3.valor]

function mostrarAccesorios() {

    mostrarProductosCategoria(accesorios)
}

function mostrarProductosCategoria(productos) {
    const nodoContenedor = document.getElementById("contenedor");
    nodoContenedor.innerText = "";
    productos.forEach((producto) => {
        const nodoDiv = document.createElement("div")
        nodoDiv.classList.add("lista");
        nodoDiv.innerText = JSON.stringify(producto);
        nodoContenedor.appendChild(nodoDiv)
    })
}

otrosProductos()

function otrosProductos() {
    const btn = document.getElementById("otros");
    btn.addEventListener("click", () => {
        cargarProductosExtras();
    })
}

async function cargarProductosExtras() {
    let res = await fetch(`https://fakestoreapi.com/products`)
    let json = await res.json();
    mostrarProductosExtras(json);
}

function mostrarProductosExtras(extras) {
    const div = document.getElementById("extras");
    div.innerHTML = "";
    extras.forEach((extra) => {
      mostrarProductoExtra(extra);
    })
  }

  function mostrarProductoExtra(extra) {
    const div = document.getElementById("extras");
    const nodoExtra = document.createElement("div")
    
    nodoExtra.innerHTML = `<h3>${extra.title}</h3>
                        <p>${extra.price}</p>`
    div.appendChild(nodoExtra);
  }

BotonComprar()

function BotonComprar() {
    const boton = document.getElementById("miBoton");

    boton.addEventListener("click", () => {
        comprar();
    }
    )

}

function comprar() {
    let numCompras = prompt("Ingrese la cantidad de productos que desea comprar")
    let contador = 0;
    let total = 0;
    if (NaN) {
        swal({text:"ERROR, EL DATO INGRESADO ES INVALIDO",
        icon:"error"
    })
        comprar()
    }
    else {
        while (contador < numCompras) {
            let cifras = Number(prompt(`Ingrese el monto del producto ${contador + 1} ${JSON.stringify(indumentaria + " " + calzado + " " + accesorios)}`))
            let validarMonto = cifras = isNaN ? montos() : swal({text:"Su monto es invalido",
        icon:"error"});
            function montos() {
                let montos = cifras > 0 ? total += cifras : swal({text:"Su monto es invalido", icon:"error"});
            }
            contador++;
        }
        swal({text:`Su monto total (mas iva incluido) es $${total + (total * 21 / 100)}`});
        let cuotas = Number(prompt("Ingrese el numero de cuotas en las que desee abonar (1,3,6,9 o 12)"))
        switch (cuotas) {
            case 1:
                swal(`su monto final es $${total + (total * 21 / 100)}`);
                break;
            case 3:
                swal(`su total (mas iva incluido) son 3 cuotas de $${(total + (total * 0.21)) / 3}`);
                break;
            case 6:
                swal(`su total (mas iva incluido) son 6 cuotas de $${(total + (total * 0.21)) / 6}`);
                break;
            case 9:
                swal(`su total (mas iva incluido) son 9 cuotas de $${(total + (total * 0.21)) / 9}`);
                break;
            case 12:
                swal(`su total (mas iva incluido) son 12 cuotas de $${(total + (total * 0.21)) / 12}`);
                break;
            default:
                swal("ERROR, EL DATO INGRESADO ES INVALIDO")
                break;
        }
    }
}


