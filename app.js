const donateButton = document.getElementById("donate-btn");
donateButton.addEventListener("click", function () {
    const donateAmount = getInputFieldById('donate-input')

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

//donate2-in-feni-start
const donateButtonFeni = document.getElementById("donate-btn-feni");
donateButtonFeni.addEventListener("click", function () {
    const donateAmount = getInputFieldById('donate-input-feni')

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
   <div class="border rounded-xl"> <h3 class="font-semibold text-2xl text-center mb-12">${donateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
   <p class="text-center"> Date : ${now}</p>
   </div>
    `
    
    document.getElementById("history-container").appendChild(div);


    const feni = parseFloat(document.getElementById("feni-balance").innerText);

    const feniNewBalance = donateAmount + feni;
    
    document.getElementById("feni-balance").innerText = feniNewBalance
    
    
    
})

//donate2-in-feni-end

//donate3-in-quota-movement-start
const donateButtonQuota = document.getElementById("donate-btn-quota");
donateButtonQuota.addEventListener("click", function () {
    const donateAmount = getInputFieldById('donate-input-quota')

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
   <div class="border rounded-xl"> <h3 class="font-semibold text-2xl text-center mb-12">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
   <p class="text-center"> Date : ${now}</p>
   </div>
    `
    
    document.getElementById("history-container").appendChild(div);


    const quota = parseFloat(document.getElementById("quota-balance").innerText);

    const quotaNewBalance = donateAmount + quota;
    
    document.getElementById("quota-balance").innerText = quotaNewBalance
    
    
    
})

//donate3-in-quota-movement-end




document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "/faq.html"
    
    
})

