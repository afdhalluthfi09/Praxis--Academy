<template>
    <div>
        <h1>ini componen 1</h1>
        <form action="">
            Search <input name="query" v-model="searchQuery"/>
        </form>
        <ChildHeader  
            :heroes ="gridData"
            :columns ="gridColumns"
            :filterKey ="searchQuery"
        />    
    </div>    
</template>

<script>
import ChildHeader from './ChildHeader'
export default {
    data: ()=>{

        return{
        searchQuery:"",
        gridColumns:["name","power"],
        gridData:[
            {name : "Chuck Norris", power:Infinity},
            {name : "Bruce Lee", power:900},
            {name: "Jackie Chan", power:7000},
            {name: "jat lie", power:8000}
        ]
    }
    },
    
    components:{
        ChildHeader
    }
}
</script>


<style scoped>

</style>