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

    <div class="box openinghours">
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

    <div class="box news">
      <h3>Årets robonyhet</h3>
      <p>Endelig en robotklipper for de mest krevende forholdene!</p>
      <a>Les mer</a>
    </div>

    <div class="box shop">
      <h2>Besøk vår butikkside på Finn.no for priser og tilbud.</h2>
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

.box {
  box-sizing: border-box;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 16px 32px;
  border-radius: 6px;
  margin: 2%;
  background-color: white;

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
    background-color: $grey;
    color: white;
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
