<template>
  <div class="cards">
    <div v-for="question in this.questions" :key="question.title">
      <v-card class="mx-auto my-12 elevation-6" max-width="374">
        <v-card-title>
          <v-avatar color="extra"><v-icon dark> mdi-account-question </v-icon></v-avatar>
          <span style="margin-left: 12px">{{ question.username }} asks:</span>
        </v-card-title>

        <v-card-title>{{ question.title }}</v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Categories</v-card-title>

        <v-card-text>
          <v-chip-group v-model="selection" active-class="extra accent-4 white--text" column>
            <v-chip>Sailing</v-chip>

            <v-chip>Marinas</v-chip>

            <v-chip>Weather</v-chip>

            <v-chip>Apps</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn text tile class="answer-button"> Answer </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    questions: Array,
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
}
.answer-button {
  border: solid #61aadd 3px;
  color: #61aadd !important;
}
.answer-button:hover {
  background: #61aadd;
  color: white !important;
}
</style>
