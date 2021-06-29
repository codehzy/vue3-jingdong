<link rel="stylesheet" href="content.scss">
<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="product__item__detail">
          <h4 class="product__item__detail__title">番茄250g/份</h4>
          <p class="product__item__detail__sales">月售10件</p>
          <p class="product__item__detail__price">
            <span class="product__item__detail__yen">&yen;</span>33.6
            <span class="product__item__detail__origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product__item__number">
          <span class="product__item__number__minus">-</span>
          0
          <span class="product__item__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: ""
  //   setup: () => {},
});
</script>
<style lang="sass" scoped>
@import "./content.scss"
</style>