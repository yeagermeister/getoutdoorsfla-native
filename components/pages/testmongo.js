import React, { useState, useEffect } from 'react';

import mongoose from 'mongoose';


const Mongo = () => {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    mongoose.connect('mongodb+srv://getoudoorsfla_admin:RV7TmUKAsqzlIccV@cluster0.v9ej8dw.mongodb.net/testretryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('MongoDB Connected!');
        setConnected(true);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div>
          {connected ? <p>MongoDB Connected!</p> : <p>Connecting to MongoDB...</p>}
        </div>
      );
 
}
export default Mongo;