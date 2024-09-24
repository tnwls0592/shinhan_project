<template>
  <div id="wrap">
    <div class="inner">
      <h1>최고 금리 상품을 찾아드립니다.</h1>
      <div class="text01">
        <input type="checkbox"><p>적금</p>
      </div>
      <div class="text02">
        <input type="checkbox"><p>예금</p>
      </div>
      <div class="month">
        <input type="text" placeholder="6, 12, 24, 36 개월 등 입력하세요." />
      </div>
      <button>검색</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>
<style lang="scss" scoped>
  #wrap {
    background: #f0fbff;
    width: 100%;
    height: 200px;
    position: absolute;
    top: 980px; left: 0;
    .inner {
      display: flex;
      margin: 0 auto;
      max-width: 1280px;
      align-items: center;
      justify-content: space-between;
      height: 200px;
      h1 {
        flex: 30%;
        font-weight: 700;
        font-size: 20px;
      }
      .text01 {
        flex: 5%;
        display: flex;
        align-items: center;
      }
      .text02 {
        flex: 15%;
        display: flex;
        align-items: center;
      }
      .month {
        flex: 38%;
        align-items: center;
        input {
          height: 45px;
          box-sizing: border-box;
          width: 500px;
          border: 1px solid #0076be;
          border-radius: 5px;
          padding-left: 15px;
        }
        :focus {
          outline: none;
        }
      }
      button {
        margin-left: 5px;
        height: 45px;
        width: 100px;
        background: #0076be;
        color: #fff;
        border-radius: 5px;
        border: none;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: .3s;
        &:hover {
          border: 1px solid #0076be;
          color: #0076be;
          background: #fff;
        }
      }
    }
  }
</style>