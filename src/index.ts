const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors')
const bodyParser = require('body-parser');

import uploadRouter from './routes/upload';
import listMeasures from './routes/list';
import confirmMeasures from './routes/confirm';

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/upload', uploadRouter); 

app.use('/confirm', confirmMeasures);

app.use('/list', listMeasures);



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});