import { createClient } from "redis";

const config = useRuntimeConfig();
const url =
  config.storageUsername && config.storagePassword
    ? `redis://${config.storageUsername}:${config.storagePassword}@${config.storageHost}:${config.storagePort}`
    : `redis://${config.storageHost}:${config.storagePort}`;

export const storage = createClient({
  url,
});
