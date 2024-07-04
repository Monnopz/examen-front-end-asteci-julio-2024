<script setup>
import { ref } from 'vue';
import ClientForm from '@/components/ClientForm.vue'
import ClientsTable from '@/components/ClientsTable.vue'
import HereMap from '@/components/HereMap.vue'

import useClientsTable from '@/composables/useClientsTable'

const { clientsTable, client } = useClientsTable();
</script>
<template>
  <main>
    <!-- Formulario Cliente -->
    <ClientForm />

    <!-- Tabla Clientes -->
    <ClientsTable :clientsTable="clientsTable" @rowClientTableEvt="(localClient) => console.log(localClient)" />
    <!-- Mapa -->
    <HereMap />

  </main>
</template>

<style scoped>

</style>
