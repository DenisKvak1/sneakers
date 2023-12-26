// Сохранение данных в локальное хранилище
export function saveData(key, data) {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
        console.log(`Data saved successfully for key: ${key}`);
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

// Извлечение данных из локального хранилища
export function loadData(key) {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            console.log(`No data found for key: ${key}`);
            return null;
        }

        const data = JSON.parse(serializedData);
        console.log(`Data loaded successfully for key: ${key}`);
        return data;
    } catch (error) {
        console.error('Error loading data:', error);
        return null;
    }
}
export function writeToSessionStorage(key, data) {
    try {
        const serializedData = JSON.stringify(data);
        sessionStorage.setItem(key, serializedData);
        return true; // Успешно записано в сессионное хранилище
    } catch (error) {
        console.error('Error writing to sessionStorage:', error);
        return false; // Произошла ошибка при записи в сессионное хранилище
    }
}
export function readFromSessionStorage(key) {
    try {
        const serializedData = sessionStorage.getItem(key);
        if (serializedData === null) {
            return null; // Данные не найдены в сессионном хранилище
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error('Error reading from sessionStorage:', error);
        return null; // Произошла ошибка при чтении из сессионного хранилища
    }
}
