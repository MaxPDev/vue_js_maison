<template>
    <div class="grenier">
        <h1>Grenier</h1>
        <img src="https://image.freepik.com/vecteurs-libre/grenier-maison-sale-vieux-meubles-boites_107791-7682.jpg" alt="grenier">
        <img @click="SET_OBJETLIEU('grenier')" src="https://cdn.radiofrance.fr/s3/cruiser-production/2021/05/086db720-9d55-4b0e-9102-d5d66a02d427/870x489_maxnewsfr903294.webp" alt="oisillon" width="100">
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Grenier',
    
    methods: {
        ...mapMutations(['SET_OBJETLIEU'])
    }
}
</script>
