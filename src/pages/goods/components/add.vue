<template>
  <div>
    <!-- opened:	Dialog开动画结束时的回调 -->
    <el-dialog :title="info.title" :visible.sync="info.isshow" @opened="changeEditor">
      <el-form :model="form">
        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-select
            v-model="form.first_cateid"
            placeholder="请选择"
            @change="SecondCate"
          >
            <el-option label="--请选择--" :value="0" disabled></el-option>
            <el-option
              :label="item.catename"
              :value="item.id"
              v-for="item in classifyList"
              :key="item.id"
            ></el-option>
            <!-- 循环 -->
          </el-select>
        </el-form-item>

        <el-form-item label="二级分类" :label-width="formLabelWidth">
          <el-select v-model="form.second_cateid" placeholder="请选择">
            <el-option label="--请选择--" :value="0" disabled></el-option>
            <el-option
              :label="item.catename"
              :value="item.id"
              v-for="item in secondCate"
              :key="item.id"
            ></el-option>
            <!-- 循环 -->
          </el-select>
        </el-form-item>

        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="市场价格" :label-width="formLabelWidth">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="formLabelWidth">
          <!-- on-change	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 -->
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="商品规格" :label-width="formLabelWidth">
          <el-select v-model="form.specsid" placeholder="请选择" @change="Specsattr">
            <el-option label="--请选择--" :value="0" disabled></el-option>
            <el-option
              :label="item.specsname"
              :value="item.id"
              v-for="item in specList"
              :key="item.id"
            ></el-option>
            <!-- 循环 -->
          </el-select>
        </el-form-item>

        <el-form-item label="规格属性" :label-width="formLabelWidth">
          <el-select v-model="form.specsattr" placeholder="请选择">
            <el-option label="--请选择--" :value="0" disabled></el-option>
            <el-option
              :label="item"
              :value="item"
              v-for="item in specsattr"
              :key="item"
            ></el-option>
            <!-- 循环 -->
          </el-select>
        </el-form-item>

        <el-form-item label="是否新品" :label-width="formLabelWidth">
          <el-radio v-model="form.isnew" :label="1">是</el-radio>
          <el-radio v-model="form.isnew" :label="2">否</el-radio>
        </el-form-item>

        <el-form-item label="是否热卖" :label-width="formLabelWidth">
          <el-radio v-model="form.ishot" :label="1">是</el-radio>
          <el-radio v-model="form.ishot" :label="2">否</el-radio>
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

        <el-form-item label="商品描述" :label-width="formLabelWidth">
          <div id="div1" v-if="info.isshow"></div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isadd">确 定</el-button>
        <el-button type="primary" @click="update" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reqGoodsAdd, reqGoodsOne, reqGoodsEdit } from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
import E from "wangeditor";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      classifyList: "classify/list",
      specList: "spec/list",
      list: "goods/list",
    }),
  },
  data() {
    return {
      formLabelWidth: "120px",
      secondCate: [], //用于存放二级分类
      specsattr: [], //用来存放规格属性
      form: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: null,
        description: "",
        specsid: "",
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1,
      },
      imageUrl: "",
    };
  },
  methods: {
    ...mapActions({
      requestClassifyList: "classify/requestClassifyList",
      requestSpecsList: "spec/requestSpecsList",
      requestGoodsList: "goods/requestGoodsList",
    }),
    // 点击不同的一级分类，显示对应的二级分类
    SecondCate() {
      this.secondCate = this.classifyList.find((item) => {
        return item.id == this.form.first_cateid;
      }).children;
    },
    // 点击不同的商品规格，显示对应的规格属性
    Specsattr() {
      this.form.specsattr = [];
      this.specsattr = this.specList.find((item) => {
        return item.id == this.form.specsid;
      }).attrs;
    },
    //上传图片
    changeImg(e) {
      console.log(e); //这是获取到的文件也就是上传的那张图片
      var file = e.raw;
      // 通过URL.createObjectURL(file)可以获取当前文件的一个内存URL
      this.imageUrl = URL.createObjectURL(file);
      console.log(this.imageUrl);
      this.form.img = file;
    },
    // 页面加载完成创建富文本编辑器
    changeEditor() {
      this.editor = new E("#div1");
      this.editor.create();
      // 重新设置编辑器内容 editor.txt.html('<p>用 JS 设置的内容</p>')  
       this.editor.txt.html(this.form.description)
    },
    // 重置
    empty() {
      this.form = {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: null,
        description: "",
        specsid: "",
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1,
      };
      this.imageUrl=''
    },
    // 隐藏弹框
    hide() {
      this.info.isshow = false;
    },
    //添加
    add() {
       this.form.description = this.editor.txt.html()
      reqGoodsAdd(this.form).then((res) => {
        this.hide();
        this.requestGoodsList();
      });
    },
    look(id) {
      reqGoodsOne(id).then((res) => {
        this.form = res.data.list;
        this.form.id = id;
        this.imageUrl = this.preImg + res.data.list.img;
        // 由于取回来的规格属性是字符串，所以需要进行分割
        this.form.specsattr = this.form.specsattr.split(",");

        
        // 写着这里可以获取但是由于是异步操作 可能会报错
        // this.editor.txt.html(this.form.description)
      });
    },
    update() {
      // 使用 editor.txt.html() 获取富文本html内容
       this.form.description = this.editor.txt.html()
      reqGoodsEdit(this.form).then((res) => {
        this.requestGoodsList();
        this.hide();
      });
    },
  },
  mounted() {
    this.requestClassifyList(), 
    this.requestSpecsList();
  },
};
</script>
<style lang="">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
