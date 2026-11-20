const express = require('express');
const path = require('path');
const boardRoutes = require('./routes/board');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', boardRoutes);

app.use((req, res) => res.status(404).render('message', {
  title: 'Page not found', message: 'That page does not exist.'
}));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Campus Board running on port ${port}`));
