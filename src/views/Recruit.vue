<template>
  <div>
    <banner imgUrl="/imgs/banner/诚聘英才.jpg" />
    <inner>
      <padTitle mTitle="诚聘<span style='color:#eb7c06'>英才</span>" sTitle="广阔的舞台和热情的观众在等待着你来挥洒才华" />
      <div
        :id="'recruit'+(index+1)"
        class="recruit-item"
        v-for="(recruit,index) in recruits"
        :key="recruit.id"
      >
        <img :src="recruit.img" :class="isOdd(index)?'img-odd':'img-even'" alt />
        <div class="join-text">
          <p class="r-title">{{recruit.title}}</p>
          <p class="r-text">{{recruit.text}}</p>
          <ul>
            <li v-for="item in recruit.items" :key="item.itemTitle">
              <p>{{item.itemTitle}}</p>
              <ul>
                <li v-for="(content,indexC) in item.itemContents" :key="indexC">{{content.content}}</li>
              </ul>
            </li>
          </ul>
          <p class="r-noti">
            高薪诚聘，请邮箱联系：
            <span style="color:#eb7c06">hr@.....Net</span>
          </p>
        </div>
      </div>
    </inner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recruits: []
    };
  },
  mounted() {
    this.getRecruit();
  },
  methods: {
    getRecruit() {
      this.$getJsonResAsync("recruitBig", data => {
        this.recruits = data;
        this.$nextTick(function() {
          var rit = this.$route.query.recruit;
          if (rit != null) {
            //首先过去当前标签距离顶部的距离
            var topLength = $("#recruit" + rit).offset().top;
            $("html").animate({ scrollTop: topLength }, 600);
          }
        });
      });
    },
    isOdd(index) {
      return index % 2 == 0;
    }
  },
};
</script>

<style lang="scss" scoped>
.recruit-item {
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 120px;
  .img-odd {
    float: left;
    margin-right: 80px;
  }
  .img-even {
    float: right;
  }
  .join-text {
    float: left;
    width: 600px;
    .r-title {
      font-size: 24px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .r-text {
      font-size: 12px;
    }
    .r-noti {
      margin-top: 20px;
      font-size: 14px;
      font-weight: bold;
    }
    ul {
      li {
        margin-top: 25px;
        list-style: none;
        p {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        li {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>