import { ref, computed, onMounted } from 'vue';
import clientsTableAPI from '@/api/clientsTableAPI';

const getClients = async() => {
    try {
        const { data: clients } = await clientsTableAPI.get('/users');
        return clients;
    } catch (error) {
        return [];
    }
}


const useClientsTable = () => {

    const clientsTable = ref([]);

    onMounted(async () => {
        clientsTable.value = await getClients();
    });


    return {
        clientsTable,
    }

}

export default useClientsTable