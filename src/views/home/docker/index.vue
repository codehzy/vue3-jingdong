<template>
  <div class="docker">
    <div
      v-for="item in tabers"
      :key="item.icon"
      class="docker__item"
      :class="{ docker__item: true, 'docker__item--active': item.index === 0 }"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { apiGetDockerList } from "../../../api/index";
import "../../../interface/index.ts";
import "../../../api/data";
import "../../../api/index";
import { dockerListType } from "@/interface";

export default defineComponent({
  name: "Docker",
  setup: () => {
    const tabers = ref<dockerListType[]>([]);

    const getTaber = async () => {
      tabers.value = await apiGetDockerList();
    };

    getTaber();
    return {
      tabers,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
