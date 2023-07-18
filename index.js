async function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = country.translations.por.common;

  const name = document.createElement("h3");
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  console.log(countries);
  countries.forEach(createCountryCard);
}
getCountries();
