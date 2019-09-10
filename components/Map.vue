<template>
  <div class="map">
    <GmapMap
      :center="{ lat: 58.094907, lng: 7.529953 }"
      :zoom="15"
      style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);"
    />
  </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  height: 350px;
}
</style>
