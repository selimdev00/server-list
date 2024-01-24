<script setup lang="ts">
import ServerList from "@/components/Server/ServerList.vue";
import ServerEditor from "@/components/Server/ServerEditor.vue";

import { useServerList } from "@/composables/useServerList.ts";

const { generateRandomServers } = useServerList();
generateRandomServers(5);
</script>

<template>
  <div class="container min-h-screen flex items-center">
    <div class="w-full grid gap-4 sm:grid-cols-2">
      <ServerList />

      <ServerEditor />
    </div>
  </div>
</template>
