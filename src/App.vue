<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState'
import { mineService } from './services/MineService.js'
import "./assets/scss/main.scss"
import Upgrades from './components/Upgrades.vue';



let gold = computed(() => AppState.gold)
let onClick = AppState.onClick
let onInterval = AppState.onInterval

function mineGold() {
  mineService.mineGold()
}


</script>

<template>

  <main class="container-fluid bg-dark text-light">
    <section class="row justify-content-center text-center">
      <section class="col-4">
        <h1>Gold Mined: {{ gold }}<i class="mdi mdi-gold"></i></h1>
        <div class="row">
          <h6>Gold Mined per Click: {{ onClick }}</h6>
          <h6>Gold Mined Automatically: {{ onInterval }} </h6>
          <button class="btn btn-success" @click="mineGold()"><i class="mdi mdi-gold clicker"></i></button>
        </div>
      </section>
    </section>
    <section class="row justify-content-around text-center">
      <section class="fs-3">Upgrades</section>


      <Upgrades />

      <!-- <section class="col m-4 fs-5" v-for="upgrade in upgrades" :key="upgrade.name">
        <p>Price:</p>
        <p><i class="mdi mdi-gold"></i>{{ upgrade.price }}</p>
        <button class="btn btn-primary fs-3" @click="buyUpgrade(`${upgrade.id}`)">Buy <i
            :class="`mdi mdi-${upgrade.name}`"></i></button>
        <p class="fs-6">Quantity: {{ upgrade.quantity }}</p>
      </section> -->


    </section>
  </main>

</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.clicker {
  font-size: 15dvh;
}
</style>
