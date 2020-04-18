<template>
  <v-card shaped elevatio="0" color="secondary" dark>
    <v-card-title>{{ cardTitle }}</v-card-title>
    <v-card-text>{{ cardText }}</v-card-text>
    <v-card-actions>
      <v-btn icon @click="clickLike" color="secondary">
        <v-icon v-if="!clicked" color="white">mdi-message</v-icon>
        <v-icon v-else color="white">mdi-message-draw</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      cardTitle: "Title",
      cardText: "Content",
      clicked: false
    };
  },
  components: {},
  methods: {
    clickLike() {
      let vm = this;
      vm.clicked = !vm.clicked;
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    login() {
      return this.$store.state.login;
    }
  },
  mounted() {}
};
</script>

<style></style>
