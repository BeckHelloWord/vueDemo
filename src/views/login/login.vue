<template>
    <div>
        login
        <button type="login" @click="login">登录</button>
    </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem("token", "true");
      /* 登录成功后回到来源页面 */
      const sourceUrl = this.$route.query.redirect;
      this.$router.push(sourceUrl);
    }
  },
  mounted() {

  }
};
</script>
