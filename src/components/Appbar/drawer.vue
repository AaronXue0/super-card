<template>
  <v-navigation-drawer
    v-model="drawerState"
    width="100%"
    fixed
    temporary
    color="warning"
  >
    <v-btn icon fab color="black" @click="closeDrawer" fixed large>
      <v-icon color="white">mdi-close</v-icon>
    </v-btn>
    <v-list-item></v-list-item>
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
        <h3 class="white--text">Email | {{ getUser.email }}</h3>
      </v-list-item>
      <v-list-item>
        <v-divider class="white"></v-divider>
      </v-list-item>
    </v-list-item-group>
    <v-list-item-group v-else>
      <v-list-item></v-list-item>
      <v-list-item>
        <h1 class="white--text">請先登入北科信箱</h1>
      </v-list-item>
      <v-list-item>
        <v-divider class="white"></v-divider>
      </v-list-item>
    </v-list-item-group>
    <v-list-item-group>
      <v-list-item>
        <h2 class="white--text">發文規則</h2>
      </v-list-item>
      <v-list-item v-for="(item, index) in rule" :key="index">
        <p class="white--text text-xs-right">
          <br />
          {{ item.text }}
          <br />
        </p>
      </v-list-item>
      <v-list-item>
        <v-divider class="white"></v-divider>
      </v-list-item>
    </v-list-item-group>
    <v-btn fab icon :href="icons[0].href">
      <v-icon large color="white">{{ icons[0].i }}</v-icon>
    </v-btn>
    <v-btn fab icon :href="icons[1].href">
      <v-icon large color="white">{{ icons[1].i }}</v-icon>
    </v-btn>
    <v-btn fab icon :href="icons[2].href">
      <v-icon large color="white">{{ icons[2].i }}</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { i: "mdi-facebook", href: "https://www.facebook.com/TaipeiTechSU/" },
        { i: "mdi-instagram", href: "https://www.instagram.com/ntut_su/" },
        {
          i: "mdi-youtube",
          href: "https://www.youtube.com/channel/UCYE4ivIc2WiBx5aGiiIw80w"
        }
      ],
      rule: [
        {
          text: "1. 一天五則貼文，發文冷卻為五分鐘"
        },
        {
          text: "2. 發文規則同北科全體版，違者將刪除貼文"
        },
        {
          text: "* 情節嚴重且多次屢犯，封鎖該使用者帳號"
        }
      ]
    };
  },
  methods: {
    closeDrawer() {
      this.$store.commit("setDrawer", false);
    }
  },
  computed: {
    getUser: {
      get() {
        return this.$store.state.user;
      }
    },
    drawerState: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawer", val);
      }
    }
  }
};
</script>

<style>
.div-icon {
  display: flex;
  position: relative;
  list-style: none;
  justify-content: flex-start;
}
</style>
