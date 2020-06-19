import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDv6PvFGxPTaVXim7fHG80jXTehFHkdjto',
    libraries: 'places',
    installComponents: true,
  },
})
