const refs = {
  form: document.querySelector(".js-form"),
  list: document.querySelector(".js-list"),
};
// Форма пошуку міститься в HTML-документі. Користувач буде вводити рядок для пошуку в текстове поле, а за сабмітом форми необхідно виконувати HTTP-запит із цим пошуковим рядком.

refs.form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const thisForm = event.currentTarget;
  const inputValue = thisForm.elements.query.value;
  const normalizeInputValue = inputValue.trim().toLowerCase();

  if (!normalizeInputValue) {
    return;
  }
}
