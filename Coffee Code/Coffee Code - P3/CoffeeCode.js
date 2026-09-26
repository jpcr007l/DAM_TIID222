/* =========================================================
   COFFEE CODE
   Sistema de cafetería
========================================================= */


/* =========================================================
   DATOS DEL SISTEMA
========================================================= */

// PARTE 1 - CAJA
// Se utiliza un array para almacenar los productos disponibles.
// Cada producto se representa mediante un objeto con propiedades.

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


// PARTE 1 - CAJA
// Array donde se almacenan todos los pedidos realizados.

let pedidos = [];


// PARTE 1 - CLIENTE
// Array que almacena temporalmente los productos
// que el cliente está agregando a su pedido.

let pedidoActual = [];


// Promociones disponibles en el sistema.

let promociones = [
    "Agua + Café por $50",
    "Té Helado + Cheesecake por $90"
];


/* =========================================================
   ÁREAS DEL SISTEMA
========================================================= */

// Función para mostrar el área Cliente.

function mostrarCliente() {

    document.getElementById("cliente").style.display = "block";
    document.getElementById("caja").style.display = "none";
    document.getElementById("cocina").style.display = "none";
}


// Función para mostrar el área Caja.

function mostrarCaja() {

    document.getElementById("cliente").style.display = "none";
    document.getElementById("caja").style.display = "block";
    document.getElementById("cocina").style.display = "none";
}


// Función para mostrar el área Cocina.

function mostrarCocina() {

    document.getElementById("cliente").style.display = "none";
    document.getElementById("caja").style.display = "none";
    document.getElementById("cocina").style.display = "block";
}


/* =========================================================
   CLIENTE
========================================================= */


/* ---------------------------------------------------------
   MOSTRAR PRODUCTOS
--------------------------------------------------------- */

// PARTE 1 - CLIENTE
// Se utiliza console.log() para mostrar información
// directamente en la consola del navegador.
//
// PARTE 2 - CLIENTE
// Se utiliza map() para recorrer el array de productos
// y construir dinámicamente el menú.

function mostrarProductos() {

    let resultado = document.getElementById("resultadoCliente");

    console.log(productos);

    let menu = productos.map(function(producto) {

        return producto.id + " - " +
            producto.nombre + " - $" +
            producto.precio + " - " +
            producto.categoria;
    });

    resultado.textContent =
        "PRODUCTOS\n\n" +
        menu.join("\n") +
        "\n\nPROMOCIONES\n\n" +
        promociones.join("\n");
}


/* ---------------------------------------------------------
   AGREGAR PRODUCTO AL PEDIDO
--------------------------------------------------------- */

// PARTE 1 - CLIENTE
// Esta función utiliza una función propia para realizar
// una acción sobre un producto seleccionado.
//
// También utiliza un array para almacenar los productos
// que forman parte del pedido actual.

function agregarProductoPedido() {

    let id = Number(prompt("ID del producto:"));
    let cantidad = Number(prompt("Cantidad:"));

    let producto;

    // Se recorre el array de productos para encontrar
    // el producto seleccionado por su ID.

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

    // Se agrega el producto al pedido actual.

    pedidoActual.push({

        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    });

    alert("Producto agregado.");
}


/* ---------------------------------------------------------
   MOSTRAR PEDIDO ACTUAL
--------------------------------------------------------- */

// PARTE 2 - CLIENTE
// Se utiliza forEach() para recorrer cada producto
// que forma parte del pedido.
//
// También se utiliza template string (`${}`) para
// construir dinámicamente la información mostrada.

function mostrarPedidoActual() {

    let resultado = document.getElementById("resultadoCliente");

    if (pedidoActual.length === 0) {

        resultado.textContent = "El pedido está vacío.";
        return;
    }

    let texto = "MI PEDIDO\n\n";
    let total = 0;


    pedidoActual.forEach(function(producto) {

        let subtotal =
            producto.precio * producto.cantidad;

        total += subtotal;

        texto +=
            `${producto.cantidad} x ${producto.nombre} - $${subtotal}\n`;
    });


    texto += `\nTOTAL: $${total}`;

    resultado.textContent = texto;
}


/* ---------------------------------------------------------
   MODIFICAR CANTIDAD
--------------------------------------------------------- */

// PARTE 1 - CLIENTE
// Permite modificar la cantidad de un producto
// que ya fue agregado al pedido.
//
// Si la cantidad es 0 o menor, el producto se elimina.

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


/* ---------------------------------------------------------
   CREAR PEDIDO
--------------------------------------------------------- */

// PARTE 1 - CLIENTE
// Esta función construye un nuevo pedido y lo almacena
// dentro del array pedidos.
//
// El pedido inicia con el estado "Pendiente".

function crearPedido() {

    if (pedidoActual.length === 0) {

        alert("El pedido está vacío.");
        return;
    }


    let total = 0;


    // PARTE 2 - CLIENTE
    // forEach() permite recorrer los productos del pedido
    // para calcular el total.

    pedidoActual.forEach(function(producto) {

        total +=
            producto.precio * producto.cantidad;
    });


    // Se crea un objeto que representa el pedido.

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


/* ---------------------------------------------------------
   MOSTRAR PEDIDOS DEL CLIENTE
--------------------------------------------------------- */

// PARTE 1 - CLIENTE
// Muestra los pedidos almacenados.
//
// PARTE 2 - CLIENTE
// Se utiliza forEach() para recorrer los pedidos.

function mostrarPedidosCliente() {

    let resultado =
        document.getElementById("resultadoCliente");


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


/* =========================================================
   PARTE 3 - CLIENTE
========================================================= */


/* ---------------------------------------------------------
   PROCESAR PEDIDO
--------------------------------------------------------- */

// PARTE 3 - CLIENTE
//
// Se utiliza setTimeout() para simular un proceso
// que tarda cierto tiempo en realizarse.
//
// El pedido pasa por diferentes estados:
//
// 1. Pedido recibido
// 2. Preparando
// 3. Empacando
// 4. Pedido entregado
//
// setTimeout() permite que cada cambio de estado ocurra
// después de un determinado tiempo.

function procesarPedido(pedido) {

    let resultado =
        document.getElementById("resultadoCliente");


    pedido.estado = "Pedido recibido";

    resultado.textContent =
        "Pedido #" + pedido.id +
        "\nEstado: Pedido recibido";


    // Primer tiempo de espera.
    // Simula que la cafetería recibió el pedido.

    setTimeout(function() {

        pedido.estado = "Preparando...";

        resultado.textContent =
            "Pedido #" + pedido.id +
            "\nEstado: Preparando...";


        // Segundo tiempo de espera.
        // Simula el tiempo de preparación.

        setTimeout(function() {

            pedido.estado = "Empacando...";

            resultado.textContent =
                "Pedido #" + pedido.id +
                "\nEstado: Empacando...";


            // Tercer tiempo de espera.
            // Simula el momento previo a la entrega.

            setTimeout(function() {

                pedido.estado = "Entregado";

                resultado.textContent =
                    "Pedido #" + pedido.id +
                    "\nEstado: Pedido Entregado";


            }, 3000);


        }, 3000);


    }, 3000);
}


/* =========================================================
   CAJA
========================================================= */


/* ---------------------------------------------------------
   MOSTRAR PEDIDOS EN CAJA
--------------------------------------------------------- */

// PARTE 1 - CAJA
// Permite consultar los pedidos registrados.
//
// PARTE 2 - CAJA
// Utiliza forEach() para recorrer pedidos y productos.

function mostrarPedidosCaja() {

    let resultado =
        document.getElementById("resultadoCaja");


    if (pedidos.length === 0) {

        resultado.textContent = "No hay pedidos.";
        return;
    }


    let texto = "PEDIDOS\n\n";


    pedidos.forEach(function(pedido) {

        texto +=
            "Pedido #" + pedido.id + "\n";


        pedido.productos.forEach(function(producto) {

            texto +=
                producto.cantidad +
                " x " +
                producto.nombre +
                "\n";
        });


        texto +=
            "Estado: " +
            pedido.estado +
            "\n";


        texto +=
            calcularTotales(pedido) +
            "\n\n";
    });


    resultado.textContent = texto;
}


/* ---------------------------------------------------------
   CALCULAR TOTALES
--------------------------------------------------------- */

// PARTE 2 - CAJA
//
// Se utiliza reduce() para sumar los subtotales
// de todos los productos.
//
// También se utiliza destructuring para obtener
// directamente las propiedades precio y cantidad
// del objeto producto.

function calcularTotales(pedido) {

    let subtotal =
        pedido.productos.reduce(function(total, producto) {

            let { precio, cantidad } = producto;

            return total + precio * cantidad;

        }, 0);


    let iva = subtotal * 0.16;

    let total = subtotal + iva;


    return "Subtotal: $" +
        subtotal.toFixed(2) +
        "\nIVA: $" +
        iva.toFixed(2) +
        "\nTotal: $" +
        total.toFixed(2);
}


/* ---------------------------------------------------------
   CALLBACK DE NOTIFICACIÓN
--------------------------------------------------------- */

// PARTE 3 - CAJA
//
// Esta función se utiliza como CALLBACK.
//
// Un callback es una función que se pasa como argumento
// a otra función para ejecutarse posteriormente.
//
// En este caso se utiliza para notificar el estado
// del pedido.

function notificarPedido(mensaje) {

    let resultado =
        document.getElementById("resultadoCaja");

    resultado.textContent = mensaje;
}


/* ---------------------------------------------------------
   ENVIAR PEDIDO A COCINA
--------------------------------------------------------- */

// PARTE 1 - CAJA
// Busca el pedido y modifica su estado.
//
// PARTE 3 - CAJA
// Se utiliza un CALLBACK para notificar que el pedido
// fue enviado a Cocina.
//
// La función notificarPedido() se pasa como argumento
// y se ejecuta después de cambiar el estado.

function enviarPedidoCocina() {

    let id =
        Number(prompt("ID del pedido:"));

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


    // Callback.
    // Se ejecuta la función de notificación después
    // de cambiar el estado del pedido.

    notificarPedido(
        "Pedido #" +
        pedido.id +
        " en proceso."
    );


    alert("Pedido enviado a Cocina.");
}


/* =========================================================
   COCINA
========================================================= */


/* ---------------------------------------------------------
   LISTAR PRODUCTOS
--------------------------------------------------------- */

// PARTE 1 - COCINA
// Se utilizan objetos, propiedades y arrays.
//
// PARTE 2 - COCINA
// Se utiliza forEach() para recorrer los productos.

function listarProductos() {

    let resultado =
        document.getElementById("resultadoCocina");

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


/* ---------------------------------------------------------
   AGREGAR PRODUCTO
--------------------------------------------------------- */

// PARTE 1 - COCINA
// Se crea un nuevo objeto producto y se agrega
// al array productos.

function agregarProducto() {

    let nombre =
        prompt("Nombre del producto:");

    let precio =
        Number(prompt("Precio:"));

    let categoria =
        prompt("Categoría:");


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


/* ---------------------------------------------------------
   EDITAR PRODUCTO
--------------------------------------------------------- */

// PARTE 1 - COCINA
// Permite modificar las propiedades de un objeto.
//
// PARTE 2 - COCINA
// Se utiliza find() para localizar el producto
// mediante su ID.

function editarProducto() {

    let id =
        Number(prompt("ID del producto:"));


    let producto =
        productos.find(function(producto) {

            return producto.id === id;
        });


    if (producto === undefined) {

        alert("Producto no encontrado.");
        return;
    }


    producto.nombre =
        prompt(
            "Nuevo nombre:",
            producto.nombre
        );


    producto.precio =
        Number(
            prompt(
                "Nuevo precio:",
                producto.precio
            )
        );


    producto.categoria =
        prompt(
            "Nueva categoría:",
            producto.categoria
        );


    alert("Producto actualizado.");
}


/* ---------------------------------------------------------
   ELIMINAR PRODUCTO
--------------------------------------------------------- */

// PARTE 1 - COCINA
// Se utiliza splice() para eliminar un elemento
// del array de productos.

function eliminarProducto() {

    let id =
        Number(prompt("ID del producto:"));


    for (let i = 0; i < productos.length; i++) {

        if (productos[i].id === id) {

            productos.splice(i, 1);

            alert("Producto eliminado.");

            return;
        }
    }


    alert("Producto no encontrado.");
}


/* ---------------------------------------------------------
   MOSTRAR PEDIDOS EN COCINA
--------------------------------------------------------- */

// PARTE 1 - COCINA
// Permite consultar los pedidos.
//
// PARTE 2 - COCINA
// Se utiliza forEach() para recorrer los pedidos.

function mostrarPedidosCocina() {

    let resultado =
        document.getElementById("resultadoCocina");


    if (pedidos.length === 0) {

        resultado.textContent =
            "No hay pedidos.";

        return;
    }


    let texto = "PEDIDOS\n\n";


    pedidos.forEach(function(pedido) {

        texto +=
            "Pedido #" +
            pedido.id +
            "\n" +
            "Estado: " +
            pedido.estado +
            "\n\n";
    });


    resultado.textContent = texto;
}


/* ---------------------------------------------------------
   MARCAR PEDIDO COMO LISTO
--------------------------------------------------------- */

// PARTE 1 - COCINA
// Cambia el estado del pedido.
//
// Se utiliza find() para localizar el pedido
// mediante su ID.

function marcarListo() {

    let id =
        Number(prompt("ID del pedido:"));


    let pedido =
        pedidos.find(function(pedido) {

            return pedido.id === id;
        });


    if (pedido === undefined) {

        alert("Pedido no encontrado.");
        return;
    }


    pedido.estado = "Listo";

    alert("Pedido marcado como listo.");
}


/* ---------------------------------------------------------
   MARCAR PEDIDO COMO ENTREGADO
--------------------------------------------------------- */

// PARTE 1 - COCINA
// Modifica el estado del pedido a "Entregado".

function marcarEntregado() {

    let id =
        Number(prompt("ID del pedido:"));


    let pedido =
        pedidos.find(function(pedido) {

            return pedido.id === id;
        });


    if (pedido === undefined) {

        alert("Pedido no encontrado.");
        return;
    }


    pedido.estado = "Entregado";

    alert("Pedido entregado.");
}


/* =========================================================
   PARTE 2 - COCINA
   FILTER() Y FIND()
========================================================= */


/* ---------------------------------------------------------
   BUSCAR PRODUCTOS
--------------------------------------------------------- */

// PARTE 2 - COCINA
//
// filter() se utiliza para obtener diferentes grupos
// de productos:
//
// - Productos baratos
// - Productos caros
// - Bebidas
// - Postres
//
// find() se utiliza para buscar un producto específico
// mediante el texto introducido por el usuario.

function buscarProductos() {

    let resultado =
        document.getElementById("resultadoCocina");

    let texto = "";


    /* -----------------------------------------------------
       FILTER() - PRODUCTOS BARATOS
    ----------------------------------------------------- */

    let baratos =
        productos.filter(function(producto) {

            return producto.precio < 40;
        });


    texto +=
        "PRODUCTOS BARATOS\n";


    baratos.forEach(function(producto) {

        texto +=
            producto.nombre +
            " - $" +
            producto.precio +
            "\n";
    });


    /* -----------------------------------------------------
       FILTER() - PRODUCTOS CAROS
    ----------------------------------------------------- */

    let caros =
        productos.filter(function(producto) {

            return producto.precio >= 50;
        });


    texto +=
        "\nPRODUCTOS CAROS\n";


    caros.forEach(function(producto) {

        texto +=
            producto.nombre +
            " - $" +
            producto.precio +
            "\n";
    });


    /* -----------------------------------------------------
       FILTER() - BEBIDAS
    ----------------------------------------------------- */

    let bebidas =
        productos.filter(function(producto) {

            return producto.categoria === "Bebidas";
        });


    texto +=
        "\nBEBIDAS\n";


    bebidas.forEach(function(producto) {

        texto +=
            producto.nombre +
            "\n";
    });


    /* -----------------------------------------------------
       FILTER() - POSTRES
    ----------------------------------------------------- */

    let postres =
        productos.filter(function(producto) {

            return producto.categoria === "Postres";
        });


    texto +=
        "\nPOSTRES\n";


    postres.forEach(function(producto) {

        texto +=
            producto.nombre +
            "\n";
    });


    /* -----------------------------------------------------
       FIND() - BÚSQUEDA POR TEXTO
    ----------------------------------------------------- */

    let busqueda =
        prompt("¿Qué producto deseas buscar?");


    let encontrado =
        productos.find(function(producto) {

            return producto.nombre.toLowerCase() ===
                busqueda.toLowerCase();
        });


    texto +=
        "\nPRODUCTO ENCONTRADO\n";


    if (encontrado !== undefined) {

        texto +=
            encontrado.nombre +
            " - $" +
            encontrado.precio;

    } else {

        texto +=
            "Producto no encontrado.";
    }


    resultado.textContent = texto;
}


/* =========================================================
   PARTE 3 - COCINA
   PROMISES
========================================================= */


/* ---------------------------------------------------------
   PREPARAR PEDIDO
--------------------------------------------------------- */

// PARTE 3 - COCINA
//
// Se utiliza una Promise para representar una operación
// que puede terminar correctamente o presentar un error.
//
// resolve() representa que la preparación terminó
// correctamente.
//
// reject() representa un problema durante la preparación,
// como un ingrediente faltante o un error en cocina.

function prepararPedido(pedido) {

    return new Promise(function(resolve, reject) {

        let resultado =
            document.getElementById("resultadoCocina");


        resultado.textContent =
            "Preparando pedido #" +
            pedido.id +
            "...";

        // Se utiliza setTimeout() dentro de la Promise
        // para simular el tiempo de preparación.

        setTimeout(function() {
            
            // Simulación sencilla de un posible error.
            // Si el pedido no contiene productos,
            // se considera que faltan ingredientes.

            if (pedido.productos.length === 0) {

                reject(
                    "Error en cocina: faltan ingredientes."
                );

                return;
            }


            pedido.estado = "Listo";


            resolve(
                "Pedido #" +
                pedido.id +
                " preparado correctamente."
            );


        }, 3000);
    });
}


/* ---------------------------------------------------------
   INICIAR PREPARACIÓN
--------------------------------------------------------- */

// PARTE 3 - COCINA
//
// Se llama a prepararPedido() y se utilizan:
// - then() para manejar el resultado exitoso.
// - catch() para manejar un error.

function iniciarPreparacion() {

    let id =
        Number(prompt("ID del pedido:"));


    let pedido =
        pedidos.find(function(pedido) {

            return pedido.id === id;
        });


    if (pedido === undefined) {

        alert("Pedido no encontrado.");
        return;
    }


    prepararPedido(pedido)

        .then(function(mensaje) {

            document.getElementById(
                "resultadoCocina"
            ).textContent = mensaje;

        })


        .catch(function(error) {

            pedido.estado = "Cancelado";


            document.getElementById(
                "resultadoCocina"
            ).textContent = error +
                "\nPedido cancelado.";
        });
}