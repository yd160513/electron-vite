<template>
  <div class="common-layout">
    <el-container>
      <el-aside :class="menuWidth">
        <div class="layout-title">
          <div v-show="!isCollapse" class="title">阿豪阿卡阿甘</div>
          <el-icon class="change-icon" :class="changeIcon" @click="changeMenu">
            <Expand/>
          </el-icon>
        </div>
        <el-menu
          default-active="2"
          :collapse="isCollapse"
          class="menus"
        >
          <el-menu-item :index="i" v-for="(item, i) in menus" :key="i">
            <el-icon>
              <location/>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>
          主视图
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { useMouse } from "../utils/mouse";
import { computed, ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { x, y } = useMouse();
    const isCollapse = ref(false)
    const menus = ref([
      {
        name: 'a'
      },
      {
        name: 'b'
      },
      {
        name: 'c'
      },
      {
        name: 'd'
      },
      {
        name: 'e'
      },
      {
        name: 'f'
      },
      {
        name: 'g'
      },
      {
        name: 'h'
      },
      {
        name: 'i'
      },
      {
        name: 'j'
      },
      {
        name: 'k'
      },
      {
        name: 'l'
      },
      {
        name: 'm'
      }
    ])

    const changeMenu = () => {
      isCollapse.value = !isCollapse.value
    }

    const menuWidth = computed(() => {
      return !isCollapse.value ? 'big-width' : 'small-width'
    })

    const changeIcon = computed(() => {
      return !isCollapse.value ? 'small-mar' : 'big-mar'
    })

    console.log(x, y);
    return {
      menus,
      changeIcon,
      menuWidth,
      isCollapse,
      changeMenu
    }
  },
});
</script>

<style lang="scss">
.menus {
  height: calc(100% - 50px);
  border-right: none;
  overflow-y: scroll;
}

.small-width {
  width: 64px;
}

.big-width {
  width: 260px;
}

.layout-title {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  color: rgb(64, 158, 255);
  height: 50px;
  box-sizing: border-box;

  .title {
    white-space: pre;
    overflow: hidden;
  }

  .change-icon {
    cursor: pointer;

    &.big-mar {
      margin: 0 auto;
    }

    &.small-mar {
      margin-left: auto;
    }
  }
}

.el-aside {
  background-color: #ffffff;
  margin: 16px 0 16px 16px;
  border-radius: 4px;
  box-shadow: 0 0 12px rgba(0, 0, 0, .12);
  overflow: hidden;
  transition: width .3s ease;
}

.el-header {
  margin: 16px 0 16px 16px;
}

.el-main {
  background-color: #e99ef3;
  color: #333333;
}

.common-layout, .el-container {
  height: 100%;
}
</style>
