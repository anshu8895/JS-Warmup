// exercise 1
const product = {
    id: 1,
    name: 'sampleProduct',
    price: 100,
    stock: 6
};

// exercise 2
const updatedProduct = {
    ...product,
    price: 110,
    stock: 12
};

// console.log(product);
// console.log(updatedProduct);

// exercise 3
const laptop = {
    brand: 'Dell',
    specs: {
        ram: '16GB',
        storage: '512GB'
    }
};

const { brand: brandName, specs: { ram, storage } } = laptop;

// exercise 4
const defaults = { theme: "light", fontsize: 14 };
const overrides = { fontsize: 20, language: "en" };

const mergeObj = { ...defaults, ...overrides };
// console.log(mergeObj);


// exercise 5
const tasks = [
    { id: 1, title: "Code", completed: false },
    { id: 2, title: "Sleep", completed: false },
    { id: 3, title: "Eat", completed: true }
];

const newTask = tasks.map(task => 
    task.id === 2 ? { ...task, completed: true } : task
);
// console.log(newTask);


const filtered = tasks.filter(task => task.id !== 3);
// console.log(filtered);


const updatedTasks = [
    ...tasks,
    { id: 4, title: "Repeat", completed: false }
];
// console.log(updatedTasks);


//mini project
let defaultSettings = {
    theme: "light",
    language: "English",
    notifications: {
        email: true,
        sms: false
    }
};

let settings = structuredClone(defaultSettings);


function updateTheme(newTheme) {
    return {
        ...settings,
        theme: newTheme
    };
}
console.log(updateTheme('Dark'));


function toggleEmailNotifications() {
    return {
        ...settings,
        notifications: {
            ...settings.notifications,
            email: !settings.notifications.email
        }
    };
}
console.log(toggleEmailNotifications());


function changeLanguage(lang) {
    return {
        ...settings,
        language: lang
    };
}
console.log(changeLanguage('Hindi'));



function resetSettings() {
    return structuredClone(defaultSettings)
}

console.log(resetSettings());

