require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 3000;
// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`escuchando en el puert ${PORT}`); // eslint-disable-line no-console
  });
});


