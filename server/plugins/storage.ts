export default defineNitroPlugin(async () => {
  storage.on("error", (error) => {
    console.error("Storage error: ", error);
  });

  await storage.connect();
});
