<template>
  <div id="wrap">
      <div class="slide" data-aos="fade-up" data-aos-duration="1000">
        <div class="list">
          <ul v-for="(list,index) in lists" :key="index" @click.prevent="currentList = index" :class="{'active' : currentList === index}">
            <li><p>{{list.name}}</p></li>
          </ul>
        </div>
        <img src="../assets/img/hand.png" alt="">
        <div class="screen1" v-if="currentList === 0">
          <div class="text">
            <h1>신한 SOL뱅크</h1>
            <h2>스마트폰을 통해 조회, 이체, 펀드, 외환 등의 은행업무와<br>머니버스, 자산관리 등 금융종합서비스를 제공합니다.</h2>
            <div class="innerText">
              <h4>서비스 안내<i class="fa-solid fa-arrow-right"></i></h4>
              <h4>설치 및 사용방법<i class="fa-solid fa-arrow-right"></i></h4>
              <h4>스마트폰 인증서 복사<i class="fa-solid fa-arrow-right"></i></h4>
            </div>
          </div>
          <img src="../assets/img/screen01.png" alt="" class="screen01">
        </div>
        <div class="screen2" v-if="currentList === 1">
          <div class="text">
            <h1>신한 쏠(SOL) mini</h1>
            <h2>스마트폰을 통해 조회, 이체, 간편앱출금 등의 은행업무와<br>금융종합서비스를 제공합니다.</h2>
            <div class="innerText">
              <h4>서비스 안내<i class="fa-solid fa-arrow-right"></i></h4>
              <h4>설치 및 사용방법<i class="fa-solid fa-arrow-right"></i></h4>
              <h4>스마트폰 인증서 복사<i class="fa-solid fa-arrow-right"></i></h4>
            </div>
          </div>
          <img src="../assets/img/screen02.png" alt="" class="screen02">
        </div>
        <div class="screen3" v-if="currentList === 2">
          <div class="text">
            <h1>신한 쏠비즈(SOL Biz)</h1>
            <h2>스마트폰을 통해 조회, 이체, 외환, 대출 등의 은행업무와 당타행<br>통합자금관리를 돕는 신한은행 대표 모바일 기업뱅킹 앱입니다.</h2>
            <div class="innerText">
              <h4>서비스 안내<i class="fa-solid fa-arrow-right"></i></h4>
              <h4>설치 및 사용방법<i class="fa-solid fa-arrow-right"></i></h4>
              <h4>스마트폰 인증서 복사<i class="fa-solid fa-arrow-right"></i></h4>
            </div>
          </div>
          <img src="../assets/img/screen03.png" alt="" class="screen03">
        </div>
      </div>
    <div class="inner" data-aos="fade-up" data-aos-duration="1000">
      <h1>로그인</h1>
    </div>
    <div class="bottom" data-aos="fade-up" data-aos-duration="1000">
      <div class="bi">
      <div class="left">
        <img src="../assets/img/icon01.png" alt="">
        <div class="leftText">
          <h1>알아두면 유용한 <span>최신세무정보</span></h1>
          <p>실시간 업데이트 되는 세무뉴스와<br>쏠쏠한 세테크 정보</p>
        </div>
      </div>
      <div class="right">
        <h1>SELF BANKING ZONE</h1>
        <div class="rightText">
          <img src="../assets/img/icon02.png" alt="">
          <p>화상인증, 바이오 인증으로 창구보다 완벽한 셀프뱅킹</p>
        </div>
      </div>
      </div>
    </div>
    <div class="under" data-aos="fade-up" data-aos-duration="1000">
      <div class="underLine">
        <h1>다양한 생활정보</h1>
        <div class="r">
          <h2>상생금융<p>고객과 함께하는 상생금융</p><i class="fa-solid fa-angle-right"></i></h2>
          <h2>주택도시기금<p>내집 마련의 꿈</p><i class="fa-solid fa-angle-right"></i></h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      currentList: 0,
      lists: [
        {
          name: '신한 SOL뱅크'
        },
        {
          name: '신한 쏠(SOL) mini'
        },
        {
          name: '신한 쏠비즈(SOL Biz)'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/Service.scss';
</style>