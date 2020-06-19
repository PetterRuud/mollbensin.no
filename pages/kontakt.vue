<template>
  <div>
    <Map />
    <article class="container">
      <h1>Kontakt & åpningstider</h1>
      <Contact />

      <h2>Generelle åpningstider</h2>
      <table>
        <thead>
          <tr>
            <th>Dager</th>
            <th style="text-align: right;">Tider</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mandag–fredag</td>
            <td style="text-align: right;">07.30–20</td>
          </tr>
          <tr>
            <td>Lørdag</td>
            <td style="text-align: right;">08–20</td>
          </tr>
          <tr>
            <td>Søndag</td>
            <td style="text-align: right;">09–20</td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>Verkstedet er åpent mandag til fredag: 07.30–16</em>
      </p>
      <h3>Avvikende åpningstider</h3>
      <ul>
        <li>På helligdager&nbsp;har vi åpent fra 09–20.</li>
        <li>
          Julaften og nyttårsaften har vi normal åpningstid, men stenger kl 16.
        </li>
        <li>17. mai og 25. desember holder vi stengt.</li>
      </ul>

      <h2>Veibeskrivelse fra Kristiansand, Mandal og Marnardal</h2>
      <p>
        Vi holder til i Holum, en mil nord for Mandal, langs riksvei 455, like
        ved Mandalselva.
      </p>
      <ul>
        <li>
          <strong>Fra Kristiansand</strong>: Følg E39 mot Mandal, ca 26 km.
          Sving til høyre mot riksvei 459 mot Holum. Følg veien i 5,8 km til du
          ommer til et T-kryss, og sving så til venstre på riksvei 455 mot
          Mandal. Se etter YX-skilt på høyre siden av veien.
        </li>
        <li>
          <strong>Fra Mandal</strong>: Fra E39, sving av mot Marnardal i
          Falckenkrysset. Følg riksvei 455 i 8 km. Vi ligger på venstre side av
          veien rett før Møll bru.
        </li>
        <li>
          <strong>Fra Marnardal</strong>: Følg riksvei 455 nedover mot Mandal.
          Du ser oss på høyre side av veien, rettt etter Møll bru.
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import Contact from './../components/Contact'
import Map from './../components/Map'

export default {
  name: 'Kontakt',
  components: {
    Contact,
    Map,
  },
}
</script>
