

// Define un array de productos directamente en el script
const productos = [
    {
        nombre: "Regular",
        imagen: "/brwnie.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 55.00 },
            { nombre: "Paquete de 10", precio: 400.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },
    {
        nombre: "Nuez",
        imagen: "/galleta.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "Paquete de 10", precio: 400.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },
    {
        nombre: "Nutella",
        imagen: "/nutella.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "Paquete de 10", precio: 400.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },
    {
        nombre: "Coco",
        imagen: "/coco.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "Paquete de 10", precio: 400.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },
    {
        nombre: "Zebra",
        imagen: "/zebra.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "Paquete de 10", precio: 400.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },
    {
        nombre: "Oreo",
        imagen: "/oreo.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 50.00 },
            { nombre: "Paquete de 10", precio: 100.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },
    {
        nombre: "Cheesecake",
        imagen: "/cheesecake.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 50.00 },
            { nombre: "Paquete de 10", precio: 100.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },
    {
        nombre: "Brookie",
        imagen: "/brookie.jpg",
        tamanos: [
            { nombre: "Invidual", precio: 55.00 },
            { nombre: "Paquete de 10", precio: 100.00 },
            { nombre: "Mega Brownie", precio: 100.00 }
        ]
    },

];

document.addEventListener("DOMContentLoaded", function () {
    const productosContainer = document.querySelector('.ui.grid.container');
    const carrito = [];
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');


    productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'column';
        card.innerHTML = `
            <div class="ui special cards">
                <div class="card">
                    <div class="blurring dimmable image">
                        <div class="ui dimmer">
        <div class="content">
            <div class="center">
                <div class="ui inverted button carrito" id="compra${index}"><i class="shopping cart icon" style="visibility: visible;"></i>Agregar al carrito</div>
            </div>
        </div>
        </div>
        <img src="${producto.imagen}">
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
            
        `;

        productosContainer.appendChild(card);

        const botonCarrito = card.querySelector('.carrito');
        const botonCompra = card.querySelector('.compra');
        const priceParagraph = card.querySelector(`#price${index}`);
        const tamano = card.querySelector(`#tamano${index}`);
        
        botonCompra.addEventListener("click", function () {
            const tamanoPrueba=priceParagraph.textContent == 100 ? '3 personas' : 'Individual'
            console.log("2   "+ tamanoPrueba)
            
            abrirAlerta(`${producto.imagen} ${producto.nombre} +${tamanoPrueba}+${priceParagraph.textContent}`);
        });
        botonCarrito.addEventListener("click", function () {
            const tamanoPrueba=priceParagraph.textContent == 100 ? '3 personas' : 'Individual'
            agregarAlCarrito(producto, tamanoPrueba, priceParagraph.textContent);
        });
    });
    function agregarAlCarrito(producto, tamanoPrueba, precio) {
        carrito.push({ nombre: producto.nombre, tamanoPrueba, precio, imagen:producto.imagen});
        mostrarCarrito();
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
