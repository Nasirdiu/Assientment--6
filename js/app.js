const phoneSearch = () => {
  const searchInput = document.getElementById("Search-input");
  const SearchValue = searchInput.value;
  searchInput.value = "";
  fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchValue}`)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
};
phoneSearch();
const displayPhone = (search) => {
  // console.log(search);
  const firstCard = document.getElementById("first-card");
  search.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList.add('col');
    div.innerHTML = `
        <div class="card">
          <img class="w-50 mt-3 img-thumbnail rounded mx-auto d-block" src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Brand:${phone.brand}</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
      </div>`;

    firstCard.appendChild(div);
  });
};
