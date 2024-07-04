import { onMounted, ref } from 'vue';

const useHereMap = () => {

    const platform = ref(null);
    const coordinates = ref({ lat: 40.730610, lng: -73.935242 });
    const apikey = import.meta.env.VITE_HEREMAP_KEY;

    const hereMap = ref(null)

    // Renderizar mapa
    const initializeHereMap = () => {

        const mapContainer = hereMap.value;
        const H = window.H;
        // Obtain the default map types from the platform object
        const maptypes = platform.value.createDefaultLayers();

        // Instantiate (and display) a map object:
        const map = new H.Map(mapContainer, maptypes.vector.normal.map, {
            zoom: 10,
            center: coordinates.value
            // center object { lat: 40.730610, lng: -73.935242 }
        });

        addEventListener("resize", () => map.getViewPort().resize());

        // add behavior control
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // add UI
        H.ui.UI.createDefault(map, maptypes);
        // End rendering the initial map
    }

    onMounted(async() => {
        // Initialize the platform object:
        const platformLocal = await new window.H.service.Platform({
            'apikey': apikey
        });
        platform.value = platformLocal;
        initializeHereMap();
    })


    return {
        hereMap,

        coordinates
    }

}

export default useHereMap