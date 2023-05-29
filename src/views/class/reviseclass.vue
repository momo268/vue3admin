<template>
  <Content 
    :treeselect=treeselect 
    :btnname=btnname
    :title=title
    :showcreate=false
    :showrevise=true
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

const btnname = ref("修改")
const title = ref("修改班级")
</script>

<style lang='scss' scoped></style>