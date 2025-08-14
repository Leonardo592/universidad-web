<template>
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <h1 class="text-6xl font-bold text-[var(--custom-red,#d32f2f)]">404</h1>
      <p class="text-xl text-gray-700 mt-2">Página no encontrada</p>
      <router-link
        to="/"
        class="mt-4 px-6 py-2 text-white bg-[var(--custom-red,#d32f2f)] rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Volver al Inicio
      </router-link>
    </div>
  </template>
  