<template>
  <div>
     <v-app-bar
      color="transparent"
      class="elevation-0"
    >
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="elevation-0 nav-button" color="transparent">
        Home
      </v-btn>
      <v-btn class="elevation-0 nav-button" color="transparent">
        Ask
      </v-btn>
      <v-btn class="elevation-0 nav-button" color="transparent">
        About
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name:"Main",
  data() {
    
  }
}
</script>


<style>

.nav-button {
  font-size: 15px !important;
  font-weight: 800;
  text-transform: none;
}
</style>
