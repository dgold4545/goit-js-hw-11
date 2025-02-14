// ?Форма пошуку

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// ? import HTTP-запити
import * as pixabayapi from "./js/pixabay-api";
//  ? import Галерея і картки зображень
import * as renderfunctions from "./js/render-functions";

const lightbox = new SimpleLightbox(".js-list a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 350,
});

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
  const preloader = renderfunctions.createPreLoader();
  refsEl.list.insertAdjacentHTML("afterbegin", preloader);
  //? HTTP-запити

  pixabayapi
    .createFetchRequest(normalizedInputValue)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          // title: "Caution",
          theme: "dark",
          position: "topRight",
          messageColor: "#fff",
          titleColor: "#fff",
          backgroundColor: "#EF4040",
          maxWidth: "330px",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
      }

      //?  Галерея і картки зображень
      const markup = renderfunctions.createListMarkup(data.hits);
      refsEl.list.innerHTML = markup;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      thisCurrentTarget.reset();

      lightbox.refresh();
    });
}
