<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
//import Main from "./components/Main";

export default {
  name: "App",

  components: {
    //Main,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@300&family=Roboto&display=swap");
html,
body {
  /*font-family: 'Mukta', sans-serif;*/
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
  background-color: #acd2ed;
}
</style>
