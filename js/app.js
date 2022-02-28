const phoneSearch = () => {
  const searchInput = document.getElementById("Search-input");
  const SearchValue = searchInput.value;
  searchInput.value = "";
  fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchValue}`)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
};
// phoneSearch();
const displayPhone = (search) => {
  // console.log(search);
  const firstCard = document.getElementById("first-card");
  search.forEach((phone) => {
    // console.log(phone);
    const div = document.createElement("div");
    div.classList.add('col');
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

const displayId=id=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data =>detailsDisplay(data.data))
}

const detailsDisplay=(show)=>{
   console.log(show);
    const secendCard=document.getElementById('secend-card'); 
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="card">
          <img class="w-50 mt-3 img-thumbnail rounded mx-auto" src="${show.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Brand:${show.brand}</h4>
            <h5 class="card-text">Phone Name:${show.phone_name}  </h5>
          </div>
      </div>
   `
  secendCard.appendChild(div); 
    }
        
