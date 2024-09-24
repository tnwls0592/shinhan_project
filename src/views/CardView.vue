<template>
  <div id="wrap">
    <div class="inner">
      <div class="tab" data-aos="fade-up" data-aos-duration="1000">
        <input type="text" placeholder="메뉴, 카드, 혜택을 검색해보세요.">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
        <h1 data-aos="fade-up" data-aos-duration="1000">"반갑습니다. <span>신한은행 카드</span>입니다."</h1>
      <div class="card" data-aos="fade-up" data-aos-duration="1000">
        <div class="cardBox">
          <div class="cardFlip">
            <div class="card01_f">
              <img src="../assets/img/cdCreditPOCDMW.gif" alt="">
            </div>
            <div class="card01_b">
              <img src="../assets/img/cdCreditPOCDMG.gif" alt="">
            </div>
          </div>
        </div>
        <div class="cardBox">
          <div class="cardFlip">
            <div class="card01_f">
              <img src="../assets/img/cdCreditBUCDM7.gif" alt="">
            </div>
            <div class="card01_b">
              <img src="../assets/img/cdCreditBUCDKH.gif" alt="">
            </div>
          </div>
        </div>
        <div class="cardBox">
          <div class="cardFlip">
            <div class="card01_f">
              <img src="../assets/img/cdCreditBSCDJ1.gif" alt="">
            </div>
            <div class="card01_b">
              <img src="../assets/img/cdCreditBSCDJK.gif" alt="">
            </div>
          </div>
        </div>
        <div class="cardBox">
          <div class="cardFlip">
            <div class="card01_f">
              <img src="../assets/img/cdCheckBUBDGP.gif" alt="">
            </div>
            <div class="card01_b">
              <img src="../assets/img/cdCheckBUBDGO.gif" alt="">
            </div>
          </div>
        </div>
        <div class="cardBox">
          <div class="cardFlip">
            <div class="card01_f">
              <img src="../assets/img/cdCheckBUBDGR.gif" alt="">
            </div>
            <div class="card01_b">
              <img src="../assets/img/cdCheckBUBDMK.gif" alt="">
            </div>
          </div>
        </div>
      </div>
        <ul data-aos="fade-up" data-aos-duration="1000">
          <li><a href="">신한카드 Point Plan+</a></li>
          <li><a href="">신한카드 SOL 트래블</a></li>
          <li><a href="">신한카드 처음</a></li>
          <li><a href="">신한카드 SOL 트래블 체크</a></li>
          <li><a href="">신한카드 Edu Plan+</a></li>
        </ul>
        <section class="section01" data-aos="fade-up" data-aos-duration="1000">
          <div class="banner">
            <div class="text">
              <p>하나쯤은 맘에 쏙 드실 거예요!</p>
              <h1>신한 캐릭터 카드 구경 오세요~</h1>
            </div>
            <div class="img">
              <img src="../assets/img/ch-thum_Loopy.png" alt="" class="img1">
              <img src="../assets/img/ch-thum_Gosim.png" alt="" class="img2">
              <img src="../assets/img/ch-thum_Shfriends.png" alt="" class="img3">
              <img src="../assets/img/ch-thum_Kakao.png" alt="" class="img4">
            </div>
          </div>
        </section>
        <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
     data-aos="fade-up" data-aos-duration="1000"
  >
    <swiper-slide><p>Tops쿠폰<br>티웨이항공<br>최대 1만원 쿠폰</p><img src="../assets/img/221013_tway_hbn.png" alt=""></swiper-slide>
    <swiper-slide><p>신한 SOL페이!<br>첫 만남 5천 포인트<br>즉시 지급</p><img src="../assets/img/20231221631119_hotbn.png" alt=""></swiper-slide>
    <swiper-slide><p>네스프레소<br>신한카드!<br>모두가 사랑할 카드!</p><img src="../assets/img/20240715541125_hotbn.png" alt=""></swiper-slide>
    <swiper-slide><p>보름달같이<br>꽉 찬 출첵 !<br>깜짝 행운까지!</p><img src="../assets/img/20240820608454_hotbn.png" alt=""></swiper-slide>
    <swiper-slide><p>X5+ 스키 시즌패스<br>한장으로<br>5개의 스키장!</p><img src="../assets/img/20240819656018_hotbn.png" alt=""></swiper-slide>
    <swiper-slide><p>최대 55만원<br>통 크~게<br>SOL게요!</p><img src="../assets/img/20240816342434_hotbn.png" alt=""></swiper-slide>
    <swiper-slide><p>추모공원/이장<br>무료 상담받고<br>최대 30만원 혜택</p><img src="../assets/img/20240119487969_hotbn.png" alt=""></swiper-slide>
    <swiper-slide><p>학원 업종에서<br>목표금액 이용 시<br>최대 2만원 캐시백</p><img src="../assets/img/20240723577939_hotbn.png" alt=""></swiper-slide>
    ...
  </swiper>
  <section class="section02" data-aos="fade-up" data-aos-duration="1000">
    <h1>금융</h1>
    <p>똑똑한 금융생활 <a href="">나만의 금융혜택 보기<i class="fa-solid fa-angle-right"></i></a></p>
    <div class="textBox">
    <div class="text">
      <img src="../assets/img/icon-150-type2-17.png" alt="">
      <h1>단기카드대출</h1>
      <h2>(현금서비스)</h2>
      <button>신청하기</button>
    </div>
    <div class="text">
      <img src="../assets/img/icon-150-type2-18.png" alt="">
      <h1>장기카드대출</h1>
      <h2>(카드론)</h2>
      <button>신청하기</button>
    </div>
    <div class="text">
      <img src="../assets/img/icon-150-type2-19.png" alt="">
      <h1>일부결제금액 이월약정</h1>
      <h2>(리볼빙)</h2>
      <button>신청하기</button>
    </div>
    <div class="text">
      <img src="../assets/img/icon-150-type2-42.png" alt="">
      <h1>가계신용대출</h1>
      <h2>(사업자대출)</h2>
      <button>신청하기</button>
    </div>
    </div>
  </section>
    </div>
  </div>
  <div id="wrap02" data-aos="fade-up" data-aos-duration="1000">
    <div class="inner">
      <ul>
        <li><a href=""><img src="../assets/img/icon-150-type2-8.png" alt=""></a><p>내가 받은 혜택</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-10.png" alt=""></a><p>마이샵 쿠폰</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-12.png" alt=""></a><p>이용한도상향</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-13.png" alt=""></a><p>카드재발급</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-14.png" alt=""></a><p>카드사용등록</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-3.png" alt=""></a><p>대출금액상환</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-16.png" alt=""></a><p>진행중이벤트</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-1.png" alt=""></a><p>월별 명세서</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-2.png" alt=""></a><p>이용내역</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-4.png" alt=""></a><p>이용한도</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-5.png" alt=""></a><p>즉시결제</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-6.png" alt=""></a><p>포인트조회</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-7.png" alt=""></a><p>내카드실적/혜택</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-9.png" alt=""></a><p>내카드관리</p></li>
        <li><a href=""><img src="../assets/img/icon-150-type2-15.png" alt=""></a><p>상담/민원</p></li>
      </ul>
    </div>
  </div>
  <div id="wrap03" data-aos="fade-up" data-aos-duration="1000">
    <div class="inner03">
      <div class="notice">
      <h1>공지<i class="fa-solid fa-angle-right"></i></h1>
      <ul>
        <li><a href="">다올투자증권 전산 시스템 작업으로 인한 서비스 일시 중단 안내<span>New</span></a></li>
        <li><a href="">신한 SOL페이 제휴 멤버쉽 서비스 종료 안내<span>New</span></a></li>
        <li><a href="">신한카드 일부 상품 발급 중단 안내<span>New</span></a></li>
      </ul>
      </div>
      <div class="gallery">
        <h1>금융소비자주의경보<i class="fa-solid fa-angle-right"></i></h1>
        <ul>
          <li><a href="">티몬, 위메프 사태 관련 환불을 빙자한 개인정보 등 요구에 주의하세요!</a></li>
          <li><a href="">여신거래 안심차단 시스템으로 소비자피해 예방하세요.</a></li>
          <li><a href="">신용카드 결제를 유도하는 불법업체를 주의하세요!</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
}
</script>
<style lang="scss" scoped >
  @import '../assets/scss/Card.scss';
</style>