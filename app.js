const donateButton = document.getElementById("donate-btn");
donateButton.addEventListener("click", function () {
    const donateAmount = parseFloat(document.getElementById("donate-input").value)

    if (isNaN(donateAmount)) {
        alert('Failed To Doante!')
        return;
        
    }
    
    const balance = parseFloat(document.getElementById("account-balance").innerText);
   
    const newBalance = balance - donateAmount;

    if (donateAmount > balance) {
        alert('You donot Have Sufficient Money For Donate!');
        return;
    }
    
    document.getElementById("account-balance").innerText = newBalance;

    const noakhali = parseFloat(document.getElementById("noakhali-balance").innerText);

    const noakhaliNewBalance = donateAmount + noakhali;

    document.getElementById("noakhali-balance").innerText = noakhaliNewBalance
    
    
    
})

