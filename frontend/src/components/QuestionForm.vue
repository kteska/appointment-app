<template>
  <div>
    <nav>
      <v-app-bar color="white" class="elevation-0 app-bar">
        <v-toolbar-title>QA app</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="elevation-0 nav-button" color="transparent" to="/"> Home </v-btn>
        <v-btn class="elevation-0 nav-button" color="transparent" to="/ask"> Ask </v-btn>
        <v-btn class="elevation-0 nav-button" color="transparent"> About </v-btn>
      </v-app-bar>
    </nav>

    <div class="question-form">
      <div>
        <v-card width="660" height="757" class="elevation-6 card-form" tile>
          <v-card-title>Ask a question</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field color="extra" v-model="name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>

              <v-text-field v-model="question" color="extra" auto-grow label="Enter your question here..." :counter="50" :rules="questionRules" required> </v-text-field>

              <v-select v-model="selectedCategory" :items="categories" color="bluey" chips attach :rules="[(v) => !!v || 'You have to choose category']" label="Category" required> </v-select>

              <v-btn :disabled="!valid" color="success" class="mr-4" @click="submitQuestion(question, name, selectedCategory)"> Submit </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <v-img src="../assets/yacht.jpg" width="840" height="757"></v-img>
      </div>
    </div>
  </div>
</template>

<script>
import { addQuestion } from "../api/api";
export default {
  name: "QuestionForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required", (v) => (v && v.length <= 20) || "Name must be less than 20 characters"],
    question: "",
    questionRules: [(v) => !!v || "Question is required", (v) => (v && v.length <= 50) || "Name must be less than 100 characters"],
    selectedCategory: null,
    categories: ["Sailing", "Marinas", "Weather", "Equipment"],
    checkbox: false,
  }),
  methods: {
    submitQuestion(question, name, selectedCategory) {
      let category = 0;
      switch (selectedCategory) {
        case "Sailing":
          category = 0;
          break;
        case "Marinas":
          category = 1;
          break;
        case "Weather":
          category = 2;
          break;
        default:
          category = 3;
          break;
      }
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      } else {
        addQuestion({ title: question, username: name, category: category });
        this.alertDialog = true;

        this.$refs.form.reset();
        this.$refs.form.resetValidation();
      }
    },
  },
};
</script>
<style scoped>
.question-form {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}
.card-form {
  padding: 50px;
  z-index: 5;
}
</style>
