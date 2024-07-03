<script setup>
import ClientsTable from '@/components/ClientsTable.vue'
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

    <!-- Tabla Clientes -->
    <ClientsTable :clientsTable="clientsTable"/>
    
  </main>
</template>

<style scoped>

</style>
