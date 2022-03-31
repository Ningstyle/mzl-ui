import {defineStore} from 'pinia' 
export const useMainStore = defineStore('main',{
  state: ()=>{
    return {
      lang:'CN'
    }
  },
  actions:{
    setLang(lang){
      this.lang = lang
    }
  },
  getters:{
    getLang:(state)=>{
			return state.lang
		}
  }
  
})