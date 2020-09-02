<template>
        <div>
            <select v-model="selected">
                
                <option disabled value="">Plase select one</option>
                <option >a</option>
                <option >b</option>
                <option >c</option>                
                </select>    
            <span>selected:{{selected}}</span>
        </div>    
</template>


<script>
export default {
    name:'Select'
}
</script>

<style scoped>

</style>