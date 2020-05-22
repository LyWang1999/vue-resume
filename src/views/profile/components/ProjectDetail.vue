<template>
  <div class="project-detail">
    <div class="post" v-for="(project, key1) in projects" :key="key1">
      <div class="detail-block">
        <span class="detail-name text-muted">{{ project.projectName }}</span>
      </div>
      <ul class="list-detail">
        <li v-for="(job, key2) in project.myJobs" :key="key2">
          {{ job }}
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
          v-for="(item, key) in images"
          :key="key"
          :src="item"
          :preview-src-list="images"
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
  props: {
    images: {
      type: Array,
      required: true
    },
    projects: {
      type: Array,
      required: true
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
