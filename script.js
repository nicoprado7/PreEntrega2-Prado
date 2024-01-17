console.log("Inicio del programa");

// FECHA Y HORA 📅🕑
const fecha = new Date ();
console.log("Fecha y Hora: " + fecha.toLocaleString());


const carrito = [
    { Producto: "Remera", categoria: "Ropa", precio: 25000 },
    { Producto: "Buzo", categoria: "Ropa", precio: 35000 },
    { Producto: "Conjunto", categoria: "Ropa", precio: 70000 },
    { Producto: "Medias", categoria: "Ropa", precio: 3000 },
    { Producto: "Llavero", categoria: "Accesorios", precio: 2000 },
    { Producto: "Gorro", categoria: "Accesorios", precio: 10000 },
    { Producto: "Collar", categoria: "Accesorios", precio: 5000 },
    { Producto: "Piluso", categoria: "Accesorios", precio: 8000 },
  ];
  
 // FUNCIÓNES  🕹️
 function pedirNombre() {
    let nombre = prompt("Ingrese su nombre:");
  
    // Validar que solo contiene letras, incluyendo tildes
    while (!/^[\p{L}]+$/u.test(nombre)) {
        alert("El nombre ingresado no es válido. Por favor, ingrese solo letras.");
        nombre = prompt("Ingrese su nombre:");
    }
  
    return nombre;
  }
  
  function pedirApellido() {
    let apellido = prompt("Ingrese su apellido:");
  
  
    while (!/^[\p{L}]+$/u.test(apellido)) {
        alert("El apellido ingresado no es válido. Por favor, ingrese solo letras.");
        apellido = prompt("Ingrese su apellido:");
    }
  
    return apellido;
  }
  
  function pedirEdad() {
    let edad = prompt("Ingrese su edad:");
  
  
  
    // Validar que es un número válido 
    while (isNaN(edad) || edad === null || edad === "" || edad <= 0) {
        alert("La edad ingresada no es válida ⛔. Por favor, ingrese una edad válida.");
        edad = prompt("Ingrese su edad:");
    }
  
    return parseInt(edad);
  }
  
  let nombre = pedirNombre();
  let apellido = pedirApellido();
  let edad = pedirEdad();
  
  let mensaje;
  
  while (isNaN(edad) || edad === null || edad === "" || edad <= 17) {
    alert("La edad ingresada no es válida ⛔. Por favor, ingrese una edad válida.");
    edad = pedirEdad();
  }
  
  if (edad > 17) {
    mensaje = "Sos mayor de edad, podrás realizar operaciones en este sitio ✅";
  } 
  
  
  alert(mensaje);
  
  alert("¡Bienvenido, " + nombre + "!😊");
  
  
  
  
  console.log("¡Bienvenido, " + nombre + "!");
  


  let total = 0;

  // Función para validar y obtener la categoría del usuario
  function obtenerCategoriaValida() {
    let categoria;
    do {
      categoria = prompt(`Ingrese la categoría:\n* Ropa \n* Accesorios`).toLowerCase();
      if (categoria === "ropa" || categoria === "accesorios") {
        break;
      } else {
        alert("Categoría no válida. Por favor, ingrese ropa o accesorios.");
      }
    } while (true);
    return categoria;
  }



  // Función para validar y obtener el producto del usuario dentro de la categoría seleccionada
  function obtenerProductoValido(categoria) {
    let producto;
    do {
      if (categoria === "ropa") {
        producto = prompt(`Ingrese el producto:\n- Remera ($25.000)\n- Buzo ($35.000)\n- Conjunto ($70.000)\n- Medias ($3.000)`).toLowerCase();
      } else if (categoria === "accesorios") {
        producto = prompt(`Ingrese el producto:\n- Gorro ($10.000)\n- Collar ($5.000)\n- Piluso ($8.000)\n- Llavero ($2.000)`).toLowerCase();
      }

    // Filtrar productos que coincidan con la categoría seleccionada
      const productosFiltrados = carrito.filter(
        (item) => item.categoria.toLowerCase() === categoria
      );
  
    // Verificar si hay productos filtrados
      if (productosFiltrados.length > 0) {
        console.log("Productos disponibles:");
        console.table(productosFiltrados);

   // Verificar si el producto seleccionado está en la lista filtrada
        const productoEnCarrito = productosFiltrados.find(
          (item) => item.Producto.toLowerCase() === producto
        );
  
        if (productoEnCarrito) {
          return productoEnCarrito;
        } else {
          alert("Producto no válido. Por favor, elija un producto válido de la lista.");
        }
      } else {
        alert("No hay productos disponibles en la categoría seleccionada.");
        break;
      }
    } while (true);
  }
  
// Mapeo de productos a precios
  const preciosPorProducto = {
    remera: 25000,
    buzo: 35000,
    conjunto: 70000,
    medias: 3000,
    llavero: 2000,
    gorro: 10000,
    collar: 5000,
    piluso: 8000,
  };
  
  const carritoUsuario = [];
  
  do {
    const categoriaSeleccionada = obtenerCategoriaValida();
    const productoSeleccionado = obtenerProductoValido(categoriaSeleccionada);
  
// Verificar si el producto seleccionado tiene el formato correcto
    if (productoSeleccionado && productoSeleccionado.Producto) {
      precioUnitario = preciosPorProducto[productoSeleccionado.Producto.toLowerCase()] || 0;
    } else {
      alert("Error al obtener el producto seleccionado. Por favor, inténtelo nuevamente.");
      break;
    }

  // Solicitar al usuario que ingrese la cantidad
    do {
      cantidad = parseInt(prompt("Ingrese la cantidad (mayor que 0):"));
      if (!isNaN(cantidad) && cantidad > 0) {
        break;
      } else {
        alert("Cantidad no válida. Por favor, ingrese un número mayor que 0.");
      }
    } while (true);

    // Preguntar al usuario si desea agregar el producto al carrito
const agregarAlCarrito = confirm(`Deseas agregar ${cantidad} ${productoSeleccionado.Producto}(s) al carrito?`);

if (agregarAlCarrito) {
  // Agregar el producto al carrito
  alert(`${cantidad} ${productoSeleccionado.Producto}(s) se han agregado al carrito.`);
} else {
  alert("Producto no agregado al carrito.");
}

  
    carritoUsuario.push({
      Producto: productoSeleccionado.Producto,
      cantidad: cantidad,
      precioUnitario: precioUnitario,
    });
  
    total += cantidad * precioUnitario;
  
    const agregarOtroProducto = confirm("¿Deseas agregar otro producto?");
    if (!agregarOtroProducto) {
      break;
    }
  
  } while (true);
  



  console.log("Resumen de la compra:");
  console.table(carritoUsuario);
 
// Título
const titulo = "⚡ Tienda online oficial ⚡";


// Mensaje total de la compra
const mensajeTotal = `${titulo}\n\nCompra realizada 🛒✅\n\n` +
  carritoUsuario.map(item => `Producto: ${item.Producto}\nCantidad: ${item.cantidad}\nPrecio: $${item.cantidad * item.precioUnitario}\n`).join('\n') +
  `\nTotal de la compra: $${total}💰\n\n¡Muchas gracias por tu compra!🙌😁`;



// Mostrar en consola
console.log(mensajeTotal);

// Mostrar en el elemento <h1> del documento
document.querySelector("h1").innerText = mensajeTotal;


// Agradecer al usuario por la compra
alert("¡Muchas gracias por tu compra! 🙌😁");
  console.log("Fin del programa");