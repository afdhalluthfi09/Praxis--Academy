<template>
    <div>
    <v-container
      v-for="align in alignments"
      :key="align"
      class="blue lighten-5 mb-6">
      <v-row
        :align="align"
        no-gutters
        style="height: 50px;">
        <v-col
          v-for="n in 1"
          :key="n">
          <v-card class="pa-2" outlined tile>
            <h1>hello</h1>
          </v-card>
        </v-col>
      </v-row>
       <v-row
        :align="align"
        no-gutters
        style="height: 350px;">
        <v-col>
          <v-card class="pa-2" outlined tile>
            <h1>kategory</h1>
            <div v-for="date in data" :key="date.id">
                <p>{{date.id}}, {{date.title}} </p>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <h1>detail</h1>
            <div v-for="dat in data" :key="dat.id">
                <p>{{dat.id}},{{dat.body}}</p>    
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
</template>

<script>
  export default {
    data: () => ({
      alignments: [
        'start',
      ],
      data:[]
    }),
    async mounted (){
        let data = await fetch('http://jsonplaceholder.typicode.com/posts')
        .then(Response =>Response.json())
    this.data = data
   
    }
  }
</script>


<style scoped>

</style>