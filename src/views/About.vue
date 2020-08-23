<template>
  <div class="about">
   <banner imgUrl="/imgs/banner/关于我们.jpg"/>
    <div class="about-us">
      <padTitle mTitle="公司介绍" sTitle="我们的互联网+时代" />
      <inner>
        <img src="/imgs/others/aboutTextImage.jpg" alt />
        <div class="about-detail-content">
          <p>
            <b>{{about.introduce}}</b>
            <br />
            {{about.detail}}
          </p>
          <ul>
            <li v-for="service in about.services" :key="service.title">
              <span>{{service.title}}</span>
              <p>{{service.text}}</p>
            </li>
           
          </ul>
        </div>
      </inner>
    </div>
    <div class="about-contact">
      <inner width="880px">
        <padTitle mTitle="联系我们" />
        <img src="/imgs/icons/contact.jpg" alt="">
        <div class="contact-detail">
          <p>企业 QQ：8888888</p>
          <p>企业微信：lczq98196</p>
          <p>电　　话：17319214119</p>
          <p>地　　址：北京市朝阳区</p>
          <p>公司邮箱：xxx@qq.com</p>
          <p></p>
        </div>
      </inner>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      about:{}
    }
  },
  mounted(){
    this.getAbout();
  },
  methods:{
    getAbout(){
      this.$getJsonResAsync("about",data=>{
        this.about = data;
      })
    }
  }
};
</script>

<style lang="scss" scoped>

.about-us {
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  img {
    float: left;
    width: 520px;
    height: 290px;
  }
  .about-detail-content {
    float: right;
    width: 600px;
    text-align: left;
    line-height: 25px;
    font-size: 14px;
    > p {
      margin: 0 0 20px 0;
    }
    ul {
      li {
        font-weight: bold;
        list-style: none;
        span {
          color: red;
        }
        p {
          padding-left: 5px;
          display: inline-block;
          color: #666;
        }
      }
    }
  }
}
.about-contact{
  background-color: #F6F6F6;
  overflow: hidden;
  img{
    float: left;
  }
  .contact-detail{
    float: left;
    margin-left: 80px;
    text-align: left;
    font-size: 16px;
    p{
      margin-bottom: 12px;
    }
  }
}
</style>