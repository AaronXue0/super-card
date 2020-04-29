<template>
  <v-row justify="center" align="center">
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">議題卡片</span>
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
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="post">Post</v-btn>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { postNewCard } from "@/api/Card/postNewCard.js";
export default {
  data() {
    return {
      title: "",
      content: "",
      rules: {
        required: value => !!value || "必填",
        maxTitle: value =>
          (value || "").length <= 30 || "文章內容必須小於150個字",
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
      if (vm.rules.required && vm.rules.maxTitle && vm.rules.maxContent) {
        postNewCard(vm.title, vm.content, vm.getUser);
        this.$emit("cancel-dialog");
        vm.title = "";
        vm.content = "";
      } else {
        alert("請注意發文格式");
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
