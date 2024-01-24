<script setup lang="ts">
import { useServerList } from "@/composables/useServerList.ts";
import FormInput from "@/components/Form/FormInput.vue";
import FormSelect from "@/components/Form/FormSelect.vue";

const { selectedServer, saveSelectedServer, deleteSelectedServer } =
  useServerList();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-semibold text-xl">Server editor:</h1>

    <div class="p-2 h-full border-gray-300 border rounded">
      <div
        v-if="!selectedServer"
        class="h-full flex items-center justify-center"
      >
        <p class="text-gray-500 text-center text-sm">Select server to edit</p>
      </div>

      <form
        v-else
        class="flex flex-col justify-between h-full gap-4"
        @submit.prevent="saveSelectedServer"
        data-server-editor
      >
        <div class="flex flex-col gap-3">
          <FormInput
            id="customer_id"
            v-model="selectedServer.customer_id"
            label="Customer id"
          />

          <FormInput
            id="server_name"
            v-model="selectedServer.server_name"
            label="Server name"
          />

          <FormSelect
            id="type"
            v-model="selectedServer.server_type"
            label="Server type"
            :options="['vds', 'hosting', 'dedicated']"
          />
        </div>

        <div class="w-full flex items-center gap-2">
          <button
            class="border-0 bg-sky-500 px-2 py-1 rounded text-white w-full"
            type="submit"
          >
            Save
          </button>

          <button
            id="delete"
            class="border-0 bg-red-500 px-2 py-1 rounded text-white w-full"
            @click="deleteSelectedServer"
          >
            Delete
          </button>

          <button
            id="cancel"
            class="border-0 bg-gray-500 px-2 py-1 rounded text-white w-full"
            @click="selectedServer = null"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
