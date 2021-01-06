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
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-select v-model="select" :items="items" :rules="[(v) => !!v || 'Item is required']" label="Item" required></v-select>

              <v-checkbox v-model="checkbox" :rules="[(v) => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>

              <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Validate </v-btn>

              <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

              <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
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
export default {
  name: "QuestionForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required", (v) => (v && v.length <= 10) || "Name must be less than 10 characters"],
    email: "",
    emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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
}
</style>
