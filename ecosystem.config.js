module.exports = {
  apps: [
    {
      name: "news",
      port: "9999",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      // exec_mode: "cluster",
      // instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
