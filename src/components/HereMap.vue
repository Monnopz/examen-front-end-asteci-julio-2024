<script setup>
import useHereMap from '@/composables/useHereMap'
const { hereMapVueReference } = useHereMap()
</script>

<template>
    <div id="map">
        <!--En este div se renderizará el HereMap-->
        <div id="mapContainer" ref="hereMapVueReference"></div>
    </div>
</template>

<style scoped>
#map {
  width: 90vw;
  min-width: 360px;
  text-align: center;
  margin: 1% auto;
  background-color: #ccc;
}
#mapContainer {
  height:600px;
  width:100%
}
</style>
