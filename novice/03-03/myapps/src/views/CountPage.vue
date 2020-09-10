<template>
    <div>
        <h1>halaman countPage</h1> 
        <CompCount/> 
        <v-btn @click="sFunc" rounded >tombol CountPage</v-btn>
        <p>ini vuexGlobal {{getCount}}</p>
        <hr>
        <h5>Get Data Json</h5>  
        <div v-for="dat in getApi" :key="dat.id" >
            <p>{{dat.body}}</p>
        </div>
    </div>    
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

import CompCount from '../components/CompCount'
export default {
    components:{
        CompCount
    },
    methods:{
        sFunc:function(){
            this.$store.commit('incrament')
            console.log(this.$store.state.count) 
        }
    },
    computed:{
        tambah:function(){
            return this.$store.state.count
        },
        ...mapGetters([
            'getCount',
            'getApi'
        ]),
        ...mapActions(['loadData'])
        
    },
   created(){
       this.loadData()
   }

}
</script>

<style  scoped>

</style>