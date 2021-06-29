<link rel="stylesheet" href="content.scss">
<template>
  <div class="content">
    <div class="category">
      <div :class="{'category__item':true,'category__item--active': currentTab === item.tab}" v-for="item in categories" :key="item._id"
           @click="() => handleCategoryClick(item.tab)">{{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in contentList" :key="item._id">
        <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="product__item__detail">
          <h4 class="product__item__detail__title">{{ item.name }}</h4>
          <p class="product__item__detail__sales">月售 {{ item.sales }}</p>
          <p class="product__item__detail__price">
            <span class="product__item__detail__yen">&yen;</span>{{ item.price }}
            <span class="product__item__detail__origin">&yen;{{ item.oldPrice }}</span>
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
<script>
import { defineComponent, reactive, toRefs } from "vue";
import { Get } from "../../utils/request";

export default defineComponent({
  name: "Content",
  setup: () => {
    const categories = [
      {
        name: "全部商品",
        tab: "all"
      },
      {
        name: "秒杀",
        tab: "seckill"
      },
      {
        name: "新鲜水果",
        tab: "fruit"
      }
    ];
    const data = reactive({
      currentTab: categories[0].tab,
      contentList: []
    });

    // 获取商品列表数据
    const getContentData = async (tab) => {
      const result = await Get("shop/1/products", { tab });
      if (result?.errno === 0 && result?.data?.length) {
        data.contentList = result.data;
      }
    };

    // 点击重新获取数据并且传递tab
    const handleCategoryClick = (tab) => {
      getContentData(tab);
      // 选中tab将其根据tab名变白
      data.currentTab = tab;
    };

    getContentData("all");
    const { contentList,currentTab } = toRefs(data);
    return { contentList, categories,currentTab, handleCategoryClick };
  }
});
</script>
<style lang="sass" scoped>
@import "./content.scss"
</style>