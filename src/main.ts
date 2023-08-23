import '@/Infrastructure/Assets/main.scss'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/Infrastructure/Router';
import CustomVuetify from '@/Plugin/Vuetify/CustomVuetify';


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(CustomVuetify.generate());

app.mount('#app');
