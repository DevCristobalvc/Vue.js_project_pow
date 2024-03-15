<template>
  <div id="app">
    <CompHeader />
    <CompMenu />
    <router-view /> <!-- Las páginas de vue-router se renderizarán aquí -->
    <CompFooter />
  </div>
</template>

<script>
// Importar los componentes
import CompHeader from './components/CompHeader.vue';
//import CompMenu from './components/CompMenu.vue';
import CompFooter from './components/CompFooter.vue';

export default {
  name: 'App',
  components: {
    CompHeader,
    //CompMenu,
    CompFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Resto de estilos globales */
</style>./components/CompFooter.vue./components/CompHeader.vue./components/CompMenu.vue
