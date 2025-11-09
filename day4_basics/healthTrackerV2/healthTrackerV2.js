let foodInput = document.getElementById('foodInput');
let calorieInput = document.getElementById('calorieInput');
let addBtn = document.getElementById('addBtn');
let foodLog = document.getElementById('foodLog');
let totalCalories = document.getElementById('totalCalories');

let foodEntries = [];
loadData();

function addEntry() {
    let food = foodInput.value.trim();
    let calorie = parseInt(calorieInput.value);

    if (!food || isNaN(calorie) || calorie <= 0) {
        alert("Please enter valid food name and calorie amount!");
        return;
    }
    foodEntries.push({ food, calorie });
    foodInput.value = '';
    calorieInput.value = '';
}

function deleteEntry(entry) {
    foodEntries = foodEntries.filter(item => item !== entry);
    renderLog();
    saveData();
}

function saveData() {
    let localData = localStorage.setItem('foodEntries', JSON.stringify(foodEntries));
    return localData;
}

function loadData() {
    const saved = localStorage.getItem('foodEntries');
    if (saved) {
        foodEntries = JSON.parse(saved);
        renderLog();
    }
}

function renderLog() {
    foodLog.innerHTML = '';
    let total = 0;

    foodEntries.forEach(entry => {
        const div = document.createElement('div');
        div.textContent = `${entry.food} - ${entry.calorie} `;

        const delBtn = document.createElement('button');
        delBtn.textContent = '❌';
        delBtn.addEventListener('click', () => deleteEntry(entry));
        div.appendChild(delBtn);

        foodLog.appendChild(div);
        total += entry.calorie;
    });
    totalCalories.textContent = `Total Calories: ${total} kcal`;
}


addBtn.addEventListener('click', () => {
    addEntry();
    renderLog();
    saveData();
});