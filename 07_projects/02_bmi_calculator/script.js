const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();//this is for making stable
    const height = parseInt(document.querySelector('#height').value);//pareseint is using becoz .value will give us in string
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `please enter valid height ${height}`
    }
    if (weight === ' ' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `please enter valid weight ${weight}`
    } else {
        const bmi = (weight/((height*height)/1000)).toFixed(2)
        if(bmi<18.6){
            results.innerHTML = `<span>${bmi} Under Weight = Less than 18.6</span>`;
        }
        if(18.6<bmi||bmi<24.9){
            results.innerHTML = `<span>${bmi} Normal Range = 18.6 and 24.9</span>`;
        }
        if(bmi>24.9){
            results.innerHTML = `<span>${bmi} Overweight = Greater than 24.9</span>`;
        }
    }
})