<template>
  <header>
    <div class="container gutter center">
      <nuxt-link to="/"><Logo /></nuxt-link>
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
  name: 'Header',
  components: {
    Logo
  },
  data() {
    return {
      load: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
$red: #d11e39;
$grey: #2e2e2e;

header {
  background-color: white;
  padding: 24px 0;
  margin-bottom: 48px;
  nav {
    ul {
      text-align: right;
      li {
        display: inline-block;
        a {
          padding: 8px 16px;
        }
      }
    }
  }
}
</style>
