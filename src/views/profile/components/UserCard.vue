<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>关于我</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div style="margin-left: -10px">
            <br/>
            ( •̀ ω •́ )y
          </div>
        </pan-thumb>
      </div>

      <div class="box-center">
        <div class="user-name text-center">
          <svg-icon icon-class="male" />
          {{ user.name }}
        </div>
        <div class="user-role text-center text-muted">{{ user.role }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>教育经历</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ user.education }}
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="message" /><span>联系方式</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <strong>手机：</strong>{{ user.phone }}
          </div>
          <div class="text-muted">
            <strong>Email：</strong>{{ user.email }}
          </div>
          <div class="text-muted">
            <strong>QQ：</strong>{{ user.qq }}
          </div>
        </div>
      </div>

      <div class="user-experience user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="guide" /><span>应聘职位</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <strong>期望职位：</strong>{{ user.expectedJob }}
          </div>
          <div class="text-muted">
            <strong>期望城市：</strong>{{ user.expectedCity }}
          </div>
        </div>
      </div>

      <div class="user-extern-link user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="link" /><span>仓库和博客</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <strong>GitHub：</strong>
            <a
              style="color: cornflowerblue"
              href="https://github.com/kuluoluohaoxiuyi"
              target="_blank"
            >
              {{ user.giHubLink }}
            </a>
          </div>
          <div class="text-muted">
            <strong>博客园：</strong>
            <a
              style="color: cornflowerblue"
              href="https://www.cnblogs.com/kuluo/"
              target="_blank"
            >
              {{ user.blogLink }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
 .box-center {
   margin: 0 auto;
   display: table;
 }

 .text-muted {
   color: #777;
   margin-bottom: 5px;
 }

 .user-profile {
   .user-name {
     font-weight: bold;
   }

   .box-center {
     padding-top: 10px;
   }

   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }

   .box-social {
     padding-top: 30px;

     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }

   .user-follow {
     padding-top: 20px;
   }
 }

 .user-bio {
   margin-top: 20px;
   color: #606266;

   span {
     padding-left: 4px;
   }

   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;

     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
 }
</style>
