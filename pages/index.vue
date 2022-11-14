<template>
  <div>
    <div class="featureimage" />
    <article class="container gutter">
      <div class="grid-container">
        <div class="welcome">
          <div class="box">
            <div class="box-inner">
              <div class="box-content">
                <h2>
                  Velkommen til Møll Bensinstasjon / YX Holum – fagforhandler av
                  kvalitetsprodukter fra Honda, Jonsered og Husqvarna.
                </h2>
                <p>
                  Salg og service av gressklippere, snøfresere, motorsager og
                  andre skog- og hageprodukter.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="openinghours">
          <div class="box">
            <div class="box-inner">
              <div class="box-content">
                <h2>Åpningstider</h2>
                <p>Vi har åpent alle hverdager</p>
                <h3>fra kl. 07.30–20</h3>
                <hr />
                <p>
                  Lørdager: 08–20
                  <br />Søndager: 09–20
                  <br />
                  <br />
                  <nuxt-link to="/kontakt" title="Avvikende åpningstider">
                    Se avvikende åpningstider
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="news">
          <div class="box">
            <div class="box-inner">
              <div class="box-content">
                <h3>Kom innom</h3>
                <p>Se våre nyheter i butikken!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="logos">
        <div>
          <a href="https://www.husqvarna.com/no/" title="Husqvarna">
            <img src="~/static/husqvarna-logo.png" alt="Husqvarna logo" />
          </a>
        </div>
        <div>
          <a href="https://www.berema.no/" title="Honda/Berema">
            <img src="~/static/honda-logo.png" alt="Honda/Berema logo" />
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Møll Bensinstasjon – Bensin, pølser og robotgressklippere',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          name: 'description',
          content:
            'Velkommen til Møll Bensinstasjon / YX Holum – fagforhandler av kvalitetsprodukter fra Honda, Jonsered og Husqvarna. ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$red: #d11e39;
$grey: #3c3c3c;
$finn: #06bffc;

.featureimage {
  background-image: url('~static/yx-min.jpg');
}

.grid-container {
  margin-top: -150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'welcome welcome openinghours news' 'welcome welcome . .';

  @media (max-width: 1024px) {
    max-width: 980px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'welcome welcome' 'openinghours openinghours' 'news news';
  }
}

.welcome {
  grid-area: welcome;
  .box-inner {
    background-color: $red;
    color: white;

    h2 {
      font-size: 36px;
      @media (max-width: 750px) {
        font-size: 24px;
      }
    }
  }
}

.openinghours {
  grid-area: openinghours;
}

.news {
  grid-area: news;
}

.logos {
  width: 100%;
  padding: 48px;
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    display: block;
  }
}
</style>
