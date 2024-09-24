<template>
  <div id="wrap">
    <div class="inner">
      <div class="footerTop">
      <ul>
        <li class="bold"><a href="">개인정보처리방침</a></li>
        <li class="bold"><a href="">신용정보활용체제</a></li>
        <li class="bold"><a href="">전자민원</a></li>
        <li><a href="">사고신고</a></li>
        <li><a href="">신한지킴이</a></li>
        <li><a href="">보호금융상품등록부</a></li>
        <li class="bold"><a href="">상품공시실</a></li>
        <li><a href="">영업점안내</a></li>
        <li><a href="">상담신청</a></li>
        <li><a href="">웹접근성이용안내</a></li>
        <li class="bold"><a href="">위치기반서비스약관</a></li>
      </ul>
      <div class="tel">
        <h1>고객센터</h1> <p>1599 - 8000</p>
        <h1>평일</h1><p> 09:00 - 18:00</p>
      </div>
      </div>
      <div class="footerDown">
        <ul>
          <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href=""><img src="../assets/img/Naver.png" alt=""></a></li>
          <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
        <form action="#">
          <select name="" id="">
            <option value="">글로벌</option>
            <option value="">미국</option>
            <option value="">인도</option>
            <option value="">유럽신한은행</option>
            <option value="">일본</option>
            <option value="">중국</option>
            <option value="">홍콩</option>
            <option value="">싱가폴</option>
            <option value="">베트남</option>
            <option value="">인도네시아</option>
            <option value="">캄보디아</option>
            <option value="">카자흐스탄</option>
            <option value="">우즈베키스탄</option>
            <option value="">멕시코</option>
            <option value="">미얀마</option>
            <option value="">캐나다</option>
            <option value="">아랍에미리트</option>
            <option value="">필리핀</option>
            <option value="">글로벌</option>
            <option value="">호주</option>
          </select>
          <select name="" id="">
            <option value="">패밀리</option>
            <option value="">신한금융지주회사</option>
            <option value="">신한카드</option>
            <option value="">신한투자증권</option>
            <option value="">신한라이프</option>
            <option value="">신한캐피탈</option>
            <option value="">신한자산운용</option>
            <option value="">제주은행</option>
            <option value="">신한저축은행</option>
            <option value="">신한자산신탁</option>
            <option value="">신한DS</option>
            <option value="">신한펀드파트너스</option>
            <option value="">신한신용정보</option>
            <option value="">신한리츠운용</option>
            <option value="">신한AI</option>
            <option value="">신한벤처투자</option>
            <option value="">아름다운 은행</option>
            <option value="">신한에스버드 농구단</option>
            <option value="">신한 다모아</option>
          </select>
        </form>
      </div>
      <div class="copy">
        <small>©SHINHAN BANK.All rights reserved</small>
      </div>
    </div>
  </div>
  <div class="search">
    <i class="fa-solid fa-magnifying-glass"></i><p>검색</p>
  </div>
  <div class="goTop" @click="goTop">
    <i class="fa-solid fa-angle-up"></i><p>TOP</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    goTop(){
      window.scrollTo({top:0,behavior: 'smooth'})
    }
  }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/Footer.scss'
</style>