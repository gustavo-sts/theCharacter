const searchInput = document.querySelector("#search-input");

const searchButton = document.querySelector("#search-submit");

const items = document.querySelectorAll(".library-element");

searchButton.addEventListener("click", () => {
  if (searchInput != "") {
    items.forEach((el) => {
      const titleBox = el.querySelector('div');
      const title = titleBox.querySelector('h2').innerText
      if (
        title
          .toLowerCase()
          .includes(searchInput.value.toLowerCase())
      ) {
        el.style = "display: block";
      } else {
        el.style = "display: none";
      }
    });
  } else {
    alert("O valor do input deve estar preenchido.");
  }
});