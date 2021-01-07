const app=express();
const {API_VERSION}= require('./config');

//Load routings



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configuracion http
// Configure Header HTTP

  
//Router basic
app.use(`/api/${API_VERSION}`,authRoutes);
app.use(`/api/${API_VERSION}`,userRoutes);

module.exports=app;