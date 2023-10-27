// Espera a que se cargue completamente el documento HTML
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene referencias a elementos HTML por sus IDs
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    let total = 0; // Variable para llevar un seguimiento del precio total del pedido

    // Evita el envío del formulario al hacer clic en el botón "add-to-order"
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Maneja el evento clic en el botón "add-to-order"
    document.getElementById("add-to-order").addEventListener("click", function () {
        // Obtiene valores seleccionados por el usuario
        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        // Calcula el precio del plato y la bebida seleccionados
        const dishPrice = calculateDishPrice(dish) * dishQuantity;
        const drinkPrice = calculateDrinkPrice(drink) * drinkQuantity;
        const subtotal = dishPrice + drinkPrice;

        // Crea un nuevo elemento HTML para mostrar el resumen del pedido
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `Plato: ${dish} (x${dishQuantity}), Bebida: ${drink} (x${drinkQuantity})`;

        // Agrega el elemento de pedido al resumen del pedido
        orderSummary.appendChild(orderItem);

        // Actualiza el precio total y lo muestra en la página
        total += subtotal;
        totalPrice.textContent = total.toFixed();
    });

    // Función para calcular el precio del plato seleccionado
    function calculateDishPrice(dish) {
        // Define los precios de los platos
        let hamburguesa = 10000;
        let pizza = 8000;
        let mazorcada = 15000;
        let pataconas = 14000;
        let alitas = 8000;

        switch (dish) {
            case "hamburguesa":
                return hamburguesa;
            case "pizza":
                return pizza;
            case "mazorcada":
                return mazorcada;
            case "pataconas":
                return pataconas;
            case "alitas":
                return alitas;
            default:
                return 0; // Devuelve 0 si el plato no se encuentra en la lista.
        }
    }

    // Función para calcular el precio de la bebida seleccionada
    function calculateDrinkPrice(drink) {
        // Define los precios de las bebidas
        let agua = 2500;
        let refresco = 3500;
        let cerveza = 5000;

        switch (drink) {
            case "agua":
                return agua;
            case "refresco":
                return refresco;
            case "cerveza":
                return cerveza;
            default:
                return 0; // Devuelve 0 si la bebida no se encuentra en la lista.
        }
    }
});
