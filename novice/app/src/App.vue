<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Input/>
    <hr>
    <Multiline/>
    <hr>
    <Compon/>
    <hr>
    <CheckBox/>
    <MultiCheckBox :nama='nama'/>
    <Select/>
    <h1>{{nama}}</h1>
    <button v-on:click="jalan">tekan saya</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Compon from './components/Compon.vue'
import Input from './components/Input.vue'
import Multiline from './components/Multiline'
import CheckBox from './components/CheckBox'
import MultiCheckBox from './components/MultiCheckBox'
import Select from './components/Select'

export default {
  name: 'App',
  components: {
  
    Compon,
    Input,
    Multiline,
    CheckBox,
    MultiCheckBox,
    Select,
    HelloWorld
   

  },
  data :function(){
    return{
      nama:"nama"
    }
  },
  methods:{
    jalan:function(){
      alert("ok")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
