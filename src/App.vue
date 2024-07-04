<script setup>
import ClientForm from '@/components/ClientForm.vue'
import ClientsTable from '@/components/ClientsTable.vue'
import HereMap from '@/components/HereMap.vue'

</script>
<template>
  <main>
    <!-- Formulario Cliente -->
    <ClientForm />

    <!-- Tabla Clientes -->
    <ClientsTable />

    <!-- Mapa -->
    <HereMap />
  </main>
</template>

<style scoped>

</style>
