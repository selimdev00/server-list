export type ServerType = "vds" | "hosting" | "dedicated";

export type ServerItem = {
  id: number;
  customer_id: string;
  server_name: string;
  server_type: ServerType;
};
