<template>
  <v-dialog v-model="dialog" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">議題卡片</span>
      </v-card-title>

      <v-col cols="12" md="12">
        <v-text-field
          label="標題"
          messages
          v-model="title"
          clearable
        ></v-text-field>
        <v-textarea
          clearable
          clear-icon="mdi-close"
          label="文章內容"
          messages
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
</template>

<script>
import { postNewCard } from "@/api/postNewCard.js";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  props: ["dialog"],
  components: {},
  methods: {
    post() {
      let vm = this;
      postNewCard(vm.title, vm.content, vm.getUser.email);
      this.$emit("cancel-dialog");
      vm.title = "";
      vm.content = "";
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
