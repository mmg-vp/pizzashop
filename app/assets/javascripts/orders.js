$(function(){
    var orderData = getOrderData();
    $('#order-content').val(JSON.stringify(orderData));
});
