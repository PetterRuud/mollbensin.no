<template>
  <div>
    <div class="featureimage" />
    <article class="container gutter">
      <h1>Fiskekort i Mandalselva</h1>
      <p>
        Mandalselva er en av Norges beste lakseelver, og elva byr på varierte
        fiskemuligheter. 
      </p>

      <h2>Om fiskekort</h2>
      <h3>Priser</h3>
      <p>
        Prisene på fiskekortene varierer fra sone til sone. Fiskekort for Mandalselva kjøpes nå på <a hrefs="https://www.inatur.no/sok/laksefisketilbud?q=mandalselva&f=%5B%7B%22felt%22%3A%22type%22%2C%22sokeord%22%3A%22laksefisketilbud%22%7D%5D&ledig=false&p=0">inatur.no</a>. 
      </p>
      <h3>Desinfisering av fiskeutstyr</h3>
      <p>
        Før du begynner å fiske må fiskeutstyret desinfiseres (også vadere,
        hover og alt annet som skal i kontakt med elva). Dette kan gjøres hos
        oss mot en avgift på kr 50. Kvittering utstedes når fiskeutstyret er
        desinfisert, og denne må du ta vare på i tilfelle det skulle bli
        kontroll.
      </p>
      <h3>Fiskeravgift</h3>
      <p>
        For å kunne fiske i lakseførende strøk, må alle over 18 år betale en
        statlig avgift.
        <a href="http://fiskeravgift.miljodirektoratet.no/"
          >Fiskeravgiften kan kjøpes online hos Miljødirektoratet.</a
        >
      </p>

      <aside>
        <h3>Mer info</h3>
        <ul>
          <li><a href="http://www.mankalk.no/">Sjekk vannføringen</a></li>
          <li>
            <a href="http://lakseelvene.no/article.aspx?id=701">Se sonekart</a>
          </li>
          <li>
            <a href="http://www.laksefisk.no/fangstrapport/?ID=4"
              >Fiskebørsen</a
            >
          </li>
        </ul>
      </aside>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Fiskekort | Møll Bensinstasjon',
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
.featureimage {
  background-image: url('~static/mandalselva2.jpg');
}
</style>
