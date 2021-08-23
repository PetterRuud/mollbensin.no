<template>
  <div>
    <div class="featureimage" />
    <article class="container gutter">
      <h1>Verksted</h1>
      <p>
        Vi tilbyr service, vedlikehold og reperasjoner av motorsager,
        gressklippere, snøfresere og andre maskiner fra Honda, Jonsered,
        Husqvarna og de fleste andre merker.
      </p>
      <p>
        Verkstedet på Møll Bensinstasjon er åpent fra 08.00 til 16.00, mandag
        til fredag. Det samme gjelder vårt reservedelslager. Enklere deler som
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
      title: 'Verksted | Møllbensin',
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
  background-image: url('~static/Serviceverksted.jpg');
}
</style>
