import { ref, computed, onMounted } from 'vue';
import newClientAPI from '@/api/newClientAPI';

const newClient = async( client ) => {

    try {
        const { data: resp } = await newClientAPI.post('/post', client);
        return resp;
    } catch (error) {
        return resp;
    }
}


const useNewClientForm = () => {


    const clientForm = ref({
        infoUsuario: {
            nombre: '',
            primerApellido: '',
            segundoApellido: '',
            curp: '',
            rfc: ''
        },
        domicilio: {
            codigoPostal: null,
            calle: '',
            numeroExterior: null,
            numeroInterior: null,
            estado: '',
            delegacion: '',
            colonia: ''
        }
    });

    const onNewClientSubmit = async() => {
        
        // Obtiene el valor de la propiedad reactiva y lo convierte a JSON
        const resp = await newClient(JSON.stringify(clientForm.value));
        console.log(resp);
        
    }


    return {

        clientForm,

        onNewClientSubmit
    }

}

export default useNewClientForm