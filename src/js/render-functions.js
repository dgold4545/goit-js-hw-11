// ? Галерея і картки зображень
export function createItemMarkup(data) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = data;
  return `<li class="list__card">
            <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
                <ul>
                  <li class="list__card-headers">
                    <h3>Likes</h3>
                    <h4>${likes}</h4>
                  </li>
                  <li class="list__card-headers">
                    <h3>Views</h3>
                    <h4>${views}</h4>
                  </li>
                  <li class="list__card-headers">
                    <h3>Comments</h3>
                    <h4>${comments}</h4>
                  </li>
                  <li class="list__card-headers">
                    <h3>Downloads</h3>
                    <h4>${downloads}</h4>
                  </li>
                </ul>
                </li>`;
}

export function createListMarkup(arr) {
  return arr.map(createItemMarkup).join("");
}

export function createPreLoader() {
  return `<li class='pre-loader'>
    <div class='loader'></div>
  </li>`;
}
