const bcrypt = require('bcrypt');
const password = 'khaled';
bcrypt.hash(password, 10, function (err, hash) {
  if (err) {
    console.log(err);
  } else {
    console.log('Hashed password: ' + hash);
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Password match: ' + result);
      }
    });
  }
});