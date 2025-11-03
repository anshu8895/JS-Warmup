let weight = document.getElementById('weightInput');
let height = document.getElementById('heightInput');
let BMIbtn = document.getElementById('BMIbtn');
let BMIinfo = document.getElementById('BMIinfo');

BMIbtn.addEventListener('click', () => {
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value);

    if (!w || !h || w <= 0 || h <= 0) {
        BMIinfo.textContent = '⚠️ Please enter valid weight and height values.';
        return;
    }

    let BMI = w / (h * h);
    let result;

    if (BMI < 18.5) {
        result = 'Underweight';
    } else if (BMI < 24.9) {
        result = 'Normal';
    } else if (BMI < 29.9) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }

    BMIinfo.textContent = `BMI Index is :${BMI.toFixed(2)} (${result})`;
});