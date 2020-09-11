<template>
    <div>

        <table style="border:1px solid black; ">
           <tr>
               <td>name</td>
               <td> <input v-model="form.name" type="text"></td>
           </tr>
              <tr>
               <td>Description</td>
               <td> <input v-model="form.description" type="text"></td>
           </tr>
           <tr>
               <td>Release Date</td>
               <td> <input v-model="form.release_date" type="text"></td>
           </tr>
           <tr>
               <td>Toy Category</td>
               <td> <input v-model="form.toy_category" type="text"></td>
           </tr>
           <tr>
               <td>Was Included In Home</td>
               <td> <input v-model="form.was_include_in_home" type="text"></td>
           </tr>

           <tr>
               <td colspan="2">
                    <button @click="tambah()">Submit</button>
                 
                   
                </td>
            </tr>
        </table>


        <table style="border:1px solid black; width:100%; margin:0px;padding:0px;">
           <tr>
               <th>Name</th>
               <th>Description</th>
               <th>Reales Data</th>
               <th>Toy Category</th>
               <th>Was Included In Home</th>
               <th>Tombol Action</th>
           </tr>
            <tr v-for="g in Gdata" :key="g.id">
                <td>{{g.name}}</td>
                <td>{{g.description}}</td>
                <td>{{g.release_date}}</td>
                <td>{{g.toy_category}}</td>
                <td>{{g.was_included_in_home}}</td>
                <td>
                    <button @click="hapus(g.id)">Hapus</button>
                    <button @click="edit(g)">Edit</button>
                    <button @click="update(g)">Update</button>
                </td>
            </tr>
        </table>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    data:()=>{
        return{
            form:{
                id:'',
                name:'',
                description:'',
                release_date:'',
                toy_category:'',
                was_included_in_home:''
            },
            Gdata:[],
            upsumit : false
        }
    },
    mounted(){
            this.load()
            
    },
    methods:{
        load: async function(){
            await axios.get('http://192.168.1.44:8000/toys')
            // .then(res=>{console.log(res.data)}) buat ngecek dapat apa enggak
            .then(res=>res.data)
            .then(res=>this.Gdata=res)
        
        },
        tambah:function(){
            axios.post('http://192.168.1.44:8000/toys',{
                id: this.form.id,
                name: this.form.name,
                description: this.form.description,
                release_date: this.form.release_date,
                toy_category: this.form.toy_category,
                was_included_in_home: this.was_included_in_home
            })
            .then(res=>{
                this.form.name='',
                this.form.description='',
                this.form.release_date='',
                this.form.toy_category='',
                this.form.was_included_in_home=''
                console.log(res.data)
                })
            .catch(err =>{
                console.log(err)
            })
        },
        hapus: function(id){
            axios.delete('http://192.168.1.44:8000/toys/' + id )
            .then(()=>{
                this.load()

            })
        },
        edit: function(id){
            this.form.name =id.name,
            this.form.description = id.description,
            this.form.release_date =id.release_date,
            this.form.toy_category = id.toy_category,
            this.form.was_included_in_home = id.was_included_in_home
        },
        update: function(g){
            axios.put('http://192.168.1.44:8000/toys/' + g.id, {
                name:this.form.name,
                description:this.form.description,
                release_date:this.form.release_date,
                toy_category:this.form.toy_category,
                was_included_in_home:this.form.was_included_in_home
            } )
            .then(()=>{
                this.load()
            })
        }
      
        
    }
    
}
</script>

<style scoped>
    th{
        color: red;
        height: 20px;
    }
    
    td,th{
        border: 1px solid black;
    }
</style>>
    