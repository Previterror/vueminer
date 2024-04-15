import App from "../App.vue";
import { AppState } from "../AppState.js"


class MineService {
    mineGold() {
        AppState.gold++
        // console.log('successfully mined', AppState.gold);
    }

    buyUpgrade(upgrade) {
        let upgrades = AppState.upgrades
        let purchasedUpgrade = upgrades.find(purchased => upgrade == purchased.id)
        console.log(purchasedUpgrade);
        if (AppState.gold < purchasedUpgrade.price) {
            console.log('Not enough gold.'); return
        }
        if (purchasedUpgrade.automatic) { AppState.onInterval += purchasedUpgrade.multiplier }
        else { AppState.onClick += purchasedUpgrade.multiplier }
        console.log('onclick', AppState.onClick, 'oninterval', AppState.onInterval);
    }

}

export const mineService = new MineService