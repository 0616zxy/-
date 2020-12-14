<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isshow">
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
          <div>留空则不修改</div>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2">
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {reqVipEdit} from '../../../util/request'
import{mapGetters,mapActions} from 'vuex'
export default {
  props:['info','form'],
  components: {},
  data() {
    return {
      formLabelWidth: '120px'
    };
  },
  methods: {
    ...mapActions({
      requestVipList:'vip/requestVipList'
    }),
    update(){
      reqVipEdit(this.form).then(res => {
        this.info.isshow=false;
        this.requestVipList()
      })
    }
  },
  mounted() {},
};
</script>
<style lang=''>
</style>