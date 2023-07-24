<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template >
  <div class="resume">
  <van-row>
    <van-col span="24">
    <van-notice-bar scrollable text="你们好，这是我的网页版简历，麻烦公司可以看一下，非常感谢，这个网页是用vue 来写的如果您们有需要的话可以看有谢谢" />

  <div class="title" style="width: 100%;text-align: center;
    font-size: 25px;
    font-weight: 600;
    background-color: #53a1e6;
    border-radius: 10px;
">
    简历
    </div>
  </van-col>
  <van-col span="5" style="margin-top:10px;">
    <van-icon class="icon-me" name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" />
  </van-col>
  <!-- <van-col span="19"> -->
    <!-- <van-icon class="icon-me" name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" /> -->
  <!-- </van-col> -->

    <van-col span="19">

    <div>姓名 ： 高兴业</div>
  <!-- </van-col> -->
  <!-- <van-col span="19"> -->
    <div>联络方式</div>
    <div>电话  ： 0134762838</div>
    <div>email ： kohhengyeap@gmail.com</div>
  </van-col>
  <van-col span="19">
  <van-collapse v-model="activeNames">

    <van-row>
      <van-col span="24">
        <div style="background-color:aqua;background-color: aqua;border-radius: 50px;text-align: center; font-size: 22px;font-weight: 500;">工作經驗</div>
        <van-collapse-item title="第一份工作" name="5">
            <div class="work">
              時長 1年
                TST Malaysia 是一個美容公司，tst 有他們的app ，工作内容做要是維護tst app 和做一些小游戲來給用戶做活動，他們的app做要是用vue
                來寫的，用vue 和插件時vant 來做購買app
            </div>
            
          <div></div>
      </van-collapse-item>
      <van-collapse-item title="第二份工作" name="6">
            <div class="work">
              時長 1年4個月
              ttwoweb 公司主要幫用戶做web site 的，fant end 主要是用html ,css ,javasraig ,jq ,col-12 ,php來做的, back end 主要是用 php 來寫 
              r api 來 return 個front end 的，front end call back end api 是 ajax 。做了7~8的項目
              
              https://www.ttwoweb.com/

            </div>
          <div></div>
      </van-collapse-item>
      </van-col>
    </van-row>
  </van-collapse>
  <van-collapse v-model="activeNames">

<van-row>
  <van-col span="24">
    <!-- <div>技能</div> -->
    <van-collapse-item title="技能" name="8">
      <div>html</div>
          <van-progress pivot-text=" 80%"  :percentage="80" />
      <div>css</div>
        <van-progress pivot-text=" 80%"  :percentage="80" />
      <div>javasrpt</div>
        <van-progress pivot-text=" 80%"  :percentage="80" />
      <div>jq</div>
        <van-progress pivot-text=" 80%"  :percentage="80" />
      <div>php</div>
        <van-progress pivot-text=" 80%"  :percentage="80" />
    
      <div></div>
  </van-collapse-item>

  </van-col>
</van-row>
</van-collapse>
    
  
  <van-collapse v-model="activeNames">
    <van-row>
      <van-col span="24">
    <div>语言</div>
  </van-col>
    <van-col span="8">
      <van-collapse-item title="英文" name="1">
        <div>英文</div>
          <div class="">
            <div>听</div>
          <van-progress pivot-text="听 80%"  :percentage="80" />
        </div>
        <div class="cat">
          <div>写</div>
          <van-progress pivot-text="写 80%"  :percentage="80" />
        </div>
        <div class="cat">
          <div>说</div>
          <van-progress pivot-text="说 80%"  :percentage="80" />
          </div>
      </van-collapse-item>
    </van-col>
    <van-col span="8">
      <van-collapse-item title="中文" name="2">
          <div>中文</div>
          <div class="">
            <div>听</div>
            <van-progress pivot-text="听 80%"  :percentage="80" />
          </div>
          <div class="cat">
            <div>写</div>
            <van-progress pivot-text="写 80%"  :percentage="80" />
          </div>
          <div class="cat">
            <div>说</div>
            <van-progress pivot-text="说 80%"  :percentage="80" />
            </div>
      </van-collapse-item>
    </van-col>
    <van-col span="8">
      <van-collapse-item title="马来文" name="3">
        <div>马来文</div>
        <div class="">
          <div>听</div>
          <van-progress pivot-text="听 30%"  :percentage="30" />
        </div>
        <div class="cat">
          <div>写</div>
          <van-progress pivot-text="写 30%"  :percentage="30" />
        </div>
        <div class="cat">
          <div>说</div>
          <van-progress pivot-text="说 30%"  :percentage="30" />
        </div>
      </van-collapse-item>
    </van-col>
  </van-row>

  </van-collapse>
  <van-collapse v-model="activeNames">
    <van-row>
      <van-col span="24">
    <div>學歷</div>
  </van-col>
    <van-col span="8">
      中學
    </van-col>
    <van-col span="8">
      <a href="https://www.vnu.edu.tw/">大學</a>
    </van-col>
    <van-col span="8">
      
    </van-col>
  </van-row>

  </van-collapse>
</van-col>


      
<van-col span="24">
  
</van-col>
<van-col span="24">

</van-col>
       <!-- <van-col span="8">span: 8</van-col> -->
    </van-row>
    
  </div>
  <!-- </div> -->
</template>
<script >
import { ref, computed } from 'vue';
import { 
  Button ,
  Cell, 
  CellGroup,
  Calendar ,
  Icon ,
  Col, 
  Row,
  Circle,
  NoticeBar,
  Progress,
  Collapse,
  CollapseItem,
    } from 'vant';
export default {
  
    components: {
      [Button.name]: Button,
      [Cell.name]:Cell, 
      [CellGroup.name]:CellGroup,
      [Calendar.name]:Calendar,
      [Icon.name]:Icon,
      [Col.name]:Col,
      [Row.name]:Row,
      [Circle.name]:Circle,
      [NoticeBar.name]:NoticeBar,
      [Progress.name]:Progress,
      [Collapse.name]:Collapse,
      [CollapseItem.name]:CollapseItem,
    },
    data() {
      return {
        activeNames:[0,1],
        show1:false,
        rate:90,
        menu: [
          "Home",
          "About Us",
          "Our Services",
          "Our Portfolio",
          "Contact Us",
        ],
      }
    },
   
  mounted() {
   this.rate=10;
   console.log(this.rate)
  

  },
    methods: {
      setup() {
    const activeNames = ref(['1']);
    console.log(activeNames)

    return { activeNames };
  },
    
      
      navigateTo: function(menuItem) {
        var pageName = menuItem.replace(" ", "");
        window.location.href = pageName;
        
      }
    },
  }

</script>
<style scoped>
.resume{
  padding: 0 10px;
}
.cat{
  padding-top: 20px;
}
.icon-me{
  font-size: 100px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
