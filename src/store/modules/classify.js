import {reqClassifyList} from '../../util/request'

// 商品分类
const state ={
    list:[],
}

const mutations={
    changeClassifyList(state,arr) {
        state.list = arr
    }
}

const actions={
    requestClassifyList(context,a) {
        if(a==''){
            reqClassifyList({
                istree: true
            }).then(res => {
                context.commit('changeClassifyList', res.data.list)
            })
        }else{
            reqClassifyList({
            istree:true
        }).then(res=>{
            context.commit('changeClassifyList',res.data.list)
        })
        }
        
    }
}

const getters={
    list(state){
        return state.list
    }
}

export default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}