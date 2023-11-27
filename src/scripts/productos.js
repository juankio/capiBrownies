

// Define un array de productos directamente en el script
const productos = [
    {
        nombre: "Regular",
        id: 1,
        imagen: "/brwnie.jpg",
        cantidad: 0,
        descripcion:"Delicioso Capibrownie clásico, perfecto para acompañar tu café o té. Cada bocado te sumerge en la ternura de las capibaras, transformando tu momento de disfrute en una experiencia única.",
        tamanos: [
            { nombre: "Invidual", id: 1, precio: 55.00 },
            { nombre: "Paquete de 10", id: 7, precio: 400.00 },
            { nombre: "Mega Brownie", id: 3, precio: 100.00 }
        ]
    },
    {
        nombre: "Nuez",
        id: 2,
        imagen: "/galleta.jpg",
        cantidad: 0,
        descripcion:"Capibrownie crujiente con trozos de nuez, una combinación irresistible de texturas y sabores. ",
        tamanos: [
            { nombre: "Invidual", id: 4,  precio: 45.00 },
            { nombre: "Paquete de 10", id: 2, precio: 400.00 },
            { nombre: "Mega Brownie",id: 3, precio: 100.00 }
        ]
    },
    {
        nombre: "Nutella",
        id: 3,
        imagen: "/nutella.jpg",
        cantidad: 0,
        descripcion:"Exquisito Capibrownie relleno con la deliciosa crema de avellanas Nutella, un placer supremo para los amantes del chocolate. Vive la experiencia capibara con cada porción indulgente.",
        tamanos: [
            { nombre: "Invidual", id: 4,  precio: 45.00 },
            { nombre: "Paquete de 10", id: 2, precio: 400.00 },
            { nombre: "Mega Brownie", id: 3, precio: 100.00 }
        ]
    },
    {
        nombre: "Coco",
        id: 4,
        imagen: "/coco.jpg",
        cantidad: 0,
        descripcion:"Capibrownie con sabor a coco, ideal para aquellos que buscan un toque tropical en sus postres. Descubre la suavidad y dulzura que solo las capibaras pueden ofrecer en esta deliciosa creación.        ",
        tamanos: [
            { nombre: "Invidual", id: 4, precio: 45.00 },
            { nombre: "Paquete de 10", id: 2, precio: 400.00 },
            { nombre: "Mega Brownie", id: 3,precio: 100.00 }
        ]
    },
    {
        nombre: "Zebra",
        id: 5,
        imagen: "/zebra.jpg",
        cantidad: 0,
        descripcion:"Capibrownie con rayas de chocolate blanco y negro, una mezcla armoniosa de sabores intensos. Siente la diversión y la ternura de las capibaras en cada mordisco de esta galleta única.",
        tamanos: [
            { nombre: "Invidual", id: 4, precio: 45.00 },
            { nombre: "Paquete de 10", id: 2, precio: 400.00 },
            { nombre: "Mega Brownie", id: 3,precio: 100.00 }
        ]
    },
    {
        nombre: "Oreo",
        id: 6,
        imagen: "/oreo.jpg",
        cantidad: 0,
        descripcion:"Clásico Capibrownie en forma de galleta sandwich con relleno de crema, un favorito atemporal para todas las edades. Deja que la dulzura de las capibaras se convierta en el ingrediente secreto de tu momento de placer.",
        tamanos: [
            { nombre: "Invidual", id: 5, precio: 50.00 },
            { nombre: "Paquete de 10", id: 6, precio: 450.00 },
            { nombre: "Mega Brownie", id: 3,precio: 100.00 }
        ]
    },
    {
        nombre: "Cheesecake",
        id: 7,
        imagen: "/cheesecake.jpg",
        cantidad: 0,
        descripcion:"Capibrownie con sabor a pastel de queso, una deliciosa experiencia que te transportará a la tradición de los postres. Disfruta de la suavidad y ternura que solo las capibaras pueden agregar a esta delicia.",
        tamanos: [
            { nombre: "Invidual", id: 5, precio: 50.00 },
            { nombre: "Paquete de 10", id: 6, precio: 450.00 },
            { nombre: "Mega Brownie", id: 3, precio: 100.00 }
        ]
    },
    {
        nombre: "Brookie",
        id: 8,
        imagen: "/brookie.jpg",
        cantidad: 0,
        descripcion:"La combinación perfecta entre Capibrownie y galleta, para los amantes de los dulces decadentes. Sumérgete en la fusión de sabores y texturas, donde la magia de las capibaras se une a la indulgencia del brownie y la galleta.",
        tamanos: [
            { nombre: "Invidual", id: 1, precio: 55.00 },
            { nombre: "Paquete de 10", id: 7, precio: 500.00 },
            { nombre: "Mega Brownie", id: 3, precio: 100.00 }
        ]
    },

];

document.addEventListener("DOMContentLoaded", function () {
    const productosContainer = document.querySelector('.ui.grid.container');
    const carrito = [];
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');
    const pagar = document.getElementById('pagar');


    productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'column';
        card.innerHTML = `
        <div class="ui special cards">
    <div class="card">
        <div class="blurring dimmable image" style="height: 200px; width: 100%; overflow: hidden; position: relative;">
            <div class="ui dimmer">
                <div class="content">
                    <div class="center">
                        <button class="ui inverted button carrito" id="compra${index}">
                            <i class="shopping cart icon" style="visibility: visible;"></i>Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
            <img style="height: 200px; width: 100%; object-fit: cover; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" src="${producto.imagen}">
        </div>
        <div class="content">
                <a class="header" href="#" style="margin-bottom: 10px;">${producto.nombre}</a>
                <div class="ui form">
                    <div class="field">
                        <div class="ui selection dropdown" id="despegable${index}" style="margin-bottom: 10px;">
                            <input type="hidden" name="tamaño">
                            <i class="dropdown icon"></i>
                            <div class="default text">Tamaño</div>
                            <div class="menu" id="tamano${index}">
                                ${producto.tamanos.map(tamano => `
                                    <div class="item" data-value="${tamano.precio}">${tamano.nombre}</div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        $<p id="price${index}" style="display: inline; margin-right: 10px;">${producto.tamanos[0].precio}</p>
                        </div>
                    <div class="extra content">
                        <button class="ui secondary button compra" style="margin-top: 10px;">
                            <a href="#" style="color: #F4F3EE;">Comprar</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>  
        `;

        productosContainer.appendChild(card);

        const botonCarrito = card.querySelector('.carrito');
        const botonCompra = card.querySelector('.compra');
        const priceParagraph = card.querySelector(`#price${index}`);
        const tamano = card.querySelector(`tamano${index}`);
        const indexCarrito = card.querySelector(`#compra${index}`);

        console.log('>:)',tamano)
        
        botonCompra.addEventListener("click", function () {
            const tamanoPrueba = priceParagraph.textContent == 100 ? 'Mega Brownie' : priceParagraph.textContent >= 400 ? '10 personas' : 'Individual';
            console.log("2   "+ tamanoPrueba)
            abrirAlerta(` ${producto.nombre} +${tamanoPrueba}+total a pagar:${priceParagraph.textContent}`);
        });
        botonCarrito.addEventListener("click", function () {
            const tamanoPrueba = priceParagraph.textContent == 100 ? 'Mega Brownie' : priceParagraph.textContent >= 400 ? '10 personas' : 'Individual';
            enviarDatosAlServidor(priceParagraph.textContent,  producto.id, indexCarrito);
            agregarAlCarrito(producto, tamanoPrueba, priceParagraph.textContent);
        });
        pagar.addEventListener("click", function () {
            
            if (totalCarrito.textContent!='$0') {
                abrirAlerta(`Productos agregados correctamente total:${totalCarrito.textContent}`);
                
            }else{
                abrirAlerta(`No hay productos en el carrito`);
            }
        });
        
    });
    function agregarAlCarrito(producto, tamanoPrueba, precio) {
        const prueba = producto.tamanos.map(tamano => tamano.id)
        carrito.push({ nombre: producto.nombre, tamanoPrueba, precio, imagen:producto.imagen});
        mostrarCarrito();
    }
    function enviarDatosAlServidor( precio, id, indexCarrito) {
        $(indexCarrito).on('click', function (e) {
            e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    
            const data = {
                precio,
                id
            };
    
            $.ajax({
                type: "POST",
                url: "/agregarCarrito",
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function (response) {
                    abrirAlerta2("Producto agregado al carrito exitosamente");
                },
                error: function (error) {
                    abrirAlerta("Algo salió mal, inténtalo de nuevo");
                }
            });
        });
    }
    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;
        
        carrito.forEach((producto, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('item');
            listItem.innerHTML = `
            <div class="ui image" >
                <img src="${producto.imagen}" alt="Imagen del producto" style="max-width: 100px; max-height: 50px;">
            </div>
            <div class="content">
            <a class="header">${producto.nombre}</a>
            <div class="description">Precio: $${producto.precio}</div>
            <div class="description">Tamaño:${producto.tamanoPrueba}</div>
            <div class="right floated content"> 
            <button class="ui brown button eliminar">
            <i class="trash alternate icon"></i>
            </button>
            </div>
                </div>
            `;
    
            const divider = document.createElement('div');
            divider.classList.add('ui', 'divider');
    
            listaCarrito.appendChild(listItem);
            listaCarrito.appendChild(divider);
    
            total += parseFloat(producto.precio);
    
            const botonEliminar = listItem.querySelector('.eliminar');
            botonEliminar.addEventListener('click', function () {
                carrito.splice(index, 1); 
                mostrarCarrito();
            });
        });
    
        totalCarrito.textContent = total.toFixed(2);

    }
    // Agrega el controlador de eventos para el botón de compra aquí
    // ...
    $(document).ready(function () {
        $('#hamburger').click(function () {
            $('.ui.sidebar').sidebar('toggle');
        });
    });
    $('.special.cards .image').dimmer({
        on: 'ontouchstart' in document.documentElement ? 'click' : 'hover'
    });

    $('.ui.rating').rating();

    $('.selection.dropdown')
        .dropdown();
    productos.forEach((producto, index) => {
        $(`#despegable${index}`).dropdown({
            onChange: function (value, text, $selectedItem) {
                $(`#price${index}`).text(parseInt(value));
            }
        });
    });

    $(document).ready(function() {
        $('#miBoton').popup({
            popup: '.ui.popup',
            on: 'click',
            position: 'top center'
        });
    });

});
// funciones para alerta 
function abrirAlerta(mensaje) {
    document.getElementById("alertaMessage").textContent = mensaje;
    $('#alerta').modal('show');
}

function cerrarAlerta() {
    $('#alerta').modal('hide');
}
