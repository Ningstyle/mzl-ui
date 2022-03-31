<template>
  <div :class="['mzl-date-box','mzl-date-default']" v-click-outside>
    <div class="mzl-date-inner-box">
      <m-input v-model="dateVal" leftIcon="m-icon-calendar" @clear="clear" :size="size" :clearable="clearable" readonly :placeholder="placeholders" :disabled="disabled" :focusColor="customActiveColor" :form="form"></m-input>
      <transition name="slide-fade">
        <div :class="['mzl-date-option',`mzl-date-option-${size}`,customClass]" v-if="show">
          <div class="mzl-date-fipx-box">
            <!-- 年月日 -->
            <div class="mzl-date-date-box">
              <div :class="['mzl-date-header',`mzl-date-header-${size}`]">
                <div class="mzl-date-btn-left">
                  <span v-if="monthShow"><i class="m-icon-arrow-double-left" @click="onlyYearPrev"></i></span>
                  <span v-if="!dateShow&&!monthShow"><i class="m-icon-arrow-double-left" @click="getPrevYear"></i></span>
                  <span v-if="dateShow"><i class="m-icon-arrow-double-left" @click="prevYear"></i></span>
                  <span v-if="dateShow&&type=='date'" class="mzl-i-rotate"><i class="m-icon-arrow-right" @click="prevMonth"></i></span>
                </div>
                <div class="mzl-date-btn-center">
                  <span class="chooseYear" @click="chooseYear" v-show="dateShow&&type=='date'">{{selDate.year}} 年 </span>
                  <span class="chooseMonth" @click="chooseMonth" v-show="dateShow&&type=='date'"> {{selDate.month}} 月</span>
                  <span class="chooseMonth" v-show="monthShow" @click="showYaer">{{selDate.year}} 年 </span>
                  <span v-show="!dateShow&&!monthShow||type=='year'">{{yearList[0]+' 年 - '+yearList[yearList.length-1]+' 年'}}</span>
                </div>
                <div class="mzl-date-btn-right">
                  <span v-if="dateShow&&type=='date'"><i class="m-icon-arrow-right" @click="nextMonth"></i></span>
                  <span v-if="dateShow"><i class="m-icon-arrow-double-right" @click="nextYear"></i></span>
                  <span v-if="!dateShow&&!monthShow"><i class="m-icon-arrow-double-right" @click="getNextYear"></i></span>
                  <span v-if="monthShow"><i class="m-icon-arrow-double-right" @click="onlyYearNext"></i></span>
                </div>
              </div>
              <div :class="['mzl-date-content-box',`mzl-date-content-box-${size}`]" v-show="dateShow&&type=='date'">
                <div class="mzl-date-year-month-box">
                  <table>
                    <tbody>
                      <tr>
                        <th><span>一</span></th>
                        <th><span>二</span></th>
                        <th><span>三</span></th>
                        <th><span>四</span></th>
                        <th><span>五</span></th>
                        <th><span>六</span></th>
                        <th><span>日</span></th>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index<7" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                            </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=7&&index<14" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=14&&index<21" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=21&&index<28" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=28&&index<35" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=35&&index<42" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="mzl-today-box" v-if="showToday&&type=='date'"><span @click="today" class="mzl-today-span">今天</span></div>
              </div>
              <!-- year -->
              <div :class="['mzl-choose-year-box',`mzl-choose-year-box-${size}`]" v-show="!dateShow&&!monthShow
              ||type=='year'">
                <div v-for="(item,index) in yearList" :key="index">
                  <span :class="[{'active':selDate.year==item},'mzl-chooseYear-span']" @click="dateYearSel(item)">{{item}}</span>
                </div>
              </div>
              <!-- months -->
              <div :class="['mzl-choose-month-box',`mzl-choose-month-box-${size}`]" v-show="monthShow">
                <div v-for="(item,index) in monthList" :key="index">
                  <span :class="[{'active':selDate.month==item.m1},'mzl-chooseMonth-span']" @click="dateMonthSel(item)">{{item.m}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
		  </transition>
    </div>
  </div>
</template>
<script>
export default{
  name:"mDate"
}
</script>
<script setup>
import { ref,onMounted } from 'vue'
import mInput from '../input';
const emit = defineEmits(['update:modelValue','clear','open','close','change'])
const props = defineProps({
  modelValue:String|Number,
  size:{
    type:String,
    default:"default"
  },
  disabled:Boolean,
  placeholder:String,
  format:{
    type:String,
    default:"yyyy/MM/dd"
  },
  clearable:Boolean,
  type:{
    type:String,
    default:"date"
  },
  showToday:{
    type:Boolean,
    default:true
  },
  startDate:{
    type:String,
    default:'1000/01/01'
  },
  endDate:{
    type:String,
    default:'9999/12/31'
  },
  customClass:String,
  customActiveColor:{
    type:String,
    default:'#0e80eb'
  },
  form:String
})
Date.prototype.format = function(fmt) { 
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
const disStartDate = ref(new Date(props.startDate+' 00:00:00').getTime())
const disEndDate = ref(new Date(props.endDate+' 00:00:00').getTime())
const dateVal = ref(props.modelValue)
const show = ref(false)
const daysList = ref([])
const placeholders = ref(props.placeholder||"")
const dateShow = ref(true)
const yearList = ref([])
const monthList = ref([])
const monthShow = ref(false)
const color = ref(props.customActiveColor)
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}


const dateObj = (function(){
  var _date = dateVal.value==""?new Date():new Date(dateVal.value);
  return {
    getDate : function(){
      return _date
    },
    setDate : function(date) {
      _date = date;
    }
  };
})();
const getDays = (year,month,start)=>{
  daysList.value = []
  for(let i=start;i<=42;i++){
    daysList.value.push(
      {
        dates:new Date(year, month, i).format(props.format),
        time:new Date(year, month, i).getTime(),
        year:new Date(year, month, i).getFullYear(),
        month:new Date(year, month, i).getMonth()+1,
        day:new Date(year, month, i).getDate(),
      })
  }
}

const selDate = ref({
  date:dateObj.getDate().format(props.format),
  year:dateObj.getDate().getFullYear(),
  month:dateObj.getDate().getMonth()+1,
  day:dateObj.getDate().getDate()
})
const getWeek = (date) => {
  return new Date(date).getDay()==0?7:new Date(date).getDay()
}
const setDate = () =>{
  selDate.value.date = dateObj.getDate().format(props.format)
  selDate.value.year = dateObj.getDate().getFullYear()
  selDate.value.month = dateObj.getDate().getMonth()+1
}
// 上一月
const prevMonth = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
  
}
// 下一月
const nextMonth = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
  
}
// 上一年
const prevYear = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear()-1,dateObj.getDate().getMonth(), 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
}
// 下一年
const nextYear = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear()+1,dateObj.getDate().getMonth(), 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
}
const focus = (e) => {
  show.value = true
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), 1))
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(dateObj.getDate().toLocaleDateString()))
  emit('open')
}
const blur = (e) => {
  show.value = false
  if(props.type=='date'){
    dateShow.value = true
    monthShow.value = false
  }
  emit('close')
}
const clear = () =>{
  dateVal.value = ""
  emit('update:modelValue',dateVal.value)
  emit('clear')
}
const vClickOutside = {
   beforeMount(el){
    let handler = (e) =>{
      if(!props.disabled){
        if(props.type=='year'){
          if(el.contains(e.target)&&e.target.className.indexOf("choosDateSpan")==-1&&e.target.className.indexOf('clearable-icon')==-1&&e.target.className.indexOf('mzl-chooseYear-span')==-1){
            if(!show.value){
              focus()
            }
          }else{
            if(show.value){
              blur()
            }
          }
        }else if(props.type=='month'){
          if(el.contains(e.target)&&e.target.className.indexOf("choosDateSpan")==-1&&e.target.className.indexOf('clearable-icon')==-1&&e.target.className.indexOf('mzl-chooseMonth-span')==-1){
            if(!show.value){
              focus()
            }
          }else{
            if(show.value){
              blur()
            }
          }
        }else{
          if(el.contains(e.target)&&e.target.className.indexOf("choosDateSpan")==-1&&e.target.className.indexOf('clearable-icon')==-1&&e.target.className.indexOf('mzl-today-span')==-1){
            if(!show.value){
              focus()
            }
          }else if(e.target.className.indexOf('date-span-disabled')==-1){
            // console.log(e.target.className);
            if(show.value){
              blur()
            }
          }
        }
        
      }
    }
    el.handler = handler;
    if(typeof document !== 'undefined'){
      document.addEventListener('click',handler)
    }
  },
  unmounted(el){
    if(typeof document !== 'undefined'){
      document.removeEventListener('click',el.handler)
    }
  }
}
const selectDate = (item) => {
  if(item.time>=disStartDate.value&&item.time<=disEndDate.value){
    if(item.month>selDate.value.month){
      nextMonth()
    }else if(item.month<selDate.value.month){
      prevMonth()
    }
    dateVal.value = item.dates
    selDate.value.date = dateVal.value
    selDate.value.day = item.day
    emit('update:modelValue',dateVal.value)
    emit('change',dateVal.value)
    blur()
  }
  
}
const getYearList = (startYear) => {
  let list = []
  for(let i=0;i<10;i++){
    list.push((new Date(selDate.value.year)-parseInt(new Date(selDate.value.year)%10))+i)
  }
  return list
}
// 年份选择上一年
const getPrevYear = () => {
  selDate.value.year = selDate.value.year - 10
  yearList.value = getYearList(selDate.value.year)
}
// 年份选择下一年
const getNextYear = () => {
  selDate.value.year = selDate.value.year + 10
  yearList.value = getYearList(selDate.value.year)
}
// 选择年
const chooseYear = () => {
  dateShow.value = false
  yearList.value = getYearList(selDate.value.year)
}
// 选择月
const chooseMonth = () =>{
  dateShow.value = false
  monthShow.value = true
}
const dateYearSel = (item) => {
  if(props.type=='date'){
    monthShow.value = true
    selDate.value.year = item
    dateObj.setDate(new Date(selDate.value.year,selDate.value.month-1, 1))
    setDate()
    getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(dateObj.getDate().toLocaleDateString()))
  }else if(props.type=='year'){
    dateVal.value = item
    selDate.value.year = item
    monthShow.value = false
    dateShow.value = false
    emit('update:modelValue',dateVal.value)
    emit('change',dateVal.value)
    blur()
  }else{
    monthShow.value = true
    dateShow.value = false
    selDate.value.year = item
  }
  
}
const dateMonthSel = (item) => {
  if(props.type=='month'){
    dateVal.value = new Date(selDate.value.year+'-'+item.m1).format('yyyy-MM')
    selDate.value.month = item.m1
    emit('update:modelValue',dateVal.value)
    emit('change',dateVal.value)
    blur()
  }else{
    monthShow.value = false
    dateShow.value = true
    selDate.value.month = item.m1-1
    dateObj.setDate(new Date(selDate.value.year,selDate.value.month, 1))
    setDate()
    getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(dateObj.getDate().toLocaleDateString()))
  }
  

}
const onlyYearPrev =() =>{
  selDate.value.year = selDate.value.year-1
}
const onlyYearNext =() =>{
  selDate.value.year = selDate.value.year+1
}
const showYaer = () =>{
  dateShow.value = false
  monthShow.value = false
  yearList.value = getYearList(selDate.value.year)
}
const today = () =>{
  var date = new Date();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(new Date(date.getFullYear(), date.getMonth(), 1)))
  dateVal.value = dateObj.getDate().format(props.format)
  emit('update:modelValue',dateVal.value)
  emit('change',dateVal.value)
  blur()
}
onMounted(()=>{
  monthList.value = []
  for(let i=0;i<12;i++){
    monthList.value.push({m:i+1+'月',m1:i+1})
  }
  if(props.type=='year'){
    dateShow.value = false
    monthShow.value = false
    yearList.value = getYearList(selDate.value.year)
  }
  if(props.type=='month'){
    dateShow.value = false
    monthShow.value = true
  }
})
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.mzl-date-box,.mzl-date-default{
  width: 200px;
  display: inline-block;
  .mzl-date-inner-box{
    width: 100%;
		height: auto;
		position: relative;
    .mzl-date-option,.mzl-date-option-default{
      width: 160%;
		  height: auto;
      position: absolute;
      bottom:0;
      border-radius: 4px;
      box-sizing: border-box;
      background-color: #fff;
      top:35px;
      z-index: 999999;
      .mzl-date-fipx-box{
        width: 100%;
        height: auto;
        position: relative;
        margin-top:13px;
        padding:4px 0px;
        box-sizing: border-box;
        background-color: #FFFFFF;
        border: 1px solid #dcdfe6f6;
        border-radius: 3px;
        transition: all .1s ease;
        box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
        z-index: 999999;
        &:before{
          box-sizing: content-box;
          width: 0px;
          height: 0px;
          position: absolute;
          top: -15.7px;
          right: 65.27%;
          padding:0;
          border-bottom:8px solid #FFFFFF;
          border-top:8px solid transparent;
          border-left:8px solid transparent;
          border-right:8px solid transparent;
          display: block;
          content:'';
          z-index: 12;
        }
        &:after{
          box-sizing: content-box;
          width: 0px;
          height: 0px;
          position: absolute;
          top: -18px;
          right:65%;
          padding:0;
          border-bottom:9px solid #dcdfe6f6;
          border-top:9px solid transparent;
          border-left:9px solid transparent;
          border-right:9px solid transparent;
          display: block;
          content:'';
          z-index:10
        }
        .mzl-date-date-box{
          width: 100%;
          height:auto;
          overflow: hidden;
        }
      }
    }
    .mzl-date-option-small{
      width: 140%;
      top:31px;
      .mzl-date-fipx-box{
        width: 100%;
        margin-top:13px;
        padding:4px 0px;
      }
    }
    .mzl-date-option-mini{
      width: 120%;
      top:31px;
      .mzl-date-fipx-box{
        width: 100%;
        margin-top:12px;
        padding:4px 0px;
        &:before{
          top: -15.7px;
          right: 65.37%;
        }
        &:after{
          top: -18px;
          right:65%;
        }
      }
    }
  }
  .mzl-date-header,.mzl-date-header-default{
    width: 100%;
    height:38px;
    border-bottom: 1px solid #f0f0f0;
    padding:0 10px;
    display: flex;
    box-sizing: border-box;
    line-height: 38px;
    font-size:14px;
    .mzl-date-btn-left{
      width: 20%;
      float: left;
      text-align: left;
      span{
        color:#353538;
        cursor: pointer;
        font-weight: 550;
        &:hover{
          color:v-bind(color);
          font-weight: 600;
        }
      }
      span.mzl-i-rotate{
        i{
          transform: rotateY(180deg);
        }
        
      }
    }
    .mzl-date-btn-center{
      width: 60%;
      float: left;
      text-align: center;
      color:#505050;
      font-size: 14px;
      user-select: none;
      .chooseYear{
        cursor: pointer;
        &:hover{
          color:v-bind(color)
        }
      }
      .chooseMonth{
        cursor: pointer;
        &:hover{
          color:v-bind(color)
        }
      }
    }
    .mzl-date-btn-right{
      width: 20%;
      float: left;
      text-align: right;
      span{
        color:#353538;
        cursor: pointer;
        font-weight: 550;
        &:hover{
          color:v-bind(color);
          font-weight: 600;
        }
      }
    }
  }
  .mzl-date-header-small{
    height:34px;
    padding:0 10px;
    line-height: 34px;
    font-size:13px;
    .mzl-date-btn-left{
      width: 20%;
      span{
        font-weight: 550;
        i{
          font-size: 13px;
        }
        &:hover{
          color:v-bind(color);
          font-weight: 600;
        }
      }
    }
    .mzl-date-btn-center{
      width: 60%;
      font-size: 13px;
    }
    .mzl-date-btn-right{
      width: 20%;
      span{
        font-weight: 550;
        i{
          font-size: 13px;
        }
        &:hover{
          font-weight: 600;
        }
      }
    }
  }
  .mzl-date-header-mini{
    height:28px;
    padding:0 10px;
    line-height: 28px;
    font-size:12px;
    .mzl-date-btn-left{
      width: 20%;
      span{
        font-weight: 550;
        i{
          font-size: 12px;
        }
        &:hover{
          color:v-bind(color);
          font-weight: 600;
        }
      }
    }
    .mzl-date-btn-center{
      width: 60%;
      font-size: 12px;
    }
    .mzl-date-btn-right{
      width: 20%;
      span{
        font-weight: 550;
        i{
          font-size: 12px;
        }
        &:hover{
          font-weight: 600;
        }
      }
    }
  }
  .mzl-date-content-box,.mzl-date-content-box-default{
    width: 100%;
    height:auto;
    overflow: hidden;
    padding:0 10px;
    box-sizing: border-box;
    .mzl-date-year-month-box{
      width:100%;
      height:auto;
      overflow: hidden;
      padding-bottom: 10px;
      padding-top:10px;
      table{
        width:100%;
        box-sizing: border-box;
        border-spacing:0;
        tbody{
          tr{
            height:28px;
            font-size: 13px;
            user-select: none;
            td{
              padding:4px 4px;
              box-sizing: border-box;
              text-align: left;
              line-height: 30px;
              color: #505050;
              font-weight: 500;
              border-right:0;
              border-top:0;
              text-align: center;
              cursor: pointer;
              span{
                color:#505050;
                width:25px;
                height:25px;
                box-sizing: border-box;
                display: inline-block;
                line-height: 25px;
                border-radius: 2px;
                transition: all .2s ease;
                &:hover{
                  background: #f5f5f5;
                  color:v-bind(color);
                  font-weight: 600;
                }
              }
              span.active{
                background: v-bind(color);
                color:#fff;
                font-weight: 600;
              }
              span.prev-month,span.next-month{
                color:#cecbcb
              }
              span.date-span-disabled{
                width: 100%;
                background: #f5f5f5;
                color:#cecbcb;
                cursor: no-drop;
                padding:0 4px;
                &:hover{
                  color:#cecbcb;
                  font-weight: normal;
                }
              }
            }
            td.date-span-disabled{
              padding:4px 0
            }
            th{
              padding:0;
              box-sizing: border-box;
              span{
                color:#505050;
                font-weight: normal;
              }
            }
          }
        }
        
      }
    }
    .mzl-today-box{
      width: 100%;
      height:30px;
      text-align: center;
      line-height: 30px;
      font-size:14px;
      border-top: 1px solid #f0f0f0;
      span{
        color:v-bind(color);
        cursor: pointer;
      }
    }
  }
  .mzl-date-content-box-small{
    width: 100%;
    padding:0 10px;
    .mzl-date-year-month-box{
      padding-bottom: 10px;
      padding-top:10px;
      table{
        width:100%;
        tbody{
          tr{
            height:25px;
            font-size: 13px;
            td{
              padding:2px 2px;
              line-height: 27px;
              font-weight: 500;
              cursor: pointer;
              span{
                color:#505050;
                width:22px;
                height:22px;
                line-height: 22px;
                border-radius: 2px;
                font-size: 13px;
                &:hover{
                  font-weight: 550;
                }
              }
              span.active{
                font-weight: 550;
              }
              span.prev-month,span.next-month{
                color:#cecbcb
              }
              span.date-span-disabled{
                width: 100%;
                background: #f5f5f5;
                color:#cecbcb;
                cursor: no-drop;
                padding:0 2px;
                &:hover{
                  color:#cecbcb;
                  font-weight: normal;
                }
              }
            }
            td.date-span-disabled{
              padding:2px 0
            }
            th{
              padding:0;
              box-sizing: border-box;
              span{
                color:#505050;
                font-weight: normal;
              }
            }
          }
        }
        
      }
    }
  }
  .mzl-date-content-box-mini{
    width: 100%;
    padding:0 8px;
    .mzl-date-year-month-box{
      padding-bottom: 10px;
      padding-top:6px;
      table{
        width:100%;
        tbody{
          tr{
            height:22px;
            font-size: 12px;
            td{
              padding:2px 2px;
              line-height: 24px;
              font-weight: 500;
              cursor: pointer;
              span{
                color:#505050;
                width:20px;
                height:20px;
                line-height: 20px;
                border-radius: 2px;
                font-size: 12px;
                &:hover{
                  font-weight: 550;
                }
              }
              span.active{
                font-weight: 550;
              }
              span.prev-month,span.next-month{
                color:#cecbcb
              }
              span.date-span-disabled{
                width: 100%;
                background: #f5f5f5;
                color:#cecbcb;
                cursor: no-drop;
                padding:0 2px;
                &:hover{
                  color:#cecbcb;
                  font-weight: normal;
                }
              }
            }
            td.date-span-disabled{
              padding:2px 0
            }
            th{
              padding:0;
              box-sizing: border-box;
              span{
                color:#505050;
                font-weight: normal;
              }
            }
          }
        }
        
      }
    }
  }

  .mzl-choose-year-box,.mzl-choose-year-box-default{
    width:100%;
    height:auto;
    overflow: hidden;
    padding:20px 10px;
    box-sizing: border-box;
    transition: all .2s ease;
    div{
      width:25%;
      height:60px;
      display: inline-block;
      font-size:14px;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
      user-select: none;
      transition: all .15s ease;
      color:#505050;
      span{
        width:45px;
        height:25px;
        border-radius: 2px;
        display: inline-block;
        line-height:25px;
        &:hover{
          background: #f5f5f5;
          color:v-bind(color);
        }
      }
      span.active{
        background: v-bind(color);
        color:#fff;
      }
    }
  }
  .mzl-choose-year-box-small{
    width:100%;
    height:auto;
    overflow: hidden;
    padding:18px 8px;
    box-sizing: border-box;
    transition: all .2s ease;
    div{
      width:25%;
      height:50px;
      font-size:13px;
      line-height: 50px;
      span{
        width:42px;
        height:22px;
        border-radius: 2px;
        display: inline-block;
        line-height:22px;
      }
    }
  }
  .mzl-choose-year-box-mini{
    width:100%;
    height:auto;
    overflow: hidden;
    padding:16px 6px;
    box-sizing: border-box;
    transition: all .2s ease;
    div{
      width:25%;
      height:45px;
      font-size:12px;
      line-height: 45px;
      span{
        width:40px;
        height:20px;
        border-radius: 2px;
        display: inline-block;
        line-height:20px;
      }
    }
  }
  .mzl-choose-month-box,.mzl-choose-month-box-default{
     width:100%;
    height:auto;
    overflow: hidden;
    padding:20px 10px;
    box-sizing: border-box;
    transition: all .2s ease;
    div{
      width:25%;
      height:60px;
      display: inline-block;
      font-size:14px;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
      user-select: none;
      color:#505050;
      span{
        width:45px;
        height:25px;
        border-radius: 2px;
        display: inline-block;
        line-height:25px;
        &:hover{
          background: #f5f5f5;
          color:v-bind(color);
        }
      }
      span.active{
        background: v-bind(color);
        color:#fff;
      }
    }
  }
  .mzl-choose-month-box-small{
    padding:18px 8px;
    div{
      height:55px;
      font-size:13px;
      line-height: 55px;
      span{
        width:42px;
        height:22px;
        border-radius: 2px;
        line-height:22px;
      }
    }
  }
  .mzl-choose-month-box-mini{
    padding:16px 6px;
    div{
      height:50px;
      font-size:12px;
      line-height: 50px;
      span{
        width:40px;
        height:20px;
        border-radius: 2px;
        line-height:20px;
      }
    }
  }
}
</style>