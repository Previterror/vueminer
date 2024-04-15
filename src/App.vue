<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState'
import { mineService } from './services/MineService.js';


const appState = computed(() => AppState)

let gold = computed(()=>AppState.gold)

function mineGold(){
  mineService.mineGold()
}

</script>

<template>
  
  <main>
    <h1>Gold Mined: {{ gold }}<i class="mdi mdi-gold"></i></h1>
    <button class="btn btn-success" @click="mineGold()"><i class="mdi mdi-gold clicker"></i></button>
  </main>

</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

.clicker{
  font-size: 300px;
}

</style>
