<template>
        <div>
            <p>ini Tombol componen di halaman countPage</p>
            <v-btn rounded color='primary' @click="sFunc">Tombol Count</v-btn>
            <p v-bind:title="tPragraf">{{getCount}}</p>
            <p v-bind:title="tPragraf">{{tambah}}</p>

        </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    name:"CompCount",
    data:function(){
      return  {
          count :0,
          tPragraf:"ini pargraf"

    }
    },
    methods:{
        addCount:function(){
           this.count++
        },
        sFunc:function(){
            setTimeout(() => {
                this.count++
            }, 2000);
        }
    },
    computed:{
        tambah:function(){
            return this.count
        },
        ...mapGetters([
            'getCount'
        ])

    }
}
</script>

<style  scoped>

</style>>
