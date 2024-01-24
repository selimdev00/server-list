<script setup lang="ts">
import { ServerItem } from "@/types/ServerItem.vue";

const props = defineProps({
  servers: {
    type: Array as () => ServerItem[],
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-semibold text-xl">Server list:</h1>

    <ul class="flex flex-col">
      <li
        v-for="server in props.servers"
        :key="server.customer_id"
        class="p-2 border border-gray-300 cursor-pointer transition hover:bg-gray-50 hover:border-sky-300 hover:text-sky-500 flex justify-between items-center first:rounded-t last:rounded-b"
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
  </div>
</template>
