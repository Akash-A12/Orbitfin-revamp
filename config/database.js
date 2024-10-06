module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: 'strapiorbitfin.c47xukp7eagm.eu-west-2.rds.amazonaws.com',
      port: '5432',
      database: 'strapi',
      user: 'strapiOrbitfinNew',
      password: 'orbitfin$$2024',
    },
    useNullAsDefault: true,
  },
});
