<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, reactive } from "vue";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export default defineComponent({
  name: "Login",

  setup: () => {
    const data = reactive({
      username: "",
      password: "",
    });
    const router = useRouter();
    // Login调到Home
    const handleLogin = () => {
      axios
        .post(
          "https://www.fastmock.site/mock/db328b8fc6158bfc7ac1b07b12f87fcf/api/user/login",
          {
            username: data.username,
            password: data.password,
          },
        )
        .then(() => {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        })
        .catch(() => {
          alert("登陆失败");
        });
      // localStorage.isLogin = true;
      // router.push({ name: "Home" });
    };

    // 跳转到注册页面
    const handleRegisterClick = () => {
      router.push({ name: "Register" });
    };

    return {
      handleLogin,
      handleRegisterClick,
      data,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
