const phoneSearch = () => {
  const searchInput = document.getElementById("Search-input");
  //error
  const error = document.getElementById("error");
  spinner();
  const SearchValue = searchInput.value;
  searchInput.value = "";
  if (!isNaN(SearchValue)) {
    error.style.display = "block";
  } else {
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${SearchValue}`
    )
      .then((res) => res.json())
      .then((data) => displayPhone(data.data.slice(0,20)));
  }
};
// phoneSearch();
const displayPhone = (search) => {
  const firstCard = document.getElementById("first-card");
  firstCard.textContent = "";
  if(search.length == 0){
    error.style.display = "block";
  }else{
    search.forEach((phone) => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card">
              <img class="w-50 mt-3 img-thumbnail rounded mx-auto" src="${phone.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Brand:${phone.brand}</h4>
                <h5 class="card-text">Phone Name:${phone.phone_name}  </h5>
              </div>
              <button onclick="displayId('${phone.slug}')" class="btn btn-outline-success w-25 mx-auto 
              mb-3">Details</button>
           
          </div>`;
    
        firstCard.appendChild(div);
        block();
      });
  }
  
};
//id show
const displayId = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => detailsDisplay(data.data));
};
//Details show
const detailsDisplay = (show) => {
  //   console.log(show);
  const secendCard = document.getElementById("secend-card");
  secendCard.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card">
          <img class="w-50 mt-3 img-thumbnail rounded mx-auto" src="${
            show.image
          }" class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-text"> ReleaseDate:-${
            show.releaseDate ? show.releaseDate : "No Release Date Found"
          }  </h5><hr>
           <p class="card-title">ChipSet:-${show.mainFeatures.chipSet} </p><hr>
            <p class="card-title">Storage:-${show.mainFeatures.storage} </p><hr>
            <p class="card-title"> displaySize:-${
              show.mainFeatures.displaySize
            }</p><hr>
            <p class="card-title">Memory:-${show.mainFeatures.memory}  </p><hr>
            <h4>Sensors Option</h4>
            <p class="card-title">Sensors:-${show.mainFeatures.sensors} </p><hr>
            <h4>Other Option</h4>
            <p class="card-title">Others Bluetooth:-${
              show.others?.Bluetooth
                ? show.others.Bluetooth
                : "Coming Soon Data..."
            }.. GPS:-${
              show.others?.GPS ? show.others.GPS : "Coming Soon Data..."
            }..USB:-${
              show.others?.USB ? show.others.USB : "Coming Soon Data.."
            }..WLAN:-${
              show.others?.WLAN ? show.others.WLAN : "Coming Soon Data..."
            } ..Radio:-${
              show.others?.Radio ? show.others.Radio : "Coming Soon Data.."
            }.. NFC:-${
              show.others?.NFC ? show.others.NFC : "Coming Soon Data.."
            }  
          </div>
      </div>
   `;
  secendCard.appendChild(div);
};

//spinner
const spinner = () => {
  document.getElementById("spinner").style.display = "block";
};
const block = () => {
  document.getElementById("spinner").style.display = "none";
};
