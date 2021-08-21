//get customize prices id
function customizePrice(inputId, value) {
    const extraMemoryCost = document.getElementById(inputId);
    extraMemoryCost.innerText = value;
}

//total price
function totalPrice() {
    const bestPrice = document.getElementById("best-price").innerText;
    const extraMemoryCost = document.getElementById('memory-cost').innerText;
    const extraStorageCost = document.getElementById('storage-cost').innerText;
    const extraDeliveryCost = document.getElementById('delivery-cost').innerText;

    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = parseInt(bestPrice) + parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(extraDeliveryCost);

}

//event handler for memory 
document.getElementById('8gb-memory').addEventListener('click', function () {
    customizePrice('memory-cost', 0);
    totalPrice();
})
document.getElementById('16gb-memory').addEventListener('click', function () {

    customizePrice('memory-cost', 180);
    totalPrice();

})

////event handler for storage
document.getElementById('256GB-storage').addEventListener('click', function () {
    customizePrice('storage-cost', 0);
    totalPrice();
})
document.getElementById('512GB-storage').addEventListener('click', function () {

    customizePrice('storage-cost', 100);
    totalPrice();
})
document.getElementById('1TB-storage').addEventListener('click', function () {
    customizePrice('storage-cost', 180);
    totalPrice();
})

////event handler for delivery cost
document.getElementById('aug-25-delivery').addEventListener('click', function () {
    customizePrice('delivery-cost', 0);
    totalPrice();
})

document.getElementById('aug-21-delivery').addEventListener('click', function () {

    customizePrice('delivery-cost', 20);
    totalPrice();
})

//promo code apply

function applyPromo() {
    const inputPromo = document.getElementById('promo-code').value;

    if (inputPromo == 'stevekaku') {
        console.log('promo')
        const totalCost = document.getElementById('total-cost').innerText;
        const totalCostAmount = parseFloat(totalCost);
        const usedPromo = (totalCostAmount - (totalCostAmount * 0.2));

        const totalAmount = document.getElementById('total-amount');
        totalAmount.innerText = usedPromo;

    }
}

