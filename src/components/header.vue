<template>
  <div class="header">
    <div>
      <img src="../assets/images/logo.png">
    </div>
    <router-link to="/login" class="login">登录</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: pxToRem($commonPadding);
  background: $mainColor;
  img {
    height: 36px;
    width: auto;
  }
  .login {
    font-size: pxToRem(20);
    color: #fff;
  }
}
</style>

