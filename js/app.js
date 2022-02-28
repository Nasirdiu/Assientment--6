const phoneSearch = () => {
  const searchInput = document.getElementById("Search-input");
  //error
  const error = document.getElementById("error");
  error.style.display = "none";
  const SearchValue = searchInput.value;
  searchInput.value = "";
  if (!isNaN(SearchValue)) {
    error.style.display = "block";
  } else{
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${SearchValue}`
    )
      .then((res) => res.json())
      .then((data) => displayPhone(data.data));
  }
};
// phoneSearch();
const displayPhone = (search) => {
  const firstCard = document.getElementById("first-card");
  firstCard.textContent = "";
  search.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card ">
          <img class="w-50 mt-3 img-thumbnail rounded mx-auto" src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Brand:${phone.brand}</h4>
            <h5 class="card-text">Phone Name:${phone.phone_name}  </h5>
          </div>
          <button onclick="displayId('${phone.slug}')" class="btn btn-success w-25 mx-auto 
          mb-3">Details</button>
       
      </div>`;

    firstCard.appendChild(div);
  });
};

const displayId = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => detailsDisplay(data.data));
};

const detailsDisplay = (show) => {
  console.log(show);
  const secendCard = document.getElementById("secend-card");
  secendCard.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card">
          <img class="w-50 mt-3 img-thumbnail rounded mx-auto" src="${show.image}" class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-text"> ReleaseDate:-${show.releaseDate}  </h5>
           <p class="card-title">ChipSet:-${show.mainFeatures.chipSet} </p>
            <p class="card-title">Storage:-${show.mainFeatures.storage} </p>
            <p class="card-title"> displaySize:-${show.mainFeatures.displaySize}</p>
            <p class="card-title">Memory:-${show.mainFeatures.memory}  </p>
            <p class="card-title">Sensors:-${show.mainFeatures.sensors} </p>
          
          </div>
      </div>
   `;
  secendCard.appendChild(div);
};
