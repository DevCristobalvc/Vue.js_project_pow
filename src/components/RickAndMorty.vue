<template>
    <div class="hello">
      <h1>{{ nombre }}</h1>
      <div v-for="item in items" :key="item.id">
        <div>
          <h1>{{ item.name }}</h1>
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onBeforeMount, ref } from "vue";
  import axios from "@/axios";
  
  const nombre = ref("DevCristobalvc")
  const items = ref("");
    const valoresRick = async () => {
      try{
          const response = await axios.get("/character/");
          items.value = response.data.results;
          console.log(items.value);
        } catch (error) {
          console.error("Error de datos", error);
        }
    }
  
  onBeforeMount(()=>{
    valoresRick()
  })
  
  </script>