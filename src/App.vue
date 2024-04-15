<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState'
import { mineService } from './services/MineService.js';


const appState = computed(() => AppState)

let gold = computed(()=>AppState.gold)

function mineGold(){
  mineService.mineGold()
}

function buyUpgrade(upgrade){
  mineService.buyUpgrade(upgrade)
}

</script>

<template>
  
  <main class="container-fluid bg-dark text-light">
    <section class="row justify-content-center">
      <section class="col-6">
    <h1>Gold Mined: {{ gold }}<i class="mdi mdi-gold"></i></h1>
    <button class="btn btn-success" @click="mineGold()"><i class="mdi mdi-gold clicker"></i></button>
  </section>
  </section>
  <section class="row">
    <section class="col-10">

      <button class="btn btn-primary" @click="buyUpgrade('10')">Buy <i class="mdi mdi-pickaxe"></i></button>
    </section>
  </section>
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
