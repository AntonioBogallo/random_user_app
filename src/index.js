import "./components/UserCard.js";

function createCard(data) {
  const gender = data.results[0].gender;
  const name = data.results[0].name.first + " " + data.results[0].name.last;
  const country = data.results[0].location.country;
  const city = data.results[0].location.city;
  const date = data.results[0].dob.date;
  const email = data.results[0].email;
  const phone = data.results[0].phone;
  const photo = data.results[0].picture.large;

  const userData = {
    gender,
    name,
    country,
    city,
    date,
    email,
    phone,
    photo
  };

  const elemento = document.querySelector("user-card");
  elemento.setData(userData);
}

const url = "https://randomuser.me/api";

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else console.error(response.error);
  })
  .then(data => {
    createCard(data);
  });
