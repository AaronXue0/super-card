<template>
  <div class="post">
    <v-btn color="secondary" @click="dialog = true" x-small fab elevation="0">
      <v-icon color="primary">
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

<style></style>
