let btn = document.getElementById('btn');
let healthTipsForTheDay = document.getElementById('healthTipsForTheDay');

const healthTips = [
    "Drink at least 2 liters of water daily 💧",
    "Sleep 7-8 hours every night 😴",
    "Take short breaks while working 💻",
    "Eat more fruits and vegetables 🍎",
    "Do 15 minutes of stretching daily 🧘‍♂️"
];

function randomTip() {
    const index = Math.floor(Math.random() * healthTips.length);
    return healthTips[index];
}

function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256); // 0-255
    const b = Math.floor(Math.random() * 256); // 0-255
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {
    healthTipsForTheDay.textContent = randomTip();
    document.body.style.backgroundColor = changeBackgroundColor();
});