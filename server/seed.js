const db = require('./models');

const users = [
  {username: 'username', password: 'password'},
  {username: 'kelvin', password: 'password'},
]

const polls = [
  {questions: 'Which is the best Js framework',
  options: ['React', 'Angular', 'Vue']
},
{
  questions: 'Which is the best mutant',
  options: ['Wolverine', 'Deadpool']
}
]