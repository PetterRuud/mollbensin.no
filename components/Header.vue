<template>
  <header>
    <div class="container flex gutter center">
      <Logo />
      <nav>
        <ul>
          <li><nuxt-link to="/skogoghage">Skog og hage</nuxt-link></li>
          <li><nuxt-link to="/verksted">Verksted</nuxt-link></li>
          <li><nuxt-link to="/fiskekort">Fiskekort</nuxt-link></li>
          <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
          <li><nuxt-link to="/english">English</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Header',
  components: {
    Logo,
  },
  data() {
    return {
      load: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
$red: #d11e39;
$grey: #2e2e2e;

header {
  background-color: #f9f9f9;
  padding: 24px 0;
  nav {
    ul {
      text-align: right;
      @media (max-width: 750px) {
        padding: 12px 0 0;
      }
      li {
        display: inline-block;
        text-transform: uppercase;
        a {
          padding: 16px 16px;
          color: $grey;
          border: 0;
          display: block;
          border-radius: 4px;
          font-weight: 700;

          &:hover {
            background-color: $red;
            color: white;
          }
        }
      }
    }
  }
}
</style>
