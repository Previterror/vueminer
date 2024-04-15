<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { mineService } from '../services/MineService.js';

const gold = computed(() => AppState.gold)
const upgrades = computed(() => AppState.upgrades.filter(purchaseable => gold.value >= purchaseable.price))

function buyUpgrade(upgrade) {
    mineService.buyUpgrade(upgrade)
}

setInterval(mineInterval, 5000)
function mineInterval() {
    mineService.mineInterval()
}


</script>


<template>
    <section class="col-md-2 m-4 fs-5" v-for="upgrade in upgrades" :key="upgrade.id">
        <div class="border rounded bg-danger" v-if="upgrade.price <= gold">

            <p>Price:</p>
            <p><i class="mdi mdi-gold"></i>{{ upgrade.price }}</p>
            <hr>
            <button class="btn btn-primary fs-3" @click="buyUpgrade(`${upgrade.id}`)">Buy
                <i :class="`mdi mdi-${upgrade.name}`"></i>
            </button>
            <hr>
            <p class="fs-6">Quantity: {{ upgrade.quantity }}</p>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>