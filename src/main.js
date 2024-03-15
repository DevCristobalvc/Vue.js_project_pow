import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes de las páginas para tus rutas
import RickAndMorty from './pages/RickAndMorty.vue';
import DetallesPersonaje from './pages/DetallesPersonaje.vue';
import Gixxer_sf from './pages/Gixxer_sf.vue';
import DevCristobalvc from './pages/DevCristobalvc.vue';
// importa otros componentes de página aquí si los necesitas

// Define las rutas de tu aplicación
const routes = [
  { path: '/rick-and-morty', component: RickAndMorty },
  { path: '/detalles/:id', component: DetallesPersonaje},
  { path: '/gixxer-sf', component: Gixxer_sf},
  { path: '/dev-cristobalvc', component: DevCristobalvc}
  // aquí puedes añadir más rutas para otros componentes de página
];

// Crea la instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes, // forma corta para `routes: routes`
});

// Crea la instancia de la aplicación Vue
const app = createApp(App);

// Usa el router con la instancia de la aplicación
app.use(router);

// Monta la aplicación Vue
app.mount('#app');
