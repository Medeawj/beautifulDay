<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content">           
            <li v-for="(list,novelid) in listLit" :key="novelid" @click="gokan(list.fid)">
                <div class="book-img"><img v-lazy="list.small_cover" alt="暂无图片" title="暂无图片"></div>
                <div class="book-info">
                    <p>{{list.title}}</p>
                    <p>更新到第 {{list.recentchaptercode + 1}} 话</p>
                    <p>{{list.tags}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
     data(){
      return{
          listLit:[],
          pageIndex:1
      }
    },
    mounted(){
        this.getList()
    },
    methods: {
    getList(){
      this.myaxios({
        url:'/EBook/List.aspx?ContentType=2',
        params:{
            // pageSize:99999
            pageIndex: this.pageIndex
        }
      }).then(res=>{
        //   this.listLit = res.data.list.item;
          this.listLit = this.listLit.concat(res.data.list.item);
          this.$nextTick(() => {
            if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                scrollY: true,
                pullUpLoad: {
                    threshold: -10 // 当上拉距离超过10px时触发 pullingUp 事件
                }
            })
                this.scroll.on('pullingUp', () => {
                this.scroll.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
                if(parseInt(res.data.list.pagecount)> this.pageIndex){
                this.pageIndex++;
                this.getList()
                }
                })
                
                }else{
                    this.scroll.refresh()
                }
        })
      })
    },
    gokan(url){
        window.location.href = 'https://www.kanman.com/' + url
    }
  },
}
</script>

<style scoped>
.wrapper{
    overflow: hidden;
    height: 94vh;
    margin-top: 0.32rem;
}
.content li{
    width: 90%;
    height: 3.24rem;
    margin: 0.36rem 4%;
}
.content li{
    display:flex;
    align-items: center;
}
.book-img{
    display: inline-block;
    margin-bottom: 0.32rem;
}
.book-img img{
    width: 2.333rem;
	height: 3.2rem;
	border-radius: 0.08rem;
}
.book-info{
    display: inline-block;
    margin-left: 0.28rem;
}
.book-info p{
	font-size: 0.293rem;
    color: #999999;
    margin-bottom: 0.3rem;
}
.book-info p:nth-of-type(1){
    font-size: 0.4rem;
    color: #474747;
    line-height: 0.373rem;
}

</style>