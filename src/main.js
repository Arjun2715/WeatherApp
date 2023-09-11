

// main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './input.css'


const app = createApp(App);
app.use(store);
app.mount('#app');

store.dispatch('initializeStoredStrings'); // Initialize the stored strings from LocalStorage
