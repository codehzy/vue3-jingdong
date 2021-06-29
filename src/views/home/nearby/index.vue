<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      :to="`/shop/${item._id}`"
      v-for="item in nearbyList"
      :key="item._id"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Get } from "../../../utils/request";
import ShopInfo from "../../../components/ShopInfo.vue";

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const result = await Get("/shop/hot-list");
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result?.data;
    }
  };
  return { nearbyList, getNearbyList };
};

export default defineComponent({
  name: "Nearby",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return { nearbyList };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
