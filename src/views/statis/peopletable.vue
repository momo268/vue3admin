<template>
  <div class="box">
    <div class="title">培训统计查询</div>
    <div class="head">
      <el-input placeholder="人员搜索" />
      <el-button>搜索</el-button>
      <el-button>清除</el-button>
      <el-select v-model="value" class="m-2" placeholder="全部部门/班级" size="large">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button>导出记录</el-button>
    </div>
    <div class="tablecontent">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="序号" width="180" />
        <el-table-column prop="account" label="账号" width="180" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="section" label="部门" />
        <el-table-column prop="num" label="培训次数" />
        <el-table-column prop="res" label="总成绩" />
      </el-table>
    </div>
    <div class="foot">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 50]"
        :disabled="false" :background="true" layout="total, sizes, prev, pager, next, jumper" :total="40"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
const currentPage = ref(1)
const pageSize = ref()
const tableData: any = []
const options = [
  {
    value: 'Option1',
    label: '一部',
  },
  {
    value: 'Option2',
    label: '二部',
  },
  {
    value: 'Option3',
    label: '三部',
  },
  {
    value: 'Option4',
    label: '四部',
  },
  {
    value: 'Option5',
    label: '五部',
  },
]
const handleSizeChange = (val: number) => {
  console.log(val)
}
const handleCurrentChange = (val: number) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>
.box {
  padding: 3% 5%;
  position: relative;

  .head {
    display: flex;

    .el-input {
      width: 200px;
      height: 40px;

      :deep(.el-input__wrapper.is-focus) {
        box-shadow: 0 0 0 1px #137f7f;
      }
    }

    .el-button {
      padding: 19px 20px;
      background-color: #137f7f;
      color: white;
      font-size: 17px;
      border: none;
      margin-left: 24px;
    }

    .el-select {
      margin-left: 24px;

      :deep(.el-input.is-focus .el-input__wrapper) {
        box-shadow: 0 0 0 1px #137f7f !important;
      }

      :deep(.el-input__wrapper.is-focus) {
        box-shadow: 0 0 0 1px #137f7f !important;
      }
    }
  }

  .tablecontent {
    margin-top: 30px;

    :deep(.el-table .cell) {
      text-align: center;
    }
  }

  .foot {
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 5%;

    .el-pagination {
      font-size: 18px;
    }
  }
}
</style>
