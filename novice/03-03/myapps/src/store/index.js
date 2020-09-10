import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// Vue.use(axios)


axios.defaults.baseURL='http://jsonplaceholder.typicode.com/';

const state ={

}

const getSeters={

}

const mutations ={

}

const actions ={
  
}




export default new Vuex.Store({
  state: {
    count:0,
    dataP:[]
  },
  
  getters:{
    getCount:(state)=>{
      return state.count
    },
    getApi:(state)=>{
      return state.dataP
    }
    

  },
  actions: {
    Asycn loadData({commit}){
      //http://jsonplaceholder.typicode.com/post
      wait fetch('http://jsonplaceholder.typicode.com/posts')
      
  },
  mutations = {
    incrament(state){
      state.count++
    },
    getUser(state,pyload){
      state.dataP = pyload
    }
  }
}
})
