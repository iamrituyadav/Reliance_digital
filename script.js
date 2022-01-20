// document.querySelector("#addprodbtn").addEventListener("click", addProduct);

// let product = (name, price, brand, memory) => {
//   this.id = data.length;
//   this.name = name;
//   this.price = price;
//   this.brand = brand;
//   this.memory = memory;

//   addProduct(product);
// };
// let getdata = await fetch("http://127.0.0.1:3000/api/products");
// let pdata = await response.json();
// console.log(pdata);

async function addProduct() {
  try {
    // let getdata = await fetch("http://127.0.0.1:3000/api/products");
    // let pdata = await response.json();

    let product = {
    //   id: pdata.products.length,
      name: document.querySelector("#name").value,
      image: document.querySelector("#image").value,
      price: +document.querySelector("#price").value,
      brand: document.querySelector("#brand").value,
      color: document.querySelector("#color").value,
      memory: document.querySelector("#memory").value,
      ram: document.querySelector("#ram").value,
      display: document.querySelector("#display").value,
      camera: document.querySelector("#camera").value,
      processor: document.querySelector("#processor").value,
      ossystem: document.querySelector("#ossystem").value,

    };
    let data = JSON.stringify(product);
    let response = await fetch("http://127.0.0.1:3000/api/products", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let d = await response.json();
    console.log(d);
  } catch (err) {
    console.log(err);
  }
}


async function deleteID(){
    try{
        let id = document.getElementById('delId').value

    let response = await fetch(`http://127.0.0.1:3000/api/products/${id}`,{
        method:"DELETE",

        headers: {
            "Content-Type":'application/json'
        }
    })

    let d = await response.json()
    console.log(d)
    }catch(err){
        console.log(err)
    }
}