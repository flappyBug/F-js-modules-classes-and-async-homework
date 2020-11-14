const URL = "https://v1.jinrishici.com/all.json";

// eslint-disable-next-line import/prefer-default-export
export const getPoetry = () =>
  fetch(URL)
    .then((response) => response.json())
    .then((poetry) =>
      ["origin", "author", "content"].map((field) => poetry[field])
    );
