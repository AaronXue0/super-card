<template>
  <v-footer app fixed>
    <v-btn v-for="(item, index) in icons" :key="index" icon>
      <v-icon size="24px">{{ item.icon }}</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: "mdi-facebook", href: "" },
        { icon: "mdi-email", href: "" }
      ]
    };
  },
  methods: {},
  components: {},
  computed: {}
};
</script>

<style></style>
