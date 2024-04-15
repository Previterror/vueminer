<script setup>
import { AppState } from '../AppState.js';
import { mineService } from '../services/MineService.js';

const upgrades = AppState.upgrades

function buyUpgrade(upgrade) {
    mineService.buyUpgrade(upgrade)
}

setInterval(mineInterval, 5000)
function mineInterval() {
    mineService.mineInterval()
}


</script>


<template>
    <section class="col m-4 fs-5 border rounded bg-danger" v-for="upgrade in upgrades" :key="upgrade.id">
        <p>Price:</p>
        <p><i class="mdi mdi-gold"></i>{{ upgrade.price }}</p>
        <hr>
        <button class="btn btn-primary fs-3" @click="buyUpgrade(`${upgrade.id}`)">Buy
            <i :class="`mdi mdi-${upgrade.name}`"></i>
        </button>
        <hr>
        <p class="fs-6">Quantity: {{ upgrade.quantity }}</p>
    </section>
</template>


<style lang="scss" scoped></style>