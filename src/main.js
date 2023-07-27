import './assets/main.css'
import 'vant/lib/index.css';
import 'vant/lib/vant.min.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'particles.vue3'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
  })
  

// import { Button ,Cell, CellGroup ,Calendar} from 'vant';

// Vue.use(VueParticles)
const app = createApp(App)

app.use(router)
app.use(Particles)
app.use(vuetify)
// app.use(Button);
// app.use(Cell);
// app.use(CellGroup);
// app.use(Calendar);

app.mount('#app')
