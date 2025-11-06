let foodInput = document.getElementById('foodInput');
let calorieInput = document.getElementById('calorieInput');
let addBtn = document.getElementById('addBtn');
let foodLog = document.getElementById('foodLog');
let totalCalories = document.getElementById('totalCalories');

let foodEntries = [];

addBtn.addEventListener('click', () => {
    const food = foodInput.value.trim();
    const calories = parseInt(calorieInput.value);

    if (!food || isNaN(calories) || calories <= 0) {
        alert("Please enter valid food name and calorie amount!");
        return;
    }

    foodEntries.push({ food, calories });
    renderLog();
    foodInput.value = '';
    calorieInput.value = '';
});

function renderLog() {
    foodLog.textContent = '';
    let total = 0;

    foodEntries.forEach(entry => {
        const div = document.createElement('div');
        div.classList.add('entry');
        div.textContent = `${entry.food} - ${entry.calories} kcal`;
        foodLog.appendChild(div);
        total += entry.calories;
    });

    totalCalories.textContent = `Total Calories: ${total} kcal`;
}