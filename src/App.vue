<template>
  <div id="app">
    <Header />
    <Menu />
    <router-view /> <!-- Las páginas de vue-router se renderizarán aquí -->
    <Footer />
  </div>
</template>

<script>
// Importar los componentes
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer
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

/* Resto de tus estilos globales */
</style>
