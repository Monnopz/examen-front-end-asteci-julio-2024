import axios from 'axios'

// {
//     "infoUsuario": {
//         "nombre": "Pedro",
//         "primerApellido": "Custodio",
//         "segundoApellido": "Garcia",
//         "curp": "FRWD798021YTJMLP98",
//         "rfc": "FRWD7980RD1RG"
//     },
//     "domicilio": {
//         "codigoPostal": 34789,
//         "calle": "Paseo del Varado #57",
//         "numeroExterior": 57,
//         "numeroInterior": null,
//         "estado": "Michoacan",
//         "delegacion": "Morelia",
//         "colonia": "Lomas del Periferico"
//     }
// }

const newClientAPI = axios.create({
    baseURL: 'http://httpbin.org'
})

export default newClientAPI