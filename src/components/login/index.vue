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
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="password"
        aria-autocomplete="new-password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage"></Toast>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { defineComponent, reactive, toRefs } from "vue";
import Post from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast.vue";
// import useToastEffect  from '../../components/Toast'

const useLoginEffect = (showToast) => {
  // Login调到Home
  const router = useRouter();
  const data = reactive({ username: "", password: "" });
  const handleLogin = async () => {
    // 验证用户输入
    if (data.username === "" || data.password === "") {
      showToast("请输入用户名和密码");
      return;
    }

    try {
      const result = await Post("/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        await router.push({ name: "Home" });
      } else {
        showToast("登录失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return {
    username,
    password,
    handleLogin,
  };
};

const useRegisterEffect = () => {
  const router = useRouter();
  // 跳转到注册页面
  const handleRegisterClick = () => {
    router.push({ name: "Register" });
  };
  return { handleRegisterClick };
};

export default defineComponent({
  name: "Login",
  components: {
    Toast,
  },
  setup: () => {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const { handleRegisterClick } = useRegisterEffect(showToast);

    return {
      handleLogin,
      handleRegisterClick,
      username,
      password,
      show,
      toastMessage,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
