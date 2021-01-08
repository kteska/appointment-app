<template>
  <div>
    <div class="cards">
      <div v-for="question in this.questions" :key="question.title">
        <v-card class="mx-auto my-12 elevation-6" max-width="404">
          <v-card-title>
            <v-avatar color="extra"><v-icon dark> mdi-account-question </v-icon></v-avatar>
            <span style="margin-left: 12px">{{ question.username }} asks:</span>
          </v-card-title>

          <v-card-title>{{ question.title }}</v-card-title>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Categories</v-card-title>

          <v-card-text>
            <v-chip-group v-model="question.category" active-class="extra accent-4 white--text" column>
              <v-chip>Sailing</v-chip>

              <v-chip>Marinas</v-chip>

              <v-chip>Weather</v-chip>

              <v-chip>Equipment</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="extra" dark tile class="mr-4" @click="openDialog(question._id, question.username, question.title)"> Answer </v-btn>

            <v-btn color="extra" dark tile class="mr-4" @click="openAnswerTimeline(question._id)"> See answers </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>

    <!-- Dialog - answer form -->
    <v-dialog v-model="dialog" max-width="420" max-height="500">
      <v-card width="420" height="500" class="elevation-12">
        <v-card-title>Your answer to {{ this.username }}'s question</v-card-title>
        <v-divider></v-divider>
        <v-card-title>{{ this.title }}</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" color="black" :rules="nameRules" label="Name" required filled></v-text-field>
            <v-textarea v-model="answer" color="black" auto-grow label="Answer here..." rows="6" row-height="30" filled :counter="100" :rules="answerRules" required></v-textarea>

            <v-btn color="extra" dark tile class="mr-4" @click="submitAnswer(answer)"> Submit </v-btn>
            <v-btn color="warning" dark tile class="mr-4" @click="closeDialog()">Cancel</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Answer dialog timeline -->
    <v-dialog v-model="timelineAnswer" max-width="1220" max-height="500">
      <v-card>
        <div style="padding: 50px">
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="answer in this.answers" :key="answer._id" color="extra">
              <v-card class="elevation-2">
                <v-card-title class="headline answer-title"> {{ answer.givenBy }} answers: </v-card-title>
                <v-card-text class="answer-text">
                  {{ answer.answerForm }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="noAnswerDialog" max-width="450">
      <v-card>
        <v-card-title>There's no answers to this question yet 🔜</v-card-title>
        <v-card-text>Feel free to give an answer!</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { addAnswer, getAllAnswers } from "../api/api";

export default {
  name: "QuestionCard",
  props: {
    questions: Array,
  },
  data: () => ({
    noAnswerDialog: false,
    timelineAnswer: false,
    answers: [],
    alertDialog: false,
    dialog: false,
    username: "",
    title: "",
    questionID: "",
    valid: true,
    answer: "",
    answerRules: [(v) => !!v || "Answer is required", (v) => (v && v.length <= 100) || "Name must be less than 100 characters"],
    name: "",
    nameRules: [(v) => !!v || "Name is required", (v) => (v && v.length <= 10) || "Name must be less than 10 characters"],
  }),
  methods: {
    submitAnswer(answerForm) {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      } else {
        addAnswer({ questionId: this.questionID, givenBy: this.name, answer: answerForm }).then((res) => {
          console.log("Add answer result", res);
        });
        this.alertDialog = true;
        this.dialog = false;
        this.$refs.form.reset();
        this.$refs.form.resetValidation();
      }
    },
    openDialog(questionId, username, title) {
      this.dialog = true;
      this.questionID = questionId;
      this.username = username;
      this.title = title;
      console.log(questionId);
    },
    closeDialog() {
      this.dialog = false;
      this.name = "";
      this.answer = "";
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    openAnswerTimeline(questionId) {
      getAllAnswers({ questionId: questionId }).then((res) => {
        console.log("get all answers result ", res);
        if (res.length === 0) {
          this.noAnswerDialog = true;
        } else {
          this.answers = res;
          this.timelineAnswer = true;
        }
      });
    },
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
.answer-text {
  color: #1f1f1f !important;
  font-size: 16px;
}
.answer-title {
  color: #3680b6 !important;
}
</style>
