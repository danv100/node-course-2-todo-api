const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5aab2fb730fbc05107c55a9ee';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// User.findById

User.findById('5aa1fd477e8f3009095bed16').then((user) => {
    if (!user) {
       return console.log('Unable to find user'); 
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})