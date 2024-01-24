<script setup lang="ts">
import ServerList from "@/components/Server/ServerList.vue";
import ServerEditor from "@/components/Server/ServerEditor.vue";
import { ServerItem, ServerType } from "@/types/ServerTypes.ts";

function generateRandomServers(count): ServerItem[] {
  const items: ServerItem[] = [];
  const serverTypes: ServerType[] = ["vds", "hosting", "dedicated"];

  for (let i = 0; i < count; i++) {
    const randomItem: ServerItem = {
      customer_id: `user${Math.floor(Math.random() * 10) + 1}`,
      server_name: `server${Math.floor(Math.random() * 10) + 1}`,
      server_type: serverTypes[Math.floor(Math.random() * serverTypes.length)],
    };

    items.push(randomItem);
  }

  return items;
}

const servers: ServerItem[] = generateRandomServers(5);
</script>

<template>
  <div class="container min-h-screen flex items-center">
    <div class="w-full grid grid-cols-2 gap-4">
      <ServerList :servers="servers" />

      <ServerEditor />
    </div>
  </div>
</template>
