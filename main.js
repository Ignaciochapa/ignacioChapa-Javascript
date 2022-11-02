let precioMilanesa = 5
let precioBife = 6
let precioFideos = 4
let precioBebida = 3
let resultado = 0

function suma (a,b) {
    resultado = a+b
}

let nombreCliente = prompt(`¡Hola!, como te llamas?`)

    while (nombreCliente != Number) {
        let pedido = prompt(nombreCliente + `, que quieres pedir hoy? 
        
        (ingrese 1, 2 o 3 segun corresponda)

        1) Milanesa con puré + bebida
        2) Bife con ensalada + bebida
        3) Fideos con salsa + bebida`)

        if (pedido == 1) {
            suma(precioMilanesa,precioBebida)
            alert(`El total de la factura es $` + resultado)
            alert(`Tu pedido se realizó con éxito`)
            console.log(pedido)
            break
        }

        if (pedido == 2) {
            suma(precioBife,precioBebida)
            alert(`El total de la factura es $` + resultado)
            alert(`Tu pedido se realizó con éxito`)
            console.log(pedido)
            break
        }

        if (pedido == 3) {
            suma(precioFideos,precioBebida)
            alert(`El total de la factura es $` + resultado)
            alert(`Tu pedido se realizó con éxito`)
            console.log(pedido)
            break
        } else {
            alert(`Por favor, ingrese una opción correcta`)
        }
    }

        let despedida = alert(`Muchas gracias ` + nombreCliente + `, aguarda un momento y ya sale tu pedido`)