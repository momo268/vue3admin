<template>
  <Content :treeselect=treeselect :btnname=btnname :title=title @sendclick="getiptval" />
</template>

<script lang='ts' setup>
import { ref, onBeforeMount } from 'vue';
import Content from './components/index.vue'
import { getClass } from '@/api/class'

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
// 获取部门班级数据
const getclass = async () => {
  const res = await getClass()
  console.log(res);
}
const getiptval = (val: any) => {
  console.log(val);
}
onBeforeMount(() => {
  getclass()
})
const btnname = ref("新建")
const title = ref("新建班级")
</script>

<style lang='scss' scoped></style>