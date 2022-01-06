export const getCountries = () => {
  return new Promise((resolve, reject) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};
