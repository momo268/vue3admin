<template>
  <Content 
    :treeselect=treeselect 
    :btnname=btnname
    :title=title
    :showcreate=false
    :showdel=true
    @sendclick="getiptval"
     />
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import Content from './components/index.vue'

const treeselect = [
  {
    label: '3D仿真培训系统',
    children: [
      {
        label: '吉林省供电公司',
        children: [
          {
            label: 'XX班级',
          },
        ],
      },
    ],
  },
]

const getiptval = (val: any) => {
  console.log(val);
}

const btnname = ref("删除")
const title = ref("删除班级")
</script>

<style lang='scss' scoped></style>