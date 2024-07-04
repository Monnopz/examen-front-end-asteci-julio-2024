<script setup>
import useHereMap from '@/composables/useHereMap'
const { hereMap } = useHereMap();
</script>

<template>
    <div id="map">
        <!--In the following div the HERE Map will render-->
        <div id="mapContainer" style="height:600px;width:100%" ref="hereMap"></div>
    </div>
</template>

<style scoped>
#map {
  width: 90vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>
