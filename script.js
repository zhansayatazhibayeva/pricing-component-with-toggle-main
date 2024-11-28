
// const basicYearly = document.getElementById("basic");
// const profYearly = document.getElementById("professional");
// const masterYearly = document.getElementById("master");

const prices = document.querySelectorAll('.price');

// console.log(basicYearly,profYearly,masterYearly);

const toggleBtn = document.getElementById("toggle-switch");

const monthlyPrice = ['$19.99', '$24.99', '$39.99'];
const annualPrice = ['$199.99', '$249.99', '$399.99'];

toggleBtn.addEventListener('change',function(){
    if(this.checked){
        prices.forEach((price,index) => {
            price.textContent = monthlyPrice[index];
        })
    }
    else{
        prices.forEach((price,index) => {
            price.textContent = annualPrice[index]; 
        })
        
    }
})