<template>
  <v-dialog v-model="processSelf" width="500" persistent>
    <v-card>
      <v-card-title class="headline secondary lighten-2" primary-title>
        <p class="white--text">確定要處理這個議題嗎?</p>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" text @click="doProcess">
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
import { processCard } from "@/api/Card/processCard.js";
export default {
  data() {
    return {};
  },
  props: ["processSelf", "card"],
  components: {},
  methods: {
    doProcess() {
      let vm = this;
      if (vm.getAuthority) {
        processCard(vm.card);
      }
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
      return this.getUser.email == this.card.data.postBy;
    }
  },
  mounted() {}
};
</script>

<style></style>
