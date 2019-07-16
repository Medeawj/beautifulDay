<template>
  <div>
    <div class="update-list">
      <div class="update-item" v-for="(item, index) in updateList" :key="index" @click="gokan(item.linkurl)">
        <div class="update-img">
          <img v-lazy=item.small_cover alt="">
        </div>
        <div class="update-info">
          <p class="update-title">{{item.rec_title}}</p>
          <span class="describe">更新至：第{{item.recentchaptercode+1}}话</span>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data(){
    return{
      updateList:[]
    }
  },
  methods: {
    gokan(url){
      window.location.href = url
    },
    getUpdate(){
      this.myaxios({
        url: 'Common/Recommend/List.aspx?ClassId=31'
      }).then(res=>{
        if(res.data.ret_result.ret_code ==1 ){
          this.updateList = res.data.list.item
        }else {
          alert(res.data.ret_result.ret_message)
        }
      })
    }
  },
  mounted(){
    this.getUpdate()
  }
}
</script>

<style scoped>
.update-list {
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between
}
.update-list .update-item{
width: 3.28rem;
	height: 5.56rem;
  margin-bottom: 0.267rem;
}
.update-item .update-img{
  width: 3.24rem;
	height: 4.3rem;
	background-color: #000000;
	border-radius: 0.133rem;
}
.update-item .update-img img{
  width: 100%;
  border-radius: 0.133rem;
}
.update-info .update-title{
  line-height: 0.826rem;
  font-size: 0.347rem;
  color: #333333;
  display: block;
  width: 2.9rem;
   text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.update-info .describe{
  font-size: 0.293rem;
  line-height: 0.373rem;
  color: #999999;
  display: block;
  width: 2.9rem;
   text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
