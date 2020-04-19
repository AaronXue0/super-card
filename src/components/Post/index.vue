<template>
  <div class="post">
    <v-btn color="white" fab>
      <v-icon color="priCard">
        mdi-message-text
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style>
.post {
  position: fixed;
  right: 5%;
  z-index: 99;
  bottom: 5%;
}
</style>
