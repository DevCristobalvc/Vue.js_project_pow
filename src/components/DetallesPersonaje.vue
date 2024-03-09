<template>
    <div class="character-details">
      <header>
        <h1>Proyecto de POW 2024 //llamado dinámico!!</h1>
      </header>
      <main>
        <button @click="goBack">volver</button>
        <div v-if="character" class="character-container">
          <h2>{{ character.name }}</h2>
          <img :src="character.image" :alt="character.name" class="character-image">
          <p>Especie: {{ character.species }}</p>
          <p>Género: {{ character.gender }}</p>
          <p>Estado: {{ character.status }}</p>
          <div class="episodes-container">
            <h3>Episodios en los que ha aparecido ({{ episodes.length }}):</h3>
            <ul>
              <li v-for="episode in episodes" :key="episode.id">{{ episode.name }}</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; DevCristobal - 2024 Rick and Morty //llamado dinámico!!</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  
  const character = ref(null);
  const episodes = ref([]);
  const route = useRoute();
  const router = useRouter();
  
  onMounted(async () => {
    const characterId = route.params.id;
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
      character.value = data;
      episodes.value = await Promise.all(
        data.episode.map((episodeUrl) => axios.get(episodeUrl).then((res) => res.data))
      );
    } catch (error) {
      console.error('Hubo un problema al obtener los detalles del personaje:', error);
    }
  });
  
  const goBack = () => {
    router.back();
  };
  </script>
  
  <style scoped>
  /* Tus estilos aquí. Puedes tomar inspiración de la imagen que proporcionaste. */
  .character-details header {
    background-color: #3c3e44;
    color: white;
    padding: 1rem;
  }
  
  /* Resto de tus estilos... */
  </style>
  