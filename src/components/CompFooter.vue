<template>
    <footer class="footer">
      <!-- Contenido del pie de página aquí -->
      <p>&copy; {{ currentYear }} DevCristobalvc</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'CompFooter',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  }
  </script>
  
  <style scoped>

  .footer{
    background-color: #a50000;
    color: white;
    padding: 0.5rem 0;
    margin-top: 2rem;
  }

  </style>