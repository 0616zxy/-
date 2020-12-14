<template>
  <div>
    <v-list @edit='edit'></v-list>

    <v-add :info="info" :form='form'></v-add>
  </div>
</template>
<script>
import vList from './components/list'
import vAdd from './components/add'
import {reqVipOne} from '../../util/request'
export default {
  components: {
    vList,
    vAdd
  },
  data() {
    return {
      info:{
        isshow:false,
        title: '会员修改',
      },
      form:{}
    };
  },
  methods: {
    edit(uid){
      this.info.isshow = true;
      reqVipOne(uid).then(res => {
        this.form =res.data.list
        this.form.password =''
      })
    }
  },
  mounted() {},
};
</script>
<style lang=''>
</style>