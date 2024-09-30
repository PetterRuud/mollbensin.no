<template>
  <div>
    <article class="container gutter">
      <h1>Skog og hage</h1>
      <p>
        Vi over 50 års fartstid som fagforhandler. Dette nyter du som kunde godt
        av, enten du er proff eller hobbybruker! Hos oss får du blant
        gressklippere, robotklippere, traktorklippere, motorsager, gresstrimmere
        og andre skog- og hageprodukter. Vi utvider også stadig vårt utvalg av batteriprodukter fra 36V-serien til Husqvarna. 
      </p>

      <p>
        I butikken finner du også et stort utvalg verneutstyr, hansker,
        miljøbensin, sagkjeder og annet tilbehør. Her finner du også de fleste
        modeller utstilt. Kom innom en tur, så hjelper vi med å finne riktig
        maskin for deg.
      </p>

      <aside>
        <p>
          Du kan også lese mer om og se priser på et utvalg av våre bestselgende
          maskiner på
          <a href="http://www.finn.no/butikk/mollb.html"
            >vår butikkside på Finn.no</a
          >.
        </p>
      </aside>

      <div class="grid">
        <div class="box">
          <div class="box-inner">
            <div class="box-image">
              <img src="~/static/H350-0271.jpg" alt="" />
            </div>
            <div class="box-content">
              <h2>Robotklippere</h2>
              <p>
                Med en robotgressklipper kan du få en frodig, grønn plen uten å
                måtte bruke tid på gressklipping. Dette er batteridrevne
                gressklippere som slår gresset på egenhånd. Vi leverer
                robotklippere fra Husqvarna.
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="box-inner">
            <div class="box-image">
              <img src="~/static/gressklipper-jo.jpg" alt="" />
            </div>
            <div class="box-content">
              <h2>Gressklippere</h2>
              <p>
                En gressklipper er ikke bare en gressklipper. Vi har et stort
                utvalg klippere med funksjonalitet som trinnløs fremdrift,
                bioklipp, knivstopp og elektrisk start, for å nevne noe. Kom
                innom en tur, så hjelper vi deg å finne en modell som passer
                dine behov. Vi har klippere fra Honda, Husqvarna og Klippo.
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="box-inner">
            <div class="box-image">
              <img src="~/static/hq-motorsag.jpg" alt="" />
            </div>
            <div class="box-content">
              <h2>Motorsager</h2>
              <p>
                Våre sager har den mest avanserte motorsagteknologien, uten at
                det går på bekostning av brukervennligheten. Vi har sager fra Husqvarna til fritidsbruk, vedkapping og for
                skogsarbeideren.
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="box-inner">
            <div class="box-image">
              <img src="~/static/fr-jo.jpg" alt="" />
            </div>
            <div class="box-content">
              <h2>Traktorklippere og frontridere</h2>
              <p>
                En sitteklipper er det beste valget for store hager! Vi har både
                traktorklippere og frontridere fra Husqvarna og Honda.
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="box-inner">
            <div class="box-image">
              <img src="~/static/trimmer-jo.jpg" alt="" />
            </div>
            <div class="box-content">
              <h2>Trimmere og ryddere</h2>
              <p>
                Gresstrimmere og kantklippere kommer i mange varianter, fra
                enkle gresstrimmere til avanserte ryddesager. Vi hjelper å finne
                en maskin som passer perfekt til dine behov. Vi har trimmere fra
                Honda og Husqvarna.
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="box-inner">
            <div class="box-image">
              <img src="~/static/EU20i.jpg" alt="" />
            </div>
            <div class="box-content">
              <h2>Aggregater</h2>
              <p>
                Hondas aggregater er konstruert for å være en pålitelige kilde
                til strøm av høy kvalitet. Utviklet for å håndtere de
                vanskeligste omgivelser og det mest krevende profesjonelle
                utstyret, løser de oppgavene med betryggende letthet og
                effektivitet.
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="box-inner">
            <div class="box-image">
              <img src="~/static/snofres-ho.jpg" alt="" />
            </div>
            <div class="box-content">
              <h2>Snøfresere</h2>
              <p>
                Vi tar snøfresing på alvor! Hos oss får du kvalitetsfresere fra
                Honda og Husqvarna, som holder år etter år. Modellene kommer i
                ulike størrelser, med hjul eller belte. Du kan være trygg på at
                du alltid vil få tak i slitedeler hos oss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Skog og hage | Møll Bensinstasjon',
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
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
