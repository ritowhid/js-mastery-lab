function SetUsername(SetUsername) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUdername.call(this, username);

  this.email = email;
  this.password = password;
}

const towhid = new createUser("towhid", "towhid@fb.com", "123");
console.log(towhid);
