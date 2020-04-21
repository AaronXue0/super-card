<template>
  <v-navigation-drawer
    v-model="drawer"
    width="100%"
    fixed
    temporary
    color="warning"
    class="nav-drawer"
  >
    <v-list-item>
      <v-btn
        icon
        fab
        color="black"
        @click="closeDrawer"
        fixed
        x-large
        class="btn-close"
      >
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
    </v-list-item>
    <v-list-item-group v-if="getUser">
      <v-list-item></v-list-item>
      <v-list-item>
        <h1 class="white--text">
          <v-avatar color="white">
            <v-img :src="getUser.photoURL"></v-img>
          </v-avatar>
          {{ getUser.displayName }}
        </h1>
      </v-list-item>
      <v-list-item>
        <h3 class="white--text">北科信箱: {{ getUser.email }}</h3>
      </v-list-item>
      <v-list-item>
        <v-divider class="white"></v-divider>
      </v-list-item>
      <v-list-item>
        <h2 class="white--text">發文規則</h2>
      </v-list-item>
      <v-list-item v-for="(item, index) in rule" :key="index">
        <p class="white--text text-xs-right">
          <br />
          {{ item.index }}
          <br />
        </p>
      </v-list-item>
      <v-list-item>
        <v-divider class="white"></v-divider>
      </v-list-item>
      <v-list-item class="div-icon">
        <div v-for="(item, index) in icons" :key="index">
          <v-icon x-large color="white">{{ item.icon }}</v-icon>
        </div>
      </v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: "mdi-facebook" },
        { icon: "mdi-instagram" },
        { icon: "mdi-youtube" }
      ],
      rule: [
        {
          index: "一天最多五則貼文"
        },
        {
          index: "發文規則同北科全體版，違者將刪除貼文"
        },
        {
          index: "情節嚴重且多次屢犯，封鎖該使用者帳號"
        }
      ]
    };
  },
  props: ["drawer"],
  methods: {
    closeDrawer() {
      this.$emit("close-Drawer");
    }
  },
  computed: {
    getUser: {
      get() {
        console.log(this.$store.state.user);
        return this.$store.state.user;
      }
    }
  }
};
</script>

<style>
.nav-drawer {
  opacity: 80%;
}
.btn-close {
  position: relative;
  top: 1%;
  left: 0;
}
.div-icon {
  display: flex;
  position: relative;
  list-style: none;
  justify-content: flex-start;
}
</style>
