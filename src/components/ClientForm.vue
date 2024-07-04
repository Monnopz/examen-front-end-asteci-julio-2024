<script setup>
import useNewClientForm from '@/composables/useNewClientForm'
const { clientForm, validClientForm, onNewClientSubmit } = useNewClientForm()
</script>

<template>
    <form class="mx-5" @submit.prevent="onNewClientSubmit" :novalidate="true">
      <div class="h3 fw-bold text-center my-4">Identificación</div>
      <div :class="[ !validClientForm ? 'alert-danger' : 'alert-success' ]" class="alert" role="alert">
        {{ clientForm.clientFormErrors.validClientFormMsg }}
      </div>
      <div class="row">
        <div class="col1 col-md-3">
          <label for="inputName" class="form-label text-info-emphasis">Nombre*</label>
          <input v-model="clientForm.infoUsuario.nombre" type="text" :class="[clientForm.clientFormErrors.msgNombre ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="inputName" aria-describedby="nameHelp" required>
          <div v-if="clientForm.clientFormErrors.msgNombre" class="text-danger">
            {{ clientForm.clientFormErrors.msgNombre }}
          </div>
        </div>
        <div class="col1 col-md-3">
          <label for="lastName1" class="form-label text-info-emphasis">Primer apellido*</label>
          <input v-model="clientForm.infoUsuario.primerApellido" type="text" :class="[clientForm.clientFormErrors.msgPrimerApellido ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="lastName1" aria-describedby="lastName1Help" required>
          <div v-if="clientForm.clientFormErrors.msgPrimerApellido" class="text-danger">
            {{ clientForm.clientFormErrors.msgPrimerApellido }}
          </div>
        </div>
        <div class="col1 col-md-3">
          <label for="lastName2" class="form-label text-info-emphasis">Segundo apellido</label>
          <input v-model="clientForm.infoUsuario.segundoApellido" type="text" :class="[clientForm.clientFormErrors.msgSegundoApellido ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="lastName1" aria-describedby="lastName2Help">
          <div v-if="clientForm.clientFormErrors.msgSegundoApellido" class="text-danger">
            {{ clientForm.clientFormErrors.msgSegundoApellido }}
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col1 col-md-6">
          <label for="curp" class="form-label text-info-emphasis">CURP*</label>
          <input v-model="clientForm.infoUsuario.curp" type="text" maxlength="18" :class="[clientForm.clientFormErrors.msgCurp ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="curp" aria-describedby="curpHelp" required>
          <div v-if="clientForm.clientFormErrors.msgCurp" class="text-danger">
            {{ clientForm.clientFormErrors.msgCurp }}
          </div>
        </div>
        <div class="col1 col-md-6">
          <label for="rfc" class="form-label text-info-emphasis">RFC (con homoclave)*</label>
          <input v-model="clientForm.infoUsuario.rfc" type="text" maxlength="13" :class="[clientForm.clientFormErrors.msgRfc ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="rfc" aria-describedby="rfcHelp" required>
          <div v-if="clientForm.clientFormErrors.msgRfc" class="text-danger">
            {{ clientForm.clientFormErrors.msgRfc }}
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col1 col-md-3">
          <label for="zipCode" class="form-label text-info-emphasis">Codigo postal*</label>
          <input v-model="clientForm.domicilio.codigoPostal" type="number" maxlength="5" :class="[clientForm.clientFormErrors.msgCodigoPostal ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="zipCode" aria-describedby="zipCodeHelp" required>
          <div v-if="clientForm.clientFormErrors.msgCodigoPostal" class="text-danger">
            {{ clientForm.clientFormErrors.msgCodigoPostal }}
          </div>
        </div>
        <div class="col1 col-md-9">
          <label for="street" class="form-label text-info-emphasis">Calle*</label>
          <input v-model="clientForm.domicilio.calle" type="text" :class="[clientForm.clientFormErrors.msgCalle ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="street" aria-describedby="streetHelp" required>
          <div v-if="clientForm.clientFormErrors.msgCalle" class="text-danger">
            {{ clientForm.clientFormErrors.msgCalle }}
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col1 col-md-3">
          <label for="extNumber" class="form-label text-info-emphasis">Número exterior*</label>
          <input v-model="clientForm.domicilio.numeroExterior" type="number" maxlength="5" :class="[clientForm.clientFormErrors.msgNumeroExterior ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="extNumber" aria-describedby="extNumberHelp" required>
          <div v-if="clientForm.clientFormErrors.msgNumeroExterior" class="text-danger">
            {{ clientForm.clientFormErrors.msgNumeroExterior }}
          </div>
        </div>
        <div class="col1 col-md-3">
          <label for="intNumber" class="form-label text-info-emphasis">Número interior</label>
          <input v-model="clientForm.domicilio.numeroInterior" type="text" maxlength="10" class="form-control bg-body-tertiary border-0" id="intNumber" aria-describedby="intNumberHelp">
        </div>
        <div class="col1 col-md-6">
          <label for="state" class="form-label text-info-emphasis">Estado*</label>
          <input v-model="clientForm.domicilio.estado" type="text" :class="[clientForm.clientFormErrors.msgEstado ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="state" aria-describedby="stateHelp" required>
          <div v-if="clientForm.clientFormErrors.msgEstado" class="text-danger">
            {{ clientForm.clientFormErrors.msgEstado }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col1 col-md-6">
          <label for="city" class="form-label text-info-emphasis">Delegación / Municipio*</label>
          <input v-model="clientForm.domicilio.delegacion" type="text" :class="[clientForm.clientFormErrors.msgDelegacion ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="city" aria-describedby="cityHelp" required>
          <div v-if="clientForm.clientFormErrors.msgDelegacion" class="text-danger">
            {{ clientForm.clientFormErrors.msgDelegacion }}
          </div>
        </div>
        <div class="col1 col-md-6">
          <label for="suburb" class="form-label text-info-emphasis">Colonia*</label>
          <input v-model="clientForm.domicilio.colonia" type="text" :class="[clientForm.clientFormErrors.msgColonia ? 'border-danger' : 'border-0']" class="form-control bg-body-tertiary" id="suburb" aria-describedby="suburbHelp" required>
          <div v-if="clientForm.clientFormErrors.msgColonia" class="text-danger">
            {{ clientForm.clientFormErrors.msgColonia }}
          </div>
        </div>
        </div>
        <div class="d-flex justify-content-center my-4">
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
    </form>
</template>

<style scoped>

</style>
