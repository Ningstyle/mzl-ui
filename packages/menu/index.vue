<template>
    <div class="mzl-menu-default-box">
        <template v-for="(item,index) in options" :key="index">
            <menu-item :items="item" :index="0"></menu-item>
        </template>
    </div>
</template>
<script>
export default{
    name:"mMenu"
}
</script>
<script setup>
import menuItem from './menuItem.vue'
const props = defineProps({
    options:{
       type:Array,
       default:()=>[] 
    }
})
// console.log(props.options);
</script>

<style lang="scss" scoped>
.mzl-menu-default-box{
    width:100%;
    height:60px;
    background: #20222a;
    color:#fff
}
</style>