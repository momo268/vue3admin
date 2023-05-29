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
          <div><el-input disabled v-model="iptdata.calss" /></div>
        </div>

        <div class="ipt-item" v-show=props.showcreate>
          <div>新建班级：</div>
          <div><el-input v-model="iptdata.createclass" /></div>
        </div>

        <div class="ipt-item" v-show=props.showrevise>
          <div>修改班级：</div>
          <div><el-input v-model="iptdata.revise" /></div>
        </div>

        <div class="ipt-item" v-show=props.showdel>
          <div>删除班级：</div>
          <div><el-input disabled v-model="iptdata.del" /></div>
        </div>
        <button @click="send" class="btn">{{ props.btnname }}</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'


// 表单数据
const iptdata = reactive(
  {
    calss: "",
    createclass: "",
    revise: "",
    del: ""
  }
)
// props
const props = defineProps({
  // 左侧下拉数据
  treeselect: {
    type: Array,
    default: ""
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
  },
  // 显示新建班级
  showcreate: {
    type: Boolean,
    default: true
  },
  // 显示修改班级
  showrevise: {
    type: Boolean,
    default: false
  },
  // 显示删除班级
  showdel: {
    tyoe: Boolean,
    default: false
  }

})

// 左侧下拉数据
const data = props.treeselect
const defaultProps = {
  children: 'children',
  label: 'label',
}

const handleNodeClick = (data: any) => {
  iptdata.calss = data.label
  iptdata.del = data.label
}
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