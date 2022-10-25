import Vue from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  position: POSITION.TOP_CENTER,
}

Vue.use(Toast, options)
