<template>
  <div class="home">

    <h1>Welcome home !</h1>
      <ul>
        <li><router-link to="/cuisine">Cuisine</router-link></li>
        <li><router-link to="/chambre">Chambre</router-link></li>
        <li><router-link to="/salon">Salon</router-link></li>
        <li><router-link to="/grenier">Grenier</router-link></li>
      </ul>

    <div>
      <button @click="TOGGLE_LUMIERE('chambre')">
        <template v-if="lumieres.chambre">Eteindre</template>
        <template v-else>Allumer</template>
        la lumière de la chambre
      </button> <br />
      <button @click="TOGGLE_LUMIERE('salon')">
        <template v-if="lumieres.salon">Eteindre</template>
        <template v-else>Allumer</template>
        la lumière du salon
      </button>
    </div>
    <div>
      Il y a quelque chose de caché dans le... {{ objetLieu }}
    </div>

  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: "Home",
    methods: {
        ...mapMutations(['TOGGLE_LUMIERE'])
    },
    computed: {
        ...mapState(['lumieres','objetLieu']),
    }

}
</script>
