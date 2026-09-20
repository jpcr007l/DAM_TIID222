/* =========================
   LISTA DE PRODUCTOS
========================= */

let listaCocina =
    JSON.parse(
        localStorage.getItem(
            "productosCoffeeCode"
        )
    ) || [

        {
            nombre: "Café Americano",
            precio: 35,
            categoria: "Bebidas"
        },

        {
            nombre: "Sándwich de Jamón",
            precio: 55,
            categoria: "Alimentos"
        }

    ];


/* =========================
   ELEMENTOS DEL HTML
========================= */

const form =
    document.getElementById(
        "product-form"
    );


const tabla =
    document.getElementById(
        "tabla-productos"
    );


const inputIndex =
    document.getElementById(
        "prod-index"
    );


const inputNombre =
    document.getElementById(
        "prod-nombre"
    );


const inputPrecio =
    document.getElementById(
        "prod-precio"
    );


const inputCategoria =
    document.getElementById(
        "prod-categoria"
    );


const formTitle =
    document.getElementById(
        "form-title"
    );


const btnSave =
    document.getElementById(
        "btn-save"
    );


const tablaPedidos =
    document.getElementById(
        "tabla-pedidos"
    );


/* =========================
   GUARDAR PRODUCTOS
========================= */

function guardarProductos() {

    localStorage.setItem(
        "productosCoffeeCode",
        JSON.stringify(
            listaCocina
        )
    );

}


/* =========================
   MOSTRAR PRODUCTOS
========================= */

function listarProductos() {

    tabla.innerHTML = "";


    listaCocina.forEach(
        function(producto, index) {

            const fila =
                document.createElement(
                    "tr"
                );


            fila.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${producto.nombre}
                </td>

                <td>
                    $${parseFloat(
                        producto.precio
                    ).toFixed(2)}
                </td>

                <td>
                    ${producto.categoria}
                </td>

                <td>

                    <button
                        class="btn-edit"
                        onclick="cargarParaEditar(${index})"
                    >
                        Editar
                    </button>


                    <button
                        class="btn-delete"
                        onclick="eliminarProducto(${index})"
                    >
                        Eliminar
                    </button>

                </td>

            `;


            tabla.appendChild(
                fila
            );

        }
    );

}


/* =========================
   AGREGAR / EDITAR PRODUCTO
========================= */

form.addEventListener(
    "submit",
    function(evento) {

        evento.preventDefault();


        const nombre =
            inputNombre.value;


        const precio =
            parseFloat(
                inputPrecio.value
            );


        const categoria =
            inputCategoria.value;


        const index =
            inputIndex.value;


        /* =====================
           AGREGAR PRODUCTO
        ====================== */

        if (index === "") {

            const nuevoProducto = {

                nombre: nombre,

                precio: precio,

                categoria: categoria

            };


            listaCocina.push(
                nuevoProducto
            );

        }


        /* =====================
           EDITAR PRODUCTO
        ====================== */

        else {

            listaCocina[index].nombre =
                nombre;


            listaCocina[index].precio =
                precio;


            listaCocina[index].categoria =
                categoria;


            inputIndex.value = "";


            formTitle.textContent =
                "Agregar Producto";


            btnSave.textContent =
                "Agregar a Cocina";

        }


        /* Guardar */

        guardarProductos();


        /* Limpiar formulario */

        form.reset();


        /* Actualizar tabla */

        listarProductos();

    }
);


/* =========================
   CARGAR PRODUCTO PARA EDITAR
========================= */

function cargarParaEditar(index) {

    const producto =
        listaCocina[index];


    inputIndex.value =
        index;


    inputNombre.value =
        producto.nombre;


    inputPrecio.value =
        producto.precio;


    inputCategoria.value =
        producto.categoria;


    formTitle.textContent =
        "Editar Producto";


    btnSave.textContent =
        "Guardar Cambios";

}


/* =========================
   ELIMINAR PRODUCTO
========================= */

function eliminarProducto(index) {

    if (
        confirm(
            `¿Deseas eliminar "${listaCocina[index].nombre}"?`
        )
    ) {

        listaCocina.splice(
            index,
            1
        );


        guardarProductos();


        listarProductos();

    }

}


/* =========================
   OBTENER PEDIDOS
========================= */

function obtenerPedidos() {

    return JSON.parse(
        localStorage.getItem(
            "pedidosCoffeeCode"
        )
    ) || [];

}


/* =========================
   GUARDAR PEDIDOS
========================= */

function guardarPedidos(pedidos) {

    localStorage.setItem(
        "pedidosCoffeeCode",
        JSON.stringify(
            pedidos
        )
    );

}


/* =========================
   MOSTRAR PEDIDOS
========================= */

function mostrarPedidos() {

    const pedidos =
        obtenerPedidos();


    tablaPedidos.innerHTML = "";


    /* =========================
       NO HAY PEDIDOS
    ========================== */

    if (pedidos.length === 0) {

        tablaPedidos.innerHTML = `

            <tr>

                <td
                    colspan="5"
                    class="mensaje-vacio"
                >
                    No hay pedidos para mostrar.
                </td>

            </tr>

        `;

        return;
    }


    /* =========================
       MOSTRAR PEDIDOS
    ========================== */

    pedidos.forEach(
        function(pedido) {


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


            const fila =
                document.createElement(
                    "tr"
                );


            /* =========================
               BOTÓN SEGÚN EL ESTADO
            ========================== */

            let botonAccion = "";


            if (
                pedido.estado ===
                "En preparación"
            ) {

                botonAccion = `

                    <button
                        class="btn-listo"
                        onclick="marcarComoListo(${pedido.id})"
                    >
                        Marcar como listo
                    </button>

                `;

            }


            else if (
                pedido.estado ===
                "Listo"
            ) {

                botonAccion = `

                    <button
                        class="btn-entregado"
                        onclick="marcarComoEntregado(${pedido.id})"
                    >
                        Marcar entregado
                    </button>

                `;

            }


            else if (
                pedido.estado ===
                "Entregado"
            ) {

                botonAccion = `

                    <span class="pedido-finalizado">
                        Pedido entregado
                    </span>

                `;

            }


            else {

                botonAccion = `

                    <span class="pedido-esperando">
                        Esperando cocina
                    </span>

                `;

            }


            /* =========================
               CREAR FILA
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
                    ${pedido.estado}
                </td>

                <td>
                    ${botonAccion}
                </td>

            `;


            tablaPedidos.appendChild(
                fila
            );

        }
    );

}


/* =========================
   MARCAR COMO LISTO
========================= */

function marcarComoListo(idPedido) {

    const pedidos =
        obtenerPedidos();


    const pedido =
        pedidos.find(
            function(pedido) {

                return pedido.id ===
                    idPedido;

            }
        );


    if (!pedido) {

        alert(
            "No se encontró el pedido."
        );

        return;
    }


    pedido.estado =
        "Listo";


    guardarPedidos(
        pedidos
    );


    mostrarPedidos();


    alert(
        `El Pedido #${pedido.id} está listo.`
    );


    console.log(
        "Pedido listo:",
        pedido
    );

}


/* =========================
   MARCAR COMO ENTREGADO
========================= */

function marcarComoEntregado(
    idPedido
) {

    const pedidos =
        obtenerPedidos();


    const pedido =
        pedidos.find(
            function(pedido) {

                return pedido.id ===
                    idPedido;

            }
        );


    if (!pedido) {

        alert(
            "No se encontró el pedido."
        );

        return;
    }


    pedido.estado =
        "Entregado";


    guardarPedidos(
        pedidos
    );


    mostrarPedidos();


    alert(
        `El Pedido #${pedido.id} fue entregado.`
    );


    console.log(
        "Pedido entregado:",
        pedido
    );

}


/* =========================
   ACTUALIZAR AUTOMÁTICAMENTE
========================= */

/*
   Si Cliente o Caja modifica
   un pedido, Cocina actualiza
   la información.
*/

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
   INICIAR COCINA
========================= */

guardarProductos();

listarProductos();

mostrarPedidos();


console.log(
    "Coffee Code - Área Cocina iniciada."
);