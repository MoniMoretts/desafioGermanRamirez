console.log(`El password es COMPRAR`)
function login(){
    let ingreso = prompt ("Para ingresar descubra el password oculto en console")
    if(ingreso=="COMPRAR")
    {
        alert("LOGIN EXITOSO")
        let numCompras = Number(prompt("ingrese el numero de compras que desea realizar"))
        let contador = 0;
        let total = 0;
        if (numCompras==NaN)
        {
            alert("ERROR, EL DATO INGRESADO ES INVALIDO")
            login()
        }
        else
        {
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
    else{
        alert("ERROR, PASSWORD INCORRECTO")
        login()
    }
}
login()
