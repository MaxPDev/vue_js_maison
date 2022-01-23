<template>
    <div class="chambre" :class="{'lightOn' : lumieres.chambre}">
        <h1>Chambre</h1>
        <button v-if="!lumieres.chambre" @click="TOGGLE_LUMIERE('chambre')">Light On</button><br />
        <button v-if="lumieres.chambre" @click="TOGGLE_LUMIERE('chambre')">Light Off</button><br />
        <img src="https://image.freepik.com/photos-gratuite/interieur-moderne-confortable-chambre-hotel_1232-1822.jpg" alt="chambre">
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: "Chambre",
    methods: {
        ...mapMutations(['TOGGLE_LUMIERE'])
    
        /**
         * Sans le mapMutation :
         * tooglelumiere(){
            this.$store.commit("setLumiere","chambre");
        }
         */

    },
    computed: {
        ...mapState(['lumieres']),

        // // Ou cette syntax pour modifier le nom des states reçu en loca
        // ...mapState({
        //     lumiere_local: 'lumieres'
        // })
    }
}
</script>

<style scoped>
.lightOn {
    background-color: yellow;
}

</style>