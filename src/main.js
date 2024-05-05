// main.js
import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App);
app.mount('#app'); // Mount the app on the main element

// You can then manipulate the DOM within the app
const clientForm = document.getElementById('clientForm');
if (clientForm) {
    // Do something with clientForm, e.g., append elements or add event listeners
}
