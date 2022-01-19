async function addProducts(url) {
  console.log("url:", url);
  try {
    let response = await fetch(url); //needs to update
    let data = await response.json();
    // console.log("data:", data);
    return data;
    // showData(data);
  } catch (error) {
    console.log("error:", error);
  }
}

// addProducts();
// var dataDiv = document.querySelector("#container");
function showData(item, location) {
  //   console.log("item:", item);
  //   console.log("location:", location);
  item.forEach(function (element) {
    //   console.log("element:", element);
    var div = document.createElement("div");
    div.addEventListener("click", function () {
      let obj = {
        id: id,
      };

      localStorage.setItem("product_id", JSON.stringify("id"));

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

export { addProducts, showData };
