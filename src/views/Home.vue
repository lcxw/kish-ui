<template>
  <div class="container" id="home">
    <!-- 导航菜单栏 -->
    <nav-bar></nav-bar>
    <!-- 头部区域 -->
    <head-bar></head-bar>
    <!-- 主内容区域 -->
    <main-content></main-content>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBar from "./HeadBar/HeadBar";
import NavBar from "./NavBar/NavBar";
import MainContent from "./MainContent/MainContent";

export default {
  name: "home",
  components: {
    HeadBar,
    NavBar,
    MainContent
  }
};
</script>
<style lang="less">
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  // background: rgba(224, 234, 235, 0.1);
}
</style>
