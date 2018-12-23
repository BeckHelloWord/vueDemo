<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header
  },
  watch: {},
  data() {
    return {};
  }
};
</script>
<style  scoped  lang="scss">
// 全局引入通用scss
@import "./assets/style/public.scss";
</style>
