import { ref } from "vue";
import { ServerItem, ServerType } from "@/types/ServerTypes.ts";

const servers = ref<ServerItem[]>([]);
const selectedServer = ref<ServerItem | null>(null);

export function useServerList() {
  function setSelectedServer(server: ServerItem | null) {
    if (!server) {
      selectedServer.value = null;
      return;
    }

    selectedServer.value = Object.assign({}, server);
  }

  function generateRandomServers(count: number) {
    const items: ServerItem[] = [];
    const serverTypes: ServerType[] = ["vds", "hosting", "dedicated"];

    for (let i = 0; i < count; i++) {
      const randomItem: ServerItem = {
        id: i + 1,
        customer_id: `user${Math.floor(Math.random() * 10) + 1}`,
        server_name: `server${Math.floor(Math.random() * 10) + 1}`,
        server_type:
          serverTypes[Math.floor(Math.random() * serverTypes.length)],
      };

      items.push(randomItem);
    }

    servers.value = items;
  }

  function saveSelectedServer() {
    if (!selectedServer.value) {
      return;
    }

    const index = servers.value.findIndex(
      (server) => server.id === selectedServer.value?.id,
    );

    if (index > -1) {
      servers.value.splice(index, 1, selectedServer.value);
    }

    setSelectedServer(null);
  }

  return {
    servers,
    selectedServer,
    setSelectedServer,
    generateRandomServers,
    saveSelectedServer,
  };
}
