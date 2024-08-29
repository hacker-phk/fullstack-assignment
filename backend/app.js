const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');
const cors = require("cors");
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/cards', cardRoutes);

app.get('/ping', (req, res) => {
  res.send('Server is running');
});

mongoose.connect(
  "mongodb+srv://mernlearn:VuFIdDFpn3iAmsK0@cluster0.ex40eey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});
