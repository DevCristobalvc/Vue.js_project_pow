<template>
    <div>
      <header>
        <h1>Developer Cristobal</h1>
      </header>
      <nav>
        <ul>
          <li><a href="../index.html">Volver</a></li>
        </ul>
      </nav>
      <div id="developer-info" class="container">
        <!-- La información se renderizará aquí -->
      </div>
      <footer>
        <p>&copy; DevCristobal - 2024 POW</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeveloperCristobal',
    data() {
      return {
        informacionPersonal: null,
      };
    },
    mounted() {
      this.cargarInformacionPersonal();
    },
    methods: {
      cargarInformacionPersonal() {
        // Asume que `datos.json` está en la carpeta public
        const jsonFile = 'datos.json';
        fetch(jsonFile)
          .then((response) => response.json())
          .then((data) => {
            this.informacionPersonal = data.informacion_personal;
          })
          .catch((error) => {
            console.error('Error al cargar los datos del JSON:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  /* Tus estilos CSS aquí */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      font-family: Arial, sans-serif;
      background-color: #d2f5d3;
      margin: 0;
      padding: 0;
  }
  
  header {
      background-color: #1b5e20;
      color: #2ecc71;
      padding: 20px;
      text-align: center;
  }
  
  /* Más estilos ... */
  </style>
  