const UIModule = (() => {
    const foodInput = document.getElementById('foodInput');
    const calorieInput = document.getElementById('calorieInput');
    const addBtn = document.getElementById('addBtn');
    const foodLog = document.getElementById('foodLog');
    const totalCalories = document.getElementById('totalCalories');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const calorieChart = document.getElementById('calorieChart').getContext('2d');

    let chartInstance = null;

    const renderLog = (entries, onDelete) => {
        foodLog.innerHTML = '';
        let total = 0;

        entries.forEach(entry => {
            const div = document.createElement('div');
            div.textContent = `${entry.food} - ${entry.calorie} kcal `;

            const delBtn = document.createElement('button');
            delBtn.textContent = '❌';
            delBtn.addEventListener('click', () => onDelete(entry.id));

            div.appendChild(delBtn);
            foodLog.appendChild(div);
            total += entry.calorie;
        });

        totalCalories.textContent = `Total Calories: ${total} kcal`;
    };

    const renderChart = (dailyTotals) => {
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
    };

    return { foodInput, calorieInput, addBtn, clearAllBtn, renderLog, renderChart };
})();

export default UIModule;
