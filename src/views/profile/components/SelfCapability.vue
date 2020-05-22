<template>
  <div class="self-capability">
    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">技能清单</span>
      </div>
      <ul class="list-capability">
        <li v-for="(item, key) in userCapability.skills" :key="key">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">开源项目</span>
      </div>
      <ul class="list-capability">
        <li v-for="(item, key) in userCapability.repos" :key="key">
          <a
            style="color: cornflowerblue"
            :href="item"
            target="_blank"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">技术文章</span>
      </div>
      <ul class="list-capability">
        <li v-for="(item, key) in userCapability.articles" :key="key">
          <a
            style="color: cornflowerblue"
            :href="item.articleLink"
            target="_blank"
          >
            {{ item.articleTile }}
          </a>
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">项目经历</span>
      </div>
      <ul class="list-capability">
        <li v-for="(item, key) in userCapability.experience" :key="key">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="capability-block">
        <span class="capability-name text-muted">在校任职</span>
      </div>
      <ul class="list-capability">
        <li v-for="(item, key) in userCapability.stuJobs" :key="key">
          {{ item }}
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
  props: {
    //   carouselImages: [
    //     'https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg',
    //     'https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg',
    //     'https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg',
    //     'https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg'
    //   ],
    //   avatarPrefix,
    //   carouselPrefix
    userCapability: {
      type: Object,
      required: true
    }
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
