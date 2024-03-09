<template>
  <div id="app">
    <div class="header">
      <h1>Bienvenido a la Vista Principal</h1>
    </div>
    <div class="navigation">
      <button @click="currentView = 'viewOne'">Vista Uno</button>
      <button @click="currentView = 'viewTwo'">Vista Dos</button>
      <button @click="currentView = 'viewThree'">Vista Tres</button>
    </div>
    <div class="content">
      <div v-if="currentView === 'viewOne'" class="view view-one">
        <h2>Esta es la Vista Uno</h2>
        <!-- Contenido de la Vista Uno -->
      </div>
      <div v-if="currentView === 'viewTwo'" class="view view-two">
        <h2>Esta es la Vista Dos</h2>
        <!-- Contenido de la Vista Dos -->
      </div>
      <div v-if="currentView === 'viewThree'" class="view view-three">
        <h2>Esta es la Vista Tres</h2>
        <!-- Contenido de la Vista Tres -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentView: 'viewOne', // Por defecto muestra la Vista Uno
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background-color: #4caf50;
  padding: 20px;
  color: white;
}

.navigation {
  margin: 20px;
}

.button {
  background-color: #8bc34a;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.content {
  margin: 20px;
}

.view {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
}

.view-one {
  background-color: #e8f5e9;
}

.view-two {
  background-color: #c8e6c9;
}

.view-three {
  background-color: #a5d6a7;
}
</style>