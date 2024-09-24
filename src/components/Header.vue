<template>
  <div id="wrap">
    <div class="inner">
      <h1><RouterLink to="/"><img src="../assets/img/logo.jpg" alt="logo"></RouterLink></h1>
      <div class="menu">
        <ul class="user-menu">
          <li><RouterLink to="/Service">금융서비스</RouterLink></li>
          <li><a href="#">고객센터</a></li>
          <li><a href="#">은행소개</a></li>
          <li><a href="#">Tops Club</a></li>
          <li><RouterLink to="/Card">카드</RouterLink></li>
          <li><a href="#">증권</a></li>
          <li><a href="#">신한멤버스</a></li>
          <li><a href="#">GLOBAL</a></li>
        </ul>
        <ul class="main-menu">
          <li @mouseenter="show=true" @mouseleave="show=false"><a href="#">개인</a>
            <div class="sub-menu" v-show="show">
              <div class="inner">
                <ul>
                  <li><a href="#">조회</a></li>
                  <li><a href="#">이체</a></li>
                  <li><a href="#">금융상품</a></li>
                  <li><a href="#">공과금/법원</a></li>
                  <li><a href="#">뱅킹보안관리</a></li>
                  <li><a href="#">기타금융</a></li>
                  <li><a href="#">부가서비스</a></li>
                  <li><a href="#">사용자관리</a></li>
                  <li><a href="#">카드/증권</a></li>
                </ul>
                <ul>
                  <li><a href="#">기업상품몰</a></li>
                  <li><a href="#">중소기업지원센터</a></li>
                  <li><a href="#">인증센터</a></li>
                  <li><a href="#">기업고객지원</a></li>
                  <li><a href="#">자금관리</a></li>
                  <li><a href="#">보안센터</a></li>
                  <li><a href="#">기업서식함</a></li>
                </ul>
                <ul>
                  <li><a href="#">예금/신탁</a></li>
                  <li><a href="#">ISA</a></li>
                  <li><a href="#">대출</a></li>
                  <li><a href="#">펀드</a></li>
                  <li><a href="#">외환</a></li>
                  <li><a href="#">퇴직연금</a></li>
                  <li><a href="#">골드/실버</a></li>
                  <li><a href="#">보험/공제</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li @mouseenter="show=true" @mouseleave="show=false"><a href="#">기업</a></li>
          <li @mouseenter="show=true" @mouseleave="show=false"><a href="#">금융상품</a></li>
          <li class="bar"><a href=""><i class="fa-solid fa-bars"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/Header.scss';
</style>