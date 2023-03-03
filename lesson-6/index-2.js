function showUsers(users) {
  // exactly the same as below
  // for (const user of users) {
  //   console.log(user.email);
  // }

  // exactly the same as above
  // for (let i = 0; i < users.length; i += 1) {
  //   const user = users[i];
  //   console.log(user.email);
  // }

  // exactly the same as above
  users.forEach((user, index, users) => {
    console.log(users);
  });
}

const users = [
  { id: 1, email: "first@mail.com" },
  { id: 2, email: "second@mail.com" },
  { id: 3, email: "third@mail.com" },
];

showUsers(users);
