const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

const mongoURI = 'mongodb://localhost:27017/tu_basedatos'; // Reemplaza con tu URI de MongoDB

app.get('/', (req, res) => {
  MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al conectar a la base de datos');
    } else {
      const db = client.db('tu_basedatos'); // Reemplaza con el nombre de tu base de datos
      const collection = db.collection('tu_coleccion'); // Reemplaza con el nombre de tu colección

      // Realiza operaciones en la base de datos aquí, por ejemplo, consulta datos.
      collection.find({}).toArray((err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al consultar la base de datos');
        } else {
          res.json(data); // Envia los datos como respuesta al cliente
        }

        client.close(); // Cierra la conexión a la base de datos cuando hayas terminado
      });
    }
  });
}
);


app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
