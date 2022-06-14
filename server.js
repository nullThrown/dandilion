const express = require('express');
const mongooseConnect = require('./database');
require('dotenv').config();
const cors = require('cors');
const app = express();

mongooseConnect();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ success: 'server is running!' });
});
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/user', require('./routes/user'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port: ${port}`));