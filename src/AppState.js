import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type: {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  gold: 0,

  /**@type {Upgrade[]}*/
  Upgrades: [
    {
      name: 'pickaxe',
      automatic: false,
      price: 1,
      quantity: 0,
      multiplier: 1,
    },
    {
      name: 'hammer',
      automatic: false,
      price: 2,
      quantity: 0,
      multiplier: 5,
    },
    {
      name: 'truck',
      automatic: true,
      price: 6,
      quantity: 0,
      multiplier: 10,
    },
    {
      name: 'fasttruck',
      automatic: true,
      price: 12,
      quantity: 0,
      multiplier: 20,
    },
  ]

})
