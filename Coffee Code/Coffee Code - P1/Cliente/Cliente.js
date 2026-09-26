/* =====================================
   PRODUCTOS DE LA CAFETERÍA
===================================== */

/*
   Los productos se obtienen desde Cocina.

   Cocina guarda la información en:
   productosCoffeeCode
*/

const productosGuardados =
    JSON.parse(
        localStorage.getItem("productosCoffeeCode")
    ) || [];


/*
   Agregamos un id a cada producto.

   Esto nos permite identificarlo
   cuando el cliente modifica
   la cantidad.
*/

const productos =
    productosGuardados.map(
        (producto, index) => {

            return {
                id: index + 1,
                nombre: producto.nombre,
                precio: Number(producto.precio),
                categoria: producto.categoria
            };

        }
    );


/* =====================================
   PEDIDO ACTUAL
===================================== */

let pedidoActual = [];


/* =====================================
   MOSTRAR PRODUCTOS
===================================== */

function mostrarProductos() {

    const listaProductos =
        document.getElementById(
            "listaProductos"
        );


    listaProductos.innerHTML = "";


    /*
       Si no existen productos
       registrados en Cocina.
    */

    if (productos.length === 0) {

        listaProductos.innerHTML = `

            <p>
                No hay productos disponibles.
            </p>

        `;

        return;
    }


    /*
       Categorías utilizadas por Cocina.
    */

    const categorias = [
        "Bebidas",
        "Alimentos",
        "Postres"
    ];


    categorias.forEach(
        function(categoria) {


            /*
               Buscar productos de esta categoría.
            */

            const productosCategoria =
                productos.filter(
                    producto =>
                        producto.categoria === categoria
                );


            /*
               Si la categoría no tiene productos,
               no se muestra.
            */

            if (
                productosCategoria.length === 0
            ) {

                return;

            }


            /*
               Título de la categoría.
            */

            listaProductos.innerHTML += `

                <div class="categoria">

                    <h3 class="titulo-categoria">
                        ${categoria}
                    </h3>

                    <div class="productos">

            `;


            /*
               Mostrar productos.
            */

            productosCategoria.forEach(
                function(producto) {

                    listaProductos.innerHTML += `

                        <article class="producto">

                            <h4>
                                ${producto.nombre}
                            </h4>

                            <span class="precio">
                                $${producto.precio.toFixed(2)}
                            </span>

                            <button
                                onclick="agregarProducto(${producto.id})"
                            >
                                + Agregar
                            </button>

                        </article>

                    `;

                }
            );


            listaProductos.innerHTML += `

                    </div>

                </div>

            `;

        }
    );


    console.log(
        "Productos mostrados:",
        productos
    );

}


/* =====================================
   AGREGAR PRODUCTO
===================================== */

function agregarProducto(id) {

    const producto =
        productos.find(
            producto =>
                producto.id === id
        );


    /*
       Comprobar que exista.
    */

    if (!producto) {

        console.log(
            "Producto no encontrado."
        );

        return;
    }


    /*
       Comprobar si ya existe
       dentro del pedido.
    */

    const productoExistente =
        pedidoActual.find(
            item =>
                item.id === id
        );


    if (productoExistente) {

        /*
           Si ya existe,
           aumentar cantidad.
        */

        productoExistente.cantidad++;

    }

    else {

        /*
           Si no existe,
           agregarlo al pedido.
        */

        pedidoActual.push({

            ...producto,

            cantidad: 1

        });

    }


    console.log(
        "Producto agregado:",
        producto.nombre
    );


    actualizarPedido();

}


/* =====================================
   ACTUALIZAR PEDIDO
===================================== */

function actualizarPedido() {

    const listaPedido =
        document.getElementById(
            "listaPedido"
        );


    listaPedido.innerHTML = "";


    /*
       Si no hay productos.
    */

    if (
        pedidoActual.length === 0
    ) {

        listaPedido.innerHTML = `

            <p class="pedido-vacio">

                No hay productos en tu pedido.

            </p>

        `;


        actualizarTotal();

        return;
    }


    /*
       Mostrar productos del pedido.
    */

    pedidoActual.forEach(
        function(producto) {

            listaPedido.innerHTML += `

                <div class="item-pedido">

                    <div class="item-info">

                        <h4>
                            ${producto.nombre}
                        </h4>

                        <p>
                            $${producto.precio.toFixed(2)}
                        </p>

                    </div>


                    <div class="controles">

                        <button
                            onclick="cambiarCantidad(${producto.id}, -1)"
                        >
                            -
                        </button>


                        <span>
                            ${producto.cantidad}
                        </span>


                        <button
                            onclick="cambiarCantidad(${producto.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

            `;

        }
    );


    actualizarTotal();

}


/* =====================================
   CAMBIAR CANTIDAD
===================================== */

function cambiarCantidad(
    id,
    cambio
) {

    const producto =
        pedidoActual.find(
            item =>
                item.id === id
        );


    if (!producto) {

        return;

    }


    producto.cantidad += cambio;


    /*
       Si llega a cero,
       eliminar del pedido.
    */

    if (
        producto.cantidad <= 0
    ) {

        pedidoActual =
            pedidoActual.filter(
                item =>
                    item.id !== id
            );


        console.log(
            "Producto eliminado del pedido."
        );

    }


    actualizarPedido();

}


/* =====================================
   CALCULAR TOTAL
===================================== */

function calcularTotal() {

    let total = 0;


    pedidoActual.forEach(
        function(producto) {

            total +=
                producto.precio *
                producto.cantidad;

        }
    );


    return total;

}


/* =====================================
   ACTUALIZAR TOTAL
===================================== */

function actualizarTotal() {

    const total =
        calcularTotal();


    document.getElementById(
        "totalPedido"
    ).textContent =
        `$${total.toFixed(2)}`;


    /*
       Calcular cantidad total
       de productos.
    */

    const cantidad =
        pedidoActual.reduce(
            function(total, producto) {

                return (
                    total +
                    producto.cantidad
                );

            },
            0
        );


    document.getElementById(
        "cantidadPedido"
    ).textContent =
        cantidad;

}


/* =====================================
   CREAR PEDIDO
===================================== */

function crearPedido() {

    /*
       No permitir pedidos vacíos.
    */

    if (
        pedidoActual.length === 0
    ) {

        alert(
            "Agrega al menos un producto al pedido."
        );

        return;
    }


    const total =
        calcularTotal();


    /*
       Obtener pedidos existentes.
    */

    const pedidosGuardados =
        JSON.parse(
            localStorage.getItem(
                "pedidosCoffeeCode"
            )
        ) || [];


    /*
       Crear nuevo pedido.
    */

    const nuevoPedido = {

        id:
            pedidosGuardados.length + 1,

        productos:
            pedidoActual.map(
                function(producto) {

                    return {

                        id:
                            producto.id,

                        nombre:
                            producto.nombre,

                        precio:
                            producto.precio,

                        cantidad:
                            producto.cantidad

                    };

                }
            ),

        total:
            total,

        estado:
            "Pendiente",

        fecha:
            new Date().toLocaleString()

    };


    /*
       Guardar pedido.
    */

    pedidosGuardados.push(
        nuevoPedido
    );


    localStorage.setItem(
        "pedidosCoffeeCode",
        JSON.stringify(
            pedidosGuardados
        )
    );


    console.log(
        "Pedido creado:",
        nuevoPedido
    );


    alert(
        `Pedido #${nuevoPedido.id} creado correctamente.`
    );


    /*
       Limpiar pedido actual.
    */

    pedidoActual = [];


    actualizarPedido();

    mostrarPedidos();

}


/* =====================================
   MOSTRAR PEDIDOS
===================================== */

function mostrarPedidos() {

    const listaPedidos =
        document.getElementById(
            "listaPedidos"
        );


    /*
       Volver a leer localStorage
       cada vez que mostramos
       los pedidos.

       Esto permite ver los cambios
       realizados por Caja o Cocina.
    */

    const pedidosGuardados =
        JSON.parse(
            localStorage.getItem(
                "pedidosCoffeeCode"
            )
        ) || [];


    listaPedidos.innerHTML = "";


    /*
       Si no existen pedidos.
    */

    if (
        pedidosGuardados.length === 0
    ) {

        listaPedidos.innerHTML = `

            <p class="pedidos-vacios">

                Todavía no tienes pedidos.

            </p>

        `;

        return;
    }


    /*
       Mostrar cada pedido.
    */

    pedidosGuardados.forEach(
        function(pedido) {

            /*
               Convertir los productos
               a texto.
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
                    .join(", ");


            /*
               Mostrar pedido.
            */

            listaPedidos.innerHTML += `

                <article
                    class="pedido-anterior"
                >

                    <div
                        class="pedido-cabecera"
                    >

                        <h3>
                            Pedido #${pedido.id}
                        </h3>


                        <span class="estado">

                            ${pedido.estado}

                        </span>

                    </div>


                    <p>

                        Fecha:
                        ${pedido.fecha}

                    </p>


                    <p>

                        Productos:
                        ${productosTexto}

                    </p>


                    <p
                        class="pedido-total"
                    >

                        Total:
                        $${pedido.total.toFixed(2)}

                    </p>

                </article>

            `;

        }
    );

}


/* =====================================
   CAMBIAR ENTRE SECCIONES
===================================== */

function mostrarSeccion(
    seccion
) {

    const elemento =
        document.getElementById(
            seccion
        );


    if (elemento) {

        elemento.scrollIntoView({

            behavior:
                "smooth"

        });

    }

}


/* =====================================
   ACTUALIZAR PEDIDOS EN TIEMPO REAL
===================================== */

/*
   Cuando Caja o Cocina modifican
   pedidosCoffeeCode desde otra pestaña,
   el navegador genera el evento
   "storage".

   Cliente vuelve a mostrar
   los pedidos automáticamente.
*/

window.addEventListener(
    "storage",
    function(evento) {

        if (
            evento.key ===
            "pedidosCoffeeCode"
        ) {

            console.log(
                "Los pedidos fueron actualizados."
            );


            mostrarPedidos();

        }

    }
);


/* =====================================
   ACTUALIZAR AL VOLVER A LA PESTAÑA
===================================== */

/*
   También actualizamos los pedidos
   cuando el usuario regresa a Cliente.
*/

window.addEventListener(
    "focus",
    function() {

        mostrarPedidos();

    }
);


/* =====================================
   INICIAR SISTEMA
===================================== */

mostrarProductos();

mostrarPedidos();

actualizarPedido();


console.log(
    "Coffee Code I - Área Cliente iniciada."
);