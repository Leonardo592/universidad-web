<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <RouterLink to="/" class="home-link">Volver al inicio</RouterLink>
    </div>
  </template>
  
  <script setup>
  // No necesita lógica adicional para una página simple de 404
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background-color: #f5f5f5;
  }
  
  h1 {
    font-size: 6rem;
    margin: 0;
    color: #b00020;
  }
  
  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .home-link {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #b00020;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.2s;
  }
  
  .home-link:hover {
    background-color: #8e001a;
  }
  </style>
  