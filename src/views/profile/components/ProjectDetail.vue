<template>
  <div class="project-detail">
    <div class="post">
      <div class="detail-block">
        <span class="detail-name text-muted">***项目</span>
      </div>
      <ul class="list-detail">
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="detail-block">
        <span class="detail-name text-muted">***项目</span>
      </div>
      <ul class="list-detail">
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
        <li>
          我干了啥
        </li>
      </ul>
    </div>

    <div class="post">
      <div class="detail-block">
        <span class="detail-name text-muted">项目成果展示</span>
      </div>
      <div class="detail-images">
        <el-image
          class="image"
          fit="cover"
          v-for="(item, key) in srcList"
          :key="key"
          :src="item"
          :preview-src-list="srcList"
        >
          <div slot="placeholder">
            加载中...
          </div>
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      srcList: [
        'https://s1.ax1x.com/2020/05/22/YL2utS.png',
        'https://s1.ax1x.com/2020/05/22/YL2utS.png'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-detail {
    .detail-block {
      .detail-name{
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
        width: 200px;
        height: 200px;
        margin-right: 20px;
      }

      .list-detail {
        padding-left: 20px;

        li {
          margin-bottom: 5px;
        }
      }

      .detail-images {
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
