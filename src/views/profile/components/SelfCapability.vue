<template>
  <div class="self-capability">
    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">技能清单</span>
      </div>
      <ul class="list-capability">
        <li>
          WEB框架：SpringBoot / SpringMVC / MyBatis / Dubbo / Netty
        </li>
        <li>
          大数据框架：Spark / Flume / Kafka / ZooKeeper
        </li>
        <li>
          前端框架：Bootstrap / Vue / Nodejs
        </li>
        <li>
          前端工具：Sass / Less / ES2015
        </li>
        <li>
          数据库相关：MySQL / HBase / Redis
        </li>
        <li>
          版本管理和自动化部署工具：Git / Maven
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">开源项目</span>
      </div>
      <ul class="list-capability">
        <li>
          <a
            style="color: cornflowerblue"
            href="https://github.com/kuluoluohaoxiuyi/Hotel-Management-System-Springboot"
            target="_blank"
          >
            https://github.com/kuluoluohaoxiuyi/Hotel-Management-System-Springboot
          </a>
        </li>
        <li>
          <a
            style="color: cornflowerblue"
            href="https://github.com/kuluoluohaoxiuyi/Hotel-Management-System-Vue"
            target="_blank"
          >
            https://github.com/kuluoluohaoxiuyi/Hotel-Management-System-Vue
          </a>
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">技术文章</span>
      </div>
      <ul class="list-capability">
        <li>
          <a
            style="color: cornflowerblue"
            href="https://www.cnblogs.com/kuluo/p/12586627.html"
            target="_blank"
          >
            实时流处理的单节点伪分布式环境搭建
          </a>
        </li>
        <li>
          <a
            style="color: cornflowerblue"
            href="https://www.cnblogs.com/kuluo/p/12722255.html"
            target="_blank"
          >
            Netty + Spring + ZooKeeper搭建轻量级RPC框架
          </a>
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">项目经历</span>
      </div>
      <ul class="list-capability">
        <li>
          参与Apache顶级项目
        </li>
        <li>
          参与WEB通信协议制订
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">在校任职</span>
      </div>
      <ul class="list-capability">
        <li>
          担任学生会主席
        </li>
        <li>
          学校服务器维护
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name">获奖证书</span>
      </div>
      <div class="capability-images">
        <el-carousel :interval="6000" type="card" height="220px">
<!--          <el-carousel-item v-for="item in carouselImages" :key="item">-->
<!--            <img :src="item+carouselPrefix" class="image">-->
<!--          </el-carousel-item>-->
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
// const avatarPrefix = '?imageView2/1/w/80/h/80'
// const carouselPrefix = '?imageView2/2/h/440'

export default {
  data () {
    // return {
    //   carouselImages: [
    //     'https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg',
    //     'https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg',
    //     'https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg',
    //     'https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg'
    //   ],
    //   avatarPrefix,
    //   carouselPrefix
    // }
  }
}
</script>

<style lang="scss" scoped>
.self-capability {
  .capability-block {
    .capability-name{
      display: block;
      padding: 2px 0;
      font-size: 20px;
      color: #000;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;

    .image {
      width: 100%;
      height: 100%;
    }

    .list-capability {
      padding-left: 20px;

      li {
        margin-bottom: 5px;
      }
    }

    .capability-images {
      padding-top: 20px;
    }
  }
}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  position: relative;
  top: 40%;
  left: 50%;
}

.el-carousel__item {
  background-color: #99a9bf;
}
</style>
