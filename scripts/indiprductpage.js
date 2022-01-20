// let res = await fetch("http://127.0.0.1:3000/api/products/3");
// let prod = await res.json();
// console.log(prod);

// localStorage.setItem("try",JSON.stringify(prod))

// let temp = JSON.parse(localStorage.getItem("try"))

let check = JSON.parse(localStorage.getItem("selected_product"))

let res = await fetch(`http://127.0.0.1:3000/api/products/${check.id}`);
let temp = await res.json();
//Page Tiltle dynamic
document.title = 'Buy'+" "+temp.name

//sectionbar names
let scbrand = document.getElementById('brandNamesc')
scbrand.innerText = temp.brand
let scname = document.getElementById('deviceNamesc')
scname.innerText = temp.name

//Android device images
document.getElementById('myimage').src= temp.image

//key feature details
let name = document.getElementById('deviceName')
name.innerText = temp.name
let price = document.getElementById('mainPrice')
price.innerText = temp.price
let display = document.getElementById('display')
display.innerText = temp.display
let camera = document.getElementById('camera')
camera.innerText = temp.camera
let processor = document.getElementById('processor')
processor.innerText = temp.processor
let ossystem = document.getElementById('ossystem')
ossystem.innerText = temp.ossystem 

// Details under images
let processors = document.getElementById('processors')
processors.innerText = temp.processor
let ossystems = document.getElementById('ossystems')
ossystems.innerText = temp.ossystem 
let cameras = document.getElementById('cameras')
cameras.innerText = temp.camera

//Detailed Specification starts
let color = document.getElementById('color')
color.innerText = temp.color
let brand = document.getElementById('brand')
brand.innerText = temp.brand
let memory = document.getElementById('memory')
memory.innerText = temp.memory
let processordet = document.getElementById('processordet')
processordet.innerText = temp.processor
let osdet = document.getElementById('osdet')
osdet.innerText = temp.ossystem 
let ram = document.getElementById('ram')
ram.innerText = temp.ram 

