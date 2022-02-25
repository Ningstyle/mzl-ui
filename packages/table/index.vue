<template>
  <div :class="[`mzl-table-${size}`,customClass]">
    <table>
      <thead v-if="showHeader">
        <tr>
          <th v-for="(x,n) in options.fileds" :key="n" :style="[headStyle,{'text-align':x.align}]">
            <slot :name="'head-'+x.field" :scope="x" v-if="$slot['head-'+x.field]"></slot>
            <div v-else>{{x.title}}</div>
          </th>
        </tr>  
      </thead>
      <tbody>
        <tr v-for="(v,i) in options.datas" :key="i">
          <td v-for="(m,j) in options.fileds" :key="j" :style="[rowStyle,{width:options.fileds[j].width?(options.fileds[j].width):'','text-align':options.fileds[j].align}]">
            <slot :name="options.fileds[j].field" :scope="{rowIndex:i,cellIndex:j,row:v}" v-if="$slot[options.fileds[j].field]"></slot>
            <div v-else>{{options.datas[i][options.fileds[j].field]}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default{
  name:'mTable'
}
</script>
<script setup>
import { ref, useSlots } from 'vue'
const props = defineProps({
  options:{
    type:Object,
    default:()=>{
      return {
        fileds:[],
        datas:[],
      }
    }
  },
  size:{
    type:String,
    default:"default"
  },
  showHeader:{
    type:Boolean,
    default:true
  },
  headStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  rowStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  customClass:String
})
const $slot = useSlots()
</script>

<style lang="scss" scoped>
.mzl-table-default{
  width:100%;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    border-radius: 2px;
    // border:1px solid #f0f0f0;
    box-sizing: border-box;
    border-spacing:0;
    thead{
      th{
        padding:14px 12px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-weight: 550;
        font-size:14px;
        border:1px solid #f0f0f0;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #f0f0f0;
      }
    }
    tbody{
      tr{
        td{
          padding:13.5px 12px;
          box-sizing: border-box;
          text-align: left;
          line-height: 20px;
          color: #505050;
          font-weight: 500;
          font-size:14px;
          border:1px solid #f0f0f0;
          border-right:0;
          border-top:0;
        }
        td:last-child{
          border-bottom:1px solid #f0f0f0;
          border-right:1px solid #f0f0f0;
          
        }
        &:hover{
          background:rgba(240,240,240,.2)
        }
      }
      tr:last-child{
        td{
          
        }
        
      }
    }
  }
}
.mzl-table-small{
  width:100%;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    border-radius: 2px;
    // border:1px solid #f0f0f0;
    box-sizing: border-box;
    border-spacing:0;
    thead{
      th{
        padding:10px 10px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-weight: 550;
        font-size:14px;
        border:1px solid #f0f0f0;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #f0f0f0;
      }
    }
    tbody{
      tr{
        td{
          padding:9.5px 10px;
          box-sizing: border-box;
          text-align: left;
          line-height: 20px;
          color: #505050;
          font-weight: 500;
          font-size:14px;
          border:1px solid #f0f0f0;
          border-right:0;
          border-top:0;
        }
        td:last-child{
          border-bottom:1px solid #f0f0f0;
          border-right:1px solid #f0f0f0;
        }
        &:hover{
          background:rgba(240,240,240,.2)
        }
      }
      tr:last-child{
        td{
          // border:1px solid #f0f0f0;
        }
        
      }
    }
  }
}
.mzl-table-mini{
  width:100%;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    border-radius: 2px;
    // border:1px solid #f0f0f0;
    box-sizing: border-box;
    border-spacing:0;
    thead{
      th{
        padding:8px 10px;
        box-sizing: border-box;
        text-align: left;
        line-height: 18px;
        color: #646468;
        font-weight: 550;
        font-size:12px;
        border:1px solid #f0f0f0;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #f0f0f0;
      }
    }
    tbody{
      tr{
        td{
          padding:7.5px 10px;
          box-sizing: border-box;
          text-align: left;
          line-height: 18px;
          color: #505050;
          font-weight: 500;
          font-size:12px;
          border:1px solid #f0f0f0;
          border-right:0;
          border-top:0;
        }
        td:last-child{
          border-bottom:1px solid #f0f0f0;
          border-right:1px solid #f0f0f0;
        }
        &:hover{
          background:rgba(240,240,240,.2)
        }
      }
      tr:last-child{
        td{
          // border-bottom:0;
        }
        
      }
    }
  }
}
table{
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}
</style>