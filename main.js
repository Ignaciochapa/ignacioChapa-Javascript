let nombreCliente = prompt(`¡Hola!, como te llamas?`)

    while (nombreCliente != Number) {
        let pedido = prompt(nombreCliente + `, que quieres pedir hoy? 
        
        (ingrese 1, 2 o 3 segun corresponda)

        1) Milanesa con puré
        2) Bife con ensalada
        3) Fideos con salsa`)

        if (pedido == 1) {
            alert(`Tu pedido se realizó con éxito`)
        }

        if (pedido == 2) {
            alert(`Tu pedido se realizó con éxito`)
        }

        if (pedido == 3) {
            alert(`Tu pedido se realizó con éxito`)
        } else {
            alert(`Por favor, ingrese una opción correcta`)
        }
    }

        let errorPedido = alert(`Por favor, ingrese su nombre`)

