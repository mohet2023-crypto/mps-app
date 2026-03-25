function saveProcessingTimes(data) {
    localStorage.setItem('processingTimes', JSON.stringify(data));
}

function saveInventory(data) {
    localStorage.setItem('inventory', JSON.stringify(data));
}

function saveForecast(data) {
    localStorage.setItem('forecast', JSON.stringify(data));
}

function saveOrders(data) {
    localStorage.setItem('orders', JSON.stringify(data));
}

function saveCapacity(data) {
    localStorage.setItem('capacity', JSON.stringify(data));
}

function savePolicy(data) {
    localStorage.setItem('policy', JSON.stringify(data));
}

function loadProcessingTimes() {
    return JSON.parse(localStorage.getItem('processingTimes')) || [];
}

function loadInventory() {
    return JSON.parse(localStorage.getItem('inventory')) || [];
}

function loadForecast() {
    return JSON.parse(localStorage.getItem('forecast')) || [];
}

function loadOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

function loadCapacity() {
    return JSON.parse(localStorage.getItem('capacity')) || [];
}

function loadPolicy() {
    return JSON.parse(localStorage.getItem('policy')) || {};
}

function clearAllData() {
    localStorage.clear();
    alert('All data cleared!');
}