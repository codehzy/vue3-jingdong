<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img :src="item.img" class="nearby__item__img" />
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tag"
            v-for="(innnerItem, innerIndex) in item.tags"
            :key="innerIndex"
            >{{ innnerItem }}</span
          >
        </div>
        <p class="nearby__content__highlight">
          VIP尊享满89元减4元运费券（每月3张）
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Nearby",
  setup() {
    const nearbyList = [
      {
        id: 1,
        img: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 2,
        img: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 3,
        img: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 4,
        img: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 5,
        img: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
    ];
    return {
      nearbyList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
