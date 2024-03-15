<template>
    <div class="container">
      <h1 class="title">{{ nombre }}</h1>
      <div class="characters-container">
        <router-link v-for="character in characters" :key="character.id" :to="`/detalles/${character.id}`" class="character-card">
          <div class="character-image">
            <img :src="character.image" :alt="character.name" />
          </div>
          <div class="character-info">
            <h2>{{ character.name }}</h2>
            <p>Especie: {{ character.species }}</p>
            <p>Género: {{ character.gender }}</p>
            <p>Estado: {{ character.status }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios'; // Asegúrate de que axios esté instalado y correctamente importado
  
  const nombre = ref('Consulta Rick and Morty API');
  const characters = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      characters.value = response.data.results;
    } catch (error) {
      console.error('Error de datos', error);
    }
  });
  </script>
  
  <style scoped>
  .container {
    text-align: center;
  }
  
  .title {
    background-color: #a50000; /* Color de fondo para el título */
    color: #ffffff; /* Color del texto para el título */
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .characters-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .character-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 1rem;
    width: 200px;
    background-color: #f9f9f9; /* Fondo de cada tarjeta */
  }
  
  .character-image img {
    border-radius: 50%; /* Hace las imágenes circulares */
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  
  .character-info {
    margin-top: 0.5rem;
  }
  
  .character-info h2 {
    font-size: 1.2rem; /* Tamaño del nombre del personaje */
    color: #333; /* Color del nombre del personaje */
  }
  
  .character-info p {
    font-size: 0.9rem; /* Tamaño del texto de la información */
    color: #666; /* Color del texto de la información */
  }
  </style>
  