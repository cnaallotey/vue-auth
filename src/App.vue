<template>
  <div class="h-screen bg-slate-900">
    <navbar />
    <router-view />
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/navbar.vue";
</script>
