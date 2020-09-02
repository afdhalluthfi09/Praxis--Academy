<template>
    <div>
        <h1>{{nama}}</h1>
        <input type="checkbox"  id="john" value="john" v-model="checkNames">
        <label for="john">john</label>

        <input type="checkbox"  id="desi" value="desi" v-model="checkNames">
        <label for="desi">desi</label>

        <input type="checkbox"  id="rom" value="rom" v-model="checkNames">
        <label for="rom">rom</label>
    </div>    
</template>

<script>
export default {
    nama :'MultiCheckBox',

    props:["nama"]
}

</script>

<style scoped>

</style>