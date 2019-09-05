<template>
  <div class="logo">
    <div class="brandimage"><img src="~/static/yx_logo.png" /></div>
    <div class="brand">
      <div class="brandname">Møll bensinstasjon</div>
      <div class="slogan">YX Holum</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$red: #d11e39;
$lightgrey: #c9c9c9;

.logo {
  display: flex;
  justify-content: center;
  .brandimage {
    width: 50px;
    margin-right: 12px;
    img {
      max-width: 100%;
    }
  }
  .brandname {
    color: $red;
    font-size: 32px;
    font-weight: 600;
  }
  .slogan {
    color: $lightgrey;
    font-size: 24px;
  }
}
</style>
