<template>
  <div id="wrap">
    <div class="inner">
      <h1>원하시는 상품을 직접 찾아보세요!</h1>
      <div class="text">
        <input type="text">
        <button>검색</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  #wrap {
    background: #f0fbff;
    width: 100%;
    height: 200px;
    position: absolute;
    top: 1440px; left: 0;
    .inner {
      margin: 0 auto;
      max-width: 1280px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 200px;
      h1 {
        font-weight: 700;
        font-size: 20px;
      }
      .text {
        display: flex;
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
  }
</style>