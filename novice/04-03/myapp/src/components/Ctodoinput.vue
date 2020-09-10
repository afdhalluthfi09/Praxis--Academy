<template>
    <div>
        <form @submit.prevent="add"> 
            <input type="hidden" v-model="form.id"/>
            <input type="text" v-model="form.title"/>
            <button type="submit" v-show="!upSubmit">tambah</button>
            <button type="button" v-show="upSubmit" @click="updat(form)">update</button>
        </form>
        
        <div v-for="user in users" :key="user.id">
            <p>{{user.title}},{{user.id}}</p> 
            <button @click="delet(user)">delete</button>
            <button @click="edit(user)">edit</button>
            
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
// import func from '../../vue-temp/vue-editor-bridge'
// import { use } from 'vue/types/umd'

export default {
    data: () => {
        return{
            form:{
                id:"",
                title:""
            },
            users:[],
            upSubmit:false
        }
    },
    mounted(){
        this.load()

    },
    methods:{
        load :function(){
            axios.get('http://192.168.1.44:3000/tasks')
            .then(res=> res.data)
            .then(res=>this.users=res)
        },
        add:function(){
            axios.post('http://192.168.1.44:3000/task/add/',this.form)
            .then(() =>{this.load() 
             this.form.title=''
             this.form.id=''})
        },
        delet: async function(user){
            await axios.delete('http://192.168.1.44:3000/task/delete/' + user.id)
            .then(() =>{
                this.load()
            })
        },
        
        edit:function(user){
            this.upSubmit=true
            this.form.title=user.title
        },
        updat: async function(form){
            await axios.put('http://192.168.1.44:3000/task/edit/'+ form.id,{name: this.form.name})
            .then(()=>{
                this.load()
                this.form.title =this.edit
                this.upSubmit= false
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    
    
}
</script>


<style  scoped>

</style>