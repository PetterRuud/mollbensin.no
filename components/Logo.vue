<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="logo">
    <nuxt-link to="/"
      ><div class="brandimage"><img src="~/static/yx_logo.png" /></div>
      <div class="brand">
        <div class="brandname">Møll bensinstasjon</div>
        <div class="slogan">YX Holum</div>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
$red: #d11e39;
$lightgrey: #1a1a1a;

.logo {
  > a {
    border: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  @media (max-width: 750px) {
    align-items: flex-start;
  }
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
    text-transform: uppercase;
    @media (max-width: 750px) {
      font-size: 24px;
    }
  }
  .slogan {
    color: $lightgrey;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    @media (max-width: 750px) {
      font-size: 16px;
    }
  }
}
</style>
