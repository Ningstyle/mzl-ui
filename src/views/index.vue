<template>
  <div class="contentBox">
    <div class="imgLogo">
      <img src="../assets/logo.png" alt="mzl-ui" />
    </div>
    <h3>一套适合开发者使用的轻量级UI组件库，完美支持vue3</h3>
    <div class="tiBox">
      <p>
        完美支持vite+vue3版本，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的vue世界！
      </p>
      <div class="buttonGroups">
        <m-button
          type="primary"
          round
          style="padding: 15px 50px; margin-right: 2vw; font-size: 17px"
          @click="toComponents"
          >立即上手</m-button
        >
        <m-button
          round
          icon="m-icon-github"
          style="padding: 15px 50px; margin-left: 2vw; font-size: 17px"
          @click="goGuthub"
          >Github</m-button
        >
      </div>
      <div class="cardBox">
        <li>
          <p>更小的体积</p>
          <div>组件体积更小，灵活使用，按需使用。</div>
        </li>
        <li>
          <p>更快的响应</p>
          <div>配合vue3的composition API，更快的相应。</div>
        </li>
        <li>
          <p>更强的拓展性</p>
          <div>给开发者几乎所有的机会来自定义组件，满足一切项目使用场景。</div>
        </li>
        <li>
          <p>更完美的支持</p>
          <div>专为vue3版本开发。</div>
        </li>
        <li>
          <p>更友好的渲染</p>
          <div>极少的代码量，极简配置项。</div>
        </li>
      </div>
      <div class="links">
        <p class="titles">链接</p>
        <span @click="goGuthub">Github</span>
        <span @click="goToNpm">NPM</span>
        <!-- <span>关于MZL_UI</span> -->
        <span @click="verSion">更新日志</span>
        <!-- <span>关于作者</span> -->
        <p class="titles">贡献人员</p>
        <li
          v-for="(item, index) in devoteList"
          :key="index"
          title="点击跳转至Ta的Github主页"
          @click="toDevoteGithub(item)"
        >
          <div class="">
            <img :src="item.img" alt="" />
            <span :style="{ color: item.name == 'Ningstyle' ? '#000' : '' }">{{
              item.name
            }}</span>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
const router = useRouter();
const state = reactive({
  devoteList: [
    {
      name: "Ningstyle",
      github: "https://github.com/Ningstyle",
      img: "https://avatars.githubusercontent.com/u/23306049?s=60&v=4",
    },
    {
      name: "pakchoily",
      github: "https://github.com/pakchoily",
      img: "https://avatars.githubusercontent.com/u/59410698?s=60&v=4",
    },
    {
      name: "Potato-X",
      github: "https://github.com/Potato-X",
      img: "https://avatars.githubusercontent.com/u/68857645?s=60&v=4",
    },
    {
      name: "wally94",
      github: "https://github.com/wally94",
      img: "https://avatars.githubusercontent.com/u/40847305?v=4",
    },
    {
      name: "amifed",
      github: "https://github.com/amifed",
      img: "https://avatars.githubusercontent.com/u/36906371?s=60&v=4",
    },
    {
      name: "zgx1996",
      github: "https://github.com/zgx1996",
      img: "https://avatars.githubusercontent.com/u/21330181?v=4",
    },
    {
      name: "spark154204",
      github: "https://github.com/spark154204",
      img: "https://avatars.githubusercontent.com/u/48675578?s=60&v=4",
    },
  ],
});
const toComponents = () => {
  router.push("/mzlui");
};
const goGuthub = () => {
  window.open("https://github.com/Ningstyle/mzl-ui");
};
const goToNpm = () => {
  window.open("https://www.npmjs.com/package/mzl-ui");
};
const verSion = () => {
  router.push("/mzlui/updatelog");
};
const toDevoteGithub = (item) => {
  window.open(item.github);
};
const { devoteList } = state;
sessionStorage.setItem("mIndex", "0-0");
sessionStorage.setItem("tabIndex", 0);
</script>
<style lang="scss" scoped>
.contentBox {
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: calc(100vh - 64px);
  background: rgba(9, 195, 190, 0.02);
  .imgLogo {
    margin: 0 auto;
    display: block;
    width: 12vw;
    margin-top: 60px;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
  }

  h3 {
    text-align: center;
    font-size: 2vw;
    color: #4a5264;
    margin: 16px 0 0 0;
  }
  .tiBox {
    width: 70%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    p {
      text-align: center;
      color: #636e86;
      font-size: 0.9vw;
    }
    .buttonGroups {
      width: 100%;
      text-align: center;
      height: auto;
      overflow: hidden;
      margin-top: 5vh;
    }
    .cardBox {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 5vh;
      li {
        list-style: none;
        width: 19%;
        padding: 0 5px 25px 5px;
        box-sizing: border-box;
        float: left;
        list-style: none;
        background: #fff;
        // border: 1px solid #eaeefb;
        border-radius: 5px;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
        margin-right: 1%;
        cursor: pointer;
        &:hover {
          background: rgba(9, 195, 190, 0.1);
        }
        p {
          font-size: 18px;
          color: #1f2f3d;
          font-weight: 400;
          padding: 0 14px;
        }
        div {
          font-size: 14px;
          color: #919cac;
          padding: 0 0px;
          line-height: 20px;
          text-align: center;
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
    .links {
      width: 100%;
      height: auto;
      overflow: hidden;
      text-align: center;
      margin-bottom: 30px;
      margin-top: 1vh;
      li {
        list-style: none;
        display: inline-block;
        font-size: 0.8vw;
        font-weight: 550;
        color: #0e80eb;
        cursor: pointer;
        margin: 0 0.5vw;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 4px;
          img {
            width: 1.2vw;
            border-radius: 50%;
            margin-right: 7px;
          }
          span {
            margin: 0;
          }
          &:hover {
            span {
              text-decoration: underline;
            }
          }
        }
      }
      p {
        font-size: 20px;
        font-weight: 600;
        color: #515a6e;
        margin: 0;
        line-height: 50px;
      }
      span {
        display: inline-block;
        line-height: 30px;
        color: #0b6bc5;
        font-size: 16px;
        margin: 5px 10px 5px 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
