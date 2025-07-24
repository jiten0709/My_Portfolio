<script setup>
import Navbar from './components/Navbar.vue'
import HomeSection from './components/HomeSection.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <Navbar />
    <!-- <HomeSection /> -->
    <RouterView />
  </div>
</template>

<style>
/* Global styles if needed */
@import './assets/css/style.css';
</style>
