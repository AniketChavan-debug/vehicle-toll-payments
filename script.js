document.getElementById('vehicleType').addEventListener('change', function() {
    const vehicleType = this.value;
    const tollAmountField = document.getElementById('tollAmount');
    
    // Set toll fee based on vehicle type
    let tollAmount = 0;
    if (vehicleType === 'car') {
        tollAmount = 10;  // Example toll fee for cars
    } else if (vehicleType === 'truck') {
        tollAmount = 20;  // Example toll fee for trucks
    } else if (vehicleType === 'motorcycle') {
        tollAmount = 5;   // Example toll fee for motorcycles
    }

    tollAmountField.value = tollAmount ? `$${tollAmount}` : '';  // Display amount
});

document.getElementById('tollForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit
    
    const vehicleType = document.getElementById('vehicleType').value;
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    const tollAmount = document.getElementById('tollAmount').value;
    const paymentStatusDiv = document.getElementById('paymentStatus');
    
    if (vehicleType && vehicleNumber && tollAmount) {
        paymentStatusDiv.textContent = `Payment of ${tollAmount} for vehicle ${vehicleNumber} (${vehicleType}) is successful!`;
        paymentStatusDiv.style.color = 'green';
    } else {
        paymentStatusDiv.textContent = 'Please fill in all fields correctly.';
        paymentStatusDiv.style.color = 'red';
    }
});
