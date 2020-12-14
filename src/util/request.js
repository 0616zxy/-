// request.js里面的axios请求，当组件和store中如果需要使用，必须先解构引入

import axios from 'axios'
import qs from 'qs'

const baseUrl = '/api'

//响应拦截
axios.interceptors.response.use(res=>{
    console.log('==================请求的路径：'+res.config.url+'==============');
    console.log(res);
    return res;//相应拦截是一道墙，如果不写return res,就拿不到返回的数据
})

// 菜单模块的请求
//菜单添加
export const reqMenuAdd =(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data,
    })
}

//菜单列表
export const reqMenuList= (params)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:params
    })
}

// 菜单获取（一条）
export const reqMenuListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:{id}
    })
}

//菜单修改
export const reqMenuEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:data
    })
}

//菜单删除
export const reqMenuDelete=(data)=>{
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:data
    })
}
//========================================角色管理=============================================
//角色添加
export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:data
    })
}
//角色列表
export const reqRoleList=()=>{
    return axios({
        url:baseUrl+'/api/rolelist',
        method:'get'
    })
}
// 角色获取（一条）
export const reqRoleListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:{id}
    })
}
// 角色修改
export const reqRoleEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:data
    })
}
//角色删除
export const reqRoleDelete=(id)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:{id}
    })
}

// =========================================管理员管理==========================================
// 管理员添加
export const reqUseAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data:data
    })
}

// 管理员总数（用于计算分页）
export const reqUserCount=()=>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',
    })
}

// 管理员列表（分页）
export const reqUserList=(params)=>{
    return axios({
        url:baseUrl+'/api/userlist',
        method:'get',
        params:params,
    })
}

//管理员获取（一条）
export const reqUserOne=(uid)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:{uid}

    })
}

//管理员修改
export const reqUserEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:data

    })
}

// 管理员删除
export const reqUserDel=(id)=>{
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:{uid:id}
    })
}

// ======================================商品分类============================
// 商品分类添加
export const reqClassifyAdd=(data)=>{
     // 由于上传的是文件 所以需要用qs转一下
    var form = new FormData();
    for(var key in data){
        form.append(key, data[key]);
    }
    return axios({
        url:baseUrl+'/api/cateadd',
        method: 'post',
        data:form
    })
}

//商品分类列表
export const reqClassifyList = (params) => {
    return axios({
        url:baseUrl+'/api/catelist',
        method: 'get',
        params: params
    })
}
//商品分类获取（一条）
export const reqClassifyOne = (id) => {
    return axios({
        url:baseUrl+'/api/cateinfo',
        method: 'get',
        params: {id}
    })
}
//商品分类修改
export const reqClassifyEdit = (data) =>{
    var form = new FormData()
    for(var key in data){
        form.append(key, data[key])
    }
    return axios({
        url:baseUrl+'/api/cateedit',
        method: 'post',
        data: form
    })
}
//商品分类删除
export const reqClassifyDelete = (id) =>{
    return axios({
        url:baseUrl+'/api/catedelete',
        method: 'post',
        data: {id}
    })
}

// =====================================商品规格=====================================
// 商品规格添加
export const reqSpecsAdd = (data)=>{
    return axios({
        url:baseUrl+'/api/specsadd',
        method: 'POST',
        data:data
    })
}
// 商品规格总数（用于计算分页）
export const reqSpecsCount = ()=>{
    return axios({
        url:baseUrl+'/api/specscount',
        method: 'get',
    })
}
//商品规格列表（分页）
export const reqSpecsList = (params)=>{
    return axios({
        url:baseUrl+'/api/specslist',
        method: 'get',
        params:params
    })
}
// 商品规格获取（一条）
export const reqSpecsOne = (id)=>{
    return axios({
        url:baseUrl+'/api/specsinfo',
        method: 'get',
        params:{id}
    })
}
// 商品规格修改
export const reqSpecsEdit = (data)=>{
    return axios({
        url:baseUrl+'/api/specsedit',
        method: 'post',
        data:data,
    })
}
// 商品规格删除
export const reqSpecsDel = (id)=>{
    return axios({
        url:baseUrl+'/api/specsdelete',
        method: 'post',
        data:{id}
    })
}

// =================================管理员登录================================
// 管理员登录
export const reqMangerLogin = (data)=>{
    return axios({
        url:baseUrl+'/api/userlogin',
        method:'post',
        data:data
    })
}

// =================================商品管理=========================================
// 商品添加
export const reqGoodsAdd = (data) =>{
    var form = new FormData();
    for(var key in data){
        form.append(key, data[key]);
    }
    return axios({
        url: baseUrl +'/api/goodsadd',
        method:'post',
        data:form
    })
}

// 商品总数（用于计算分页）**
export const reqGoodsCount=()=>{
    return axios({
        url: baseUrl +'/api/goodscount',
        method:'get'
    })
}
// 商品列表（分页）**
export const reqGoodsList=(params)=>{
    return axios({
        url: baseUrl +'/api/goodslist',
        method:'get',
        params: params
    })
}
// 商品获取（一条）
export const reqGoodsOne=(id)=>{
    return axios({
        url: baseUrl +'/api/goodsinfo',
        method:'get',
        params:{id}
    })
}
// 商品修改
export const reqGoodsEdit=(data)=>{
    var form = new FormData();
    for (var key in data) {
        form.append(key, data[key]);
    }
    return axios({
        url: baseUrl +'/api/goodsedit',
        method:'post',
        data:form,
    })
}
// 商品删除
export const reqGoodsDel=(id)=>{
    return axios({
        url: baseUrl +'/api/goodsdelete',
        method:'post',
        data:{id}
    })
}

// =====================================会员管理============================================
// 会员列表** 
export const reqVipList=()=>{
    return axios({
        url: baseUrl +'/api/memberlist',
        method:'get',
    })
}

//会员获取（一条）
export const reqVipOne=(uid)=>{
    return axios({
        url: baseUrl +'/api/memberinfo',
        method:'get',
        params:{uid}
    })
}

// 会员修改
export const reqVipEdit=(data) =>{
    return axios({
        url: baseUrl +'/api/memberedit',
        method:'post',
        data:data
    })
}

// ==========================================轮播图管理===============================================
// 轮播图添加** 
export const reqBannerAdd=(data)=>{
    var form = new FormData();
    for(var key in data){
        form.append(key, data[key]);
    }
    return axios({
        url: baseUrl +'/api/banneradd',
        method: 'POST',
        data:form
    })
}
// 轮播图列表** 
export const reqBannerList=()=>{
    return axios({
        url: baseUrl +'/api/bannerlist',
        method: 'get',
    })
}
// 轮播图获取（一条）
export const reqBannerOne=(id)=>{
    return axios({
        url: baseUrl +'/api/bannerinfo',
        method: 'get',
        params:{id}
    })
}
// 轮播图修改
export const reqBannerEdit=(data)=>{
    var form = new FormData();
    for (var key in data) {
        form.append(key, data[key]);
    }
    return axios({
        url: baseUrl +'/api/banneredit',
        method: 'POST',
        data:form
    })
}
// 轮播图删除
export const reqBannerDel=(id)=>{
    return axios({
        url: baseUrl +'/api/bannerdelete',
        method: 'POST',
        data:{id}
    })
}