const jsonServer = require('json-server'); 
const clone = require('clone'); //making deep copy 
const data = require('./projects.json');

const app = jsonServer.create(); //making express app

const router = jsonServer.router(clone(data), {_IsFake: true}); //router which makes rest rutes from json objects

//middleware(in between client side and server side)
app.use((req, res, next) => {
    if(req.path === '/') return next();
    router.db.setState(clone(data)); //reset on every request
    next(); //goes on next middleware on route?
});

app.use(jsonServer.defaults({ //adding default middleware from json-server
    logger: process.env.NODE_ENV !== 'production'
}));

app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Fake API running at http://localhost:${PORT}`);
});

