/* =========================
   OBTENER ELEMENTOS DEL HTML
========================= */

const tablaPedidos =
    document.getElementById("tablaPedidos");


/* =========================
   OBTENER PEDIDOS
========================= */

function obtenerPedidos() {

    return JSON.parse(
        localStorage.getItem("pedidosCoffeeCode")
    ) || [];

}


/* =========================
   GUARDAR PEDIDOS
========================= */

function guardarPedidos(pedidos) {

    localStorage.setItem(
        "pedidosCoffeeCode",
        JSON.stringify(pedidos)
    );

}


/* =========================
   MOSTRAR PEDIDOS
========================= */

function mostrarPedidos() {

    const pedidosGuardados =
        obtenerPedidos();


    /* Limpiar tabla */

    tablaPedidos.innerHTML = "";


    /* =========================
       NO HAY PEDIDOS
    ========================== */

    if (pedidosGuardados.length === 0) {

        tablaPedidos.innerHTML = `

            <tr>

                <td
                    colspan="4"
                    class="mensaje-vacio"
                >
                    No hay pedidos registrados.
                </td>

            </tr>

        `;

        return;
    }


    /* =========================
       MOSTRAR PEDIDOS
    ========================== */

    pedidosGuardados.forEach(
        function(pedido) {


            /*
               Convertir los productos
               del pedido en texto.
            */

            const productosTexto =
                pedido.productos
                    .map(
                        function(producto) {

                            return `
                                ${producto.cantidad}x
                                ${producto.nombre}
                            `;

                        }
                    )
                    .join("<br>");


            /*
               Crear fila.
            */

            const fila =
                document.createElement("tr");


            /* =========================
               BOTÓN SEGÚN EL ESTADO
            ========================== */

            let accion = "";


            if (pedido.estado === "Pendiente") {

                accion = `

                    <button
                        class="btn-enviar"
                        onclick="enviarACocina(${pedido.id})"
                    >
                        Enviar a cocina
                    </button>

                `;

            }

            else if (
                pedido.estado === "En preparación"
            ) {

                accion = `

                    <span class="estado-proceso">
                        En preparación
                    </span>

                `;

            }

            else {

                accion = `

                    <span class="estado-proceso">
                        ${pedido.estado}
                    </span>

                `;

            }


            /* =========================
               CONTENIDO DE LA FILA
            ========================== */

            fila.innerHTML = `

                <td>
                    Pedido #${pedido.id}
                </td>

                <td>
                    ${productosTexto}
                </td>

                <td>
                    $${pedido.total.toFixed(2)}
                </td>

                <td>

                    <div>

                        <div>
                            ${pedido.estado}
                        </div>

                        <div>
                            ${accion}
                        </div>

                    </div>

                </td>

            `;


            tablaPedidos.appendChild(fila);

        }
    );

}


/* =========================
   ENVIAR PEDIDO A COCINA
========================= */

function enviarACocina(idPedido) {

    const pedidos =
        obtenerPedidos();


    /*
       Buscar el pedido seleccionado.
    */

    const pedido =
        pedidos.find(
            function(pedido) {

                return pedido.id === idPedido;

            }
        );


    /* Comprobar que exista */

    if (!pedido) {

        alert(
            "No se encontró el pedido."
        );

        return;
    }


    /*
       Cambiar el estado.
    */

    pedido.estado =
        "En preparación";


    /*
       Guardar el cambio.
    */

    guardarPedidos(pedidos);


    /*
       Actualizar la tabla.
    */

    mostrarPedidos();


    /*
       Mostrar confirmación.
    */

    alert(
        `El Pedido #${pedido.id} fue enviado a cocina.`
    );


    console.log(
        "Pedido enviado a cocina:",
        pedido
    );

}


/* =========================
   ACTUALIZAR CUANDO CAMBIAN
   LOS PEDIDOS
========================= */

window.addEventListener(
    "storage",
    function(evento) {

        if (
            evento.key ===
            "pedidosCoffeeCode"
        ) {

            mostrarPedidos();

        }

    }
);


/* =========================
   INICIAR CAJA
========================= */

mostrarPedidos();


console.log(
    "Coffee Code - Área Caja iniciada."
);