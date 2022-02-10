// Pemanggilan package express
const express = require('express');

// Menggunakan package express
const app = express();

// set template engine
app.set('view engine', 'hbs');

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

// true => sudah login
// false => belum login
const isLogin = true;

//Membuat Array Object yg akan menyimpan Data blog list
const blogs = [
  {
    title: 'Judul',
    content: 'Judul',
    author: 'Judul',
    posted_ad: 'Judul',
  },
];
//bulan
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

// Set endpoint
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/home', function (req, res) {
  res.render('index');
});

//memanipulasi data atau menambahkan data ke list blog apabila ada blog baru yg diinput
app.get('/blog', function (req, res) {
  console.log(blogs);

  let dataBlogs = blogs.map(function (data) {
    return {
      ...data,
      isLogin: isLogin,
    };
  });

  res.render('blog', { isLogin: isLogin, blogs: dataBlogs });
});

//add
app.get('/add-blog', function (req, res) {
  res.render('form-blog');
});

//DELETE list blog
app.get('/delete-blog/:index', function (req, res) {
  let index = req.params.index;

  console.log(`Index Data : ${index}`);

  blogs.splice(index, 1);
  res.redirect('/blog');
});

//mengambil data dari inputan blog agar bisa di tambahkan di list blog
app.post('/blog', function (req, res) {
  let title = req.body.title;
  let content = req.body.content;

  let blog = {
    title: title,
    content,
    author: 'Ali Musthofa',
    posted_at: getFullTime(new Date()),
  };

  blogs.push(blog);
  res.redirect('/blog');
});

app.get('/blog/:id', function (req, res) {
  let id = req.params.id;
  console.log(`Id dari client : ${id}`);

  res.render('blog-detail', { id: id });
});

app.get('/contact-me', function (req, res) {
  res.render('contact');
});

//konfigurasi port aplikasi
const port = 3000;
app.listen(port, function () {
  console.log(`server running on port ${port}`);
});

function getFullTime(time) {
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  let hours = time.getHours();
  let minutes = time.getMinutes();

  return ` ${date} ${month[monthIndex]}  ${year} ${hours}:${minutes} WIB`;
}
