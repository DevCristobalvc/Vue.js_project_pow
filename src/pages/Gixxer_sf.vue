<template>
    <div class="gixxer-sf">
      <h1 class="title">{{ informacionMoto.marca }} {{ informacionMoto.modelo }}</h1>
      <div class="moto-info">
        <img :src="fotoPrincipal" alt="Foto principal de la moto" class="foto-principal" />
        <div class="detalles-moto">
          <p>Año: {{ informacionMoto.año }}</p>
          <p>Color: {{ informacionMoto.color }}</p>
          <p>Precio: {{ informacionMoto.precio }}</p>
          <p>Descripción: {{ informacionMoto.descripcion }}</p>
        </div>
      </div>
      <div class="galeria-fotos">
        <h2>Fotos Extra</h2>
        <img v-for="(foto, index) in fotosExtra" :key="index" :src="foto" :alt="`Foto extra ${index}`" class="foto-extra" />
      </div>
    </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const informacionMoto = ref({});
  const fotoPrincipal = ref('');
  const fotosExtra = ref([]);
  
onMounted(async () => {
    try {
        const response = await fetch('/data.json'); // Nota que la ruta comienza con '/'
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        informacionMoto.value = data.informacion_moto;
        // Las rutas de las imágenes en 'assets' deben ser manejadas por webpack
        fotoPrincipal.value = require('@/assets/moto_cbr600rr.jpg');
        fotosExtra.value = data.informacion_moto.fotos_extra.map(foto => 
        require('@/assets/' + foto.split('/').pop()) // Obtener solo el nombre del archivo
        );
    } catch (error) {
        console.error('Error al cargar la información de la moto:', error);
    }
});


  </script>
  
  <style scoped>
  .gixxer-sf {
    text-align: center;
  }
  
  .title {
    background-color: #a50000; /* Color de fondo para el título */
    color: #ffffff; /* Color del texto para el título */
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .moto-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
  
  .foto-principal {
    max-width: 20%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px #333;
  }
  
  .detalles-moto {
    margin: 2rem 0;
  }
  
  .detalles-moto p {
    font-size: 1.1rem;
    color: #666;
    margin: 0.5rem 0;
  }
  
  .galeria-fotos {
    margin-bottom: 2rem;
  }
  
  .galeria-fotos h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .foto-extra {
    width: 15%;
    margin: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px #333;
  }
  
  /* Estilo para dispositivos más pequeños */
  @media (max-width: 768px) {
    .foto-extra {
      width: 80%;
    }
  }
  </style>
  
  