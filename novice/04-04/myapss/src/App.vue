<template>
  <v-app>
    <ul>
      <li>
        <router-link to="/">Register</router-link>    
      </li>
      <li>
          <router-link to="/About">About</router-link>    
      </li>
      <li>
        <router-link to="/Home">Home</router-link>    
      </li>
    </ul>
    <router-view></router-view>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
