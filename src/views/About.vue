<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ol>
      <li class="user-list" v-bind:key="index" v-for="(user, index) in users">
        {{ index }}: {{ user.name }} {{ user.age }} {{ user.sex }}{{ user.job }}
      </li>
    </ol>
    <img :src="src" alt="img" height="200" v-on:click="togle" width="200" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "about",
  data() {
    return {
      i: 0,
      s: null,
      users: [],
      src: "/query/g"
    };
  },
  mounted() {
    this.togle();
    this.log();
  },
  methods: {
    togle() {
      let that = this;
      axios
        .get("http://www.test.com/img")
        .then(res => {
          console.log(res);
          that.src = res.data.img;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          console.log("done get img");
        });
    },
    log() {
      let that = this;
      axios
        .get("http://www.test.com")
        .then(res => {
          that.users = res.data.userInfo;
          // console.log(res);
          console.log("get data");
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          console.log("done get img");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.user-list {
  list-style: none;
}
</style>
