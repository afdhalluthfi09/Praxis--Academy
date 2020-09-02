<template>
    <div>
        <span>Multi line text : </span>
        <p>{{ message}}</p>
        <br>
        <textarea v-model="message" placeholder="tulis disini"></textarea>
        
        </div>    
</template>

<script>
export default {
    name: 'Multiline'
}
</script>

<style scoped>
    p{
        white-space: pre-line;
    }
</style>