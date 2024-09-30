<template>
  <div>
    <div class="featureimage" />
    <article class="container gutter">
      <h1>Verksted</h1>
      <p>
        Vi tilbyr service, vedlikehold og reperasjoner av motorsager,
        gressklippere, snøfresere og andre maskiner fra Honda, Jonsered,
        Husqvarna, Klippo, Partner, McCulloch m.m. 
      </p>
      <p>
        Verkstedet på Møll Bensinstasjon er åpent fra 08.00 til 16.00 på hverdager (ferieuker kan avvike). Det samme gjelder vårt reservedelslager. Enklere deler som
        kniver, plugger, kjeder og lignende har vi tilgjengelig i stasjonens
        åpningstid.
      </p>
      <p>
        <strong
          >Ring oss på tlf. 382 67 144 for en uforpliktende prat om ditt
          servicebehov.</strong
        >
      </p>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Verksted | Møll Bensinstasjon',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          name: 'description',
          content:
            'Vi utfører service, vedlikehold og reperasjoner av gressklippere, robotklippere, motorsager og andre skog- og hagemaskiner fra Husqvarna, Honda m.m.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.featureimage {
  background-image: url('~static/Serviceverksted.jpg');
}
</style>
