const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

function calculateTotal() {
    const fastfoodQuantity = document.getElementById('fastfood-quantity').value;
    const juiceQuantity = document.getElementById('juice-quantity').value;
    const coffeeQuantity = document.getElementById('coffee-quantity').value;
    
    const fastfoodPrice = 5; // Example price
    const juicePrice = 3; // Example price
    const coffeePrice = 4; // Example price
    
    const totalAmount = (fastfoodQuantity * fastfoodPrice) + (juiceQuantity * juicePrice) + (coffeeQuantity * coffeePrice);
    
    document.getElementById('total-amount').value = totalAmount.toFixed(2);
}

function initMap() {
    const hotelLocation = { lat: -25.363, lng: 131.044 }; // Replace with your hotel's latitude and longitude
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: hotelLocation,
    });
    const marker = new google.maps.Marker({
        position: hotelLocation,
        map: map,
    });
}


