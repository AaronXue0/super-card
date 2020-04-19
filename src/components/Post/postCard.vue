<template>
  <v-dialog v-model="dialog" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">學權日記</span>
      </v-card-title>

      <v-col cols="12" md="6">
        <v-textarea
          solo
          outlined
          flat
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
        <v-textarea
          solo
          outlined
          flat
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
      </v-col>
      <small>*indicates required field</small>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="cancel">Close</v-btn>
        <v-btn color="blue darken-1" text @click="cancel">Save</v-btn>
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
    cancel() {
      this.$emit("cancel-dialog", false);
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style></style>
