<template>
  <div :class="[`mzl-radio-${size}`,customClass]">
    <label v-for="(item,index) in options" :key="index" :class="[{'mzl-radio-active':modelVal == item[valueFiled]},item.disabled?modelVal == item[valueFiled]?'mzl-radio-active-disabled':'mzl-radio-disabled':'']" @click="change(item,index)" :style="{'display':inline?'inline-block':'table','margin-bottom':inline?'0':size=='small'?'8px':size=='mini'?'6px':'10px'}">
      <span class="mzl-radio-round" :style="{'border-color':customColor==''?'':item.disabled?'':modelVal != item[valueFiled]?'':customColor,'background':customColor==''?'':item.disabled?'':modelVal != item[valueFiled]?'':customColor}"></span>
      <span :style="{'color':customColor==''?'':item.disabled?'':modelVal != item[valueFiled]?'':customColor}">{{item[labelFiled]}}</span>
    </label>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default{
  name:"mRadio"
}
</script>
<script setup>
const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue:String|Number,
  size:{
    type:String,
    default:'default'
  },
  options:{
    type:Array,
    default:()=>{
      return []
    }
  },
  labelFiled:{
    type:String,
    default:"label"
  },
  valueFiled:{
    type:String,
    default:"value"
  },
  customColor:String,
  customClass:String,
  inline:{
    type:Boolean,
    default:true
  },
})
const modelVal = ref(props.modelValue||'')
const change = (item,index)=>{
  if(!item.disabled){
    modelVal.value = item[props.valueFiled]
    emit('update:modelValue',item[props.valueFiled])
    emit('change',{"value":item[props.valueFiled],"index":index})
  }
  
}
const radioIndex = ref(0)
</script>

<style lang="scss" scoped>
.mzl-radio-default{
  width: auto;
  height: auto;
  overflow: hidden;
  label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right:15px;
    user-select: none;
    span{
      float: left;
      color:#505050;
      font-size: 14px;
    }
    span.mzl-radio-round{
      width: 14px;
      height: 14px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:3px 8px 0 0 ;
      background:#fff ;
      transition: transform .15s ease-in;
      box-sizing: border-box;
      &::after{
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2.5px 0 0 -2.5px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-disabled{
     width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: no-drop;
    font-size: 14px;
    margin-right:15px;
    span{
      float: left;
      color:#b4b6b9
    }
    span.mzl-radio-round{
      width: 14px;
      height: 14px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:3px 8px 0 0 ;
      background:#ebebeb ;
      transition: transform .15s ease-in;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #999999;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-active{
    span{
      float: left;
      color:#0e80eb
    }
    span.mzl-radio-round{
      width: 14px;
      height: 14px;
      display: inline-block;
      position: relative;
      border:1px solid #0e80eb;
      border-radius: 50%;
      margin:3px 8px 0 0 ;
      background:#0e80eb ;
      transition: transform .15s ease-in;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-active-disabled{
    cursor: no-drop;
    span{
      float: left;
      color:#b4b6b9
    }
    span.mzl-radio-round{
      width: 14px;
      height: 14px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:3px 8px 0 0 ;
      background:#ebebeb ;
      transition: transform .15s ease-in;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: rgb(153, 153, 153);
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }
  }
}
// small
.mzl-radio-small{
  width: auto;
  height: auto;
  overflow: hidden;
  label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 13px;
    margin-right:13px;
    user-select: none;
    span{
      float: left;
      color:#505050;
      font-size: 13px;
    }
    span.mzl-radio-round{
      width: 12px;
      height: 12px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:4px 7px 0 0 ;
      background:#fff ;
      transition: transform .15s ease-in;
      box-sizing: border-box;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-disabled{
    display: inline-block;
    line-height: 20px;
    cursor: no-drop;
    font-size: 13px;
    margin-right:13px;
    span{
      float: left;
      color:#b4b6b9
    }
    span.mzl-radio-round{
      width: 12px;
      height: 12px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:4px 7px 0 0 ;
      background:#ebebeb ;
      transition: transform .15s ease-in;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #999999;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-active{
    span{
      float: left;
      color:#0e80eb
    }
    span.mzl-radio-round{
      width: 12px;
      height: 12px;
      display: inline-block;
      position: relative;
      border:1px solid #0e80eb;
      border-radius: 50%;
      margin:4px 7px 0 0 ;
      background:#0e80eb ;
      transition: transform .15s ease-in;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-active-disabled{
    cursor: no-drop;
    span{
      float: left;
      color:#b4b6b9
    }
    span.mzl-radio-round{
      width: 12px;
      height: 12px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:4px 7px 0 0 ;
      background:#ebebeb ;
      transition: transform .15s ease-in;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: rgb(153, 153, 153);
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }
  }
}
// mini
.mzl-radio-mini{
  width: auto;
  height: auto;
  overflow: hidden;
  label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 12px;
    margin-right:12px;
    user-select: none;
    span{
      float: left;
      color:#505050;
      font-size: 12px;
    }
    span.mzl-radio-round{
      width: 11px;
      height: 11px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:5px 6px 0 0 ;
      background:#fff ;
      transition: transform .15s ease-in;
      box-sizing: border-box;
      &::after{
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-1.5px 0 0 -1.5px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-disabled{
    display: inline-block;
    line-height: 20px;
    cursor: no-drop;
    font-size: 12px;
    margin-right:12px;
    span{
      float: left;
      color:#b4b6b9
    }
    span.mzl-radio-round{
      width: 11px;
      height: 11px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:5px 6px 0 0 ;
      background:#ebebeb ;
      transition: transform .15s ease-in;
      &::after{
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #999999;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-1.5px 0 0 -1.5px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-active{
    span{
      float: left;
      color:#0e80eb
    }
    span.mzl-radio-round{
      width: 11px;
      height: 11px;
      display: inline-block;
      position: relative;
      border:1px solid #0e80eb;
      border-radius: 50%;
      margin:5px 6px 0 0 ;
      background:#0e80eb ;
      transition: transform .15s ease-in;
      &::after{
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-1.5px 0 0 -1.5px;
        transition: transform .15s ease-in;
      }
    }
  }
  label.mzl-radio-active-disabled{
    cursor: no-drop;
    span{
      float: left;
      color:#b4b6b9
    }
    span.mzl-radio-round{
      width: 11px;
      height: 11px;
      display: inline-block;
      position: relative;
      border:1px solid #b9b9b9;
      border-radius: 50%;
      margin:5px 6px 0 0 ;
      background:#ebebeb ;
      transition: transform .15s ease-in;
      &::after{
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: rgb(153, 153, 153);
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-1.5px 0 0 -1.5px;
        transition: transform .15s ease-in;
      }
    }
  }
}
</style>