<template>
  <div class="profile-container">
    <h1 class="profile-title">Perfil Personal</h1>
    <div class="profile-info">
      <img :src="fotoPerfil" alt="Foto de perfil" class="profile-pic"/>
      <div class="personal-details">
        <h2>{{ informacionPersonal.nombre }}</h2>
        <p>Edad: {{ informacionPersonal.edad }}</p>
        <p>Correo: {{ informacionPersonal.correo }}</p>
        <p>Teléfono: {{ informacionPersonal.telefono }}</p>
        <p>Dirección: {{ informacionPersonal.direccion }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const informacionPersonal = ref({});
const fotoPerfil = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    informacionPersonal.value = data.informacion_personal;
    fotoPerfil.value = require('@/assets/perfil.jpg'); // Asegúrate de que la imagen esté en src/assets
  } catch (error) {
    console.error('Error al cargar la información personal:', error);
  }
});
</script>

<style scoped>
.profile-container {
  text-align: center;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px #333;
  background: #fff;
}

.profile-title {
  margin-bottom: 2rem;
  color: #333;
}

.profile-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.profile-pic {
  max-width: 200px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.personal-details h2 {
  font-size: 1.5rem;
  color: #333;
}

.personal-details p {
  font-size: 1.1rem;
  color: #666;
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .profile-info {
    flex-direction: column;
  }

  .profile-pic {
    max-width: 150px;
  }
}
</style>
