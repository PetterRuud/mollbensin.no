<template>
  <div>
    <Map />
    <article class="container gutter">
      <h1>English</h1>
      <p>
        Møll Bensinstasjon / YX Holum is a gas station located in Holum, about 8
        km north of Mandal. Along with gas and snacks, you can also buy outdoor power products like
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
            <td style="text-align: right;">08–18</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td style="text-align: right;">09–20</td>
          </tr>
        </tbody>
      </table>
      <h3>Adapted Opening Hours</h3>
      <ul>
        <li>National Holidays: Opens at 9, normal closing hours</li>
        <li>24th of December and 31th of December: Open until 15</li>
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

      <h2>Fishing cards for salmon fishing in Mandalselva</h2>
      <p>
        Fishing cards can now be bought at <a href="https://www.inatur.no/sok/laksefisketilbud?q=mandalselva&f=%5B%7B%22felt%22%3A%22type%22%2C%22sokeord%22%3A%22laksefisketilbud%22%7D%5D&ledig=false&p=0">inatur.no</a>. Before you start fishing, the fishing gear must be disinfected (including waders, nets, and anything else that will come into contact with the river). This can be done with us for a fee of 50 NOK. A receipt will be issued once the fishing gear is disinfected, and you must keep it in case of an inspection.
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
      title: 'English | Møll Bensinstasjon',
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
