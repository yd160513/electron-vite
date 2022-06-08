<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { useMouse } from "../utils/mouse";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { x, y } = useMouse();

    console.log(x, y);
    return {}
  },
});
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333333;
  text-align: center;
}
.el-aside {
  background-color: #dedce6;
  color: #333333;
}
.el-main {
  background-color: #e99ef3;
  color: #333333;
}
body > .el-container {
  margin-bttom: 40px;
}
</style>
