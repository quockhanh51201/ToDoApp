// Hàm lưu trạng thái vào local storage
export function saveStateToLocalStorage(data: any, key: string) {
    try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem('khanhkey' + key, serializedState);
    } catch (e) {
        console.error("Không thể lưu trạng thái", e);
    }
}

// Hàm tải trạng thái từ local storage
export function loadStateFromLocalStorage(key: string): any | undefined {
    try {
        const serializedState = localStorage.getItem('khanhkey' + key);
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Không thể tải trạng thái", e);
        return undefined;
    }
}