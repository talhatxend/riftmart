const express = require('express');
const cors = require('cors');
const { products, category } = require('./data');
const productRouter = require('./router/products');
const categoryRouter = require('./router/categories');
const connectDB = require('./db');
const { json } = require('express');

const app = express();
app.use(cors());
app.use(json());

connectDB();

app.use('/products', productRouter);

app.use('/categories', categoryRouter);

app.listen(4000, () => console.log('Listening to port 4000'));
