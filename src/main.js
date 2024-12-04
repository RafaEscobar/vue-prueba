//* Importación de los estilos
import './assets/main.css'

//* Importación de vue
import { createApp } from 'vue'
//* Importación de pinia
import { createPinia } from 'pinia'

//* Importación del archivo App.vue
// -> Archivo principal .vue
import App from './App.vue'
//* Importación del router
import router from './router'

//* Creación de la aplicación
const app = createApp(App)

//* Uso de modulos de Pinia y router
app.use(createPinia())
app.use(router)

//* Se monta la app en el contenedor id = app de index.html
app.mount('#app')
