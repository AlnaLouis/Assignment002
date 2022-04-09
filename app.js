//const { name } = require('ejs');

const express = require('express');
//const methodOverride = require('method-override')
const nav = [
   {link:'/books',name:'Books'},
   {link:'/authors',name:'Authors'},
   {link:'/log',name:'Login'},
   {link:'/sign',name:'signin'}
 

  ///addbook is edited to /admin cause admin has only the permission 
];

const bookRouter = require('./src/router/booksRoutes')(nav)
const authRouter = require('./src/router/authRoutes')(nav)
const signRouter = require('./src/router/signRoutes')(nav)
const logRouter = require('./src/router/logRoutes')(nav)
const adminRouter = require('./src/router/adminRoutes')(nav)
const aadminRouter = require('./src/router/aadminRoutes')(nav)
const dashRouter = require('./src/router/dashRouter')(nav)
const updateAuthorRouter = require('./src/router/updateAuthorRoutes')(nav)
const deleteAuthorRouter = require('./src/router/deletea')(nav)
const editBookRouter= require('./src/router/editbook');
const deleteBookRouter= require('./src/router/deleteb');
//create separate route handler
//const authRouter = express.Router;
const app = express();
app.use(express.static('./public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.set('views',__dirname+'/src/views');//this can be also given as__dirname+ instead of .

// teaching server that when ever / books come it  it should route to books
app.use('/books',bookRouter);//we use app.use because what ever comes after /book/ it should route to books page
app.use('/authors',authRouter);
app.use('/sign',signRouter);
app.use('/admin',adminRouter);
app.use('/log',logRouter);
app.use('/dashboard',dashRouter);
app.use('/aadmin',aadminRouter);
app.use('/edit',updateAuthorRouter);
app.use('/delete',deleteAuthorRouter);
app.use('/editb',editBookRouter);
app.use('/deleteb',deleteBookRouter);
//app.use(methodOverride('_method'));


app.get('/',function(req,res){

   // res.sendFile(__dirname+"/src/views/index.html");// this is used to send a file
   //res.render is used in ejs file
  // res.render("index",{books:['book1','book2'],title:'library'});
  res.render("index",
  {
   nav,
   title:'Library'
});
});
// to go to books page route to book page first method
/*app.get('/books',function(req,res){
   res.render("books",{
      nav:[{link:'./books',name:'Book'},{link:'./authors',name:'Authors'}],
      title:'Jesus',
      books
   });
});*/


/*authRouter.get('/',function(req,res){
   res.render("authors",{
      nav:[{link:'./books',name:'Book'},{link:'./authors',name:'Authors'}],
      title:'Alna'
   });
});*/
/*bookRouter.get('/single',function(req,res){
   res.send("hey I am a single book");
});*/

//while accessing something from the  url use colon infront of it we can use any name other name than i like id

/*bookRouter.get('/:id',function(req,res){
   const id =req.params.id 
   res.render('author',{
      nav,
      title:'Jesus',
      author:author[id] 
   });
});
*/
/*app.get('/login',function(req,res){
   res.render("login",{
      nav,
      title:'Login',
   
   });
});*/
/*app.get('/signin',function(req,res){
   res.render("signin",{
      nav,
      title:'Sign in',
   
   });
});*/
/*
app.get('/addbook',function(req,res){
   res.render("addbook",{
      nav,
      title:'Addbook',
   
   });
});
app.get('/addauthor',function(req,res){
   res.render("addauthor",{
      nav,
      title:'AddAuthor',
   
   });
});*/
//here we put/ only beacause its already declared
/*authRouter.get('/',function(req,res){
   res.render("authors",{
      nav,
      title:'Jesus',
      books
   });
});*/

app.listen(process.env.PORT || 7000);
