<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="商品编号" width="100"> </el-table-column>
      <el-table-column prop="goodsname" label="商品名称" width="180"> </el-table-column>
      <el-table-column prop="price" label="商品价格" width="140"> </el-table-column>
      <el-table-column prop="market_price" label="市场价格" width="140"> </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope"> 
          <img :src="preImg+scope.row.img" alt="">
        </template>
      </el-table-column>

      <el-table-column prop="isnew" label="是否新品" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" v-if="scope.row.isnew==1">是</el-button>
          <el-button size="mini" type="danger" v-else>否</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="ishot" label="是否热卖" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" v-if="scope.row.ishot==1">是</el-button>
          <el-button size="mini" type="danger" v-else>否</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="120">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button size="mini" type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {reqGoodsDel} from '../../../util/request'
import {mapGetters,mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      total:'goods/total',
      list:'goods/list',
    })
  },
  data() {
    return {};
  },
  methods: {
    edit(id) {
      this.$emit('edit', id);
    },
    del(id) {
      reqGoodsDel(id).then(res => {
        this.requestGoodsList()
      })
    },
    ...mapActions({
       requestGoodsCount:'goods/requestGoodsCount',
       requestGoodsList:'goods/requestGoodsList',
    }),
  },
  mounted() {
    this.requestGoodsCount()
    this.requestGoodsList()
  },
};
</script>
<style lang="">
img{
  widows: 80px;
  height: 80px;
}
</style>
