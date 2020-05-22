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
                <self-capability
                  :user-capability="userCapability"
                />
              </el-tab-pane>
              <el-tab-pane label="项目详情" name="project-detail">
                <project-detail
                  :images="projectDetail.images"
                  :projects="projectDetail.projects"
                />
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
      // 关于我
      user: {
        name: '吴彦祖',
        role: '高材生',
        education: '美国俄勒冈大学 - 计算机学院 - 软件工程（雾）',
        phone: '23333333333',
        email: '23333333333@gmail.com',
        qq: '2333333333',
        expectedJob: '爪哇后端攻城狮',
        expectedCity: 'M18星云',
        giHubLink: 'https://github.com/kuluoluohaoxiuyi',
        blogLink: 'https://www.cnblogs.com/kuluo/',
        avatar: 'https://s1.ax1x.com/2020/05/20/YouGF0.png'
      },
      // 个人能力
      userCapability: {
        skills: [
          'WEB框架：SpringBoot / SpringMVC / MyBatis / Dubbo / Netty',
          '大数据框架：Spark / Flume / Kafka / ZooKeeper',
          '前端框架：Bootstrap / Vue / Nodejs',
          '前端工具：Sass / Less / ES2015',
          '数据库相关：MySQL / HBase / Redis',
          '版本管理和自动化部署工具：Git / Maven'
        ],
        repos: [
          'https://github.com/kuluoluohaoxiuyi/Hotel-Management-System-Springboot',
          'https://github.com/kuluoluohaoxiuyi/Hotel-Management-System-Vue'
        ],
        articles: [
          {
            articleTile: '实时流处理的单节点伪分布式环境搭建',
            articleLink: 'https://www.cnblogs.com/kuluo/p/12586627.html'
          },
          {
            articleTile: 'Netty + Spring + ZooKeeper搭建轻量级RPC框架',
            articleLink: 'https://www.cnblogs.com/kuluo/p/12722255.html'
          }
        ],
        experience: [
          '参与Apache顶级项目',
          '参与WEB通信协议制订'
        ],
        stuJobs: [
          '担任学生会主席',
          '学校服务器维护'
        ]
      },
      // 项目详情
      projectDetail: {
        images: [
          'https://s1.ax1x.com/2020/05/22/YL2utS.png',
          'https://s1.ax1x.com/2020/05/22/YL2utS.png'
        ],
        projects: [
          {
            projectName: '***项目',
            myJobs: [
              '我干了啥',
              '我干了啥',
              '我干了啥'
            ]
          },
          {
            projectName: '***项目',
            myJobs: [
              '我干了啥',
              '我干了啥',
              '我干了啥'
            ]
          }
        ]
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
