<template>
  <div>
    <ul>
      <li v-for="server in props.servers" :key="server.customer_id">
        {{ server.customer_id }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ServerItem } from "@/types/ServerItem.vue";

const props = defineProps({
  servers: {
    type: Array as () => ServerItem[],
    default: () => [],
  },
});
</script>
