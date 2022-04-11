<template>
  <div class="header-block-box">
    <div class="logoBox">
      <img src="../assets/logo.png" alt="mzl-ui" @click="toHome" />
      <a href="javascript:;" @click="toHome">Mzl UI</a>
      <span>V 0.8.8</span>
      <div class="toolsBox">
        <a
          href="javascript:;"
          v-for="(item, index) in tools"
          :key="index"
          :class="{ active: tabIndex == index }"
          @click="pageView(item, index)"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive, ref, onMounted } from "vue";
const router = useRouter();
const toHome = () => {
  router.push("/");
};
const tabIndex = ref(
  router.currentRoute.value.fullPath == "/mzlui"
    ? 1
    : sessionStorage.getItem("tabIndex") || 0
);

const state = reactive({
  tools: [
    {
      name: "首页",
      path: "/",
    },
    {
      name: "组件",
      path: "/mzlui",
    },
    // {
    //   name:"支持mzlUI",
    //   path:'open',
    // },
    {
      name: "更新日志",
      path: "/mzlui/updatelog",
    },
    {
      name: "问题反馈",
      path: "open",
      url: "https://github.com/Ningstyle/mzl-ui/issues",
    },
  ],
});
const { tools } = state;
const pageView = (item, index) => {
  tabIndex.value = index;
  sessionStorage.setItem("tabIndex", index);
  if (item.path == "open") {
    window.open(item.url);
  } else {
    if (item.path != router.currentRoute.value.fullPath) {
      router.push(item.path);
    }
  }
};
onMounted(() => {
  if (router.currentRoute.value.fullPath == "/mzlui") {
    sessionStorage.setItem("tabIndex", 1);
  }
});
</script>

<style scoped lang="scss">
.header-block-box {
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  .logoBox {
    height: 64px;
    padding: 0 40px;
    overflow: hidden;
    position: relative;
    img {
      width: 22px;
      height: 22px;
      float: left;
      margin: 20px 10px 0 0;
      cursor: pointer;
    }
    a {
      color: #4a5264;
      font-weight: 700;
      font-size: 18px;
      font-family: PuHuiTi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji,
        segoe ui emoji, Segoe UI Symbol, noto color emoji, sans-serif;
      line-height: 64px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      float: left;
    }
    span {
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      background-color: #0e80eb;
      color: #fff;
      position: absolute;
      top: 6px;
    }
    .toolsBox {
      float: right;
      line-height: 64px;
      a {
        font-weight: normal;
        font-size: 16px;
        padding: 8px 3px;
        margin-left: 25px;
        border-bottom: 2px solid #fff;
        display: inline-block;
        float: none;
        line-height: normal;
        transition: all 0.2s ease;
        &:hover {
          color: #0e80eb;
          border-color: #0e80eb;
        }
      }
      a.active {
        color: #0e80eb;
        border-color: #0e80eb;
      }
    }
  }
}
</style>
