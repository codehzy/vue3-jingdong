<template>
  <div class="footer">
    <span class="footer__icon iconfont">&#xe609; </span>
    <div class="footer__pay">
      <div class="footer__pay__text">去结算</div>
    </div>
    <span class="footer__totalPrice">
      <span class="footer__totalPrice__title">总计：</span>
      <span class="footer__totalPrice__text">&yen;128</span>
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  // setup: () => {},
});
</script>

<style lang="sass" scoped>
@import "./footer.scss"
</style>
