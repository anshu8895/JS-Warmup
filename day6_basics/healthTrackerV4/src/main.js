import TrackerModule from "./tracker.js";
import UIModule from "./ui.js";

function updateUI() {
    const entries = TrackerModule.getEntries();
    const dailyTotals = TrackerModule.getdailyTotals();
    UIModule.renderLog(entries, handleDelete);
    UIModule.renderChart(dailyTotals);
}

function handleAdd() {
    const food = UIModule.foodInput.value.trim();
    const calorie = parseInt(UIModule.calorieInput.value);

    if (!food || !isNaN(food) || isNaN(calorie) || calorie <= 0) {
        alert('Enter valid food name and calories');
        return;
    }

    TrackerModule.addEntry(food, calorie);
    updateUI();
    UIModule.foodInput.value = '';
    UIModule.calorieInput.value = '';
}

function handleDelete(id) {
    TrackerModule.deleteEntry(id);
    updateUI();
}

function handleClear() {
    if (confirm('Are you sure you want to clear all data?')) {
        TrackerModule.clearAll();
        updateUI();
    }
}

UIModule.addBtn.addEventListener('click', handleAdd);
UIModule.clearAllBtn.addEventListener('click', handleClear);

updateUI();
