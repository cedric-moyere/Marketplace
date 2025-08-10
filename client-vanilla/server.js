const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/component/:name', (req, res) => {
  const fileName = req.params.name;
  const filePath = path.join(__dirname, 'components', `${fileName}.html`);

  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).send('Composant non trouvé');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne : http://localhost:${PORT}`);
});
