import StorageModule from "./storage.js";

const TrackerModule = (() => {
    let entries = StorageModule.load();

    const addEntry = (food, calorie) => {
        const today = new Date().toISOString().slice(0, 10);
        entries.push({ id: Date.now(), food, calorie, date: today });
        StorageModule.save(entries);
    };
    const deleteEntry = (id) => {
        entries = entries.filter(item => item.id !== id);
        StorageModule.save(entries);
    };

    const clearAll = () => {
        entries = [];
        StorageModule.clear();
    };

    const getdailyTotals = () => {
        return entries.reduce((acc, e) => {
            acc[e.date] = (acc[e.date] || 0) + e.calorie;
            return acc;
        }, {});
    };
    const getEntries = () => entries;

    return { addEntry, deleteEntry, clearAll, getdailyTotals, getEntries };
})();

export default TrackerModule;