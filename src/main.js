// ?Форма пошуку

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refsEl = {
  form: document.querySelector(".js-form"),
  list: document.querySelector(".js-list"),
};

refsEl.form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const thisCurrentTarget = event.currentTarget;

  const normalizedInputValue = thisCurrentTarget.elements.query.value
    .trim()
    .toLowerCase();

  if (!normalizedInputValue) {
    return;
  }

  //? HTTP-запити

  createFetchRequest(normalizedInputValue)
    .then(data => {
      console.log(data.hits);
      if (!data.hits.length) {
        iziToast.error({
          title: "Caution",
          position: "topRight",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}

const API_KEY = "44734756-d98c11aebccc1bae684f0851d";

function createFetchRequest(userRequest) {
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
