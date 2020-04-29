<template>
  <v-dialog v-model="deleteSelf" width="500" persistent>
    <v-card>
      <v-card-title class="headline secondary lighten-2" primary-title>
        <p class="white--text">確定要刪除嗎?</p>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" text @click="doDelete">
          OK
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="cancel">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// import { postNewCard } from "@/api/postNewCard.js";
export default {
  data() {
    return {};
  },
  props: ["deleteSelf", "cardInfo"],
  components: {},
  methods: {
    doDelete() {
      let vm = this;
      //   postNewCard(vm.title, vm.content, vm.getUser);
      vm.$emit("cancel-dialog");
    },
    cancel() {
      let vm = this;
      vm.$emit("cancel-dialog");
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    login() {
      return this.$store.state.login;
    },
    getCards() {
      return this.$store.state.cards;
    },
    getAuthority() {
      return this.$store.state.isAdmin;
    },
    isOwer() {
      return this.getUser.email == this.getCards[this.cardInfo].data.postBy;
    }
  },
  mounted() {}
};
</script>

<style></style>
