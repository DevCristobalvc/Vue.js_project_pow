<template>
    <header>
      <!-- Contenido del encabezado aquí -->
      PROJECT POW VUE.JS
      <Menu />
    </header>
  </template>
  
  <script>
  import Menu from './Menu.vue';
  
  export default {
    name: 'Header',
    components: {
      Menu
    }
  }
  </script>
  