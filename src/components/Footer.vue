<template>
    <footer>
      <!-- Contenido del pie de página aquí -->
      <p>&copy; {{ currentYear }} DevCristobalvc</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  }
  </script>
  