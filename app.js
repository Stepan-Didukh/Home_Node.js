const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();
const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true}));

app.engine('hbs', expHbs({ defaultLayout: null }));

app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'static'));

const { AuthRouter, houseRouter, userRouter } = require('./router');

app.use('/auth', AuthRouter );
app.use('/houses', houseRouter );
app.use('/users', userRouter);


app.all('*',async (req,res)=>{res.json('Not found')});

app.listen(3000,()=>{
    console.log('3000');
});
