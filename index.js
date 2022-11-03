const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv');
const port = process.env.PORT || 5000;

//* middleware
app.use(express.json());
app.use(cors());

//* routes
app.get('/', (req, res) => {
    res.send('Ema-John Server');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})