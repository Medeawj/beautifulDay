<template>
  <div class="see-more" @click="golist()">
    <span>更多漫画<i class="iconfont icon-youjiantou"></i></span>
  </div>
</template>

<script>
export default {

  methods: {
    golist(){
      this.$router.push('/list')
    }
  },
};
</script>

<style scoped>
.see-more span {
  width: 4.267rem;
  background-color: #f8f8f8;
  border-radius: 0.413rem;
  display: block;
  margin:  0.533rem auto 0.8rem;
  text-align: center;
  line-height: 0.827rem;
  font-size: 0.32rem;
  color: #999999;
  position: relative;
  
}
.see-more i{
  width: 0.12rem;
	height: 0.2rem;
  color: #999999;
  margin-left: 1px;
  vertical-align: top;
  font-size: 0.2rem;
}
</style>
