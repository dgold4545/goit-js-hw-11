export function getQuery(requestWord) {
  const BASE_URL = "https://pixabay.com";
  const END_POINT = "/api/";
  const params = new URLSearchParams({
    key: "44734756-d98c11aebccc1bae684f0851d",
    q: requestWord,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  const headers = {};

  const url = `${BASE_URL}${END_POINT}?${params}`;
  console.log(url);
  return fetch(url, headers)
    .then(response => {
      if (!response.or) {
        throw new Error();
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

getQuery("flower")
  .then(data => console.log(data))
  .catch(error => console.log(error));
