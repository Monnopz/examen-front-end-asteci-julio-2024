<script setup>
import useClientsTable from '@/composables/useClientsTable'
import useStore from '@/composables/useStore'

const { coordinates, setCoordinates } = useStore()

const { clientsTable } = useClientsTable()
</script>

<template>
    <div class="mx-5 table-responsive">
      <table class="table table-hover">
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
          <tr v-for="clients in clientsTable" :key="clients.id" @click="() => setCoordinates({ ...clients.address.geo })">
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
      <div>{{ 'Coordenadas -> Lat: ' + coordinates.lat + ' Lng: ' + coordinates.lng }}</div>
    </div>
</template>

<style scoped>

</style>
