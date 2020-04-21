<template>
  <v-footer app fixed>
    <v-btn v-for="(item, index) in icons" :key="index" icon color="white">
      <v-icon size="24px" color="primary">{{ item.icon }}</v-icon>
    </v-btn>
    <v-spacer />
    <post />
    <v-card-text class="py-2 black--text text-center">
      {{ new Date().getFullYear() }} — <strong>NTUT SU</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
import post from "@/components/Post/index.vue";
export default {
  data() {
    return {
      icons: [
        { icon: "mdi-facebook", href: "" },
        { icon: "mdi-instagram", href: "" },
        { icon: "mdi-youtube", href: "" }
      ]
    };
  },
  methods: {},
  components: { post },
  computed: {}
};
</script>

<style></style>
