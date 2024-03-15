<template>
    <div class="menu">
      <router-link to="/gixxer-sf" class="menu-button">Gixxer SF</router-link>
      <router-link to="/dev-cristobalvc" class="menu-button">DevCristobalvc</router-link>
      <router-link to="/rick-and-morty" class="menu-button">Rick & Morty</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompMenu'
  }
  </script>
  
  <style scoped>
  .menu {
    background-color: #a50000; /* Tonalidad roja para el fondo del menú */
    padding: 1rem 0;
    text-align: center;
  }
  
  .menu-button {
    margin: 0 1rem;
    padding: 0.5rem 2rem;
    background-color: #d32f2f; /* Tonalidad roja para los botones */
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .menu-button:hover {
    background-color: #b71c1c; /* Tonalidad roja más oscura para el hover */
  }
  </style>
  