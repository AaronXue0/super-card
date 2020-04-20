<template>
  <v-footer app fixed>
    <v-btn v-for="(item, index) in icons" :key="index" icon>
      <v-icon size="24px">{{ item.icon }}</v-icon>
    </v-btn>
    <v-card-text class="py-2 black--text text-center">
      {{ new Date().getFullYear() }} — <strong>NTUT SU</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: "mdi-home", href: "" },
        { icon: "mdi-facebook", href: "" },
        { icon: "mdi-instagram", href: "" }
      ]
    };
  },
  methods: {},
  components: {},
  computed: {}
};
</script>

<style></style>
