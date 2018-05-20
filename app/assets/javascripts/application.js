// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require_tree .

function addToCart(pizzaId){
    var key = 'pizza_' + pizzaId;
    var amount = parseInt(window.localStorage.getItem(key)) || 0;
    amount ++;
    window.localStorage.setItem(key, amount);
    updateOrdersButton();
}

function enumerateItems() {
    var sum = 0;
    for(var i = 0; i < window.localStorage.length; i++){
        var key = window.localStorage.key(i);
        if (key.indexOf('pizza_') == 0){
            sum += parseInt(window.localStorage.getItem(key));
        }
    }
    return sum;
}

function updateOrdersButton() {
    var ordersButtonText = 'Cart(' + enumerateItems() + ')';
    $('#orderButton').text(ordersButtonText);
}

function getOrderData(){
    var result = {};
    for(var i = 0; i < window.localStorage.length; i++){
        var key = window.localStorage.key(i);
        if (key.indexOf('pizza_') == 0){
            pizzaId = key.split('_')[1];
            amount = parseInt(window.localStorage.getItem(key));
            result[pizzaId] = amount;
        }
    }
    return result;
}

function clearLocalStorage(){
    debugger;
    window.localStorage.clear();
}
