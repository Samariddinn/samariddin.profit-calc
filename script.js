// phase of getting all variables
const itemEl = document.querySelector('.item');
const boughtItemPriceEl = document.querySelector('.bought-item__price');
const sellingItemEl = document.querySelector('.selling-item');
const profitBtn = document.querySelector('.benefit-btn');
const profitText = document.querySelector('.profit__text');
const resetBtn = document.querySelector('.reset__btn');

// When the input item has number
itemEl.addEventListener('input', function () {
    if (/\d/.test(itemEl.value)) {
        alert('Numbers are not allowed in the item name!');
        itemEl.value = itemEl.value.replace(/\d/g, ''); // For removing numbers from input
    }
});

// When button clicks
profitBtn.addEventListener('click', function() {
    const generalVal =  sellingItemEl.value - boughtItemPriceEl.value;
    if(generalVal > 0) {
        profitText.textContent = `The item sold to ${sellingItemEl.value}, and this is your profit🔥 : ${generalVal}`
    } //When input fields do not fill in.
    else if (!itemEl.value || !boughtItemPriceEl.value || !sellingItemEl.value) {
        profitText.textContent = 'Please fill in all fields!';
        profitText.style.color = 'red';
    }   // When their value equal to zero
    else if (generalVal === 0) {
        profitText.textContent = `No profit or loss `;
        profitText.style.color = 'orange';
    } // When there is a minus cash
    else {
        profitText.textContent = `Unfortunately, you are burdened with debt😄`;
    }
})

resetBtn.addEventListener('click', function() {
    itemEl.value = '';
    boughtItemPriceEl.value = '';
    sellingItemEl.value = '';

    profitText.textContent = '';
})