<template>
  <header>
    <!-- Contenido del encabezado -->
    <h1>VUE.JS PROJECT POW</h1>
    <comp-menu /> <!-- kebab-case aquí para hacer referencia al componente CompMenu -->
  </header>
</template>
  
  <script>
  import CompMenu from './CompMenu.vue';
  
  export default {
    name: 'CompHeader',
    components: {
      'comp-menu': CompMenu // Utiliza el kebab-case para el registro local del componente
    }
  }
  </script>