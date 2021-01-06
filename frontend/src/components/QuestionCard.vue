<template>
  <div>
    <div class="cards">
      <div v-for="question in this.questions" :key="question.title">
        <v-card class="mx-auto my-12 elevation-6" max-width="374" @click="openAnswerTimeline()">
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
    <v-dialog v-model="timelineAnswer" max-width="420" max-height="500">
      <v-card>
        <v-timeline align-top dense>
          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>5pm</strong>
              </v-col>
              <v-col>
                <strong>New Icon</strong>
                <div class="caption">Mobile App</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>3-4pm</strong>
              </v-col>
              <v-col>
                <strong>Design Stand Up</strong>
                <div class="caption mb-2">Hangouts</div>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>12pm</strong>
              </v-col>
              <v-col>
                <strong>Lunch break</strong>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>9-11am</strong>
              </v-col>
              <v-col>
                <strong>Finish Home Screen</strong>
                <div class="caption">Web App</div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { updateAnswer } from "../api/api";

export default {
  name: "QuestionCard",
  props: {
    questions: Array,
  },
  data: () => ({
    timelineAnswer: false,
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
        updateAnswer({ id: this.questionID, answer: answerForm });
        this.alertDialog = true;
        setTimeout(() => {
          this.dialog = false;
        }, 5000);
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
      this.$refs.form.resetValidation();
    },
    openAnswerTimeline() {
      this.timelineAnswer = true;
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
</style>
