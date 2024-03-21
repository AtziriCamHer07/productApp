class Product {
    constructor(name, price, quantity, date){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
        
    }
}

class UI{
    showMessage(message, cssClass){
        const element = document.createElement('div');
        element.className = `alert alert-${cssClass} mt-2`;
        element.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);

        //callbacks
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function(e){
    e.preventDefault(); /* Evita que el formulario reinicie su comportamiento de flashear */
    const ui = new UI();
    
    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const quantity = document.querySelector("#quantity").value;
    const date = document.querySelector("#date").value;

    if(name.length == 0 &&  price.length == 0 && quantity.length == 0 && date.length == 0){
        ui.showMessage('Product isnt added', 'danger');
    } else if(name.length == 0 ||  price.length == 0 || quantity.length == 0 || date.length == 0){
        ui.showMessage('Precaution! Inputs is empty', 'warning');
    } else {
        ui.showMessage('Product added successfully', 'success');
    }
    
    console.log(`Name: ${name}, price: ${price}, quantity: ${quantity}, date: ${date}`);
});