<template>
  <header>
    <div class="container">
      <Logo />
      <nav>
        <ul>
          <li>Skog og hage</li>
          <li>Verksted</li>
          <li>Fiskekort</li>
          <li>Kontakt</li>
          <li>English</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  name: 'Navbar',
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
  nav {
    ul {
      list-style: none;
      li {
        display: inline-block;
        padding: 8px 16px;
      }
    }
  }
}
</style>
