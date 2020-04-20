<template>
  <v-app-bar v-model="drawer" color="white" app fixed elevation="0">
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {},
  components: {},
  computed: {
    getUser() {
      return this.$store.state.user;
    }
  }
};
</script>

<style></style>
