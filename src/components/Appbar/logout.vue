<template>
  <v-dialog v-model="dialog" width="500" persistent>
    <v-card>
      <v-card-title class="headline secondary lighten-2" primary-title>
        <p class="white--text">Log out</p>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" text @click="logout">
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
export default {
  data() {
    return {};
  },
  props: ["dialog"],
  components: {},
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
      this.$emit("cancel-dialog", false);
    },
    cancel() {
      this.$emit("cancel-dialog", false);
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style></style>
