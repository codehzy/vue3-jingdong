<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe676;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe699;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo";

// 获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute();
  const data = reactive({ item: {} });
  const getItemData = async () => {
    const result = await Get(`/shop/${route.params.id}`);
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  const { item } = toRefs(data);
  return { item, getItemData };
};

// 点击回退逻辑
const useBackRouterEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return handleBackClick;
};

export default {
  name: "Shop",
  components: { ShopInfo },
  setup() {
    const { item, getItemData } = useShopInfoEffect();
    const handleBackClick = useBackRouterEffect();
    getItemData();
    return { item, handleBackClick };
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
