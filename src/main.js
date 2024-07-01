const refs = {
  form: document.querySelector('.js-form'),
  button: document.querySelector('.sub-btn'),
};

refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.query.value.trim();

  if (!inputValue) {
    return;
  }

  console.log(inputValue);
}
// При натисканні на кнопку відправки форми, додайте перевірку вмісту текстового поля на наявність порожнього рядка, щоб користувач не міг відправити запит, якщо поле пошуку порожнє.
