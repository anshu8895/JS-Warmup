const StorageModule = (() => {
    const STORAGE_KEY = 'foodEntries';

    function save(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function load() {
        const savedData = localStorage.getItem(STORAGE_KEY);
        return savedData ? JSON.parse(savedData) : [];
    }

    function clear() {
        localStorage.removeItem(STORAGE_KEY);
    }
    return {save, load, clear};
})();

export default StorageModule;