// parkDetails.js
const parks = [
    { name: "Nairobi National Park", location: "Nairobi", price: 50 },
    { name: "Masai Mara", location: "Narok", price: 70 },
    { name: "Lake Nakuru", location: "Nakuru", price: 40 }
];

// Function to display park details
function displayParks() {
    const parkContainer = document.getElementById('park-details');
    parks.forEach(park => {
        const parkInfo = document.createElement('div');
        parkInfo.innerHTML = `<h3>${park.name}</h3><p>Location: ${park.location}</p><p>Price: $${park.price}</p>`;
        parkContainer.appendChild(parkInfo);
    });
}

// Form Validation
function validateForm(form) {
    if (!form.name.value) {
        alert('Please enter your name');
        return false;
    }
    if (!form.date.value) {
        alert('Please select a date');
        return false;
    }
    return true;
}

// Booking System
function bookPark() {
    const form = document.getElementById('booking-form');
    if (validateForm(form)) {
        const selectedPark = form.park.value;
        const park = parks.find(p => p.name === selectedPark);
        const bookingDetails = document.getElementById('booking-details');
        bookingDetails.innerHTML = `<h3>Booking confirmed for ${park.name}</h3>`;
    }
}

// Price Calculation
function calculatePrice(parkName, numberOfVisitors) {
    const park = parks.find(p => p.name === parkName);
    return park ? park.price * numberOfVisitors : 0;
}

// Payment Processing (Mockup)
function processPayment(amount) {
    alert(`Processing payment of $${amount}`);
}