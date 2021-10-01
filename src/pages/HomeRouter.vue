<template>
  <div id="home-router">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: 'HomeRouter',
  components: {
    Navbar
  },
  methods: {
    
  }
} 
</script>

<style>
</style>