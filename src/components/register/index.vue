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
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="确认密码"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">
      已有账号去登陆
    </div>
    <Toast v-if="show" :message="toastMessage"></Toast>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { defineComponent, reactive, toRefs } from "vue";
import Post from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast.vue";

// 处理注册相关逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
    ensurement: "",
  });

  const handleRegister = async () => {
    // TODO:验证用户输入
    // if (data.username === "" || data.password === "") {
    //   showToast("请输入用户名和密码");
    //   return;
    // }

    try {
      const result = await Post("/user/register", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        router.push({ name: "Login" });
      } else {
        showToast("注册失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };

  const { username, password, ensurement } = toRefs(data);
  return { username, password, ensurement, handleRegister };
};

// 处理登陆跳转
const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: "Login" });
  };
  return { handleLoginClick };
};

export default defineComponent({
  name: "Register",
  components: {
    Toast,
  },
  setup: () => {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, ensurement, handleRegister } =
      useRegisterEffect(showToast);
    const { handleLoginClick } = useLoginEffect();
    return {
      username,
      password,
      ensurement,
      show,
      toastMessage,
      handleRegister,
      handleLoginClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
