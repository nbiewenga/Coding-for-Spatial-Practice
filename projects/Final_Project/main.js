console.log('this works')

//---------- DATASET

const islands = [
  {
    name: "Zealand_Denmark",
    size: "small",
    image:
      "https://user-images.githubusercontent.com/123484377/235378292-5d5cb9ed-ff93-453d-8587-994975b079ce.jpg"
  },
  {
    name: "Flores_Indonesia",
    size: "medium",
    image: "https://user-images.githubusercontent.com/123484377/235378293-708f936d-e0df-4821-ad51-8fbba100e76f.jpg"
  },
  {
    name: "GreatBritain_UnitedKingdom",
    size: "large",
    image:
      "https://user-images.githubusercontent.com/123484377/235378294-9ae3f290-5ed5-443d-b29c-1272b428b289.jpg"
  },
  {
    name: "Hainan_China",
    size: "large",
    image:
      "https://user-images.githubusercontent.com/123484377/235378296-45978b24-668c-4651-8fb6-4f98f1303823.jpg"
  },
  {
    name: "Hispaniola_DominicanRepublicHaiti",
    size: "large",
    image: "https://user-images.githubusercontent.com/123484377/235378297-9cf7c191-26fc-4d00-bfef-c689073ff0d0.jpg"
  }
];

//------------- RENDER ISLANDS TO PAGE
const ul = document.querySelector("ul");

function renderIslandsToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('card', results[i].size) // small
    // add flower name
    let title = document.createElement('h3')
    title.textContent = results[i].name // Hainan_China
    // add island size
    let size = document.createElement('p')
    size.classList.add(results[i].size)
    size.textContent = results[i].size

    // add flower image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(size)
    listItem.appendChild(image)

  }
}
renderIslandsToPage(islands);

//THIS CHUNK IS FILTER BOX
const select = document.querySelector('select')

function filterFn(e) {
  console.log("clicked", e.target.value);
  let filterValue = e.target.value
  
  for (let i = 0; i < cards.length; i++) {
    if(filterValue === "small"){
        // render yellow flowers
      } else if(filterValue === "medium"){
        // render red flowers
      } else if(filterValue === "large"){
        // render blue flowers
      } else {
        // render all flowers
      } 
   }
}

select.addEventListener('change', filterFn)