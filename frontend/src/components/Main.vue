<template>
  <div>
    <nav>
      <v-app-bar color="white" class="elevation-0 app-bar">
        <v-toolbar-title>QA app</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="elevation-0 nav-button" color="transparent"> Home </v-btn>
        <v-btn class="elevation-0 nav-button" color="transparent" to="/ask"> Ask </v-btn>
        <v-btn class="elevation-0 nav-button" color="transparent"> About </v-btn>
      </v-app-bar>
    </nav>
    <section>
      <div class="header left-header">
        <h1>Ask questions</h1>
      </div>
      <div class="header left-header" style="margin-right: 19px">
        <h1>Give answers</h1>
      </div>
      <div class="header" style="margin-top: 7px">
        <p class="subtitle">Information about</p>
        <p class="subtitle">sailing, equipment,</p>
        <p class="subtitle">marinas and weather</p>
      </div>
    </section>
    <section id="info-section">
      <div class="info-section">
        <h6>You'll find about ...</h6>
        <ul>
          <li><p>sailing</p></li>
          <li><p>best practices</p></li>
          <li><p>advice from more experienced ones</p></li>
        </ul>
      </div>
      <div>
        <v-img src="../assets/1.jpg" class="info-section-img"></v-img>
      </div>
    </section>
    <section>
      <QuestionCard :questions="questions" />
    </section>
  </div>
</template>
<script>
import { getAllQuestions } from "../api/api";
import QuestionCard from "./QuestionCard";
export default {
  name: "Main",
  data: () => ({
    questions: [],
  }),
  components: {
    QuestionCard,
  },
  mounted() {
    this.getQuestions();
  },

  methods: {
    getQuestions() {
      getAllQuestions()
        .then((res) => {
          this.questions = res;
          console.log(this.questions);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
nav {
  background: transparent;
}
section {
  display: flex;
  align-items: flex-start;
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
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
section:nth-of-type(2) {
  background: #fff;
  align-items: center;
}
section:nth-of-type(1) {
  background-image: url(../assets/sail2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
section:nth-of-type(3) {
  /* background-color: #acd2ed; */
  background-image: url(../assets/sail3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 170vh; /*+60*/
  align-items: center;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center; */
}

/* #app {
  background-image: url(../assets/sail1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
} */
#section-2 {
  background: white;
}
#app::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.2); */
  /* box-shadow: inset 120px 100px 250px #ffffff, inset -120px -100px 250px #ffffff; */
}
.nav-button {
  font-size: 16px !important;
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
.header {
  margin-left: 160px;
  z-index: 2;
}
.left-header {
  padding: 7px;
}
h1 {
  text-transform: none;
  margin: 0;
  font-size: 2.8rem;
  white-space: nowrap;
}
p {
  margin: 0;
  font-size: 1.5rem;
}
p.subtitle {
  text-align: left;
}
#info-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
}
.info-section-img {
  width: 800px;
}
</style>
