<template>
    <div>
        <div class="header">
            <i class="iconfont icon-daohangzuojiantou" @click="back()"></i>
            <p class="list-title">书库</p>
            <i class="iconfont icon-sousuo1" @click="goSearch()"></i>
        </div>
        <ListLit /> 
    </div>
</template>

<script>
import ListLit from "./ListLit"
export default {
    components:{
        ListLit
    },
    methods: {
        back(){
            this.$router.push('/')
        },
        goSearch(){
            this.$router.push('/search')
        }
    },
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.2rem;  
    align-items: center;
    border-bottom:1px solid #ebebeb;
}
.header i{
    width: 0.5rem;
	height: 0.5rem;
    margin: 0 0.3rem;
    color: #191919;
    margin-top: -7px;
}
.list-title{
    font-size: 0.4rem;
	color: #333333;
}
</style>