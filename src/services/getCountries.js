export const getCountries = (name, region) => {
  let conroler = new AbortController();
  let URL;
  const baseURL = "https://restcountries.com/v3.1/";
  if (name) {
    URL = baseURL + "name/" + name;
  } else if (region && region !== "all") {
    URL = baseURL + "region/" + region;
  } else {
    URL = baseURL + "all";
  }

  return new Promise((resolve, reject) => {
    fetch(URL, {
      signal: conroler.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        resolve({ data, abort: conroler.abort });
      });
  });
};
