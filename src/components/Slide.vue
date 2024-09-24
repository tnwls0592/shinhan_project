<template>
  <div id="wrap">
    <div class="inner">
      <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        >
        <swiper-slide class="slide01"></swiper-slide>
        <swiper-slide class="slide02"></swiper-slide>
        <swiper-slide class="slide03"></swiper-slide>
        <swiper-slide class="slide04"></swiper-slide>
        <swiper-slide class="slide05"></swiper-slide>
      </swiper>
      <div id="btn">
        <div class="innerBtn">
          <h4>아이디 로그인</h4>
          <div class="login">
            <div class="id">
              <input type="text" placeholder=" 아이디">
              <input type="text" placeholder=" 비밀번호">
            </div>
            <div class="loginBtn">
              <p>로그인</p>
            </div>
          </div>
          <div class="check">
            <input type="checkbox"> 아이디 기억하기
          </div>
          <div class="function">
            <p class="btn1"><img src="../assets/img/login01.png" alt="">금융인증서<br>로그인</p>
            <p class="btn2"><img src="../assets/img/lock_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="">공인인증서<br>로그인</p>
            <p class="btn3">조회</p>
            <p class="btn4">이체</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/Slide.scss';
</style>