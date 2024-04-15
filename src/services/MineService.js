/* eslint-disable no-console */
import { AppState } from "../AppState.js"


class MineService {

    mineGold() {
        AppState.gold += AppState.onClick
        // console.log('successfully mined', AppState.gold);
    }

    mineInterval() {
        AppState.gold += AppState.onInterval
    }

    buyUpgrade(upgrade) {
        let upgrades = AppState.upgrades
        let purchasedUpgrade = upgrades.find(purchased => upgrade == purchased.id)
        console.log(purchasedUpgrade);
        if (AppState.gold < purchasedUpgrade.price) {
            console.log('Not enough gold.'); return
        }
        if (purchasedUpgrade.automatic) {
            AppState.onInterval += purchasedUpgrade.multiplier
            AppState.gold -= purchasedUpgrade.price
            purchasedUpgrade.quantity++
            purchasedUpgrade.price += (purchasedUpgrade.price + purchasedUpgrade.multiplier)
        } else {
            AppState.onClick += purchasedUpgrade.multiplier
            AppState.gold -= purchasedUpgrade.price
            purchasedUpgrade.quantity++
            purchasedUpgrade.price += (purchasedUpgrade.price + purchasedUpgrade.multiplier)
        }
        console.log('onclick', AppState.onClick, 'oninterval', AppState.onInterval)

    }

}

export const mineService = new MineService