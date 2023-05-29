<template>
  <div class="box">
    <div class="title">
      {{ props.title }}
    </div>
    <div class="main-content">
      <div class="content-left">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
      </div>
      <div class="content-right">

        <div class="ipt-item">
          <div>所属班级：</div>
          <div><el-input :disabled=true v-model="iptdata.calss" /></div>
        </div>

        <div class="ipt-item">
          <div>学员名称：</div>
          <div><el-input v-model="iptdata.username" /></div>
        </div>

        <div class="ipt-item">
          <div>学员账号：</div>
          <div><el-input v-model="iptdata.account" /></div>
        </div>

        <!-- 新建学员 -->
        <div v-show=props.showpassword>
          <div class="ipt-item">
            <div>输入密码：</div>
            <div><el-input v-model="iptdata.password" /></div>
          </div>
          <div class="ipt-item">
            <div>密码确认：</div>
            <div><el-input v-model="iptdata.confirmpassword" /></div>
          </div>
        </div>

        <div class="ipt-item" v-show="props.showuserpassword">
          <div>学员密码：</div>
          <div><el-input v-model="iptdata.userpassword" /></div>
        </div>

        <!-- 修改学员 -->
        <div class="ipt-select" v-show="props.showsection">
          <div>部门迁移：</div>
          <div>
            <el-tree-select v-model=iptdata.section :data="sectiondata" :render-after-expand="false" />
          </div>
        </div>
        <button @click="send" class="btn">{{ props.btnname }}</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
const props = defineProps({
  // 左侧下拉数据
  treeselect: {
    type: Array,
    default: ""
  },
  // 显示输入确认密码
  showpassword: {
    type: Boolean,
    default: true
  },
  // 显示用户密码
  showuserpassword: {
    type: Boolean,
    default: false
  },
  // 显示部门迁移下拉菜单
  showsection: {
    type: Boolean,
    default: false
  },
  // 部门下拉菜单数据
  sectiondata: {
    type: Array,
    default: []
  },
  // 按钮名字
  btnname: {
    type: String,
    default: "点击"
  },
  // 标题
  title: {
    type: String,
    default: ""
  }
})
// 左侧下拉数据
const data = props.treeselect
// 部门迁移下拉数据
const sectiondata = props.sectiondata
const defaultProps = {
  children: 'children',
  label: 'label',
}
const handleNodeClick = (data: any) => {
  iptdata.calss = data.label
}
// 表单数据
const iptdata = reactive(
  {
    calss: "",
    username: "",
    account: "",
    password: "",
    confirmpassword: "",
    userpassword: "",
    // 部门迁移
    section: ""
  }
)
const emit = defineEmits(['sendclick'])
const send = () => {
  emit('sendclick', iptdata)
}
</script>

<style lang='scss' scoped>
.title {
  font-size: 36px;
  font-weight: bold;
  padding: 4% 3%;
  padding-bottom: 2%;
}

.main-content {
  padding: 0.5% 10%;
  padding-right: 8%;
  display: flex;
  overflow: hidden;

  .content-left {
    width: 40%;
    height: 600px;
    border: 2px solid #3c9595;
    border-radius: 3%;
    padding: 2%;
    overflow: scroll;

    .el-tree {
      font-size: 24px;
      color: #3d3d3d;
      font-weight: bold;
      background-color: transparent;


      :deep(.el-tree-node__content) {
        &:hover {
          background-color: #e9f4f4;
        }
      }

      :deep(el-icon el-tree-node__expand-icon) {
        font-size: 32px;
      }

      :deep(.el-tree-node.is-current > .el-tree-node__content) {
        background-color: #e9f5f5 !important;
      }
    }
  }

  .content-right {
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ipt-item,
    .ipt-select {
      font-size: 24px;
      padding: 25px 20px;
      padding-top: 0;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
    }

    .el-input {
      width: 250px;
      height: 40px;
    }

    :deep(.el-input__wrapper.is-focus) {
      box-shadow: 0 0 0 1px #479e9c inset;
    }

    .btn {
      width: 120px;
      height: 50px;
      font-size: 20px;
      font-weight: bold;
      border-radius: 10px;
      border: none;
      color: white;
      background-color: #137f7f;
      cursor: pointer;
    }
  }
}
</style>