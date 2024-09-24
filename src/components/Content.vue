<template>
  <div id="wrap">
    <div class="inner">
      <section class="section01" data-aos="fade-up" data-aos-duration="1000">
        <div class="inner">
          <ul>
            <li><RouterLink to="/Save">예/적금신규</RouterLink></li>
            <li><a href="">자동이체</a></li>
            <li><a href="">공과금납부</a></li>
            <li><a href="">인터넷환전</a></li>
            <li><a href="">환율조회</a></li>
            <li><a href="">펀드신규</a></li>
            <li><a href="">영업점안내</a></li>
          </ul>
        </div>
      </section>
      <section class="section02" data-aos="fade-up" data-aos-duration="1000">
        <div class="section01-01">
          <div class="mainText">
            <h1>금융상품</h1>
            <p>정성껏 준비한 다양하고 풍성한<br> 혜택으로 고객님께 다가갑니다.</p>
          </div>
        <div class="icon">
          <div class="text">
            <div class="imgBox">
              <img src="../assets/img/ico_mall_01.png" alt="">
            </div>
            <h1>예금</h1>
          </div>
          <div class="text">
            <div class="imgBox">
              <img src="../assets/img/ico_mall_02.png" alt="">
            </div>
            <h1>펀드</h1>
          </div>
          <div class="text">
            <div class="imgBox">
              <img src="../assets/img/ico_mall_03.png" alt="">
            </div>
            <h1>대출</h1>
          </div>
          <div class="text">
            <div class="imgBox">
              <img src="../assets/img/ico_mall_05.png" alt="">
            </div>
            <h1>외환</h1>
          </div>
          <div class="text">
            <div class="imgBox">
              <img src="../assets/img/ico_mall_09.png" alt="">
            </div>
            <h1>퇴직 연금</h1>
          </div>
          </div>
        </div>
      </section>
      <section class="section03" data-aos="fade-up" data-aos-duration="1000">
        <div class="inner">
        <div class="notice">
          <div class="notice01">
            <div class="click">
              <h4 @click="notice" :class="{on}">새소식</h4>
              <h4 @click="notice" :class="{off}">보안뉴스</h4>
            </div>
            <a href=""><img src="../assets/img/add.png" alt="">더보기</a>
          </div>
            <ul class="notice02" v-if="show">
              <li><a href="">금융거래목적 확인을 위한 서류 제출 안내</a><p>2024.08.26</p></li>
              <li><a href="">비로그인 모바일 OTP 발급/재발급 중지 예정 안내</a><p>2024.08.08</p></li>
              <li><a href="">2024년 서울청년문화패스 2차 모집 안내</a><p>2024.08.05</p></li>
            </ul>
            <ul class="notice03" v-else>
              <li><a href="">검찰 사칭 보이스 피싱 소비자경보</a><p>2022.08.02</p></li>
              <li><a href="">개인정보 노출사실 전파 업무 개정 공지</a><p>2021.10.15</p></li>
              <li><a href="">추석 명절,선물 배송 등을 사칭한 스미싱 주의!</a><p>2021.09.15</p></li>
            </ul>
          </div>
        <div class="service">
          <h1>간편조회서비스/증명서/진위확인 서비스</h1>
          <ul>
            <li><a href="">계좌조회</a></li>
            <li><a href="">대학등록금</a></li>
            <li><a href="">여신증명서 조회</a></li>
            <li><a href="">환율조회</a></li>
            <li><a href="">지급보증서 조회</a></li>
            <li><a href="">자기앞수표 조회</a></li>
            <li><a href="">법원업무</a></li>
            <li><a href="">예금잔액증명서 조회</a></li>
            <li><a href="">전자상환위임장 조회</a></li>
          </ul>
        </div>
        </div>
      </section>
      <section class="section04" data-aos="fade-up" data-aos-duration="1000">
        <div class="inner">
        <h1>신한은행의 추천상품을 확인해 보세요.</h1>
        <ul>
          <li>
            <h1>예금</h1>
            <img src="../assets/img/best01.png" alt="">
            <h2>신한 안녕, 반가워 적금</h2>
            <p>새롭게 금융거래를 시작하는<br>고객님을 응워하는 적금!</p>
          </li>
          <li>
            <h1>예금</h1>
            <img src="../assets/img/best02.png" alt="">
            <h2>주택청약 종합저축</h2>
            <p>내집마련과 목돈마련 준비<br>주택청약종합저축으로 한번에!</p>
          </li>
          <li>
            <h1 class="orange">대출</h1>
            <img src="../assets/img/best03.png" alt="">
            <h2>신한 MY CAR 대출</h2>
            <p>자동차 구입시 은행 방문없이<br>대출실행까지 되는 자동차대출</p>
          </li>
          <li>
            <h1 class="green">골드/실버</h1>
            <img src="../assets/img/best04.png" alt="">
            <h2>신한골드리슈골드테크</h2>
            <p>금의 입출금 거래가<br>자유로운 대표 골드상품</p>
          </li>
        </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show : true,
      on : false,
      off : true
    }
  },
  methods:{
    notice(){
      this.show = !this.show
      this.on = !this.on
      this.off = !this.off
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/Content.scss'
</style>