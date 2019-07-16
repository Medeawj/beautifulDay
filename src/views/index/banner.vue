<template>
      <!-- swiper -->
      <swiper v-if='bannerList.length>1' :options="swiperOption" ref="mySwiper">
          <swiper-slide   @click="gokan(item.linkurl)" :data-url=item.linkurl v-for="(item, index) in bannerList" :key="index" class="slide" :style="'background: url('+item.rec_cover+') 100% 100% no-repeat;background-size: cover;'">
          </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
   
</template>

<script>
import 'swiper/dist/css/swiper.css'


import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  data(){
    return {
        swiperOption: {
          spaceBetween: 30,
          effect: 'fade',
          loop: true,
           autoplay: {
              delay: 3000, //自动切换的时间间隔，单位ms
              stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
              disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
              reverseDirection: true, //开启反向自动轮播。
              waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
            },
          paginationClickable:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on:{
            click:()=>{
              window.location.href =  this.$refs.mySwiper.swiper.clickedSlide.dataset.url
            }
          }
        },
        bannerList:[]
      }
  },
  components:{
    swiper,
    swiperSlide
  },
  mounted(){
    this.getBanner()
  },
  methods: {
    gokan(url){
      window.location.href = url
    },
    getBanner(){
      this.myaxios({
        url:'Common/Recommend/List.aspx?ClassId=29'
      }).then(res=>{
        if(res.data.ret_result.ret_code === 1){
          this.bannerList = res.data.list.item
        }else {
          alert(res.data.ret_result.ret_message)
        }
      })
    }
  },
}
</script>

<style scoped>
  .slide.swiper-slide {
    width: 10rem;
    display: block;
    height: 6.667rem;
    border-radius: 0 0 60% 60% / 21% 21%;
    
  }
</style>
