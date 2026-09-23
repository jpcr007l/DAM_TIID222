/* =====================================
   DATOS
===================================== */

let productos = [
    {
        id: 1,
        nombre: "Agua",
        precio: 20,
        categoria: "Bebidas",
        disponible: true
    },
    {
        id: 2,
        nombre: "Café",
        precio: 35,
        categoria: "Bebidas",
        disponible: true
    },
    {
        id: 3,
        nombre: "Té Helado",
        precio: 40,
        categoria: "Bebidas",
        disponible: true
    },
    {
        id: 4,
        nombre: "Sándwich de Jamón",
        precio: 55,
        categoria: "Alimentos",
        disponible: true
    },
    {
        id: 5,
        nombre: "Cheesecake de Fresa",
        precio: 60,
        categoria: "Postres",
        disponible: true
    }
];

let pedidos = [];
let pedidoActual = [];

let promociones = [
    "Agua + Café por $50",
    "Té Helado + Cheesecake por $90"
];



/* =====================================
   ÁREAS DEL SISTEMA
===================================== */

function mostrarCliente() {
    document.getElementById("cliente").style.display = "block";
    document.getElementById("caja").style.display = "none";
    document.getElementById("cocina").style.display = "none";
}


function mostrarCaja() {
    document.getElementById("cliente").style.display = "none";
    document.getElementById("caja").style.display = "block";
    document.getElementById("cocina").style.display = "none";
}


function mostrarCocina() {
    document.getElementById("cliente").style.display = "none";
    document.getElementById("caja").style.display = "none";
    document.getElementById("cocina").style.display = "block";
}



/* =====================================
   CLIENTE
===================================== */

function mostrarProductos() {
    let resultado = document.getElementById("resultadoCliente");

    let menu = productos.map(function(producto) {
        return producto.id + " - " + producto.nombre + " - $" + producto.precio + " - " + producto.categoria;
    });

    resultado.textContent =
        "PRODUCTOS\n\n" + menu.join("\n") + "\n\nPROMOCIONES\n\n" + promociones.join("\n");
}


function agregarProductoPedido() {
    let id = Number(prompt("ID del producto:"));
    let cantidad = Number(prompt("Cantidad:"));
    let producto;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            producto = productos[i];
            break;
        }
    }

    if (producto === undefined) {
        alert("Producto no encontrado.");
        return;
    }

    pedidoActual.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    });

    alert("Producto agregado.");
}


function mostrarPedidoActual() {
    let resultado = document.getElementById("resultadoCliente");

    if (pedidoActual.length === 0) {
        resultado.textContent = "El pedido está vacío.";
        return;
    }

    let texto = "MI PEDIDO\n\n";

    pedidoActual.forEach(function(producto) {
        texto += producto.cantidad +" x " +producto.nombre + " - $" +producto.precio +"\n";
    });

    resultado.textContent = texto;
}


function modificarCantidad() {
    let id = Number(prompt("ID del producto:"));
    let cantidad = Number(prompt("Nueva cantidad:"));

    for (let i = 0; i < pedidoActual.length; i++) {
        if (pedidoActual[i].id === id) {
            pedidoActual[i].cantidad = cantidad;

            if (cantidad <= 0) {
                pedidoActual.splice(i, 1);
            }

            alert("Cantidad modificada.");
            return;
        }
    }

    alert("Producto no encontrado.");
}


function crearPedido() {
    if (pedidoActual.length === 0) {
        alert("El pedido está vacío.");
        return;
    }

    let total = 0;

    pedidoActual.forEach(function(producto) {
        total += producto.precio * producto.cantidad;
    });

    let pedido = {
        id: pedidos.length + 1,
        productos: pedidoActual,
        total: total,
        estado: "Pendiente"
    };

    pedidos.push(pedido);
    pedidoActual = [];

    alert("Pedido #" + pedido.id + " creado.");
}


function mostrarPedidosCliente() {
    let resultado = document.getElementById("resultadoCliente");

    if (pedidos.length === 0) {
        resultado.textContent = "No hay pedidos.";
        return;
    }

    let texto = "MIS PEDIDOS\n\n";

    pedidos.forEach(function(pedido) {
        texto +=
            "Pedido #" + pedido.id + "\n" +
            "Estado: " + pedido.estado + "\n" +
            "Total: $" + pedido.total + "\n\n";
    });

    resultado.textContent = texto;
}



/* =====================================
   CAJA
===================================== */

function mostrarPedidosCaja() {
    let resultado = document.getElementById("resultadoCaja");

    if (pedidos.length === 0) {
        resultado.textContent = "No hay pedidos.";
        return;
    }

    let texto = "PEDIDOS\n\n";

    pedidos.forEach(function(pedido) {
        texto += "Pedido #" + pedido.id + "\n";

        pedido.productos.forEach(function(producto) {
            texto +=
                producto.cantidad +
                " x " +
                producto.nombre +
                "\n";
        });

        texto += "Estado: " + pedido.estado + "\n";
        texto += calcularTotales(pedido) + "\n\n";
    });

    resultado.textContent = texto;
}


function calcularTotales(pedido) {
    let subtotal = pedido.productos.reduce(function(total, producto) {
        let { precio, cantidad } = producto;
        return total + precio * cantidad;
    }, 0);

    let iva = subtotal * 0.16;
    let total = subtotal + iva;

    return "Subtotal: $" + subtotal.toFixed(2) + "\nIVA: $" + iva.toFixed(2) +"\nTotal: $" + total.toFixed(2);
}


function enviarPedidoCocina() {
    let id = Number(prompt("ID del pedido:"));
    let pedido;

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id === id) {
            pedido = pedidos[i];
            break;
        }
    }

    if (pedido === undefined) {
        alert("Pedido no encontrado.");
        return;
    }

    pedido.estado = "En preparación";
    alert("Pedido enviado a Cocina.");
}



/* =====================================
   COCINA
===================================== */

function listarProductos() {
    let resultado = document.getElementById("resultadoCocina");
    let texto = "PRODUCTOS\n\n";

    productos.forEach(function(producto) {
        texto +=
            "ID: " + producto.id + "\n" +
            "Nombre: " + producto.nombre + "\n" +
            "Precio: $" + producto.precio + "\n" +
            "Categoría: " + producto.categoria + "\n\n";
    });

    resultado.textContent = texto;
}


function agregarProducto() {
    let nombre = prompt("Nombre del producto:");
    let precio = Number(prompt("Precio:"));
    let categoria = prompt("Categoría:");

    let producto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        categoria: categoria,
        disponible: true
    };

    productos.push(producto);
    alert("Producto agregado.");
}


function editarProducto() {
    let id = Number(prompt("ID del producto:"));

    let producto = productos.find(function(producto) {
        return producto.id === id;
    });

    if (producto === undefined) {
        alert("Producto no encontrado.");
        return;
    }

    producto.nombre = prompt("Nuevo nombre:", producto.nombre);
    producto.precio = Number(prompt("Nuevo precio:", producto.precio));
    producto.categoria = prompt("Nueva categoría:", producto.categoria);

    alert("Producto actualizado.");
}


function eliminarProducto() {
    let id = Number(prompt("ID del producto:"));

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productos.splice(i, 1);
            alert("Producto eliminado.");
            return;
        }
    }

    alert("Producto no encontrado.");
}


function mostrarPedidosCocina() {
    let resultado = document.getElementById("resultadoCocina");

    if (pedidos.length === 0) {
        resultado.textContent = "No hay pedidos.";
        return;
    }

    let texto = "PEDIDOS\n\n";

    pedidos.forEach(function(pedido) {
        texto +=
            "Pedido #" + pedido.id + "\n" +
            "Estado: " + pedido.estado + "\n\n";
    });

    resultado.textContent = texto;
}


function marcarListo() {
    let id = Number(prompt("ID del pedido:"));

    let pedido = pedidos.find(function(pedido) {
        return pedido.id === id;
    });

    if (pedido === undefined) {
        alert("Pedido no encontrado.");
        return;
    }

    pedido.estado = "Listo";
    alert("Pedido marcado como listo.");
}


function marcarEntregado() {
    let id = Number(prompt("ID del pedido:"));

    let pedido = pedidos.find(function(pedido) {
        return pedido.id === id;
    });

    if (pedido === undefined) {
        alert("Pedido no encontrado.");
        return;
    }

    pedido.estado = "Entregado";
    alert("Pedido entregado.");
}


function buscarProductos() {
    let resultado = document.getElementById("resultadoCocina");
    let texto = "";

    let baratos = productos.filter(function(producto) {
        return producto.precio < 40;
    });

    texto += "PRODUCTOS BARATOS\n";

    baratos.forEach(function(producto) {
        texto += producto.nombre + " - $" + producto.precio + "\n";
    });


    let caros = productos.filter(function(producto) {
        return producto.precio >= 50;
    });

    texto += "\nPRODUCTOS CAROS\n";

    caros.forEach(function(producto) {
        texto += producto.nombre +
            " - $" + producto.precio + "\n";
    });


    let bebidas = productos.filter(function(producto) {
        return producto.categoria === "Bebidas";
    });

    texto += "\nBEBIDAS\n";

    bebidas.forEach(function(producto) {
        texto += producto.nombre + "\n";
    });


    let postres = productos.filter(function(producto) {
        return producto.categoria === "Postres";
    });

    texto += "\nPOSTRES\n";

    postres.forEach(function(producto) {
        texto += producto.nombre + "\n";
    });


    let encontrado = productos.find(function(producto) {
        return producto.nombre === "Café";
    });

    texto += "\nFIND()\n";

    if (encontrado !== undefined) {
        texto += encontrado.nombre + " - $" + encontrado.precio;
    }

    resultado.textContent = texto;
}