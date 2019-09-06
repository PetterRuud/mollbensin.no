<template>
  <div class="container gutter">
    <div class="box welcome">
      <h2>
        Velkommen til Møll Bensinstasjon / YX Holum – fagforhandler av
        kvalitetsprodukter fra Honda, Jonsered og Husqvarna.
      </h2>
      <p>
        Salg og service av gressklippere, snøfresere, motorsager og andre skog-
        og hageprodukter.
      </p>
    </div>

    <div class="openinghours">
      <h2>Åpningstider</h2>
      <p>Vi har åpent alle hverdager</p>
      <h3>fra kl. 07.30–20</h3>
      <hr />
      <p>
        Lørdager: 08–20<br />
        Søndager: 09–20<br /><br />
        <a href="/kontakt/" title="Avvikende åpningstider">Klikk for avvik</a>
      </p>
    </div>

    <div class="promo">
      <img src="~/static/H350-0271.jpg" />
    </div>

    <div class="news">
      <h3>Årets robonyhet</h3>
      <p>Endelig en robotklipper for de mest krevende forholdene!</p>
      <a>Les mer</a>
    </div>

    <div class="box shop con">
      <svg focusable="false" width="92" height="32" viewBox="0 0 184 64">
        <title>
          FINN.no
        </title>
        <path
          fill="#06bffc"
          d="M179.8 58V6c0-1-.8-1.9-1.9-1.9H66c-1 0-1.9.8-1.9 1.9v53.8H178c1 0 1.8-.8 1.8-1.8"
        ></path>
        <path
          fill="#0063fc"
          d="M22.5 4.2H6C5 4.2 4.2 5 4.2 6v52c0 1 .8 1.9 1.9 1.9H60V41.5C59.9 20.9 43.2 4.2 22.5 4.2"
        ></path>
        <path
          fill="#fff"
          d="M178 0H66c-3.3 0-6 2.7-6 6v17.4C53.2 9.6 38.9 0 22.5 0H6C2.7 0 0 2.7 0 6v52c0 3.3 2.7 6 6 6h172c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6m1.8 58c0 1-.8 1.9-1.9 1.9H64.1V6c0-1 .8-1.9 1.9-1.9h112c1 0 1.9.8 1.9 1.9v52zM4.2 58V6C4.2 5 5 4.2 6 4.2h16.5c20.6 0 37.4 16.8 37.4 37.4v18.3H6c-1-.1-1.8-.9-1.8-1.9"
        ></path>
        <path
          fill="#fff"
          d="M110.1 21.1h-4.2c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2V22.3c0-.6-.6-1.2-1.2-1.2m-12 0H83c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-4h7.7c.7 0 1.2-.5 1.2-1.2v-3.2c0-.7-.5-1.2-1.2-1.2h-7.7v-4.9h9.7c.7 0 1.2-.5 1.2-1.2v-3.7c0-.5-.6-1.1-1.2-1.1m62.8 0h-4.2c-.7 0-1.2.5-1.2 1.2v9.5l-6.6-10c-.3-.4-.8-.7-1.3-.7h-3.2c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-9.4l6.5 9.8c.3.4.8.7 1.3.7h3.4c.7 0 1.2-.5 1.2-1.2V22.3c-.1-.6-.6-1.2-1.3-1.2m-25.4 0h-4.2c-.7 0-1.2.5-1.2 1.2v9.5l-6.6-10c-.3-.4-.8-.7-1.3-.7H119c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-9.4l6.5 9.8c.3.4.8.7 1.3.7h3.4c.7 0 1.2-.5 1.2-1.2V22.3c-.1-.6-.6-1.2-1.3-1.2"
        ></path>
      </svg>
      <a href="https://www.finn.no/butikk/mollb.html"
        ><h2>Besøk vår butikkside på Finn.no for priser og tilbud.</h2></a
      >
    </div>

    <div class="logos">
      <div><img src="~/static/honda-logo.png" /></div>
      <div><img src="~/static/husqvarna-logo.png" /></div>
      <div><img src="~/static/jonsered-logo.png" /></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$red: #d11e39;
$grey: #3c3c3c;
$finn: #06bffc;

.box {
  box-sizing: border-box;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 16px 32px;
  border-radius: 6px;
  margin: 2%;
  background-color: white;

  &.promo {
    padding: 0;
    flex-basis: 32%;
    img {
      max-width: 600px;
    }
  }
  &.welcome {
    background-color: $red;
    color: white;
    flex-basis: 60%;
    h2 {
      font-size: 42px;
      margin-bottom: 6px;
    }
    p {
      font-size: 24px;
    }
  }
  &.openinghours {
    flex-basis: 32%;
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }

  &.news {
    flex-basis: 32%;
  }

  &.shop {
    flex-basis: 60%;
    color: white;
    background-color: $finn;
    a {
      color: white;
    }
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }
}

.logos {
  width: 100%;
  padding: 48px;
  display: flex;
  justify-items: center;
  justify-content: space-between;
}
</style>
