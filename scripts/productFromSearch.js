async function addProducts(url) {
  //   console.log("url:", url);
  try {
    var response = await fetch(url);
    var data = await response.json();
    // console.log("data **", data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
}

function showData(item, location) {
  location.innerHTML = null;
  //   console.log("item:", item);
  item.forEach(function (element) {
    var div = document.createElement("div");
    div.addEventListener("click", function () {
      let obj = {
        id: element.id,
      };

      localStorage.setItem("selected_product", JSON.stringify(obj));

      window.location.href = "#";
    });
    var img = document.createElement("img");
    img.src = element.image;
    var name = document.createElement("p");
    name.innerText = element.name;
    var price = document.createElement("p");
    price.innerText = "Price: Rs. " + element.price;
    div.append(img, name, price);
    location.append(div);
  });
}
// carausal start
let caroasoulImg = [
  "https://www.reliancedigital.in/medias/Samsung-Galaxy-Z-Fold3-Flip3-5G-CLP-Banner-10-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNjQxMjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDFiL2g4NC85NzU0MDU2MTYzMzU4LmpwZ3xmMzk2ZWEzOWIwOTI2ODk1YjNiNzY1MGI2MDY5ZmJlODJmZTFlMGI4NjYwYjU1ZjE0OTg1YzczMTllYzhiMDk4",
  "https://www.reliancedigital.in/medias/Moto-E7-Power-CLP-Banner-18-11-2021.jpg?context=bWFzdGVyfGltYWdlc3w2MDg3N3xpbWFnZS9qcGVnfGltYWdlcy9oZDMvaDViLzk2OTE1NTUyNjY1OTAuanBnfDQyMzhhYmY4ZTVhMjhjZGY5ZGRhZWQ3YzE2ODA2NTczZjA1MWNhMTI2ZDU2ZDc1YWYyZmRmOTVhZmU0YTlhZWU",
  "https://www.reliancedigital.in/medias/JioPhone-Next-Carousel-Banner-14-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzUyNTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2gwYy85NzU1ODYxODc2NzY2LmpwZ3xjNDQwYjUxYTFjNjg4NDEzMDEwNzI2NzRkODExZWQ1ZTFlY2IzMjdkYzc3ZTAyZGY1YWVkZjQ3NmQxZjYwYWE1",
  "https://www.reliancedigital.in/medias/OPPO-A12-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTA2MDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDdkL2gwOC85NzUwMjk5MDE3MjQ2LmpwZ3xkZDkyNjc0MDQ4MzlkNzU3NTkxZjI1NDE0NjM3OGVhNDc4NjdhYTQ1Zjk3NTdkNDliNjU0ODJmNDE3MjQzZTcw",
  "https://www.reliancedigital.in/medias/iPhone-13-Carousel-Banner-03-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w1Njk0MnxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaDg3Lzk3NDkxNjI0NTkxNjYuanBnfGUxYWUwYjNkMWUxMzE1OThhNjEwNWZiODA2ZDQ5Nzk1ODgwOGFjZjgzYTdjZjI5YjZiYTI2MDNkMTEyZDU0NzE",
  "https://www.reliancedigital.in/medias/JioExclusive-Offer-CLP-Banner-05-09-2021.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MzR8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2gxNy85NjI4ODkyMjk5Mjk0LmpwZ3wwZjdhOTk5ODY3NzM3Y2M3NWY4ZDgwNzA3MWU4ODhmMTJiODIyNTA0YjUwMzMzZGI2NTI0ZWQ0MGY3MDZjOGNk",
];

let carousol_ind = 0;
function carasoul() {
  if (carousol_ind === caroasoulImg.length - 1) {
    carousol_ind = -1;
  }
  carousol_ind++;
  let img = document.querySelector("#carasolimg");
  img.src = caroasoulImg[carousol_ind];
}

setInterval(carasoul, 5000);

// carousal end

export { addProducts, showData };