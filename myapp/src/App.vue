<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <component/>
    <router-view/>
  </div>
</template>

<script>
import Component from './components/Component'
export default {
  name: 'App',
  components:{Component}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
