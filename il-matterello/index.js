// Agregar manejadores de eventos

// DOMContentLoaded es el evento que se dispara cuando se termina de cargar
// la estructura de la página HTML.
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM se cargó satisfactoriamente");

    function handle_click() {
        alert("¡Gracias por reservar!");
        btn_reserve.removeEventListener("click", handle_click);
        alert("Botón desactivado");
    };

    // Para hacer referencia al botón se crea una constante y se trae el 
    // elemento del HTML con document.getElementById()
    const btn_reserve = document.getElementById("btn-reserve");

    // Agregar el manejador de evento para el evento click
    btn_reserve.addEventListener("click", handle_click);
});


