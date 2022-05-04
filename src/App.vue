<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MenuBar from './components/MenuBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <MenuBar />
  <router-view class="bg-cover bg-center bg-fixed bg-coffee flex-grow p-4" />
  <Footer class="p-4" />
</template>

