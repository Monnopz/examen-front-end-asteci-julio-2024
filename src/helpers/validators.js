export const _CURPVALIDATOR = (curp) => {
    const regExp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
    return curp.trim().toUpperCase().match(regExp)
}

export const _RFCVALIDATOR = (rfc) => {
    // Fuente: https://www.sat.gob.mx/cs/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1461175750735&ssbinary=true
    // Nombre: RFC Personal
    const regExp = /^([A-ZÑ]|\&){4}[0-9]{2}(0[1-9]|1[0-2])([12][0-9]|0[1-9]|3[01])[A-Z0-9]{3}$/
    return rfc.trim().toUpperCase().match(regExp) 
}