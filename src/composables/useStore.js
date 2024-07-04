import { ref } from 'vue'

const coordinates = ref({ lat: 0 , lng: 0 })

const useStore = () => {

    const setCoordinates = ({lat, lng}) => {
        coordinates.value.lat = +lat;
        coordinates.value.lng = +lng;
    }

    return {
        coordinates,

        setCoordinates
    }
}

export default useStore