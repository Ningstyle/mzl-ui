<template>
  <div :class="['mzl-optfile-default',customClass]">
    <input type="file" :accept="accept" :multiple="multiple" @change="testchange" hidden ref="refInp">
    <div class="mzl-preview-img-box">
      <transition-group name="list-img">
        <template  v-if="targetType=='box'&&imgListShow&&!showFileList">
          <div class="mzl-preview-img-img" v-for="(item,index) in File" :key="index">
            <div class="mzl-previre-img-actions">
              <img :src="item.preImgUrl" alt="">
              <div class="customArea">
                <slot v-if="$slot['defalut']"></slot>
                <i class="customIcon m-icon-ashbin" v-else @click="deleteImg(index)"></i>
              </div>
            </div>
          </div>
        </template>
      </transition-group>
      <m-button :type="type" :leftIcon="icon" @click="changeFile" v-if="targetType=='btn'">{{label}}</m-button>
      <div :class="['mzl-optfie-area',{'mzl-optfie-area-big':size=='big','mzl-opfile-area-active':activeFile}]" v-if="targetType=='box'" ref="refDiv">
        <div class="mzl-optfile-area-text" @click="changeFile">
          <div class="mzl-optfile-text-pos">
            <i :class="icon" class="icon-file"></i>
            <p v-if="label!=''">{{lableText}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <img :src="imgSrc" alt=""> -->
    <div class="mzl-optfile-filelist" v-if="FileList.length>0&&showFileList">
      <ul>
        <transition-group name="list">
          <li v-for="(item,index) in FileList" :key="index">
            <div>
              <i class="file-icon m-icon-file"></i>
              <span>{{item.name}}</span>
              <i class="delete m-icon-ashbin" @click="deleteImg(index)"></i>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, useSlots } from 'vue'
export default{
  name:"mOptfile"
}
</script>
<script setup>
import mButton from '../button/index'
const emit = defineEmits(['change','update:fileList','beforeChange'])
const props = defineProps({
  accept:String,
  multiple:Boolean,
  type:String,
  label:{
    type:String,
    default:""
  },
  size:{
    type:String,
    default:""
  },
  targetType:{
    type:String,
    default:"btn"
  },
  icon:{
    type:String,
    default:'m-icon-add-bold'
  },
  fileList:{
    type:Array,
    default:()=>{
      return []
    }
  },
  drop:Boolean,
  customClass:String,
  showFileList:Boolean,
  imgListShow:Boolean
})
const $slot = useSlots()
const windowURL = typeof window !== 'undefined'?window.URL || window.webkitURL:'';
const File = reactive([])
const FileList = reactive(props.fileList||[])
const imgSrc = ref('')
const lableText = ref(props.label)
const activeFile = ref(false)
const refInp = ref(null)
const refDiv = ref(null)
const changeFile = () =>{
  emit('beforeChange')
  console.log(refInp);
  refInp.value.click()
}
const testchange = (e) =>{
  File.unshift(...e.target.files)
  FileList.unshift(...e.target.files)
  File.forEach((item,index)=>{
    item.preImgUrl = windowURL.createObjectURL(item);
  })
  emit('change',File)
  emit('update:fileList',File)
}
const deleteImg = (index) =>{
  File.splice(index,1)
  FileList.splice(index,1)
  emit('update:fileList',File)
}
onMounted(()=>{
  if(props.drop&&props.targetType=='box'){
    let dropArea = refDiv.value
    dropArea.addEventListener('drop',(e)=>{
      e.stopPropagation()
      e.preventDefault()
      File.unshift(...e.dataTransfer.files)
      FileList.unshift(...e.dataTransfer.files)
      File.forEach((item,index)=>{
        item.preImgUrl = windowURL.createObjectURL(item);
      })
      emit('change',File)
      emit('update:fileList',File)
      lableText.value = props.label
      activeFile.value = false
    }, false)
    dropArea.addEventListener('dragleave', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = false
      lableText.value = props.label
    })
    dropArea.addEventListener('dragenter', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = true
      lableText.value = "松开鼠标完成"
      emit('beforeChange')
    })
    dropArea.addEventListener('dragover', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = true
      lableText.value = "松开鼠标完成"
    })
  }
})
</script>

<style lang="scss" scoped>
.mzl-optfile-default{
  width: 100%;
  height: auto;
  overflow: hidden;
  .mzl-preview-img-box{
    width:auto;
    height:auto;
    overflow: hidden;
    .mzl-preview-img-img{
      width:130px;
      height:130px;
      float: left;
      margin:0 4px;
      border:1px solid #d9d9d9;
      border-radius: 3px;
      padding:10px;
      box-sizing: border-box;
      overflow: hidden;
      margin-bottom:10px;
      .mzl-previre-img-actions{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img{
          width: 100%;
          object-fit: scale-down;
        }
        .customArea{
         width: 100%;
         height: 100%;
         overflow: hidden;
         position: absolute;
         top:0;
         left:0;
         transition: all .4s;
         color:#fff;
         cursor: pointer;
         display: flex;
         justify-content: center;
         align-items: center;
         display: none;
         i{
           font-size:18px;
         }
         &:hover{
           background:rgba(0,0,0,.6)
         }
        }
        &:hover{
          .customArea{
            display: flex;
          }
        }
      }
    }
    .mzl-optfie-area{
      width:130px;
      height: 130px;
      border:1px dashed #d9d9d9;
      border-radius: 2px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all .4s;
      float: left;
      &:hover{
        transition: all .4s;
        border-color:#0e80eb ;
      }
      .mzl-optfile-area-text{
        width:100%;
        height:100%;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        color:#606255;
        font-size:14px;
        text-align: center;
        position: relative;
        .mzl-optfile-text-pos{
          width:100%;
          height:auto;
          position: absolute;
          top: 48%;
          left: 50%;
          padding: 10px;
          box-sizing: border-box;
          transform: translate(-50%, -50%);
          .icon-file{
            font-size:22px;
          }
          p{
            width:100%;
            margin:0;
            text-align: center;
            margin-top:5px;
          }
        }
        
      }
    }
    .mzl-optfie-area-big{
      width:300px;
      height: 130px;
      .mzl-optfile-area-text{
        .mzl-optfile-text-pos{
          .icon-file{
            font-size:28px;
            margin:0 auto;
          }
        }
        
      }
    }
    .mzl-opfile-area-active{
      transition: all .4s;
      border-color:#0e80eb ;
    }
  }
  .mzl-optfile-filelist{
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top:2px;
      ul{
        margin:0;
        padding:0;
        width: 100%;
        height: auto;
        overflow: hidden;
        padding:5px 0;
        box-sizing: border-box;
        li{
          list-style: none;
          line-height: 28px;
          padding:0 10px 0 5px;
          box-sizing: border-box;
          font-size:14px;
          color:#606255;
          cursor: pointer;
          &:hover{
            background: rgba(167, 164, 164, 0.1);
            i.delete{
              display: inline-block;
            }
          }
        div{
            span{
              display: inline-block;
              width:96%;
            }
            i.file-icon{
              margin-right:4px;
            }
            i.delete{
              float: right;
              cursor: pointer;
              display: none;
            }
        }
        }
      }
    }
}
.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-img-enter-active,
.list-img-leave-active {
  transition: all 1s ease;
}
.list-img-enter-from,
.list-img-leave-to {
  opacity: 0;
}
</style>