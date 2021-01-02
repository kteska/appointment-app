<template>
  <div>
    <nav>
      <v-app-bar
      color="transparent"
      class="elevation-0 app-bar"
      dark
    >
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="elevation-0 nav-button" color="transparent">
        Home
      </v-btn>
      <v-btn class="elevation-0 nav-button" color="transparent">
        Questions
      </v-btn>
      <v-btn class="elevation-0 nav-button" color="transparent">
        About
      </v-btn>
      </v-app-bar>
    </nav>
    <div>
<section>
      <div class="left-header">
        <h1>Ask questions</h1>
      </div>
      <div class="right-header">
        <h1>Give answers</h1>
      </div>
    </section>

    <section>
    <div v-for="question in this.questions" :key="question.title">
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <v-card-title><v-avatar
  color="asfalt"
><v-icon dark>
        mdi-account-question
      </v-icon></v-avatar> asks:</v-card-title>

      <v-card-title>{{ question.title }}</v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Categories</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="asfalt accent-4 white--text"
        column
      >
        <v-chip>Health</v-chip>

        <v-chip>Movies</v-chip>

        <v-chip>Coding</v-chip>

        <v-chip>Education</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
      >
        Answer
      </v-btn>
    </v-card-actions>
  </v-card>
    
</div>
  

    </section>
    </div>
    
    
  </div>
  
</template>
<script>
import { getAllQuestions } from '../api/api'
export default {
  name:"Main",
  data: () => ({
      selection: 1,
      questions: [],
    }),
    mounted() {
      this.getQuestions()
    },

    methods: {
      getQuestions() {
        getAllQuestions()
        .then((res) => {
          this.questions = res
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
}
</script>


<style>
section {
  display: flex;
	align-items: center;
	justify-content: center;
	text-align: center; 
	flex-direction: column;
	background-size: cover;
	background-repeat: no-repeat;
  background-attachment: fixed;
  box-sizing: border-box;
	height: 92vh; 
	text-align: center; 
	font-size: 6vw;
}
section:first-of-type {
	text-transform: uppercase;
	color: #fff;
	font-size: 8vw;
	text-shadow: 0 0 5px rgba(0,0,0,0.4);
}
section:nth-of-type(even) {
	background: #fff;
}
section:nth-of-type(1) {
	background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
section:nth-of-type(2) {
	background-color: #ACD2ED;
}
#app {
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
#section-2 {
  background: white;
}
#app::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 120px 100px 250px #000000, inset -120px -100px 250px #000000;
}
.nav-button {
  font-size: 15px !important;
  font-weight: 800;
  text-transform: none;
}
.app-bar {
  z-index: 2;
}
header {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}
.left-header {
  left: 20%;
}
.right-header {
  left : 82%;
}
h1 {
  text-transform: uppercase;
  margin: 0;
  font-size: 3rem;
  white-space: nowrap;
}
p {
  margin: 0;
  font-size: 1.5rem;
}
</style>
