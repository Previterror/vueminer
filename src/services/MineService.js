import { AppState } from "../AppState.js"


class MineService {
    mineGold() {
        AppState.gold++
        console.log('successfully mined', AppState.gold);
    }

}

export const mineService = new MineService