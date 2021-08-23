<template>
  <div>
    <Map />
    <article class="container gutter">
      <h1>English</h1>
      <p>
        Møll Bensinstasjon / YX Holum is a gas station located in Holum, about 8
        km north of Mandal. Along with gas and snacks, you can also buy fishing
        cards for salmon fishing in Mandalselva and outdoor power products like
        lawn mowers, chainsaws, trimmers and more.
      </p>
      <Contact />

      <h2>Opening Hours</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th style="text-align: right;">Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday–Friday</td>
            <td style="text-align: right;">07.30–20</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td style="text-align: right;">08–20</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td style="text-align: right;">09–20</td>
          </tr>
        </tbody>
      </table>
      <h3>Adapted Opening Hours</h3>
      <ul>
        <li>National&nbsp;Holidays: 09–20</li>
        <li>24th of December and 31th of December: Open until&nbsp;16</li>
        <li>17th of May and 25th of December: Closed</li>
      </ul>

      <h2>Location and directions</h2>
      <p>
        We are located in Holum, about 8 km north of Mandal, along road 455.
        <a
          href="https://www.google.no/maps/dir/59.9419691,10.7735403/Holumsveien+816,+4519+Holum/@59.0047116,6.9566421,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x46378bc84c63785b:0x5846bf2e7c7c350e!2m2!1d7.5299097!2d58.0950978?hl=no"
          >Get driving instructions from your location to Møll Bensinstasjon</a
        >.
      </p>

      <h2>Buy fishing cards for salmon fishing in Mandalselva</h2>
      <p>
        We sell fishing cards for zone 1 and 2. Please familiarize yourself with
        the
        <a href="http://mandalselva.no/article.aspx?id=715"
          >fishing rules for Mandalselva</a
        >&nbsp;and
        <a href="http://lakseelvene.no/article.aspx?id=700"
          >pricing information </a
        >for&nbsp;the different cards and zones.
      </p>
      <p>
        Be aware of a national fee for Salmon and seatrout fishing in Norway.
        For more information click here.
      </p>
    </article>
  </div>
</template>

<script>
import Contact from './../components/Contact'
import Map from './../components/Map'
export default {
  name: 'English',
  components: {
    Contact,
    Map,
  },
  head() {
    return {
      title: 'English| Møllbensin',
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
