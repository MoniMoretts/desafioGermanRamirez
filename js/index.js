console.log(`El password es COMPRAR`)
let ingreso = prompt ("Para ingresar descubra el password oculto en console")
if(ingreso=="COMPRAR")
{
    alert("LOGIN EXITOSO")
    let numCompras = Number(prompt("ingrese el numero de compras que desea realizar"))
    let contador = 0;
    let total = 0;
    if (numCompras==NaN)
    {
        alert("ERROR, VUELVE A CARGAR LA PAGINA")
    }
    else
    {
        while(contador<numCompras)
        {
            let cifras = Number(prompt(`Ingrese el monto del producto ${contador+1}`))
            if(cifras>0)
            {
                total=(cifras+=total)
            }
            contador++;
        }
            alert(`Su monto total (mas iva incluido) es $${total+(total*21/100)}`)
            let cuotas = Number(prompt("Ingrese el numero de cuotas en las que desee abonar (1,3,6,9 o 12)"))
            if(cuotas===1){
                alert(`su monto final es $${total+(total*21/100)}`)
            }
            else if(cuotas===3){
                alert(`su total (mas iva incluido) son 3 cuotas de $${(total+(total*21/100))/3}`)
            }
            else if(cuotas===6){
                alert(`su total (mas iva incluido) son 6 cuotas de $${(total+(total*21/100))/6}`)
            }
            else if(cuotas===9){
                alert(`su total (mas iva incluido) son 9 cuotas de $${(total+(total*21/100))/9}`)
            }
            else if(cuotas===12){
                alert(`su total (mas iva incluido) son 12 cuotas de $${(total+(total*21/100))/12}`)
            }
            else{
                alert("INCORRECTO, VUELVA A CARGAR LA PAGINA")
            }
        }
}
else{
    alert("ERROR, PASSWORD INCORRECTO")
    alert("VUELVA A CARGAR LA PAGINA")
}

