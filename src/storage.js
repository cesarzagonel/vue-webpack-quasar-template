export default {
    fetch() {
        return JSON.parse(localStorage.getItem('todos-storage') || '[]');
    },

    save(todos) {
        localStorage.setItem('todos-storage', JSON.stringify(todos))
    }
}
