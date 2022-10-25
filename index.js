const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('courses api running');
})

app.get('/courses-categories', (req, res) => {
    res.send(categories);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    const category_courses = courses.filter(course => course.category_id === id);
    res.send(category_courses);
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(course => course._id === id);
    res.send(selectedCourses);
})

app.listen(port, () => {
    console.log('Code Ideology server running on', port);
})
