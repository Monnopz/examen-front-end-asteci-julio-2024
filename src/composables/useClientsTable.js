import { onMounted, ref } from 'vue'
import clientsTableAPI from '@/api/clientsTableAPI'
import useStore from '@/composables/useStore'

const { setCoordinates } = useStore()

const getClients = async() => {
    try {
        const { data: clients } = await clientsTableAPI.get('/users')
        return clients
    } catch (error) {
        return []
    }
}

const useClientsTable = () => {

    const clientsTable = ref([])

    onMounted(async () => {
        clientsTable.value = await getClients()

        // Agregar las coordenadas del primer cliente al store para ser cargadas por primera vez en el mapa
        const coords = { ...clientsTable.value[0].address.geo }
        setCoordinates(coords)
    });


    return {
        clientsTable
    }

}

export default useClientsTable