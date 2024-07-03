<script setup>
import useClientsTable from '@/composables/useClientsTable';
import useNewClientForm from '@/composables/useNewClientForm';

const { clientsTable } = useClientsTable();
const { clientForm, onNewClientSubmit } = useNewClientForm();
</script>

<template>
  <main>
    <form class="mx-5" @submit.prevent="onNewClientSubmit">
      <div class="h3 fw-bold text-center my-4">Identificación</div>
      <div class="row">
        <div class="col1 col-md-3">
          <label for="inputName" class="form-label text-info-emphasis">Nombre*</label>
          <input v-model="clientForm.infoUsuario.nombre" type="text" class="form-control bg-body-tertiary border-0" id="inputName" aria-describedby="nameHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="col1 col-md-3">
          <label for="lastName1" class="form-label text-info-emphasis">Primer apellido*</label>
          <input v-model="clientForm.infoUsuario.primerApellido" type="text" class="form-control bg-body-tertiary border-0" id="lastName1" aria-describedby="lastName1Help">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="col1 col-md-3">
          <label for="lastName2" class="form-label text-info-emphasis">Segundo apellido</label>
          <input v-model="clientForm.infoUsuario.segundoApellido" type="text" class="form-control bg-body-tertiary border-0" id="lastName1" aria-describedby="lastName2Help">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
      </div>
      <div class="row my-4">
        <div class="col1 col-md-6">
          <label for="curp" class="form-label text-info-emphasis">CURP*</label>
          <input v-model="clientForm.infoUsuario.curp" type="text" class="form-control bg-body-tertiary border-0" id="curp" aria-describedby="curpHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="col1 col-md-6">
          <label for="rfc" class="form-label text-info-emphasis">RFC (con homoclave)*</label>
          <input v-model="clientForm.infoUsuario.rfc" type="text" class="form-control bg-body-tertiary border-0" id="rfc" aria-describedby="rfcHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
      </div>
      <div class="row my-4">
        <div class="col1 col-md-3">
          <label for="zipCode" class="form-label text-info-emphasis">Codigo postal*</label>
          <input v-model="clientForm.domicilio.codigoPostal" type="text" class="form-control bg-body-tertiary border-0" id="zipCode" aria-describedby="zipCodeHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="col1 col-md-9">
          <label for="street" class="form-label text-info-emphasis">Calle*</label>
          <input v-model="clientForm.domicilio.calle" type="text" class="form-control bg-body-tertiary border-0" id="street" aria-describedby="streetHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
      </div>
      <div class="row my-4">
        <div class="col1 col-md-3">
          <label for="extNumber" class="form-label text-info-emphasis">Número exterior*</label>
          <input v-model="clientForm.domicilio.numeroExterior" type="text" class="form-control bg-body-tertiary border-0" id="extNumber" aria-describedby="extNumberHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="col1 col-md-3">
          <label for="intNumber" class="form-label text-info-emphasis">Número interior</label>
          <input v-model="clientForm.domicilio.numeroInterior" type="text" class="form-control bg-body-tertiary border-0" id="intNumber" aria-describedby="intNumberHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="col1 col-md-6">
          <label for="state" class="form-label text-info-emphasis">Estado*</label>
          <input v-model="clientForm.domicilio.estado" type="text" class="form-control bg-body-tertiary border-0" id="state" aria-describedby="stateHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
      </div>
      <div class="row">
        <div class="col1 col-md-6">
          <label for="city" class="form-label text-info-emphasis">Delegación / Municipio*</label>
          <input v-model="clientForm.domicilio.delegacion" type="text" class="form-control bg-body-tertiary border-0" id="city" aria-describedby="cityHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="col1 col-md-6">
          <label for="suburb" class="form-label text-info-emphasis">Colonia*</label>
          <input v-model="clientForm.domicilio.colonia" type="text" class="form-control bg-body-tertiary border-0" id="suburb" aria-describedby="suburbHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        </div>
        <div class="d-flex justify-content-center my-4">
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
    </form>
    <div class="mx-5">
      <table class="table">
        <thead>
          <tr>
            <td class="text-body-secondary fw-semibold" scope="col">ID</td>
            <td class="text-body-secondary fw-semibold" scope="col">Name</td>
            <td class="text-body-secondary fw-semibold" scope="col">Email</td>
            <td class="text-body-secondary fw-semibold" scope="col">Website</td>
            <td class="text-body-secondary fw-semibold" scope="col">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="clients in clientsTable" :key="clients.id">
            <td scope="col">{{ clients.id }}</td>
            <td scope="col">{{ clients.name }}</td>
            <td scope="col">{{ clients.email }}</td>
            <td scope="col">{{ clients.website }}</td>
            <td scope="col">
              <div class="d-flex justify-content-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3F8C7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D93B75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-2 feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>

</style>
