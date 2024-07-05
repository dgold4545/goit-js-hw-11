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
  return `<li class="gallery">
            <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
            <ul>
              <li>
                <p>Likes</p>
                <p>${likes}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${views}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${comments}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${downloads}</p>
              </li>
            </ul>
          </li>`;
}

export function createListMarkup(arr) {
  return arr.map(createItemMarkup).join("");
}
