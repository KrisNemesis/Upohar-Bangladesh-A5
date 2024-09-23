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
    const now = new Date()
    const div = document.createElement('div')
    div.innerHTML = `
   <div class="border rounded-xl"> <h3 class="font-semibold text-2xl text-center mb-12">${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
   <p class="text-center"> Date : ${now}</p>
   </div>
    `
    
    document.getElementById("history-container").appendChild(div);


    const noakhali = parseFloat(document.getElementById("noakhali-balance").innerText);

    const noakhaliNewBalance = donateAmount + noakhali;
    
    document.getElementById("noakhali-balance").innerText = noakhaliNewBalance
    
    
    
})

