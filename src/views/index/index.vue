<template>
  <div>
    <Banner/>
    <div class="search-box">
      <router-link tag="div" to="/search" class="search search-div">
        <div class="search-img"></div>
        <div class="text">搜索</div>
      </router-link>
      <router-link tag="div" to="/list" class="book search-div">
        <div class="book-img"></div>
        <div class="text">书库</div>
      </router-link>
    </div>
    <div class="recommend-box">
      <p class="title">热辣推荐</p>
      <Recommend />
    </div>
    <seeMore />
    <div class="everyday-box">
       <p class="title">每日一推</p>
       <everyDay/>
    </div>
    <div class="update-box">
       <p class="title">最近更新</p>
       <update />
    </div>
    <seeMore />
  </div>
</template>

<script>
import Banner from "./banner";
import Recommend from "./recommend";
import seeMore from "./seeMore";
import everyDay from "./everyday";
import update from "./update";
export default {
  components: {
    Banner,
    Recommend,
    seeMore,
    everyDay,
    update
  }
};
</script>

<style  scoped>
.search-box {
  margin: 0.5rem auto 0.7rem;
  width: 6.3rem;
  height: 1.3rem;
  display: flex;
  justify-content: space-around;
}
.search-box .search-div {
  width: 2.5rem;
  height: 0.9rem;
  background-color: #ffebee;
  margin-top: 0.2rem;
  border-radius: 0.4rem;
  position: relative;
}
.search-div .search-img,
.search-div .book-img {
  position: absolute;
  width: 0.987rem;
  height: 0.973rem;
  z-index: 12;
  left: -0.08rem;
}
.search-div .search-img {
  background: url("../../assets/images/icon/nav-icon-1.png") 100% 100%;
  background-size: cover;
}
.search-div .book-img {
  background: url("../../assets/images/icon/nav-icon-2.png") 100% 100%;
  background-size: cover;
}
.search-box .text {
  line-height: 0.9rem;
  font-size: 0.4rem;
  position: absolute;
  right: 0.57rem;
}
.recommend-box .title,
.everyday-box .title,
.update-box .title{
  line-height: 0.373rem;
  font-size: 0.4rem;
  font-weight: 700;
  text-align: center;
  display: block;
  margin-bottom: 0.44rem;
  color: #1a1a1a;
}
</style>
