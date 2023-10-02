console.log("Hello world");

fetch("http://localhost:3000/users") // GET ALL ở trên server
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
