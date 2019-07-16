<template>
  <div>
    <img v-lazy=dataObj.rec_cover alt class="everyday-img" @click="gokan()">
    <div class="day-box"  @click="gokan()">
      <p class="title">{{dataObj.rec_title}}</p>
      <span class="describe">{{dataObj.rec_description}}</span>
      <div class="hot">
        <img src="../../assets/images/icon/icon-hot.svg" alt="">
        <div><span>{{dataObj.hits}}亿</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataObj:Object
    }
  },
  methods: {
    gokan(){
      window.location.href = this.dataObj.linkurl
    },
    gitEveryInfo(){
      this.myaxios({
        url:'Common/Recommend/List.aspx?ClassId=30'
      }).then(res=>{
        if(res.data.ret_result.ret_code === 1){
          this.dataObj = res.data.list.item[0]
        }else {
          alert(res.data.ret_result.ret_message)
        }
      })
    }
  },
  mounted(){
    this.gitEveryInfo()
  }
};
</script>

<style scoped>
.everyday-img {
  width: 10rem;
  height: 4.133rem;
  background-color: #7f96bd;
  display: block;
}
.day-box {
  padding: 0 0.133rem 0 0.122rem;
  position: relative;
  margin-bottom: 0.64rem
}
.day-box .title {
  font-size: 0.4rem;
  line-height: 0.9rem;
  color: #333333;
}
.day-box .describe {
  display: block;
  width: 6rem;
  overflow: hidden;
  font-size: 0.32rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.day-box .hot {
  position: absolute;
  align-items: center;
  right: 0.133rem;
  bottom: 0;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
  top:50%
}
.day-box .hot img{
  width: 0.4rem;
	height: 0.4rem;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.day-box .hot div span{
  font-size: 0.32rem;
  color: #999999;
}
</style>
