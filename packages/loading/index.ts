import { createApp, reactive,watchEffect } from 'vue'

import mLoading from './index.vue'

const obj = reactive({
  show: false,
  text: '加载中...',
  icon:"m-icon-loading1",
  img:'',
  target:'body',
  textColor:'#fff',
  bgColor:"rgba(0, 0, 0, 0.6)",
  showIcon:true,
  position:'fixed',
  scrollLock:true,
})
const $loading = createApp(mLoading, {obj}).mount(typeof document !== 'undefined'?typeof document.createElement !== 'undefined'?document.createElement('div'):'':'')
// console.log($loading);
const Loading = {
  show(data) { // 控制显示loading的方法
    obj.show = true
    if(data!=undefined){
      obj.text =data.text!=undefined?data.text:obj.text
      obj.target =data.target!=undefined?data.target:obj.target
      obj.scrollLock =data.scrollLock!=undefined?data.scrollLock:obj.scrollLock
      obj.icon = data.icon!=undefined?(data.icon=='m-icon-loading1'||data.icon=='m-icon-loading2'||data.icon=='m-icon-loading3'||data.icon=='m-icon-loading4'||data.icon=='m-icon-loading5'||data.icon=='m-icon-loading6')?data.icon:obj.icon:obj.icon;
      obj.textColor =data.textColor!=undefined?data.textColor:obj.textColor;
      obj.bgColor =data.bgColor!=undefined?data.bgColor:obj.bgColor
      obj.showIcon =data.showIcon!=undefined?data.showIcon:obj.showIcon;
      obj.img =data.img!=undefined?data.img:obj.img
      watchEffect(()=>{
        if(data.target!=undefined){
          if(obj.scrollLock){
            if(typeof document !== 'undefined'){
              document.querySelector(data.target).classList.add("mzl-loading-parentClass")
            }
          }else{
            setTimeout(()=>{
              if(typeof document !== 'undefined'){
                document.querySelector(data.target).classList.remove("mzl-loading-parentClass")
              }
            },500)
          }
        }else{
          if(obj.scrollLock){
            if(typeof document !== 'undefined'){
              document.body.classList.add("mzl-loading-parentClass")
            }
          }else{
            if(typeof document !== 'undefined'){
              document.body.classList.remove("mzl-loading-parentClass")
            }
          }
        }
        
      })
      if(data.target!=undefined){
        if(typeof document !== 'undefined'){
          document.querySelector(data.target).appendChild($loading.$el)
        }
        obj.position = 'absolute'
      }else{
        if(typeof document !== 'undefined'){
          document.body.appendChild($loading.$el)
        }
        obj.position = 'fixed'
      }
    }else{
      if(typeof document !== 'undefined'){
        document.body.appendChild($loading.$el)
      }
    }
    
  },

  hide() { // 控制loading隐藏的方法
    obj.show = false
    if(obj.target!='body'){
      setTimeout(()=>{
        if(typeof document !== 'undefined'){
          document.querySelector(obj.target).classList.remove("mzl-loading-parentClass")
        }
      },500)
    }else{
      if(typeof document !== 'undefined'){
        document.body.classList.remove("mzl-loading-parentClass")
      }
    }
  }
}

export default Loading