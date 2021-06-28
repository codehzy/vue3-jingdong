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
        placeholder="请输入手机号"
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
    <div class="wrapper__register-button">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">
      已有账号去登陆
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Register",
  setup: () => {
    const router = useRouter();
    const handleLoginClick = () => {
      router.push({ name: "Login" });
    };
    return {
      handleLoginClick,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
