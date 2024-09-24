<template>
  <div id="wrap">
    <div class="bg"></div>
    <div class="inner">
      <section class="section01" data-aos="fade-up" data-aos-duration="1000">
        <div class="flex">
          <div class="slide01 opacity">
            <img src="../assets/img/Save_slide01.png" alt="">
            <a href="">상품 더보기<i class="fa-solid fa-angle-right"></i></a>
          </div>
          <div class="slide02 opacity2">
            <img src="../assets/img/Save_slide02.png" alt="">
            <a href="">상품 더보기<i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
        <div class="text">
          <div class="text01">
            <div class="text01_01">
              <h1>맞춤최고금리 설계</h1>
              <p>우대금리조건을 체크해<br>최고 금리상품을 제시</p>
            </div>
            <a href="">더 알아보기<i class="fa-solid fa-angle-right"></i></a>
          </div>
          <div class="text02">
            <div class="text02_02">
              <h1>잔액스윙</h1>
              <p>통장에 방치된 돈을 월말마다<br>고금리 상품으로 스윙</p>
            </div>
            <a href="">더 알아보기<i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </section>
      <section class="section02" data-aos="fade-up" data-aos-duration="1000">
        <div class="mainText">
          <h1>신한은행의 추천 상품</h1>
          <p>전체 상품 확인하기<i class="fa-solid fa-angle-right"></i></p>
        </div>
        <div class="tab">
          <ul v-for="(tab,index) in tabList" :key="index" @click.prevent="currentTab = index" :class="{'active' : currentTab === index}">
            <li>{{ tab.name }}</li>
          </ul>
        </div>
        <div class="best00" v-if="currentTab === 0">
          <div class="product product01">
            <h3>모바일</h3>
            <h1>언제든 적금</h1>
            <p>한 달만 지나면 언제든 중도해지를 하더라도 약정<br>이자율을 제공하여 자금 활용에 편의를 더한 상품</p>
            <p>최고 연 <span>7.70%</span></p>
            <p>최저 연 <span>4.20%</span><br>(12개월 세전)</p>
            <img src="../assets/img/bg_dtpig_d02.png" alt="">
          </div>
          <div class="serve">
            <div class="product product02">
              <h3>모바일</h3>
              <h1>청년 처음적금</h1>
              <p>최고 연 <span>8.00%</span></p>
              <p>최저 연 <span>3.50%</span> (12개월 세전)</p>
            </div>
            <div class="product product03">
              <h3>모바일</h3>
              <h1>40주, 맘(Mom) 적금</h1>
              <p>최고 연 <span>5.00%</span></p>
              <p>최저 연 <span>2.50%</span> (12개월 세전)</p>
            </div>
            <div class="product product04">
              <h3>모바일</h3>
              <h1>신한 슈퍼SOL 포인트 적금</h1>
              <p>최고 연 <span>5.00%</span></p>
              <p>최저 연 <span>2.00%</span> (6개월 세전)</p>
            </div>
            <div class="product product05">
              <h3>모바일</h3>
              <h1>신한 돌려받는 장학적금</h1>
              <p>최고 연 <span>5.00%</span></p>
              <p>최저 연 <span>2.50%</span> (6개월 세전)</p>
            </div>
          </div>
        </div>
        <div class="best01" v-if="currentTab === 1">
          <div class="product product01">
            <h3>모바일</h3>
            <h1>신한 My플러스 정기예금</h1>
            <p>1,3,6,12개월 필요한 기간 선택해서 50만원<br>이상 1억원 이내 가입 가능한 정기예금</p>
            <p>최고 연 <span>3.45%</span></p>
            <p>최저 연 <span>3.25%</span> (12개월 세전)</p>
            <img src="../assets/img/bg_dtpig_d03.png" alt="">
          </div>
          <div class="serve">
            <div class="product product02">
              <div class="productText">
                <h3>인터넷</h3><h3>모바일</h3>
              </div>
              <h1>쏠편한 정기예금</h1>
              <p>최고 연 <span>3.35%</span></p>
              <p>최저 연 <span>3.35%</span> (12개월 세전)</p>
            </div>
            <div class="product product03">
              <h1>신한 프리미어 토지보상</h1>
              <p></p>
              <p>최고 연 <span>2.25%</span></p>
              <p>최저 연 <span>2.25%</span> (6개월 세전)</p>
            </div>
            <div class="product product04">
              <h3>인터넷</h3>
              <h1>신한 S드림(DREAM) 정</h1>
              <p>최고 연 <span>2.65%</span></p>
              <p>최저 연 <span>2.65%</span> (6개월 세전)</p>
            </div>
            <div class="product product05">
              <h3>인터넷</h3>
              <h1>Tops 회전 정기예금</h1>
              <p>최고 연 <span>2.45%</span></p>
              <p>최저 연 <span>2.45%</span> (12개월 세전)</p>
            </div>
          </div>
        </div>
        <div class="best02" v-if="currentTab === 2">
          <div class="product product01">
            <h3>모바일</h3>
            <h1>신한 슈퍼SOL 통장</h1>
            <p>신한 슈퍼SOL 전용상품으로 우대이자율 및<br>서비스를 제공하는 입출금 상품</p>
            <img src="../assets/img/bg_dtpig_d09.png" alt="">
          </div>
          <div class="serve">
            <div class="product product02">
              <h3>모바일</h3>
              <h1>신한 땡겨요페이 통장</h1>
              <p>신한은행 배달앱 땡겨요의 간편<br>결제 우대이자율을 제공하는 입</p>
            </div>
            <div class="product product03">
              <div class="productText">
                <h3>인터넷</h3><h3>모바일</h3>
              </div>
              <h1>쏠편한 입출금통장</h1>
            </div>
            <div class="product product04">
              <h3>모바일</h3>
              <h1>Hey Young 머니박스</h1>
              <p>하루만 맡겨도 이자 GET! 20대<br>고객에게 매일의 이자를 제공하</p>
            </div>
            <div class="product product05">
              <h3>모바일</h3>
              <h1>신한 군인행복 통장</h1>
              <p>군 관련 고객을 위한 상품으로<br>군급여(군인연금)이체나 신한</p>
            </div>
          </div>
        </div>
      </section>
      <save-surve-vue  data-aos="fade-up" data-aos-duration="1000" />
      <section class="section03" data-aos="fade-up" data-aos-duration="1000">
        <div class="thema">
          <h1>고객님을 위한<br>테마상품 안내</h1>
          <ul v-for="(List,index) in Lists" :key="index" @click.prevent="currentList = index" :class="{'on' : currentList === index}">
            <li>{{ List.name }}</li>
          </ul>
        </div>
        <div class="thema01">
          <ul class="thema01_01" v-if="currentList === 0">
            <li>
              <img src="../assets/img/ico_dtcol01.png" alt="">
              <h1>신한 안녕, 반가워 적금</h1>
              <p>새롭게 금융거래를 시작하는<br>고객님을 응원하는 적금!</p>
            </li>
            <li>
              <img src="../assets/img/ico_dtcol02.png" alt="">
              <h1>신한 알.쏠 적금</h1>
              <p>금액도 기간도 내 맘대로!<br>원하는 만큼! 자유롭게!</p>
            </li>
            <li>
              <img src="../assets/img/ico_dtcol03.png" alt="">
              <h1>신한 아이행복 적금</h1>
              <p>영유아의 목적자금 마련과<br>장애아동의 자립의 지원하는 상품</p>
            </li>
          </ul>
          <ul class="thema01_02" v-if="currentList === 1">
            <li>
              <img src="../assets/img/ico_dtwom01.png" alt="">
              <h1>Hey Young 머니박스</h1>
              <p>20대 고객에게 매일의 이자를 제공하는<br>통장 속 통장</p>
            </li>
            <li>
              <img src="../assets/img/ico_dtwom02.png" alt="">
              <h1>신한 안녕, 반가워 적금</h1>
              <p>새롭게 금융거래를 시작하는<br>고객님을 응원하는 적금!</p>
            </li>
            <li>
              <img src="../assets/img/ico_dtwom03.png" alt="">
              <h1>신한 월복리 적금</h1>
              <p>매월 원금과 이자가 새로운<br>원금이 자유적립식 상품</p>
            </li>
          </ul>
          <ul class="thema01_03" v-if="currentList === 2">
            <li>
              <img src="../assets/img/ico_dtofc01.png" alt="">
              <h1>쏠편한 정기예금</h1>
              <p>금리 우대조건 NO~<br>만기설계가 자유로운 정기예금</p>
            </li>
            <li>
              <img src="../assets/img/ico_dtofc02.png" alt="">
              <h1>신한 안녕, 반가워 적금</h1>
              <p>새롭게 금융거래를 시작하는<br>고객님을 응원하는 적금!</p>
            </li>
            <li>
              <img src="../assets/img/ico_dtofc03.png" alt="">
              <h1>신한 알.쏠 적금</h1>
              <p>금액도 기간도 내 맘대로!<br>원하는 만큼! 자유롭게!</p>
            </li>
          </ul>
        </div>
      </section>
      <save-surve-vue-2  data-aos="fade-up" data-aos-duration="1000" />
      <section class="section04" data-aos="fade-up" data-aos-duration="1000">
        <div class="inner">
        <ul>
          <li><a href="">이용안내</a></li>
          <li><a href="">상품공시실</a></li>
          <li><a href="">금리안내</a></li>
          <li><a href="">예금가이드</a></li>
          <li><a href="">예/적금계산기</a></li>
          <li><a href="">금리우대쿠폰</a></li>
          <li><a href="">수수료안내</a></li>
        </ul>
        <div class="tel">
          <p>예금 전화상담</p>
          <h1>1599 - 8000</h1>
          <h3>평일 09:00 - 18:00 (은행휴무일제외)</h3>
        </div>
        <div class="btn">
          <button>전화상담</button>
          <button>이메일상담</button>
        </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import SaveSurveVue from '@/components/SaveSurve.vue';
import SaveSurveVue2 from '@/components/SaveSurve2.vue';
export default {
  data(){
    return {
      show : true,
      currentTab : 0,
      currentList : 0,
      tabList : [
        {name : '목돈 만들기'},
        {name : '목돈 굴리기'},
        {name : '입출금 자유'},
      ],
      Lists : [
        {name : '여성'},
        {name : '대학생'},
        {name : '직장인'},
      ]
    }
  },
  methods : {
    on(){
      setInterval(()=>{
        this.style.opacity(0)
      },3000)
    }
  },
  components:{
    SaveSurveVue,
    SaveSurveVue2
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/Save.scss';
  .opacity {
    animation-iteration-count : infinite;
    animation-name: opacity;
    animation-duration: 10s;
  }
  .opacity2 {
    animation-iteration-count : infinite;
    animation-name: opacity2;
    animation-duration: 10s;
  }
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes opacity2 {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
</style>