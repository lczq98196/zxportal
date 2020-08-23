<template>
  <div class="home">
    <div class="carousel" style="height:390px; width:100% ;background-color:#ccc;overflow:hidden">
      <el-carousel :interval="5000" arrow="always" height="390px">
        <el-carousel-item v-for="couesel in couesels" :key="couesel.img">
          <img :src="couesel.img" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-pad">
      <div class="home-pad-inner">
        <padTitle mTitle="图片<span style='color:#eb7c06'>鉴赏</span>" sTitle="放松心情，享受静谧" />
        <div class="public-course">
          <ul>
            <li v-for="publicCourse in publicCourses" :key="publicCourse.text">
              <a :href="publicCourse.url" target="_blank">
                <img style="width:288px;height:162px" :src="publicCourse.img" alt />
                <p>{{publicCourse.text}}</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- <padTitle mTitle="伊美6大<span style='color:#eb7c06'>贴心服务</span>" sTitle="学伴式专属服务，打造IT精英圈层" /> -->
        <!-- <div class="company-service">
          <img src="/imgs/companyInfo/6大服务.png" alt />
        </div> -->
        <padTitle mTitle="加入<span style='color:#eb7c06'>我们</span>" sTitle="让每个人的职业生涯不留遗憾" />
        <div class="join-us">
          <ul>
            <router-link tag="li" :to="'/recruit?recruit='+(index+1)" v-for="(recruit,index) in recruitSmalls" :key="recruit.id">
              <a href>
                <div>
                  <img :src="recruit.img" alt />
                </div>
                <p class="recruit-title">{{recruit.title}}</p>
                <p class="recruit-text">{{recruit.text}}</p>
              </a>
            </router-link>
          </ul>
        </div>
        <padTitle mTitle="合作<span style='color:#eb7c06'>伙伴</span>" sTitle="人生道路上伙伴的支撑不可或缺" />
        <div class="buddy-list">
          <ul>
            <li v-for="buddy in buddys" :key="buddy.img">
              <a href>
                <img :src="buddy.img" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import padTitle from "@/components/PadTitle.vue";
var that;
export default {
  name: "Home",
  data() {
    return {
      couesels: [],
      publicCourses: [],
      recruitSmalls: [],
      buddys: []
    };
  },
  mounted() {
    that = this;
    this.getCouesel();
    this.getPublicCourses();
    this.getRecruitSmall();
    this.getBuddys();
  },
  methods: {

    getCouesel() {
      this.$getJsonResAsync("couesel", resData => {
        that.couesels = resData;
      });
    },
    getPublicCourses() {
      this.$getJsonResAsync("public", resData => {
        that.publicCourses = resData;
      });
    },
    getRecruitSmall() {
      this.$getJsonResAsync("recruitSmall", resData => {
        that.recruitSmalls = resData;
      });
    },
    getBuddys() {
      this.$getJsonResAsync("buddy", resData => {
        that.buddys = resData;
      });
    }
    // getAxiosRes(jsonName, func) {
    //   if (jsonName == null) return;
    //   this.$http.get(`/jsons/${jsonName}.json`).then(function(res) {
    //     func(res.data);
    //   });
    // }
  }
  // components: {
  //   padTitle
  // }
};
</script>

<style lang="scss" scoped>
a {
  color: #333;
  text-decoration: none;
}
.home-pad {
  padding-top: 10px;
  margin-top: 60px;
  margin-bottom: 60px;
  .home-pad-inner {
    width: 88%;
    margin: auto;

    .public-course {
      margin-bottom: 110px;
      ul {
        text-align: center;
        li {
          list-style: none;
          display: inline-block;
          margin-left: 36px;
          margin-top: 36px;
          img {
            width: 288px;
          }
          p {
            font-size: 14px;
            text-align: center;
            padding: 6px;
          }
        }
      }
    }
    .company-service {
      margin-top: 60px;
      text-align: center;
      margin-bottom: 116px;
    }
    .join-us {
      margin-top: 68px;
      margin-bottom: 116px;
      ul {
        width: 1266px;
        margin: auto;
        text-align: center;
        li:nth-child(1) {
          margin-left: 0;
        }
        li {
          vertical-align: top;
          height: 320px;
          display: inline-block;
          margin-left: 100px;
          div {
            width: 224px;
            height: 224px;
            position: relative;
            overflow: hidden;
            img {
              position: relative;
              top: 0;
              left: 0;
              width: 224px;
              height: 224px;
              transition: 300ms;
            }
          }
          .recruit-title {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            padding: 6px 0;
          }
          .recruit-text {
            width: 224px;
            font-size: 14px;
            text-align: left;
            padding: 6px;
          }
        }
        li:hover {
          img {
            top: -31px;
            left: -31px;
            width: 286px;
            height: 286px;
          }
          .recruit-title {
            color: #eb7c06;
          }
        }
      }
    }
    .buddy-list {
      ul {
        width: 1266px;
        margin: auto;
        li {
          width: 176px;
          height: 56px;
          position: relative;
          top: 0;
          list-style: none;
          display: inline-block;
          margin-left: 28px;
          margin-top: 28px;
          cursor: pointer;
          transition: 500ms;
        }
        li:hover {
          top: -10px;
          //  box-shadow: 0 6px 18px #999;
        }
      }
    }
  }
}
.el-carousel {
  img {
    width: 100%;
    height: 390px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>