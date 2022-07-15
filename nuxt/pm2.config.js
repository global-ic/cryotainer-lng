module.exports = {
  apps: [
    {
      name: 'cryotainer-website-nuxt',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        PORT: 8086,
      },
    },
  ],
};
