<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
          <div class="thank-watching">
            <h3>致谢</h3>
            <p>感谢您花时间阅读我的简历</p>
            <p>期待能有机会和您共事</p>
          </div>
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="个人能力" name="SelfCapability">
                <self-capability />
              </el-tab-pane>
              <el-tab-pane label="项目详情" name="project-detail">
                <project-detail />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import UserCard from './components/UserCard'
import SelfCapability from './components/SelfCapability'
import ProjectDetail from './components/ProjectDetail'

export default {
  name: 'Profile',
  components: { UserCard, SelfCapability, ProjectDetail },
  data () {
    return {
      user: {
        name: '吴彦祖',
        role: '高材生',
        email: '*********@gmail.com',
        avatar: 'https://s1.ax1x.com/2020/05/20/YouGF0.png'
      },
      activeTab: 'SelfCapability'
    }
  }
}
</script>

<style lang="scss" scoped>
  .thank-watching {
    margin: 5px 10px 20px;
    border-top: 3px solid #dfe6ec;
    text-align: center;
    opacity: .9;

    h3 {
      color: #5a5e66;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin: 5px 0;
      color: #666;
    }
  }
</style>
