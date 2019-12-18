import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import users from './modules/users'

const state={

}

const getters={
    isEvenorOdd(state){
        return state.user.count%2==0?"偶数":"奇数"
    }
}

const actions={
    asyncMethod({commit,state}){
        commit("increment")
        let p=new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve();
            },3000)
        });
        p.then(function(){
            commit("decrement")
        }).catch(function(error){
            console.log(error)
        })
    }
}

export default new Vuex.Store({
    getters,
    actions,
    modules:{
        users
    }
})