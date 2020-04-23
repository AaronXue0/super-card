<template>
  <v-footer app fixed>
    <v-btn
      v-for="(item, index) in icons"
      :key="index"
      icon
      color="white"
      :href="item.href"
    >
      <v-icon size="24px" color="primary">{{ item.icon }}</v-icon>
    </v-btn>
    <v-spacer />
    <post v-if="getUser" />
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
        {
          icon: "mdi-facebook",
          href: "https://www.facebook.com/TaipeiTechSU/"
        },
        { icon: "mdi-instagram", href: "https://www.instagram.com/ntut_su/" },
        {
          icon: "mdi-youtube",
          href: "https://www.youtube.com/channel/UCYE4ivIc2WiBx5aGiiIw80w"
        }
      ]
    };
  },
  methods: {},
  components: { post },
  computed: {
    getUser() {
      return this.$store.state.user;
    }
  }
};
</script>

<style></style>
