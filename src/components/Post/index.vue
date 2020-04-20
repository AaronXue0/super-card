<template>
  <div class="post">
    <v-btn color="white" fab @click="dialog = true" small>
      <v-icon color="priCard">
        mdi-message-text
      </v-icon>
    </v-btn>
    <card :dialog="dialog" v-on:cancel-dialog="cancelDialog" />
  </div>
</template>

<script>
import card from "@/components/Post/postCard.vue";

export default {
  data() {
    return {
      dialog: false
    };
  },
  components: {
    card
  },
  methods: {
    cancelDialog() {
      this.dialog = false;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style>
.post {
  position: fixed;
  right: 5%;
  z-index: 99;
  bottom: 3.5%;
}
</style>
