let weight = document.getElementById('weightInput');
let height = document.getElementById('heightInput');
let BMIbtn = document.getElementById('BMIbtn');
let BMIinfo = document.getElementById('BMIinfo');

BMIbtn.addEventListener('click', () => {
    let w = weight.value;
    let h = height.value;

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

    BMIinfo.innerHTML = `BMI Index is :${BMI} (${result})`;
});