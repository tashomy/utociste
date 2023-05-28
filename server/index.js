import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();
app.use(cors());



app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb+srv://utociste:utocisteprojekat@utociste.y63ir3q.mongodb.net/?retryWrites=true&w=majority';
const port = 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(port, () => console.log('Server running')) ).catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);