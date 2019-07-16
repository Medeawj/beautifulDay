<template>
  <div>
    <div class="searchHeader">
        <i class="iconfont icon-daohangzuojiantou" @click="back()"></i>
        <input
        type="text"
        placeholder="搜索漫画名或作者"
        class="search"
        v-model="searchval"
        @input="booklist"
      >
      <i class="iconfont icon-sousuo1" @click="souPage()"></i>
    </div>
    <main>
      <!-- 未搜索界面 -->
       <div class="searchTj" v-if="Flag == 1">
          <p class="search-hot">热门搜索</p>
          <div class="searchTj-list" v-for="(item, index) in defaultList" :key="index" @click="goSearch(item.name)">
              <p class="searchTj-title">{{item.name}}</p>
          </div>
      </div>

      <!-- 搜索中，关键字变红色 -->
       <div class="searchIn" v-else-if="Flag == 2">
         <p class="search-in">包含“<span>{{searchval}}</span>”的漫画</p>
          <div class="searchIn-list" v-for="(list,novelid) in items" :key="novelid" @click="book(list.title)">
            <p v-html="autoColor(list.title, searchval)" />
          </div>
      </div>

      <!-- 书籍列表 -->
      <div ref="wrapper" class="wrapper" v-else>
        <ul class="content">           
            <li v-for="(list,novelid) in items" :key="novelid" @click="gokan(list.fid)">
                <div class="book-img"><img v-lazy="list.small_cover" alt="暂无图片" title="暂无图片"></div>
                <div class="book-info">
                    <p>{{list.title}}</p>
                    <p>更新到第 {{list.recentchaptercode + 1}} 话</p>
                    <p>{{list.tags}}</p>
                </div>
            </li>
        </ul>
    </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchval: "",
      items: [],
      Flag: 1,
      defaultList:[]
    };
  },
  watch: {
     searchval(){
         if(this.searchval != '' ){
            this.booklist();
         }  
     },
  },
  methods: {
    book(name){
       this.Flag = 3;
        this.myaxios({
          url: "/EBook/List.aspx?ContentType=2",
          params: {
            Keyword: name
          }
        }).then(res => {
            this.items = res.data.list.item;
            // console.log("333" + this.items);
        });
    },
    goSearch(name){
        this.searchval = name
    },
    getDefault(){
        this.myaxios({
            url:'Common/HotSearch/List.aspx'
        }).then(res=>{
            if(res.data.ret_result.ret_code == 1){
                this.defaultList = res.data.list.item
            }
        })
    },
    back() {
      this.$router.push("/");
    },
    souPage() {
          this.Flag = 3;
          this.myaxios({
          url: "/EBook/List.aspx?ContentType=2",
          params: {
            Keyword: this.searchval,
            pageSize:999999
          }
        }).then(res => {
          if (res.data.ret_result.ret_code === 1 && res.data.list) {
            this.items = res.data.list.item;
            // console.log("222" + this.items);
          }
        });
      
    },
    booklist() {
      if (this.searchval == "") {
        this.Flag = 1;
      } else {
        this.Flag = 2;
        this.myaxios({
          url: "/EBook/List.aspx?ContentType=2",
          params: {
            Keyword: this.searchval,
          }
        }).then(res => {
          if (res.data.ret_result.ret_code === 1 && res.data.list) {
            this.items = res.data.list.item;
          }
        });
      }
    },
    autoColor(str, key) {
      return str.replace(
        new RegExp(key, "gm"),
        '<span style="color:#ff6680">' + key + "</span>"
      );
    },
    
  },
  mounted() {
    this.Flag = 1; //默认页面
    this.getDefault()
  }
};
</script>
<style scoped>
/* search头 */
.searchHeader{
  width: 10rem;
	height: 1.213rem;
  background: #ff6680; 
	box-shadow: 0rem 0.027rem 0rem 0rem 
		#ebebeb;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.searchHeader i{
  color: #ffffff;
}
.search{
  width: 6.627rem;
	height: 0.827rem;
	background-color: #ffffff;
	border-radius: 0.413rem;
  padding-left: 0.52rem;
  border: 0;
  outline: none;
}
.search::placeholder{
	font-size: 0.32rem;
	color: #999999;
}
/* search推荐 */
.searchTj{
    padding: 0 0.413rem;
}
.search-hot{
	font-family: PingFang-SC-Bold;
	font-size: 0.373rem;
	color: #ff6680;
    margin: 0.413rem 0 0.4rem 0;
}
.searchTj-list{
    display: inline-block;
    margin: 0 0.27rem 0.267rem 0;
}
.searchTj-title{
    display: inline-block;
    font-size: 0.347rem;
    color: #1a1a1a;
    padding: 0.227rem 0.627rem 0.24rem;
    background: #f9f9f9;
    border-radius: 0.4rem;
}

/* search中 */
.searchIn{
    padding: 0 0.347rem;
}
.searchIn p{
    height: 1.44rem;
    line-height: 1.44rem;
    border-bottom: 0.027rem solid #ececec;
    padding-left: 0.627rem;
}
.searchIn p span{
    color: #ff6680;
}
.search-in{
	font-size: 0.4rem;
	color: #808080;
}
.searchIn-title{
	font-size: 0.401rem;
	color: #333333;
}
.searchIn-list:last-child p{
    border-bottom: 0;
}

/* searchbook */
.wrapper{
    /* overflow: hidden;
    height: 94vh;
    margin-top: 0.32rem; */
}
.content li{
    width: 90%;
    height: 3.24rem;
    margin: 0.36rem 4%;
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
