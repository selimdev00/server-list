<script setup lang="ts">
import { useServerList } from "@/composables/useServerList.ts";

const { servers, setSelectedServer, selectedServer, generateRandomServers } =
  useServerList();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="font-semibold text-xl">Server list:</h1>

      <div class="flex items-center gap-2">
        <button
          class="border border-sky-300 px-2 py-1 rounded text-xs"
          @click="setSelectedServer(null)"
        >
          Deselect
        </button>

        <button
          class="border border-sky-300 px-2 py-1 rounded text-xs"
          @click="servers = []"
        >
          Clear
        </button>
      </div>
    </div>

    <ul v-if="servers.length" class="flex flex-col">
      <li
        v-for="server in servers"
        :key="server.customer_id"
        class="p-2 border border-gray-300 cursor-pointer transition hover:bg-gray-50 hover:border-sky-300 hover:text-sky-500 flex justify-between items-center first:rounded-t last:rounded-b"
        @click="setSelectedServer(server)"
        :class="{
          'bg-gray-50 border-sky-300 text-sky-500':
            server.id === selectedServer?.id,
        }"
      >
        <div>
          <span class="text-xs text-gray-500">{{ server.customer_id }}</span>

          <h2>{{ server.server_name }}</h2>
        </div>

        <span
          class="border-sky-300 border px-2 py-1 rounded text-sky-500 text-xs"
          >{{ server.server_type }}</span
        >
      </li>
    </ul>

    <div
      v-else
      class="min-h-[200px] flex flex-col gap-4 items-center justify-center border border-gray-300 rounded"
    >
      <p class="text-gray-500 text-center text-sm">No servers</p>

      <button
        class="border border-sky-300 px-2 py-1 rounded text-xs"
        @click="generateRandomServers(5)"
      >
        Generate random servers
      </button>
    </div>
  </div>
</template>
