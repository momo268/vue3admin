<template>
  <div class="app-container">
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
            <el-icon>
              <calendar />
            </el-icon>
            <span>Route</span>
        </template>
        Route
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;  
}
</style>