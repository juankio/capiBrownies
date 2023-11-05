

// Define un array de productos directamente en el script
const productos = [
    {
        nombre: "Regular",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 55.00 },
            { nombre: "3 Personas", precio: 100.00 }
        ]
    },
    {
        nombre: "Nuez",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "3 Personas", precio: 100.00 }
        ]
    },
    {
        nombre: "Nutella",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "3 Personas", precio: 100.00 }
        ]
    },
    {
        nombre: "Coco",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "3 Personas", precio: 100.00 }
        ]
    },
    {
        nombre: "Zebra",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 45.00 },
            { nombre: "3 Personas", precio: 100.00 }
        ]
    },
    {
        nombre: "Oreo",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 50.00 },
            { nombre: "3 Personas", precio: 100.00 }
        ]
    },
    {
        nombre: "Cheescake",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 50.00 },
            { nombre: "3 Personas", precio: 100.00 }
        ]
    },
    {
        nombre: "Brookie",
        imagen: "https://imgs.search.brave.com/NvKGrBBdG4rGeB41i9kLW55HXyeQNvseRSBaQ2dCUoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NzcyMzczOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS11bmEtam92ZW4t/bGF0aW5hLXNvbnJp/ZW50ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cU9EaFNR/TEROb3F6a2E2YVNx/bkFBdXdIbXAxTVZC/OUhFUkU1bUxaUTZK/TT0",
        tamanos: [
            { nombre: "Invidual", precio: 55.00 },
            { nombre: "3 Personas", precio: 100.00 }
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
                        <div>
                        <p id="price${index}">${producto.tamanos[0].precio}</p>
                    </div>
                    <div class="extra content">
                        <button class="ui secondary button compra"
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
            abrirAlerta(`Has comprado el producto ${producto.nombre} +${tamano.textContent}+${priceParagraph.textContent}`);
        });
        botonCarrito.addEventListener("click", function () {
            agregarAlCarrito(producto, tamano.textContent, priceParagraph.textContent);
        });
    });
    function agregarAlCarrito(producto, tamano, precio) {
        carrito.push({ nombre: producto.nombre, tamano, precio });
        mostrarCarrito();
    }

    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;
        carrito.forEach((producto, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('item');
            listItem.innerHTML = `
                <i class="large cart middle aligned icon"></i>
                <div class="content">
                    <a class="header">${producto.nombre}</a>
                    <div class="description">Precio: $${producto.precio}</div>
                </div>
                <div class="right floated content">
                    <button class="ui red button eliminar">Eliminar</button>
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
