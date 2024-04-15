<script setup>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

const appState = computed(() => AppState)
let counter = 0


</script>

<template>
  
  <main>
    <h1>Clicks: {{ counter }}</h1>
  </main>

</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
