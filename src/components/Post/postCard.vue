<template>
  <v-row justify="center" align="center">
    <v-dialog v-model="dialog" persistent>
      <v-form v-model="valid" ref="form">
        <v-card>
          <v-card-title>
            <span class="headline primary--text">議題卡片</span>
          </v-card-title>

          <v-col cols="12">
            <v-text-field
              label="標題"
              messages
              v-model="title"
              clearable
              hint="必填"
              persistent-hint
              :rules="[rules.maxTitle, rules.required]"
              counter="30"
            ></v-text-field>
            <v-textarea
              clearable
              clear-icon="mdi-close"
              label="文章內容"
              messages
              hint="必填"
              persistent-hint
              counter="150"
              :rules="[rules.maxContent, rules.required]"
              v-model="content"
            ></v-textarea>
          </v-col>
          <v-card-actions>
            <v-select
              :items="items"
              label="案件類型"
              full-width="10"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="post">Post</v-btn>
            <v-btn color="blue darken-1" text @click="close">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
import { postNewCard } from "@/api/Card/postNewCard.js";
export default {
  data() {
    return {
      valid: false,
      title: "",
      content: "",
      items: [
        "學校設備",
        "資訊軟體",
        "經費",
        "場地環境",
        "課程授課",
        "國際競賽",
        "交換學生",
        "其他類型"
      ],
      rules: {
        required: value => !!value || "必填",
        maxTitle: value =>
          (value || "").length <= 30 || "文章內容必須小於30個字",
        maxContent: value =>
          (value || "").length <= 150 || "文章內容必須小於150個字"
      }
    };
  },
  props: ["dialog"],
  components: {},
  methods: {
    post() {
      let vm = this;
      if (this.$refs.form.validate()) {
        postNewCard(vm.title, vm.content, vm.getUser);
        this.$emit("cancel-dialog");
        vm.title = "";
        vm.content = "";
      }
    },
    close() {
      this.$emit("cancel-dialog");
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    }
  },
  mounted() {}
};
</script>

<style></style>
