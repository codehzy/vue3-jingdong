<template>
  <!-- 首页顶部定位区域及搜索框 -->
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe64f;</span>
      北京理工大学国防科技苑2号楼10层
      <span class="iconfont position__notice">&#xe6bb;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe699;</span>
      <input
        placeholder="山姆会员优惠商品"
        class="search__text search__text--focus"
      />
    </div>

    <!-- 首页banner，做了CSSHick防抖 -->
    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt="banner"
      />
    </div>

    <div class="icons">
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        />
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
    </div>

    <div class="gap"></div>
  </div>

  <!-- 首页底部导航 -->
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe60b;</div>
      <div class="docker__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe603;</div>
      <div class="docker__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe61f;</div>
      <div class="docker__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe640;</div>
      <div class="docker__title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
@import "./style/viriables.scss";
@import "./style/mixins.scss";
@import "./index.scss";
</style>
