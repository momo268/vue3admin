<template>
  <div class="box">
    <div class="title">培训统计查询</div>
    <div class="head">
      <div class="dataselct">
        <el-date-picker v-model="dataval" type="daterange" range-separator="To" start-placeholder="开始时间"
          end-placeholder="结束时间" :size="size" @change="datachange" />
      </div>
      <el-button>搜索</el-button>
      <el-button>清除</el-button>
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

const size = ref('large')
const dataval = ref('')
const currentPage = ref(1)
const pageSize = ref()
const tableData: any = []

const datachange = (val: Array<string>) => {
  console.log(val[0] + "-------" + val[1]);
}
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

    :deep(.el-range-editor.is-active:hover) {
      box-shadow: 0 0 0 1px #137f7f;
    }

    :deep(.el-range-editor.is-active) {
      box-shadow: 0 0 0 1px #137f7f;
    }

    .el-button {
      padding: 19px 20px;
      background-color: #137f7f;
      color: white;
      font-size: 17px;
      border: none;
      margin-left: 24px;
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
    bottom: -20px;
    padding-right: 5%;

    .el-pagination {
      font-size: 18px;

      :deep(.el-pager li.is-active) {
        background-color: #137f7f;
      }

      :deep(.el-pager li:hover) {
        color: #137f7f;
      }

      :deep(.el-input__wrapper.is-focus) {
        box-shadow: 0 0 0 1px #137f7f !important;
      }

      :deep(.el-select .el-input.is-focus .el-input__wrapper) {
        box-shadow: 0 0 0 1px #137f7f !important;
      }
    }
  }
}
</style>
