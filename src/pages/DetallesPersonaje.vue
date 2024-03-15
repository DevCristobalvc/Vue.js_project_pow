<template>
    <div class="character-details">
      <header>
        <h1>Detalles del personaje</h1>
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
  .character-details {
    max-width: 800px; /* Limita el ancho máximo para que no se estire demasiado en pantallas grandes */
    margin: auto; /* Centra el contenedor */
    padding: 2rem; /* Añade algo de espacio dentro del contenedor */
    background-color: #fff; /* Fondo blanco para el contenido */
    border-radius: 8px; /* Bordes redondeados para el contenedor */
    box-shadow: 0 2px 10px #333; /* Sombra sutil para dar profundidad */
  }
  
  .character-details header {
    background-color: #a50000; /* Color de fondo */
    color: white; /* Color del texto */
    padding: 1rem; /* Relleno dentro del encabezado */
    text-align: center; /* Centrar el texto del encabezado */
    border-top-left-radius: 8px; /* Bordes redondeados solo en la parte superior */
    border-top-right-radius: 8px;
  }
  
  .character-container {
    text-align: center; /* Centrar el contenido del personaje */
    padding: 2rem;
  }
  
  .character-image {
    border-radius: 50%; /* Imagen circular */
    width: 150px; /* Ajusta el tamaño de la imagen */
    height: 150px;
    object-fit: cover; /* Asegura que la imagen cubra todo el espacio sin distorsionarse */
    margin-bottom: 1rem; /* Espacio debajo de la imagen */
  }
  
  .episodes-container {
    margin-top: 2rem; /* Espacio encima de la lista de episodios */
  }
  
  .episodes-container h3 {
    margin-bottom: 1rem; /* Espacio debajo del título de episodios */
  }
  
  ul {
    list-style: none; /* Remueve los estilos por defecto de la lista */
    padding: 0; /* Remueve el padding por defecto de la lista */
  }
  
  li {
    background-color: #f9f9f9; /* Color de fondo para cada elemento de lista */
    padding: 0.5rem 1rem; /* Relleno dentro de cada elemento de lista */
    margin-bottom: 0.5rem; /* Espacio entre elementos de lista */
    border-radius: 4px; /* Bordes redondeados para los elementos de lista */
  }
  
  button {
    background-color: #a50000; /* Color de fondo del botón */
    color: white; /* Color del texto del botón */
    padding: 0.5rem 1rem; /* Relleno dentro del botón */
    border: none; /* Sin borde */
    border-radius: 4px; /* Bordes redondeados para el botón */
    cursor: pointer; /* Cursor de mano al pasar el mouse */
    margin-top: 1rem; /* Espacio encima del botón */
  }
  
  button:hover {
    background-color: #b71c1c; /* Color del botón al pasar el mouse */
  }
  
  /* Media query para dispositivos más pequeños */
  @media (max-width: 768px) {
    .character-details {
      padding: 1rem;
    }
  
    .character-image {
      width: 100px; /* Tamaño más pequeño para la imagen en dispositivos móviles */
      height: 100px;
    }
  }
  </style>
  
  