<template>
  <div>
    <div class="recommend-list" >
      <div class="recommend-item" v-for="(item, index) in dataList" :key="index" @click="gokan(item.linkurl)">
        <div class="dom_width">
          <img v-lazy=item.rec_cover alt class="imgs">
        </div>
        <div class="title-box">
          <p class="title">{{item.rec_title}}</p>
          <span class="describe">{{item.rec_description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataList: [],
    }
  },
  mounted(){
    this.getInfo()
    // 获取所有的img标签
    let imgList = document.querySelectorAll(".imgs");
    // 获取父元素宽高
    let parentWh = imgList[0].parentNode;
    let wid = this.getWidHei(parentWh, 'width');
    let hei = this.getWidHei(parentWh, 'height');


    // 等比压缩图片
    this.AutoSize(imgList, wid, hei);

  },
  methods: {
    gokan(url){
 window.location.href = url
    },
    getInfo(){
      this.myaxios({
        url:'Common/Recommend/List.aspx?ClassId=28'
      }).then(res=>{
        if(res.status == 200){
          this.dataList = res.data.list.item
        }
      })
    },

    AutoSize(listImg, maxWidth, maxHeight) {
      //原图片原始地址（用于获取原图片的真实宽高，当<img>标签指定了宽、高时不受影响）
      let image = new Image();
      
      for (let i = 0; i < listImg.length; i++) {
        // 获取每一个图片的宽高
        image.src = listImg[i].src;

        // 当图片比图片框小时不做任何改变
        if (image.width < maxWidth && image.height < maxHeight) {
          //原图片宽高比例 大于 图片框宽高比例
          listImg[i].width = image.width;
          listImg[i].height = image.height;
        } else {
          //原图片宽高比例 大于 图片框宽高比例,则以框的宽为标准缩放，反之以框的高为标准缩放
          if (maxWidth / maxHeight <= image.width / image.height) {
            listImg[i].width = maxWidth; //以框的宽度为标准
            listImg[i].height = maxWidth * (image.height / image.width);
          } else {
            listImg[i].width = maxHeight * (image.width / image.height);
            listImg[i].height = maxHeight; //以框的高度为标准
          }
        }
      }
    },
     // 通过当前元素获取宽高
    getWidHei(el, name) {
      let val = name === "width" ? el.offsetWidth : el.offsetHeight,
        which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
      // display is none
      if (val === 0) {
        return 0;
      }
      let style = this.getStyle(el);
      // 左右或上下两边的都减去
      for (let i = 0, a; (a = which[i++]); ) {
        val -= parseFloat(style["border" + a + "Width"]) || 0;
        val -= parseFloat(style["padding" + a]) || 0;
      }
      return val;
    }
 


  },
};
</script>

<style scoped>
.recommend-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recommend-item {
  width: 4.933rem;
  margin-bottom: 0.273rem;
}

.dom_width{
  width: 4.933rem;
  height: 3.067rem;
}
.recommend-item img {
  width: 4.933rem;
  height: 3.067rem;
  background-color: #000000;
  border-radius: 0.133rem;
}
.recommend-item .title-box {
  padding-left: 0.133rem;
  margin-bottom: 0.253rem;
}
.recommend-item .title {
  line-height: 0.473rem;
  font-size: 0.373rem;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
}
.recommend-item .describe {
  line-height: 0.383rem;
  font-size: 0.293rem;
  color: #999999;
  width: 4.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin: 0.213rem 0 0 0
}
</style>
