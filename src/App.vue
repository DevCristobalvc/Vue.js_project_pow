<template>
  <img alt="Vue logo" src="./assets/logo.png" class="img">
  <HelloWorld msg="DevCristobalvc"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.img{
  width: 300px; /* Cambia a tu tamaño deseado */
  height: auto; /* Mantiene la proporción de la imagen */
}

</style>
