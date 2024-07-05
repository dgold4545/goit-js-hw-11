export const API_KEY = "44734756-d98c11aebccc1bae684f0851d";

export function createFetchRequest(userRequest) {
  const BASE_URL = "https://pixabay.com";
  const END_POINT = "/api/";
  const options = new URLSearchParams({
    key: API_KEY,
    q: userRequest,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  const URL = `${BASE_URL}${END_POINT}?${options}`;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(URL, { options, requestOptions }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
