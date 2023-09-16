import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import random from './plugins/random'

createApp(App)
.use(random, {
  greetings: {
    hello: 'Bonjour!'
  }
})
.mount('#app')
