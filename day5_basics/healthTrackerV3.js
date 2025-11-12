let foodInput = document.getElementById('foodInput');
let calorieInput = document.getElementById('calorieInput');
let addBtn = document.getElementById('addBtn');
let foodLog = document.getElementById('foodLog');
let totalCalories = document.getElementById('totalCalories');
let clearAllBtn = document.getElementById('clearAllBtn');
let calorieChart = document.getElementById('calorieChart');


let foodEntries = [];
let chartInstance = null;
loadData();

function addEntry() {
    const food = foodInput.value.trim();
    const calorie = parseInt(calorieInput.value);
    const today = new Date().toISOString().slice(0, 10); // "2025-11-12"

    if (!food || !isNaN(food) || isNaN(calorie) || calorie <= 0) {
        alert("Please enter valid food name and calorie amount!");
        return;
    }
    foodEntries.push({ id: Date.now(), food, calorie, date: today });
    foodInput.value = '';
    calorieInput.value = '';
}

function saveData() {
    localStorage.setItem('foodEntries', JSON.stringify(foodEntries));
}

function loadData() {
    let savedData = localStorage.getItem('foodEntries');
    if (savedData) {
        foodEntries = JSON.parse(savedData);
        renderLog();
    }
}

function handleEnter(e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        addBtn.click();
    }
}

foodInput.addEventListener('keydown', handleEnter);
calorieInput.addEventListener('keydown', handleEnter);

function deleteEntry(entry) {
    foodEntries = foodEntries.filter(item => item.id !== entry.id);
    saveData();
    renderLog();
    renderChart();
}

clearAllBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all data?')) {
        foodEntries = [];
        localStorage.removeItem('foodEntries');
        renderLog();
        if (chartInstance) chartInstance.destroy();
    }
});

function calculateDailyTotals() {
    return foodEntries.reduce((acc, entry) => {
        acc[entry.date] = (acc[entry.date] || 0) + entry.calorie;
        return acc;
    }, {});
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
    renderChart();
}


function renderChart() {
    const dailyTotals = calculateDailyTotals();

    if (chartInstance) {
     chartInstance.destroy();
     chartInstance = null;
    }

    if (!dailyTotals || Object.keys(dailyTotals).length === 0) return;

    chartInstance = new Chart(calorieChart, {
        type: 'bar',
        data: {
            labels: Object.keys(dailyTotals),
            datasets: [{
                label: 'Calories per Day',
                data: Object.values(dailyTotals),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        },
        options: { responsive: true }
    });
}


addBtn.addEventListener('click', () => {
    addEntry();
    renderLog();
    saveData();
});