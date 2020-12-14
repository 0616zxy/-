import { reqGoodsCount, reqGoodsList} from '../../util/request'

const state={
    total:0,
    list:[]
}

const mutations={
    changeGoodsCount(state, num) {
        state.total = num
    },
    changeGoodList(state,arr) {
        state.list = arr
    }
}

const actions={
    requestGoodsCount(context) {
        reqGoodsCount().then(res => {
            context.commit('changeGoodsCount', res)
        })
    },
    requestGoodsList(context) {
        reqGoodsList({
            size:10,
            page:1,
        }).then(res => {
            context.commit('changeGoodList',res.data.list)
        })
    }
}

const getters={
    total(state){
        return state.total
    },
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