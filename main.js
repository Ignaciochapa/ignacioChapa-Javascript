let nombreCliente = prompt(`¡Hola!, como te llamas?`)

    while (nombreCliente != Number) {
        let pedido = prompt(nombreCliente + `, que quieres pedir hoy? 
        
        (ingrese 1, 2 o 3 segun corresponda)

        1) Milanesa con puré
        2) Bife con ensalada
        3) Fideos con salsa`)

        if (pedido == 1) {
            alert(`Tu pedido se realizó con éxito`)
            console.log(pedido)
            break
        }

        if (pedido == 2) {
            alert(`Tu pedido se realizó con éxito`)
            console.log(pedido)
            break
        }

        if (pedido == 3) {
            alert(`Tu pedido se realizó con éxito`)
            console.log(pedido)
            break
        } else {
            alert(`Por favor, ingrese una opción correcta`)
        }
    }

        let despedida = alert(`Muchas gracias ` + nombreCliente + `, aguarda un momento y ya sale tu pedido`)