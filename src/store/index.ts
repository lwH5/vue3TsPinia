import { defineStore } from "pinia";
import piniaPersistConfig from './piniaPersist'
export const userStore=defineStore('user',{
    state:()=>{
        return{
            text:"我是管理员"
        }
    },
    actions:{
        updateText(){
            this.text="wuhu  qifei"
        },
        online(){
            setTimeout(() => {
                this.text="5s后"
            }, 5000);
        }
    },
    getters:{
        newText():any{
            return this.text+"从getters返回"
        }
    },
    persist: piniaPersistConfig('user')
})