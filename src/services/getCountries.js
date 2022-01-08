export const getCountries = (name, region) => {
  let controler = new AbortController();
  let URL;
  const baseURL = "https://restcountries.com/v3.1/";
  if (name) {
    URL = baseURL + "name/" + name;
  } else if (region && region !== "All") {
    URL = baseURL + "region/" + region;
  } else {
    URL = baseURL + "all";
  }

  return new Promise((resolve, reject) => {
    fetch(URL, {
      signal: controler.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        resolve({ data, abort: controler.abort });
      });
  });
};
