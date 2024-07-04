import { onMounted, ref, watch } from 'vue'
import useStore from '@/composables/useStore'

const { coordinates } = useStore()

const useHereMap = () => {

    const platform = ref(null)
    const apikey = import.meta.env.VITE_HEREMAP_KEY

    let hereMap = null
    let hereMarker = null

    const hereMapVueReference = ref(null)

    // Renderizar mapa
    const initializeHereMap = () => {

        const mapContainer = hereMapVueReference.value
        const H = window.H

        const maptypes = platform.value.createDefaultLayers()

        // Inicializa el mapa
        hereMap = new H.Map(mapContainer, maptypes.vector.normal.map, {
            zoom: 3,
            center: coordinates.value
        });

        // Se asegura de que el mapa ocupa todo su contenedor
        addEventListener("resize", () => hereMap.getViewPort().resize())

        // Se implementan comportamientos como el zoom
        new H.mapevents.Behavior(new H.mapevents.MapEvents(hereMap))

        // Crea los compomentes de UI del mapa
        H.ui.UI.createDefault(hereMap, maptypes)
    }

    // Metodo reutilizable para redibujar el mapa cuando las coordenadas cambien
    const drawHereMap = (map, marker) => {
        if(map) {
            map.setCenter(coordinates.value)
            marker.setGeometry(coordinates.value)
        }
    }

    const addMarker =(map) => {
        if(!map) return; // No hace nada si el mapa es null
        hereMarker = new H.map.Marker(coordinates.value)
        map.addObject(hereMarker)
    }

    onMounted(async() => {
        const platformLocal = await new window.H.service.Platform({
            apikey
        })
        platform.value = platformLocal
        initializeHereMap() // Inicializa el mapa
        addMarker(hereMap) // Dibuja el marcador en el mapa
    })

    // Watch utilizado para redibujar el mapa cada vez que cambian las coordenadas
    watch(coordinates.value, () => {
        drawHereMap(hereMap, hereMarker)
    })

    return {
        hereMapVueReference 
    }

}

export default useHereMap