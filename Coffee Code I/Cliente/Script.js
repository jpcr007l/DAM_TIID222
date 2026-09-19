/* =====================================
   PRODUCTOS DE LA CAFETERÍA
===================================== */

const productos = [
    {
        id: 1,
        nombre: "Cappuccino",
        descripcion: "Café espresso con leche espumada.",
        precio: 48,
        imagen: "☕"
    },

    {
        id: 2,
        nombre: "Cold Brew",
        descripcion: "Café frío de extracción lenta.",
        precio: 45,
        imagen: "🥤"
    },

    {
        id: 3,
        nombre: "Latte de Caramelo",
        descripcion: "Café con leche y toque de caramelo.",
        precio: 52,
        imagen: "☕"
    },

    {
        id: 4,
        nombre: "Matcha Latte",
        descripcion: "Té verde con leche espumada.",
        precio: 50,
        imagen: "🍵"
    },

    {
        id: 5,
        nombre: "Espresso",
        descripcion: "Café intenso y aromático.",
        precio: 35,
        imagen: "☕"
    },

    {
        id: 6,
        nombre: "Frappe de Chocolate",
        descripcion: "Bebida fría de chocolate.",
        precio: 55,
        imagen: "🥤"
    },

    {
        id: 7,
        nombre: "Croissant",
        descripcion: "Hojaldre recién horneado.",
        precio: 38,
        imagen: "🥐"
    },

    {
        id: 8,
        nombre: "Cheesecake",
        descripcion: "Postre clásico y cremoso.",
        precio: 42,
        imagen: "🍰"
    }
];


/* =====================================
   PEDIDO ACTUAL
===================================== */

let pedidoActual = [];


/* =====================================
   MOSTRAR PRODUCTOS
===================================== */

function mostrarProductos() {

    const listaProductos = document.getElementById("listaProductos");

    listaProductos.innerHTML = "";

    productos.forEach(producto => {

        // Template string
        listaProductos.innerHTML += `
            <article class="producto">

                <div class="producto-imagen">
                    ${producto.imagen}
                </div>

                <div class="producto-info">

                    <h3>${producto.nombre}</h3>

                    <p>
                        ${producto.descripcion}
                    </p>

                    <div class="producto-pie">

                        <span class="precio">
                            $${producto.precio.toFixed(2)}
                        </span>

                        <button
                            class="btn-agregar"
                            onclick="agregarProducto(${producto.id})"
                        >
                            + Agregar
                        </button>

                    </div>

                </div>

            </article>
        `;
    });

    console.log("Productos mostrados:", productos);
}


/* =====================================
   AGREGAR PRODUCTO
===================================== */

function agregarProducto(id) {

    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        console.log("Producto no encontrado.");
        return;
    }

    const productoExistente = pedidoActual.find(
        item => item.id === id
    );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        pedidoActual.push({
            ...producto,
            cantidad: 1
        });

    }

    console.log("Producto agregado:", producto.nombre);

    actualizarPedido();
}


/* =====================================
   ACTUALIZAR PEDIDO
===================================== */

function actualizarPedido() {

    const listaPedido = document.getElementById("listaPedido");

    listaPedido.innerHTML = "";

    if (pedidoActual.length === 0) {

        listaPedido.innerHTML = `
            <p class="pedido-vacio">
                No hay productos en tu pedido.
            </p>
        `;

        actualizarTotal();

        return;
    }


    pedidoActual.forEach(producto => {

        // Template string
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
    });


    actualizarTotal();
}


/* =====================================
   CAMBIAR CANTIDAD
===================================== */

function cambiarCantidad(id, cambio) {

    const producto = pedidoActual.find(
        item => item.id === id
    );

    if (!producto) {
        return;
    }

    producto.cantidad += cambio;


    if (producto.cantidad <= 0) {

        pedidoActual = pedidoActual.filter(
            item => item.id !== id
        );

        console.log("Producto eliminado del pedido.");

    }


    actualizarPedido();
}


/* =====================================
   CALCULAR TOTAL
===================================== */

function calcularTotal() {

    let total = 0;

    pedidoActual.forEach(producto => {

        total += producto.precio * producto.cantidad;

    });

    return total;
}


/* =====================================
   ACTUALIZAR TOTAL
===================================== */

function actualizarTotal() {

    const total = calcularTotal();

    document.getElementById("totalPedido").textContent =
        `$${total.toFixed(2)}`;


    const cantidad = pedidoActual.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    document.getElementById("cantidadPedido").textContent =
        cantidad;
}


/* =====================================
   CREAR PEDIDO
===================================== */

function crearPedido() {

    if (pedidoActual.length === 0) {

        alert("Agrega al menos un producto al pedido.");

        return;
    }


    const total = calcularTotal();


    const pedidosGuardados =
        JSON.parse(localStorage.getItem("pedidosCoffeeCode")) || [];


    const nuevoPedido = {

        id: pedidosGuardados.length + 1,

        productos: pedidoActual.map(producto => ({

            id: producto.id,

            nombre: producto.nombre,

            precio: producto.precio,

            cantidad: producto.cantidad

        })),

        total: total,

        estado: "Pendiente",

        fecha: new Date().toLocaleString()

    };


    pedidosGuardados.push(nuevoPedido);


    localStorage.setItem(
        "pedidosCoffeeCode",
        JSON.stringify(pedidosGuardados)
    );


    console.log("Pedido creado:", nuevoPedido);


    alert(
        `Pedido #${nuevoPedido.id} creado correctamente.`
    );


    pedidoActual = [];


    actualizarPedido();

    mostrarPedidos();

}


/* =====================================
   MOSTRAR PEDIDOS
===================================== */

function mostrarPedidos() {

    const listaPedidos =
        document.getElementById("listaPedidos");


    const pedidosGuardados =
        JSON.parse(localStorage.getItem("pedidosCoffeeCode")) || [];


    listaPedidos.innerHTML = "";


    if (pedidosGuardados.length === 0) {

        listaPedidos.innerHTML = `
            <p class="pedidos-vacios">
                Todavía no tienes pedidos.
            </p>
        `;

        return;
    }


    pedidosGuardados.forEach(pedido => {


        const productosTexto = pedido.productos
            .map(producto =>
                `${producto.cantidad}x ${producto.nombre}`
            )
            .join(", ");


        // Template string
        listaPedidos.innerHTML += `
            <article class="pedido-anterior">

                <div class="pedido-cabecera">

                    <h3>
                        Pedido #${pedido.id}
                    </h3>

                    <span class="estado">
                        ${pedido.estado}
                    </span>

                </div>

                <p>
                    Fecha: ${pedido.fecha}
                </p>

                <p>
                    Productos: ${productosTexto}
                </p>

                <p class="pedido-total">
                    Total: $${pedido.total.toFixed(2)}
                </p>

            </article>
        `;

    });

}


/* =====================================
   CAMBIAR ENTRE SECCIONES
===================================== */

function mostrarSeccion(seccion) {

    const elemento =
        document.getElementById(seccion);


    if (elemento) {

        elemento.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================
   INICIAR SISTEMA
===================================== */

mostrarProductos();

mostrarPedidos();

actualizarPedido();

console.log("Coffee Code I - Área Cliente iniciada.");