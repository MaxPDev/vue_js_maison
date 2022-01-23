<template>
    <div class="salon" :class="{'lightOn' : lumieres.salon}">
        <h1>Salon</h1>
        <button v-if="!lumieres.salon" @click="TOGGLE_LUMIERE('salon')">Light On</button><br />
        <button v-if="lumieres.salon" @click="TOGGLE_LUMIERE('salon')">Light Off</button><br />
        <img src="https://image.freepik.com/photos-gratuite/design-interieur-maison-dans-salon-cuisine-ouverte-dans-maison-mezzanine_41487-613.jpg" alt="salon">
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: "Chambre",
    methods: {
        ...mapMutations(['TOGGLE_LUMIERE'])
    },
    computed: {
        ...mapState(['lumieres']),
    }
}
</script>

<style scoped>
.lightOn {
    background-color: yellow;
}

</style>