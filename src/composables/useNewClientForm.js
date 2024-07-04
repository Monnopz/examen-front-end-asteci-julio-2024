import { ref, computed, watch } from 'vue';
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
        },
        clientFormErrors: {
            validClientForm: false,
            validClientFormMsg: 'Existen campos por validar',
            msgNombre: '',
            msgPrimerApellido: '',
            msgSegundoApellido: '',
            msgCurp: '',
            msgRfc: '',
            msgCodigoPostal: '',
            msgCalle: '',
            msgNumeroExterior: '',
            msgEstado: '',
            msgDelegacion: '',
            msgColonia: '',
        }
    });

    const individualInputValidate = ( input, nameObject ,nameInput ) => {
        if(!input && (nameInput !== 'segundoApellido')) return '*Campo obligatorio'; // Se agrega segundoApellido porque mas abajo esta condicionado, pero necesita no ser obligatorio si esta vacio

        if(nameInput === 'nombre' || nameInput === 'primerApellido' || nameInput === 'segundoApellido' || nameInput === 'estado' || nameInput === 'delegacion' || nameInput === 'colonia'){
            const regExp = /[^a-z]+/i;
            if(input.match(regExp)) {
                return clientForm.value[nameObject][nameInput] = clientForm.value[nameObject][nameInput].slice(0, clientForm.value[nameObject][nameInput].length - 1)
            }
        }
        if(nameInput === 'codigoPostal' || nameInput === 'numeroExterior'){
            if(input.toString().length > 5) {
                return clientForm.value[nameObject][nameInput] = +clientForm.value[nameObject][nameInput].toString().slice(0, 5); 
            }
        }
        if(nameInput === 'curp'){
            const regExp = /[^a-z]+/i;
            if(input.match(regExp)) {
                return 'CURP incorrecta';
            }
        }
        if(nameInput === 'rfc'){
            const regExp = /[^a-z]+/i;
            if(input.match(regExp)) {
                return 'RFC incorrecto';
            }
        }
        return '';
    }

    const validateEntireForm = (clientFormErrors) => {
        if(Object.values(clientFormErrors).filter(error => error.length > 0).length <= 1) { // 1 por el segundoApellido que hay que sacar de la condicion
            clientForm.value.clientFormErrors.validClientForm = true
            return clientForm.value.clientFormErrors.validClientFormMsg = 'Campos validados correctamente'
        }
        clientForm.value.clientFormErrors.validClientFormMsg = 'Existen campos por validar'
        return clientForm.value.clientFormErrors.validClientForm = false;
    }

    watch( clientForm.value, () => {
        clientForm.value.clientFormErrors.msgNombre = individualInputValidate(clientForm.value.infoUsuario.nombre, 'infoUsuario', 'nombre');
        clientForm.value.clientFormErrors.msgPrimerApellido = individualInputValidate(clientForm.value.infoUsuario.primerApellido, 'infoUsuario', 'primerApellido');
        clientForm.value.clientFormErrors.msgSegundoApellido = individualInputValidate(clientForm.value.infoUsuario.segundoApellido, 'infoUsuario', 'segundoApellido');
        clientForm.value.clientFormErrors.msgCurp = individualInputValidate(clientForm.value.infoUsuario.curp, 'infoUsuario', 'curp');
        clientForm.value.clientFormErrors.msgRfc = individualInputValidate(clientForm.value.infoUsuario.rfc, 'infoUsuario', 'rfc');
        clientForm.value.clientFormErrors.msgCodigoPostal = individualInputValidate(clientForm.value.domicilio.codigoPostal, 'domicilio', 'codigoPostal');
        clientForm.value.clientFormErrors.msgCalle = individualInputValidate(clientForm.value.domicilio.calle, 'domicilio', 'calle');
        clientForm.value.clientFormErrors.msgNumeroExterior = individualInputValidate(clientForm.value.domicilio.numeroExterior, 'domicilio', 'numeroExterior');
        clientForm.value.clientFormErrors.msgEstado = individualInputValidate(clientForm.value.domicilio.estado, 'domicilio', 'estado');
        clientForm.value.clientFormErrors.msgDelegacion = individualInputValidate(clientForm.value.domicilio.delegacion, 'domicilio', 'delegacion');
        clientForm.value.clientFormErrors.msgColonia = individualInputValidate(clientForm.value.domicilio.colonia, 'domicilio', 'colonia');
    
        // Llama el metodo para validar todo el form esparciendo el objeto para romper referencia
        validateEntireForm({...clientForm.value.clientFormErrors});
    }, { immediate: true })

    const onNewClientSubmit = async() => {
        if(clientForm.value.clientFormErrors.validClientForm) {
            // Obtiene el valor de la propiedad reactiva y lo convierte a JSON rompiendo tambien referencias
            const resp = await newClient(JSON.stringify({ infoUsuario: {...clientForm.value.infoUsuario}, domicilio: {...clientForm.value.domicilio} }));
            alert('Nuevo registro guardado con éxito')
            
        }
    }

    return {
        clientForm, 

        validClientForm: computed(() => clientForm.value.clientFormErrors.validClientForm),

        onNewClientSubmit
    }

}

export default useNewClientForm