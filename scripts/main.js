// set function for memory
function memoryCost(memoryPrice){
    const extraMemory = document.getElementById('extra-memory-cost');
    extraMemory.innerText = memoryPrice;
    totalPrice()
};

// function for SSD Storage 
function extraStorage(storagePrice){
    const updateStoragesPrice = document.getElementById('extra-storage-cost');
    updateStoragesPrice.innerText = storagePrice;
    totalPrice()
};

// function for delivery charge 
function deliveryCharge(charge){
    const delievryCost = document.getElementById('delivery-charge');
    delievryCost.innerText = charge;
    totalPrice()
};

// calculate total price
function totalPrice(){
    const bestPrice = document.getElementById('best-price');
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseInt(extraMemory.innerText);
    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageCost = parseInt(extraStorage.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryCost = parseInt(deliveryCharge.innerText);
    const totalAmout = bestPriceTotal + extraMemoryCost + extraStorageCost + deliveryCost;
    const total = document.getElementById('total-price');
    const toatalPrice =parseInt (total.innerText);
    total.innerText = totalAmout;
    // grand Total price
    document.getElementById('grand-total').innerText = totalAmout;
}
// promo code function
function promoCode(inputCode){
    const realPromo = 'stevekaku';
    if(inputCode == realPromo){
        document.getElementById('pormo-btn').disabled = 'true';
        const grandTotal = document.getElementById('grand-total').innerText;

        let calculation = parseFloat(grandTotal * .2);
        const finnalPrice = grandTotal - calculation;
        document.getElementById('grand-total').innerText = finnalPrice;
    }
}
// Add event handler for mermory
document.getElementById('memory-8-gb').addEventListener('click', function(){
    memoryCost(0);
});
document.getElementById('memory-16-gb').addEventListener('click', function(){
    memoryCost(180);
});

// Add event handler for SSD Storage 
document.getElementById('first-ssd-storage').addEventListener('click', function(){
    extraStorage(0);
});
document.getElementById('second-ssd-storage').addEventListener('click', function(){
    extraStorage(100);
});
document.getElementById('third-ssd-storage').addEventListener('click', function(){
    extraStorage(180);
});

// Delivery charge update
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCharge(0);
});
document.getElementById('express-delivery').addEventListener('click', function(){
    deliveryCharge(20);
});

// handle promocode button event

document.getElementById('pormo-btn'),addEventListener('click', function(){
    const inputPromo = document.getElementById('promo-code').value;
    promoCode(inputPromo);

    document.getElementById('promo-code').value = '';


})