<script>
import Navbar from './components/Navbar.vue';
</script>
<template>
  <div id="nav">
    <Navbar />
    <router-link to="/">Home</router-link> |
    <router-link to="/users">User</router-link> |
  </div>
  <router-view />
</template>