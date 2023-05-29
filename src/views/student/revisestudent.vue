<template>
  <Content :treeselect=treeselect :showuserpassword=true :showsection=true :btnname=btnname :sectiondata=sectiondata
    :title=title :showpassword=false @sendclick="getiptval" />
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

const sectiondata = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
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
const title = ref("修改学员信息")
</script>

<style lang='scss' scoped></style>